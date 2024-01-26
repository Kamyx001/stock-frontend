import NavBar from '@/components/NavBar'
import WalletChart from '@/components/WalletChart'
import { Card } from '@/components/ui/card'
import React, { useEffect, useState } from 'react'
import api from '@/api/axiosConfig';

const WalletPage = () => {

  // var walletHistory: number[] = [1000, 2000, 3000, 4000, 5000];

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
    getData()
    const interval = setInterval(() => {
      getData();
    }, 10000);
  
    // This function will be called when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, [])

  return (
    <div className='top-0 flex flex-col h-screen m-0 bg-black overscroll-none'>
      <NavBar balance={balance} />
      <div className='flex flex-row justify-between h-full gap-10 p-10 pt-24'>
        <div className='flex flex-col w-full gap-10'>
          <Card className='w-full h-full'>
            <div className='flex flex-row justify-center'>
              <p className='text-right text-white'>Your balance:</p>
              <p className='text-white'>{balance}</p>
            </div>
          </Card>
          {/* <Card className='w-full h-full p-10'>
            <WalletChart walletHistory={walletHistory} />
          </Card> */}
        </div>
        <Card className='w-full'>
          <div className='flex flex-row justify-center'>
            <p className='text-right text-white'>Your balance:</p>
            <p className='text-white'>{balance}</p>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default WalletPage