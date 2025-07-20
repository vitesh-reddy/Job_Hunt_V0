import React, { useState, useEffect } from "react";
import { X, Plus } from "lucide-react";
import { Typography } from "@components/Typography";
import Input from '@components/Input';
import CancelButton from "./CancelButton";
import SaveButton from "./SaveButton";
import useUserStore from "@store/userStore";
import userApi from "@services/userApi";
import { customToast } from "@utils/toast";

const defaultSuggestions = ["JavaScript", "React", "Node.js", "Tailwind CSS", "Python", "Java", "SQL", "MongoDB", "Express.js", "TypeScript"];

const SkillsDialogBox = ({ onClose }) => {
  const { user } = useUserStore();
  const [skills, setSkills] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Load user skills into state
  useEffect(() => {
    if (user?.skills) {
      setSkills(user.skills);
    }
  }, [user]);

  const addSkill = (skill) => {
    if (skill && !skills.includes(skill)) 
      setSkills([...skills, skill]);
      
    setInput("");
  };

  const removeSkill = (skill) => setSkills(skills.filter((s) => s !== skill));

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill(input.trim());
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (skills.length < 3) {
      customToast.error("Please add at least 3 skills");
      return;
    }
    setIsLoading(true);
    try {
      customToast.loading("Saving skills...");
      const response = await userApi.updateSkills(skills);
      customToast.endLoadAndSuccess("Skills updated successfully");
      onClose();
    } catch (error) {
      console.error("Update skills error:", error);
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
      <div className="fade-out bg-white space-y-4 2xl:space-y-10 p-10 rounded-[10px] shadow-md w-full max-w-[600px] 2xl:max-w-[800px] text-[#180323]">
        <div className="flex justify-between items-start">
          <div>
            <Typography variant="h6_700" className="leading-[32px]">Key skills</Typography>
            <Typography variant="bodyM_400" className="text-[#949494] tracking-[0]">
              Add skills that best define your expertise, for example Direct Marketing, Oracle, Java, etc. (Minimum 3)
            </Typography>
          </div>
          <button onClick={handleCancel} className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4">
          {/* Selected Skills */}
          <Typography variant="bodyM_700" className="">Skills</Typography>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <Typography
                key={`${index}_${skill}`}
                variant="bodyXS_700"
                className="flex items-center gap-2 font-medium bg-[#993D6F] hover:bg-[#993D6FEE] text-white px-4 py-[7px] rounded-sm"
              >
                {skill} <button className="cursor-pointer" onClick={() => removeSkill(skill)}><X size={18} /></button>
              </Typography>
            ))}
          </div>
        </div>
        {/* Input Field */}
        <Input
          type="text"
          label="Add skills"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleInputKeyDown}
        />

        {/* Suggested Skills */}
        <div className="space-y-4">
          <Typography variant="bodyM_700" className="tracking-0">
            Or you can select from the suggested set of skills
          </Typography>
          <div className="flex flex-wrap gap-4">
            {defaultSuggestions.map((suggestion, index) => (
              <Typography
                onClick={() => addSkill(suggestion)}
                key={`${index}_${suggestion}`}
                variant="bodyXS_700"
                className={`flex items-center gap-2 font-medium text-[#AA1299] border-2 border-[#AA1299] px-[14px] py-[5px] rounded-sm cursor-pointer ${skills.includes(suggestion) ? "bg-[#AA1299] text-white" : "" }`}
              >
                {suggestion} {!skills.includes(suggestion) && <Plus size={18} />}
              </Typography>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <CancelButton handleClose={handleCancel} disabled={isLoading} />
          <SaveButton handleSave={handleSave} disabled={isLoading || skills.length < 3} />
        </div>
      </div>
    </div>
  );
};

export default SkillsDialogBox;