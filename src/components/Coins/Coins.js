import React, { useEffect, useState } from "react";
import CoinCard from "../CoinCard/CoinCard";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => setCoins(data));
  }, []);

  return (
    <div className="md:px-2 px-4 pt-16 pb-24 mx-auto max-w-7xl ">
      <h4 className="text-center text-3xl my-3 font-mono font-bold text-gray-600">
          Available Crypto Currencys
      </h4>
      <p className="text-center mb-12 mt-3 text-xl font-bold text-pink-700">Total Coins {coins.length}</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 text-center justify-items-center  ">
        {coins.map((coin) => (
          <CoinCard key={coin.id} coin={coin}></CoinCard>
        ))}
      </div>
    </div>
  );
};

export default Coins;
