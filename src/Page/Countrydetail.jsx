import { useParams, Link } from "react-router-dom";
import Header from "../Component/Header";
import { useContext } from "react";
import { ThemeContext } from "../Themecontext";
import { IoArrowBackSharp } from "react-icons/io5";

const Countrydetail = ({ restData, loading }) => {
  const { id } = useParams();
  const { theme } = useContext(ThemeContext);

  const country = restData.find(
    (countryData) => countryData.name.common.toLowerCase() === id.toLowerCase()
  );

  if (loading) {
    return <h1 className="text-center text-3xl font-bold mt-10">Loading...</h1>;
  }

  if (!country) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold text-red-500">Country Not Found</h1>
        <Link
          to="/"
          className={`flex px-5 py-3  shadow-lg mb-12 mt-10 rounded-sm -ml-52
            ${
              theme === "dark"
                ? "bg-gray-800 text-white"
                : "bg-white text-black"
            }
          `}
        >
          <IoArrowBackSharp /> Back
        </Link>
      </div>
    );
  }

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } min-h-screen transition-all`}
    >
      <Header />

      <div className="container mx-auto md:pl-20 md:pr-25 flex flex-col justify-center items-center lg:items-start">
        <Link
          to="/"
          className={`flex px-5 py-3  shadow-lg mb-20 mt-10 rounded-sm -ml-52 md:self-start md:ml-10 lg:ml-0 lg:mb-15
          ${
            theme === "dark" ? "bg-gray-800 text-white" : "bg-white  text-black"
          }
        `}
        >
          <div className="flex">
            <IoArrowBackSharp size={25} />
            <p className="ml-2 text-lg">Back </p>
          </div>
        </Link>

        <div className="w-[90%] flex flex-col md:flex-row md:justify-between md:items-start gap-16">
          <div className="w-full md:w-1/2">
            <img
              src={country.flags.png}
              alt="Country Flag"
              className="w-full h-[20rem] object-cover rounded-lg"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h1 className="text-3xl font-bold">{country.name.common}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                {country.name.nativeName &&
                  Object.entries(country.name.nativeName)
                    .slice(-1)
                    .map(([code, { common }]) => (
                      <p className="text-lg" key={code}>
                        <strong>Native Name:</strong> {common}
                      </p>
                    ))}

                <p className="text-lg">
                  <strong>Population:</strong>
                  {country.population.toLocaleString()}
                </p>
                <p className="text-lg">
                  <strong>Region:</strong> {country.region}
                </p>
                <p className="text-lg">
                  <strong>Sub Region:</strong> {country.subregion}
                </p>
                <p className="text-lg">
                  <strong>Capital:</strong> {country.capital}
                </p>
              </div>

              <div>
                <p className="text-lg">
                  <strong>Top Level Domain:</strong> {country.tld}
                </p>

                {country.currencies &&
                  Object.entries(country.currencies).map(([code, { name }]) => (
                    <p key={code} className="text-lg">
                      <strong>Currency:</strong> {name}
                    </p>
                  ))}

                <p className="text-lg">
                  <strong>Languages:</strong>
                  {country.languages &&
                    Object.values(country.languages).join(", ")}
                </p>
              </div>
            </div>

            <div className="mt-5">
              <p className="text-lg">
                <strong>Border Countries:</strong>
              </p>
              <div className="flex flex-wrap gap-3">
                {country.borders?.map((borderCode) => {
                  const borderCountry = restData.find(
                    (c) => c.cca3 === borderCode
                  );
                  return (
                    <p
                      key={borderCode}
                      className={`shadow-lg px-6 py-2 rounded-lg text-center
                ${
                  theme === "dark"
                    ? "bg-gray-800 text-white"
                    : "bg-white text-black"
                }`}
                    >
                      {borderCountry ? borderCountry.name.common : borderCode}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countrydetail;
