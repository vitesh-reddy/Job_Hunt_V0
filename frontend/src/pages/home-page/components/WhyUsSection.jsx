import React from 'react'

const WhyUsSection = () => {
  return (
    <section
  className="
    grid 
    grid-cols-1        /* mobile: 1 block per row */
    lg:grid-cols-3     /* lg and up: 3 blocks side by side */
    gap-6 lg:gap-10
    px-4 lg:px-20
    py-6 lg:py-10
    w-full 
    h-auto
    max-w-full lg:max-w-[1648px] 
    mx-auto
  "
>
  {/* Block 1 */}
   <div className="flex flex-col items-center w-full border-r border-[#18032326] last:border-r-0">
    {/* % box */}
    <div class="relative py-2 w-24 h-10 mb-4">
      {/* % symbol */}
      <div class="absolute right-0 top-[-12px] w-[37px] h-[64px] text-4xl leading-[64px] font-extrabold text-[#1B1C1E] flex items-center justify-center">
        %
      </div>
      {/* Stack for first digit */}
      <div class="absolute right-[37px] top-[-12px] w-[27px] h-[64px] overflow-hidden flex flex-col items-center">
        {[0,1,2,3,4,5,6,7,8,9].map(num => (
          <div
            key={`digit-1-${num}`}
            class="w-[27px] h-[64px] text-4xl leading-[64px] font-extrabold text-[#1B1C1E] flex items-center justify-center"
          >
            {num}
          </div>
        ))}
      </div>
      {/* Stack for second digit */}
      <div class="absolute right-[64px] top-[-12px] w-[27px] h-[64px] overflow-hidden flex flex-col items-center">
        {[0,1,2,3,4,5,6,7,8,9].map(num => (
          <div
            key={`digit-2-${num}`}
            class="w-[27px] h-[64px] text-4xl leading-[64px] font-extrabold text-[#1B1C1E] flex items-center justify-center"
          >
            {num}
          </div>
        ))}
      </div>
    </div>

    <h3 class="w-full text-2xl leading-8 font-bold text-center text-[#180323] font-['Manrope'] lg:text-[32px] lg:leading-[52px]">
      Swift & Seamless
    </h3>
    <p class="w-full text-lg leading-7 font-medium text-center text-[rgba(24,3,35,0.75)] font-['Manrope'] lg:text-[24px] lg:leading-[38px]">
      Experience a streamlined process from application to offer. Save time and reduce stress with our smart matching engine.
    </p>
  </div>

  

  {/* Block 2 */}
   <div className="flex flex-col items-center w-full border-r border-[#18032326] last:border-r-0">
    {/* % box */}
    <div class="relative py-2 w-24 h-10 mb-4">
      {/* % symbol */}
      <div class="absolute right-0 top-[-12px] w-[37px] h-[64px] text-4xl leading-[64px] font-extrabold text-[#1B1C1E] flex items-center justify-center">
        %
      </div>
      {/* Stack for first digit */}
      <div class="absolute right-[37px] top-[-12px] w-[27px] h-[64px] overflow-hidden flex flex-col items-center">
        {[0,1,2,3,4,5,6,7,8,9].map(num => (
          <div
            key={`digit-1-${num}`}
            class="w-[27px] h-[64px] text-4xl leading-[64px] font-extrabold text-[#1B1C1E] flex items-center justify-center"
          >
            {num}
          </div>
        ))}
      </div>
      {/* Stack for second digit */}
      <div class="absolute right-[64px] top-[-12px] w-[27px] h-[64px] overflow-hidden flex flex-col items-center">
        {[0,1,2,3,4,5,6,7,8,9].map(num => (
          <div
            key={`digit-2-${num}`}
            class="w-[27px] h-[64px] text-4xl leading-[64px] font-extrabold text-[#1B1C1E] flex items-center justify-center"
          >
            {num}
          </div>
        ))}
      </div>
    </div>
    <h3 class="w-full text-2xl leading-8 font-bold text-center text-[#180323] font-['Manrope'] lg:text-[32px] lg:leading-[52px]">
      Tailored Opportunities
    </h3>
    <p class="w-full text-lg leading-7 font-medium text-center text-[rgba(24,3,35,0.75)] font-['Manrope'] lg:text-[24px] lg:leading-[38px]">
      Get job suggestions that align with your skills, preferences, and goals so you never miss the perfect role.
    </p>
  </div>



  {/* Block 3 */}
   <div className="flex flex-col items-center w-full border-r border-[#18032326] last:border-r-0">
    {/* % box */}
    <div class="relative py-2 w-24 h-10 mb-4">
      {/* % symbol */}
      <div class="absolute right-0 top-[-12px] w-[37px] h-[64px] text-4xl leading-[64px] font-extrabold text-[#1B1C1E] flex items-center justify-center">
        %
      </div>
      {/* Stack for first digit */}
      <div class="absolute right-[37px] top-[-12px] w-[27px] h-[64px] overflow-hidden flex flex-col items-center">
        {[0,1,2,3,4,5,6,7,8,9].map(num => (
          <div
            key={`digit-1-${num}`}
            class="w-[27px] h-[64px] text-4xl leading-[64px] font-extrabold text-[#1B1C1E] flex items-center justify-center"
          >
            {num}
          </div>
        ))}
      </div>
      {/* Stack for second digit */}
      <div class="absolute right-[64px] top-[-12px] w-[27px] h-[64px] overflow-hidden flex flex-col items-center">
        {[0,1,2,3,4,5,6,7,8,9].map(num => (
          <div
            key={`digit-2-${num}`}
            class="w-[27px] h-[64px] text-4xl leading-[64px] font-extrabold text-[#1B1C1E] flex items-center justify-center"
          >
            {num}
          </div>
        ))}
      </div>
    </div>
    <h3 class="w-full text-2xl leading-8 font-bold text-center text-[#180323] font-['Manrope'] lg:text-[32px] lg:leading-[52px]">
      Diverse Job Selections
    </h3>
    <p class="w-full text-lg leading-7 font-medium text-center text-[rgba(24,3,35,0.75)] font-['Manrope'] lg:text-[24px] lg:leading-[38px]">
      Explore a wide range of roles across top industries, catering to every experience level and interest area.
    </p>
  </div>

</section>
  )
}

export default WhyUsSection
