// pages/my-account/index.jsx
import { useState } from "react";
import useUserStore from "@store/userStore";
import BasicDetailsDialogBox from "./components/BasicDetailsDialogBox";
import SectionHeading from "./components/SectionHeading";
import BioDialogBox from "./components/BioDialogBox";
import LocationsDialogBox from "./components/LocationsDialogBox";
import RolesDialogBox from "./components/RolesDialogBox";
import SalaryDialogBox from "./components/SalaryDialogBox";
import SkillsDialogBox from "./components/SkillsDialogBox";
import WorkExperienceDialogBox from "./components/WorkExperienceDialogBox";
import JobTypeDialogBox from "./components/JobTypeDialogBox";
import PasswordDialogBox from "./components/PasswordDialogBox";
import IdentifierDialogBox from "./components/IdentifierDialogBox";

const MyAccount = () => {

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const { user } = useUserStore();
  const [showFullBio, setShowFullBio] = useState(false);

  const [activeDialog, setActiveDialog] = useState({ type: "", props: {} });
  const openDialog = (dialogType, dialogProps = {}) => setActiveDialog({ type: dialogType, props: dialogProps });
  const closeDialog = () => setActiveDialog({ type: "", props: {} });

  const profileRing =
    user?.jobSearchStatus === "Actively looking"
      ? "border-[#77DA9F]"
      : user?.jobSearchStatus === "Not looking but open to offers"
      ? "border-[#FABD00]"
      : "border-[#FFB4AB]";

  const date = new Date(user.updatedAt);

  const day = date.toLocaleString("en-IN", { day: "2-digit", timeZone: "Asia/Kolkata" });
  const month = date.toLocaleString("en-IN", { month: "2-digit", timeZone: "Asia/Kolkata" });
  const year = date.toLocaleString("en-IN", { year: "numeric", timeZone: "Asia/Kolkata" }); 

  const totalExperience = user?.workExperiences?.length > 0
    ? user.workExperiences.reduce((total, exp) => {
        const startDate = new Date(exp.startingDate.year, exp.startingDate.month - 1);
        const endDate = exp.employmentStatus === 'Yes' ? new Date() : new Date(exp.endingDate.year, exp.endingDate.month - 1);
        const diffTime = Math.abs(endDate - startDate);
        const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365);
        return total + diffYears;
      }, 0)
    : 0;

  const formatExperience = (years) => {
    if (years === 0) return "No experience";
    const wholeYears = Math.floor(years);
    const months = Math.round((years - wholeYears) * 12);
    if (wholeYears === 0) return `${months} month${months !== 1 ? 's' : ''}`;
    if (months === 0) return `${wholeYears} year${wholeYears !== 1 ? 's' : ''}`;
    return `${wholeYears} year${wholeYears !== 1 ? 's' : ''} and ${months} month${months !== 1 ? 's' : ''}`;
  };       

  return (
    <div className="relative p-6 px-16 2xl:px-24 mx-auto space-y-[28px] xl:space-y-[32px] 2xl:space-y-[40px] font-manrope">
      {activeDialog.type === "basic" && <BasicDetailsDialogBox onClose={closeDialog} />}
      {activeDialog.type === "bio" && <BioDialogBox onClose={closeDialog} />}
      {activeDialog.type === "skills" && <SkillsDialogBox onClose={closeDialog} />}
      {activeDialog.type === "roles" && <RolesDialogBox onClose={closeDialog} />}
      {activeDialog.type === "salary" && <SalaryDialogBox onClose={closeDialog} />}
      {activeDialog.type === "jobTypes" && <JobTypeDialogBox onClose={closeDialog} />}
      {activeDialog.type === "locations" && <LocationsDialogBox onClose={closeDialog} />}  
      {activeDialog.type === "workExperience" && <WorkExperienceDialogBox onClose={closeDialog} {...activeDialog.props} />}
      {activeDialog.type === "password" && <PasswordDialogBox onClose={closeDialog} />}  
      {activeDialog.type === "identifier" && <IdentifierDialogBox onClose={closeDialog} />}  

      
      <h1 className="text-3xl xl:text-4xl 2xl:text-[64px] font-bold">My Account</h1>

      {/* Profile Header */}
      <div className="grid grid-cols-1 md:grid-cols-3 py-5 gap-4 px-5 rounded-[20px] shadow-section">
        <div className="flex items-center gap-4">
          <div className={`w-[85px] h-[85px] 2xl:w-[96px] 2xl:h-[96px] bg-[#B1ECFF] rounded-full border-[6px] ${profileRing}`}>
            {user?.profilePicture ? 
              (<img src={user?.profilePicture} alt="avatar" className="object-cover size-full rounded-full"/>)
              :
              <img src="/assets/Profile Icon.svg" alt="Profile Icon" className="scale-80 size-full" />
            }
          </div>

          <div>
            <SectionHeading text={user?.name || "Unnamed User"} onEditClick={() => openDialog("basic")} />
            <p className="text-[12px] text-[#A3A3A3] 2xl:text-[16px]">
              Profile last update -{" "}
              <span className="text-[#000]">{user?.updatedAt ? `${day}/${month}/${year}` : "--/--/----"}</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 border-l-2 border-[#D9D9D9] px-[32px] text-[12px] 2xl:text-[14px] 2xl:leading-[20px] tracking-[-0.28px] text-black">
          <div className="flex items-center gap-2">
            <svg className="scale-70 xl:scale-80 2xl:scale-100" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
              <path d="M8.29948 9.16666C8.29948 9.8297 8.56287 10.4656 9.03171 10.9344C9.50055 11.4033 10.1364 11.6667 10.7995 11.6667C11.4625 11.6667 12.0984 11.4033 12.5672 10.9344C13.0361 10.4656 13.2995 9.8297 13.2995 9.16666C13.2995 8.50362 13.0361 7.86773 12.5672 7.39889C12.0984 6.93005 11.4625 6.66666 10.7995 6.66666C10.1364 6.66666 9.50055 6.93005 9.03171 7.39889C8.56287 7.86773 8.29948 8.50362 8.29948 9.16666Z" stroke="#AA1299" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15.5136 13.8808L11.9778 17.4167C11.6653 17.7289 11.2416 17.9042 10.7999 17.9042C10.3582 17.9042 9.93449 17.7289 9.62198 17.4167L6.08532 13.8808C5.153 12.9485 4.5181 11.7606 4.26089 10.4674C4.00368 9.17419 4.13572 7.83376 4.64032 6.61561C5.14491 5.39745 5.9994 4.35628 7.09572 3.62376C8.19204 2.89123 9.48096 2.50024 10.7995 2.50024C12.118 2.50024 13.4069 2.89123 14.5032 3.62376C15.5996 4.35628 16.4541 5.39745 16.9586 6.61561C17.4632 7.83376 17.5953 9.17419 17.3381 10.4674C17.0809 11.7606 16.446 12.9485 15.5136 13.8808Z" stroke="#AA1299" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text">
              {user?.location
                ? [user.location.city, user.location.country].filter(Boolean).join(", ")
                : "--"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <svg className="scale-70 xl:scale-80 2xl:scale-100" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
              <path d="M14.1328 2.5V5.83333M7.46615 2.5V5.83333M4.13281 9.16667H17.4661M6.63281 11.6667H6.64365M9.14095 11.6667H9.14512M11.641 11.6667H11.6451M14.1454 11.6667H14.1496M11.6454 14.1667H11.6496M6.64095 14.1667H6.64512M9.14095 14.1667H9.14512M4.13281 5.83333C4.13281 5.39131 4.30841 4.96738 4.62097 4.65482C4.93353 4.34226 5.35745 4.16667 5.79948 4.16667H15.7995C16.2415 4.16667 16.6654 4.34226 16.978 4.65482C17.2906 4.96738 17.4661 5.39131 17.4661 5.83333V15.8333C17.4661 16.2754 17.2906 16.6993 16.978 17.0118C16.6654 17.3244 16.2415 17.5 15.7995 17.5H5.79948C5.35745 17.5 4.93353 17.3244 4.62097 17.0118C4.30841 16.6993 4.13281 16.2754 4.13281 15.8333V5.83333Z" stroke="#AA1299" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>{formatExperience(totalExperience)}</span> {/* Experience in years, calculated using work experiences */}
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 text-[12px] text-gray-600 border-l-2 border-[#D9D9D9] px-[32px]">
          <div className="flex items-center gap-2">
            <svg className="scale-70 xl:scale-80 2xl:scale-100" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
              <path d="M4.56706 3.33331H7.90039L9.56706 7.49998L7.48372 8.74998C8.37619 10.5596 9.84078 12.0242 11.6504 12.9166L12.9004 10.8333L17.0671 12.5V15.8333C17.0671 16.2753 16.8915 16.6993 16.5789 17.0118C16.2663 17.3244 15.8424 17.5 15.4004 17.5C12.1498 17.3024 9.08385 15.9221 6.78108 13.6193C4.47831 11.3165 3.09793 8.25059 2.90039 4.99998C2.90039 4.55795 3.07599 4.13403 3.38855 3.82147C3.70111 3.50891 4.12503 3.33331 4.56706 3.33331Z" stroke="#AA1299" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>{user?.mobile?.countryCode && user?.mobile?.number ? `${user.mobile.countryCode || "+91"} ${user.mobile.number}` : "--"}</span>
          </div>

          <div className="flex items-center gap-2">
            <svg className="scale-70 xl:scale-80 2xl:scale-100" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
              <path d="M2.90039 5.83335C2.90039 5.39133 3.07599 4.9674 3.38855 4.65484C3.70111 4.34228 4.12503 4.16669 4.56706 4.16669H16.2337C16.6758 4.16669 17.0997 4.34228 17.4122 4.65484C17.7248 4.9674 17.9004 5.39133 17.9004 5.83335M2.90039 5.83335V14.1667C2.90039 14.6087 3.07599 15.0326 3.38855 15.3452C3.70111 15.6578 4.12503 15.8334 4.56706 15.8334H16.2337C16.6758 15.8334 17.0997 15.6578 17.4122 15.3452C17.7248 15.0326 17.9004 14.6087 17.9004 14.1667V5.83335M2.90039 5.83335L10.4004 10.8334L17.9004 5.83335" stroke="#AA1299" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>{user?.email || "--"}</span>
          </div>
        </div>
      </div>
      
      {/* Bio */}
      <div className={`p-[28px] xl:p-[34px] 2xl:p-[40px] rounded-[20px] shadow-section space-y-2 text-[12px] 2xl:text-[14px] 2xl:leading-[20px] text-black`}>
        <SectionHeading text={"Bio"} onEditClick={() => openDialog("bio")} />
        {user?.bio ? (
          <p>
            {showFullBio ? user.bio : user.bio.slice(0, 265)}
            {user.bio.length > 265 && (
              <>{showFullBio ? "  " : "... "} {" "}
                <span className="font-semibold cursor-pointer text-[#AA1299] underline" onClick={() => setShowFullBio(!showFullBio)} >
                  {showFullBio ? "Read Less" : "Read More"}
                </span>
              </>
            )}
          </p>
        ) : (
          <p className=" text-[#47464C]">Add your Bio here</p>
        )}
      </div>      

      {/* Roles */}
      <div className="p-[28px] xl:p-[34px] 2xl:p-[40px] rounded-[20px] shadow-section space-y-3">
        <SectionHeading text="Roles" onEditClick={() => openDialog("roles")} />
        <div className="flex flex-wrap gap-3 2xl:gap-4">
          {user?.roles?.length > 0 ? (
            user.roles.map((role, idx) => (
              <span key={`${idx}_${role}`} className="px-[16px] py-[5px] text-[10px] border-1 rounded-[4px]">
                {role}
              </span>
            ))
          ) : (
            <p className="text-[12px] 2xl:text-[14px] 2xl:leading-[20px] text-[#47464C]">No Interested Roles selected</p>    
          )}
        </div>
      </div>

      {/* Key Skills */}
      <div className="p-[28px] xl:p-[34px] 2xl:p-[40px] rounded-[20px] shadow-section space-y-3">
        <SectionHeading text="Key Skills" onEditClick={() => openDialog("skills")} />
        <div className="flex flex-wrap gap-3 2xl:gap-4">
          {user?.skills?.length > 0 ? (
            user.skills.map((skill, idx) => (
              <span key={`${idx}_${skill}`} className="px-[16px] py-[5px] text-[10px] border-1 rounded-[4px]">
                {skill}
              </span>
            ))
          ) : (
            <p className="text-[12px] 2xl:text-[14px] 2xl:leading-[20px] text-[#47464C]">No key skills selected</p>
          )}
        </div>
      </div>   

      {/* Job Type */}
      <div className="p-[28px] xl:p-[34px] 2xl:p-[40px] rounded-[20px] shadow-section space-y-3">
        <SectionHeading text="Job Type" onEditClick={() => openDialog("jobTypes")} />
        <div className="flex flex-wrap gap-3 2xl:gap-4">
          {user?.jobTypes?.types?.length > 0 || user?.jobTypes?.levels?.length > 0 ? (
            [...(user?.jobTypes?.types || []), ...(user?.jobTypes?.levels || [])].map((item, idx) => (
              <span key={`${idx}_${item}`} className="px-[16px] py-[5px] text-[10px] border-1 rounded-[4px]">
                {item}
              </span>
            ))
          ) : (
            <p className="text-[12px] 2xl:text-[14px] text-[#47464C]">No job types or role levels selected</p>
          )}
        </div>
      </div>     

      {/* Job Locations */}
      <div className="p-[28px] xl:p-[34px] 2xl:p-[40px] rounded-[20px] shadow-section space-y-3">
        <SectionHeading text="Job Locations" onEditClick={() => openDialog("locations")} />
        <div className="flex flex-wrap gap-3 2xl:gap-4">
          {user?.jobLocations?.length > 0 ? (
            user.jobLocations.map((location, idx) => (
              <span key={`${idx}_${location}`} className="px-[16px] py-[5px] text-[10px] border-1 rounded-[4px]">
                {location}
              </span>
            ))
          ) : (
            <p className="text-[12px] 2xl:text-[14px] text-[#47464C]">No job locations selected</p>
          )}
        </div>
      </div>

      {/* Salary Expectation */}
      <div className="p-[28px] xl:p-[34px] 2xl:p-[40px] rounded-[20px] shadow-section space-y-2 text-black">
        <SectionHeading text="Salary Expectation" onEditClick={() => openDialog("salary")} />
        {user?.expectedSalary?.min != null && user?.expectedSalary?.max != null ? (
          <p className="font-sans font-medium text-[14px] 2xl:text-[18px] 2xl:leading-[20px] tracking-[-0.28px]">{`₹${user.expectedSalary.min.toLocaleString('en-IN')} - ₹${user.expectedSalary.max.toLocaleString('en-IN')}`}</p>
        ) : (
          <p className="text-[12px] 2xl:text-[14px] text-[#47464C]">No salary expectation set</p>
        )}
      </div>
      
      {/* Work Experience */}
      <div className="p-[28px] xl:p-[34px] 2xl:p-[40px] rounded-[20px] shadow-section space-y-4">
        <div className="flex items-center justify-between">
          <SectionHeading text="Work Experience" />
          <svg
            className="scale-80 xl:scale-90 2xl:scale-100 cursor-pointer"
            onClick={() => openDialog("workExperience", { mode: "add" })} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M15 6.25V23.75M6.25 15H23.75" stroke="#47464C" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="space-y-4">
          {user?.workExperiences?.length > 0 ? (
            user.workExperiences.map((exp, idx) => {
              const startDate = new Date(exp.startingDate.year, exp.startingDate.month - 1);
              const endDate = exp.employmentStatus === 'Yes' ? new Date() : new Date(exp.endingDate.year, exp.endingDate.month - 1);
              const diffTime = Math.abs(endDate - startDate);
              const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
              const diffMonths = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
              const duration = `${diffYears > 0 ? `${diffYears} year${diffYears !== 1 ? 's' : ''}` : ''}${diffYears > 0 && diffMonths > 0 ? ' ' : ''}${diffMonths > 0 ? `${diffMonths} month${diffMonths !== 1 ? 's' : ''}` : ''}`.trim() || '0 months';
              return (
                <div key={`${idx}_${exp.jobTitle}`}>
                  <div className="flex items-center gap-1">
                    <p className="text-[18px] 2xl:text-[20px] font-bold leading-[28px] tracking-[-0.4px]">{exp.jobTitle}</p>
                    <svg
                      className="scale-70 2xl:scale-90 cursor-pointer"
                      onClick={() => openDialog("workExperience", { mode: "edit", index: idx, experience: { ...exp, salary: { ...exp.salary }, startingDate: { ...exp.startingDate }, endingDate: exp.endingDate ? { ...exp.endingDate } : null } })} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" >
                      <path d="M8.75 8.75H7.5C6.83696 8.75 6.20107 9.01339 5.73223 9.48223C5.26339 9.95107 5 10.587 5 11.25V22.5C5 23.163 5.26339 23.7989 5.73223 24.2678C6.20107 24.7366 6.83696 25 7.5 25H18.75C19.413 25 20.0489 24.7366 20.5178 24.2678C20.9866 23.7989 21.25 23.163 21.25 22.5V21.25M20 6.25L23.75 10M25.4813 8.23123C25.9736 7.73892 26.2501 7.07121 26.2501 6.37498C26.2501 5.67875 25.9736 5.01104 25.4813 4.51873C24.9889 4.02642 24.3212 3.74985 23.625 3.74985C22.9288 3.74985 22.2611 4.02642 21.7688 4.51873L11.25 15V18.75H15L25.4813 8.23123Z" stroke="#993D6F" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-[14px] 2xl:text-[18px] leading-[28px]">{exp.companyName}</p>
                  <p className="text-[12px] 2xl:text-[14px] 2xl:leading-[20px] text-[#A3A3A3]">
                    {exp.employmentType} | {`${months[exp.startingDate.month - 1]} ${exp.startingDate.year}`} to {exp.employmentStatus === 'Yes' ? 'Present' : `${months[exp.endingDate.month - 1]} ${exp.endingDate.year}`} ({duration})
                  </p>
                </div>
              );
            })
          ) : (
            <p className="text-[12px] 2xl:text-[14px] text-[#47464C]">No work experiences added</p>
          )}
        </div>
      </div>

      {/* Account */}
      <div className="p-[28px] xl:p-[34px] 2xl:p-[40px] rounded-[20px] shadow-section space-y-2">
        <SectionHeading text={"Account"} />
        <div className="flex items-center text-[14px] 2xl:text-[18px] leading-[28px]">
          <span>Current {user.identifierType}: {user.identifier}</span>
          <svg onClick={() => openDialog("identifier")} className="scale-70 2xl:scale-90 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M8.75 8.75H7.5C6.83696 8.75 6.20107 9.01339 5.73223 9.48223C5.26339 9.95107 5 10.587 5 11.25V22.5C5 23.163 5.26339 23.7989 5.73223 24.2678C6.20107 24.7366 6.83696 25 7.5 25H18.75C19.413 25 20.0489 24.7366 20.5178 24.2678C20.9866 23.7989 21.25 23.163 21.25 22.5V21.25M20 6.25L23.75 10M25.4813 8.23123C25.9736 7.73892 26.2501 7.07121 26.2501 6.37498C26.2501 5.67875 25.9736 5.01104 25.4813 4.51873C24.9889 4.02642 24.3212 3.74985 23.625 3.74985C22.9288 3.74985 22.2611 4.02642 21.7688 4.51873L11.25 15V18.75H15L25.4813 8.23123Z" stroke="#993D6F" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="flex items-center text-[14px] 2xl:text-[18px] leading-[28px]">
          <span>Password</span>
          <svg onClick={() => openDialog("password")} className="scale-70 2xl:scale-90 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M8.75 8.75H7.5C6.83696 8.75 6.20107 9.01339 5.73223 9.48223C5.26339 9.95107 5 10.587 5 11.25V22.5C5 23.163 5.26339 23.7989 5.73223 24.2678C6.20107 24.7366 6.83696 25 7.5 25H18.75C19.413 25 20.0489 24.7366 20.5178 24.2678C20.9866 23.7989 21.25 23.163 21.25 22.5V21.25M20 6.25L23.75 10M25.4813 8.23123C25.9736 7.73892 26.2501 7.07121 26.2501 6.37498C26.2501 5.67875 25.9736 5.01104 25.4813 4.51873C24.9889 4.02642 24.3212 3.74985 23.625 3.74985C22.9288 3.74985 22.2611 4.02642 21.7688 4.51873L11.25 15V18.75H15L25.4813 8.23123Z" stroke="#993D6F" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
