import { useState, useEffect, useRef } from "react";
import ExtensionSidebar from "./ExtensionSidebar";
import DragTrack from "./DragTrack";
import KeywordMatchPanel from "./KeywordMatchPanel";
import Bio from "./Bio";

const ExtensionTutorialModal = ({ show, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [modalStyle, setModalStyle] = useState({});
  const [isLargeScreen, setIsLargeScreen] = useState(false); 
  const modalRef = useRef();

  const tutorialSteps = [
    {
      title: "Welcome to our Extension ✨",
      content:
        "Autofill pulls from your profile. Note: Gray icons indicate unsupported jobs.",
      position: { top: "135px", right: "160px" },
    },
    {
      content: "Click on AUTOFILL to see the extension in action.",
      position: { top: "135px", right: "460px" },
    },
    {
      title:
        "Answer any custom questions - the extension automatically saves your responses for next time.",
      content:
        "Your saved answers will automatically fill in identical questions on future applications.",
      position: { top: "373px", left: "428px" },
      style: {
        width: "480px",
        height: "320px",
        padding: "32px",
        borderRadius: "8px",
        opacity: 1,
        transform: "rotate(0deg)",
      },
    },
    {
      title: "Tailor your resume for each job in seconds - right on the page.",
      content:
        "Spot missing keywords instantly and add them to your resume with one click!",
      position: { top: "135px", right: "460px" },
    },
    {
      title: "Click any text in profile to copy it instantly to your clipboard.",
      content:
        "Seamlessly copy your details and paste them into any application.",
      position: { top: "135px", right: "460px" },
    },
    {
  title: "🎉 You’re All Set!",
  content: "Go forth and conquer job applications like a pro!",
  position: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)", // shift back half its size
  },
}

  ];

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === tutorialSteps.length - 1;
  const currentData = tutorialSteps[currentStep];

  
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint
    };
    handleResize(); // run once
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (currentData.position) {
      setModalStyle({
        position: "fixed",
        zIndex: 55,
        ...currentData.position,
      });
    }
  }, [currentStep]);

  
  if (!show || !isLargeScreen) return null;

  return (
    <>
      {currentStep === 0 && (
        <div className="z-[60] fixed top-0 right-0">
          <DragTrack onStepNext={() => setCurrentStep(1)} />
        </div>
      )}

      {currentStep === 1 && (
        <div className="z-[60] fixed top-0 right-0">
          <ExtensionSidebar />
        </div>
      )}
      {currentStep === 3 && (
        <div className="z-[60] fixed top-0 right-0">
          <KeywordMatchPanel />
        </div>
      )}
      {currentStep === 4 && (
        <div className="z-[60] fixed top-0 right-0">
          <Bio />
        </div>
      )}

      {/* Dimmed overlay */}
      <div
        className="fixed inset-0 bg-[#1B1C1E]/75 z-50"
        onClick={onClose}
      />

      {/* Tutorial Modal */}
      <div ref={modalRef} style={modalStyle}>
        <div
          className="relative bg-white rounded-[8px] shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15)] drop-shadow-[0px_1px_2px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center"
          style={{
            width: currentData.style?.width || "480px",
            height: currentData.style?.height || "244px",
            padding: currentData.style?.padding || "24px 32px",
          }}
        >
          {/* Title */}
          {currentData.title && (
            <h2 className="text-[24px] font-bold leading-[38px] font-[Manrope] text-center text-[#1B1C1C] mb-2">
              {currentData.title}
            </h2>
          )}

          {/* Message */}
          <p className="text-[#47464C] text-center font-[DM Sans] text-[18px] font-light leading-[28px] tracking-[0.5px] mb-4">
            {currentData.content}
          </p>

          {/* Buttons */}
          <div className="flex justify-between items-center w-full px-8 relative z-10">
            <button
              onClick={isFirstStep ? onClose : () => setCurrentStep(currentStep - 1)}
              className="text-[#47464C] text-[16px] font-medium leading-[24px]"
            >
              {isFirstStep ? "Close" : "Back"}
            </button>
            <button
              onClick={isLastStep ? onClose : () => setCurrentStep(currentStep + 1)}
              className="bg-[#B75589] text-white text-[16px] font-medium px-4 py-[6px] rounded-[4px] leading-[24px]"
            >
              {isLastStep ? "Get Started" : "Next"}
            </button>
          </div>

          {/* Conditional Triangle */}
          {currentStep === 2 && (
            <div className="absolute left-1/2 bottom-[-40px] transform -translate-x-1/2 w-[88px] h-[75px]">
              <svg width="88" height="75" viewBox="0 0 88 75" fill="none">
                <path d="M44 75L87.3013 0L0.69873 0L44 75Z" fill="white" />
              </svg>
            </div>
          )}

          {currentStep !== 2 && currentStep !== 5 && (
            <svg
              width="75"
              height="88"
              viewBox="0 0 75 88"
              fill="none"
              className="absolute right-[-40px] top-0 z-0"
            >
              <path d="M75 44L0 0.69873V87.3013L75 44Z" fill="white" />
            </svg>
          )}
        </div>
      </div>
    </>
  );
};

export default ExtensionTutorialModal;
