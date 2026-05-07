import { useForm } from "react-hook-form";
import api from "../../api/axios";
import { toast } from "react-toastify";

function CreateMenuItem() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: unknown) => {
    try {
      await api.post("/menu", data);
      toast.success("Created!");
    } catch (error) {
      toast.error("Error");
      console.log(error);
    }
  };

  return (
    <div className="container py-5">
      <h2>Create Menu Item</h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        <input
          {...register("name")}
          placeholder="Name"
          className="form-control my-2"
        />

        <input
          {...register("price")}
          placeholder="Price"
          className="form-control my-2"
        />

        <button className="btn btn-primary">Create</button>
        
      </form>
    </div>
  );
}

export default CreateMenuItem;
