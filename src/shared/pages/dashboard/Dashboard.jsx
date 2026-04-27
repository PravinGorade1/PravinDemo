import React from "react";
import "./Dashboard.css";
import { FaHome, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="dashboard-container">

      {/* Bottom Navigation */}
      <div className="dashboard-bottom-nav">
        <div className="dashboard-nav-item"
          onClick={() => navigate("/insurance/dashboard/home")}>
          <FaHome className="dashboard-icon" />
          <span>Home</span>
        </div>

        <div className="dashboard-nav-item"
          onClick={() => navigate("/insurance/dashboard/contact")}>
          <FaEnvelope className="dashboard-icon" />
          <span>Email</span>
        </div>

        <div
          className="dashboard-nav-item"
          onClick={() => navigate("/insurance/dashboard/map")}
        >
          <FaMapMarkerAlt className="dashboard-icon" />
          <span>Visit</span>
        </div>

        <div
          className="dashboard-nav-item"
          onClick={() => {
            window.open("https://wa.me/8805384935", "_blank");
          }}
        >
          <FaPhone className="dashboard-icon" />
          <span>Contact</span>
        </div>
      </div>
    </div >
  );
}

export default Dashboard;
