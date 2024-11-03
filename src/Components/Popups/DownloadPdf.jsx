import React, { useState, useEffect } from "react";
import { tickdouble } from "../../assets";

const DownloadPdf = () => {
  const [isDownloading, setIsDownloading] = useState(false); // Controls progress bar visibility
  const [progress, setProgress] = useState(0); // Progress value
  const [isConfirmed, setIsConfirmed] = useState(false); // Controls confirmation popup visibility

  // Function to start the download process
  const handleDownloadClick = () => {
    setIsDownloading(true);
    setProgress(0); // Reset progress
    let progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 10;
        } else {
          clearInterval(progressInterval);
          setIsDownloading(false); // Hide progress bar
          setIsConfirmed(true); // Show confirmation popup
          return 100;
        }
      });
    }, 300); // Adjust speed of progress bar (300ms for each step)
  };

  // Automatically hide confirmation popup after a delay
  useEffect(() => {
    if (isConfirmed) {
      const timer = setTimeout(() => {
        setIsConfirmed(false);
      }, 500); // 3 seconds delay before disappearing
      return () => clearTimeout(timer);
    }
  }, [isConfirmed]);

  return (
    <div>
      {/* Download PDF link */}
      <p className="cursor-pointer" onClick={handleDownloadClick}>
        Download PDF
      </p>

      {/* Progress Bar Popup */}
      {isDownloading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-lg font-bold mb-4 text-[#333333]">
              Downloading
            </h2>
            <div className="w-full bg-gray-200 rounded-sm h-4">
              <div
                className="bg-[#7E76BC] h-4 rounded-sm transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Popup */}
      {isConfirmed && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[250px]">
            <h2 className="text-[16px] font-bold text-[#333333]">
              Downloaded successfully
            </h2>
            <div className="flex justify-center mt-5">
              <img src={tickdouble} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloadPdf;
