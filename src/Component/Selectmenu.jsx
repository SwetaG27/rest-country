const Selectmenu = ({ region, onSelectRegion, theme }) => {
  function handleChange(e) {
    onSelectRegion(e.target.value);
  }
  return (
    <div className="mt-10 ml-5   mb-10 lg:-mr-5 xl:-mr-4 2xl:-mr-9 ">
      <div
        className={`flex px-5 py-3 w-[12rem]  shadow-md rounded-lg ${
          theme === "dark"
            ? "bg-gray-800 text-white "
            : "bg-white text-black "
        }`}
      >
        <select
          className={` pl-2 text-gray-600 text-base rounded-lg block w-full  focus:outline-none ${
            theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-[hsl(200, 15%, 8%)]"
          }`}
          onChange={handleChange}
        >
          <option >Filter by Region</option>
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
    </div>
  );
};

export default Selectmenu;
