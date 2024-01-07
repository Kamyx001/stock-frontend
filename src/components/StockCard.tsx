import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Gain from "./Gain"
import React from "react"
import { cn } from "@/lib/utils"

const StockCard = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>
>(({className}) => {
  return (
    <Card className={cn(["md:w-80 w-40 h-40 dark bg-gradient-to-br from-black via-slate-900 to-black grid md:grid-cols-2 grid-rows-1 border-none grid-cols-1"], className)}>
      <div>
        <CardHeader className="flex flex-col">
          <CardTitle className=" text-3xl">TSLA</CardTitle>
          <CardDescription>Tesla</CardDescription>
        </CardHeader>
        <CardContent>
          <Gain value={1.23} />
        </CardContent>
      </div>
      <div className="md:flex items-center justify-center hidden">
        <CardFooter className="absolute pl-0 pr-6">
          <div>
            <img src="https://static.vecteezy.com/system/resources/previews/008/505/869/original/candlestick-graph-bar-design-stock-market-business-concept-png.png" alt="chart" />
          </div>
        </CardFooter>
      </div>
    </Card>
  )
})

export default StockCard