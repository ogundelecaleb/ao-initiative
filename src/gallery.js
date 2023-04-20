import React from "react";
import Footer from "./component/footer";
import Header from "./component/header";

const Gallery = () => {
  return (
    <div>
      <Header />
      <div>
         <div className="grid grid-cols-2 gap-4 ">
        <img src="/gallery1.jpg" alt="" className="col-span-1 object-contain"/>
        <img src="/gallery2.jpg" alt="" className="col-span-1 object-contain"/>
        <img src="/gallery3.jpg" alt="" className="col-span-1 object-contain"/>
        <img src="/gallery5.jpg" alt="" className="col-span-1 object-contain"/>
        <div>
          <img src="/gallery4.jpg" alt="" className="col-span-1 object-cover"/> 
        </div>
       
      </div>
      </div>
     
      <Footer />
    </div>
  );
};

export default Gallery;
