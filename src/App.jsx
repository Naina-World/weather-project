import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({
    temperature: "",
    windSpeed: "",
    weather: "",
  });

  const Api_Key = "1fdbf0a2f50cd3d40b9b0a5017429296";
  const Api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}`;
  function getweather(e) {
    console.log("clicked");
    e.preventDefault();
    fetch(Api)
      .then((res) => res.json())
      .then((resp) => {
        setWeather({
          temperature: `${resp.main.temp} - 273`,
          windSpeed: `${resp.wind.speed}- m/s`,
          weather: `${resp.weather[0].description}`,
        });
        console.log(resp);
      });
  }

  return (
    <>
      <form onSubmit={getweather}>
        <h1>Weather forecast</h1>
        <input
          type="text"
          placeholder="Enter your City"
          onChange={(e) => setCity(e.target.value)}
        />

        <button type="submit">Get Weather</button>
        <div> Temperature: {weather.temperature}</div>
        <div> WindSpeed: {weather.windSpeed}</div>
        <div> Weather: {weather.weather}</div>
      </form>
    </>
  );
}

export default App
