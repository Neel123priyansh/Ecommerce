import { useNavigate } from "react-router-dom";
import Logo from '../../assets/Logo.jpg';

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="fixed z-10 w-[92%] mx-auto left-0 right-0 top-5 flex justify-between items-center bg-white border-2 rounded-full h-20 shadow-lg px-8">
      
      {/* Logo and Title */}
      <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
        <h1 className="ml-4 text-2xl font-bold text-black">
          SMART बाज़ार
        </h1>
      </div>
      
      {/* Navigation Menu */}
      <ul className="flex font-work-sans text-lg gap-10 items-center">
        <li
          onClick={() => navigate("/")}
          className="p-4 w-36 rounded-full transition-all duration-300 ease-in-out hover:bg-black hover:text-white text-center cursor-pointer"
        >
          Home
        </li>
        <li
          onClick={() => navigate("/product")}
          className="p-4 w-36 rounded-full transition-all duration-300 ease-in-out hover:bg-black hover:text-white text-center cursor-pointer"
        >
          Product
        </li>
        <li
          onClick={() => navigate("/login")}
          className="p-4 w-36 rounded-full transition-all duration-300 ease-in-out hover:bg-black hover:text-white text-center cursor-pointer"
        >
          Login
        </li>
        <li
          onClick={() => navigate("/Reg")}
          className="p-4 w-36 rounded-full transition-all duration-300 ease-in-out hover:bg-black hover:text-white text-center cursor-pointer"
        >
          Register
        </li>
      </ul>
    </div>
  );
}
