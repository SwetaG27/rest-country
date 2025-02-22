import { useContext } from "react";
import { ThemeContext } from "../Themecontext";

const Cards = ({ name, flag, population, region, capital }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`w-64 rounded-lg shadow-lg overflow-hidden m-4 transition-all 
          ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}
        `}
    >
      <img
        src={flag}
        alt={`${name}-flag`}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="font-bold text-xl mt-5 mb-4">{name}</h2>
        <p>
          <strong>Population:</strong> {population.toLocaleString()}
        </p>
        <p>
          <strong>Region:</strong> {region}
        </p>
        <p className="mb-5">
          <strong>Capital:</strong> {capital ? capital : "NA"}
        </p>
      </div>
    </div>
  );
};

export default Cards;
