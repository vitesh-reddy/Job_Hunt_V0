import React, { useState } from "react";
import { X, Plus } from "lucide-react";

const defaultSuggestions = [
  "JavaScript",
  "React",
  "Node.js",
  "Tailwind CSS",
  "Python",
  "Java",
  "SQL",
  "MongoDB",
  "Express.js",
  "TypeScript"
];

const SkillsDialogBox = () => {
  const [skills, setSkills] = useState([]);
  const [input, setInput] = useState("");

  const addSkill = (skill) => {
    if (skill && !skills.includes(skill)) {
      setSkills([...skills, skill]);
    }
    setInput("");
  };

  const removeSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill(input.trim());
    }
  };

  return (
    <div className="fixed inset-0 min-h-screen z-50 flex items-center justify-center backdrop-blur-[2px] bg-black/10 px-4">
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Key skills</h2>
          <p className="text-sm text-gray-500">
            Add skills that best define your expertise, for example Direct Marketing,
            Oracle, Java, etc. (Minimum 3)
          </p>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <X size={20} />
        </button>
      </div>

      {/* Selected Skills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-[#9D3BB0] text-white px-3 py-1 rounded-md flex items-center gap-2 text-sm"
          >
            {skill}
            <button onClick={() => removeSkill(skill)}>
              <X size={14} className="text-white" />
            </button>
          </span>
        ))}
      </div>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Add skills"
        className="w-full border border-gray-300 px-3 py-2 rounded-md mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#9D3BB0]"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleInputKeyDown}
      />

      {/* Suggested Skills */}
      <p className="text-sm font-medium text-gray-700 mb-2">
        Or you can select from the suggested set of skills
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {defaultSuggestions.map((suggestion, index) => (
          <button
            key={index}
            className="border border-[#9D3BB0] text-[#9D3BB0] px-3 py-1 rounded-md text-sm flex items-center gap-1 hover:bg-[#f9ebfc]"
            onClick={() => addSkill(suggestion)}
          >
            {suggestion}
            <Plus size={14} />
          </button>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4">
        <button className="text-[#9D3BB0] hover:underline">Cancel</button>
        <button
          className="bg-[#9D3BB0] text-white px-5 py-2 rounded-md text-sm hover:bg-[#812d94]"
          disabled={skills.length < 3}
        >
          Save
        </button>
      </div>
    </div>
    </div>
  );
};

export default SkillsDialogBox;