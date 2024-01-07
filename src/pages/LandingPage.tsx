import StockCard from '@/components/StockCard'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
      <Link to="/login">Login</Link>
      <StockCard />
    </div>
  )
}

export default LandingPage