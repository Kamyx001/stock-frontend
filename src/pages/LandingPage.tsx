import StockCard from '@/components/StockCard'
import StockCardSkeleton from '@/components/StockCardSkeleton'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
      <Link to="/login">Login</Link>
      <StockCard />
      <StockCardSkeleton />
    </div>
  )
}

export default LandingPage