import { useEffect, useState } from "react";
import type { MenuItem } from "../types/menu";
import { get_menu } from "../api/menu";

export function useMenu(category: string) {
  const [items, setitems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {

      setLoading(true);

      const data = await get_menu(category);

      setitems(data);
      setLoading(false);
    };

    fetchData();

  }, [category]);

  return {items, loading}
}
