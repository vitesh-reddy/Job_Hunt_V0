// src/pages/ExtensionPage.jsx
import React, { useState } from "react";


import Hero from './components/Hero';
import Benefits from "./components/Benefits";
import HowItWorks from "./components/HowItWorks";
import FAQs from './components/FAQs';
import ExtensionCTA from './components/ExtensionCTA';
import ExtensionTutorialModal from './components/extensionModalComponents/ExtensionTutorialModal';

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


const ExtensionPage = () => {
  const [showTutorial, setShowTutorial] = useState(true);

  return (
    <div className="flex flex-col items-center w-full max-w-full min-h-screen h-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[40px] pt-[140px] gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] mx-auto bg-white text-[#1B1C1C] font-['Manrope'] z-0">
      <Navbar />
      <Hero />
      <Benefits />
      <HowItWorks />
      <FAQs />
      <ExtensionCTA />
      <Footer />
      
      
      <ExtensionTutorialModal
        show={showTutorial}
        onClose={() => setShowTutorial(false)}
      />
    </div>
  );
};

export default ExtensionPage;
