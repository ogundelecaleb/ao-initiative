import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./aboutUs";
import "./App.css";
import Gallery from "./gallery";
import Event from "./event";
import Home from "./home";
import SignUp from "./signUp";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/event" element={<Event />} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
