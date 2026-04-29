import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import Navbar from "./Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
function App(){
    return <div>
        <BrowserRouter>
        <Header/>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Note/>
        <Footer/>
    </BrowserRouter>
         
       
    </div>

}
export default App;