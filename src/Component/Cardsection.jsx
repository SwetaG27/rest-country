import Cards from "./Cards";

const Cardsection = ({ countryData, theme }) => {
  return (
    <div className="flex justify-center flex-wrap my-1">
      <Cards
        key={countryData.name.common}
        name={countryData.name.common}
        flag={countryData.flags.png}
        population={countryData.population}
        region={countryData.region}
        capital={countryData.capital?.[0]}
        theme={theme}
      />
    </div>
  );
};

export default Cardsection;
