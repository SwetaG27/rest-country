import { FaSearch } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../Themecontext";

const Searchbar = ({ value, inputChange }) => {
  const { theme } = useContext(ThemeContext);

  function handleChange(e) {
    inputChange(e.target.value);
  }

  return (
    <div className="ml-5 mt-10 mr-5 -mb-10 lg:ml-0 2xl:-ml-5">
      <div
        className={`flex pl-5 py-3 shadow-md mb-12 rounded-lg 
          ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}
        `}
      >
        <FaSearch
          className={`mt-2 mr-5 ${
            theme === "dark" ? "text-white" : "text-gray-500"
          }`}
        />
        <input
          placeholder="Search for a country..."
          className={`text-lg w-full outline-none bg-transparent
            ${
              theme === "dark"
                ? "text-white placeholder-white"
                : "text-black placeholder-[hsl(200, 15%, 8%)]"
            }
          `}
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Searchbar;
