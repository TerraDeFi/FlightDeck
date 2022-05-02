import React, { useState } from "react";
import { Chart as ChartJS } from "chart.js"
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import chartColors from './Colors'

ChartJS.register(ChartDataLabels)

const Ringchart = ({}) => {

  const data = [200000, 500000]
  
  // Get sum of data values
  const total = data.reduce((sum, a)=>{
    return sum + a;
  }, 0); // with initial value to avoid when the array is empty

  // RingChart configuration

  const dataset = {
    datasets: [
      {
        data: data,
        backgroundColor: chartColors,
      },
    ],
    labels: ['Luna ', 'UST'],
  };

  const options = {
    legend: {
      display: false
    },
    plugins: {
      datalabels: {
        formatter: (value) => {
          return (value * 100 / total).toFixed(1) + '%'; //doughnut individual value
        },
        color: "red",
        weight: 'bold',
      },
    }
  }

  return (
    <div>
      <Doughnut
        data={dataset}
        options={options}
      />
    </div>
  );
}
export default Ringchart