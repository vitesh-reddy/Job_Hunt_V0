import { useEffect, useState, useRef } from "react";
import { X } from "lucide-react";
import Input from "@components/Input";
import SaveButton from "./SaveButton";
import CancelButton from "./CancelButton";
import { Typography } from "@components/Typography";
import useUserStore from "@store/userStore";
import userApi from "@services/userApi";
import { customToast } from "@utils/toast";
import imageCompression from "browser-image-compression";

const BasicDetailsDialogBox = ({ onClose }) => {
  const { user } = useUserStore();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    countryCode: "+91",
    location: {
      country: "",
      state: "",
      city: "",
    },
    jobSearchStatus: "",
    profilePicture: "", // Added profilePicture field
  });

  const [isLoading, setIsLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const customBorder = {
    maskImage: "linear-gradient(#fff 0 0)",
    WebkitMaskImage: "linear-gradient(#fff 0 0)",
    backgroundImage: `repeating-linear-gradient(to right, ${
      dragActive ? "#993D6F" : "#D1D5DB"
    } 0 16px, transparent 16px 32px),
                    repeating-linear-gradient(to bottom, ${
                      dragActive ? "#993D6F" : "#D1D5DB"
                    } 0 16px, transparent 16px 32px),
                    repeating-linear-gradient(to left, ${
                      dragActive ? "#993D6F" : "#D1D5DB"
                    } 0 16px, transparent 16px 32px),
                    repeating-linear-gradient(to top, ${
                      dragActive ? "#993D6F" : "#D1D5DB"
                    } 0 16px, transparent 16px 32px)`,
    backgroundSize: "100% 2px, 2px 100%, 100% 2px, 2px 100%",
    backgroundPosition: "top, right, bottom, left",
    backgroundRepeat: "no-repeat",
  };

  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || "",
        email: user.email || "",
        phoneNumber: user.mobile?.number || "",
        countryCode: user.mobile?.countryCode || "+91",
        location: {
          country: user.location?.country || "",
          state: user.location?.state || "",
          city: user.location?.city || "",
        },
        jobSearchStatus: user.jobSearchStatus || "",
        profilePicture: user.profilePicture || "",
      });
    }
  }, [user]);

const compressImage = async (file) => {
  try {
    if (file.size <= 100000)
      return file;

    const options = {
      maxSizeMB: 0.09,
      maxWidthOrHeight: 800,
      useWebWorker: true,
      fileType: "image/jpeg",
    };

    const compressedFile = await imageCompression(file, options);
    console.log("Original image size:", file.size, "bytes");
    console.log("Compressed image size:", compressedFile.size, "bytes");

    return compressedFile;
  } catch (error) {
    console.error("Compression failed:", error);
    return file; 
  }
};

const fileToBase64 = async (file) => {
  try {
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  } catch (error) {
    console.error("Base64 conversion failed:", error);
    return null;
  }
};

