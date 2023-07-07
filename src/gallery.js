import React from "react";
import Footer from "./component/footer";
import Header from "./component/header";

import { Carousel } from "react-responsive-carousel";

const Gallery = () => {
  return (
    <div className="">
      <Header />
      <div className="px-3 py-6 md:py-14 md:px-[80px]  lg:px-[130px] bg-gray-50">
        <h2 className="font-bold text-[24px] text-[#990019] px-4">Gallery</h2>
        <div className="relative mb-4">
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
                src="/oaImage1.webp"
                loading="lazy"
                alt="gallery"
                className="object-contain bg-slate-100 h-[280px] w-full md:h-[700px] md:w-full "
              />
            </div>
            <div>
              {" "}
              <img
                src="/oaImage21.jpg"
                loading="lazy"
                alt="gallery"
                className="object-contain bg-slate-100 h-[280px] w-full md:h-[700px] md:w-full "
              />
            </div>
            <div>
              {" "}
              <img
                src="/oaImage17.jpg"
                loading="lazy"
                alt="gallery"
                className="object-contain bg-slate-100 h-[280px] w-full md:h-[700px] md:w-full "
              />
            </div>
            <div>
              {" "}
              <img
                src="/oaImage24.jpg"
                loading="lazy"
                alt="gallery"
                className="object-contain bg-slate-100 h-[280px] w-full md:h-[700px] md:w-full "
              />
            </div>
            <div>
              {" "}
              <img
                src="/oaImage25.jpg"
                loading="lazy"
                alt="gallery"
                className="object-contain bg-slate-100 h-[280px] w-full md:h-[700px] md:w-full "
              />
            </div>
            <div>
              {" "}
              <img
                src="/oaImage26.jpg"
                loading="lazy"
                alt="gallery"
                className="object-contain bg-slate-100 h-[280px] w-full md:h-[700px] md:w-full "
              />
            </div>
            <div>
              {" "}
              <img
                src="/oaImage27.jpg"
                loading="lazy"
                alt="gallery"
                className="object-contain bg-slate-100 h-[280px] w-full md:h-[700px] md:w-full "
              />
            </div>
            <div>
              {" "}
              <img
                src="/oaImage28.jpg"
                loading="lazy"
                alt="gallery"
                className="object-contain bg-slate-100 h-[280px] w-full md:h-[700px] md:w-full "
              />
            </div>
            <div>
              {" "}
              <img
                src="/oaImage29.jpg"
                loading="lazy"
                alt="gallery"
                className="object-contain bg-slate-100 h-[280px] w-full md:h-[700px] md:w-full "
              />
            </div>
            <div>
              {" "}
              <img
                src="/oaImage2.webp"
                loading="lazy"
                alt="gallery"
                className="object-contain bg-slate-100 h-[280px] w-full md:h-[700px] md:w-full "
              />
            </div>
            <div>
              {" "}
              <img
                src="/oaImage30.jpg"
                loading="lazy"
                alt="gallery"
                className="object-contain bg-slate-100 h-[280px] w-full md:h-[700px] md:w-full "
              />
            </div>
            <div>
              {" "}
              <img
                src="/oaImage20.jpg"
                loading="lazy"
                alt="gallery"
                className="object-contain bg-slate-100 h-[280px] w-full md:h-[700px] md:w-full "
              />
            </div>
            <div>
              {" "}
              <img
                src="/oaImage31.jpg"
                loading="lazy"
                alt="gallery"
                className="object-contain bg-slate-100 h-[280px] w-full md:h-[700px] md:w-full "
              />
            </div>
            <div>
              {" "}
              <img
                src="/oaImage32.jpg"
                loading="lazy"
                alt="gallery"
                className="object-contain bg-slate-100 h-[280px] w-full md:h-[700px] md:w-full "
              />
            </div>
            <div>
              {" "}
              <img
                src="/oaImage18.jpg"
                loading="lazy"
                alt="gallery"
                className="object-contain bg-slate-100 h-[280px] w-full md:h-[700px] md:w-full "
              />
            </div>
            <div>
              {" "}
              <img
                src="/oaImage19.jpg"
                loading="lazy"
                alt="gallery"
                className="object-contain bg-slate-100 h-[280px] w-full md:h-[700px] md:w-full "
              />
            </div>
            <div>
              {" "}
              <img
                src="/oaImage3.webp"
                loading="lazy"
                alt="gallery"
                className="object-contain bg-slate-100 h-[280px] w-full md:h-[700px] md:w-full "
              />
            </div>
            <div>
              {" "}
              <img
                src="/oaImage13.jpg"
                loading="lazy"
                alt="gallery"
                className="object-contain bg-slate-100 h-[280px] w-full md:h-[700px] md:w-full "
              />
            </div>
            <div>
              {" "}
              <img
                src="/oaImage8.jpg"
                loading="lazy"
                alt="gallery"
                className="object-contain bg-slate-100 h-[280px] w-full md:h-[700px] md:w-full "
              />
            </div>
            <div>
              {" "}
              <img
                src="/oaImage22.jpg"
                loading="lazy"
                alt="gallery"
                className="object-contain bg-slate-100 h-[280px] w-full md:h-[700px] md:w-full "
              />
            </div>
            <div>
              {" "}
              <img
                src="/oaImage14.jpg"
                loading="lazy"
                alt="gallery"
                className="object-contain h-[280px] bg-slate-100 w-full md:h-[700px] md:w-full "
              />
            </div>
          </Carousel>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-4 px-4 py-5 ">
          <div>
            {" "}
            <img
              src="/oaImage1.webp"
              alt=""
              className="col-span-1 object-contain h-[120px] w-[90px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125 bg-gray-100"
            />
          </div>
          <div>
            <img
              src="/oaImage18.jpg"
              alt=""
              className="col-span-1 object-contain h-[120px] w-[90px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125 bg-gray-100"
            />
          </div>
          <div>
            <img
              src="/oaImage21.jpg"
              alt=""
              className="col-span-1 object-contain h-[120px] w-[90px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125 bg-gray-100"
            />
          </div>
          <div>
            <img
              src="/oaImage24.jpg"
              alt=""
              className="col-span-1 object-contain h-[120px] w-[90px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125 bg-gray-100"
            />
          </div>
          <div>
            <img
              src="/oaImage25.jpg"
              alt=""
              className="col-span-1 object-contain h-[120px] w-[90px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125 bg-gray-100"
            />
          </div>
          <div>
            <img
              src="/oaImage26.jpg"
              alt=""
              className="col-span-1 object-contain h-[120px] w-[90px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125 bg-gray-100"
            />
          </div>
          <div>
            <img
              src="/oaImage27.jpg"
              alt=""
              className="col-span-1 object-contain h-[120px] w-[90px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125 bg-gray-100"
            />
          </div>
          <div>
            <img
              src="/oaImage28.jpg"
              alt=""
              className="col-span-1 object-contain h-[120px] w-[90px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125 bg-gray-100"
            />
          </div>
          <div>
            <img
              src="/oaImage29.jpg"
              alt=""
              className="col-span-1 object-contain h-[120px] w-[90px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125 bg-gray-100"
            />
          </div>
          <div>
            <img
              src="/oaImage30.jpg"
              alt=""
              className="col-span-1 object-contain h-[120px] w-[90px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125 bg-gray-100"
            />
          </div>
          <div>
            <img
              src="/oaImage31.jpg"
              alt=""
              className="col-span-1 object-contain h-[120px] w-[90px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125 bg-gray-100"
            />
          </div>
          <div>
            <img
              src="/oaImage32.jpg"
              alt=""
              className="col-span-1 object-contain h-[120px] w-[90px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125 bg-gray-100"
            />
          </div>
          <div>
            {" "}
            <img
              src="/oaImage15.jpg"
              alt=""
              className="col-span-1 object-contain h-[120px] w-[90px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125 bg-gray-100"
            />
          </div>
          <div>
            <img
              src="/oaImage2.webp"
              alt=""
              className="col-span-1 object-contain h-[120px] w-[90px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125 bg-gray-100"
            />
          </div>
          <div>
            <img
              src="/oaImage17.jpg"
              alt=""
              className="col-span-1 object-contain h-[120px] w-[90px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125 bg-gray-100"
            />
          </div>
          <div>
            <img
              src="/oaImage3.webp"
              alt=""
              className="col-span-1 object-contain h-[120px] w-[90px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125 bg-gray-100"
            />
          </div>
          <div>
            <img
              src="/oaImage19.jpg"
              alt=""
              className="col-span-1 object-contain h-[120px] w-[90px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125 bg-gray-100"
            />
          </div>
           <div>
            <img
              src="/oaImage22.jpg"
              alt=""
              className="col-span-1 object-contain h-[120px] w-[90px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125 bg-gray-100"
            />
          </div>
          <div>
            <img
              src="/oaImage9.jpg"
              alt=""
              className="col-span-1 object-contain h-[120px] w-[90px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125 bg-gray-100"
            />
          </div>
          <div>
            <img
              src="/oaImage4.webp"
              alt=""
              className="col-span-1 object-contain h-[120px] w-[90px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125 bg-gray-100"
            />
          </div>
          <div>
            <img
              src="/oaImage23.jpg"
              alt=""
              className="col-span-1 object-contain h-[120px] w-[90px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125 bg-gray-100"
            />
          </div>
          <div>
            <img
              src="/oaImage5.webp"
              alt=""
              className="col-span-1 object-contain h-[120px] w-[90px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125 bg-gray-100"
            />
          </div>
          <div>
            <img
              src="/oaImage6.webp"
              alt=""
              className="col-span-1 object-contain h-[120px] w-[90px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125 bg-gray-100"
            />
          </div>
          <div>
            <img
              src="/oaImage7.webp"
              alt=""
              className="col-span-1 object-contain h-[120px] w-[90px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125 bg-gray-100"
            />
          </div>
          <div>
            <img
              src="/oaImage8.jpg"
              alt=""
              className="col-span-1 object-contain h-[120px] w-[90px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125 bg-gray-100"
            />
          </div>
          <div>
            <img
              src="/oaImage9.jpg"
              alt=""
              className="col-span-1 object-contain h-[120px] w-[90px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125 bg-gray-100"
            />
          </div>
          <div>
            <img
              src="/oaImage10.jpg"
              alt=""
              className="col-span-1 object-contain h-[120px] w-[90px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125 bg-gray-100"
            />
          </div>
          <div>
            <img
              src="/oaImage11.jpg"
              alt=""
              className="col-span-1 object-contain h-[120px] w-[90px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125 bg-gray-100"
            />
          </div>
          <div>
            <img
              src="/oaImage12.jpg"
              alt=""
              className="col-span-1 object-contain h-[120px] w-[90px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125 bg-gray-100"
            />
          </div>
          <div>
            <img
              src="/oaImage13.jpg"
              alt=""
              className="col-span-1 object-contain h-[120px] w-[90px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125 bg-gray-100"
            />
          </div>
          <div>
            <img
              src="/oaImage14.jpg"
              alt=""
              className="col-span-1 object-contain h-[120px] w-[90px] md:h-[190px] md:w-[210px] transform ease-in duration-300 hover:scale-125 bg-gray-100"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
