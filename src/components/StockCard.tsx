import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Gain from "./Gain"

const StockCard = () => {
  return (
    <div className="dark w-80">
      <Card>
        <div>
          <CardHeader>
            <CardTitle>TSLA</CardTitle>
            <CardDescription>Tesla</CardDescription>
          </CardHeader>
          <CardContent>
            <Gain value={1.23} />
          </CardContent>
        </div>
        <div className=" flex items-center justify-center">
          <CardFooter>
            <div>
              <img src="https://static.vecteezy.com/system/resources/previews/008/505/869/original/candlestick-graph-bar-design-stock-market-business-concept-png.png" alt="chart" />
            </div>
          </CardFooter>
        </div>
      </Card>
    </div>
  )
}

export default StockCard