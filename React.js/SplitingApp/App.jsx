import NewsContent from "./components/NewsContent";

function App() {
  return (
    <div>
      <h1>Top News</h1>

      <NewsContent
        title="India launches new satellite"
        body="ISRO successfully launched the latest communication satellite from Sriharikota."
        author="Abhay Garodi"
      />

      <NewsContent
        title="Tech companies start mass hiring"
        body="Top MNCs have announced large-scale hiring for freshers in software and IT roles."
        author="Chhavi Mam"
      />

      <NewsContent
        title="Rain expected this week"
        body="Meteorological department predicts heavy rainfall in several parts of the country."
        author="Weather Dept"
      />
    </div>
  );
}

export default App;
