import React, { useState } from "react";
import { X, Plus } from "lucide-react";

const RolesDialogBox = () => {
  const [roles, setRoles] = useState([]);
  const [input, setInput] = useState("");

  const addRole = (role) => {
    if (role && !roles.includes(role)) {
      setRoles([...roles, role]);
    }
    setInput("");
  };

  const removeRole = (role) => {
    setRoles(roles.filter((s) => s !== role));
  };

  const handleInputKeyDown = (e) => { 
    if (e.key === "Enter") {
      e.preventDefault();
      addRole(input.trim());
    }
  };

  return (
    <div className="fixed inset-0 min-h-screen z-50 flex items-center justify-center backdrop-blur-[2px] bg-black/10 px-4">
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Roles</h2>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <X size={20} />
        </button>
      </div>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Add roles"
        className="w-full border border-gray-300 px-3 py-2 rounded-md mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#9D3BB0]"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleInputKeyDown}
      />
    
      {/* Selected Roles */}
      <div className="flex flex-wrap gap-2 mb-4">
        {roles.map((role, index) => (
          <span
            key={index}
            className="bg-[#9D3BB0] text-white px-3 py-1 rounded-md flex items-center gap-2 text-sm"
          >
            {role}
            <button onClick={() => removeRole(role)}>
              <X size={14} className="text-white" />
            </button>
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4">
        <button className="text-[#9D3BB0] hover:underline">Cancel</button>
        <button
          className="bg-[#9D3BB0] text-white px-5 py-2 rounded-md text-sm hover:bg-[#812d94]"
          disabled={roles.length < 3}
        >
          Save
        </button>
      </div>
    </div>
    </div>
  );
};

export default RolesDialogBox;