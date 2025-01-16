import React from "react";
import { GoLocation, GoMail } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";
import Mailchip from "./mailchip";

const Footer = () => {
  return (
    <footer className="bg-[#990019] pt-[42px] px-3 md:px-[80px] lg:px-[130px]">
      <div className="wrapper reveal">
        <div className="flex lg:flex-row flex-col w-full gap-7">
          <div className="flex-2 text-white pr-4">
            <img src="/oaLogo.png" alt="" />
            {/* <Mailchip /> */}
            <h4 className="text-gray-100 py-2 tracking-wider ">
              Enriching lifes...
            </h4>
            <p className="text-gray-100 text-sm md:text-md ">
              OA Initiative is a non-profit organization dedicated to improving
              the lives of individuals and families affected by sickle cell
              disease.
            </p>
          </div>
          <div className="flex-grow flex lg:flex-row md:flex-row flex-col gap-4  justify-between text-white w-full">
            <div class="box-item">
              <h4 className="text-gray-200  tracking-wider font-bold text-md">
                Quick Link
              </h4>
              <ul className="text-sm md:text-md">
                <Link to="/">
                  <li className="cursor-pointer">
                    <p className="text-gray-100 py-2 tracking-wider">Home</p>
                  </li>
                </Link>
                <Link to="/aboutUs">
                  <li className="cursor-pointer">
                    <p className="text-gray-100 py-2 tracking-wider">
                      About Us
                    </p>
                  </li>
                </Link>
                <Link to="/gallery">
                  <li className="cursor-pointer">
                    <p className="text-gray-100 py-2 tracking-wider">Gallery</p>
                  </li>
                </Link>
                <Link to="/event">
                  <li className="cursor-pointer">
                    <p className="text-gray-100 py-2 tracking-wider">Event</p>
                  </li>
                </Link>

                <Link to="/signup">
                  <li className="cursor-pointer">
                    <p className="text-gray-100 py-2 tracking-wider"> Enroll</p>
                  </li>
                </Link>
              </ul>
            </div>
            <div className="box-item">
              <h4 className="text-gray-200 text-md tracking-wider font-bold">
                Contact
              </h4>
              <ul className="contact text-gray-100 text-sm md:text-md">
                <li className="py-2 flex gap-1 items-center">
                  <BsTelephone />
                  <a href="tel:+2348169909895">+2348169909895</a>
                </li>
                <li className="py-2 flex gap-1 items-center">
                  <GoLocation /> <p>Suite 2, No. 66, Bank Road, Ado Ekiti. </p>
                </li>
                <li className="py-2 flex gap-1 items-center">
                  <GoMail />
                  <p>olanipekunayomideinitiative@gmail.com</p>
                </li>
                <li>
                  {" "}
                  <SocialIcon
                    url="https://twitter.com/OAinitiative_"
                    fgColor="white"
                    bgColor="transparent"
                  />
                  <SocialIcon
                    url="https://www.linkedin.com/in/o-a-initiative-3bb616275"
                    fgColor="white"
                    bgColor="transparent"
                  />
                  <SocialIcon
                    url="https://www.instagram.com/oa_initiative/"
                    fgColor="white"
                    bgColor="transparent"
                  />
                </li>
              </ul>
            </div>
            {/* <div className="box-item ">
              <h4 className="text-md text-gray-200 font-bold">Legal</h4>
              <ul className="text-gray-100 text-sm md:text-md">
                <li>
                  <p className="py-2">Terms of Use</p>
                </li>
                <li>
                  <p className="py-2">Privacy Policy</p>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        <p className="text-gray-100  mt-8 pb-4 text-center text-xs md:text-md ">
          © OA.Initiative 2023. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
