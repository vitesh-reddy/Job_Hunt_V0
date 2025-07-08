import BasicDetailsDialogBox from "./components/BasicDetailsDialogBox";
import LocationDialogBox from "./components/LocationsDialogBox";
import RolesDialogBox from "./components/RolesDialogBox";
import SalaryDialogBox from "./components/SalaryDialogBox";
import SectionHeading from "./components/SectionHeading";
import SkillsDialogBox from "./components/SkillsDialogBox";

const MyAccount = () => {
  const textStyle = " text-[12px] 2xl:text-[14px] 2xl:leading-[20px] tracking-[-0.28px] text-black ";
  const name = "Vitesh Reddy"
  const updatedAt = "07/07/2024"
  const location = "Mumbai, India"
  const experience = "2.5 Years"
  const mobile = "8099269269"
  const email = "vitesh@gmail.com"
  const bio = "User-focused UX designer with 2+ years of experience in creating intuitive digital products. I specialize in simplifying complex interfaces and aligning user needs with business goals. Passionate about inclusive design and usability. Always curious, always learning etc"
  const roles = ["Figma", "UX Research", "UI/UX" ];
  const skills = [ "Figma", "UX Research", "UI/UX", "Wireframing", "Prototyping", "CSS/SCSS", "HTML/CSS", "Bootstrap", "Design Thinking", "Web Flow", "Framer", "Responsive Web Design", "Website Responsive Design", "JavaScript", "User flow", "UX Design" ];
  const jobType = ["Internship", "Full-Time - Junior (1 to 2 years)"];
  const jobLocations = ["Mumbai", "Pune", "Remote in India" ]
  const SalaryExpectation = { min: "₹12,000", max: "₹15,000" };
  const WorkExperiences = [ //Salary and Profile are not displayed, but used for Analytics
    {
      title: "UX Desinger",
      company: "Razorpay",
      type: "Full Time",
      startingDate: "Jan 2023",
      endingDate: "Dec 2024",
      salary: "₹10,000",
      jobProfile: "This is the job Profile"
    },
    {
      title: "Full Stack Developer",
      company: "Infits",
      type: "Internship",
      startingDate: "May 2025",
      endingDate: "Present",
      salary: "₹5,000",
      jobProfile: "This is the job Profile"
    }
  ]
  const jobStatus = 2

  const profileRing = jobStatus == 1 ? "border-[#77DA9F]" : jobStatus == 2 ? "border-[#FABD00]" :  "border-[#FFB4AB]";
  return (
    <div className="relative p-6 px-16 2xl:px-24 mx-auto space-y-[28px] xl:space-y-[32px] 2xl:space-y-[40px] font-manrope">
      {/* <BasicDetailsDialogBox/> */}
      {/* <SkillsDialogBox/> */}
      {/* <LocationsDialogBox/> */}
      {/* <RolesDialogBox/> */}
      {/* <SalaryDialogBox/> */}
      <h1 className="text-3xl xl:text-4xl 2xl:text-[64px] font-bold">My Account</h1>

      {/* Profile Header */}
      <div className="grid grid-cols-1 md:grid-cols-3 py-5 gap-4 px-5 rounded-[20px] shadow-section">
        <div className="flex items-center gap-4">
          <img
            src="https://assets.entrepreneur.com/content/3x2/2000/1657520498-Myproject372.jpg"
            alt="avatar"
            className={`w-[85px] h-[85px] 2xl:w-[96px] 2xl:h-[96px] rounded-full object-cover border-[6px] ${profileRing}`}
          />
          <div>
            <SectionHeading text={name} />
            <p className="text-[12px] text-[#A3A3A3] 2xl:text-[16px] ">Profile last update - <span className="text-[#000]"> {updatedAt} </span></p>
          </div>
        </div>

        <div className={`flex flex-col items-start gap-4 border-l-2 border-[#D9D9D9] px-[32px] ${textStyle}`}>
          <div className="flex items-center gap-2">
            <svg className="scale-70 xl:scale-80 2xl:scale-100" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
              <path d="M8.29948 9.16666C8.29948 9.8297 8.56287 10.4656 9.03171 10.9344C9.50055 11.4033 10.1364 11.6667 10.7995 11.6667C11.4625 11.6667 12.0984 11.4033 12.5672 10.9344C13.0361 10.4656 13.2995 9.8297 13.2995 9.16666C13.2995 8.50362 13.0361 7.86773 12.5672 7.39889C12.0984 6.93005 11.4625 6.66666 10.7995 6.66666C10.1364 6.66666 9.50055 6.93005 9.03171 7.39889C8.56287 7.86773 8.29948 8.50362 8.29948 9.16666Z" stroke="#47464C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15.5136 13.8808L11.9778 17.4167C11.6653 17.7289 11.2416 17.9042 10.7999 17.9042C10.3582 17.9042 9.93449 17.7289 9.62198 17.4167L6.08532 13.8808C5.153 12.9485 4.5181 11.7606 4.26089 10.4674C4.00368 9.17419 4.13572 7.83376 4.64032 6.61561C5.14491 5.39745 5.9994 4.35628 7.09572 3.62376C8.19204 2.89123 9.48096 2.50024 10.7995 2.50024C12.118 2.50024 13.4069 2.89123 14.5032 3.62376C15.5996 4.35628 16.4541 5.39745 16.9586 6.61561C17.4632 7.83376 17.5953 9.17419 17.3381 10.4674C17.0809 11.7606 16.446 12.9485 15.5136 13.8808Z" stroke="#47464C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>            
            <span className="text">{location}</span>
          </div>

          <div className="flex items-center gap-2">
            <svg className="scale-70 xl:scale-80 2xl:scale-100" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
            <path d="M14.1328 2.5V5.83333M7.46615 2.5V5.83333M4.13281 9.16667H17.4661M6.63281 11.6667H6.64365M9.14095 11.6667H9.14512M11.641 11.6667H11.6451M14.1454 11.6667H14.1496M11.6454 14.1667H11.6496M6.64095 14.1667H6.64512M9.14095 14.1667H9.14512M4.13281 5.83333C4.13281 5.39131 4.30841 4.96738 4.62097 4.65482C4.93353 4.34226 5.35745 4.16667 5.79948 4.16667H15.7995C16.2415 4.16667 16.6654 4.34226 16.978 4.65482C17.2906 4.96738 17.4661 5.39131 17.4661 5.83333V15.8333C17.4661 16.2754 17.2906 16.6993 16.978 17.0118C16.6654 17.3244 16.2415 17.5 15.7995 17.5H5.79948C5.35745 17.5 4.93353 17.3244 4.62097 17.0118C4.30841 16.6993 4.13281 16.2754 4.13281 15.8333V5.83333Z" stroke="#47464C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>{experience}</span>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 text-[12px] text-gray-600 border-l-2 border-[#D9D9D9] px-[32px]">
          <div className="flex items-center gap-2">
            <svg className="scale-70 xl:scale-80 2xl:scale-100" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
              <path d="M4.56706 3.33331H7.90039L9.56706 7.49998L7.48372 8.74998C8.37619 10.5596 9.84078 12.0242 11.6504 12.9166L12.9004 10.8333L17.0671 12.5V15.8333C17.0671 16.2753 16.8915 16.6993 16.5789 17.0118C16.2663 17.3244 15.8424 17.5 15.4004 17.5C12.1498 17.3024 9.08385 15.9221 6.78108 13.6193C4.47831 11.3165 3.09793 8.25059 2.90039 4.99998C2.90039 4.55795 3.07599 4.13403 3.38855 3.82147C3.70111 3.50891 4.12503 3.33331 4.56706 3.33331Z" stroke="#47464C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>            
            <span>{mobile}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="scale-70 xl:scale-80 2xl:scale-100" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
              <path d="M2.90039 5.83335C2.90039 5.39133 3.07599 4.9674 3.38855 4.65484C3.70111 4.34228 4.12503 4.16669 4.56706 4.16669H16.2337C16.6758 4.16669 17.0997 4.34228 17.4122 4.65484C17.7248 4.9674 17.9004 5.39133 17.9004 5.83335M2.90039 5.83335V14.1667C2.90039 14.6087 3.07599 15.0326 3.38855 15.3452C3.70111 15.6578 4.12503 15.8334 4.56706 15.8334H16.2337C16.6758 15.8334 17.0997 15.6578 17.4122 15.3452C17.7248 15.0326 17.9004 14.6087 17.9004 14.1667V5.83335M2.90039 5.83335L10.4004 10.8334L17.9004 5.83335" stroke="#47464C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>{email}</span>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className={`p-[28px] xl:p-[34px] 2xl:p-[40px] rounded-[20px] shadow-section space-y-2 text-[12px] 2xl:text-[14px] 2xl:leading-[20px] text-black`}>
        <SectionHeading text={"Bio"} />
        <p>{bio.slice(0, 265)} { (bio.length > 265) && (<>...{" "} <span className="font-semibold cursor-pointer">Read More</span> </>)} </p>
      </div>

      {/* Roles */}
      <div className="p-[28px] xl:p-[34px] 2xl:p-[40px] rounded-[20px] shadow-section space-y-3">
        <SectionHeading text={"Roles"} />
        <div className="flex flex-wrap gap-3 2xl:gap-4">
          {roles.map((role, idx) => (
            <span key={`${idx}_${role}`} className=" px-[16px] py-[5px] text-[10px] border-1 rounded-[4px]">
              {role}
            </span>
          ))}
        </div>
      </div>

      {/* Key Skills */}
      <div className="p-[28px] xl:p-[34px] 2xl:p-[40px] rounded-[20px] shadow-section space-y-3">
        <SectionHeading text={"Key Skills"} />
        <div className="flex flex-wrap gap-3 2xl:gap-4">
          {skills.map((skill, idx) => (
            <span key={`${idx}_${skill}`} className=" px-[16px] py-[5px] text-[10px] border-1 rounded-[4px]">
              {skill}
            </span>
          ))}
        </div>
      </div>    

      {/* Job Type */}
      <div className="p-[28px] xl:p-[34px] 2xl:p-[40px] rounded-[20px] shadow-section space-y-3">
        <SectionHeading text={"Job Type"} />
        <div className="flex flex-wrap gap-3 2xl:gap-4">
          {jobType.map((type, idx) => (
            <span key={`${idx}_${type}`} className=" px-[16px] py-[5px] text-[10px] border-1 rounded-[4px]">
              {type}
            </span>
          ))}
        </div>
      </div>

      {/* Job Locations */}
      <div className="p-[28px] xl:p-[34px] 2xl:p-[40px] rounded-[20px] shadow-section space-y-3">
        <SectionHeading text={"Job Locations"} />
        <div className="flex flex-wrap gap-3 2xl:gap-4">
          {jobLocations.map((location, idx) => (
            <span key={`${idx}_${location}`} className=" px-[16px] py-[5px] text-[10px] border-1 rounded-[4px]">
              {location}
            </span>
          ))}
        </div>
      </div>

      {/* Salary Expectation */}
      <div className={`p-[28px] xl:p-[34px] 2xl:p-[40px] rounded-[20px] shadow-section space-y-2 font-sans font-medium text-[14px] 2xl:text-[18px] 2xl:leading-[20px] tracking-[-0.28px] text-black`}>
        <SectionHeading text={"Salary Expectation"} />
        <p>{`${SalaryExpectation.min} - ${SalaryExpectation.max}`}</p>
        
      </div>        

      {/* Work Experience */}
      <div className="p-[28px] xl:p-[34px] 2xl:p-[40px] rounded-[20px] shadow-section space-y-4">
        <div className="flex items-center justify-between">
          <SectionHeading text={"Work Experience"} />
          <svg className="scale-80 xl:scale-90 2xl:scale-100" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M15 6.25V23.75M6.25 15H23.75" stroke="#47464C" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="space-y-4">
          {WorkExperiences.map(({title, company, type, startingDate, endingDate}, idx) => { return (
            <div key={`${idx}_${title}`}>
              <div className="flex items-center gap-1">
                <p className="text-[18px] 2xl:text-[20px] font-bold leading-[28px] tracking-[-0.4px]">{title}</p>
                <svg className="scale-70 2xl:scale-90" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M8.75 8.75H7.5C6.83696 8.75 6.20107 9.01339 5.73223 9.48223C5.26339 9.95107 5 10.587 5 11.25V22.5C5 23.163 5.26339 23.7989 5.73223 24.2678C6.20107 24.7366 6.83696 25 7.5 25H18.75C19.413 25 20.0489 24.7366 20.5178 24.2678C20.9866 23.7989 21.25 23.163 21.25 22.5V21.25M20 6.25L23.75 10M25.4813 8.23123C25.9736 7.73892 26.2501 7.07121 26.2501 6.37498C26.2501 5.67875 25.9736 5.01104 25.4813 4.51873C24.9889 4.02642 24.3212 3.74985 23.625 3.74985C22.9288 3.74985 22.2611 4.02642 21.7688 4.51873L11.25 15V18.75H15L25.4813 8.23123Z" stroke="#993D6F" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>                
              </div>
              <p className="text-[14px] 2xl:text-[18px] leading-[28px]">{company}</p>
              <p className="text-[12px] 2xl:text-[14px] 2xl:leading-[20px] text-[#A3A3A3]">{type} | {startingDate} to {endingDate} (1 year 5 months)</p>
            </div>
          )})}
        </div>
      </div>

      {/* Account */}
      <div className="p-[28px] xl:p-[34px] 2xl:p-[40px] rounded-[20px] shadow-section space-y-2">
        <SectionHeading text={"Account"} />
        <div className="flex items-center text-[14px] 2xl:text-[18px] leading-[28px]">
          <span>Current Email: example@gmail.com</span>
          <svg className="scale-70 2xl:scale-90" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M8.75 8.75H7.5C6.83696 8.75 6.20107 9.01339 5.73223 9.48223C5.26339 9.95107 5 10.587 5 11.25V22.5C5 23.163 5.26339 23.7989 5.73223 24.2678C6.20107 24.7366 6.83696 25 7.5 25H18.75C19.413 25 20.0489 24.7366 20.5178 24.2678C20.9866 23.7989 21.25 23.163 21.25 22.5V21.25M20 6.25L23.75 10M25.4813 8.23123C25.9736 7.73892 26.2501 7.07121 26.2501 6.37498C26.2501 5.67875 25.9736 5.01104 25.4813 4.51873C24.9889 4.02642 24.3212 3.74985 23.625 3.74985C22.9288 3.74985 22.2611 4.02642 21.7688 4.51873L11.25 15V18.75H15L25.4813 8.23123Z" stroke="#993D6F" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="flex items-center text-[14px] 2xl:text-[18px] leading-[28px]">
          <span>Password</span>
          <svg className="scale-70 2xl:scale-90" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M8.75 8.75H7.5C6.83696 8.75 6.20107 9.01339 5.73223 9.48223C5.26339 9.95107 5 10.587 5 11.25V22.5C5 23.163 5.26339 23.7989 5.73223 24.2678C6.20107 24.7366 6.83696 25 7.5 25H18.75C19.413 25 20.0489 24.7366 20.5178 24.2678C20.9866 23.7989 21.25 23.163 21.25 22.5V21.25M20 6.25L23.75 10M25.4813 8.23123C25.9736 7.73892 26.2501 7.07121 26.2501 6.37498C26.2501 5.67875 25.9736 5.01104 25.4813 4.51873C24.9889 4.02642 24.3212 3.74985 23.625 3.74985C22.9288 3.74985 22.2611 4.02642 21.7688 4.51873L11.25 15V18.75H15L25.4813 8.23123Z" stroke="#993D6F" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
