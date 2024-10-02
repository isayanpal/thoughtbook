import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="border-b flex items-center justify-between px-10 py-4">
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
        <button
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/signin");
          }}
          type="button"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
        >
          Logout
        </button>
      </div>
    </div>
  );
};
