import { Typography } from '@components/Typography';
import Input from './components/Input';
import { useState } from 'react';

const Ztest = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    // setError(value.includes("@") ? "" : "Invalid email address");
  };  
  return (
    <div className="flex flex-col items-center justify-center mx-aut0 w-[100vw] h-screen">
      <Typography className="text-amber-300">
        {/* This is Unprotected Route */}
      </Typography>
      <Input label="Email Address" type="password" value={email} onChange={handleChange} error={error} helperText="We'll never share your email."
    />
    </div>
  );
};

export default Ztest;
