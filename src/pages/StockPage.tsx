import React, { useEffect, useState } from 'react'
import api from '@/api/axiosConfig'
import { useParams } from 'react-router-dom'
import StockChart from '@/components/StockChart'

interface Stock {
  priceHistory: number[];
  currentPrice: number;
  shortName: string;
}

const StockPage = () => {

  const stockFromPath = useParams<{stockName: string}>()

  const [stock, setStock] = useState<Stock>({ priceHistory: [], currentPrice: 0, shortName: "" })

  const getStock = async () => {
    try {
      const response = await api.get(`/api/v1/stocks/${stockFromPath.stockName}`);
      console.log(response.data)
      setStock(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getStock()
  }, [])

  return (
    <div className='h-screen w-screen'>
      {stock.shortName}
      <StockChart priceHistory={stock.priceHistory} currentPrice={stock.currentPrice} numOfBars={100} />
    </div>
  )
}

export default StockPage