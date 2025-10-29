import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EboxzLogo from "../Components/EboxzLogo";

export default function Otp() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // ✅ 6 digits
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const userId = localStorage.getItem("user_id"); // ✅ from signup

  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");

    if (enteredOtp.length < 6) {  // ✅ must be 6 now
      setMessage("⚠️ Please enter the full 6-digit OTP.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const response = await fetch("https://api.eboxz.com/api/verify-email-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: userId,
          otp: enteredOtp,
        }),
      });

      const data = await response.json();

      if (data.status === "success") {
        setMessage("✅ " + data.message);

        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        setMessage("❌ " + (data.message || "Invalid OTP"));
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
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
          We’ve sent a 6-digit code to your email/phone
        </p>

        {/* OTP Inputs */}
        <form onSubmit={handleSubmit} className="mt-6 flex justify-center gap-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 text-center border-2 border-gray-300 rounded-lg text-lg font-semibold focus:outline-none focus:border-black"
            />
          ))}
        </form>

        {/* Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-900 transition disabled:opacity-60"
        >
          {loading ? "Verifying..." : "Verify"}
        </button>

        {/* Status Message */}
        {message && (
          <p className="text-center mt-4 text-sm font-medium text-gray-700">
            {message}
          </p>
        )}

        {/* Resend link */}
        <p className="text-sm text-gray-500 text-center mt-4">
          Didn’t get the code?{" "}
          <button
            type="button"
            className="text-black font-medium hover:underline"
          >
            Resend
          </button>
        </p>
      </div>
    </div>
  );
}
