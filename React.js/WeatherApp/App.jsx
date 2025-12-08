import React, { useEffect, useState } from "react";

function App() {
  // Default data shown before API runs
  const defaultWeather = [
    {
      day: "Friday",
      date: "March 1st, 1:00 pm",
      weather: "sunny",
      temp: 35,
      desc: "clear sky"
    },
    {
      day: "Saturday",
      date: "March 2nd, 1:00 pm",
      weather: "cloudy",
      temp: 36,
      desc: "light rain"
    },
    {
      day: "Sunday",
      date: "March 3rd, 1:00 pm",
      weather: "rainy",
      temp: 36,
      desc: "broken clouds"
    },
    {
      day: "Monday",
      date: "March 4th, 1:00 pm",
      weather: "sunny",
      temp: 34,
      desc: "clear sky"
    },
    {
      day: "Tuesday",
      date: "March 5th, 1:00 pm",
      weather: "cloudy",
      temp: 26,
      desc: "scattered clouds"
    }
  ];

  const [weatherData, setWeatherData] = useState(defaultWeather);

  // Convert weather to bootstrap icon
  const getIcon = (type) => {
    switch (type) {
      case "sunny":
        return <i className="bi bi-brightness-high-fill" style={{ fontSize: "38px" }}></i>;
      case "cloudy":
        return <i className="bi bi-cloud-fill" style={{ fontSize: "38px" }}></i>;
      case "rainy":
        return <i className="bi bi-cloud-rain-fill" style={{ fontSize: "38px" }}></i>;
      case "cold":
        return <i className="bi bi-snow" style={{ fontSize: "38px" }}></i>;
      default:
        return <i className="bi bi-cloud"></i>;
    }
  };

  // Load from backend
  useEffect(() => {
    fetch("http://localhost:5000/weather")
      .then((res) => res.json())
      .then((data) => setWeatherData(data))
      .catch(() => console.log("Backend not running, using default data"));
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "30px", fontFamily: "Arial" }}>
      <h1>5-Day Forecast.</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          marginTop: "25px",
          flexWrap: "wrap"
        }}
      >
        {weatherData.map((w, index) => (
          <div
            key={index}
            style={{
              width: "180px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px"
            }}
          >
            <h3>{w.day}</h3>
            <small>{w.date}</small>

            <div style={{ margin: "10px 0" }}>{getIcon(w.weather)}</div>

            <h2>{w.temp} °F</h2>
            <p>{w.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
