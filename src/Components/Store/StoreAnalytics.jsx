import React, { useState } from "react";
import {
  arrowleft,
  image,
  nilelogo,
  notification,
  preference,
  store,
  store2,
  storeverified,
} from "../../assets";
import { Link } from "react-router-dom";
import Links from "../../Links";

const StoreAnalytics = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedText, setSelectedText] = useState("");

  const closeSidebar = () => {
    if (sidebarOpen) setSidebarOpen(false);
  };

  const toggleFilterDropdown = () => {
    setFilterDropdownOpen(!filterDropdownOpen);
  };

  const handleFilterClick = (text) => {
    // Close the dropdown and show the popup with the selected text
    setFilterDropdownOpen(false);
    setSelectedText(text);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setSelectedText("");
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
            className={`fixed top-0 left-0 h-full w-[290px] z-20 bg-[#F5F5F5] border-2 text-white p-5 transition-transform transform ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0`}
          >
            <img src={nilelogo} alt="" className="w-[170px] flex mx-auto" />
            <Links />
          </div>

          {/* Navbar */}
          <div className="flex-grow lg:ml-64">
            <nav className="bg-gray-100 p-4 shadow-md flex items-center gap-5 fixed w-full z-10">
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
                <div className="flex items-center gap-3 ml-20">
                  <Link to="/store">
                    <img src={arrowleft} alt="" />
                  </Link>
                  <img src={storeverified} alt="" />
                  <h1 className="text-[32px] font-bold">Store Analytics</h1>
                </div>
                <div className="flex items-center gap-10 ml-[350px]">
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
                  <img src={storeverified} alt="" />
                  <h1 className="text-[#333333] text-[22px] font-bold mt-1">
                    50,0000
                  </h1>
                  <p className="text-[#6E6E6E]">Total Active Stores</p>
                </div>
                <div className="bg-[#FFFFFF] border-2 shadow-sm w-[300px] p-5 rounded-md">
                  <img src={store2} alt="" />
                  <h1 className="text-[#333333] text-[22px] font-bold mt-1">
                    50,0000
                  </h1>
                  <p className="text-[#6E6E6E]">Pending Approval Stores</p>
                </div>
                <div className="bg-[#FFFFFF] border-2 shadow-sm w-[300px] p-5 rounded-md">
                  <img src={store} alt="" />
                  <h1 className="text-[#333333] font-bold text-[24px]">
                    Store Analytics
                  </h1>
                </div>
              </div>
            </div>
            
            {/* Line */}
            <div className="px-20 mt-10">
              <div className="border-2 border-white shadow-[0px_4px_10px_rgba(0,0,0,0.3)]"></div>
            </div>
            
            {/* Filter Section Dropdown */}
            <div className="flex items-center justify-end px-20 mt-10 relative">
              <h1 className="text-[#333333] font-bold text-[16px]">
                Filter By :
              </h1>
              <button
                onClick={toggleFilterDropdown}
                className="flex items-center focus:outline-none"
              >
                <img src={preference} alt="Filter" className="cursor-pointer" />
              </button>

              {filterDropdownOpen && (
                <div
                  className="absolute right-10 mt-2 w-[230px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none p-5"
                  style={{ top: "100%" }}
                >
                  <div
                    className="py-1 space-y-3"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <h1
                      className="text-[#6E6E6E] font-bold text-[16px] border-[#6E6E6E] border-2 p-2 rounded-lg cursor-pointer"
                      onClick={() =>
                        handleFilterClick("Input Number of Visits")
                      }
                    >
                      Visit
                    </h1>
                    <h1
                      className="text-[#6E6E6E] font-bold text-[16px] border-[#6E6E6E] border-2 p-2 rounded-lg cursor-pointer"
                      onClick={() => handleFilterClick("Input Store Name")}
                    >
                      Store Name
                    </h1>
                    <h1
                      className="text-[#6E6E6E] font-bold text-[16px] border-[#6E6E6E] border-2 p-2 rounded-lg cursor-pointer"
                      onClick={() => handleFilterClick("Input Sales")}
                    >
                      Sales
                    </h1>
                    <h1
                      className="text-[#6E6E6E] font-bold text-[16px] border-[#6E6E6E] border-2 p-2 rounded-lg cursor-pointer"
                      onClick={() => handleFilterClick("Input Rate")}
                    >
                      Conversion Rate
                    </h1>
                  </div>
                </div>
              )}
            </div>

            {/* Popup Component for filter section dropdown */}
            {popupVisible && (
              <div className="absolute right-10 top-[430px] w-[230px] p-4 bg-white shadow-lg rounded-md">
                <input
                  type="text"
                  placeholder={selectedText}
                  className="mt-2 p-2 border rounded-md w-full"
                />
                <button
                  onClick={closePopup}
                  className="mt-4 text-white bg-[#333333] p-2 font-bold px-5 rounded-md justify-center mx-auto flex"
                >
                  Enter
                </button>
              </div>
            )}

            {/* Table */}
            <div className="px-20">
              <table className=" w-full border-separate border-spacing-y-5">
                <thead>
                  <tr className="text-left bg-[#E2E8F0] shadow-lg">
                    <th className="px-2 py-3 font-bold text-[14px]">
                      Store Name
                    </th>
                    <th className="px-2 py-3 font-bold text-[14px] text-center">
                      Visits
                    </th>
                    <th className="px-2 py-3 font-bold text-[14px] text-center">
                      Sales
                    </th>
                    <th className="px-2 py-3 font-bold text-[14px] text-center">
                      Conversion Rates
                    </th>
                    <th className="px-2 py-3 font-bold text-[14px] text-center">
                      Average Order Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Row 1 */}
                  <tr className="bg-[#ffffff] shadow-md">
                    <td className="px-2 py-3 bg-[#E2E8F0]">Kulev Shoes</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">
                      250
                    </td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">
                      $3500
                    </td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">
                      %35
                    </td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">23</td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="bg-[#ffffff] shadow-md">
                    <td className="px-2 py-3 bg-[#E2E8F0]">Kulev Shoes</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">
                      250
                    </td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">
                      $3500
                    </td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">
                      %35
                    </td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">23</td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="bg-[#ffffff] shadow-md">
                    <td className="px-2 py-3 bg-[#E2E8F0]">Kulev Shoes</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">
                      250
                    </td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">
                      $3500
                    </td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">
                      %35
                    </td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">23</td>
                  </tr>

                  {/* Row 4 */}
                  <tr className="bg-[#ffffff] shadow-md">
                    <td className="px-2 py-3 bg-[#E2E8F0]">Kulev Shoes</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">
                      250
                    </td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">
                      $3500
                    </td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">
                      %35
                    </td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">23</td>
                  </tr>

                  {/* Row 5 */}
                  <tr className="bg-[#ffffff] shadow-md">
                    <td className="px-2 py-3 bg-[#E2E8F0]">Kulev Shoes</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">
                      250
                    </td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">
                      $3500
                    </td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">
                      %35
                    </td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">23</td>
                  </tr>

                  {/* Row 6 */}
                  <tr className="bg-[#ffffff] shadow-md">
                    <td className="px-2 py-3 bg-[#E2E8F0]">Kulev Shoes</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">
                      250
                    </td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">
                      $3500
                    </td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">
                      %35
                    </td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">23</td>
                  </tr>

                  {/* Row 7 */}
                  <tr className="bg-[#ffffff] shadow-md">
                    <td className="px-2 py-3 bg-[#E2E8F0]">Kulev Shoes</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">
                      250
                    </td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">
                      $3500
                    </td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">
                      %35
                    </td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">23</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div>
              <ol className="flex justify-center gap-3 text-xs font-medium mt-3">
                <li>
                  <a
                    href="#"
                    className="inline-flex size-8 items-center justify-center rounded border border-gray-300 bg-white hover:bg-[#6E6E6E] text-gray-900 hover:text-[#E2E8F0] rtl:rotate-180"
                  >
                    <span className="sr-only">Prev Page</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block size-8 rounded border border-[#7E76BC] bg-white text-center leading-8 text-[#7E76BC]"
                  >
                    1
                  </a>
                </li>

                <li className="block size-8 rounded border border-gray-300 bg-white text-center leading-8 text-gray-900">
                  2
                </li>

                <li>
                  <a
                    href="#"
                    className="block size-8 rounded border border-gray-300 bg-white text-center leading-8 text-gray-900"
                  >
                    ...
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block size-8 rounded border border-gray-300 bg-white text-center leading-8 text-gray-900"
                  >
                    9
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block size-8 rounded border border-gray-300 bg-white text-center leading-8 text-gray-900"
                  >
                    10
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="inline-flex size-8 items-center justify-center rounded border border-gray-300 bg-white hover:bg-[#6E6E6E] text-gray-900 hover:text-[#E2E8F0] rtl:rotate-180"
                  >
                    <span className="sr-only">Next Page</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ol>
            </div>

            {/* Export CSV Button */}
            <div className="flex items-center px-20 justify-end gap-10">
              <div className=" flex mt-10">
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
      </div>
    </>
  );
};

export default StoreAnalytics;
