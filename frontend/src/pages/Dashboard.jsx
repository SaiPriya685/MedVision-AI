import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [stats, setStats] = useState({
    total: 0,
    normal: 0,
    pneumonia: 0,
  });

  const [recentScans, setRecentScans] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        
        const response = await api.get(`/api/history/${user.id}`);
        const data = response.data;

        const normal = data.filter(
          (item) => item.disease === "NORMAL"
        ).length;

        const pneumonia = data.filter(
          (item) => item.disease === "PNEUMONIA"
        ).length;

        setStats({
          total: data.length,
          normal,
          pneumonia,
        });

        setRecentScans(data.slice(0, 5));
      } catch (error) {
  console.log(error.response?.data || error.message);
}
    };

    getStats();
  }, []);

  return (
    <div className="dashboard">

      <Navbar />

      {/* Hero Section */}

      <div className="welcome-card">

        <div>

          <h1>
            Welcome back, {user?.name} 👋
          </h1>

          <p>
            Analyze chest X-rays using Artificial Intelligence.
            Upload scans, receive predictions, download reports,
            and track patient history from one dashboard.
          </p>

        </div>

        <div className="welcome-icon">
          🩺
        </div>

      </div>

      {/* Statistics */}

      <div className="stats">

        <div className="stat-card">

          <div className="icon">
            📋
          </div>

          <h2>{stats.total}</h2>

          <p>Total Scans</p>

        </div>

        <div className="stat-card">

          <div className="icon">
            ✅
          </div>

          <h2>{stats.normal}</h2>

          <p>Normal Results</p>

        </div>

        <div className="stat-card">

          <div className="icon">
            🫁
          </div>

          <h2>{stats.pneumonia}</h2>

          <p>Pneumonia Cases</p>

        </div>

      </div>

      {/* Upload Card */}

      <div className="upload-card">

        <h2>Analyze New Chest X-Ray</h2>

        <p>
          Upload a chest X-ray image and receive an
          AI-powered prediction within seconds.
        </p>

        <button
          className="upload-btn"
          onClick={() => navigate("/upload")}
        >
          Upload New Scan
        </button>

      </div>

      {/* Recent Scans */}

      <div className="recent">

        <h2>Recent Scan History</h2>

        {
          recentScans.length === 0 ? (

            <p className="empty">
              No scan history available.
            </p>

          ) : (

            <table className="recent-table">

              <thead>

                <tr>
                  <th>Date</th>
                  <th>Prediction</th>
                  <th>Confidence</th>
                </tr>

              </thead>

              <tbody>

                {
                  recentScans.map((scan) => (

                    <tr key={scan._id}>

                      <td>
                        {new Date(scan.createdAt).toLocaleDateString()}
                      </td>

                      <td>

                        <span
                          className={
                            scan.disease === "NORMAL"
                              ? "normal"
                              : "pneumonia"
                          }
                        >
                          {scan.disease}
                        </span>

                      </td>

                      <td>
                        {scan.confidence}%
                      </td>

                    </tr>

                  ))
                }

              </tbody>

            </table>

          )
        }

      </div>

    </div>
  );
}

export default Dashboard;