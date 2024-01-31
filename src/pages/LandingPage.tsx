import api from "@/api/axiosConfig";
import CardGrid from "@/components/CardGrid";
import { ConectionError } from "@/components/ConectionError";
import NavBar from "@/components/NavBar";
import StockCard from "@/components/StockCard";
import StockCardSkeleton from "@/components/StockCardSkeleton";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [stocks, setStocks] = useState<any>([]);

  const getStocks = async () => {
    try {
      const response = await api.get("/api/v1/stocks");
      setStocks(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const [balance, setBalance] = useState(0);

  const getData = async () => {
    try {
      const response = await api.get("/api/v1/wallet");
      setBalance(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getStocks();
    getData();
    const interval = setInterval(() => {
      getStocks();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="no-scrollbar h-screen w-screen overflow-auto bg-black pt-10">
      <NavBar balance={balance} />
      <div className="mt-10">
        {stocks.length != 0 ? (
          <CardGrid>
            {stocks.map((stock: any) => (
              <Link to={`/stocks/${stock.shortName}`} key={stock.shortName}>
                <StockCard
                  key={stock.shortName}
                  shortName={stock.shortName}
                  name={stock.name}
                  priceHistory={stock.priceHistory}
                  currentPrice={stock.currentPrice}
                />
              </Link>
            ))}
          </CardGrid>
        ) : (
          <div className="flex h-auto w-full flex-wrap items-start justify-evenly gap-3 overflow-hidden p-0">
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
        )}
      </div>
    </div>
  );
};

export default LandingPage;
