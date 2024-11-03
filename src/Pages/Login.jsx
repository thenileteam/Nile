import React, { useState } from "react";
import axios from "axios";
import { nilelogo } from "../assets";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://nile-microservices-auth.onrender.com/auth/super-admin/login",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        // Navigate to dashboard or perform actions after login success
        navigate("/dashboard");
      }
    } catch (error) {
      setError("Invalid email or password");
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <div className="mt-28 mb-10">
        {/* Header Text */}
        <div>
          <img
            src={nilelogo}
            alt="Logo"
            className="flex justify-center mx-auto"
          />
          <h1 className="text-[#333333] text-center text-[24px] font-bold mt-8">
            Welcome To The Super Admin Dashboard
          </h1>
        </div>

        {/* Input Fields */}
        <div className="flex justify-center mx-auto">
          <form onSubmit={handleLogin} className="space-y-6 mt-6">
            <div>
              <label
                htmlFor="EmailAddress"
                className="block text-[16px] font-bold text-[#333333]"
              >
                Email Address
              </label>

              <input
                type="email"
                id="EmailAddress"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ashimiuade@gmail.com"
                className="mt-1 w-[450px] p-3 rounded-md border-[#333333] border-2 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>

            <div>
              <label
                htmlFor="Password"
                className="block text-[16px] font-bold text-[#333333]"
              >
                Password
              </label>

              <input
                type="password"
                id="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="*******"
                className="mt-1 w-[450px] p-3 rounded-md border-[#333333] border-2 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>

            <div className="flex items-center justify-center mx-auto gap-10">
              <div>
                <label
                  htmlFor="MarketingAccept"
                  className="flex gap-1 items-center"
                >
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                  />
                  <span className="text-[14px] text-[#333333]">
                    Remember Me
                  </span>
                </label>
              </div>

              <div className="flex items-center gap-1">
                <h1 className="text-[#333333] text-[14px]">
                  Forgotten Password?
                </h1>
                <Link to="#!">
                  <p className="text-[#000000] font-bold">Click Here</p>
                </Link>
              </div>
            </div>

            {/* Login Button */}
            <div className="mt-5">
              <button
                type="submit"
                className="text-[#ffffff] bg-[#004324] w-full p-2 rounded-md"
              >
                Log In
              </button>
            </div>

            {error && <p className="text-red-500 text-center mt-4">{error}</p>}

            <div className="flex items-center gap-1 justify-center mt-3">
              <h1 className="text-[#333333] text-[16px]">
                Don't Have An Account?
              </h1>
              <Link to="#!">
                <p className="text-[#000000] font-bold">Click Here</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
