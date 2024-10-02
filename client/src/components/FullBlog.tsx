import { Blog } from "../hooks";
import { Avatar } from "./BlogCard";
import { Navbar } from "./Navbar";

export const FullBlog = ({ blogDetails }: { blogDetails: Blog }) => {
  return (
    <div>
      <Navbar />
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
          </div>
        </div>
      </div>
    </div>
  );
};
