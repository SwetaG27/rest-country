import Header from "../Component/Header";
import Searchbar from "../Component/Searchbar";
import Cardsection from "../Component/Cardsection";
import { useEffect, useState, useContext } from "react";
import Selectmenu from "../Component/Selectmenu";
import Sortdropdown from "../Component/Sortdropdown";
import { ThemeContext } from "../Themecontext";
import { Link } from "react-router-dom";

const Homepage = ({ restData, loading }) => {
  const { theme } = useContext(ThemeContext);
  const [filteredData, setFiltereddata] = useState([]);
  const [inputSearch, setInputsearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedSubregion, setSelectedSubRegion] = useState("");
  const [sortedData, setSortedData] = useState([]);
  const [sortType, setSortType] = useState("");

  const regionName = [...new Set(restData.map((list) => list.region))];

  const subRegionName = [
    ...new Set(
      restData
        .filter((list) => list.region === selectedRegion)
        .map((regionlist) => regionlist.subregion)
    ),
  ].filter(Boolean);

  useEffect(() => {
    let filteredCountry = [...restData];

    if (selectedRegion && !selectedRegion.includes("Filter")) {
      filteredCountry = filteredCountry.filter(
        (country) => country.region === selectedRegion
      );
    }

    if (selectedSubregion) {
      filteredCountry = filteredCountry.filter(
        (country) => country.subregion === selectedSubregion
      );
    }

    if (inputSearch) {
      filteredCountry = filteredCountry.filter((a) =>
        a.name.common.toLowerCase().includes(inputSearch.toLowerCase())
      );
    }

    setFiltereddata(filteredCountry);
  }, [inputSearch, selectedRegion, selectedSubregion, restData]);

  useEffect(() => {
    let sorted = [...filteredData];

    switch (sortType) {
      case "population-asc":
        sorted.sort((a, b) => a.population - b.population);
        break;
      case "population-desc":
        sorted.sort((a, b) => b.population - a.population);
        break;
      case "area-asc":
        sorted.sort((a, b) => a.area - b.area);
        break;
      case "area-desc":
        sorted.sort((a, b) => b.area - a.area);
        break;
      default:
        break;
    }

    setSortedData(sorted);
  }, [sortType, filteredData]);

  useEffect(() => {
    setSelectedSubRegion("");
  }, [selectedRegion]);

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } min-h-screen transition-all`}
    >
      <Header />

      <div className="container mx-auto md:pl-20 md:pr-25 flex flex-col flex-wrap sm:flex-row justify-between">
        <Searchbar value={inputSearch} inputChange={setInputsearch} />

        <div className="flex flex-wrap md:gap-5">
          <Selectmenu
            region={regionName}
            onSelectRegion={setSelectedRegion}
            subRegion={subRegionName}
            onSelectSubregion={setSelectedSubRegion}
          />
          <Sortdropdown sortType={sortType} setSortType={setSortType} />
        </div>
      </div>

      <div className="container mx-auto flex flex-wrap justify-center">
        {loading ? (
          <p className="text-xl font-semibold text-center mt-20">Loading...</p>
        ) : sortedData.length > 0 ? (
          sortedData.map((data, index) => (
            <Link key={data.name.common} to={`/country/${data.name.common}`}>
              <Cardsection countryData={data} />
            </Link>
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

export default Homepage;
