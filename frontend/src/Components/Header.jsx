import { Link } from "react-router-dom";
import EboxzLogo from "../Components/EboxzLogo";
import { FaBars } from "react-icons/fa";

export default function Header() {
  return (
        <header className="mb-8">
          <div className="flex items-center mb-6 space-x-[45vw]">
            <EboxzLogo className="w-30 h-20" />
            <div className="flex items-center space-x-4">
                <button className="p-2 text-sm font-bold text-white bg-black rounded-sm">Register</button>
                <FaBars className="text-2xl inline" />
            </div>
          </div>
        </header>
  );
}