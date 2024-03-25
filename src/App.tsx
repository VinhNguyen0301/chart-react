import { useState } from "react";
import "./App.css";
import Page from "./components/Page/Page";
import BarChart from "./components/BarChart/BarChart";
import WorldMap from "./components/WorldMap/WorldMap";
import Card from "./components/UI/Card";

function App() {
  return (
    <div className="root-container">
      {/* <div className="content">
        <div className="chart-container">
          <BarChart />
        </div>
        <div className="map-container">
          <WorldMap />
        </div>
      </div> */}
      <div className="card-column">
        <Card />
      </div>
      <div className="card-column">
        <Card />
      </div>
    </div>
  );
}

export default App;
