import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Typography } from "@components/Typography";
import CancelButton from "./CancelButton";
import SaveButton from "./SaveButton";
import useUserStore from "@store/userStore";
import userApi from "@services/userApi";
import { customToast } from "@utils/toast";
import AutocompleteInput from "@components/AutocompleteInput";
import indianCities from "@constants/indianCities.js";

const LocationsDialogBox = ({ onClose }) => {
  const { user } = useUserStore();
  const [locations, setLocations] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Load existing job locations
  useEffect(() => {
    if (user?.jobLocations)
      setLocations(user.jobLocations);
  }, [user]);

  const addLocation = (location) => {
    if (location && !locations.includes(location))
      setLocations([...locations, location]);
    setInput("");
  };

  const removeLocation = (location) => {
    setLocations(locations.filter((l) => l !== location));
  };

  const handleEnterKeyAddLocation = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const matched = indianCities.find(
        (city) => city.toLowerCase() === input.trim().toLowerCase()
      );
      if (matched)
        addLocation(matched);
    }
  };

  const handleSelectFromAutocomplete = (value) => {
    if (value)
      addLocation(value);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (locations.length < 1) {
      customToast.error("Please add at least one job location");
      return;
    }
    setIsLoading(true);
    try {
      customToast.loading("Saving job locations...");
      await userApi.updateJobLocations(locations);
      customToast.endLoadAndSuccess("Job locations updated successfully");
      onClose();
    } catch (error) {
      console.error("Update job locations error:", error);
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
          <Typography variant="h6_700" className="leading-[32px]">
            Job Location
          </Typography>
          <button onClick={handleClose} className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>

        {/* Autocomplete Input */}
        <AutocompleteInput
          label="Search location"
          options={indianCities}
          value={input}
          onChange={(val) => setInput(val)}
          onSelectValue={handleSelectFromAutocomplete}
          onKeyDown={handleEnterKeyAddLocation}
        />

        {/* Selected Locations */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            {locations.map((location, index) => (
              <Typography
                key={`${index}_${location}`}
                variant="bodyXS_700"
                className="flex items-center gap-2 font-medium bg-[#993D6F] hover:bg-[#993D6FEE] text-white px-4 py-[7px] rounded-sm"
              >
                {location}
                <button className="cursor-pointer" onClick={() => removeLocation(location)}>
                  <X size={18} />
                </button>
              </Typography>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <CancelButton handleClose={handleClose} disabled={isLoading} />
          <SaveButton handleSave={handleSave} disabled={isLoading || locations.length < 1} />
        </div>
      </div>
    </div>
  );
};

export default LocationsDialogBox;
