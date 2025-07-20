import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Typography } from "@components/Typography";
import Input from '@components/Input';
import CancelButton from "./CancelButton";
import SaveButton from "./SaveButton";
import useUserStore from "@store/userStore";
import userApi from "@services/userApi";
import { customToast } from "@utils/toast";

const SalaryDialogBox = ({ onClose }) => {
  const { user } = useUserStore();
  const [salary, setSalary] = useState({ min: 0, max: 0 });
  const [isLoading, setIsLoading] = useState(false);

  // Load user expectedSalary into state
  useEffect(() => {
    if (user?.expectedSalary) {
      setSalary({
        min: user.expectedSalary.min || 0,
        max: user.expectedSalary.max || 0,
      });
    }
  }, [user]);

  const handleChange = (field, value) => {
    // Convert value to number, default to 0 if empty or invalid
    const numValue = value === '' ? 0 : Math.max(0, parseInt(value, 10));
    setSalary((prev) => ({ ...prev, [field]: numValue }));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (salary.min > salary.max) {
      customToast.error("Minimum salary cannot be greater than maximum salary");
      return;
    }
    if (salary.min === 0 && salary.max === 0) {
      customToast.error("Please enter a valid salary range");
      return;
    }
    setIsLoading(true);
    try {
      customToast.loading("Saving salary expectation...");
      const response = await userApi.updateExpectedSalary(salary);
      customToast.endLoadAndSuccess("Salary expectation updated successfully");
      onClose();
    } catch (error) {
      console.error("Update expected salary error:", error);
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
    <div className="fixed inset-0 min-h-screen z-50 flex items-center justify-center backdrop-blur-[2px] bg-black/10 px-4">
      <div className="fade-in fade-out bg-white space-y-4 2xl:space-y-10 p-10 rounded-[10px] shadow-md w-full max-w-[600px] 2xl:max-w-[800px] text-[#180323]">
        <div className="flex justify-between items-start">
          <Typography variant="h6_700" className="leading-[32px]">Salary Expectation</Typography>
          <button onClick={handleClose} className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>

        <div className="flex gap-6 items-center justify-between">
          {/* Min Field */}
          <Input
            type="number"
            label="Min"
            value={salary.min === 0 ? '' : salary.min}
            onChange={(e) => handleChange('min', e.target.value)}
            onKeyDown={handleKeyDown}
            inputProps={{ min: 0 }}
          />
          <Typography variant="bodyL_700" className="font-medium">-</Typography>
          {/* Max Field */}
          <Input
            type="number"
            label="Max"
            value={salary.max === 0 ? '' : salary.max}
            onChange={(e) => handleChange('max', e.target.value)}
            onKeyDown={handleKeyDown}
            inputProps={{ min: 0 }}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <CancelButton handleClose={handleClose} disabled={isLoading} />
          <SaveButton handleSave={handleSave} disabled={isLoading || (salary.min === 0 && salary.max === 0) || salary.min > salary.max} />
        </div>
      </div>
    </div>
  );
};

export default SalaryDialogBox;