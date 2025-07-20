import { useEffect, useState } from "react";

const TutorialModal = ({ show, onClose, onOpenDropdown, onShowJobDetails, onCloseJobDetails }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [tooltipDirection, setTooltipDirection] = useState("right");

  const tutorialSteps = [
    {
      title: "Welcome to Job Tracker ✨",
      content: "Get ready to transform your job search. This powerful feature brings unprecedented clarity and control to your applications, making landing your dream role simpler and more organized than ever imagined. Let's dive into how it makes your life easier!",
      targetSelector: null,
      position: "center",
      requiresDropdown: false,
      requiresJobDetails: false
    },
    {
      content: "Your job hunt is unique, and your tracker should be too! Effortlessly add custom status columns to perfectly mirror your personal application journey. This means your tracker truly works for you, adapting to your exact needs with zero fuss.",
      targetSelector: "addColumn",
      position: "tooltip",
      requiresDropdown: false,
      requiresJobDetails: false
    },
    {
      content: "No matter how many applications you're juggling, finding specific jobs is a breeze! Search by Role or Company, Filter by Applied Dates or Filter by Application Status.",
      targetSelector: "search-filters",
      position: "tooltip",
      requiresDropdown: false,
      requiresJobDetails: false
    },
    {
      content: "A single click on any job card and get all the crucial information at your fingertips! Quickly review job descriptions, access company details, and add personal notes for easy recall.",
      targetSelector: "JobDetailsPage",
      position: "tooltip",
      requiresDropdown: false,
      requiresJobDetails: true
    },
    {
      content: "The best part? When you move a card to the Interview column, you can effortlessly set custom email reminders for interviews or follow-ups, guaranteeing you're always prepared and professional.",
      targetSelector: "ReminderSection",
      position: "tooltip",
      requiresDropdown: false,
      requiresJobDetails: true
    },
    {
      content: "Easily and definitively mark the outcome of your applications! Clicking either button automatically moves the job card to its final designated column, giving you a satisfying and clear overview of your successful placements and completed journeys.",
      targetSelector: "JobCard",
      position: "tooltip",
      requiresDropdown: false,
      requiresJobDetails: false
    },
    {
      content: "Zero manual entry for jobs found here! This smart automation captures every exciting opportunity instantly, ensuring your focus stays on applying, not on tedious data entry.",
      targetSelector: "JobStatusColumn",
      position: "tooltip",
      requiresDropdown: false,
      requiresJobDetails: false
    },
    {
      content: "Don't let any opportunity slip through the cracks! This button allows you to quickly create and add job cards for applications you've made anywhere else, ensuring every single job search effort is perfectly consolidated in one, easy-to-manage place.",
      targetSelector: "addJobButton",
      position: "tooltip",
      requiresDropdown: false,
      requiresJobDetails: false
    },
    {
      content: "Need to add many jobs at once? Simply select the option to download our user-friendly Excel template. Fill in your job details in the pre-formatted columns.",
      targetSelector: "TemplateExcelbutton",
      position: "tooltip",
      requiresDropdown: true,
      requiresJobDetails: false
    },
    {
      content: "Save hours of manual entry! Just upload the completed sheet, and watch as all your applications are instantly populated into your tracker, perfectly organized and ready to manage. It's the fastest way to get your entire job search centralized!",
      targetSelector: "BulkImportbutton",
      position: "tooltip",
      requiresDropdown: true,
      requiresJobDetails: false
    },
    {
      content: "Need a personal record or want to analyze your progress offline? Instantly export your entire tracking data as a .CSV file, giving you complete ownership and flexibility with your information.",
      targetSelector: "DownloadasExcelbutton",
      position: "tooltip",
      requiresDropdown: true,
      requiresJobDetails: false
    },
    {
      content: "This menu also provides another super convenient way to add new status columns to your tracking area, allowing you to fine-tune your workflow on the fly.",
      targetSelector: "AddColumnbutton",
      position: "tooltip",
      requiresDropdown: true,
      requiresJobDetails: false
    },
    {
      content: "Managing applications has never been this easy! Simply drag and drop job cards between columns as their status changes. This incredibly visual and intuitive system gives you an instant, crystal-clear overview of every application's progress, eliminating guesswork and dramatically boosting your organization and peace of mind.",
      targetSelector: "DivBox",
      position: "tooltip",
      requiresDropdown: false,
      requiresJobDetails: false
    },
    {
      content: "Remember, you can always revisit this tutorial anytime by accessing it through the dropdown menu at the top of your tracking area. Happy job hunting!",
      targetSelector: "tutorial-dropdown",
      position: "tooltip",
      requiresDropdown: true,
      requiresJobDetails: false
    },
    {
      title: "You're All Set! Unlock Your Job Search Potential! 🚀",
      content: "Your journey to a more organized and successful job search starts now! You've mastered the essentials of your powerful Job Tracker, giving you the clarity and control you need to land your dream role.",
      targetSelector: null,
      position: "center",
      requiresDropdown: false,
      requiresJobDetails: false
    }
  ];

  const currentStepData = tutorialSteps[currentStep];
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === tutorialSteps.length - 1;

  useEffect(() => {
    if (show) {
      setCurrentStep(0);
    }
  }, [show]);

  // Handle dropdown and job details display based on current step
  useEffect(() => {
    if (!show) return;

    const currentStepData = tutorialSteps[currentStep];
    
    // Handle dropdown opening
    if (currentStepData.requiresDropdown) {
      onOpenDropdown && onOpenDropdown(true);
    } else {
      onOpenDropdown && onOpenDropdown(false);
    }

    // Handle job details display
    if (currentStepData.requiresJobDetails) {
      onShowJobDetails && onShowJobDetails();
    } else {
      onCloseJobDetails && onCloseJobDetails();
    }

    // Cleanup function
    return () => {
      if (!show) {
        onOpenDropdown && onOpenDropdown(false);
        onCloseJobDetails && onCloseJobDetails();
      }
    };
  }, [show, currentStep, onOpenDropdown, onShowJobDetails, onCloseJobDetails]);

  // Calculate position based on target element
  useEffect(() => {
    if (!show || !currentStepData.targetSelector) return;

    const updatePosition = () => {
      const targetElement = document.getElementById(currentStepData.targetSelector);
      if (!targetElement) return;

      const rect = targetElement.getBoundingClientRect();
      const modalWidth = 300;
      const modalHeight = 200;
      const padding = 16;
      const spacing = 12;

      const available = {
        left: rect.left,
        right: window.innerWidth - rect.right,
        top: rect.top,
        bottom: window.innerHeight - rect.bottom
      };

      let x = 0;
      let y = 0;
      let direction = "center";

      if (available.right >= modalWidth + spacing + padding) {
        x = rect.right + spacing;
        y = rect.top + (rect.height - modalHeight) / 2;
        direction = "right";
      } else if (available.left >= modalWidth + spacing + padding) {
        x = rect.left - modalWidth - spacing;
        y = rect.top + (rect.height - modalHeight) / 2;
        direction = "left";
      } else if (available.top >= modalHeight + spacing + padding) {
        x = rect.left + (rect.width - modalWidth) / 2;
        y = rect.top - modalHeight - spacing;
        direction = "top";
      } else if (available.bottom >= modalHeight + spacing + padding) {
        x = rect.left + (rect.width - modalWidth) / 2;
        y = rect.bottom + spacing;
        direction = "bottom";
      } else {
        x = (window.innerWidth - modalWidth) / 2;
        y = (window.innerHeight - modalHeight) / 2;
        direction = "center";
      }

      x = Math.max(padding, Math.min(x, window.innerWidth - modalWidth - padding));
      y = Math.max(padding, Math.min(y, window.innerHeight - modalHeight - padding));

      setTooltipDirection(direction);
      setTooltipPosition({ x, y });
    };

    const timeout = setTimeout(updatePosition, 100);
    window.addEventListener("resize", updatePosition);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", updatePosition);
    };
  }, [show, currentStep, currentStepData.targetSelector]);

  const handleNext = () => {
    if (isLastStep) {
      onClose();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (isFirstStep) {
      onClose();
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    onClose();
  };

  // Cleanup function for highlights
  const cleanupHighlight = () => {
    document.querySelectorAll('.tutorial-highlight').forEach(el => {
      el.style.boxShadow = '';
      el.style.border = '';
      el.style.borderRadius = '';
      el.style.backgroundColor = '';
      el.classList.remove('tutorial-highlight');
    });

    // Remove overlay elements
    document.querySelectorAll('.tutorial-overlay').forEach(el => {
      el.remove();
    });
  };

  // Effect to handle highlighting with overlay
  useEffect(() => {
    if (!show) return;

    cleanupHighlight();

    if (currentStepData.targetSelector) {
      const targetElement = document.getElementById(currentStepData.targetSelector);
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();

        // Create overlay element
        const overlay = document.createElement('div');
        overlay.className = 'tutorial-overlay';
        overlay.style.cssText = `
          position: fixed;
          top: ${rect.top - 8}px;
          left: ${rect.left - 8}px;
          width: ${rect.width + 16}px;
          height: ${rect.height + 16}px;
          border: 3px solid #e879f9;
          border-radius: 8px;
          background-color: rgba(232, 121, 249, 0.1);
          pointer-events: none;
          z-index: 60;
          box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.5);
        `;

        document.body.appendChild(overlay);
        targetElement.classList.add('tutorial-highlight');
      }
    }

    return () => {
      cleanupHighlight();
    };
  }, [show, currentStep, currentStepData.targetSelector]);

  // Clean up when modal is hidden
  useEffect(() => {
    if (!show) {
      cleanupHighlight();
    }
  }, [show]);

  if (!show) return null;

  const modalStyle = currentStepData.position === 'center' ? {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 70
  } : {
    position: 'fixed',
    left: `${tooltipPosition.x}px`,
    top: `${tooltipPosition.y}px`,
    zIndex: 70
  };

  return (
    <>
      {/* Only show backdrop for center positioned modals */}
      {currentStepData.position === 'center' && (
        <div
          className="fixed inset-0 z-50"
          onClick={onClose}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
        />
      )}

      {/* Modal */}
      <div style={modalStyle} className="w-75 max-w-sm">
        <div className="bg-white rounded-xl shadow-2xl p-6 relative border border-gray-100">
          {currentStepData.position !== "center" && (
            <div
              className={`absolute w-3 h-3 rotate-45 bg-white border border-gray-100`}
              style={{
                top:
                  tooltipDirection === "top"
                    ? "100%"
                    : tooltipDirection === "bottom"
                      ? "-6px"
                      : "50%",
                left:
                  tooltipDirection === "left"
                    ? "100%"
                    : tooltipDirection === "right"
                      ? "-6px"
                      : "50%",
                transform:
                  tooltipDirection === "top"
                    ? "translateX(-50%) rotate(45deg)"
                    : tooltipDirection === "bottom"
                      ? "translateX(-50%) rotate(45deg)"
                      : tooltipDirection === "left"
                        ? "translateY(-50%) rotate(45deg)"
                        : tooltipDirection === "right"
                          ? "translateY(-50%) rotate(45deg)"
                          : "",
                zIndex: -1
              }}
            />
          )}

          <div className="text-left">
            <h2 className="text-base font-medium text-gray-900 mb-3 leading-snug">
              {currentStepData.title}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {currentStepData.content}
            </p>

            <div className="flex justify-between items-center">
              <button
                onClick={handleSkip}
                className="px-0 py-2 text-gray-400 hover:text-gray-600 text-sm transition-colors font-medium"
              >
                Skip
              </button>

              <div className="flex space-x-3">
                <button
                  onClick={handleBack}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 text-sm transition-colors font-medium border border-gray-200 rounded-md hover:bg-gray-50"
                >
                  {isFirstStep ? 'Close' : 'Back'}
                </button>
                <button
                  onClick={handleNext}
                  className="px-4 py-2 text-white rounded-md text-sm transition-colors font-medium"
                  style={{ backgroundColor: '#c44b9a' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#b13d87'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#c44b9a'}
                >
                  {isLastStep ? 'Get Started' : 'Next'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorialModal;