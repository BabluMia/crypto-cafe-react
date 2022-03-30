import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div className="flex mx-auto bg-white px-12 py-8 justify-center md:justify-between  sticky top-0">
      <div className="hidden  md:block">
        <h2 className="text-2xl text-slate-500 font-sans font-bold">
         <Link to='/'> Crypto Cafe</Link>  
            </h2>
      </div>
      <div className="flex text-xl gap-6 font-semibold">
        <CustomLink  to="/">
          Home
        </CustomLink>
        <CustomLink  to="/coins">
          Coins
        </CustomLink>
        <CustomLink  to="/contact">
          Contact
        </CustomLink>
        <CustomLink  to="/about">
          About
        </CustomLink>
      </div>
    </div>
  );
};

export default Header;
