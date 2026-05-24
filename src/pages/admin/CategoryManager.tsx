import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import type { Category } from "../../types/category";
import {
  createCategory,
  deleteCategory,
  getCategories,
} from "../../api/category";
import { toast } from "react-toastify";

function CategoryManager() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");

  useEffect(() => {
    getCategories()
      .then(setCategories)
      .finally(() => setLoading(false));
  }, []);

  const handleCreate = async () => {
    if (!name.trim()) {
      return toast.error("Category name required");
    }

    try {
      const res = await createCategory({
        name,
      });

      toast.success("Category created");

      setCategories((prev) => [...prev, res.data]);

      setName("");
    } catch (error) {
      toast.error("Error creating category");
      console.log(error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteCategory(id);

      toast.success("Deleted");

      setCategories((prev) => prev.filter((cat) => cat.id !== id));
    } catch (error) {
      toast.error("Error deleting");
      console.log(error);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="container py-5">
      <h2 className="mb-4">Category Manager</h2>

      {/* CREATE FORM */}
      <div className="d-flex gap-2 mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Category name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button className="btn btn-primary" onClick={handleCreate}>
          Create
        </button>
      </div>

      {/* CATEGORY LIST */}
      {categories.map((cat) => (
        <div
          key={cat.id}
          className="border p-3 my-2 rounded bg-white d-flex justify-content-between align-items-center"
        >
          <div>
            <strong>{cat.name}</strong>
          </div>

          <div className="d-flex gap-2">
            <a
              href={`/admin/categories/edit/${cat.id}`}
              className="btn btn-warning btn-sm"
            >
              Edit
            </a>

            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDelete(cat.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryManager;
