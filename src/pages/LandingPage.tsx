import {useState, useEffect} from 'react'
import api from '@/api/axiosConfig'
import { Link } from 'react-router-dom'
import CardGrid from '@/components/CardGrid'
import StockCard from '@/components/StockCard'
import StockCardSkeleton from '@/components/StockCardSkeleton'
import { ConectionError } from '@/components/ConectionError'
import NavBar from '@/components/NavBar'

const LandingPage = () => {

  const [stocks, setStocks] = useState<any>([])

  const getStocks = async () => {
    try {
      const response = await api.get('/api/v1/stocks');
      setStocks(response.data)
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

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

  useEffect(() => {
    getStocks()
    getData()
    const interval = setInterval(() => {
      getStocks();
    }, 10000);
  
    return () => {
      clearInterval(interval);
    };
  }, [])

  return (
    <div className='w-screen h-screen pt-10 overflow-auto bg-black no-scrollbar'>
      <NavBar balance={balance} />
      <div className='mt-10'>
        {stocks.length!=0?
        <CardGrid>
          {stocks.map((stock: any) => (
            <Link to={`/stocks/${stock.shortName}`} key={stock.shortName}>
              <StockCard key={stock.shortName} shortName={stock.shortName} name={stock.name} priceHistory={stock.priceHistory} currentPrice={stock.currentPrice}  />
            </Link>
          ))}
        </CardGrid>
        :
        <div className='flex flex-wrap items-start w-full h-auto gap-3 p-0 overflow-hidden justify-evenly'>
          <ConectionError />
          <StockCardSkeleton />
          <StockCardSkeleton />
          <StockCardSkeleton />
          <StockCardSkeleton />
          <StockCardSkeleton />
          <StockCardSkeleton />
          <StockCardSkeleton />
          <StockCardSkeleton />
          <StockCardSkeleton />
          <StockCardSkeleton />
          <StockCardSkeleton />
          <StockCardSkeleton />
          <StockCardSkeleton />
          <StockCardSkeleton />
          <StockCardSkeleton />
          <StockCardSkeleton />
          <StockCardSkeleton />
          <StockCardSkeleton />
          <StockCardSkeleton />
          <StockCardSkeleton />
          <StockCardSkeleton />
          <StockCardSkeleton />
          <StockCardSkeleton />
          <StockCardSkeleton />
          <StockCardSkeleton />
          <StockCardSkeleton />
          <StockCardSkeleton />
          <StockCardSkeleton />
          <StockCardSkeleton />
          <StockCardSkeleton />
          <StockCardSkeleton />
          <StockCardSkeleton />
        </div>
        }
      </div>
    </div>
  )
}

export default LandingPage