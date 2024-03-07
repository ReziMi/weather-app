import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({
    city: { name: "Tbilisi" },
    list: [
      {
        main: { temp: 0, feels_like: 0, humidity: 0 },
        weather: [{ description: "Clear" }],
        wind: { speed: 0 }
      }
    ]
  });
  const [location, setLocation] = useState("Tbilisi");

  const apiKey = "8d014cf53186113d79860b03d2a3f913";

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`;
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [location, apiKey]);

  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(2);
  };

  const mphToKmh = (mph) => {
    return (mph * 1.60934).toFixed(2);
  };

  return (
    <div className="App">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          type="text"
          placeholder="Enter Location"
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              setLocation(event.target.value);
            }
          }}
        />
      </div>

      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.city.name}</p>
          </div>
          <div className="temp">
            <h1>{kelvinToCelsius(data.list[0].main.temp)}°C</h1>
          </div>
          <div className="description">
            <p>{data.list[0].weather[0].description}</p>
          </div>
        </div>

        <div className="bottom">
          <div className="feels">
            <p className="bold">{kelvinToCelsius(data.list[0].main.feels_like)}°C</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">{data.list[0].main.humidity}%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">{mphToKmh(data.list[0].wind.speed)} km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
