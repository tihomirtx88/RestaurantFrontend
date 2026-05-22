import { deleteMenuItem, get_menu } from "../../api/menu";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { MenuItem } from "../../types/menu";

function MenuManager() {
  const queryClient = useQueryClient();

  const { data: items, isLoading } = useQuery({
    queryKey: ["menu"],
    queryFn: () => get_menu(),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteMenuItem,

    onMutate: async (id) => {
      // cancel outgoing refetches
      await queryClient.cancelQueries({
        queryKey: ["menu"],
      });

      // snapshot previous data
      const previousItems = queryClient.getQueryData<MenuItem[]>(["menu"]);

      //optimistic udpate
      queryClient.setQueryData(["menu"], (old: MenuItem[] | undefined) =>
        old?.filter((item) => item.id !== id),
      );

      // return rollback context
      return { previousItems };
    },

    onError: (_err, _id, context) => {
      toast.error("Delete failed");

      queryClient.setQueryData(["menu"], context?.previousItems);
    },


    onSuccess: () => {
      toast.success("Deleted");
    },

    // ALWAYS REFRESH
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["menu"],
      });
    },
  });

  if (isLoading) return <Loader />;

  return (
    <>
      {items?.map((item) => (
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
              onClick={() => deleteMutation.mutate(item.id)}
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
