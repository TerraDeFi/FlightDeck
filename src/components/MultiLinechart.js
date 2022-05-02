import React from "react"
import { Line } from "react-chartjs-2"
import Chart from 'chart.js/auto';
import {typeColors} from '../components/Colors.js'

let labels = ['Jan', 'Feb', 'Mar', 'Apr', 'Mar', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Worth",
      data: [350000, 360000, 400000, 380000, 430000, 420000, 360000, 460000, 520000, 570000, 600000, 750000 ],
      fill: true,
      lineTension: 0.5,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "Investment",
      data: [250000, 250000, 270000, 260000, 280000, 330000, 360000, 290000, 350000, 340000, 300000, 340000 ],
      fill: true,
      lineTension: 0.5,
      backgroundColor: "rgba(245,40,145,0.8)",
      borderColor: "#742774",
    }
  ],
};

const options = {
  legend: {
    display: false
  },
  plugins: {
    datalabels: {
      formatter: (value) => {
        return '';
      }
    }
  }
}

const MultiLinechart = () => {
  return (
    <div className="Linechart">
      <Line data={data} options={options}/>
    </div>
  );
}

export default MultiLinechart
