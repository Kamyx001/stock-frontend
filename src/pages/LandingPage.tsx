import {useState, useEffect} from 'react'
import api from '@/api/axiosConfig'
import { Link } from 'react-router-dom'
import CardGrid from '@/components/CardGrid'
import StockCard from '@/components/StockCard'

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

  useEffect(() => {
    getStocks()
  }, [])

  return (
    <div>
      <CardGrid>
        {stocks.map((stock: any) => (
          <Link to={`/stocks/${stock.shortName}`} key={stock.shortName}>
            <StockCard key={stock.shortName} shortName={stock.shortName} name={stock.name} priceHistory={stock.priceHistory} currentPrice={stock.currentPrice}  />
          </Link>
        ))}
      </CardGrid>
    </div>
  )
}

export default LandingPage