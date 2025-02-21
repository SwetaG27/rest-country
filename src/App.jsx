import Header from "./Component/Header";
import Searchbar from "./Component/Searchbar";
import Cardsection from "./Component/Cardsection";
import { useEffect, useState } from "react";
import Selectmenu from "./Component/Selectmenu";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(true);
  const [restData, setRestdata] = useState([]);
  const [filteredData, setFiltereddata] = useState([]);
  const [inputSearch, setInputsearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  
  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  async function fetchdata() {
    setLoading(true);
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const json = await response.json();
      setRestdata(json);
      setFiltereddata(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const regionName = [...new Set(restData.map((list) => list.region))];

  useEffect(() => {
    let filteredCountry = [...restData];

    if (!selectedRegion || selectedRegion.includes("Filter")) {
      filteredCountry = restData;
    } else {
      filteredCountry = filteredCountry.filter(
        (country) => country.region === selectedRegion
      );
    }

    if (inputSearch) {
      filteredCountry = filteredCountry.filter((a) =>
        a.name.common.toLowerCase().includes(inputSearch.toLowerCase())
      );
    }
    setFiltereddata(filteredCountry);
  }, [inputSearch, selectedRegion, restData]);

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } min-h-screen transition-all`}
    >
      <Header toggleTheme={toggleTheme} theme={theme} />

      <div className="container mx-auto md:pl-20 md:pr-25  flex flex-col  sm: sm:flex-row justify-between">
        <Searchbar
          value={inputSearch}
          inputChange={setInputsearch}
          theme={theme}
        />
        <Selectmenu
          region={regionName}
          onSelectRegion={setSelectedRegion}
          theme={theme}
        />
      </div>

      <div className="container mx-auto flex flex-wrap justify-center">
        {loading ? (
          <p className="text-xl font-semibold text-center mt-20">Loading...</p>
        ) : filteredData.length > 0 ? (
          filteredData.map((data, index) => (
            <Cardsection key={index + 1} conData={data} theme={theme} />
          ))
        ) : (
          <p className="text-xl font-semibold text-center mt-20">
            No Result Found.
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
