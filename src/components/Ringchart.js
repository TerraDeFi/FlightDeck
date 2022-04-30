import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Doughnut, Pie } from "react-chartjs-2";
import { chartColors } from "./Colors";

import "./Ringchart.css";
import { TextCenter } from "react-bootstrap-icons";

const options = {
  legend: {
    display: true,
    position: "right"
  },
  elements: {
    arc: {
      borderWidth: 0
    }
  }
};

const data = {
  maintainAspectRatio: true,
  responsive: true,
  labels: ["Luna", "UST"],
  datasets: [
    {
      data: [200000, 500000],
      backgroundColor: chartColors,
      hoverBackgroundColor: chartColors
    }
  ]
};

function Ringchart() {

  return (
    <div className="Lingchart">
      <div style={styles.relative}>
        <Doughnut
            data={data}
            options={options}
        />
        <div style={styles.pieContainer}>
          {/* <span>Assets</span> */}
        </div>
        <div id="legend" />
      </div>
    </div>
  );
}

const styles = {
  pieContainer: {
    width: "40%",
    height: "40%",
    textAlign: "center",
    top: "-50%",
    left: "50%",
    position: "relative",
    transform: "translate(-50%, -50%)"
  },
  relative: {
    position: "relative"
  }
};

export default Ringchart