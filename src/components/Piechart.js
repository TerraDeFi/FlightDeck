import React, { useState } from "react";
import { Chart as ChartJS } from "chart.js"
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Colors from './Colors'

ChartJS.register(ChartDataLabels)

const Piechart = ({ data }) => {
  const values = data.map((token) => {
      return token.amount
    })
  
  const labels = data.map((token) => {
    return token.name
  })

  // Get sum of data values
  const total = values.reduce((sum, a)=>{
    return sum + parseInt(a);
  }, 0); // with initial value to avoid when the array is empty

  const labelColor = "white"
    
  // RingChart configuration
  const dataset = {
    datasets: [
      {
        data: values,
        backgroundColor: Colors.Purple,
      },
    ],
    labels: labels,
  };

  const options = {
    plugins: {
      legend: { // legend in out of chart
        display: false,
      },
      datalabels: { // 
        formatter: (value) => {
          return (value * 100 / total).toFixed(1) + '%'; // doughnut individual value
        },
        color: labelColor, // doughnut individual label color
        weight: 'bold',
        font: {
          size: 14
        }
      },
    }
  }

  const plugins = [{
    beforeDraw: function(chart) {
     var width = chart.width,
         height = chart.height,
         ctx = chart.ctx;
         ctx.restore();
         var fontSize = (height / 160).toFixed(2);
         ctx.font = fontSize + "em sans-serif #fff";
         ctx.textBaseline = "top";
         var text = "Assets",
         textX = Math.round((width - ctx.measureText(text).width) / 2),
         textY = height / 2;
         ctx.fillText(text, textX, textY);
         ctx.save();
    } 
  }]

  return (
    <div>
      <Pie
        data={dataset}
        options={options}
        plugins={plugins}
      />
    </div>
  );
}

export default Piechart