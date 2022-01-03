import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ loaded: false });

  function handleResponse(response) {
    setWeather({
      loaded: true,
      date: "Sunday, January 2, 2022",
      city: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weather.loaded) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="Submit"
                value="Search"
                className="btn btn-outline-info w-100"
                autoComplete="off"
              />
            </div>
          </div>
        </form>
        <h1>
          {weather.city}, {weather.country}
        </h1>
        <ul>
          <li> {weather.date} </li>
          <li> Last updated: 21:51:08 </li>
          <li className="text-capitalize"> {weather.description}</li>
        </ul>

        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <span className="float-left">
                <img src={weather.iconUrl} alt={weather.description} />
              </span>
              <span className="float-left">
                <span className="temperature">
                  {Math.round(weather.temperature)}
                </span>
                <span className="unit">°C </span>
              </span>
            </div>
          </div>
          <div className="col-6 mt-2">
            <ul>
              <li> Wind: {Math.round(weather.wind)} km/h</li>
              <li> Humidity: {weather.humidity}%</li>
              <li> Pressure: {weather.pressure} hPA</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "a80063ef5edd7b93d32d44b227457f4e";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading ...";
  }
}
