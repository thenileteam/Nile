import React, { useState } from "react";
import { refund, tickdouble } from "../../assets";

const Refund = () => {
  // State to control the popup visibility and animation
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isFinalConfirmationOpen, setIsFinalConfirmationOpen] = useState(false);
  const [fadeOut, setFadeOut] = useState(false); // State for fade-out animation

  // Function to toggle the main popup visibility
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  // Function to show the confirmation popup and hide the main popup
  const showConfirmation = () => {
    setFadeOut(true); // Start fade-out animation for the main popup
    setTimeout(() => {
      setIsPopupOpen(false); // Close the main popup after the animation
      setIsConfirmationOpen(true); // Open the confirmation popup
      setFadeOut(false); // Reset fade-out state
    }, 300); // Match this duration with your CSS transition duration
  };

  // Function to handle confirmation
  const handleConfirm = () => {
    // Logic for the edit action goes here
    setFadeOut(true); // Start fade-out animation for the confirmation popup
    setTimeout(() => {
      setIsConfirmationOpen(false); // Close the confirmation popup after the animation
      setIsFinalConfirmationOpen(true); // Open the final confirmation popup
      setFadeOut(false); // Reset fade-out state
    }, 300); // Match this duration with your CSS transition duration

    // Automatically close the final confirmation popup after 3 seconds
    setTimeout(() => {
      setIsFinalConfirmationOpen(false);
    }, 1000); // 3000 + 300 to allow time for fade-out
  };

  // Function to toggle the confirmation popup visibility
  const toggleConfirmation = () => {
    setFadeOut(true); // Start fade-out animation for the confirmation popup
    setTimeout(() => {
      setIsConfirmationOpen(!isConfirmationOpen); // Toggle confirmation popup
      setFadeOut(false); // Reset fade-out state
    }, 300); // Match this duration with your CSS transition duration
  };

  return (
    <>
      {/* Button to trigger the popup */}
      <button
        onClick={togglePopup}
        className="hover:scale-110 duration-300 hover:border-[#7E76BC] border-[#ffffff] border-b-[2px] transition underline-offset-2 decoration-[2px] inline-block hover:-translate-x-1"
      >
        <img src={refund} alt="" />
      </button>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-16 rounded-lg shadow-lg max-w-3xl w-full relative">
            {/* Cancel Button in the top-right corner */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={() => setIsPopupOpen(false)}
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
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Popup Content */}
            <form>
              <div className="grid grid-cols-2 gap-20">
                <div className="space-y-3">
                  <div>
                    <h1 className="text-left font-bold text-[#333333] text-[20px]">
                      Order Details
                    </h1>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="orderid"
                      className="block text-[#333333] text-[14px] text-left mb-2"
                    >
                      Order ID
                    </label>
                    <input
                      id="order_id"
                      type="text"
                      className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                      placeholder="7842"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="orderdate"
                      className="block text-[#333333] text-[14px] text-left mb-2"
                    >
                      Order Date
                    </label>
                    <input
                      id="order_date"
                      type="text"
                      className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                      placeholder="7842"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="productname"
                      className="block text-[#333333] text-[14px] text-left mb-2"
                    >
                      Product Name
                    </label>
                    <input
                      id="product_name"
                      type="text"
                      className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                      placeholder="7842"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="quantity"
                      className="block text-[#333333] text-[14px] text-left mb-2"
                    >
                      Quantity
                    </label>
                    <input
                      id="quantity"
                      type="text"
                      className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                      placeholder="7842"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="totalamount"
                      className="block text-[#333333] text-[14px] text-left mb-2"
                    >
                      Total Amount
                    </label>
                    <input
                      id="total_amount"
                      type="text"
                      className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                      placeholder="7842"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <h1 className="text-left font-bold text-[#333333] text-[20px]">
                      Customer Informations
                    </h1>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="customername"
                      className="block text-[#333333] text-[14px] text-left mb-2"
                    >
                      Customer Name
                    </label>
                    <input
                      id="customer_name"
                      type="text"
                      className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                      placeholder="7842"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-[#333333] text-[14px] text-left mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                      placeholder="7842"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="phonenumber"
                      className="block text-[#333333] text-[14px] text-left mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone_number"
                      type="text"
                      className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                      placeholder="7842"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-4 mt-16">
                {/* Confirmation Button */}
                <button
                  className="px-2 py-2 hover:bg-[#f5f5f5] bg-[#333333] border-gray-500 border text-[#ffffff] font-medium rounded-md shadow-lg hover:text-[#333333] transition ease-out duration-700"
                  onClick={showConfirmation}
                  type="button"
                >
                  <div className="flex items-center gap-1">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.502 9.00781C11.3974 9.00781 10.502 9.67938 10.502 10.5078C10.502 11.3362 11.3974 12.0078 12.502 12.0078C13.6065 12.0078 14.502 12.6794 14.502 13.5078C14.502 14.3362 13.6065 15.0078 12.502 15.0078M12.502 9.00781C13.3728 9.00781 14.1136 9.42521 14.3881 10.0078M12.502 9.00781V8.00781M12.502 15.0078C11.6311 15.0078 10.8903 14.5904 10.6158 14.0078M12.502 15.0078V16.0078"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M13.5 2.50781C13.5 2.50781 13.1839 2.50781 12.5 2.50781C8.02166 2.50781 5.78249 2.50781 4.39124 3.89906C3 5.2903 3 7.52947 3 12.0078C3 16.4861 3 18.7253 4.39124 20.1166C5.78249 21.5078 8.02166 21.5078 12.5 21.5078C16.9783 21.5078 19.2175 21.5078 20.6088 20.1166C22 18.7253 22 16.4861 22 12.0078C22 11.3239 22 11.0078 22 11.0078"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M21.9883 2.49219L17.8125 6.67039M16.9883 3.01395L17.1065 6.10544C17.1065 6.83408 17.5416 7.28807 18.3341 7.34533L21.4581 7.49219"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>Refund Now</p>
                  </div>
                </button>
              </div>
            </form>
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
              Are You Sure Of This Refunding ?
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
          <div className="bg-white p-5 rounded-lg shadow-lg max-w-[250px] w-full transform transition-all duration-300">
            <div>
              <h1 className="text-[16px] font-bold text-[#333333]">
                Refunded Succesfully
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

export default Refund;
