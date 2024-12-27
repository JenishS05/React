import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Header from "../src/Until/Header"
import Footer from "../src/Until/Footer"


function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer /> 

      </BrowserRouter>
    </> 
  );
}

export default App;
