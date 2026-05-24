import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { updateCategory } from "../api/category";
import { toast } from "react-toastify";
import type { UpdateCategory } from "../types/category";

function EditCategory() {
  const { id } = useParams();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data:UpdateCategory) => {
    try {
      await updateCategory(Number(id), data);
      toast.success("Updated");
    } catch (error) {
      console.log(error);

      toast.error("Error updating");
    }
  };

  return (
    <div className="container py-5">
      <h2>Edit Category</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name")}
          className="form-control my-2"
          placeholder="Category name"
        />

        <button className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}

export default EditCategory;
