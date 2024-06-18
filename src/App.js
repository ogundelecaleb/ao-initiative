import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./aboutUs";
import "./App.css";
import Gallery from "./gallery";
import Event from "./event";
import Home from "./home";
import SignUp from "./signUp";
import Blog from "./blog";
import Subscribe from "./subscribe";
import AllBlogs from "./allBlogs";

// import Countdown from "./countdown";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import YearCalendar from "./calender";
import Donate from "./donate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/blog/:slug" element={<Blog />} />

        <Route path="/signUp" element={<SignUp />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/event" element={<Event />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/allblog" element={<AllBlogs />} />
        <Route path="/calendar" element={<YearCalendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
