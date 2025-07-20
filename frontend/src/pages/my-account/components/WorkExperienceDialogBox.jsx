import { useState } from "react";
import { X } from "lucide-react";
import Input from "@components/Input";
import SaveButton from "./SaveButton";
import CancelButton from "./CancelButton";
import { Typography } from "@components/Typography";
import SelectInput from "@components/SelectInput";
import useUserStore from "@store/userStore";
import userApi from "@services/userApi";
import { customToast } from "@utils/toast";
import currencyOptions from "@constants/currencies";

const WorkExperienceDialogBox = ({ onClose, mode = "add", index, experience }) => {
  const { user } = useUserStore();
  const [isCurrent, setIsCurrent] = useState(experience?.employmentStatus || "No");
  const [employmentType, setEmploymentType] = useState(experience?.employmentType || "Full-Time");
  const [companyName, setCompanyName] = useState(experience?.companyName || "");
  const [jobTitle, setJobTitle] = useState(experience?.jobTitle || "");
  const [startingDate, setStartingDate] = useState(experience?.startingDate || { month: 0, year: 0 });
  const [endingDate, setEndingDate] = useState(experience?.endingDate || { month: 0, year: 0 });
  const [salary, setSalary] = useState(experience?.salary || { currency: "₹", amount: 0 });
  const [jobProfile, setJobProfile] = useState(experience?.jobProfile || "");
  const [isLoading, setIsLoading] = useState(false);

  const years = Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const validateForm = () => {
    if (!companyName.trim()) return "Company name is required";
    if (!jobTitle.trim()) return "Job title is required";
    if (startingDate.month === 0 || startingDate.year === 0) return "Starting date is required";
    if (isCurrent === "No" && (endingDate.month === 0 || endingDate.year === 0)) return "Ending date is required";
    if (salary.amount <= 0) return "Valid salary amount is required";
    if (jobProfile.length > 250) return "Job profile cannot exceed 250 characters";
    const startDate = new Date(startingDate.year, startingDate.month - 1);
    const endDate = isCurrent === "Yes" ? new Date() : new Date(endingDate.year, endingDate.month - 1);
    const currentDate = new Date();
    if (startDate >= endDate) return "Starting date must be before ending date";
    if (startDate > currentDate || endDate > currentDate) return "Dates cannot be in the future";
    return null;
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      customToast.error(validationError);
      return;
    }
    setIsLoading(true);
    try {
      customToast.loading("Saving work experience...");
      const newExperience = {
        employmentStatus: isCurrent,
        employmentType,
        companyName,
        jobTitle,
        startingDate,
        endingDate: isCurrent === "Yes" ? null : endingDate,
        salary,
        jobProfile,
      };
      const updatedExperiences = mode === "add"
        ? [...(user?.workExperiences || []), newExperience]
        : user.workExperiences.map((exp, i) => (i === index ? newExperience : exp));
      const response = await userApi.updateWorkExperience(updatedExperiences);
      customToast.endLoadAndSuccess("Work experience updated successfully");
      onClose();
    } catch (error) {
      console.error("Update work experience error:", error);
      customToast.endLoadAndError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (mode !== "edit") return;
    setIsLoading(true);
    try {
      customToast.loading("Deleting work experience...");
      const updatedExperiences = user.workExperiences.filter((_, i) => i !== index);
      const response = await userApi.updateWorkExperience(updatedExperiences);
      customToast.endLoadAndSuccess("Work experience deleted successfully");
      onClose();
    } catch (error) {
      console.error("Delete work experience error:", error);
      customToast.endLoadAndError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 h-screen bg-black/10 backdrop-blur-[2px] px-4 overflow-y-auto">
      <div className="flex justify-center items-start min-h-full py-10">
        <div className="fade-in fade-out w-full max-w-[800px] rounded-2xl bg-white p-6 md:p-8 shadow-lg relative text-[#180323]">
          <button onClick={handleClose} className="absolute top-4 right-4 text-gray-400 hover:text-black">
            <X className="w-6 h-6" />
          </button>
          <Typography variant="h6_700" className="leading-[32px] mb-2">Employment</Typography>
          <Typography variant="bodyS_400" className="text-[#85838E] mb-6 2xl:mb-10">
            Details like job title, company name, etc, help employers understand your work
          </Typography>
          <form className="flex flex-col gap-4 2xl:gap-8" onKeyDown={handleKeyDown}>
            <div>
              <Typography variant="bodyS_600" className="mb-4">Is this your current employment?</Typography>
              <div className="flex gap-10">
                {["Yes", "No"].map((option) => (
                  <label key={option} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="currentEmployment"
                      checked={isCurrent === option}
                      onChange={() => setIsCurrent(option)}
                      className="accent-[#180323]"
                      disabled={isLoading}
                    />
                    <Typography variant="bodyS_400">{option}</Typography>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <Typography variant="bodyS_600" className="mb-4">Employment type</Typography>
              <div className="flex gap-10">
                {["Full-Time", "Internship"].map((type) => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="employmentType"
                      checked={employmentType === type}
                      onChange={() => setEmploymentType(type)}
                      className="accent-[#180323]"
                      disabled={isLoading}
                    />
                    <Typography variant="bodyS_400">{type}</Typography>
                  </label>
                ))}
              </div>
            </div>
            <Input
              label="Company name"
              required
              placeholder="Type your organization"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              disabled={isLoading}
            />
            <Input
              label="Job title"
              required
              placeholder="Type your designation"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              disabled={isLoading}
            />
            <div>
              <Typography variant="bodyS_600" className="mb-2">Starting Date<span className="text-red-500">*</span></Typography>
              <div className="grid grid-cols-2 gap-4">
                <SelectInput
                  label="Select Year"
                  value={startingDate.year || ""}
                  options={years.map((y) => ({ label: y, value: y }))}
                  onChange={(e) => setStartingDate((prev) => ({ ...prev, year: parseInt(e.target.value) || 0 }))}
                  disabled={isLoading}
                />
                <SelectInput
                  label="Select Month"
                  value={startingDate.month ? months[startingDate.month - 1] : ""}
                  options={months.map((m, i) => ({ label: m, value: m }))}
                  onChange={(e) => setStartingDate((prev) => ({ ...prev, month: months.indexOf(e.target.value) + 1 }))}
                  disabled={isLoading}
                />
              </div>
            </div>
            {isCurrent === "No" && (
              <div>
                <Typography variant="bodyS_600" className="mb-2">Ending Date<span className="text-red-500">*</span></Typography>
                <div className="grid grid-cols-2 gap-4">
                  <SelectInput
                    label="Select Year"
                    value={endingDate.year || ""}
                    options={years.map((y) => ({ label: y, value: y }))}
                    onChange={(e) => setEndingDate((prev) => ({ ...prev, year: parseInt(e.target.value) || 0 }))}
                    disabled={isLoading}
                  />
                  <SelectInput
                    label="Select Month"
                    value={endingDate.month ? months[endingDate.month - 1] : ""}
                    options={months.map((m, i) => ({ label: m, value: m }))}
                    onChange={(e) => setEndingDate((prev) => ({ ...prev, month: months.indexOf(e.target.value) + 1 }))}
                    disabled={isLoading}
                  />
                </div>
              </div>
            )}
            <div>
              <Typography variant="bodyS_600" className="mb-2">Current Salary<span className="text-red-500">*</span></Typography>
              <div className="flex items-center gap-2">
                <div className="w-[30%]">
                  <SelectInput
                    label="Currency"
                    value={salary.currency}
                    options={currencyOptions}
                    onChange={(e) => setSalary((prev) => ({ ...prev, currency: e.target.value }))}
                    disabled={isLoading}
                  />
                </div>
                <Input
                  type="number"
                  placeholder="Annual salary here"
                  value={salary.amount === 0 ? '' : salary.amount}
                  onChange={(e) => setSalary((prev) => ({ ...prev, amount: parseInt(e.target.value) || 0 }))}
                  disabled={isLoading}
                />
              </div>
            </div>
            <div>
              <Typography variant="bodyS_600" className="mb-2">Job profile</Typography>
              <Input
                type="text"
                placeholder="Type here..."
                rows={5}
                multiline
                value={jobProfile}
                onChange={(e) => setJobProfile(e.target.value)}
                disabled={isLoading}
                inputProps={{ maxLength: 250 }}
              />
              <div className="text-right text-xs text-[#85838E] mt-1">{250 - jobProfile.length}/250 characters left</div>
            </div>
            <div className={`flex justify-${mode === "edit" ? "between" : "end"} items-center pt-4`}>
              {mode === "edit" && (
                <Typography
                  variant="bodyM_700"
                  className="font-medium bg-[#1B1C1C] hover:bg-white hover:text-[#1B1C1C] text-white px-[14px] py-[6px] border-2 border-[#1B1C1C] rounded-[4px] transition-all duration-300 ease-out cursor-pointer"
                  onClick={handleDelete}
                >
                  Delete
                </Typography>
              )}
              <div className="flex gap-4">
                <CancelButton handleClose={handleClose} disabled={isLoading} />
                <SaveButton handleSave={handleSave} disabled={isLoading} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceDialogBox;