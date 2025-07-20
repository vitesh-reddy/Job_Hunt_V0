import { useState } from "react";
import { X } from "lucide-react";
import { Typography } from "@components/Typography";
import Input from "@components/Input";
import SaveButton from "./SaveButton";
import CancelButton from "./CancelButton";
import userApi from "@services/userApi";
import { customToast } from "@utils/toast";

const PasswordDialogBox = ({ onClose }) => {
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateForm = () => {
    if (!form.oldPassword.trim()) return "Old password is required";
    if (!form.newPassword.trim()) return "New password is required";
    if (form.newPassword.length < 6) return "New password must be at least 6 characters long";
    if (form.newPassword !== form.confirmPassword) return "Passwords do not match";
    // if (form.newPassword === form.oldPassword) return "New password must be differ from Old Password"
    
    return null;
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      customToast.error(validationError);
      return;
    }
    setIsLoading(true);
    try {
      customToast.loading("Updating password...");
      await userApi.updatePassword({
        oldPassword: form.oldPassword,
        newPassword: form.newPassword,
      });
      customToast.endLoadAndSuccess("Password updated successfully");
      onClose();
    } catch (error) {
      console.error("Update password error:", error);
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
      <div className="fade-in fade-out w-full max-w-[500px] rounded-2xl bg-white p-6 md:p-8 shadow-lg relative text-[#180323]">
        <button onClick={handleCancel} className="absolute top-4 right-4 text-gray-400 hover:text-black" disabled={isLoading}>
          <X className="w-6 h-6" />
        </button>

        <Typography variant="h6_700" className="leading-[32px] mb-10">
          Update Password
        </Typography>

        <form className="flex flex-col gap-4 2xl:gap-10" onSubmit={handleSave}>
          <Input
            type="password"
            label="Old Password"
            required
            value={form.oldPassword}
            onChange={(e) => handleChange("oldPassword", e.target.value)}
            disabled={isLoading}
          />

          <Input
            type="password"
            label="New Password"
            required
            value={form.newPassword}
            onChange={(e) => handleChange("newPassword", e.target.value)}
            disabled={isLoading}
          />

          <Input
            type="password"
            label="Confirm New Password"
            required
            value={form.confirmPassword}
            onChange={(e) => handleChange("confirmPassword", e.target.value)}
            disabled={isLoading}
          />

          <div className="flex justify-end gap-4">
            <CancelButton handleClose={handleCancel} disabled={isLoading} />
            <SaveButton handleSave={handleSave} disabled={isLoading} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordDialogBox;