import React, { useState } from 'react';


const faqs = [
  {
    question: 'Is my personal information safe and secure with this extension?',
    answer:
      "Absolutely. We prioritize your privacy and security above all else. All your data is encrypted and stored securely. The autofill feature only accesses information you've explicitly saved within your account and only when you trigger it on an application form. We never share or sell your data to third parties.",
  },
  {
    question: 'Does the extension work on all job application websites?',
    answer: null,
  },
  {
    question: 'Will the autofill feature always be 100% accurate?',
    answer: null,
  },
  {
    question: 'Is this browser extension truly free to use?',
    answer: null,
  },
];

export default function FAQsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-full h-auto flex flex-col items-center bg-white py-8 sm:py-10 md:py-12 lg:py-16">
      <h4 className="text-[#AA1299] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold leading-[24px] sm:leading-[28px] md:leading-[30px] lg:leading-[32px]">FREQUENTLY ASKED QUESTIONS</h4>
      <div className="h-2 sm:h-4 md:h-6 lg:h-8"></div>
      <h1 className="text-center text-[#180323] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[72px] leading-[36px] sm:leading-[44px] md:leading-[56px] lg:leading-[72px] xl:leading-[116px] font-bold max-w-[880px] px-4 sm:px-6 md:px-8">
        Have Questions? We've Got The Answers!
      </h1>
      <div className="h-8 sm:h-10 md:h-12 lg:h-14"></div>
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full max-w-[880px] px-4 sm:px-6 md:px-8">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`w-full bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.3),_0px_1px_3px_1px_rgba(0,0,0,0.15)] rounded-[4px] flex flex-col hover:shadow-md transition-shadow duration-200`}
          >
            <button
              className="flex items-center justify-between px-4 sm:px-5 md:px-6 py-3 sm:py-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full hover:bg-gray-50 transition-colors duration-200"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] leading-[22px] sm:leading-[24px] md:leading-[28px] lg:leading-[32px] xl:leading-[38px] font-bold text-[#1B1C1C] text-left">
                {item.question}
              </span>
              <svg 
                width="40" 
                height="40" 
                viewBox="0 0 40 40" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 transition-transform duration-200 ${activeIndex === index ? 'rotate-180' : ''}`}
              >
<path d="M10 25L20 15L30 25" stroke="#1B1C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </button>
            {activeIndex === index && item.answer && (
              <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6">
                <p className="text-[#47464C] text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[24px] font-light tracking-[0.25px]">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
