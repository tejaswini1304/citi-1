const Dashboard = () => {
    return (
      <div className="p-6 bg-white shadow rounded-md">
        <h2 className="text-2xl font-bold">Dashboard Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-4 bg-blue-200 rounded shadow">
            <h3 className="text-lg font-semibold">Credit Score</h3>
            <p className="text-2xl font-bold">750</p>
          </div>
          <div className="p-4 bg-green-200 rounded shadow">
            <h3 className="text-lg font-semibold">Risk Category</h3>
            <p className="text-xl">Low Risk</p>
          </div>
          <div className="p-4 bg-red-200 rounded shadow">
            <h3 className="text-lg font-semibold">Loan Default Prediction</h3>
            <p className="text-xl">5% Probability</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  