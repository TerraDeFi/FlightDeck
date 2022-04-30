import {Doughnut} from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const counter = {
  id: 'counter',
  beforeInit: function (chart) {
    // Get reference to the original fit function
    const originalFit = chart.legend.fit;
    // Override the fit function
    chart.legend.fit = function fit() {
    // Call original function and bind scope in order to use `this` correctly inside it
    originalFit.bind(chart.legend)();
    this.height += 35;
    };
  }
}

var DATA_COUNT = 10;
var labels = [];
for (var i = 0; i < DATA_COUNT; ++i) {
  labels.push('' + i);
}

Chart.register(ChartDataLabels, counter);


const data = {
  labels: ['Luna','UST'],
  datasets: [
      {
          label: 'Attendance for Week 1',
          data: [200000, 500000],
          borderColor: ['rgba(255,206,86,0.2)'],
          backgroundColor: ['#0DCAF0', '#C72377' ],
          pointBackgroundColor: 'rgba(255,206,86,0.2)',
      }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
      title: {
          display: false,
          text: 'Doughnut Chart',
          color:'blue',
          font: {
              size:34
          },
          padding:{
              top:30,
              bottom:30
          },
          responsive:true,
          animation:{
              animateScale: true,
                         }
      },
      labels: {
        render: 'percentage',
        fontColor: ['green', 'white', 'red'],
        precision: 2
      }
  }

}

function Ringchart() {
  return (
    <div>
        <Doughnut data={data} options={options} />
    </div>
  )
}

export default Ringchart


// {
//   type: 'doughnut',
//   data: {
//     labels: labels,
//     datasets: [{
//       backgroundColor: Utils.colors({
//         color: Utils.color(0),
//         count: DATA_COUNT
//       }),
//       data: Utils.numbers({
//         count: DATA_COUNT,
//         min: 0,
//         max: 100
//       }),
//       datalabels: {
//         anchor: 'end'
//       }
//     }, {
//       backgroundColor: Utils.colors({
//         color: Utils.color(1),
//         count: DATA_COUNT
//       }),
//       data: Utils.numbers({
//         count: DATA_COUNT,
//         min: 0,
//         max: 100
//       }),
//       datalabels: {
//         anchor: 'center',
//         backgroundColor: null,
//         borderWidth: 0
//       }
//     }, {
//       backgroundColor: Utils.colors({
//         color: Utils.color(2),
//         count: DATA_COUNT
//       }),
//       data: Utils.numbers({
//         count: DATA_COUNT,
//         min: 0,
//         max: 100
//       }),
//       datalabels: {
//         anchor: 'start'
//       }
//     }]
//   },
//   options: {
//     plugins: {
//       datalabels: {
//         backgroundColor: function(context) {
//           return context.dataset.backgroundColor;
//         },
//         borderColor: 'white',
//         borderRadius: 25,
//         borderWidth: 2,
//         color: 'white',
//         display: function(context) {
//           var dataset = context.dataset;
//           var count = dataset.data.length;
//           var value = dataset.data[context.dataIndex];
//           return value > count * 1.5;
//         },
//         font: {
//           weight: 'bold'
//         },
//         padding: 6,
//         formatter: Math.round
//       }
//     },
// // Core options
//     aspectRatio: 4 / 3,
//     cutoutPercentage: 32,
//     layout: {
//       padding: 32
//     },
//     elements: {
//       line: {
//         fill: false
//       },
//       point: {
//         hoverRadius: 7,
//         radius: 5
//       }
//     },
//   }
// }