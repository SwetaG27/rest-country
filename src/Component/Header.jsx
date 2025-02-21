import { IoMoonSharp } from "react-icons/io5";
import { BsMoon } from "react-icons/bs";
const Header = ({ toggleTheme, theme }) => {
  return (
    <div
      className={`flex  justify-around  items-center py-10 shadow-md lg:justify-between ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="font-bold text-lg md:text-2xl lg:ml-20 xl:text-4xl 2xl:ml-52">Where in the world?</h1>

      <div className="flex items-center cursor-pointer lg:mr-24 xl:mr-22 2xl:mr-54" onClick={toggleTheme}>
        {theme === "dark" ? (
          <IoMoonSharp className="" size={20} />
        ) : (
          <BsMoon size={20} />
        )}
        <button className="ml-2 font-medium">Dark Mode</button>
      </div>
    </div>
  );
};

export default Header;
