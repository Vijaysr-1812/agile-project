import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Pricing from "./components/Pricing"; 
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import PaymentSection from "./components/Payment";

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about-us" element={<FeatureSection />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/payment" element={<PaymentSection />} />
        </Routes>
      </div>
    </Router>
    <Testimonials/>
    <Footer/>
    
    </>
  );
};

export default App;
