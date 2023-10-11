"use client";
import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";
import Swal from "sweetalert2";

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const url = "https://apimongodb.barzdev.repl.co";

  const removeTopic = async () => {
    Swal.fire({
      icon: "warning",
      title: "Remove Task?",
      showConfirmButton: false,
      showDenyButton: true,
      showCancelButton: true,
      denyButtonText: "Remove",
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isDenied) {
        Swal.fire({ icon: "error", title: "Task Removed" });
        const res = await fetch(`${url}/api/topics/${id}`, {
          method: "DELETE",
        });
        if (res.ok) {
          router.refresh();
        }
      }
    });
  };

  return (
    <button onClick={removeTopic} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
}
