import Chart from 'react-google-charts'

type WalletChartArgsType = {
  walletHistory: number[]
}

const WalletChart = ({walletHistory}: WalletChartArgsType) => {
  return (
    <Chart />
  )
}

export default WalletChart