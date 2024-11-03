import React from "react";
import { nilelogo } from "../assets";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <div className="mt-16 mb-10">
        {/* Header Text */}
        <div>
          <img src={nilelogo} alt="" className="flex justify-center mx-auto" />
          <h1 className="text-[#333333] text-center text-[24px] font-bold mt-8">
            Recreate Your Super-Admin Password
          </h1>
        </div>

        {/* Inpput Fields */}
        <div className="flex justify-center mx-auto">
          <form action="#" className="space-y-6 mt-6">
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
                name="email_address"
                placeholder="Ashimiuade@gmail.com"
                className="mt-1 w-[450px] p-3 rounded-md border-[#333333] border-2 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>

            <div>
              <label
                htmlFor="Otp"
                className="block text-[16px] font-bold text-[#333333]"
              >
                OTP
              </label>

              <input
                type="email"
                id="EmailAddress"
                name="otp"
                placeholder="Enter The Otp Sent To Your Email"
                className="mt-1 w-[450px] p-3 rounded-md border-[#333333] border-2 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>

            <div>
              <label
                htmlFor="NewPassword"
                className="block text-[16px] font-bold text-[#333333]"
              >
                New Password
              </label>

              <input
                type="password"
                id="new_Password"
                name="password"
                placeholder="*******"
                className="mt-1 w-[450px] p-3 rounded-md border-[#333333] border-2 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>

            <div>
              <label
                htmlFor="Repeat Password"
                className="block text-[16px] font-bold text-[#333333]"
              >
                Repeat Password
              </label>

              <input
                type="password"
                id="repeat_Password"
                name="password"
                placeholder="*******"
                className="mt-1 w-[450px] p-3 rounded-md border-[#333333] border-2 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>

            {/* Reset Password Button */}
            <Link to="/">
              <div className="mt-5">
                <button className="text-[#ffffff] bg-[#004324] w-full p-2 rounded-md">
                  Reset Password
                </button>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
