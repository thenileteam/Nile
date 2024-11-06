import React, { useState, useEffect } from "react";
import axios from "axios";
import { changeimage, edit, noteedit, tickdouble } from "../../assets";

const ProductEdit = () => {
  // State to control the popup visibility and animation
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isFinalConfirmationOpen, setIsFinalConfirmationOpen] = useState(false);
  const [fadeOut, setFadeOut] = useState(false); // State for fade-out animation

  // State for the product data
  const [productData, setProductData] = useState({
    quantity: "",
    category: "",
    productName: "",
    price: "",
    stockLevel: "",
  });

  // Fetch product data from API
  const fetchProductData = async () => {
    try {
      const response = await axios.get("https://nile-microservices.onrender.com/edit/:id"); // Replace with your API endpoint
      setProductData(response.data); // Assuming response.data contains the product information
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    fetchProductData(); // Fetch product data when the component mounts
  }, []);

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
    }, 200); // Match this duration with your CSS transition duration
  };

  // Function to handle confirmation
  const handleConfirm = async () => {
    try {
      // Logic for the edit action goes here
      await axios.put("YOUR_API_ENDPOINT_HERE", productData); // Replace with your API endpoint and pass productData
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
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  // Function to toggle the confirmation popup visibility
  const toggleConfirmation = () => {
    setFadeOut(true); // Start fade-out animation for the confirmation popup
    setTimeout(() => {
      setIsConfirmationOpen(!isConfirmationOpen); // Toggle confirmation popup
      setFadeOut(false); // Reset fade-out state
    }, 300); // Match this duration with your CSS transition duration
  };

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [id]: value }));
  };

  return (
    <>
      {/* Button to trigger the popup */}
      <button
        onClick={togglePopup}
        className="hover:scale-110 duration-300 hover:border-[#7E76BC] border-[#ffffff] border-b-[2px] transition underline-offset-2 decoration-[2px] inline-block hover:-translate-x-1"
      >
        <img src={edit} alt="" />
      </button>

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
                      Product ID
                    </h1>
                    <p className="text-left">5678</p>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="qunatity"
                      className="block text-[#333333] text-[14px] text-left mb-2"
                    >
                      Quantity
                    </label>
                    <input
                      id="quantity"
                      type="text"
                      value={productData.quantity}
                      onChange={handleChange}
                      className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                      placeholder="7842"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="category"
                      className="block text-[#333333] text-[14px] text-left mb-2"
                    >
                      Category
                    </label>
                    <input
                      id="category"
                      type="text"
                      value={productData.category}
                      onChange={handleChange}
                      className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                      placeholder="7842"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="productName"
                      className="block text-[#333333] text-[14px] text-left mb-2"
                    >
                      Product Name
                    </label>
                    <input
                      id="productName"
                      type="text"
                      value={productData.productName}
                      onChange={handleChange}
                      className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                      placeholder="7842"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <h1 className="text-left font-bold text-[#333333] text-[20px]">
                      Store Owner
                    </h1>
                    <p className="text-[#6E6E6E] text-left">Bolarinwa</p>
                  </div>
                  <div>
                    <h1 className="text-left font-bold text-[#333333] text-[20px]">
                      Product Status
                    </h1>
                    <p className="text-[#6E6E6E] text-left">Active</p>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="price"
                      className="block text-[#333333] text-[14px] text-left mb-2"
                    >
                      Price
                    </label>
                    <input
                      id="price"
                      type="text"
                      value={productData.price}
                      onChange={handleChange}
                      className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                      placeholder="$7842"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="stockLevel"
                      className="block text-[#333333] text-[14px] text-left mb-2"
                    >
                      Stock Level
                    </label>
                    <input
                      id="stockLevel"
                      type="text"
                      value={productData.stockLevel}
                      onChange={handleChange}
                      className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                      placeholder="560000"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-10">
                <img src={changeimage} alt="" />
              </div>

              <div className="flex justify-center gap-4 mt-16">
                {/* Edit Button */}
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
                        d="M10.7892 21.9609H9.89111C6.64261 21.9609 5.01836 21.9609 4.00918 20.9358C3 19.9106 3 18.2607 3 14.9609V9.96093C3 6.6611 3 5.01119 4.00918 3.98607C5.01836 2.96094 6.64261 2.96094 9.89111 2.96094H12.8444C16.0929 2.96094 17.9907 3.01612 19 4.04125C20.0092 5.06637 20 6.6611 20 9.96093V11.1473"
                        stroke="currentColor" // Use currentColor to make the stroke inherit the button's text color
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.4453 2V4M11.4453 2V4M6.44531 2V4"
                        stroke="currentColor" // Inherit text color
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.5 15H11.5M7.5 10H15.5"
                        stroke="currentColor" // Inherit text color
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        opacity="0.93"
                        d="M21.2598 14.8785C20.3544 13.8641 19.8112 13.9245 19.2076 14.1056C18.7851 14.166 17.3365 15.8568 16.7329 16.3952C15.7419 17.3743 14.7464 18.3823 14.6807 18.5138C14.4931 18.8188 14.3186 19.3592 14.2341 19.963C14.0771 20.8688 13.8507 21.8885 14.1375 21.9759C14.4242 22.0632 15.2239 21.8954 16.1293 21.7625C16.7329 21.6538 17.1554 21.533 17.4572 21.3519C17.8797 21.0983 18.6644 20.2046 20.0164 18.8761C20.8644 17.9833 21.6823 17.3664 21.9238 16.7626C22.1652 15.8568 21.8031 15.3737 21.2598 14.8785Z"
                        stroke="currentColor" // Inherit text color
                        stroke-width="1.5"
                      />
                    </svg>
                    <p>Edit Now</p>
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
              Are You Sure Of This Edit?
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
                Product Updated
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

export default ProductEdit;
