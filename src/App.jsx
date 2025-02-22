import Homepage from "./Page/Homepage";
import Countrydetail from "./Page/Countrydetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

const App = () => {
  const [restData, setRestData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const json = await response.json();
      setRestData(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Homepage restData={restData} loading={loading} />}
        />
        <Route
          path="/country/:id"
          element={<Countrydetail restData={restData} loading={loading} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
