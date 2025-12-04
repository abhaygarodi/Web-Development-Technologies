import { useState } from "react";
import NewsCard from "./components/NewsCard";
import "./App.css";

function App() {
  const [news, setNews] = useState([
    {
      title: "Trump demands China pay $10 trillion for Covid pandemic",
      body: "Former US President Donald Trump demanded that China pay $10 trillion in damages for Covid-19, accusing Beijing of allowing the virus to spread globally."
    },
    {
      title: "Covid wave will come back again if… : Centre",
      body: "The Health Ministry warned that Covid cases could increase again if people stop following precautions. Vaccination and masks remain essential."
    },
    {
      title: "Pfizer produces 5-times less antibodies against Delta variant",
      body: "A study found that Pfizer vaccine produces lower antibodies against the Delta variant, but still offers strong protection against severe disease."
    }
  ]);

  return (
    <div className="container">
      <h2 className="header">LATEST NEWS</h2>

      <div className="news-box">
        {news.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default App;
