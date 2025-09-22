import React, { useState } from "react";
import Header from "./component/header";
import Footer from "./component/footer";
// import { Carousel } from "react-responsive-carousel";

const Event = () => {
  const [expand1, setExpand1] = useState(false);
  return (
    <div>
      <Header />
      <section className="relative h-[50vh] ">
        <img
          src="/oaImage24.jpg"
          loading="lazy"
          alt=""
          className="absolute top-0 left-0 right-0 h-full w-full object-cover -z-10"
        />
        <div className="h-full w-full flex flex-col justify-center z-10 text-white py-[24px] bg-[#000435] opacity-80 px-4 md:px-[40px] lg:px-[80px]">
          <div className="flex flex-col md:flex-row justify-between">
            <h3 className="text-[22px] md:text-[40px] font-bold mb-5 w-full md:w-[50%]">
              Events
            </h3>
          </div>
        </div>
      </section>
      <div className="px-3 my-6 md:py-14 md:px-[80px]  lg:px-[90px]">
        <div className="flex flex-col items-center md:flex-row gap-6 mb-[60px]">
          <div className="md:w-[50%] w-full  ">
            {" "}
            <img
              src="/SCDday.jpeg"
              loading="lazy"
              alt="gallery"
              className="object-contain h-[280px] md:h-[500px] md:w-full "
            />
          </div>
          <div className="md:w-[50%] w-full  ">
            <h2 className="text-[28px] font-bold text-gray-600 mb-2">
              World Sickle Cell Day
            </h2>
            <h2 className="md:text-[22px] text-[18px] font-bold text-gray-600 mb-2">
              Date:{" "}
              <span className="md:text-[18px] text-sm font-bold text-gray-600">
                June 19th (annually)
              </span>
            </h2>
            <p className=" text-gray-500 text-[12px] md:text-base">
              World Sickle Cell Awareness Day is observed annually on June 19,
              It is a day that remembers, honors, and pays tribute to people who
              live with sickle cell disease. On this day, people around the
              world come together with their friends and family to reflect on
              the struggle of living with sickle cell disease.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row gap-6">
          <div className="md:w-[50%] w-full  ">
            {" "}
            <img
              src="/SCDmonth.jpeg"
              loading="lazy"
              alt="gallery"
              className="object-contain h-[280px] md:h-[500px] md:w-full "
            />
          </div>
          <div className="md:w-[50%] w-full  ">
            <h2 className=" md:text-[28px] text-[18px]  font-bold text-gray-600 mb-2">
              Sickle Cell Awearness Month
            </h2>
            <h2 className="md:text-[22px] text-[18px]  font-bold text-gray-600 mb-2">
              Date:{" "}
              <span className="md:text-[18px] text-sm font-bold text-gray-600">
                September (annually)
              </span>
            </h2>
            <p className=" text-gray-500 text-[12px] md:text-base">
              September is National Sickle Cell Awareness Month, designated by
              Congress to help focus attention on the need for research and
              treatment of sickle cell disease. We encourage everyone to be a
              part of this annual effort to increase awareness about sickle cell
              disease and sickle cell trait during the month of September.
              <br />
              Individuals and organizations can join our efforts to bring
              attention to sickle cell disease by engaging elected officials for
              proclamations, hosting awareness events, distributing educational
              information to dispel the myths about sickle cell disease, and
              lighting public spaces, buildings and landmarks red!
            </p>
            {expand1 === true ? (
            <p className=" text-gray-500 text-[12px] md:text-base">
            Show Love, Give Blood for National Sickle Cell Awareness Month
                2023 Again this year, we invite you to join us for a virtual
                blood drive to support sickle cell warriors. Did you know that
                blood transfusions are one of the most critical treatments for
                sickle cell patients, but less than 10% of Nigerinas donate
                blood? Did you know that sickle cell patients benefit most from
                blood transfusions from people of the same race or similar
                ethnicity, but only five percent of blood donors are of African
                ancestry?
                <br /> Help us make a difference for SCD patients by pledging to
                donate blood this month. Stay tuned for more information.
              </p>
            ) : (
              ""
            )}
            <button
              onClick={() => setExpand1(!expand1)}
              className="underline text-[12px] px-3 py-1 rounded-2xl text-blue-500"
            >
              {expand1 === false ? "expand" : "collapse"}
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row gap-6  mt-[60px]">
          <div className="md:w-[50%] w-full  ">
            {" "}
            <img
              src="/SCDwalk.jpg"
              loading="lazy"
              alt="gallery"
              className="object-contain h-[280px] md:h-[500px] md:w-full "
            />
          </div>
          <div className="md:w-[50%] w-full  ">
            <h2 className="text-[28px] font-bold text-gray-600 mb-2">
              Sickle Cell Day Walk in Ekiti
            </h2>
            <h2 className="md:text-[22px] text-[18px] font-bold text-gray-600 mb-2">
              Date:{" "}
              <span className="md:text-[18px] text-sm font-bold text-gray-600">
                June 16th 2023
              </span>
            </h2>
            <h2 className="md:text-[22px] text-[18px] font-bold text-gray-600 mb-2">
              Theme:{" "}
              <span className="md:text-[18px] text-sm font-bold text-gray-600">
                Building and Strengthening sickle Cell Communities in Ekiti
                State
              </span>
            </h2>
            <p className=" text-gray-500 text-[12px] md:text-base">
              The theme for this year's Sickle Cell Day Walk event : "Building
              and Strengthening Sickle Cell Communities in Ekiti State." which
              took place on the 16th of June 2023 was With a focus on raising
              awareness and promoting support for individuals living with sickle
              cell disease, this theme reflects our commitment to fostering
              unity and creating a more inclusive and compassionate society.
            </p>
          </div>
        </div>
      </div>
      <Footer />

     
    </div>
  );
};

export default Event;
