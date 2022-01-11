import React from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = `a80063ef5edd7b93d32d44b227457f4e`;
  let longitude = props.info.coordinates.lon;
  let latitude = props.info.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);
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
