const Selectmenu = ({ region, onSelectRegion, theme }) => {
  function handleChange(e) {
    onSelectRegion(e.target.value);
  }
  return (
    <div className="mt-10 ml-5   mb-10 lg:-mr-5 xl:-mr-4 2xl:-mr-9 ">
      <select
        className={`pl-2  text-gray-600 text-base shadow-md rounded-lg block w-[12rem] h-[3rem] focus:outline-none cursor-pointer ${
          theme === "dark"
            ? "bg-gray-800 text-white"
            : "bg-white text-[hsl(200, 15%, 8%)]"
        }`}
        onChange={handleChange}
      >
        <option>Filter by Region</option>
        {region.map((regionArr) => (
          <option
            key={regionArr}
            className={` ${
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
  );
};

export default Selectmenu;
