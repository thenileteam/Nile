import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  activity4,
  analysis,
  assignments,
  chart,
  checklist,
  geometricshapes,
  healthcare,
  invoice,
  storeadd,
  storeverified1,
  userlist,
  workhistory,
} from "./assets";

const Links = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeLink, setActiveLink] = useState(
    localStorage.getItem("lastActiveLink") || "dashboard"
  );
  const [hovered, setHovered] = useState(null);

  const handleHover = (link) => {
    // Only set hover state if the link is not active
    if (link !== activeLink) {
      setHovered(link);
    }
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const handleLinkClick = (to, linkKey) => {
    setActiveLink(linkKey);
    localStorage.setItem("lastActiveLink", linkKey);
    navigate(to);
  };

  const linkClass = (link) =>
    `cursor-pointer py-2 rounded px-2 flex items-center justify-between text-[#333333] ${
      activeLink === link ? "bg-[#333333]" : "hover:bg-[#E2E8F0]"
    }`;

  const collapsibleClass = (link) =>
    `mt-2 space-y-2 transition-all duration-500 overflow-hidden mb-3 ${
      // Only show submenu when hovering AND the link is not active
      hovered === link && activeLink !== link
        ? "max-h-[300px] opacity-100"
        : "max-h-0 opacity-0"
    }`;

  const getActiveStyles = (link) => {
    return activeLink === link ? "text-white" : "text-[#333333]";
  };

  const handleSubLinkClick = (to, parentKey) => {
    setActiveLink(parentKey);
    localStorage.setItem("lastActiveLink", parentKey);
    navigate(to);
  };

  const renderLink = (to, linkKey, icon, text, children) => (
    <div key={linkKey}>
      <div onClick={() => handleLinkClick(to, linkKey)}>
        <li
          className={linkClass(linkKey)}
          onMouseEnter={() => handleHover(linkKey)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-center gap-3">
            {icon}
            <p className={getActiveStyles(linkKey)}>{text}</p>
          </div>
          <svg
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
            className={getActiveStyles(linkKey)}
          >
            <path
              d="M13 1.32622C13 1.32622 8.5811 7.32617 7 7.32617C5.4188 7.32617 1 1.32617 1 1.32617"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </li>
        <ul className={collapsibleClass(linkKey)}>
          {React.Children.map(children, (child) =>
            React.cloneElement(child, {
              onClick: (e) => {
                e.stopPropagation();
                handleSubLinkClick(child.props["data-to"] || "#", linkKey);
              },
            })
          )}
        </ul>
      </div>
    </div>
  );

  return (
    <ul className="mt-6">
      {/* Dashboard Overview */}
      {renderLink(
        "/dashboard",
        "dashboard",
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          className={getActiveStyles("dashboard")}
        >
          <path
            d="M6.25 10.8262C8.59721 10.8262 10.5 8.92338 10.5 6.57617C10.5 4.22896 8.59721 2.32617 6.25 2.32617C3.90279 2.32617 2 4.22896 2 6.57617C2 8.92338 3.90279 10.8262 6.25 10.8262Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M18 9.68331V10.8262M18 9.68331C16.9878 9.68331 16.0961 9.17824 15.573 8.41134M18 9.68331C19.0122 9.68331 19.9039 9.17824 20.427 8.41134M15.573 8.41134L14.5004 9.11188M15.573 8.41134C15.2637 7.95776 15.0833 7.4126 15.0833 6.82617C15.0833 6.23981 15.2636 5.69471 15.5729 5.24117M20.427 8.41134L21.4996 9.11188M20.427 8.41134C20.7363 7.95776 20.9167 7.4126 20.9167 6.82617C20.9167 6.23981 20.7364 5.69471 20.4271 5.24117M18 3.96903C19.0123 3.96903 19.9041 4.47417 20.4271 5.24117M18 3.96903C16.9877 3.96903 16.0959 4.47417 15.5729 5.24117M18 3.96903V2.82617M20.4271 5.24117L21.5 4.54046M15.5729 5.24117L14.5 4.54046"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M17.75 22.3262C20.0972 22.3262 22 20.4234 22 18.0762C22 15.729 20.0972 13.8262 17.75 13.8262C15.4028 13.8262 13.5 15.729 13.5 18.0762C13.5 20.4234 15.4028 22.3262 17.75 22.3262Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M6.25 22.3262C8.59721 22.3262 10.5 20.4234 10.5 18.0762C10.5 15.729 8.59721 13.8262 6.25 13.8262C3.90279 13.8262 2 15.729 2 18.0762C2 20.4234 3.90279 22.3262 6.25 22.3262Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>,
        "Dashboard Overview",
        <>
          <li
            className="flex items-center gap-5 bg-[#ffffff] p-2 rounded-md cursor-pointer"
            data-to="/dashboard/platform-metrics"
          >
            <img src={geometricshapes} alt="" />
            <p className="text-[#333333] font-semibold">Platform Metrics</p>
          </li>
          <li
            className="flex items-center gap-5 bg-[#ffffff] p-2 rounded-md cursor-pointer"
            data-to="/dashboard/system-health"
          >
            <img src={healthcare} alt="" />
            <p className="text-[#333333] font-semibold">System Health</p>
          </li>
        </>
      )}

      {/* User Management */}
      {renderLink(
        "/user",
        "user",
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          className={getActiveStyles("user")}
        >
          <path
            d="M14 9.32617H18"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M14 12.8262H17"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M17 3.32617H7C4.23858 3.32617 2 5.56475 2 8.32617V16.3262C2 19.0876 4.23858 21.3262 7 21.3262H17C19.7614 21.3262 22 19.0876 22 16.3262V8.32617C22 5.56475 19.7614 3.32617 17 3.32617Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <path
            d="M5 16.3262C6.20831 13.7451 10.7122 13.5753 12 16.3262"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.5 9.32617C10.5 10.4307 9.60457 11.3262 8.5 11.3262C7.39543 11.3262 6.5 10.4307 6.5 9.32617C6.5 8.2216 7.39543 7.32617 8.5 7.32617C9.60457 7.32617 10.5 8.2216 10.5 9.32617Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
        </svg>,
        "User Management",
        <>
          <li
            className="flex items-center gap-5 bg-[#ffffff] p-2 rounded-md cursor-pointer"
            data-to="/user/list"
          >
            <img src={userlist} alt="" />
            <p className="text-[#333333] font-semibold">User List</p>
          </li>
          <li
            className="flex items-center gap-5 bg-[#ffffff] p-2 rounded-md cursor-pointer"
            data-to="/user/role"
          >
            <img src={assignments} alt="" />
            <p className="text-[#333333] font-semibold">Role Assignment</p>
          </li>
          <li
            className="flex items-center gap-5 bg-[#ffffff] p-2 rounded-md cursor-pointer"
            data-to="/user/activity"
          >
            <img src={activity4} alt="" />
            <p className="text-[#333333] font-semibold">Activity Log</p>
          </li>
        </>
      )}

      {/* Store Management */}
      {renderLink(
        "/store",
        "store",
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          className={getActiveStyles("store")}
        >
          <path
            d="M3 11.3125V15.8179C3 18.6497 3 20.0657 3.87868 20.9454C4.75736 21.8252 6.17157 21.8252 9 21.8252H15C17.8284 21.8252 19.2426 21.8252 20.1213 20.9454C21 20.0657 21 18.6497 21 15.8179V11.3125"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M15 17.3027C14.3159 17.9099 13.2268 18.3027 12 18.3027C10.7732 18.3027 9.68409 17.9099 9 17.3027"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M17.7957 2.82887L6.14983 2.85795C4.41166 2.76841 3.966 4.10852 3.966 4.76361C3.966 5.34952 3.89055 6.20367 2.82524 7.80903C1.75993 9.41439 1.83998 9.89129 2.44071 11.0026C2.93928 11.925 4.20741 12.2853 4.86862 12.3459C6.96883 12.3937 7.99065 10.5776 7.99065 9.30116C9.03251 12.5084 11.9956 12.5084 13.3158 12.1416C14.6386 11.7742 15.7717 10.459 16.0391 9.30116C16.195 10.7401 16.6682 11.5797 18.0663 12.1567C19.5145 12.7543 20.7599 11.8409 21.3848 11.2553C22.0097 10.6698 22.4107 9.36994 21.2968 7.94123C20.5286 6.95594 20.2084 6.02773 20.1033 5.0657C20.0423 4.50827 19.9888 3.90929 19.5972 3.52812C19.0248 2.97108 18.2036 2.80206 17.7957 2.82887Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>,
        "Store Management",
        <>
          <li
            className="flex items-center gap-5 bg-[#ffffff] p-2 rounded-md cursor-pointer"
            data-to="/store/stores"
          >
            <img src={storeadd} alt="" />
            <p className="text-[#333333] font-semibold">All Stores</p>
          </li>
          <li
            className="flex items-center gap-5 bg-[#ffffff] p-2 rounded-md cursor-pointer"
            data-to="/store/approvals"
          >
            <img src={storeverified1} alt="" />
            <p className="text-[#333333] font-semibold">Store Approvals</p>
          </li>
          <li
            className="flex items-center gap-5 bg-[#ffffff] p-2 rounded-md cursor-pointer"
            data-to="/store/analytics"
          >
            <img src={analysis} alt="" />
            <p className="text-[#333333] font-semibold">Store Analytics</p>
          </li>
        </>
      )}

      {/* Financial Management */}
      {renderLink(
        "/financial",
        "financial",
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          className={getActiveStyles("financial")}
        >
          <path
            d="M16 14.3262C16 15.1546 16.6716 15.8262 17.5 15.8262C18.3284 15.8262 19 15.1546 19 14.3262C19 13.4978 18.3284 12.8262 17.5 12.8262C16.6716 12.8262 16 13.4978 16 14.3262Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M18.9 8.32617C18.9656 8.00306 19 7.66864 19 7.32617C19 4.56475 16.7614 2.32617 14 2.32617C11.2386 2.32617 9 4.56475 9 7.32617C9 7.66864 9.03443 8.00306 9.10002 8.32617"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M7 8.31941H16C18.8284 8.31941 20.2426 8.31941 21.1213 9.19851C22 10.0776 22 11.4925 22 14.3223V16.3233C22 19.1531 22 20.568 21.1213 21.4471C20.2426 22.3262 18.8284 22.3262 16 22.3262H10C6.22876 22.3262 4.34315 22.3262 3.17157 21.1541C2 19.9819 2 18.0954 2 14.3223V12.3214C2 8.54828 2 6.66175 3.17157 5.48961C4.11466 4.54607 5.52043 4.36206 8 4.32617H10"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>,
        "Financial Management",
        <>
          <li
            className="flex items-center gap-5 bg-[#ffffff] p-2 rounded-md cursor-pointer"
            data-to="/financial/report"
          >
            <img src={chart} alt="" />
            <p className="text-[#333333] font-semibold">Financial Report</p>
          </li>
          <li
            className="flex items-center gap-5 bg-[#ffffff] p-2 rounded-md cursor-pointer"
            data-to="/financial/transaction"
          >
            <img src={workhistory} alt="" />
            <p className="text-[#333333] font-semibold">Transaction History</p>
          </li>
          <li
            className="flex items-center gap-5 bg-[#ffffff] p-2 rounded-md cursor-pointer"
            data-to="/financial/payout"
          >
            <img src={invoice} alt="" />
            <p className="text-[#333333] font-semibold">Payout & Invoicing</p>
          </li>
        </>
      )}

      {/* Content Management */}
      {renderLink(
        "/contentmanagement",
        "contentmanagement",
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          className={getActiveStyles("contentmanagement")}
        >
          <path
            d="M3 11.3262C3 7.57644 3 5.70157 3.95491 4.38724C4.26331 3.96277 4.6366 3.58948 5.06107 3.28108C6.3754 2.32617 8.25027 2.32617 12 2.32617C15.7497 2.32617 17.6246 2.32617 18.9389 3.28108C19.3634 3.58948 19.7367 3.96277 20.0451 4.38724C21 5.70157 21 7.57644 21 11.3262V13.3262C21 17.0759 21 18.9508 20.0451 20.2651C19.7367 20.6896 19.3634 21.0629 18.9389 21.3713C17.6246 22.3262 15.7497 22.3262 12 22.3262C8.25027 22.3262 6.3754 22.3262 5.06107 21.3713C4.6366 21.0629 4.26331 20.6896 3.95491 20.2651C3 18.9508 3 17.0759 3 13.3262V11.3262Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 9.82617H8M13.5 14.8262H10.5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>,
        "Content Management",
        <>
          <li
            className="flex items-center gap-5 bg-[#ffffff] p-2 rounded-md cursor-pointer"
            data-to="/contentmanagement/product"
          >
            <img src={checklist} alt="" />
            <p className="text-[#333333] font-semibold">Product Listing</p>
          </li>
        </>
      )}
    </ul>
  );
};

export default Links;
