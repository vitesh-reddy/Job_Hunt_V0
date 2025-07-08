import React, { useState } from "react";
import { X, Plus } from "lucide-react";

const LocationsDialogBox = () => {
  const [locations, setLocations] = useState([]);
  const [input, setInput] = useState("");

  const addLocation = (location) => {
    if (location && !locations.includes(location)) {
      setLocations([...locations, location]);
    }
    setInput("");
  };

  const removeLocation = (location) => {
    setLocations(locations.filter((s) => s !== location));
  };

  const handleInputKeyDown = (e) => { 
    if (e.key === "Enter") {
      e.preventDefault();
      addLocation(input.trim());
    }
  };

  return (
    <div className="fixed inset-0 min-h-screen z-50 flex items-center justify-center backdrop-blur-[2px] bg-black/10 px-4">
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Job Locations</h2>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <X size={20} />
        </button>
      </div>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Add locations"
        className="w-full border border-gray-300 px-3 py-2 rounded-md mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#9D3BB0]"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleInputKeyDown}
      />
    
      {/* Selected Locations */}
      <div className="flex flex-wrap gap-2 mb-4">
        {locations.map((location, index) => (
          <span
            key={index}
            className="bg-[#9D3BB0] text-white px-3 py-1 rounded-md flex items-center gap-2 text-sm"
          >
            {location}
            <button onClick={() => removeLocation(location)}>
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
          disabled={locations.length < 3}
        >
          Save
        </button>
      </div>
    </div>
    </div>
  );
};

export default LocationsDialogBox;