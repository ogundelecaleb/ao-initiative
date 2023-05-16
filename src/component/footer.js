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
              <h4 className="text-gray-100  tracking-wider font-bold text-md">Quick Link</h4>
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
                  <p className="text-gray-100 py-2 tracking-wider">Sign Up</p>
                </li>
                {/* <li>
              <a href="#review">What customers say</a>
            </li> */}
                <li>
                  <p className="text-gray-100 py-2 tracking-wider">FAQ</p>
                </li>
              </ul>
            </div>
            <div className="box-item">
              <h4 className="text-gray-100 text-md tracking-wider font-bold">Contact</h4>
              <ul className="contact text-gray-100">
              <li className="py-2 flex gap-1 items-center">
                  <BsTelephone/>
                  <p>+234 8083 8100 30</p>
                </li>
                <li className="py-2 flex gap-1 items-center">
                  
                  <GoLocation/> <p>51c, Remi Fani Kayode Avenue, GRA Ikeja, Lagos.</p>
                 
                </li>
                <li className="py-2 flex gap-1 items-center">
                  <GoMail/>
                  <p>sales@paylodeservices.com</p>
                </li>
              </ul>
            </div>
            <div className="box-item text-gray-100">
              <h4 className="text-md font-bold">Legal</h4>
              <ul>
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
        <p className="text-gray-100  mt-8 mb-2 text-center">© OA.Initiative 2023. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
