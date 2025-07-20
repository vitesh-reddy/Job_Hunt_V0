import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import Input from "@components/Input";
import SaveButton from "./SaveButton";
import CancelButton from "./CancelButton";
import { Typography } from "@components/Typography";
import useUserStore from "@store/userStore";
import userApi from "@services/userApi";
import { customToast } from "@utils/toast";

const IdentifierDialogBox = ({ onClose }) => {
  const { user } = useUserStore();
  const [identifier, setIdentifier] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [isLoading, setIsLoading] = useState(false);
  const inputsRef = useRef([]);

  useEffect(() => {
    setIdentifier(user.identifier || "");
  }, [user.identifier]);

  const validateIdentifier = () => {
    const isEmail = /\S+@\S+\.\S+/.test(identifier);
    const isPhone = /^\d{10}$/.test(identifier);
    if (!isEmail && !isPhone) return "Please enter a valid email or 10-digit phone number";
    if (identifier === user.identifier) return "New identifier must be different from the current one";
    return null;
  };

  const handleOtpChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    const newOtp = Array(6).fill("");
    pasted.split("").forEach((digit, i) => (newOtp[i] = digit));
    setOtp(newOtp);
  };

  const handleOtpRequest = async () => {
    const validationError = validateIdentifier();
    if (validationError) {
      customToast.error(validationError);
      return;
    }
    setIsLoading(true);
    try {
      customToast.loading("Sending OTP...");
      await userApi.sendIdentifierOtp({ identifier });
      customToast.endLoadAndSuccess("OTP sent successfully");
      setShowOtp(true);
    } catch (error) {
      console.error("Send OTP error:", error);
      customToast.endLoadAndError(error || "Failed to send OTP");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!showOtp) {
      customToast.error("Please request and verify OTP first");
      return;
    }
    const otpValue = otp.join("");
    if (otpValue.length !== 6) {
      customToast.error("Please enter a 6-digit OTP");
      return;
    }
    setIsLoading(true);
    try {
      customToast.loading("Verifying OTP and updating identifier...");
      const response = await userApi.updateIdentifier({
        identifier,
        otp: otpValue,
        _id: user._id,
      });
      customToast.endLoadAndSuccess("Identifier updated successfully");
      setOtp(Array(6).fill(""));
      setShowOtp(false);
      onClose();
    } catch (error) {
      console.error("Update identifier error:", error);
      customToast.endLoadAndError(error || "Failed to update identifier");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setOtp(Array(6).fill(""));
    setShowOtp(false);
    setIdentifier(user.identifier || "");
    onClose();
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter")
      handleSave(e);
  };  

  return (
    <div className="fixed inset-0 min-h-screen z-50 flex items-center justify-center backdrop-blur-[2px] bg-black/10 px-4">
      <div className="fade-in fade-out w-full max-w-[500px] rounded-2xl bg-white p-6 md:p-8 shadow-lg relative text-[#180323]">
        <button onClick={handleCancel} className="absolute top-4 right-4 text-gray-400 hover:text-black" disabled={isLoading}>
          <X className="w-6 h-6" />
        </button>

        <Typography variant="h6_700" className="leading-[32px] mb-10">
          Update Email/Mobile Number
        </Typography>

        <form className="flex flex-col gap-8" onSubmit={handleSave}>
          <Input
            label="Email / Mobile Number"
            type="text"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            disabled={isLoading || showOtp}
            required
          />

          <button
            type="button"
            onClick={handleOtpRequest}
            className="self-start text-[#993D6F] font-semibold underline"
            disabled={isLoading}
          >
            {showOtp ? "Resend OTP" : "Send OTP"}
          </button>

          {showOtp && (
            <div className="space-y-4 mx-auto">
              <Typography variant="bodyS_600" className="text-[#180323]">
                Verify OTP
              </Typography>
              <div className="flex items-center justify-start gap-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    value={digit ? "∗" : ""}
                    ref={(el) => (inputsRef.current[index] = el)}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onPaste={index === 0 ? handleOtpPaste : undefined}
                    className="h-12 w-12 rounded-[10px] bg-[#F4F4F4] text-center text-4xl pb-[5px] text-[#262626] focus:ring-2 focus:ring-[#A10091]"
                    maxLength={1}
                    inputMode="numeric"
                    type="text"
                    disabled={isLoading}
                    onKeyDown={handleInputKeyDown}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-end gap-4 pt-4">
            <CancelButton handleClose={handleCancel} disabled={isLoading} />
            <SaveButton handleSave={handleSave} disabled={isLoading} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default IdentifierDialogBox;