import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="text-xl font-bold">CIBIL AI</div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="hover:text-gray-300">Dashboard</Link>
        <Link to="/credit-report" className="hover:text-gray-300">Credit Report</Link>
        <Link to="/risk-prediction" className="hover:text-gray-300">Risk Prediction</Link>
      </div>

      {/* Profile & Dark Mode Toggle */}
      <div className="flex items-center space-x-4">
        <button className="bg-gray-700 px-3 py-1 rounded">Dark Mode</button>
        <div className="w-8 h-8 bg-gray-400 rounded-full"></div> {/* Profile Icon */}
      </div>
    </nav>
  );
};

export default Navbar;
