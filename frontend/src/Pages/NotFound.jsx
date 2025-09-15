import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Copyright from "../Components/Copyright";

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 text-gray-900 p-6">
      <div className="max-w-md w-full rounded-xl backdrop-blur bg-white/30 border border-white/20 shadow-lg p-8 text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-black">ERROR 404</h1>
        <p className="text-gray-700 italic font-medium">Page not found</p>
        
        <Link to="/dashboard">
          <button className="flex items-center justify-center place-self-center-safe gap-2 bg-black text-white px-5 py-2 rounded-lg shadow hover:bg-gray-800 transition my-7">
            <FaArrowLeft /> Go to Dashboard
          </button>
        </Link>
        <Copyright />
      </div>
    </div>
  );
}
