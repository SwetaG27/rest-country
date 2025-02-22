import { useContext } from "react";
import { ThemeContext } from "../Themecontext";

const Sortdropdown = ({  setSortType }) => {
  const { theme } = useContext(ThemeContext);

  function handleChange(e) {
    setSortType(e.target.value);
  }

  return (
    <div className=" mt-10 ml-5 mb-10 lg:-mr-5 xl:-mr-4 2xl:-mr-9">
      <select
        className={`pl-2 text-gray-600 text-base shadow-md rounded-lg block w-[10rem] h-[3rem] focus:outline-none cursor-pointer ${
          theme === "dark"
            ? "bg-gray-800 text-white"
            : "bg-white text-[hsl(200, 15%, 8%)]"
        }`}
        onChange={handleChange}
      >
        <option value="">Sort By</option>

        <option value="population-asc">Population⬆ </option>
        <option value="population-desc">Population⬇ </option>
        <option value="area-asc">Area⬆</option>
        <option value="area-desc">Area⬇ </option>
      </select>
    </div>
  );
};

export default Sortdropdown;
