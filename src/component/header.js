import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const [toggle, setToggle] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    setShowMenu(!showMenu);
  };
  return (
    <div className="sticky w-full bg-gray-100 z-1000 lg:relative ">
      <div className="flex flex-row items-center  justify-between relative px-[30px] md:px-[80px] lg:px-[130px] py-[12px]">
       <Link to="/">
          <img src="/oa-logo.png" alt="" className="lg:h-[45px] h-[38px]" /> 
       </Link>
    

        <nav className="hidden lg:inline-block">
          <ul className="flex flex-row items-center justify-between gap-[30px] ">
            <li className="cursor-pointer font-bold hover:text-[#990019] hover:border-b-[#990019]">
              <Link to="/">Home</Link>{" "}
            </li>
            <li className="cursor-pointer font-bold hover:text-[#990019] hover:border-b-[#990019]">
              <Link to="/aboutUs">About Us</Link>{" "}
            </li>
            <li className="cursor-pointer font-bold hover:text-[#990019] hover:border-b-[#990019]">
              <Link to="/gallery">Gallery</Link>{" "}
            </li>
            <li className="cursor-pointer font-bold hover:text-[#990019] hover:border-b-[#990019]">
              <Link to="/event">Event</Link>{" "}
            </li>
          </ul>
        </nav>
        <button className="animate-pulse py-[14px] px-[40px] bg-[#990019] text-white font-bold rounded-md hidden lg:inline-block">
          <Link to="/signUp">Enroll Now</Link>
        </button>
        <button onClick={handleToggle} className="lg:hidden md:inline-block">
          {toggle ? <GiHamburgerMenu /> : <AiOutlineClose />}
        </button>

        {showMenu && (
          <div className="bg-white absolute right-1 -bottom-[340%] lg:hidden w-[200px] py-5 px-3 z-10">
            <ul className="flex flex-col gap-[10px] mb-2 ">
              <Link to="/">
                {" "}
                <li className="cursor-pointer border-b  hover:text-[##990019] hover:border-b-[#990019]">
                  Home{" "}
                </li>
              </Link>
              <Link to="/aboutUs">
                {" "}
                <li className="cursor-pointer hover:text-[##990019] border-b hover:border-b-[#990019]">
                  About Us{" "}
                </li>
              </Link>
              <Link to="/gallery">
                {" "}
                <li className="cursor-pointer border-b hover:text-[##990019] hover:border-b-[#990019]">
                  Gallery{" "}
                </li>
              </Link>
              <Link to="/event">
                {" "}
                <li className="cursor-pointer border-b hover:text-[##990019] hover:border-b-[#990019]">
                  Event{" "}
                </li>
              </Link>
            </ul>
            <button className="animate-pulse py-[8px] px-[24px] bg-[#990019] text-white font-bold rounded-md">
              <Link to="/signUp">Enroll Now</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
