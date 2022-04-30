import React, { useRef } from 'react'
import { Chart as ChartJS, PointElement, LineElement, LinearScale, Title } from 'chart.js';
import { Chart, Line, getDatasetAtEvent, getElementAtEvent, getElementsAtEvent } from 'react-chartjs-2';

ChartJS.register(LineElement, PointElement, LinearScale, Title);
const Piechart = () => {
  const chartRef = useRef('pie');

  const onClick = (event) => {
    console.log(
      getElementsAtEvent(chartRef.current, event)
    )
  }
  return <Line
            ref={chartRef}
            onClick={onClick}
            datasetIdKey='id'
            data={{
              labels: ['Jun', 'Jul', 'Aug', 'Dec'],
              datasets: [
                {
                  id: 1,
                  label: '',
                  data: [25, 50, 75, 80],
                  backgroundColor: "cyan",
                  borderColor: 'rgba(0,0,0,1)',
                  borderWidth: 2,
                  fill: true,

                },
                {
                  id: 2,
                  label: '',
                  data: [10, 3, 2, 1, 14],
                  backgroundColor: "pink",
                  borderColor: 'rgba(0,0,0,1)',
                  borderWidth: 2,
                  fill: true,

                },
              ],
            }}
          />
  }
export default Piechart
