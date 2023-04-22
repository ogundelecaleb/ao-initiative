import React from "react";
import Header from "./component/header";
import { Link } from "react-router-dom";
import Footer from "./component/footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="px-[30px] md:px-[80px] lg:px-[130px] py-[75px] bg-[#990019]  ">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="lg:max-w-[500px] lg:w-[500px] w-full">
            <h2 className="text-white font-bold mb-5 text-[30px] md:text-[38px]">
              As a Sickle Cell Warrior, you can be whatever and whomever you
              want to be. <span className="bg-red-500 px-2">Don't</span> limit yourself!
            </h2>

            <p className="text-white font-normal mb-5">
              Our Mission Is To Promote Awareness, Education and Advocacy For
              Sickle Cell Disease And its Impact On Those Who live With It In
              Ekiti.
            </p>

            <button className="py-[14px] px-[40px] bg-white font-bold text-[#990019]">
              Find Out More
            </button>
          </div>

          <div className="relative object-cover">
            <span className="h-full w-full absolute bg-[#771023] top-0 left-4 rounded-bl-[40px] object-contain"></span>
            <div className=" ">
              <img
                src="/heroImage.png"
                alt=""
                className="h-full  relative object-contain "
              />
            </div>
          </div>
        </div>
      </div>
      {/* ways to support */}
      <div className=" relative bg-white h-[120px] ">
        <div className="mx-[10%]  rounded-tl-[40px]  rounded-br-[40px] absolute px-8 py-6 -top-[50%] bg-gray-200  w-[80%] left-0 right-0 item-center  ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <h3 className="text-gray-500 text-[26px]">
              <span className=" text-[#990019] font-bold">
                3 easy ways you can donate
              </span>{" "}
              to support a worthy cause
            </h3>
            <div className="flex flex-col rounded-lg items-center text-center bg-gray-100 border shadow  p-2 md:p-5">
              {" "}
              <img
                src="/cashinhand.png"
                alt=""
                className="md:h-[100px] lg:h-[120px] h-[70px] mb-2  md:mb-4"
              />
              <h2 className="md:text-[24px] text-[18px] font-bold text-gray-700 ">
                Donate Cash
              </h2>
            </div>
            <div className="flex flex-col  rounded-lg items-center bg-gray-100 text-center border shadow p-2 md:p-5">
              {" "}
              <img
                src="/bloodbag.png"
                alt=""
                className="md:h-[100px] lg:h-[120px] h-[70px] mb-2  md:mb-4"
              />
              <h2 className="md:text-[24px] text-[18px] font-bold text-gray-700 ">
                Donate Blood
              </h2>
            </div>
            <div className="flex flex-col rounded-lg items-center text-center  bg-gray-100 border shadow p-2 md:p-5">
              {" "}
              <img
                src="/support.png"
                alt=""
                className="md:h-[100px] lg:h-[120px] h-[70px] mb-2  md:mb-4"
              />
              <h2 className="md:text-[24px] text-[18px] font-bold text-gray-700 ">
                Volunteer
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[30px] md:px-[80px] lg:px-[130px] pt-[180px] lg:pt-[100px] pb-[75px] bg-[#990019]  ">
        <div className="flex flex-col mt-[260px] md:mt-0 gap-6 md:flex-row ">
          <div className="md:w-[50%] w-full text-gray-100 text-[20px] ">
            O.A INITIATIVE foundation is a non-profit organization pioneered by
            Dr Olanipekun Ayomide, that was established in 2019 in Ekiti. The
            charity was founded out of a desire to help people with sickle cell
            disease live full, purposeful lives without regret or setbacks as a
            result of health issues in Ekiti and elsewhere.
          </div>
          <div className="md:w-[50%] w-full  ">
            <h4 className="font-bold text-gray-200 text-[28px] mb-9 text-center">
              JOIN THE EKITI STATE SICKLE CELL WARRIORS COMMUNITY NOW!!
              <span>AND ENJOY IT'S BENEFITS</span>
            </h4>
            <button className="animate-bounce px-3 py-2 bg-white rounded-lg text-[#990019] ">
              <Link to="/signUp"> Join Now</Link>
            </button>
          </div>
        </div>
         <div className="w-full absolute top-[10%] bg-black left-0 h-[400px] -skew-y-12 -z-20"></div>
      </div>
      {/* Service Section */}
      <div className="px-[30px] md:px-[80px] lg:px-[130px] py-[75px] bg-white  ">
        <div className="flex flex-row justify-between items-center gap-9 bg-white">
          <div>
            <h3 className="text-[24px] font-bold ">Health Centers Near You</h3>
            <p className="text-[#990019] my-4 ">
              We are a non-profit organization dedicated to improving the lives
              of individuals and families affected by sickle cell disease.{" "}
            </p>
            <img src="/aboutImg1.png" alt="" />
          </div>
         
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
