import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css'
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import StockPage from './pages/StockPage';
import NavBar from './components/NavBar';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <NavBar />
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/stocks/:stockName" element={<StockPage />} />
      </Routes>
    </Router>
  </>
)
