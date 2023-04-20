import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between  px-[30px] md:px-[80px] lg:px-[130px] py-[20px]">
        <img src="/oaLogo.png" alt="" className="" />

        <nav className="hidden lg:inline-block">
          <ul className="flex flex-row items-center justify-between gap-[30px] ">
            <li className="cursor-pointer hover:text-[##990019] hover:border-b-[#990019]">
              <Link to="/">Home</Link>{" "}
            </li>
            <li className="cursor-pointer hover:text-[##990019] hover:border-b-[#990019]">
              <Link to="/aboutUs">About Us</Link>{" "}
            </li>
            <li className="cursor-pointer hover:text-[##990019] hover:border-b-[#990019]">
              <Link to="/gallery">Gallery</Link>{" "}
            </li>
            <li className="cursor-pointer hover:text-[##990019] hover:border-b-[#990019]">
              Event
            </li>
          </ul>
        </nav>
        <button className="animate-pulse py-[14px] px-[40px] bg-[#990019] text-white font-bold rounded-md">
          <Link to="/signUp">Sign Up</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
