import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { updateMenuItem } from "../../api/menu";
import { toast } from "react-toastify";

type FormData = {
  name: string;
  price: number;
};

function EditMenuItem() {
  const { id } = useParams();
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = async (data:FormData) => {
    try {
      await updateMenuItem(Number(id), data);
      toast.success("success updated");
    } catch (error) {
      toast.error("Error");
      console.log(error);
    }
  };

  return (
    <div className="container py-5">
      <h2>Edit Item</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} className="form-control my-2" />
        <input {...register("price")} className="form-control my-2" />

        <button className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}

export default EditMenuItem;
