import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Typography } from "@components/Typography";
import Input from '@components/Input';
import CancelButton from "./CancelButton";
import SaveButton from "./SaveButton";
import useUserStore from "@store/userStore";
import userApi from "@services/userApi";
import { customToast } from "@utils/toast";

const RolesDialogBox = ({ onClose }) => {
  const { user } = useUserStore();
  const [roles, setRoles] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Load user roles into state
  useEffect(() => {
    if (user?.roles) {
      setRoles(user.roles);
    }
  }, [user]);

  const addRole = (role) => {
    if (role && !roles.includes(role)) {
      setRoles([...roles, role]);
    }
    setInput("");
  };

  const removeRole = (role) => setRoles(roles.filter((s) => s !== role));

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addRole(input.trim());
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (roles.length < 1) {
      customToast.error("Please add at least 1 role");
      return;
    }
    setIsLoading(true);
    try {
      customToast.loading("Saving roles...");
      const response = await userApi.updateRoles(roles);
      customToast.endLoadAndSuccess("Roles updated successfully");
      onClose();
    } catch (error) {
      console.error("Update roles error:", error);
      customToast.endLoadAndError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className="fixed inset-0 min-h-screen z-50 flex items-center justify-center backdrop-blur-[2px] bg-black/10 px-4">
      <div className="fade-in fade-out bg-white space-y-4 2xl:space-y-10 p-10 rounded-[10px] shadow-md w-full max-w-[600px] 2xl:max-w-[800px] text-[#180323]">
        <div className="flex justify-between items-start">
          <Typography variant="h6_700" className="leading-[32px]">Job role</Typography>
          <button onClick={handleCancel} className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>

        {/* Input Field */}
        <Input
          type="text"
          label="Search job roles here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleInputKeyDown}
        />

        <div className="space-y-4">
          {/* Selected Roles */}
          <div className="flex flex-wrap gap-4">
            {roles.map((role, index) => (
              <Typography
                key={`${index}_${role}`}
                variant="bodyXS_700"
                className="flex items-center gap-2 font-medium bg-[#993D6F] hover:bg-[#993D6FEE] text-white px-4 py-[7px] rounded-sm"
              >
                {role} <button className="cursor-pointer" onClick={() => removeRole(role)}><X size={18} /></button>
              </Typography>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <CancelButton handleClose={handleCancel} disabled={isLoading} />
          <SaveButton handleSave={handleSave} disabled={isLoading || roles.length < 1} />
        </div>
      </div>
    </div>
  );
};

export default RolesDialogBox;