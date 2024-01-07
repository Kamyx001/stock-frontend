import React from 'react'
import Chart from "react-apexcharts";

interface ChartProps {
    data: {
      datasets: {
        label: string;
        data: {
          x: Date,
          y: number[]
        }[];
        fill: boolean;
        backgroundColor: string;
      }[];
    }
  }

// const CandlestickChart:React.FC<ChartProps> = props => {
  
//     const series: ApexAxisChartSeries = {
//       name: 'candle',
//       data: props.data
//     },
//     options: {
//       chart: {
//         height: 350,
//         type: 'candlestick',
//       },
//       title: {
//         text: 'CandleStick Chart - Category X-axis',
//         align: 'left'
//       },
//       xaxis: {
//         type: 'category',
//         labels: {
//           formatter: function(val: string) {
//             return val.split(' ')[0]
//           }
//         }
//       },
//       yaxis: {
//         tooltip: {
//           enabled: true
//         }
//       }
//     },
//   }
//   return (
//     <div id="chart">
//       <Chart series={state.series} type="candlestick" height={350} />
//     </div>
//   )
// }

// export default CandlestickChart