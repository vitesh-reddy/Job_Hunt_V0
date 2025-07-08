import { useState } from "react";
import { X, ChevronDown } from "lucide-react";

const BasicDetailsDialogBox = ({ onClose }) => {
  const [jobStatus, setJobStatus] = useState("");

  const handleJobStatusChange = (value) => {
    setJobStatus(value);
  };

  return (
    <div className="fixed inset-0 min-h-screen z-50 flex items-center justify-center backdrop-blur-[2px] bg-black/10 px-4">
      <div className="w-full max-w-xl rounded-2xl bg-white p-6 md:p-8 shadow-lg relative">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-black">
          <X className="w-6 h-6" />
        </button>

        {/* Heading */}
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Basic details</h2>

        {/* Name */}
        <input
          type="text"
          placeholder="Name"
          className="w-full border border-gray-300 rounded-md px-4 py-3 mb-4 text-sm placeholder:text-gray-500 focus:outline-none"
        />

        {/* Country, State, City */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <input type="text" placeholder="Country" className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none" />
          <input type="text" placeholder="State" className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none" />
          <input type="text" placeholder="City" className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none" />
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2 mb-4">
          <div className="relative w-[60px]">
            <input type="text" value="+91" className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm text-center flex items-center justify-between"/>
          </div>
          <input
            type="text"
            placeholder="phone number"
            className="flex-1 border border-gray-300 rounded-md px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-md px-4 py-3 mb-6 text-sm placeholder:text-gray-500 focus:outline-none"
        />

        {/* Job search status */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-900 mb-4">
            What’s the status of your job search?
          </p>

          <div className="space-y-4 text-sm text-gray-700">
            {[
              "Actively looking",
              "Not looking but open to offers",
              "Not looking and closed to offers",
            ].map((label, idx) => (
              <label key={idx} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={jobStatus === label}
                  onChange={() => handleJobStatusChange(label)}
                  className="form-checkbox accent-[#993D6F] w-4 h-4"
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="text-sm text-[#993D6F] hover:underline"
          >
            Cancel
          </button>
          <button className="bg-[#993D6F] text-white px-5 py-2 rounded-md text-sm font-medium">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasicDetailsDialogBox;
