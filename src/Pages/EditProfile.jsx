import React from "react";
import { goback } from "../assets";
import { Link } from "react-router-dom";

const EditProfile = () => {
  return (
    <>
      <div className="mt-10 mb-10">
        <div className="flex">
          <div className="px-56">
            {/* Navbar */}
            <Link to="/dashboard">
              <div className="flex items-center border-2 border-[#333333] w-fit p-2 gap-2 rounded-xl mt-10">
                <img src={goback} alt="" />
                <h1 className="font-extrabold">Go Back</h1>
              </div>
            </Link>
          </div>
          <div>
            <div>
              <h1 className="text-[#333333] text-center text-[24px] font-bold mt-8">
                Edit Your Profile!
              </h1>
            </div>

            {/* Input Fields */}
            <div className="flex justify-center mx-auto">
              <form action="#" className="space-y-6 mt-6">
                <div>
                  <label
                    htmlFor="FullName"
                    className="block text-[16px] font-bold text-[#333333]"
                  >
                    Your Full Name
                  </label>

                  <input
                    type="text"
                    id="FullName"
                    name="full_name"
                    placeholder="Enter your Full Name"
                    className="mt-1 w-full p-3 rounded-md border-[#333333] border-2 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="EmailAddress"
                    className="block text-[16px] font-bold text-[#333333]"
                  >
                    Your Email Address
                  </label>

                  <input
                    type="email"
                    id="EmailAddress"
                    name="email_address"
                    placeholder="Enter your Email Address"
                    className="mt-1 w-full p-3 rounded-md border-[#333333] border-2 bg-white text-sm text-gray-700 shadow-sm"
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
                    name="newpassword"
                    placeholder="********"
                    className="mt-1 w-full p-3 rounded-md border-[#333333] border-2 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="RepeatNewPassword"
                    className="block text-[16px] font-bold text-[#333333]"
                  >
                    Repeat New Password
                  </label>

                  <input
                    type="password"
                    id="repeatnew_assword"
                    name="repeat_password"
                    placeholder="********"
                    className="mt-1 w-full p-3 rounded-md border-[#333333] border-2 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="ProfileImage"
                    className="block text-[16px] font-bold text-[#333333]"
                  >
                    Change Profile Image
                  </label>

                  <div className="mt-1 w-[450px]">
                    <label
                      htmlFor="ProfileImage"
                      className="block w-full p-3 text-sm text-gray-400 bg-[#EAF4E2] border-[#333333] border-2 rounded-md cursor-pointer shadow-sm"
                    >
                      Choose Image
                    </label>

                    <input
                      type="file"
                      id="ProfileImage"
                      name="profile_image"
                      accept="image/*"
                      className="hidden"
                    />
                  </div>
                </div>

                {/* Save Changes Button */}
                <Link to="">
                  <div className="mt-5">
                    <button className="text-[#ffffff] bg-[#004324] w-full p-2 rounded-md">
                      Save Changes
                    </button>
                  </div>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
