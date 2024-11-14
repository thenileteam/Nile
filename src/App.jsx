import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import AllOrders from "./Components/Dashboard/AllOrders";
import NewOrders from "./Components/Dashboard/NewOrders";
import PendingOrders from "./Components/Dashboard/PendingOrders";
import CompletedOrders from "./Components/Dashboard/CompletedOrders";
import CancelledOrders from "./Components/Dashboard/CancelledOrders";
import BestsellingProduct from "./Components/Dashboard/BestsellingProduct";
import LowInventory from "./Components/Dashboard/LowInventory";
import User from "./Pages/User";
import TotalUsers from "./Components/Users/TotalUsers";
import RoleAssignment from "./Components/Users/RoleAssignment";
import UserActivities from "./Components/Users/UserActivities";
import Store from "./Pages/Store";
import AllStore from "./Components/Store/AllStore";
import ApprovedStores from "./Components/Store/ApprovedStores";
import StoreAnalytics from "./Components/Store/StoreAnalytics";
import Shipment from "./Components/Store/Shipment";
import ScrollToTop from "./Components/ScrollToTop";
import Financial from "./Pages/Financial";
import TotalTransaction from "./Components/Financial Management/TotalTransaction";
import TotalPayout from "./Components/Financial Management/TotalPayout";
import TotalInvoice from "./Components/Financial Management/TotalInvoice";
import FinancialReports from "./Components/Financial Management/FinancialReports";
import Content from "./Pages/Content";
import TotalProduct from "./Components/Content Managment/TotalProduct";
import Notification from "./Pages/Notification";
import ForgotPassword from "./Pages/ForgotPassword";
import EditProfile from "./Pages/EditProfile";
import { Toaster } from "sonner";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Toaster richColors />
        <Router>
          <div>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/allorders" element={<AllOrders />} />
              <Route path="/neworders" element={<NewOrders />} />
              <Route path="/pendingorders" element={<PendingOrders />} />
              <Route path="/completedorders" element={<CompletedOrders />} />
              <Route path="/cancelledorders" element={<CancelledOrders />} />
              <Route
                path="/bestsellingproduct"
                element={<BestsellingProduct />}
              />
              <Route path="/lowinventory" element={<LowInventory />} />
              <Route path="/user" element={<User />} />
              <Route path="/totalusers" element={<TotalUsers />} />
              <Route path="/roleassignment" element={<RoleAssignment />} />
              <Route path="/useractivities" element={<UserActivities />} />
              <Route path="/store" element={<Store />} />
              <Route path="/allstore" element={<AllStore />} />
              <Route path="/storeapprovals" element={<ApprovedStores />} />
              <Route path="/storeanalytics" element={<StoreAnalytics />} />
              <Route path="/shipment" element={<Shipment />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/totaltransactions" element={<TotalTransaction />} />
              <Route path="/totalpayouts" element={<TotalPayout />} />
              <Route path="/totalinvoice" element={<TotalInvoice />} />
              <Route path="/financialreport" element={<FinancialReports />} />
              <Route path="/contentmanagement" element={<Content />} />
              <Route path="/totalproducts" element={<TotalProduct />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route path="/profile" element={<EditProfile />} />
            </Routes>
          </div>
        </Router>
      </QueryClientProvider>
    </>
  );
};

export default App;
