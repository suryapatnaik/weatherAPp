import axios from "axios";

const appId = "1635890035cbba097fd5c26c8ea672a1";
const baseUrl = "https://api.openweathermap.org/";
const endpointForecast = "data/2.5/forecast";
const endpointGeo = "geo/1.0/direct";
const countryCode = "IND";
const units = "metric";
const cntNum = 5;

const getForecastApiConfig = (lat, lon) => ({
  params: {
    lat,
    lon,
    appid: appId,
    cnt: cntNum,
    units: units,
  },
});

const getGeoApiConfig = (cityName) => ({
  params: {
    q: `${cityName}, ${countryCode}`,
    appid: appId,
  },
});

const getCoordsByCityName = async (cityName) => {
  const geoApiRes = await axios.get(
    baseUrl + endpointGeo,
    getGeoApiConfig(cityName)
  );
  return geoApiRes.data[[0]];
};

export const fetchWeatherForecast = async (cityName) => {
  try {
    const { lat, lon } = await getCoordsByCityName(cityName);

    const weatherForecastRes = await axios.get(
      baseUrl + endpointForecast,
      getForecastApiConfig(lat, lon)
    );
    return weatherForecastRes.data.list;
  } catch (err) {
    return [];
  }
};
