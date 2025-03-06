import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./Layout/DashboardLayout";
import Dashboard from "./Pages/Dashboard";
import CreditReport from "./Pages/CreditReport";
import RiskPrediction from "./Pages/RiskPrediction";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="credit-report" element={<CreditReport />} />
          <Route path="risk-prediction" element={<RiskPrediction />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
