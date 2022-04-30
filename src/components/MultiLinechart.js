import React from "react";
import "./Linechart.css";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'

let labels = [];

const plugin = {
//   id: 'custom_canvas_background_color',
//   beforeDraw: (chart) => {
//     const ctx = chart.canvas.getContext('2d');
//     ctx.save();
//     ctx.globalCompositeOperation = 'destination-over';
//     ctx.fillStyle = 'black';
//     ctx.fillRect(0, 0, chart.width, chart.height);
//     ctx.restore();
//   },
//   legend: {
//     title: {
//       display: false,
//       text: 'Legend Title',
//     }
//   }
};

// const DATA_COUNT = 7;
// const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};
// const data = {
//   labels: Utils.months({count: DATA_COUNT}),
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: Utils.numbers(NUMBER_CFG),
//       fill: false,
//       borderColor: Utils.CHART_COLORS.red,
//       backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
//     },
//   ]
// };

const data = {
  labels: labels,
  datasets: [
    {
      label: "Worth",
      data: [{x:'2022-01-02', y:350000}, {x:'2022-03-01', y:360000}, {x:'2022-03-02', y:400000}, {x:'2022-04-02', y:380000}, {x:'2022-05-02', y:430000}, {x:'2022-06-02', y:420000}, {x:'2022-07-02', y:360000}, {x:'2022-08-02', y:460000}, {x:'2022-09-02', y:520000}, {x:'2022-10-02', y:570000}, {x:'2022-11-02', y:600000}, {x:'2022-12-02', y:750000}, ],
      fill: true,
      lineTension: 0.5,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
      // legend:{
      //   display: true,
      //   position: 'right',
      // }
    },
    {
      label: "Investment",
      data: [{x:'2022-01-02', y:250000}, {x:'2022-03-01', y:250000}, {x:'2022-03-02', y:270000}, {x:'2022-04-02', y:260000}, {x:'2022-05-02', y:280000}, {x:'2022-06-02', y:330000}, {x:'2022-07-02', y:360000}, {x:'2022-08-02', y:290000}, {x:'2022-09-02', y:350000}, {x:'2022-10-02', y:340000}, {x:'2022-11-02', y:300000}, {x:'2022-12-02', y:340000}, ],
      fill: true,
      lineTension: 0.5,
      backgroundColor: "rgba(245,40,145,0.8)",
      borderColor: "#742774",
      // legend:{
      //   display: true,
      //   position: 'right',
      // }
    }
  ],
  legend: {
    position: "right"
  },
  options: {
    plugins: {
      legend: {
        // textAlign: 'right'
      }
    }
  }
};

const options = {
  plugins: {
    legend: {
      textAlign: 'right'
    }
  }
}

const LineChart = () => {
  return (
    <div className="Linechart">
      <Line data={data} plugins={plugin} options={options}/>
    </div>
  );
}

export default LineChart
