
const JobCardDetail = ({ onClose, bgColor = '#E6F2FF' }) => {
  return (
    <div className="flex flex-col items-center p-2 pb-6 gap-6 w-full max-w-[394px] h-auto bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] rounded-[32px]">
      {/* Card Top Section */}
      <div className="flex flex-col items-center p-6 gap-6 w-full h-auto rounded-[24px]" style={{ backgroundColor: bgColor }}>
        {/* Header Row */}
        <div className="flex flex-row justify-center items-start gap-2 w-full h-[62px]">
          {/* Company Logo */}
          <div className="flex justify-center items-center p-2 w-14 h-14 bg-white rounded">
            <img
              src="/Google__G__logo.svg"
              alt="Logo"
              className="w-10 h-10 rounded"
            />
          </div>

          {/* Text Block */}
          <div className="flex flex-col items-start w-full h-[62px]">
            <div className="font-['DM_Sans'] text-[16px] font-medium leading-6 text-black">
              Amazon
            </div>
            <div className="font-['Manrope'] text-[24px] font-bold leading-[38px] text-black">
             Arun Joshi
            </div>
          </div>
        </div>

        {/* Contact Rows */}
        <div className="flex flex-col items-start gap-2 w-full h-auto">
          {/* Email Row */}
          <div className="flex flex-row items-center gap-2 w-full h-9">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7M3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7M3 7L12 13L21 7" stroke="black" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>

            <div className="font-['DM_Sans'] text-[16px] font-normal leading-6 text-black">
              arun@gmail.com
            </div>
            <button className="ml-auto flex justify-center items-center px-4 py-1.5 w-[100px] h-[36px] rounded bg-transparent border-2 border-[#B75589]">
              <span className="font-['DM_Sans'] text-[16px] font-medium leading-6 text-[#B75589]">
                Email
              </span>
            </button>
          </div>

          {/* Phone Row */}
          <div className="flex flex-row items-center gap-2 w-full h-9">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 10C9 10.1326 9.05268 10.2598 9.14645 10.3536C9.24021 10.4473 9.36739 10.5 9.5 10.5C9.63261 10.5 9.75979 10.4473 9.85355 10.3536C9.94732 10.2598 10 10.1326 10 10V9C10 8.86739 9.94732 8.74021 9.85355 8.64645C9.75979 8.55268 9.63261 8.5 9.5 8.5C9.36739 8.5 9.24021 8.55268 9.14645 8.64645C9.05268 8.74021 9 8.86739 9 9V10ZM9 10C9 11.3261 9.52678 12.5979 10.4645 13.5355C11.4021 14.4732 12.6739 15 14 15M14 15H15C15.1326 15 15.2598 14.9473 15.3536 14.8536C15.4473 14.7598 15.5 14.6326 15.5 14.5C15.5 14.3674 15.4473 14.2402 15.3536 14.1464C15.2598 14.0527 15.1326 14 15 14H14C13.8674 14 13.7402 14.0527 13.6464 14.1464C13.5527 14.2402 13.5 14.3674 13.5 14.5C13.5 14.6326 13.5527 14.7598 13.6464 14.8536C13.7402 14.9473 13.8674 15 14 15ZM3 21L4.65 17.2C3.38766 15.408 2.82267 13.217 3.06104 11.0381C3.29942 8.85915 4.32479 6.84211 5.94471 5.36549C7.56463 3.88887 9.66775 3.05418 11.8594 3.01807C14.051 2.98195 16.1805 3.7469 17.8482 5.16934C19.5159 6.59179 20.6071 8.57395 20.9172 10.7438C21.2272 12.9137 20.7347 15.1222 19.5321 16.9547C18.3295 18.7873 16.4994 20.118 14.3854 20.6971C12.2713 21.2762 10.0186 21.0639 8.05 20.1L3 21Z" stroke="black" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>

            <div className="font-['DM_Sans'] text-[16px] font-normal leading-6 text-black">
              99999-99999
            </div>
            <button className="ml-auto flex justify-center items-center px-4 py-1.5 w-[100px] h-[36px] rounded bg-transparent border-2 border-[#B75589]">
              <span className="font-['DM_Sans'] text-[16px] font-medium leading-6 text-[#B75589]">
                Message
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-row justify-between items-center px-4 gap-6 w-full h-14">
        {/* Close Button */}
        <button onClick={onClose}
        className="flex justify-center items-center px-6 py-3 w-[98px] h-14 bg-white border-2 border-[#B75589] rounded">
          <span className="font-['DM_Sans'] text-[18px] font-medium text-[#B75589]">
            Close
          </span>
        </button>

        {/* LinkedIn Button */}
        <button className="flex justify-center items-center px-6 py-3 w-[209px] h-14 bg-[#B75589] border-2 border-[#B75589] rounded gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 11V16M8 8V8.01M12 16V11M16 16V13C16 12.4696 15.7893 11.9609 15.4142 11.5858C15.0391 11.2107 14.5304 11 14 11C13.4696 11 12.9609 11.2107 12.5858 11.5858C12.2107 11.9609 12 12.4696 12 13M4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          <span className="font-['DM_Sans'] text-[18px] font-medium text-white">
            Go to LinkedIn
          </span>
        </button>
      </div>
    </div>
  );
};

export default JobCardDetail;
