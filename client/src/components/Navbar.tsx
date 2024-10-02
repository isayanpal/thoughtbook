import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export const Navbar = () => {
  return (
    <div className="border-b flex items-center justify-between px-10 py-6">
      <div className="font-bold text-xl cursor-pointer">
        <Link to={"/blogs"}>Thought Book</Link>
      </div>

      <div>
        <Link to={"/publish"}>
          <button
            type="button"
            className=" pr-8focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-xl text-sm px-5 py-2.5 me-2 mb-2"
          >
            New
          </button>
        </Link>
        <Avatar name="sayan" />
      </div>
    </div>
  );
};
