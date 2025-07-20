import React from 'react';

const steps = [
  {
    number: '1',
    title: 'Instant Installation',
    desc:
      'Get started in seconds! Add our lightweight extension to your browser with a single click and unlock a world of application efficiency.',
    width: 'w-full lg:w-[928px]'
  },
  {
    number: '2',
    title: 'Secure Account Sync',
    desc:
      'Seamlessly connect to your profile. Your data is securely linked, instantly activating personalized autofill and resume features.',
    width: 'w-full md:w-[600px]'
  },
  {
    number: '3',
    title: 'Lightning-Fast Autofill',
    desc:
      'Say goodbye to tedious typing! Our intelligent autofill instantly populates application forms, saving you hours and ensuring accuracy.',
    width: 'w-full md:w-[600px]'
  },
  {
    number: '4',
    title: 'Direct Resume Uploads',
    desc:
      'Effortlessly submit your tailored resume. Upload directly from our builder to any job portal, ensuring your perfect CV is always sent.',
    width: 'w-full lg:w-[928px]'
  },
  {
    number: '5',
    title: 'Effortless Tracker Sync',
    desc:
      'Never lose track again! Every application is automatically saved and organized in your Job Tracker, keeping your pipeline perfectly clear.',
    width: 'w-full lg:w-[928px]'
  },
  {
    number: '6',
    title: 'Optimize with Match Score',
    desc:
      'Gain a competitive edge! Instantly see how well your resume matches job descriptions, guiding you to optimize and boost your interview chances.',
    width: 'w-full md:w-[600px]'
  },
];

const HowItWorks = () => {
  return (
    <section className="flex flex-col items-center py-8 sm:py-12 md:py-16 lg:py-[40px] bg-white w-full max-w-full h-auto">
      <h5 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[24px] sm:leading-[28px] md:leading-[30px] lg:leading-[32px] font-bold font-['Manrope'] text-[#AA1299]">
        EFFORTLESS APPLICATION
      </h5>
      <div className="h-2 sm:h-4 md:h-6 lg:h-[8px]" />
      <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[72px] leading-[40px] sm:leading-[48px] md:leading-[56px] lg:leading-[72px] xl:leading-[116px] text-center tracking-[-0.25px] font-bold font-['Manrope'] text-[#180323] w-full max-w-[880px] px-4 sm:px-6 md:px-8">
        See How Our Extension Works!
      </h1>
      <div className="h-8 sm:h-12 md:h-16 lg:h-[56px]" />

      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center content-center gap-4 sm:gap-6 md:gap-8 lg:gap-[40px] p-4 sm:p-6 md:p-8 lg:p-[40px] bg-white w-full max-w-full h-auto">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`flex flex-col justify-end items-start p-4 sm:p-6 md:p-8 lg:p-[40px] bg-[#FFD7F1] rounded-[6px] sm:rounded-[7px] lg:rounded-[8px] ${step.width} h-auto min-h-[200px] sm:min-h-[220px] md:min-h-[240px] lg:min-h-[280px] hover:shadow-lg transition-shadow duration-200`}
          >
            <div className="flex justify-center items-center p-2 sm:p-3 md:p-4 lg:p-[8px] w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] md:w-[50px] md:h-[50px] lg:w-[54px] lg:h-[54px] rounded-full bg-[#840077]">
              <span className="text-white text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold font-['Manrope'] leading-[24px] sm:leading-[28px] md:leading-[30px] lg:leading-[38px]">
                {step.number}
              </span>
            </div>
            <div className="h-3 sm:h-4 md:h-5 lg:h-[16px]" />
            <h5 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] leading-[26px] sm:leading-[28px] md:leading-[32px] lg:leading-[36px] xl:leading-[44px] font-extrabold font-['Manrope'] text-[#1B1C1C]">
              {step.title}
            </h5>
            <div className="h-2 sm:h-3 md:h-4 lg:h-[4px]" />
            <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[24px] font-light font-['DM Sans'] text-[#1B1C1C] tracking-[0.25px]">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
