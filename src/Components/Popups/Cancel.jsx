import React, { useState } from "react";
import { cancel, storeremove } from "../../assets";

const Cancel = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isFinalConfirmationOpen, setIsFinalConfirmationOpen] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [otherReason, setOtherReason] = useState("");

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const showConfirmation = () => {
    setFadeOut(true);
    setTimeout(() => {
      setIsPopupOpen(false);
      setIsConfirmationOpen(true);
      setFadeOut(false);
    }, 300);
  };

  const handleConfirm = () => {
    setFadeOut(true);
    setTimeout(() => {
      setIsConfirmationOpen(false);
      setIsFinalConfirmationOpen(true);
      setFadeOut(false);
    }, 300);

    setTimeout(() => {
      setIsFinalConfirmationOpen(false);
    }, 1000);
  };

  const toggleConfirmation = () => {
    setFadeOut(true);
    setTimeout(() => {
      setIsConfirmationOpen(!isConfirmationOpen);
      setFadeOut(false);
    }, 300);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value !== "Others") {
      setOtherReason(""); // Clear the "other reason" input if a different option is selected
    }
  };

  return (
    <>
      <button
        onClick={togglePopup}
        className="hover:scale-110 duration-300 hover:border-[#7E76BC] border-[#ffffff] border-b-[2px] transition underline-offset-2 decoration-[2px] inline-block hover:-translate-x-1"
      >
        <img src={cancel} alt="" />
      </button>
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white p-10 rounded shadow-lg">
            {/* Close button at the top right */}
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
              onClick={togglePopup}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-[20px] font-bold text-[#333333] mb-10">
              Your Reason For Cancelling Order
            </h2>
            <div className="relative flex items-center">
              <select
                name="HeadlineAct"
                id="HeadlineAct"
                className="mt-1.5 w-full rounded-md border-gray-300 bg-[#F5F5F5] border-2 text-gray-700 sm:text-sm p-4 appearance-none pr-10 cursor-pointer"
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <option value="">Choose Options</option>
                <option value="JM">Incorrect Item</option>
                <option value="SRV">Damaged Item</option>
                <option value="JH">Change Mind</option>
                <option value="Others">Others</option>
              </select>
              <div className="absolute inset-y-0 top-2 right-1 flex items-center px-2 pointer-events-none">
                <div className="border-2 border-[#6E6E6E] bg-[#ffffff] rounded-md p-2 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 14 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 1.32622C13 1.32622 8.5811 7.32617 7 7.32617C5.4188 7.32617 1 1.32617 1 1.32617"
                      stroke="#333333"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Conditionally render the "Other Reason" input */}
            {selectedOption === "Others" && (
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Please specify your reason"
                  value={otherReason}
                  onChange={(e) => setOtherReason(e.target.value)}
                  className="w-full rounded-md border-2 border-gray-300 p-2"
                />
              </div>
            )}

            <div className="flex justify-center gap-4 mt-16">
              <button
                className="px-2 py-2 bg-[#f5f5f5] border-gray-500 border-2 hover:border-[white] duration-500 hover:bg-[#E2E8F0] text-[#333333] font-bold rounded-md"
                onClick={showConfirmation}
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {isConfirmationOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="bg-white p-5 rounded-lg shadow-lg max-w-sm w-full transform transition-all duration-300">
            <h1 className="text-[#333333] font-bold text-[18px]">
              Are You Sure You Want To Cancel This Order?
            </h1>
            <div className="flex justify-center gap-20">
              <button onClick={handleConfirm}>
                <div className="flex mt-10">
                  <h1 className="text-[#333333] flex font-bold gap-1 items-center hover:border-[#ffffff] hover:bg-[#E2E8F0] transition ease-out duration-500 border-[#333333] border-2 p-2 px-6 rounded-md">
                    Yes
                  </h1>
                </div>
              </button>
              <button onClick={toggleConfirmation}>
                <div className="flex mt-10">
                  <h1 className="text-[#ffffff] hover:text-[#333333] transition ease-out duration-700 flex font-bold gap-1 items-center border-[#333333] hover:bg-[#E2E8F0] bg-[#333333] border-2 p-2 px-6 rounded-md">
                    No
                  </h1>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Final Confirmation Popup */}
      {isFinalConfirmationOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="bg-white p-5 rounded-lg shadow-lg max-w-[200px] w-full transform transition-all duration-300">
            <div>
              <h1 className="text-[16px] font-bold text-[#333333]">
                Order Cancelled
              </h1>
            </div>
            <div className="flex justify-center mt-5">
              <img src={storeremove} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cancel;