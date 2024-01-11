import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Gain from "./Gain"
import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import CandlestickChart from "./CandlestickChart"

type StockCardProps = {
  className?: string
  shortName: string
  name: string
  priceHistory: number[]
  currentPrice: number
}

const StockCard = (({className, shortName, name, priceHistory, currentPrice}: StockCardProps) => {
  

  var [gain, setGain] = useState(0);

  const calculateGain = async () => {
    if (!priceHistory) {
      priceHistory = [0, 0]
    }
    if (!currentPrice) {
      currentPrice = priceHistory[priceHistory.length - 1]
    }
    const firstPrice = priceHistory[priceHistory.length - 1]
    const lastPrice = currentPrice;
    gain = (lastPrice - firstPrice) / firstPrice
    gain = Math.round(gain * 10000) / 100
    setGain(gain)
    return gain
  }

  useEffect(() => {
    calculateGain()
  }, [])

  if(!priceHistory) {
    return (
      <></>
    )
  }

  return (
    <Card className={cn(["sm:w-80 w-100% h-44 dark bg-gradient-to-br from-black via-slate-900 to-black grid sm:grid-cols-2 grid-rows-1 border-none grid-cols-1"], className)}>
      <div>
        <CardHeader className="flex flex-col pb-0">
          <CardTitle className=" text-3xl">{shortName}</CardTitle>
          <CardDescription>{name}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col">
          {currentPrice}
          <Gain value={gain} />
        </CardContent>
      </div>
      <div>
        <div className="sm:flex items-center justify-center hidden h-full">
          <CardFooter className="pl-0 w-fit h-fit">
            <div className="w-auto h-auto">
              <CandlestickChart priceHistory={priceHistory} />
              {/* <img src="https://static.vecteezy.com/system/resources/previews/008/505/869/original/candlestick-graph-bar-design-stock-market-business-concept-png.png" alt="chart" /> */}
            </div>
          </CardFooter>
        </div>
      </div>
    </Card>
  )
})

export default StockCard