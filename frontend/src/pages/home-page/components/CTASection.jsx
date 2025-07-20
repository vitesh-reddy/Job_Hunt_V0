import React from 'react'

const CTASection = () => {
  return (
    <section
  className="
    relative w-full max-w-[1728px] mx-auto
    bg-gradient-to-br from-[#FFD8E7] to-[#FF7AE5]
    rounded-[24px] md:rounded-[40px]
    flex flex-col items-center
    px-4 py-12
    lg:flex-row lg:items-start lg:justify-between
    lg:px-20 lg:py-24
    mt-20 overflow-hidden
  "
>
  {/* Background pattern */}
  <img
    src="src/assets/hero-pattern.svg"
    alt="Hero Background Pattern"
    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1728px] h-auto z-0"
  />

  {/* Text + CTA */}
  <div className="relative flex flex-col gap-6 text-center lg:text-left lg:max-w-[880px]">
    <h2
      className="
        text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px]
        leading-snug md:leading-[52px] lg:leading-[72px]
        font-bold font-['Manrope']
        bg-gradient-to-b from-[#180323] via-[#180323]/75 to-transparent
        text-transparent bg-clip-text
      "
    >
      Revolutionizing How You Find Work
    </h2>

    <p
      className="
        text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px]
        leading-relaxed font-['DM Sans'] text-[#180323]/75
        max-w-[360px] md:max-w-[720px] lg:max-w-[880px]
        mx-auto lg:mx-0">
      
    
      Connect with the right roles, people, and companies faster than ever. Say
      goodbye to endless scrolling and hello to focused, meaningful opportunities.
    </p>

    {/* Input + Button */}
    <div
      className="
        flex flex-col md:flex-row items-center gap-3
        w-full max-w-[360px] md:max-w-[720px]
        bg-white rounded-lg md:rounded-full shadow-md
        px-4 py-3 md:px-6 md:py-2
        mx-auto lg:mx-0">
      
    
      {/* Input wrapper */}
      <div className="flex-1 w-full">
        <input
          type="email"
          placeholder="Enter your email to get job alerts..."
          className="
            w-full px-3 py-2
            text-[16px] md:text-[18px] leading-[24px] md:leading-[28px]
            placeholder-[#78767D] text-[#180323]
            font-['DM Sans'] outline-none bg-transparent
          "
        />
      </div>

      {/* Button */}
      <button
  className="
    flex flex-row items-center justify-center
    px-6 py-[14px] gap-2
    w-[138px] h-[56px]
    bg-[#1B1C1C] border-2 border-[#1B1C1C]
    rounded-full
    font-['DM Sans'] font-medium
    text-[18px] leading-[28px] tracking-[0.5px]
    text-white">
  <span className="flex items-center w-[90px] h-[28px] justify-center">
    Subscribe
  </span>
</button>

    </div>
  </div>
</section>
  )
}

export default CTASection
