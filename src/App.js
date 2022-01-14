import "./App.css";
import Weather from "./Weather";
import WeatherFooter from "./WeatherFooter";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Toronto" />
        <small>
          This project was coded by Roksolana Woloszyn and is open-sourced {""}
          <a
            href="https://github.com/rokwol/weather-search-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            on Github.
          </a>
        </small>
      </div>
      <footer>
        <WeatherFooter />
      </footer>
    </div>
  );
}
