import React from 'react';
import '../../assets/avatar.png';
import Navbar from '../../components/Navbar';
import Hero from './components/Hero';
export default function RecruitersPage() {
  
  

  return (
    <div
      className="
        relative flex flex-col items-center w-full min-h-screen
        bg-white text-[#1B1C1C] font-['Manrope'] isolation-isolate
        px-4 pb-8 gap-4
        sm:px-6 sm:pb-10 sm:gap-6
        md:px-8 md:pb-12 md:gap-8
        lg:px-12 lg:pb-14 lg:gap-10
        xl:max-w-[1728px] xl:mx-auto xl:pb-16" >
      
   
      <Navbar/>
      <Hero/>
        
     
    </div>
  );
}