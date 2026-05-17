import { useEffect, useState } from "react";
import { deleteMenuItem, get_menu } from "../../api/menu";
import Loader from "../../components/Loader";
import type { MenuItem } from "../../types/menu";
import { toast } from "react-toastify";

function MenuManager() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    get_menu()
      .then(setItems)
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deleteMenuItem(id);
      toast.success("Deleted");

      setItems((prev) => prev.filter((i) => i.id !== id));
    } catch (error) {
      toast.error("Error deleting");
      console.log(error);
    }
  };

  if (loading) return <Loader />;

  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className="border p-3 my-3 rounded bg-white d-flex justify-content-between align-items-center"
        >
          {/* LEFT SIDE */}
          <div>
            <strong>{item.name}</strong>
            <p className="mb-0">${item.price}</p>
          </div>

          {/* RIGHT SIDE */}
          <div className="d-flex align-items-center gap-2">
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>

            <a
              href={`/admin/menu/edit/${item.id}`}
              className="btn btn-warning btn-sm"
            >
              Edit
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default MenuManager;
