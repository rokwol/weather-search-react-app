import React from "react";
import "./Weather.css";

export default function Weather() {
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
              className="btn btn-primary w-100"
              autoComplete="off"
            />
          </div>
        </div>
      </form>
      <h1>Toronto, Canada</h1>
      <ul>
        <li> Wednesday, December 29, 2021 </li>
        <li> Last updated: 21:51:08 </li>
        <li> Mist</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <span className="float-left">
              <img
                src="http://openweathermap.org/img/wn/50n@2x.png"
                alt="Mist icon"
              />
            </span>
            <span className="float-left">
              <span className="temperature">4 </span>
              <span className="unit">°C </span>
            </span>
          </div>
        </div>
        <div className="col-6 mt-2">
          <ul>
            <li> Wind: 4 km/h</li>
            <li> Humidity: 95%</li>
            <li> Pressure: 1012 hPA</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
