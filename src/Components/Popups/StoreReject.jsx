import React, { useState } from "react";
import axios from "axios";
import { cancel, saddizzy } from "../../assets";

const StoreReject = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isFinalConfirmationOpen, setIsFinalConfirmationOpen] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  // Toggle main popup visibility
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  // Function to handle API call and popup sequence
  const handleYesClick = async () => {
    // Close the main popup immediately
    setIsPopupOpen(false);

    // Show the final confirmation popup immediately
    setIsFinalConfirmationOpen(true);

    // Make API call to reject the store
    try {
      const response = await axios.post("https://yourapi.com/store/reject", {
        storeId: "store-id", // Update with relevant store ID
      });
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error rejecting store:", error);
    }

    // Start fade-out effect after a short delay
    setTimeout(() => {
      setIsFadingOut(true);
    }, 2500);

    // Close the final confirmation popup after fade-out completes
    setTimeout(() => {
      setIsFinalConfirmationOpen(false);
      setIsFadingOut(false); // Reset fade state for future popups
    }, 500); // Total time for fade-out and popup close
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={togglePopup}
        className="hover:scale-110 duration-300 hover:border-[#7E76BC] border-[#ffffff] border-b-[2px] transition underline-offset-2 decoration-[2px] inline-block hover:-translate-x-1"
      >
        <div>
          <img src={cancel} alt="" />
        </div>
      </button>

      {/* Main Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
            <div>
              <h1 className="text-[16px] font-bold text-[#333333]">
                Are You Sure Of This Store Rejection?
              </h1>
            </div>

            <div className="flex items-center justify-center gap-28">
              <button onClick={handleYesClick} type="button">
                <div className="flex mt-10">
                  <h1 className="text-[#333333] flex font-bold gap-1 items-center hover:border-[#ffffff] hover:bg-[#E2E8F0] transition ease-out duration-500 border-[#333333] border-2 p-2 px-6 rounded-md">
                    Yes
                  </h1>
                </div>
              </button>
              <button onClick={togglePopup} type="button">
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

      {/* Final Confirmation Popup with Fade-Out Animation */}
      {isFinalConfirmationOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 
          ${
            isFadingOut
              ? "opacity-0 transition-opacity duration-500"
              : "opacity-100 transition-opacity duration-500"
          }`}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-[200px] w-full relative">
            <div>
              <h1 className="text-[16px] font-bold text-[#333333]">
                Store Rejected
              </h1>
            </div>
            <div className="flex justify-center mt-5">
              <img src={saddizzy} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StoreReject;