import { useEffect, useState } from "react";
import { get_menu } from "../../api/menu";
import Loader from "../../components/Loader";
import type { MenuItem } from "../../types/menu";

function MenuManager() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    get_menu()
      .then(setItems)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="container py-5">
      <h2>Menu Manager</h2>

      {items.map((item) => (
        <div key={item.id} className="border p-2 my-2">
          <strong>{item.name}</strong>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default MenuManager;
