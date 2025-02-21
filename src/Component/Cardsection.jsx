import Cards from "./Cards";

const Cardsection = ({ conData, theme }) => {
  return (
    <div className="flex justify-center flex-wrap my-1">
      <Cards
        key={conData.name.common}
        name={conData.name.common}
        flag={conData.flags.png}
        population={conData.population}
        region={conData.region}
        capital={conData.capital?.[0]}
        theme={theme}
      />
    </div>
  );
};

export default Cardsection;
