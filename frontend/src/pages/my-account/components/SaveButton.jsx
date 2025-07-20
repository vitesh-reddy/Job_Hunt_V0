import { Typography } from "@components/Typography";

const SaveButton = ({text = "Save", handleSave = () => {}, disabled=false, ...props}) => {
  return (
    <button disabled={disabled} onClick={handleSave} {...props} className="bg-[#B75589] text-white hover:bg-white hover:text-[#B75589] active:text-white active:bg-[#B75589] border-2 border-[#B75589] px-5 py-[6px] rounded-[4px] transition-all duration-300 ease-out disabled:opacity-50">
      <Typography variant="bodyM_700" className="font-medium"> {text} </Typography>
    </button>
  )
}

export default SaveButton