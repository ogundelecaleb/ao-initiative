import React from "react";
import Footer from "./component/footer";
import Header from "./component/header";

const Gallery = () => {
  return (
    <div>
      <Header />
      <div>
         <div className="grid grid-flow-col gap-4 ">
        <img src="/gallery1.jpg" alt="" className="col-span-1"/>
        <img src="/gallery2.jpg" alt="" className="col-span-2"/>
        <img src="/gallery3.jpg" alt="" />
        <img src="/gallery5.jpg" alt="" />
        <img src="/gallery4.jpg" alt="" />
      </div>
      </div>
     
      <Footer />
    </div>
  );
};

export default Gallery;
