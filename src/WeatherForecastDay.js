import React from "react";

export default function WeatherForecastDay(props) {
  let description = props.data.weather[0].description;
  let iconUrl = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div className="weatherForecastDay"> {day()} </div>
      <img src={iconUrl} alt={description} className="weatherForecastIcon" />
      <div className="weatherForecastTemps">
        <span className="weatherForecastTempMax">{maxTemperature()}</span>
        <span className="weatherForecastTempMin">{minTemperature()}</span>
      </div>
    </div>
  );
}
