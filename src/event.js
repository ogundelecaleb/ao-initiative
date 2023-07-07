import React from "react";
import Header from "./component/header";
import Footer from "./component/footer";
import { Carousel } from "react-responsive-carousel";

const Event = () => {
  return (
    <div>
      <Header />
      <div className="px-3 my-6 md:py-14 md:px-[80px]  lg:px-[130px]">
        <h2 className="font-bold text-[24px] text-[#990019] px-4">Events</h2>
        <div className="relative">
          <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={4000}
          >
            <div>
              {" "}
              <img
                src="/SCDday.jpeg"
                loading="lazy"
                alt="gallery"
                className="object-contain h-[280px] w-full md:h-[700px] md:w-full "
              />
            </div>
            <div>
              {" "}
              <img
                src="/SCDmonth.jpeg"
                loading="lazy"
                alt="gallery"
                className="object-contain h-[280px] w-full md:h-[700px] md:w-full "
              />
            </div>
            <div>
              {" "}
              <img
                src="/blooddonor.jpeg"
                loading="lazy"
                alt="gallery"
                className="object-contain h-[280px] w-full md:h-[700px] md:w-full "
              />
            </div>
            <div>
              {" "}
              <img
                src="/SCDwalk.jpg"
                loading="lazy"
                alt="gallery"
                className="object-contain h-[280px] w-full md:h-[700px] md:w-full "
              />
            </div>
          </Carousel>
        </div>
      </div>
      <div className="px-3 my-6 md:py-14 md:px-[80px]  lg:px-[130px]">
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
            <p className="text-justify tracking-wide text-xl text-gray-500">
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
            <h2 className="text-[28px] font-bold text-gray-600 mb-2">
              Sickle Cell Awearness Month
            </h2>
            <p className="text-justify tracking-wide text-gray-500 text-xl">
              September is National Sickle Cell Awareness Month, designated by
              Congress to help focus attention on the need for research and
              treatment of sickle cell disease. Read the President’s
              Proclamation here. We encourage everyone to be a part of this
              annual effort to increase awareness about sickle cell disease and
              sickle cell trait during the month of September. Individuals and
              organizations can join our efforts to bring attention to sickle
              cell disease by engaging elected officials for proclamations,
              hosting awareness events, distributing educational information to
              dispel the myths about sickle cell disease, and lighting public
              spaces, buildings and landmarks red!
            </p>
            <h2>
              Show Love, Give Blood for National Sickle Cell Awareness Month
              2023 Again this year, we invite you to join us for a virtual blood
              drive to support sickle cell warriors. Did you know that blood
              transfusions are one of the most critical treatments for sickle
              cell patients, but less than 10% of Americans donate blood? Did
              you know that sickle cell patients benefit most from blood
              transfusions from people of the same race or similar ethnicity,
              but only five percent of blood donors are of African ancestry?
              Help us make a difference for SCD patients by pledging to donate
              blood this month. Stay tuned for more information.
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Event;
