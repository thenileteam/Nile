import React, { useState } from "react";
import { delete1, trash } from "../../assets";

const ProductDelete = () => {
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
      // Make the API call to delete the product
      await axios.delete(`https://nile-microservices.onrender.com/product/delete/:userId`);

      setIsPopupOpen(false);
      setIsFinalConfirmationOpen(true);

      // Start fade-out animation after a delay
      setTimeout(() => {
        setIsFadingOut(true);
      }, 2500);

      // Fully close the confirmation popup after fade-out completes
      setTimeout(() => {
        setIsFinalConfirmationOpen(false);
        setIsFadingOut(false);
      }, 500);
    } catch (error) {
      console.error("Error deleting the product:", error);
      alert("Failed to delete the product. Please try again.");
    }
  };
  return (
    <>
      {/* Button to trigger the popup */}
      <button
        onClick={togglePopup}
        className="hover:scale-110 duration-300 hover:border-[#7E76BC] border-[#ffffff] border-b-[2px] transition underline-offset-2 decoration-[2px] inline-block hover:-translate-x-1"
      >
        <div>
          <img src={trash} alt="" />
        </div>
      </button>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
            <div>
              <h1 className="text-[16px] font-bold text-[#333333]">
                Are You Sure You Want To Delete This Product ?
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
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-[200px] w-full relative">
            <div>
              <h1 className="text-[16px] font-bold text-[#333333]">
                Product Deleted
              </h1>
            </div>
            <div className="flex justify-center mt-5">
              <img src={delete1} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDelete;
