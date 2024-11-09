/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { addimage, tickdouble } from "../../assets";
import ApiInstance from "../../API/ApiInstace";
// import ApiInstance from "../API/ApiInstace";

const AddProduct = ({ onProductAdded }) => {
  // State to control the popup visibility and animation
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isFinalConfirmationOpen, setIsFinalConfirmationOpen] = useState(false);
  const [fadeOut, setFadeOut] = useState(false); // State for fade-out animation

  // Form state
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    description: "",
    stock: 0,
    quantitySize: "",
    price: 0,
    discountedPrice: 0,
    stockStatus: "",
    storeId: "",
  });

  // Function to toggle the main popup visibility
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to show the confirmation popup and hide the main popup
  const showConfirmation = () => {
    setFadeOut(true); // Start fade-out animation for the main popup
    setTimeout(() => {
      setIsPopupOpen(false); // Close the main popup after the animation
      setIsConfirmationOpen(true); // Open the confirmation popup
      setFadeOut(false); // Reset fade-out state
    }, 200); // Match this duration with your CSS transition duration
  };

  // Function to handle confirmation
  const handleConfirm = async () => {
    // Logic for the edit action goes here
    setFadeOut(true); // Start fade-out animation for the confirmation popup
    setTimeout(() => {
      setIsConfirmationOpen(false); // Close the confirmation popup after the animation
      setIsFinalConfirmationOpen(true); // Open the final confirmation popup
      setFadeOut(false); // Reset fade-out state
    }, 300); // Match this duration with your CSS transition duration

    try {
      const response = await ApiInstance.post("/products/product/create", formData);
      if (response.data) {
        // Close the modal/popup
        setIsOpen(false); // or however you're handling the modal state
        // Call the callback to refresh the parent component
        onProductAdded();
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
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
      <button onClick={togglePopup}>
        <div className=" flex mt-10">
          <h1 className="text-[#333333] hover:bg-[#333333] hover:text-[#ffffff] duration-500 flex font-bold gap-1 items-center border-[#333333] border-2 p-2 rounded-md">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hover:text-[#ffffff]"
            >
              <path
                d="M12 8V16M16 12H8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            Add Product
          </h1>
        </div>
      </button>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-16 rounded-lg shadow-lg max-w-3xl w-full relative ">
            {/* Cancel Button in the top-right corner */}
            <button
              className="absolute top-16 right-4 text-gray-500 hover:text-gray-800"
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
                <div>
                  <div>
                    <h1 className="text-[#333333] text-[20px] font-bold">
                      Basic Product Informations
                    </h1>
                  </div>
                  <div className="mb-4 mt-5">
                    <label
                      htmlFor="category"
                      className="block text-[#333333] text-[14px] text-left mb-2"
                    >
                      Category
                    </label>
                    <input
                      id="category"
                      name="category" // Added name attribute for form data
                      type="text"
                      className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                      placeholder="7842"
                      value={formData.category} // Set value from state
                      onChange={handleInputChange} // Handle input changes
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-[#333333] text-[14px] text-left mb-2"
                    >
                      Product Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                      placeholder="7842"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="description"
                      className="block text-[#333333] text-[14px] text-left mb-2"
                    >
                      Product Desription
                    </label>
                    <input
                      id="description"
                      name="description"
                      type="text"
                      className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                      placeholder="7842"
                      value={formData.description}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="stock"
                      className="block text-[#333333] text-[14px] text-left mb-2"
                    >
                      Stock Quantity
                    </label>
                    <input
                      id="stock"
                      name="stock"
                      type="number"
                      className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                      placeholder="7842"
                      value={formData.stock}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="quantitySize"
                      className="block text-[#333333] text-[14px] text-left mb-2"
                    >
                      Quantity Size
                    </label>
                    <input
                      id="quantitySize"
                      name="quantitySize"
                      type="text"
                      className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                      placeholder="XXL"
                      value={formData.quantitySize}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="text-[#333333] text-[20px] font-bold">
                      Customer Informations
                    </h1>
                  </div>
                  <div className="mb-4 mt-5">
                    <label
                      htmlFor="storeID"
                      className="block text-[#333333] text-[14px] text-left mb-2"
                    >
                      Store Name
                    </label>
                    <input
                      id="storeId"
                      name="storeId"
                      type="text"
                      className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                      placeholder="kulev Stores"
                      value={formData.storeId}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-4 mt-5">
                    <label
                      htmlFor="price"
                      className="block text-[#333333] text-[14px] text-left mb-2"
                    >
                      Price
                    </label>
                    <input
                      id="price"
                      name="price"
                      type="number"
                      className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                      placeholder="7842"
                      value={formData.price}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="discountedPrice"
                      className="block text-[#333333] text-[14px] text-left mb-2"
                    >
                      Discounted Price
                    </label>
                    <input
                      id="discountedPrice"
                      name="discountedPrice"
                      type="number"
                      className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                      placeholder="7842"
                      value={formData.discountedPrice}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mt-16">
                    <div>
                      <h1 className="text-[#333333] text-[20px] font-bold">
                        Stock Status
                      </h1>
                    </div>
                    <div className="relative flex items-center mt-2">
                      {/* Custom select input */}
                      <select
                        id="stockStatus"
                        name="stockStatus"
                        className="mt-1.5 w-full rounded-md border-gray-500 bg-[#F5F5F5] border-2 text-gray-700 sm:text-sm p-3 appearance-none pr-10 cursor-pointer"
                        value={formData.stockStatus}
                        onChange={handleInputChange}
                      >
                        <option value="">Choose Options</option>
                        <option value="AVAILABLE">Available</option>
                        <option value="UNAVAILABLE">Unavailable</option>
                      </select>
                      {/* Custom arrow */}
                      <div className=" absolute inset-y-0 top-2 right-1 flex items-center px-2 pointer-events-none">
                        <div className="border-2 border-gray-500 bg-[#ffffff] rounded-md p-1 flex items-center justify-center">
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
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <img src={addimage} alt="" />
              </div>

              <div className="flex justify-center gap-4 mt-16">
                {/* Cancel Button */}
                <button onClick={showConfirmation} type="button">
                  <div className="flex">
                    <h1 className="text-[#333333] hover:bg-[#333333] hover:text-[#ffffff] duration-500 flex font-bold gap-1 items-center border-[#333333] border-2 p-2 rounded-md">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="hover:text-[#ffffff]"
                      >
                        <path
                          d="M12 8V16M16 12H8"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                      Add Product
                    </h1>
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
            <h1 className="text-[#333333] font-bold text-[18px] text-center">
              Are You Sure You Want To Add This Product?
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
              <h1 className="text-[16px] font-bold text-[#333333] text-center">
                Product Published
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

export default AddProduct;
