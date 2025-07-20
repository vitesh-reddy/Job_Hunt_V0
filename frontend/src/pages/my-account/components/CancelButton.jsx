import { Typography } from "@components/Typography";

const CancelButton = ({text = "Cancel", handleClose = () => {}, disabled = false, ...props}) => {
  return (
    <button onClick={handleClose} {...props} className="text-[#B75589] border-2 border-[#fff] hover:border-[#000] hover:text-black active:bg-white active:text-[#B75589] active:border-white px-5 py-[6px] rounded-[4px] transition-all duration-300 ease-out disabled:opacity-50">
      <Typography variant="bodyM_700" className="font-medium"> {text} </Typography>
    </button>
  )
}

export default CancelButton