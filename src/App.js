import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";

export const WeatherIcons = {
  "01d": "/public/icons/sunny.svg",
  "01n": "/public/icons/night.svg",
  "02d": "/public/icons/day.svg",
  "02n": "/react-weather-app/public/icons/cloudy-night.svg",
  "03d": "/react-weather-app/public/icons/cloudy.svg",
  "03n": "/react-weather-app/public/icons/cloudy.svg",
  "04d": "/react-weather-app/public/icons/perfect-day.svg",
  "04n": "/react-weather-app/public/icons/cloudy-night.svg",
  "09d": "/react-weather-app/public/icons/rain.svg",
  "09n": "/react-weather-app/public/icons/rain-night.svg",
  "10d": "/react-weather-app/public/icons/rain.svg",
  "10n": "/react-weather-app/public/icons/rain-night.svg",
  "11d": "/react-weather-app/public/icons/storm.svg",
  "11n": "/react-weather-app/public/icons/storm.svg",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;


function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9b134961cd22724ad91ae50897199cb3`,
    );
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
