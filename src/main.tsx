import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css'
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import StockPage from './pages/StockPage';
import WalletPage from './pages/WalletPage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className='fixed w-screen h-screen p-0 bg-black'>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/stocks/:stockName" element={<StockPage />} />
        <Route path="/wallet" element={<WalletPage />} />
      </Routes>
    </Router>
  </div>
)
