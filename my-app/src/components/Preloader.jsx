import { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-100 flex items-center justify-center">
      <div className="loader border-t-4 border-blue-600 rounded-full w-12 h-12 animate-spin"></div>
    </div>
  );
};

export default Preloader;
