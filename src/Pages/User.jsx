import React, { useState } from "react";
import {
  activity,
  image,
  nilelogo,
  notification,
  useraccount,
  userswitch,
  validation,
} from "../assets";
import { Link } from "react-router-dom";
import Links from "../Links";

const User = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => {
    if (sidebarOpen) setSidebarOpen(false);
  };
  return (
    <>
      <div className="bg-[#F5F5F5] pb-20">
        <div className="flex">
          {/* Overlay for small screens */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black opacity-50 lg:hidden"
              onClick={closeSidebar}
            ></div>
          )}

          {/* Sidebar */}
          <div
            className={`fixed top-0 left-0 h-full w-[290px] z-10 bg-[#F5F5F5] border-2 text-white p-5 transition-transform transform ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0`}
          >
            <img src={nilelogo} alt="" className="w-[170px] flex mx-auto" />
            <Links />
          </div>

          {/* Navbar */}
          <div className="flex-grow lg:ml-64">
            <nav className="bg-gray-100 p-4 shadow-md flex items-center gap-5 fixed w-full">
              <button
                className="lg:hidden text-gray-800 z-20"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      sidebarOpen
                        ? "M6 18L18 6M6 6l12 12" // Close icon
                        : "M4 6h16M4 12h16M4 18h16" // Menu icon
                    }
                  />
                </svg>
              </button>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 ml-20">
                  <img src={useraccount} alt="" />
                  <h1 className="text-[32px] font-bold">User Managemnt</h1>
                </div>
                <div className="flex items-center gap-10 ml-[400px]">
                  <div className="relative">
                    <label htmlFor="Search" className="sr-only">
                      {" "}
                      Search{" "}
                    </label>

                    <input
                      type="text"
                      id="Search"
                      placeholder=""
                      className="w-[300px] rounded-md border-[#6E6E6E] border-2 p-8 py-2.5 pe-10 shadow-sm sm:text-sm"
                    />

                    <span className="absolute inset-y-0 start-0 grid w-10 place-content-center">
                      <button
                        type="button"
                        className="text-gray-600 hover:text-gray-700"
                      >
                        <span className="sr-only">Search</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                          />
                        </svg>
                      </button>
                    </span>
                  </div>
                  <div>
                    <Link to="/notification">
                      <img src={notification} alt="" />
                    </Link>
                  </div>
                  <div>
                    <Link to="/profile">
                      <img src={image} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </nav>

            {/* Cards */}
            <div className="p-6 mt-28 px-32">
              <div className="flex gap-16">
                <div className="bg-[#FFFFFF] border-2 shadow-sm w-[300px] p-5 rounded-md">
                  <img src={userswitch} alt="" />
                  <h1 className="text-[#333333] text-[22px] font-bold mt-1">
                    50,0000
                  </h1>
                  <p className="text-[#6E6E6E]">Total Users</p>
                </div>
                <div className="bg-[#FFFFFF] border-2 shadow-sm w-[300px] p-5 rounded-md">
                  <img src={validation} alt="" />
                  <h1 className="text-[#333333] text-[22px] font-bold mt-1">
                    50,0000
                  </h1>
                  <p className="text-[#6E6E6E]">Assigned Roles</p>
                </div>
                <div className="bg-[#FFFFFF] border-2 shadow-sm w-[300px] p-5 rounded-md">
                  <img src={activity} alt="" />
                  <h1 className="text-[#333333] font-bold text-[24px]">
                    Activity Logs
                  </h1>
                </div>
              </div>
            </div>

            {/* Line */}
            <div className="px-28">
              <div className="border-2 border-white shadow-[0px_4px_10px_rgba(0,0,0,0.3)]"></div>
            </div>

            {/* Table */}
            <div className="px-28">
              <table className=" w-full border-separate border-spacing-y-5">
                <thead>
                  <tr className="text-left bg-[#E2E8F0] shadow-lg">
                    <th className="px-2 py-3">Metrics</th>
                    <th className="px-2 py-3 text-center">Today</th>
                    <th className="px-2 py-3 text-center">This week</th>
                    <th className="px-2 py-3 text-center">This Month</th>
                    <th className="px-2 py-3 text-center">This Year So Far</th>
                    <th className="px-2 py-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Row 1 */}
                  <tr className="bg-[#ffffff] shadow-md">
                    <td className="px-2 py-3 bg-[#E2E8F0] w-40">Total Users</td>
                    <td className="px-2 py-3 text-center">2500</td>
                    <td className="px-2 py-3 text-center">17000</td>
                    <td className="px-2 py-3 text-center">65000</td>
                    <td className="px-2 py-3 text-center">450000</td>
                    <td className="px-2 py-3 text-center bg-[#F5F5F5] text-[#7E76BC] font-extrabold">
                      <Link
                        to="/totalusers"
                        className="hover:border-[#7E76BC] border-[#f5f5f5] border-b-2 transition duration-300 underline-offset-4 decoration-[2px] inline-block hover:-translate-x-1"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="bg-[#ffffff] shadow-md">
                    <td className="px-2 py-3 bg-[#E2E8F0] w-40">
                      Roles & Permission
                    </td>
                    <td className="px-2 py-3 text-center">35</td>
                    <td className="px-2 py-3 text-center">210</td>
                    <td className="px-2 py-3 text-center">980</td>
                    <td className="px-2 py-3 text-center">6750</td>
                    <td className="px-2 py-3 text-center bg-[#F5F5F5] text-[#7E76BC] font-extrabold">
                      <Link
                        to="/roleassignment"
                        className="hover:border-[#7E76BC] border-[#f5f5f5] border-b-2 transition duration-300 underline-offset-4 decoration-[2px] inline-block hover:-translate-x-1"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="bg-[#ffffff] shadow-md">
                    <td className="px-2 py-3 bg-[#E2E8F0] w-40">
                      User Activities
                    </td>
                    <td className="px-2 py-3 text-center">5</td>
                    <td className="px-2 py-3 text-center">35</td>
                    <td className="px-2 py-3 text-center">140</td>
                    <td className="px-2 py-3 text-center">1200</td>
                    <td className="px-2 py-3 text-center bg-[#F5F5F5] text-[#7E76BC] font-extrabold">
                      <Link
                        to="/useractivities"
                        className="hover:border-[#7E76BC] border-[#f5f5f5] border-b-2 transition duration-300 underline-offset-4 decoration-[2px] inline-block hover:-translate-x-1"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Export CSV Button */}
            <div className=" flex px-28 justify-end mt-10">
              <h1 className="text-[#333333] cursor-pointer hover:text-[#ffffff] hover:bg-[#333333] duration-500 flex font-bold gap-1 items-center border-[#333333] border-2 p-2 rounded-md">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:text-[#ffffff]"
                >
                  <path
                    d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                  <path
                    d="M12.0025 7.03906V14.0894M12.0025 14.0894C12.3286 14.0938 12.6503 13.8696 12.8876 13.5961L14.4771 11.8134M12.0025 14.0894C11.6879 14.0852 11.3693 13.8623 11.1174 13.596L9.51864 11.8134M7.98633 17.0391H15.9863"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
                Export CSV
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
