/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Header from "./component/header";
import { GoLocation, GoMail } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <Header />
      <div className="px-[8px] md:px-[60px] lg:px-[110px] py-[45px] md:py-[75px] bg-[#990019] text-white  ">
        {/* <h3 className="mb-5 text-xl font-bold">
          {" "}
          Sign up to stay informed and connected through email with information
          about sickle cell. And this is just the beginning—expect to see more
          resources and our support network grow as we continue this journey
          together.
        </h3>

        <h3 className="mb-4 text-lg ">All form fields are required.</h3>

        <p className="mb-5">
          We collect this information to help tailor the content that is
          delivered to you and improve our programs.
        </p> */}

        {/* <form action="">
          <div className="flex flex-col gap-4 bg-hero-pattern p-4 lg:w-[400px] w-[300px] rounded-md">
            <div class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
              <input
                class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="I have sickle"
              />
              <label
                class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                for="inlineRadio1"
              >
                I have sickle cell
              </label>
            </div>
            <div class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
              <input
                class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="I have sickle cell trait"
              />
              <label
                class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                for="inlineRadio2"
              >
                I have sickle cell trait
              </label>
            </div>

            <div className="col-span-6 sm:col-span-6 ">
              <p
                // htmlFor="firstName"
                className="text-[#718096] text-[14px] leading-[21px] tracking-[0.2px] font-extrabold mb-[12px]"
              >
                FIRST NAME
              </p>
              <input
                type="text"
                className="block  lg:w-[350px] md:w-[280px] w-[250px]  h-14 px-4 py-[13.5px] placeholder:text-[#A0AEC0] placeholder:font-normal font-medium text-[#1A202C] text-[16px] leading-[24px] tracking-[0.3px] bg-white border border-[#E2E8F0]  rounded-xl focus:outline-none focus:ring-[#FFDB47] focus:border-[#FFDB47] sm:text-sm"
                placeholder="First Name"
                autofocus
                required
                // value=""
                // onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div className="col-span-12 sm:col-span-6 ">
              <p
                // htmlFor="firstName"
                className="text-[#718096] text-[14px] leading-[21px] tracking-[0.2px] font-extrabold mb-[12px]"
              >
                LAST NAME
              </p>
              <input
                type="text"
                className="block  lg:w-[350px] md:w-[280px] w-[250px]  h-14 px-4 py-[13.5px] placeholder:text-[#A0AEC0] placeholder:font-normal font-medium text-[#1A202C] text-[16px] leading-[24px] tracking-[0.3px] bg-white border border-[#E2E8F0]  rounded-xl focus:outline-none focus:ring-[#FFDB47] focus:border-[#FFDB47] sm:text-sm"
                placeholder="Last Name"
                autofocus
                required
                // value=""
              />
            </div>
            <div className="col-span-12 sm:col-span-6 ">
              <p
                // htmlFor="firstName"
                className="text-[#718096] text-[14px] leading-[21px] tracking-[0.2px] font-extrabold mb-[12px]"
              >
                EMAIL ADDRESS
              </p>
              <input
                type="email"
                className="block  lg:w-[350px] md:w-[280px] w-[250px] h-14 px-4 py-[13.5px] placeholder:text-[#A0AEC0] placeholder:font-normal font-medium text-[#1A202C] text-[16px] leading-[24px] tracking-[0.3px] bg-white border border-[#E2E8F0]  rounded-xl focus:outline-none focus:ring-[#FFDB47] focus:border-[#FFDB47] sm:text-sm"
                placeholder="Email"
                autofocus
                required
                // value=""
              />
            </div>
            <div className="col-span-12 sm:col-span-6 ">
              <p className="text-[#718096] text-[14px] leading-[21px] tracking-[0.2px] font-extrabold mb-[12px]">
                AGE
              </p>
              <input
                type="number"
                className="block  lg:w-[350px] md:w-[280px] w-[250px] h-14 px-4 py-[13.5px] placeholder:text-[#A0AEC0] placeholder:font-normal font-medium text-[#1A202C] text-[16px] leading-[24px] tracking-[0.3px] bg-white border border-[#E2E8F0]  rounded-xl focus:outline-none focus:ring-[#FFDB47] focus:border-[#FFDB47] sm:text-sm"
                placeholder=""
                autofocus
                required
                // value=""
              />
            </div>
            <div className="col-span-12 sm:col-span-6 mb- mt-6">
              <button
                type="submit"
                className="py-4 items-center rounded-[24px]  lg:w-[350px] md:w-[280px] w-[250px] bg-[#124072] text-[white] text-[16px] leading-[24px] tracking-[0.2px] font-extrabold flex justify-center "
              >
                <Link to="/">
                  Submit{" "}
                  {loading && (
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
                        )}{" "}
                </Link>
              </button>
            </div>
          </div>
        </form> */}
        <div className="mx-auto flex justify-center ">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeQvTUYimcx57mboyZoXakdWFNoHw8mHbaumOoDXQk1GQDuPw/viewform?embedded=true"
            // width="640"
            height="5919"
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

export default SignUp;
