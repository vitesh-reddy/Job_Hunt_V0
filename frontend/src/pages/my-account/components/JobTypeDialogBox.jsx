import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Typography } from "@components/Typography";
import SaveButton from "./SaveButton";
import CancelButton from "./CancelButton";
import useUserStore from "@store/userStore";
import userApi from "@services/userApi";
import { customToast } from "@utils/toast";

const JobTypeDialogBox = ({ onClose }) => {
  const { user } = useUserStore();
  const [jobTypes, setJobTypes] = useState([]);
  const [roleLevels, setRoleLevels] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user?.jobTypes) {
      setJobTypes(user.jobTypes.types || []);
      setRoleLevels(user.jobTypes.levels || []);
    }
  }, [user]);

  const handleCheckboxChange = (value, setState, max = Infinity) => {
    setState((prev) => {
      if (prev.includes(value))
        return prev.filter((v) => v !== value);
      else if (prev.length < max)
        return [...prev, value];
      
      return prev;
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") e.preventDefault();
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (jobTypes.length === 0) {
      customToast.error("Please select at least one job type");
      return;
    }

    setIsLoading(true);
    try {
      customToast.loading("Saving job types...");
      await userApi.updateJobTypes({ types: jobTypes, levels: showRoleLevels ? roleLevels : [] });
      customToast.endLoadAndSuccess("Job types updated successfully");
      onClose();
    } catch (error) {
      console.error("Update job types error:", error);
      customToast.endLoadAndError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const showRoleLevels = !jobTypes.includes("Internship") && !!jobTypes.length;

  return (
    <div className="fixed inset-0 min-h-screen z-50 flex items-center justify-center backdrop-blur-[2px] bg-black/10 px-4">
      <div className="fade-in fade-out w-full max-w-[800px] rounded-2xl bg-white p-6 md:p-8 shadow-lg relative text-[#180323]">
        {/* Close Icon */}
        <button onClick={handleClose} className="absolute top-4 right-4 text-gray-400 hover:text-black">
          <X className="w-6 h-6" />
        </button>

        <Typography variant="h6_700" className="leading-[32px] mb-10">Job Type</Typography>

        <form className="flex flex-col gap-4 2xl:gap-10" onKeyDown={handleKeyDown}>
          {/* Job Type Checkboxes */}
          <div className="space-y-6">
            {["Internship", "Full-Time", "Part-Time", "Contract"].map((type) => (
              <label key={type} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={jobTypes.includes(type)}
                  onChange={() => handleCheckboxChange(type, setJobTypes)}
                  className="accent-[#993D6F] w-4 h-4"
                />
                <Typography variant="bodyS_400" className="text-[#47464C]">
                  {type}
                </Typography>
              </label>
            ))}
          </div>

          {showRoleLevels && (
            <div className="fade-in bg-[#F7F2FA] rounded-xl p-6">
              <Typography variant="bodyS_600" className="mb-1 text-[#180323]">
                What level of roles are you looking for?
              </Typography>
              <Typography variant="bodyXS_400" className="mb-4 text-[#5F5D6B]">
                Select up to 2
              </Typography>

              <div className="space-y-4">
                {[
                  "Entry Level & New Grad",
                  "Junior (1 to 2 years)",
                  "Mid-level (3 to 4 years)",
                  "Senior (5 to 8 years)",
                  "Expert & Leadership (9+ years)",
                ].map((level) => (
                  <label key={level} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={roleLevels.includes(level)}
                      onChange={() => handleCheckboxChange(level, setRoleLevels, 2)}
                      className="accent-[#993D6F] w-4 h-4"
                    />
                    <Typography variant="bodyS_400" className="text-[#47464C]">
                      {level}
                    </Typography>
                  </label>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-end gap-4">
            <CancelButton handleClose={handleClose} disabled={isLoading} />
            <SaveButton handleSave={handleSave} disabled={isLoading || jobTypes.length === 0} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobTypeDialogBox;
