// import { data } from 'autoprefixer';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const CoinDetails = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [coin, setCoin] = useState({});
  useEffect(() => {
    setLoading(true);
    const url = `https://api.coingecko.com/api/v3/coins/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCoin(data));
    setLoading(false);
  }, [id]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="h-[80vh] px-4 pt-20 pb-24 mx-auto  md:px-2 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center content-center  h-full ">
            <div>
              <h1 className="text-3xl">General Info </h1> <hr />
              <h1>Coin Name: {coin.name}</h1>
              <h1>Gensis Date: {coin.genesis_date}</h1>
              <h1>
                Origin:{" "}
                {coin.country_origin ? coin.country_origin : "Not Found"}
              </h1>
              <h1>Coin Rank: {coin.coingecko_rank}</h1>
              <h1 className="text-3xl mt-3">Others Info </h1> <hr />
              <h1>Price Track: {coin.price_change_24h}</h1>
              <h1>Total Supply: {coin.total_supply}</h1>
              <h1>Last Update: {coin.last_updated}</h1>
            </div>
            <div>
              <img src={coin.image?.large} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CoinDetails;
