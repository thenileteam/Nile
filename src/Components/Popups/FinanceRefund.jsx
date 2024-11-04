import React, { useState } from "react";
import { tickdouble } from "../../assets";

const FinanceRefund = () => {
  // State to control the main popup visibility
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // State to control the final confirmation visibility
  const [isFinalConfirmationOpen, setIsFinalConfirmationOpen] = useState(false);

  // State to control whether the fade-out animation should play
  const [isFadingOut, setIsFadingOut] = useState(false);

  // Function to toggle the main popup visibility
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleYesClick = async () => {
    try {
      // Send delete request to API
      await axios.delete("YOUR_API_ENDPOINT", {
        data: {
          transactionId: "5324", // Replace with the specific user ID or identifier
        },
      });

      // Show final confirmation and start fade-out
      setIsPopupOpen(false);
      setIsFinalConfirmationOpen(true);

      setTimeout(() => {
        setIsFadingOut(true);
      }, 2500);

      setTimeout(() => {
        setIsFinalConfirmationOpen(false);
        setIsFadingOut(false);
      }, 500);
    } catch (error) {
      console.error("Error refunding:", error);
      alert("Failed to refund. Please try again.");
    }
  };

  return (
    <>
      {/* Button to trigger the popup */}
      <button onClick={togglePopup}>
        <div>
          <p>Refund Now</p>
        </div>
      </button>

      {/* Initial Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
            <div>
              <h1 className="text-[16px] font-bold text-[#333333]">
                Are You Sure Of This Refunding ?
              </h1>
            </div>

            <div className="flex items-center justify-center gap-28">
              {/* Yes Button */}
              <button onClick={handleYesClick} type="button">
                <div className=" flex mt-10">
                  <h1 className="text-[#333333] flex font-bold gap-1 items-center hover:border-[#ffffff] hover:bg-[#E2E8F0] transition ease-out duration-500 border-[#333333] border-2 p-2 px-6 rounded-md">
                    Yes
                  </h1>
                </div>
              </button>

              {/* No Button */}
              <button onClick={togglePopup} type="button">
                <div className=" flex mt-10">
                  <h1 className="text-[#ffffff] hover:text-[#333333] transition ease-out duration-700 flex font-bold gap-1 items-center border-[#333333] hover:bg-[#E2E8F0] bg-[#333333] border-2 p-2 px-6 rounded-md">
                    No
                  </h1>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Final Confirmation Modal with Fade-Out Animation */}
      {isFinalConfirmationOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 
          ${
            isFadingOut
              ? "opacity-0 transition-opacity duration-500"
              : "opacity-100 transition-opacity duration-500"
          }`}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-[250px] w-full relative">
            <div>
              <h1 className="text-[16px] font-bold text-[#333333]">
                Refunded Successfully
              </h1>
            </div>
            <div className="flex justify-center mt-5">
              <img src={tickdouble} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FinanceRefund;
