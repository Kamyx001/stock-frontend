import React, { useEffect, useState } from 'react'
import { ScrollArea } from "@/components/ui/scroll-area";
import api from '@/api/axiosConfig'
import { useParams } from 'react-router-dom'
import StockChart from '@/components/StockChart'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ConectionError } from '@/components/ConectionError';
import BuySell from '@/components/BuySell';
import CommentForm from '@/components/CommentForm';
import NavBar from '@/components/NavBar';
import { Slider } from '@/components/ui/slider';
import CommentsSection from '@/components/CommentsSection';
import { get } from 'http';

interface Stock {
  priceHistory: number[];
  currentPrice: number;
  shortName: string;
  name: string;
  myShares: number;
}

const StockPage = () => {

  const [currentPrice, setCurrentPrice] = useState(0);

  const [numOfBars, setNumOfBars] = useState(80);

  const stockFromPath = useParams<{stockName: string}>()

  const [stock, setStock] = useState<Stock>({ priceHistory: [], currentPrice: 0, shortName: "", name: "", myShares: 0 })

  const [balance, setBalance] = useState(0);

  const getData = async () => {
    try {
      const response = await api.get('/api/v1/wallet');
      setBalance(response.data)
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const getStock = async () => {
    try {
      const response = await api.get(`/api/v1/stocks/${stockFromPath.stockName}`);
      console.log(response.data)
      setStock(response.data)
      setCurrentPrice(response.data.currentPrice)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      getStock();
      getData();
    }, 10000);
  
    // This function will be called when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    getStock()
  }, [])

  return (
    <div className='w-screen h-screen p-5 pt-20 overflow-auto bg-black overscroll-auto scroll no-scrollbar'>
      <ScrollArea className='h-screen' >
        <NavBar balance={balance} />
        {stock.shortName===""?
          <ConectionError /> :
          <div className='flex items-center justify-center grid-flow-col'>
            <div>
              <Card className='flex justify-between p-3 mb-5 bg-gradient-to-br from-black via-slate-900 to-black'>
                <CardHeader>
                  <CardTitle className='text-white'>{stock.shortName}</CardTitle>
                  <CardDescription className='text-white'>{stock.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='flex flex-col items-end mt-5'>
                    <p className='right-0 text-2xl font-bold text-white'>Current price:</p>
                    <p className='right-0 text-xl text-white'>{currentPrice}</p>
                  </div>
                </CardContent>
              </Card>
              <Card className='w-full pb-5 mb-5 h-fit bg-gradient-to-br from-black via-slate-900 to-black'>
                <StockChart priceHistory={stock.priceHistory} currentPrice={stock.currentPrice} numOfBars={numOfBars} />
                <div className='flex flex-row justify-end gap-5 m-3 mb-0'>
                  <h1 className='text-xl text-white'>Bars: {numOfBars}</h1>
                  <Slider className='w-1/3 mr-5' defaultValue={[80]} min={50} max={200} step={5} onValueChange={(i) => {setNumOfBars(i[0])}} />
                </div>
              </Card>
              <Card className='w-full p-5 mb-5 bg-gradient-to-br from-black via-slate-900 to-black'>
                <BuySell currentPrice={stock.currentPrice} shortName={stock.shortName} myShares={stock.myShares} update={getStock} />
              </Card>
              <Card className='w-full p-5 bg-gradient-to-br from-black via-slate-900 to-black'>
                <CommentForm shortName={stock.shortName} />
                {/* <CommentsSection shortName={stock.shortName} /> */}
              </Card>
            </div>
          </div>
        }
        {stock.shortName}
      </ScrollArea>
    </div>
  )
}

export default StockPage