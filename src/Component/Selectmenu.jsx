import { useContext } from "react";
import { ThemeContext } from "../Themecontext";

const Selectmenu = ({
  region,
  onSelectRegion,
  subRegion,
  onSelectSubregion,
}) => {
  const { theme } = useContext(ThemeContext);
  
  function handleChangeRegion(e) {
    onSelectRegion(e.target.value);
  }

  function handleChangeSubregion(e) {
    onSelectSubregion(e.target.value);
  }

  return (
    <div className="flex flex-wrap">
      <div className="mt-10 ml-5 mb-10 lg:-mr-5 xl:-mr-4 2xl:-mr-9">
        <select
          className={`pl-2 text-gray-600 text-base shadow-md rounded-lg block w-[10rem] h-[3rem] focus:outline-none cursor-pointer ${
            theme === "dark"
              ? "bg-gray-800 text-white"
              : "bg-white text-[hsl(200, 15%, 8%)]"
          }`}
          onChange={handleChangeRegion}
        >
          <option>Filter by Region</option>
          {region.map((regionArr) => (
            <option
              key={regionArr}
              className={`${
                theme === "dark"
                  ? "bg-gray-700 text-white"
                  : "bg-white text-[hsl(200, 15%, 8%)]"
              }`}
            >
              {regionArr}
            </option>
          ))}
        </select>
      </div>

      {subRegion.length > 0 && (
        <div className="mt-10 ml-12 mb-10 lg:-mr-5 xl:-mr-4 2xl:-mr-9">
          <select
            className={`pl-2 text-gray-600 text-base shadow-md rounded-lg block w-[12rem] h-[3rem] focus:outline-none cursor-pointer ${
              theme === "dark"
                ? "bg-gray-800 text-white"
                : "bg-white text-[hsl(200, 15%, 8%)]"
            }`}
            onChange={handleChangeSubregion}
          >
            <option>Filter by subRegion</option>
            {subRegion.map((regionArr) => (
              <option
                key={regionArr}
                className={`${
                  theme === "dark"
                    ? "bg-gray-700 text-white"
                    : "bg-white text-[hsl(200, 15%, 8%)]"
                }`}
              >
                {regionArr}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Selectmenu;
