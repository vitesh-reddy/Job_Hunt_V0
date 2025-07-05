import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const AuthHeader = ({ title, information }) => {
  const navigate = useNavigate();

  return (
    <div className="mb-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 flex items-center gap-2 text-sm font-medium text-[#A10091] hover:underline"
      >
        <ArrowLeft size={18} />
        Back
      </button>
      <h1 className="mb-1 text-3xl font-bold text-[#FCE0E5]">Job Hunt</h1>
      <p className="text-sm text-[#7C7C7C]">{title}</p>
      <p className="text-sm text-[#7C7C7C]">{information}</p>
    </div>
  );
};

export default AuthHeader;
