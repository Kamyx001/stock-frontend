import Chart from 'react-google-charts'



export const options = {
  legend: "none",
  bar: { groupWidth: "75%" }, // Remove space between bars.
  candlestick: {
    fallingColor: { stroke: "#a52719", strokeWidth: 0, fill: "#eb1000" }, // red
    risingColor: { stroke: "#0f9d32", strokeWidth: 0, fill: "#0eba50" }, // green
  },
  backgroundColor: "transparent",
  enableInteractivity: false,
  chartArea: {
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  },
  vAxis: {
    baselineColor: "transparent",
    gridlines: {
      color: "transparent",
    },
    textPosition: "none",
  },
};

type CandlestickChartProps = {
  priceHistory: number[]
}

const CandlestickChart = ({priceHistory}:CandlestickChartProps) => {

  const data = []
  data.push(["", "", "", "", ""])
  //devide data into parts of 4 and arrange them into the data array with the format [low, open, close, high, average]
  //The total number of columns should be 4 times the number of series plus 1 (and any optional tooltip columns).
  // for (let i = 0; i < priceHistory.length/4; i++) {
  //   const barData =[];
  //   for (let j = 0; j < 4; j++) {
  //     if(priceHistory[i*4+j]===undefined) break;
  //     barData.push(priceHistory[i*4+j])
  //   }
  //   console.log(barData);
  //   const low = Math.min(...barData)
  //   const high = Math.max(...barData)
  //   const open = barData[0]
  //   const close = barData[barData.length-1]
  //   // const average = (low+high)/2
  //   data.push([`${i}`, low, open, close, high])
  // }
  if (priceHistory.length < 20) {
    for(let i=0; i<20-priceHistory.length; i++) {
      data.push([`${i}`, 0, 0, 0, 0])
    }
  }

  for (let i = Math.min(priceHistory.length-1,20); i > 0; i--) {
    data.push([`${i}`, priceHistory[i+1], priceHistory[i+1], priceHistory[i], priceHistory[i]])
  }


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