const handleImageUpload = async (file) => {
  if (!file) return;
  customToast.loading("Uploading...");
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
  if (!allowedTypes.includes(file.type)) {
    customToast.endLoadAndError("Invalid file format.");
    return;
  }

  try {
    const compressedFile = await compressImage(file);
    const base64String = await fileToBase64(compressedFile);

    if (!base64String) {
      customToast.endLoadAndError("Failed to load image.");
      return;
    }

    setForm((prev) => ({
      ...prev,
      profilePicture: base64String,
    }));

    customToast.endLoadAndSuccess("Image loaded");
  } catch (error) {
    console.error("Image upload handling failed:", error);
    customToast.endLoadAndError("Image processing failed.");
  }
};

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleLocationChange = (key, value) => {
    setForm((prev) => ({
      ...prev,
      location: {
        ...prev.location,
        [key]: value,
      },
    }));
  };

  const handleJobStatusChange = (value) => {
    setForm((prev) => ({
      ...prev,
      jobSearchStatus: prev.jobSearchStatus === value ? "" : value,
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      customToast.loading("Saving changes...");
      const response = await userApi.updateBasicDetails(form);
      customToast.endLoadAndSuccess("Details updated successfully");
      onClose();
    } catch (error) {
      console.error("Update basic details error: ", error);
      customToast.endLoadAndError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    onClose();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") e.preventDefault();
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
    else if (e.type === "drop") {
      setDragActive(false);
      const file = e.dataTransfer.files[0];
      handleImageUpload(file);
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    handleImageUpload(file);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="fixed inset-0 z-50 h-screen bg-black/10 backdrop-blur-[2px] px-4 overflow-y-auto">
      <div className="flex justify-center items-start min-h-full py-10">
        <div className="fade-in fade-out w-full max-w-[800px] rounded-2xl bg-white p-6 md:p-8 shadow-lg relative text-[#180323]">

          <button onClick={handleCancel} className="absolute top-4 right-4 text-gray-400 hover:text-black">
            <X className="w-6 h-6" />
          </button>

          <Typography variant="h6_700" className="leading-[32px] mb-10"> Basic details </Typography>

          <form className="flex flex-col gap-4 2xl:gap-10" onSubmit={handleSave} onKeyDown={handleKeyDown}>
            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrag}
              className={`relative flex flex-col sm:flex-row items-center justify-center sm:justify-start rounded-xl p-4 transition-all 
                ${dragActive ? "bg-[#fdf3f7]" : "bg-[#FBF9F9]"}`}
            >
              <div className="pointer-events-none absolute inset-0 rounded-xl border-2 border-transparent"
                style={customBorder}
              ></div>

              <div id="profilePicturePreview" className="flex-shrink-0 size-[90px] 2xl:size-[100px] bg-[#B1ECFF] rounded-full flex items-center justify-center text-gray-600 z-10">
                {form.profilePicture ? (
                  <img src={form.profilePicture} alt="Profile" className="w-full h-full rounded-full object-cover" />
                ) : (
                  <img src="/assets/Profile Icon.svg" alt="Profile Icon" className="scale-90" />
                )}
              </div>
              <div className="sm:ml-6 text-center sm:text-left mt-4 sm:mt-0 z-10">
                <div>
                  <Typography variant="h6_500" className="inline text-[18px] 2xl:text-[24px]">
                    Drop your photo here or</Typography>
                  <Typography 
                    variant="h6_800" onClick={handleClick}
                    className="inline text-[18px] 2xl:text-[24px] text-[#00677C] underline cursor-pointer"> Select a file 
                  </Typography>
                </div>
                <Typography variant="labelL_400" className="text-[14px] 2xl:text-[16px] text-[#47464C]">
                  Supports: JPG, JPEG, PNG & WEBP
                </Typography>
                <input 
                  type="file" 
                  accept="image/jpeg,image/jpg,image/png,image/webp" 
                  className="hidden" 
                  ref={fileInputRef}
                  onChange={handleFileSelect}
                />
              </div>
            </div>
            <Input type="text" label="Name" value={form.name} onChange={(e) => handleChange("name", e.target.value)} />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Input type="text" label="Country" value={form.location.country} onChange={(e) => handleLocationChange("country", e.target.value)} />
              <Input type="text" label="State" value={form.location.state} onChange={(e) => handleLocationChange("state", e.target.value)} />
              <Input type="text" label="City" value={form.location.city} onChange={(e) => handleLocationChange("city", e.target.value)} />
            </div>

            <div className="flex items-center gap-2">
              <div className="relative w-[60px]">
                <Input type="text" value={form.countryCode} onChange={(e) => handleChange("countryCode", e.target.value)} />
              </div>
              <Input type="text" label="Phone number" value={form.phoneNumber} onChange={(e) => handleChange("phoneNumber", e.target.value)} />
            </div>

            <Input type="email" label="Email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} />

            <div>
              <p className="text-sm font-semibold mb-4">What’s the status of your job search?</p>
              <div className="space-y-4">
                {[
                  "Actively looking",
                  "Not looking but open to offers",
                  "Not looking and closed to offers",
                ].map((label, idx) => (
                  <label key={idx} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      checked={form.jobSearchStatus === label}
                      onChange={() => handleJobStatusChange(label)}
                      className="form-checkbox accent-[#993D6F] w-4 h-4"
                    />
                    <Typography variant="bodyS_400" className="text-[#47464C]">
                      {label}
                    </Typography>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <CancelButton handleClose={handleCancel} disabled={isLoading} />
              <SaveButton handleSave={handleSave} disabled={isLoading} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BasicDetailsDialogBox;