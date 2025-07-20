// import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import avatar from '../../assets/avatar.png';
import Navbar from '../../components/Navbar';

import Footer from '../../components/Footer';
import FilterBar from './components/FilterBar';
import Hero from './components/Hero';

const FindRecruiters = () => {
  return (
    <>
    
        <div
      className="
        relative flex flex-col items-center w-full min-h-screen
        bg-white text-[#1B1C1C] font-['Manrope'] isolation-isolate
        ">

          <div
        className="
          flex flex-col items-center w-full
          pt-20 sm:pt-24 xl:pt-[120px] " >
            <Navbar/>
            <FilterBar/>
            <Hero/>
             <Footer/>
      </div>
      </div>
    
    </>
  );
};


export default FindRecruiters;