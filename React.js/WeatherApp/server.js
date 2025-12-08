const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const weatherData = [
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

app.get("/weather", (req, res) => {
  res.json(weatherData);
});

app.listen(5000, () => {
  console.log("Weather API running on http://localhost:5000/weather");
});
