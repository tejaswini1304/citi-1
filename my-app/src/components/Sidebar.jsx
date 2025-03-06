import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-1/5 bg-white shadow-md p-4 hidden md:block">
      <div className="flex flex-col space-y-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto"></div>
          <p className="font-semibold mt-2">User Name</p>
        </div>
        <Link to="/" className="block p-2 bg-gray-200 rounded">Dashboard</Link>
        <Link to="/credit-report" className="block p-2 bg-gray-200 rounded">Credit Report</Link>
        <Link to="/risk-prediction" className="block p-2 bg-gray-200 rounded">Risk Prediction</Link>
      </div>
    </aside>
  );
};

export default Sidebar;
