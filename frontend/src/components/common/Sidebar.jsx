import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-blue-700 text-white p-6">

      <h2 className="text-2xl font-bold mb-8">
        MedVision AI
      </h2>

      <div className="flex flex-col gap-5">

        <Link to="/dashboard">Dashboard</Link>

        <Link to="/upload">Upload Scan</Link>

        <Link to="/history">History</Link>

        <Link to="/profile">Profile</Link>

        <Link to="/about">About</Link>

      </div>

    </div>
  );
}

export default Sidebar;