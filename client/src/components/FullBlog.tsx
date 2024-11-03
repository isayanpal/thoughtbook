import toast from "react-hot-toast";
import { BACKEND_URL } from "../config";
import { Blog } from "../hooks";
import { Avatar } from "./BlogCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const FullBlog = ({ blogDetails }: { blogDetails: Blog }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("You are not logged in");
        return;
      }
      await axios.delete(`${BACKEND_URL}/api/v1/blog/${blogDetails.id}`, {
        headers: {
          Authorization: token,
        },
      });
      toast("Blog deleted successfully", {
        icon: "🗑️",
      });
      navigate("/blogs");
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete blog.");
    }
  };
  return (
    <div>
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-20 max-w-screen-xl">
          <div className="col-span-8">
            <div className="text-3xl font-extrabold">{blogDetails.title}</div>
            <div>{blogDetails.content}</div>
          </div>
          <div className="col-span-4">
            <div className="text-slate-500 text-lg">Author</div>
            <div className="flex items-center gap-2">
              <Avatar name={blogDetails.author.name || "Anonymous"} />
              <div className="text-xl font-bold">
                {blogDetails.author.name || "Anonymous"}
              </div>
            </div>
            <button
              onClick={handleDelete}
              className="mt-4 px-4 py-2 bg-red-500 text-white font-bold rounded"
            >
              Delete Blog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
