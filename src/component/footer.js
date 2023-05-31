import React from "react";
import {GoLocation, GoMail} from "react-icons/go";
import {BsTelephone} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#990019] pt-[42px] px-3 md:px-[80px] lg:px-[130px]">
       <div className="wrapper reveal">
        <div className="flex lg:flex-row flex-col w-full gap-3">
          <div className="flex-2 text-white pr-4">
            <img src="/oaLogo.png" alt="" />
            <h4 className="text-gray-100 py-2 tracking-wider ">Enriching lifes...</h4>
            <p className="text-gray-100 ">
              OA Initiative is a non-profit organization dedicated to improving
              the lives of individuals and families affected by sickle cell
              disease.
            </p>
          </div>
          <div className="flex-grow flex lg:flex-row md:flex-row flex-col gap-4  justify-between text-white w-full">
            <div class="box-item">
              <h4 className="text-gray-200  tracking-wider font-bold text-md">Quick Link</h4>
              <ul>
                <li>
                  <p className="text-gray-100 py-2 tracking-wider">Home</p>
                </li>
                <li>
                  <p className="text-gray-100 py-2 tracking-wider">About Us</p>
                </li>
                <li>
                  <p className="text-gray-100 py-2 tracking-wider">Gallery</p>
                </li>
                <li>
                  <p className="text-gray-100 py-2 tracking-wider"> Enroll</p>
                </li>
             
              </ul>
            </div>
            <div className="box-item">
              <h4 className="text-gray-200 text-md tracking-wider font-bold">Contact</h4>
              <ul className="contact text-gray-100">
              <li className="py-2 flex gap-1 items-center">
                  <BsTelephone/>
                  <p>+234 8148942186</p>
                </li>
                <li className="py-2 flex gap-1 items-center">
                  
                  <GoLocation/> <p>20, Oore Ofe quarters, Ekiti State. </p>
                 
                </li>
                <li className="py-2 flex gap-1 items-center">
                  <GoMail/>
                  <p>olanipekunayomideinitiative@gmail.com</p>
                </li>
              </ul>
            </div>
            <div className="box-item ">
              <h4 className="text-md text-gray-200 font-bold">Legal</h4>
              <ul className="text-gray-100">
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
        <p className="text-gray-100  mt-8 pb-4 text-center ">© OA.Initiative 2023. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
