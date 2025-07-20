// Complete homepage matching the provided layout and Figma CSS
import React from 'react';

import { Link } from 'react-router-dom';

import heroPattern from '../../assets/hero-pattern.svg'; 
import analytics  from '../../assets/analytics.png';
import Navbar from '../../components/Navbar_home';
import FeaturesSection from './components/FeaturesSection';
import FeaturedCompanies from './components/FeaturedCompanies';
import HeroSection from './components/HeroSection';
import Footer from '../../components/Footer';
import WhyUsSection from './components/WhyUsSection';
import CTASection from './components/CTASection';


export default function HomePage() {
  
  return (
  <div className="flex flex-col items-center w-full max-w-full min-h-screen h-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[40px] pt-[140px] gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] mx-auto bg-white text-[#1B1C1C] font-['Manrope'] z-0">
      

        {/* Header */} 
        <Navbar />
        <div
        className="
          flex flex-col items-center w-full
          " >
        <HeroSection/>
        <WhyUsSection/>
        <FeaturesSection />
        <FeaturedCompanies/>
        <CTASection/>
         <Footer/>
     
    </div>
    </div>
        
  );
}

        

    
     
      
    



        
      
     




    









          
   







      







    
      




     
