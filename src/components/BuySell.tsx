import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import api from '@/api/axiosConfig';

type BuySellProps = {
  myShares: number;
  shortName: string;
  currentPrice: number;
  update: any;
}

const BuySell = ({myShares, shortName, currentPrice, update}: BuySellProps) => {

  const [amount, setAmount] = React.useState(0)

  const [balance, setBalance] = React.useState(0);

  const getWalletData = async () => {
    try {
      const response = await api.get('/api/v1/wallet');
      setBalance(response.data.balance)
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }
  
  const buy = async () => {
    // await getWalletData()
    // if(balance<amount*currentPrice) {
    //   console.log('not enough money')
    //   return
    // }
    if(typeof amount !== 'number' || amount <= 0 || isNaN(amount)) {
      console.log('invalid amount');
      return
    }
    const response = await api.post(`/api/v1/stocks/buyShares`, {
      shortName: shortName,
      shares: `${amount}`
    })
    console.log(response.data)
  }

  const sell = async () => {
    if(typeof amount !== 'number' || amount <= 0 || isNaN(amount)) {
      console.log('invalid amount');
      return
    }
    // if(myShares<amount) {
    //   console.log('not enough shares')
    //   return
    // }
    const response = await api.post(`/api/v1/stocks/sellShares`, {
      shortName: shortName,
      shares: `${amount}`
    })
    console.log(response.data)
  }

  return (
    <div className='flex flex-row justify-center'>
      <Input onChange={(event)=>
        {setAmount(parseInt(event.target.value)); event.preventDefault()
        console.log(amount);
        update();
      }
      } placeholder='Amount' className='w-1/2 m-3 text-white' />
      <Button onClick={buy} variant={"secondary"} type='submit' className='w-1/6 m-3'>Buy</Button>
      <Button onClick={sell} variant={"secondary"} type='submit' className='w-1/6 m-3'>Sell</Button>
      <div className='flex flex-col items-end justify-center mx-3'>
        <p className='text-right text-white'>Your shares:</p>
        <p className='text-white'>{myShares}</p>
      </div>
    </div>
  )
}

export default BuySell