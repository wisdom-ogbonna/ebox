import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    // Live validation
    if (value.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (value.length > 30) {
      setError("Password must not exceed 30 characters.");
      return;
    }
    if (!/[A-Z]/.test(value)) {
      setError("Must include an uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(value)) {
      setError("Must include a lowercase letter.");
      return;
    }
    if (!/[0-9]/.test(value)) {
      setError("Must include a number.");
      return;
    }
    if (!/[^A-Za-z0-9]/.test(value)) {
      setError("Must include a special character.");
      return;
    }

    setError(""); // Valid
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (error) return;
    setLoading(true);

    try {
      const response = await fetch("https://api.eboxz.com/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Laravel validation error
        const message =
          data.errors?.password?.[0] || data.message || "Registration failed";
        setError(message);
      } else {
        setSuccess("Registered successfully! Please verify your email.");

        // ✅ Save user_id for OTP verification
        localStorage.setItem("user_id", data.user?.id || data.user_id);

        setName("");
        setEmail("");
        setPassword("");

        // Redirect to OTP page after 1s
        setTimeout(() => {
          navigate("/otp");
        }, 1000);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 className="text-4xl mb-3 font-[700]">SIGN UP</h2>
        <div className="grid gap-3">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={name}
              id="nameInput"
              onChange={(e) => setName(e.target.value)}
              className="border-2 border-black rounded-md p-2 text-2xl font-bold"
              placeholder="Name..."
              required
              autoComplete="name"
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="emailInput"
              className="border-2 border-black rounded-md p-2 text-2xl font-bold"
              placeholder="Email..."
              required
              autoComplete="email"
            />
            <div className="relative flex flex-col">
              <div className="relative flex">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="passwordInput"
                  value={password}
                  onChange={handlePasswordChange}
                  maxLength={30}
                  className="border-2 border-black rounded-md p-2 text-2xl font-bold w-full"
                  placeholder="Password..."
                  required
                  autoComplete="new-password"
                />
                <span
                  className="absolute top-5 right-5 cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {error && (
                <div className="text-red-600 text-lg mt-1">{error}</div>
              )}
            </div>
          </div>
          <div className="grid">
            <button
              className="border-2 bg-gray-900 hover:bg-black text-white border-gray-200 rounded-md p-2 text-2xl font-bold"
              type="submit"
              disabled={loading}
            >
              {loading ? "Signing Up..." : "SIGN UP"}
            </button>
            {success && (
              <div className="text-green-600 text-lg mt-2">{success}</div>
            )}
          </div>
        </div>
      </form>
    </>
  );
}
