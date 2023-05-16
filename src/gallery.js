import React from "react";
import Footer from "./component/footer";
import Header from "./component/header";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Gallery = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="px-3 my-6 md:py-14 md:px-[80px]  lg:px-[130px] h-screen">
        <h2 className="font-bold text-[24px] text-[#990019] px-4">Gallery</h2>
        <div className="flex flex-row flex-wrap gap-4 px-4 py-5 ">
          <div>
            {" "}
            <img
              src="/oaImage1.webp"
              alt=""
              className="col-span-1 object-contain h-[80px] w-[100px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125"
            />
          </div>
          <div>
            
            <img
              src="/oaImage2.webp"
              alt=""
              className="col-span-1 object-contain h-[80px] w-[100px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125"
            />
          </div>
          <div>
            <img
              src="/oaImage3.webp"
              alt=""
              className="col-span-1 object-contain h-[80px] w-[100px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125"
            />
          </div>
          <div>
            <img
              src="/oaImage4.webp"
              alt=""
              className="col-span-1 object-cover h-[80px] w-[100px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125"
            />
          </div>

          <div>
            <img
              src="/oaImage5.webp"
              alt=""
              className="col-span-1 object-cover h-[80px] w-[100px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125"
            />
          </div>
          <div>
            <img
              src="/oaImage6.webp"
              alt=""
              className="col-span-1 object-cover h-[80px] w-[100px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125"
            />
          </div>
          <div>
            <img
              src="/oaImage7.webp"
              alt=""
              className="col-span-1 object-cover h-[80px] w-[100px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125"
            />
          </div>
          <div>
            <img
              src="/oaImage8.jpg"
              alt=""
              className="col-span-1 object-cover h-[80px] w-[100px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125"
            />
          </div>
          <div>
            <img
              src="/oaImage9.jpg"
              alt=""
              className="col-span-1 object-cover h-[80px] w-[100px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125"
            />
          </div>
          <div>
            <img
              src="/oaImage10.jpg"
              alt=""
              className="col-span-1 object-cover h-[80px] w-[100px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125"
            />
          </div>
          <div>
            <img
              src="/oaImage11.jpg"
              alt=""
              className="col-span-1 object-cover h-[80px] w-[100px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125"
            />
          </div>
          <div>
            <img
              src="/oaImage12.jpg"
              alt=""
              className="col-span-1 object-cover h-[80px] w-[100px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125"
            />
          </div>
          <div>
            <img
              src="/oaImage13.jpg"
              alt=""
              className="col-span-1 object-cover h-[80px] w-[100px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125"
            />
          </div>
          <div>
            <img
              src="/oaImage14.jpg"
              alt=""
              className="col-span-1 object-cover h-[80px] w-[100px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
