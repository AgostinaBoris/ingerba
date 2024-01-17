import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Footer from './components/Footer/Footer.jsx';

import pic1 from "./assets/pic10.jpeg";
import pic2 from "./assets/pic9.jpeg";
import pic3 from "./assets/pic6.jpeg";
import pic4 from "./assets/pic21.jpeg";
import pic5 from "./assets/pic6.jpeg";
import pic6 from "./assets/pic7.jpeg";




function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
    <Hero />
    <Gallery bgImg1={pic1} bgImg2={pic2} bgImg3={pic3}
    bgImg4={pic4} bgImg5={pic5} bgImg6={pic6}/>
    < Footer />
    </BrowserRouter>
      
    </div>
  );
}

export default App;
