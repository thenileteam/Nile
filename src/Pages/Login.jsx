import React, { useState } from "react";
import { nilelogo } from "../assets";
import Cookies from 'js-cookie';
import { Link, useNavigate } from "react-router-dom";
import ApiInstace from "../Components/API/ApiInstace";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const response = await ApiInstace.post("/users/auth/super-admin/login", {
        email,
        password,
      });

      console.log(response.data);

      console.log(response.data.data.user)

      localStorage.setItem ("Id",response?.data?.data?.user?._id)

      // Set a cookie
      Cookies.set("accessToken", response?.data?.accessToken);
      Cookies.set("refreshToken", response?.data?.refreshToken);

      if (response.status === 200) {
        // Navigate to dashboard or perform actions after login success
        navigate("/dashboard");
      }
    } catch (error) {
      setError("Invalid email or password");
      console.error("Login error:", error);
    } finally {
      setLoading(false); // End loading
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
                className="text-[#ffffff] bg-[#004324] w-full p-2 rounded-md flex items-center justify-center"
                disabled={loading} // Disable button while loading
              >
                {loading ? (
                  <span className="circular-loader"></span> // Circular loader
                ) : (
                  "Log In"
                )}
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

      {/* Loader styling */}
      <style>{`
        .circular-loader {
          border: 4px solid #f3f3f3; /* Light grey */
          border-top: 4px solid #004324; /* Dark green for loader color */
          border-radius: 50%;
          width: 20px;
          height: 20px;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
};

export default Login;