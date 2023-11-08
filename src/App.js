import { useState } from "react";
import "./App.css";
import WeatherTable from "./App/components/WeatherTable";
import { fetchWeatherForecast } from "./App/requests/requests";
import Loading from "react-simple-loading";
import Header from "./App/components/Header";

function App() {
  const [citySearchTerm, setCitySearchTerm] = useState("");
  const [weatherDataList, setWeatherDataList] = useState([]);
  const [isFetchingWeatherData, setIsFetchingWeatherData] = useState(false);

  const handleSearch = async () => {
    setIsFetchingWeatherData(true);
    if (citySearchTerm) {
      const list = await fetchWeatherForecast(citySearchTerm);
      setWeatherDataList(list);
    }

    setIsFetchingWeatherData(false);
  };

  return (
    <div className="App">
      <Header
        citySearchTerm={citySearchTerm}
        setCitySearchTerm={setCitySearchTerm}
        handleSearch={handleSearch}
      />

      {isFetchingWeatherData && <Loading />}

      <div id="WeatherTableDiv">
        {weatherDataList.length > 0 &&
          weatherDataList.map((weatherDataObj) => (
            <WeatherTable
              key={weatherDataObj.clouds.all} //only unique value found per item in the api res
              weatherDataObj={weatherDataObj}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
