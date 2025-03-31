import logo from "../assets/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user } = useAuth()
  return (
    <header className="bg-primary p-3 md:p-5 flex flex-wrap gap-4 md:gap-0 justify-between items-center w-full">
      <div className="w-16 md:w-20">
        <img src={logo} alt="Echo's Logo" className="w-full object-contain" />
      </div>
      <div className="w-full md:max-w-1/5 lg:max-w-3/5 flex-1 md:flex-none md:min-w-[300px] lg:min-w-[400px]">
        <div className="bg-secondary rounded-full p-1.5 md:p-2 flex items-center gap-2 transition-colors duration-200">
          <IoSearchOutline className="text-xl md:text-2xl flex-shrink-0 opacity-60 ml-4" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-transparent w-full text-sm md:text-base placeholder:text-[#926B3DBF] min-w-0 mr-4"
            aria-label="Search"
          />
        </div>
      </div>

      
      <div className="flex items-center gap-2 ml-auto md:ml-0 font-poppins">
        <div className="hidden md:block text-right truncate">
          <p className="text-xs md:text-sm text-[#926B3D]">Welcome Back!</p>
          <p className="font-semibold text-sm md:text-base truncate max-w-[150px] lg:max-w-[200px]">
            {user?.name}
          </p>
        </div>
        <div
          className="rounded-full w-8 h-8 md:w-10 md:h-10 bg-white flex-shrink-0"
          aria-label="User profile"
        />
      </div>
    </header>
  );
};

export default Header;
