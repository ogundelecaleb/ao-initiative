/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Header from "./component/header";
import { GoLocation, GoMail } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

const Donate = () => {
  return (
    <>
      <Header />
      <div className="px-[16px] md:px-[60px] lg:px-[80px] py-[75px] bg-white  ">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <m.div
            initial={{ x: -500, opacity: 0, scale: 0.5 }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="md:max-w-[50%] md:w-[50%] w-full"
          >
            <h2 className="text-gray-700 font-bold mb-5 text-[24px] md:text-[36px] lg:text-[42] text-center md:text-left">
              Every drop of blood is a lifeline to someone in need. Be the
              silent hero in someone's story - donate blood, and let the gift of
              life flow through your veins to theirs.
            </h2>

          </m.div>

          <div className="h-full md:max-w-[42%] md:w-[42%] w-full flex justify-center">
            <div className="relative object-cover ">
              <span className="h-[300px] md:h-[400px] w-[300px] md:w-full absolute bg-[#771023] top-0 left-4 rounded-bl-[80px] object-contain"></span>
              <div className=" ">
                <img
              src="/oaImage10.jpg"
              alt=""
                  className="h-[300px] md:h-[400px] w-[400px]  relative object-cover "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[8px] md:px-[60px] lg:px-[110px] py-[45px] md:py-[75px] bg-[#990019] text-white  ">
       
        <div className="mx-auto flex justify-center ">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSd9d4ULeHamvJ6VRvYyGWRl0oMY1EvptM0ytZOcBiKLE6d2qQ/viewform?embedded=true&pli=1"
            height="2200"
            frameborder="0"
            marginheight="0"
            marginHidth="0"
            className=" w-full "
          >
            <svg
              className="ml-4 w-6 h-6 text-[white] animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </iframe>
        </div>
      </div>
      <footer className="bg-gray-100  py-8 px-3 md:px-[80px] lg:px-[130px]">
        <div className="wrapper reveal">
          <div className="flex lg:flex-row flex-col w-full gap-3">
            <div className="flex-2 text-white pr-4 md:w-[35%] lg:w-[40%]">
              <img src="/oaLogo.png" alt="" />
              <h4 className="text-[#990019] py-2 tracking-wider ">
                Enriching lifes...
              </h4>
              <p className="text-[#990019] text-sm md:text-md ">
                OA Initiative is a non-profit organization dedicated to
                improving the lives of individuals and families affected by
                sickle cell disease.
              </p>
            </div>
            <div className="flex-grow flex lg:flex-row md:flex-row flex-col gap-4  justify-between text-white w-full">
              <div class="box-item">
                <h4 className="text-[#990019]  tracking-wider font-bold text-md">
                  Quick Link
                </h4>
                <ul className="text-sm md:text-md text-[#990019]">
                  <Link to="/">
                    <li className="cursor-pointer">
                      <p className=" py-2 tracking-wider">Home</p>
                    </li>
                  </Link>
                  <Link to="/aboutUs">
                    <li className="cursor-pointer">
                      <p className="py-2 tracking-wider">About Us</p>
                    </li>
                  </Link>
                  <Link to="/gallery">
                    <li className="cursor-pointer">
                      <p className=" py-2 tracking-wider">Gallery</p>
                    </li>
                  </Link>
                  <Link to="/event">
                    <li className="cursor-pointer">
                      <p className=" py-2 tracking-wider">Event</p>
                    </li>
                  </Link>

                  <Link to="/signup">
                    <li className="cursor-pointer">
                      <p className=" py-2 tracking-wider"> Enroll</p>
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="box-item">
                <h4 className="text-[#990019] text-md tracking-wider font-bold">
                  Contact
                </h4>
                <ul className="contact text-[#990019] text-sm md:text-md">
                  <li className="py-2 flex gap-1 items-center">
                    <BsTelephone />
                    <p>+234 8148942186</p>
                  </li>
                  <li className="py-2 flex gap-1 items-center">
                    <GoLocation /> <p>20, Oore Ofe quarters, Ekiti State. </p>
                  </li>
                  <li className="py-2 flex gap-1 items-center">
                    <GoMail />
                    <p>olanipekunayomideinitiative@gmail.com</p>
                  </li>
                  <li>
                    {" "}
                    <SocialIcon
                      url="https://twitter.com/OAinitiative_"
                      fgColor="#990019"
                      bgColor="transparent"
                    />
                    <SocialIcon
                      url="https://www.linkedin.com/in/o-a-initiative-3bb616275"
                      fgColor="#990019"
                      bgColor="transparent"
                    />
                    <SocialIcon
                      url="https://www.instagram.com/oa_initiative/"
                      fgColor="#990019"
                      bgColor="transparent"
                    />
                  </li>
                </ul>
              </div>
              <div className="box-item ">
                <h4 className="text-md text-[#990019] font-bold">Legal</h4>
                <ul className="text-[#990019] text-sm md:text-md">
                  <li>
                    <p className="py-2">Terms of Use</p>
                  </li>
                  <li>
                    <p className="py-2">Privacy Policy</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-[#990019] mt-8 pb-4 text-center text-xs md:text-md ">
            © OA.Initiative 2023. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Donate;
