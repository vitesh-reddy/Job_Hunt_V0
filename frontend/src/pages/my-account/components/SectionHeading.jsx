const SectionHeading = ({ text }) => {
  return (
    <div className="flex items-center justify-start gap-1 font-bold text-[24px] 2xl:text-[32px] text-[#993D6F] leading-[42px] xl:leading-[48px] 2xl:leading-[52px] 2xl:tracking-[-0.64px] ">
      {text}
      {(text != "Work Experience" && text != "Account") && 
      (<svg className="scale-70 2xl:scale-90" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path d="M8.75 8.75H7.5C6.83696 8.75 6.20107 9.01339 5.73223 9.48223C5.26339 9.95107 5 10.587 5 11.25V22.5C5 23.163 5.26339 23.7989 5.73223 24.2678C6.20107 24.7366 6.83696 25 7.5 25H18.75C19.413 25 20.0489 24.7366 20.5178 24.2678C20.9866 23.7989 21.25 23.163 21.25 22.5V21.25M20 6.25L23.75 10M25.4813 8.23123C25.9736 7.73892 26.2501 7.07121 26.2501 6.37498C26.2501 5.67875 25.9736 5.01104 25.4813 4.51873C24.9889 4.02642 24.3212 3.74985 23.625 3.74985C22.9288 3.74985 22.2611 4.02642 21.7688 4.51873L11.25 15V18.75H15L25.4813 8.23123Z" stroke="#993D6F" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>)}
    </div>
  );
};

export default SectionHeading;
