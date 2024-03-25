import { useState } from "react";
import "./App.css";
import Page from "./components/Page/Page";
import BarChart from "./components/BarChart/BarChart";
import WorldMap from "./components/WorldMap/WorldMap";
import Card from "./components/UI/Card";
import Table from "./components/Table/Table";
import { barChartDataDailyTraffic } from "./components/variables/charts";
import { barChartOptionsDailyTraffic } from "./components/variables/charts";

function App() {
  const chartData = [
    {
      name: "Series 1",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 125],
    },
  ];

  const chartOptions = {
    // Define your chart options here
    // For example:
    // xaxis: {
    //   categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September']
    // }
  };

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

      <div className="h-[300px] w-full pt-10 pb-0">
        <BarChart
          chartData={barChartDataDailyTraffic}
          chartOptions={barChartOptionsDailyTraffic}
        />
      </div>
      <div className="card-column">
        <Card />
      </div>

      <div>{/* <Table /> */}</div>
    </div>
  );
}

export default App;
