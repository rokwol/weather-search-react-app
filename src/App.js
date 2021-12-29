import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> Weather App</h1>
        <Weather />
        <footer>
          This project was coded by Roksolana Woloszyn and is open-sourced{" "}
          <a
            href="https://github.com/rokwol/weather-search-react-app"
            target="_blank"
            rel="noreferrer"
          >
            on Github.
          </a>
        </footer>
      </div>
    </div>
  );
}
