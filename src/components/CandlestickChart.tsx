import Chart from 'react-google-charts'

export const data = [
  ["", "", "", "", ""],
  ["", 20, 28, 38, 45],
  ["", 31, 38, 55, 66],
  ["", 50, 55, 77, 80],
  ["", 50, 77, 66, 77],
  ["", 15, 66, 22, 68],
  ["", 20, 28, 38, 45],
  ["", 31, 38, 55, 66],
  ["", 50, 55, 77, 80],
  ["", 50, 77, 66, 77],
  ["", 15, 66, 22, 68],
  ["", 20, 28, 38, 45],
  ["", 31, 38, 55, 66],
  ["", 50, 55, 77, 80],
  ["", 50, 77, 66, 77],
  ["", 15, 66, 22, 68],
  ["", 50, 77, 66, 77],
  ["", 20, 66, 40, 68],
];

export const options = {
  legend: "none",
  bar: { groupWidth: "75%" }, // Remove space between bars.
  candlestick: {
    fallingColor: { stroke: "#a52719", strokeWidth: 0, fill: "#eb1000" }, // red
    risingColor: { stroke: "#0f9d32", strokeWidth: 0, fill: "#0eba50" }, // green
  },
  backgroundColor: "transparent",
  enableInteractivity: false,
  hAxis: {
    gridLines: {
      count: 0,
      color: "#0000",
    },
    baselineColor: "#0000",
    textPosition: "none",
    viewMode: "maximized",
  },
  vAxis: {
    gridLines: {
      count: 0,
      color: "transparent",
    },
    baselineColor: "transparent",
    textPosition: "none",
  },
  chartArea: {
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  },
};

const CandlestickChart = () => {
  return (
    <div className='w-full h-full'>
      <Chart 
        chartType='CandlestickChart'
        data={data}
        options={options}
        width={'150px'}
        height={'150px'}
        legendToggle
      />
    </div>
  )
}

export default CandlestickChart