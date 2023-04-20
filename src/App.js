import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./aboutUs";
import "./App.css";
import Gallery from "./gallery";
import Home from "./home";
import SignUp from "./signUp";

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
