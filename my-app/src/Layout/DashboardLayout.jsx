import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Preloader from "../components/Preloader";

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout bg-gray-100 min-h-screen w-screen flex flex-col">
      <Preloader />
      <Navbar />
      <div className="flex flex-1 w-full">
        <Sidebar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
