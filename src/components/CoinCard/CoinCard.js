import React from "react";
import { Link } from "react-router-dom";

const CoinCard = ({ coin }) => {
  const {id,  image, name,symbol } = coin;
  return (
    <div className=" p-4 cursor-pointer bg-white shadow-lg rounded-2xl w-[250px] hover:translate-y-[-10px] transition ">
      <Link className="flex items-center  gap-4 justify-between" to={`/coin-details/${id}`}>
        <div className="flex-shrink-0">
          <img src={image} className=" mx-auto rounded-full object-cover h-16 w-16" alt="" />
        </div>
        <div className="flex flex-col justify-end">
          <span className="font-medium text-gray-600">{name}</span>
          <span className="text-gray-400">{symbol}</span>
        </div>
      </Link>
    </div>
  );
};

export default CoinCard;
