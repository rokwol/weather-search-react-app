import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="weatherForecastDay">Mon </div>
          <img src={props.info.iconUrl} className="weatherForecastIcon" />
          <div className="weatherForecastTemps">
            <span className="weatherForecastTempMax"> 0°C </span>{" "}
            <span className="weatherForecastTempMin">-7°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
