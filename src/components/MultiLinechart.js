import React from "react"
import { Line } from "react-chartjs-2"
import Chart from 'chart.js/auto';
import {typeColors} from '../components/Colors.js'


let labels = ['Jan', 'Feb', 'Mar', 'Apr', 'Mar', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

const data = {
  labels: labels,
  datasets: [
    {
      // z-index by sequence of lines
      gradient: {
        backgroundColor: {
          axis: 'y',
          colors: {
            0: '#111111', // first value
            500000: '#26131D', // second value
          }
        },
      },
      label: "Investment",
      data: [250000, 250000, 270000, 260000, 280000, 330000, 340000, 290000, 350000, 340000, 300000, 340000 ],
      fill: true,
      lineTension: 0.5,
      backgroundColor: "rgba(245,40,145,0.8)",
      borderColor: "#742774",
    },
    {
      gradient: {
        backgroundColor: {
          axis: 'y',
          colors: {
            0: '',
            250000: '#111111', // first value
            1000000: '#082C2A', // second value
          }
        },
      },
      label: "Worth",
      data: [350000, 360000, 400000, 380000, 430000, 420000, 430000, 500000, 520000, 570000, 600000, 750000 ],
      fill: true,
      lineTension: 0.5,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    }
  ],
};

const options = {
  scales: {  
    y: {
        min: 0, // set min and max value of Y axis 
        max: 1000000,
    }
  },
  elements: { 
    point:{
        radius: 0 // remove point in lines
    }
  },
  plugins: { 
    datalabels: {
      formatter: (value) => { 
        return ''; // remove labels of point in lines 
      }
    }
  }
}

const plugin = {

};

const MultiLinechart = () => {
  return (
    <div className="Linechart">
      <Line data={data} options={options} plugin={plugin}/>
    </div>
  );
}

export default MultiLinechart
