import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Typography } from "@components/Typography";
import Input from '@components/Input';
import CancelButton from "./CancelButton";
import SaveButton from "./SaveButton";
import useUserStore from "@store/userStore";
import userApi from "@services/userApi";
import { customToast } from "@utils/toast";

const BioDialogBox = ({ onClose }) => {
  const { user } = useUserStore();
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Load user bio into input
  useEffect(() => {
    if (user?.bio) {
      setInput(user.bio);
    }
  }, [user]);

  const handleSave = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      customToast.loading("Saving bio...");
      const response = await userApi.updateBio(input);
      customToast.endLoadAndSuccess("Bio updated successfully");
      onClose();
    } catch (error) {
      console.error("Update bio error:", error);
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
          <div>
            <Typography variant="h6_700" className="leading-[32px]">Bio</Typography>
            <Typography variant="bodyM_400" className="text-[#949494] tracking-[0] leading-[20px] md:leading-[24px]">
              Give recruiters a brief overview of the highlights of your career, key achievements, and career goals to help recruiters know your profile better.
            </Typography>
          </div>
          <button onClick={handleCancel} className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>

        {/* Input Field */}
        <div className="w-full">
          <Input type="text" label="Type Here" value={input} multiline rows={7} onChange={(e) => setInput(e.target.value)} inputProps={{ maxLength: 1000 }}/>
          <Typography variant="labelM_400" align="right" className="text-[#949494] leading-[20px] tracking-0">
            {`${1000 - input.length} characters left`}
          </Typography>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <CancelButton handleClose={handleCancel} disabled={isLoading} />
          <SaveButton handleSave={handleSave} disabled={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default BioDialogBox;