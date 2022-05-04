import React from "react"
import { Line } from "react-chartjs-2"
import { Chart as ChartJS } from 'chart.js';
import gradient from 'chartjs-plugin-gradient';

import { typeColors } from '../components/Colors.js'

ChartJS.register(gradient);

// function getDaysArray(startDate, count, addFn, interval){

//   addFn = addFn || Date.prototype.addDays;
//   interval = interval || 1;
 
//   var retVal = [];
//   var current = new Date(startDate);
  
//   let cnt = 1;

//   while (cnt <= count) {
//     retVal.push(new Date(current));
//     current = addFn.call(current, interval);
//     cnt++;
//   }
 
//   return retVal;

//  }


// const count = value.length
// const startDate = Date.now();
// const labels = getDaysArray(startDate, count, "", 2)

// ChartJS.defaults.datasets.line.showLine = false;

let dataList = [{"2022-03-04":  0.097}, {"2022-03-04":  0.095}, {"2022-03-04":  0.096}, {"2022-03-04": 0.082}, {"2022-03-04": 0.095}, {"2022-03-04":  0.092}, {"2022-03-04":  0.107}, {"2022-03-04":  0.107}, {"2022-03-04":  0.096}, {"2022-03-04":  0.098}, {"2022-03-04":  0.088}, {"2022-03-04":  0.089},{"2022-03-04": 0.087}, {"2022-03-04":  0.086}, {"2022-03-04":  0.084}, {"2022-03-04":  0.086}, {"2022-03-04":  0.084}, {"2022-03-04":  0.09}, {"2022-03-04":  0.088}, {"2022-03-04":  0.083}, {"2022-03-04":  0.083}, {"2022-03-04":  0.08}, {"2022-03-04":  0.084}, {"2022-03-04":  0.085}, {"2022-03-04": 0.083}, {"2022-03-04":  0.083}, {"2022-03-04":  0.078}, {"2022-03-04":  0.08}, {"2022-03-04":  0.084}, {"2022-03-04":  0.084} ];
let value = [0.097,  0.095,  0.096, 0.082,  0.095,  0.092,  0.107,  0.107,  0.096,  0.098,  0.088,  0.089, 0.087,  0.086,  0.084,  0.086,  0.084,  0.09,  0.088,  0.083,  0.083,  0.08,  0.084,  0.085, 0.083,  0.083,  0.078,  0.08,  0.084,  0.084, 0.084 ];
let labelList = ['03 Mar', "", '05 Mar', "", '07 Mar', "", '09 Mar', "", '11 Mar', "", '13 Mar', "", '15 Mar', "", '17 Mar', "", '19 Mar', "", '21 Mar', "", '23 Mar', "", '25 Mar', "", '27 Mar', "", '29 Mar', "", '31 Mar', "", '02 Apr' ];


const data = {
  labels: labelList,
  datasets: [
    {
      gradient: { // gradient fill for under area of line 
        backgroundColor: {
          axis: 'y',
          colors: {
            0: '#1B1B1B',
            50: '#1A3534',
            // 100: 'red'
          }
        },
        // borderColor: {
        //   axis: 'x',
        //   colors: {
        //     0: 'black',
        //     1: 'white',
        //     2: 'black',
        //     3: 'white'
        //   }
        // }
      },
      label: "Worth",
      data: value,
      fill: true,
      lineTension: 0,
      // backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
  ],
};

const options = {
  scales: {  // set min and max value of Y axis 
    y: {
        // min: 0,
        // max: 1,
    }
  },
  elements: { // remove point in lines
    point:{
        radius: 0
    }
  },
  aspectRatio: 2.5, // set aspectRatio of chart with 2.5
  legend: {
    display: false
  },
  plugins: {
    legend: { // legend in out of chart
      display: false,
    },
    datalabels: {
      formatter: (value) => {
        return '';
      }
    }
  }
}

const Linechart = () => {
  return (
      <Line data={data} options={options}/>
    );
}

export default Linechart
