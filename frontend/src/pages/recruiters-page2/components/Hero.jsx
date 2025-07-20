import React from 'react'
import JobCard from './JobCard';
import JobCardDetail from './JobCardDetail';
import Pagination from './Pagination';

const jobData = [
  { company: 'Amazon', title: 'Arun Joshi', bgColor: '#E6F2FF' },
  { company: 'Amazon', title: 'Arun Joshi',  bgColor: '#E6F5E6' },
  { company: 'Amazon', title: 'Arun Joshi', bgColor: '#FFF2E6' },
  { company: 'Amazon', title: 'Arun Joshi',bgColor: '#E6F2FF' },
  { company: 'Amazon', title: 'Arun Joshi', bgColor: '#E6F5E6' },
  { company: 'Amazon', title: 'Arun Joshi', bgColor: '#FFF2E6' },
  { company: 'Amazon', title: 'Arun Joshi', bgColor: '#E6F2FF' },
  { company: 'Amazon', title: 'Arun Joshi', bgColor: '#E6F5E6' },
  { company: 'Amazon', title: 'Arun Joshi', bgColor: '#FFF2E6' },
  { company: 'Amazon', title: 'Arun Joshi', bgColor: '#E6F2FF' },
  { company: 'Amazon', title: 'Arun Joshi', bgColor: '#E6F5E6' },
  {company: 'Amazon', title: 'Arun Joshi', bgColor: '#FFF2E6' },
  
];
const colors = ["#FFFFFF", "#CCFFCC", "#CCCCFF", "#FFF0CC", "#CCE5FF"];

const Hero = () => {

  return (
    <div
  className="
    flex flex-col md:flex-row
    justify-between items-start
    gap-6 
    w-full max-w-[1648px] mx-auto
    h-auto relative
    py-4 sm:py-6 xl:py-8
    overflow-hidden
  "
>
  {/* Sidebar Filters */}
  <div
    className="
      hidden md:flex flex-col items-center
      gap-10 px-[10px]
      flex-shrink-0
      md:w-[244px] max-w-[244px]
      h-auto
      overflow-hidden
    "
  >
            <div className="flex flex-col items-start p-0 w-full h-auto self-stretch">
            <div>
              <h3 className="w-full h-auto font-manrope font-bold text-[40px] leading-[64px] text-black self-stretch">
                 Filters</h3>
                 <div className="w-full h-auto flex flex-col items-start gap-2 self-stretch">
                  {/* Filter Section Container (Frame 494) */}
               <div className="w-full h-auto flex flex-col items-start p-4 gap-2 self-stretch">
                 {/* Label Text - "Level" */}
                <div className="w-full h-auto flex items-center font-dm-sans font-medium text-[18px] leading-[28px] tracking-[0.5px] text-[#47464C] self-stretch">
                Level
                 </div>
              {['Fresher', 'Entry-Level', 'Intermediate', 'Senior-Level', 'Expert'].map(level => (
                <label key={level} className="flex items-center space-x-2 text-[#1B1C1E] mb-2">
                  <input type="checkbox" className="accent-[#AA1299] w-4 h-4" />
                  <span>{level}</span>
                </label>
              ))}
              </div>
            
            
           <div className="w-full h-auto flex flex-col items-start p-4 gap-2 self-stretch">
              <div className="w-full h-auto flex items-center font-dm-sans font-medium text-[18px] leading-[28px] tracking-[0.5px] text-[#47464C] self-stretch"> Job Hunt</div>
 

 

              {['Internship', 'Full Time', 'Part Time', 'Shift Work', 'Flexible Schedule', 'Hourly Basis'].map(type => (
                <label key={type} className="flex items-center space-x-2 text-[#1B1C1E] mb-2">
                  <input type="checkbox" className="accent-[#AA1299] w-4 h-4" />
                  <span>{type}</span>
                </label>
              ))}
            </div>



          </div>

          </div>
           </div>
           </div>
            {/* Sidebar Filters mobile*/}
           <div className="flex flex-col items-end p-4 gap-6 w-full h-auto md:hidden">
  <button
    className="flex flex-row justify-center items-center px-4 py-[6px] gap-2 
               w-[104px] h-[36px] bg-white border-2 border-[#1B1C1C] rounded
               text-[#1B1C1C] text-[16px] font-medium leading-6 tracking-[0.25px]"
  >
    <svg className="w-6 h-6" fill="none" stroke="#1B1C1C" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M3 12h18M12 3l9 9-9 9"/>
    </svg>
    <span>Button</span>
  </button>
</div>



          {/* Desktop Layout - xl and up, show 12 cards */}
<div
  className="
    hidden xl:flex flex-col
    gap-6
    flex-1 min-w-0
    h-auto
    px-6 md:px-0
  "
>
  <div
    className="
      grid
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3   /* max 3 per row */
      gap-6
      w-full
    "
  >
    {jobData.slice(0, 12).map((job, index) => (
      <JobCard key={index} {...job} />
    ))}
  </div>
  <Pagination />
</div>

{/* Tablet Layout - md to lg, show 6 cards */}
<div
  className="
    hidden md:flex xl:hidden flex-col
    gap-6
    flex-1 min-w-0
    h-auto
    px-6
  "
>
  <div
    className="
      grid
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3   /* max 3 per row */
      gap-6
      w-full
    "
  >
    {jobData.slice(0, 6).map((job, index) => (
      <JobCard key={index} {...job} />
    ))}
  </div>
  <Pagination />
</div>

{/* Mobile Layout - below md */}
<div
  className="
    flex flex-col items-center
    px-6 gap-6
    w-full h-auto
    md:hidden
  "
>
  {colors.map((color, index) => (
    <JobCardDetail key={index} bgColor={color} />
  ))}
  <Pagination />
</div>


          
        

        
     </div>
  )
}

export default Hero