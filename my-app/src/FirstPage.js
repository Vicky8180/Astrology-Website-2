import React from 'react'
import Navbar from "./mainPage/navbar/Navbar.js"
import Features from "./mainPage/mixed/Features.js";
import Footer from "./mainPage/mixed/Footer.js";
import Hero from "./mainPage/mixed/Hero.js";
import Services from "./mainPage/services/Services.js";
import Ratings from "./mainPage/rating/Ratings.js";
import FAQ from "./mainPage/FAQ/Faq.js"
import Pricing from "./mainPage/pricing/Pricing"
import "./index.css"
import FooterBarrier from './mainPage/footer/footerBarrier.js';


export default function FirstPage() {
  return (
   
    <div className="App">
    <Navbar/>
    <Hero />
    <Pricing/>
    <Features />
   <Services/>
   <Ratings/>
   
   <FAQ/>
   <FooterBarrier/>
   
     <Footer />

  
   
   </div>
  )
}
