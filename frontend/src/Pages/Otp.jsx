import { useState } from "react";
import EboxzLogo from "../Components/EboxzLogo";

export default function Otp() {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto move to next input if digit entered
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        // clear current digit
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        // move back if already empty
        document.getElementById(`otp-${index - 1}`).focus();
      }
    }

    if (e.key === "ArrowLeft" && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }

    if (e.key === "ArrowRight" && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Entered OTP: " + otp.join(""));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <EboxzLogo className="h-20 w-60" />
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-semibold text-center text-gray-800">
          Enter OTP
        </h1>
        <p className="text-sm text-gray-500 text-center mt-1">
          We’ve sent a 4-digit code to your email/phone
        </p>

        {/* OTP Inputs */}
        <form
          onSubmit={handleSubmit}
          className="mt-6 flex justify-center gap-3"
        >
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-14 h-14 text-center border-2 border-gray-300 rounded-lg text-xl font-semibold focus:outline-none focus:border-black"
            />
          ))}
        </form>

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-900 transition"
        >
          Verify
        </button>

        {/* Resend link */}
        <p className="text-sm text-gray-500 text-center mt-4">
          Didn’t get the code?{" "}
          <button className="text-black font-medium hover:underline">
            Resend
          </button>
        </p>
      </div>
    </div>
  );
}