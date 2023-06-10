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
      <Footer/>
    </div>
  );
};

export default Event;
