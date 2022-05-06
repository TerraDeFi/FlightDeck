import React from "react"
import {Row, Col} from 'react-bootstrap';
import { Line } from "react-chartjs-2"
import Chart from 'chart.js/auto';

import Colors from '../components/Colors.js'
import {Circledot} from '../components/CommonTags.js';
import { Statusupdown } from '../components/CommonTags.js';

const MultiLinechart = ({ colors }) => {
  let gradientStart = ""
  let gradientEnd = colors.line
  if (colors.theme == "white"){
    gradientStart = "white";
  } else if (colors.theme == "black") {
    gradientStart = "black";
  }

  let primary = 480000.6; // for get percentage value of worth
  let current = 750000; // for get percentage value of worth
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
              0: gradientStart, // color value of first point
              500000000: colors.line[0], // color value of second point
            }
          },
        },
        label: "Investment",
        data: [250000, 250000, 270000, 260000, 280000, 330000, 340000, 290000, 350000, 340000, 300000, 340000 ],
        fill: true,
        lineTension: 0.5,
        // backgroundColor: "rgba(245,40,145,0.8)",
        borderColor: colors.line[0], // get from parm
      },
      {
        gradient: {
          backgroundColor: {
            axis: 'y',
            colors: {
              0: '',
              300000: gradientStart, // color value of first point
              1000000:colors.line[1], // color value of second point
            }
          },
        },
        label: "Worth",
        data: [350000, 360000, 400000, 380000, 430000, 420000, 430000, 500000, 520000, 570000, 600000, 750000 ],
        fill: true,
        lineTension: 0.5,
        // backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: colors.line[1], // get from parm
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

  return (
    <div className="Linechart">
      <Row>
        <Col className={"pe-0 text-"+colors.label}>
          <Circledot color={colors.line[1]} size="8px" /> Worth
          <p className="text-muted">&nbsp;&nbsp;&nbsp;${current}<Statusupdown primary={primary} current={current} /></p>
        </Col>
        <Col className={"me-0 text-"+colors.label} xs={4}>
          <Circledot color={colors.line[0]} size="8px" /> Investment
          <p className="text-muted">&nbsp;&nbsp;&nbsp;$500,000</p>
        </Col>
        <Col className={"text-end pr-0 text-"+colors.label}>Profit/Loss
          <p className="text-muted">$250,000</p>
        </Col>
      </Row>
      <Line data={data} options={options} plugin={plugin}/>
    </div>
  );
}

export default MultiLinechart
