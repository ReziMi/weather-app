import React, {useState} from "react";
import axios from "axios";

function App() {
  // const url=`https://api.openweathermap.org/data/2.5/forecast?q=london&appid=8d014cf53186113d79860b03d2a3f913`

  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>London</p>
          </div>
          <div className="temp">
            <h1>65F</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        
        <div className="bottom">
          <div className="feels">
            <p>60F</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            <p>12mph</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
