import React, { useState, useEffect } from 'react';
import { tickdouble } from '../../assets';

const SendReminder = () => {
  // State to control the popup visibility
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to toggle the popup visibility
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  // Effect to automatically close the popup after 3 seconds
  useEffect(() => {
    let timer;
    if (isPopupOpen) {
      timer = setTimeout(() => {
        setIsPopupOpen(false);
      }, 700); // Popup will close after 3 seconds
    }
    // Clear the timer if the popup is closed before 3 seconds
    return () => clearTimeout(timer);
  }, [isPopupOpen]);

  return (
    <>
      {/* Button to trigger the popup */}
      <button onClick={togglePopup}>
        <div>
          <p>Send Reminder</p>
        </div>
      </button>

      {isPopupOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-48 w-full relative">
            <div>
              <h1 className='text-[16px] font-bold text-[#333333]'>Reminder Sent</h1>
            </div>

            <div className="flex items-center justify-center gap-28">
              {/* Cancel Button */}
              <button onClick={togglePopup} type="button">
                <div className='mt-4'>
                  <img src={tickdouble} alt=""/>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SendReminder;
