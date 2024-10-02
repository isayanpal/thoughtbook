import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/blogs"); // Redirect to blogs page if token exists
    } else {
      navigate("/signin"); // Redirect to signin page if no token
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center flex-col gap-3 min-h-screen bg-gray-50">
        <h1 className="text-5xl font-bold text-center mb-4">
          Welcome to THOUGHTBOOK
        </h1>
        <button
          onClick={handleGetStarted}
          className="bg-blue-600 text-white font-medium text-lg px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};
