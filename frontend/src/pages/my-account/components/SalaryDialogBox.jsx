import React, { useState } from "react";
import { X, Plus } from "lucide-react";

const SalaryDialogBox = () => {
  const [salary, setSalary] = useState({min: 0, max: 0 });

  const handleSave = (e) => {    
  };

  return (
    <div className="fixed inset-0 min-h-screen z-50 flex items-center justify-center backdrop-blur-[2px] bg-black/10 px-4">
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Salary Expectation</h2>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <X size={20} />
        </button>
      </div>

      {/* Input Field */}
      <div className="flex items-start justify-between gap-3">
        <input
          type="number"
          placeholder="Min"
          className="w-full border border-gray-300 px-3 py-2 rounded-md mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#9D3BB0]"
          value={salary.min}
          onChange={(e) => setSalary(p => ({...p, min : e.target.value}))}
        />
        <p>-</p>
        <input
          type="number"
          placeholder="Max"
          className="w-full border border-gray-300 px-3 py-2 rounded-md mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#9D3BB0]"
          value={salary.max}
          onChange={(e) => setSalary(p => ({...p, max : e.target.value}))}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4">
        <button className="text-[#9D3BB0] hover:underline">Cancel</button>
        <button
          className="bg-[#9D3BB0] text-white px-5 py-2 rounded-md text-sm hover:bg-[#812d94] disabled:opacity-70"
          disabled={salary.min > salary.max}
        >
          Save
        </button>
      </div>
    </div>
    </div>
  );
};

export default SalaryDialogBox;