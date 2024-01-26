import axios from 'axios';
import React, { useState } from 'react'
import Chart from 'react-google-charts'

type StockChartProps = {
  priceHistory: number[];
  currentPrice: number;
  numOfBars: number;
}

const StockChart = ({priceHistory, currentPrice, numOfBars}: StockChartProps) => {

  
  const data = []
  data.push(["", "", "", "", ""])
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
  //   data.push([`${i}`, low, open, close, high])
  // }

  
  if (priceHistory.length < numOfBars) {
    for(let i=0; i<numOfBars-priceHistory.length; i++) {
      data.push([`${i}`, 0, 0, 0, 0])
    }
  }

  for (let i = Math.max(0, priceHistory.length - numOfBars); i < priceHistory.length; i++) {
    const date = new Date(new Date().getTime() - 100000 * (priceHistory.length - i));
    let minutes = '';
    if (date.getMinutes() < 10) {
      minutes = `0${date.getMinutes()}`;
    } else {
      minutes = `${date.getMinutes()}`;
    }
    data.push([`${date.getHours()}:${minutes}`, priceHistory[i-1], priceHistory[i-1], priceHistory[i], priceHistory[i]]);
  }


  const options = {
    seriesType: 'candlesticks',
    // series: {0: {type: 'line'}},
    legend: "none",
    bar: { groupWidth: "80%" }, // Remove space between bars.
    candlestick: {
      fallingColor: { stroke: "#a52719", strokeWidth: 0, fill: "#eb1000" }, // red
      risingColor: { stroke: "#0f9d32", strokeWidth: 0, fill: "#0eba50" }, // green
    },
    backgroundColor: "transparent",
    chartArea: {
      width: "85%",
      height: "83%",
    },
    vAxis: {
      baselineColor: "white",
      gridlines: {
        color: "gray",
      },
      textStyle: {
        color: "white",
      },
    },
    hAxis: {
      textStyle: {
        color: "white",
      },
    },
  };

  return (
    <div>
      <Chart 
        width={'93vw'}
        height={'50vh'}
        chartType="CandlestickChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={options}
        className='p-0 m-0'
      />
    </div>
  )
}

export default StockChart