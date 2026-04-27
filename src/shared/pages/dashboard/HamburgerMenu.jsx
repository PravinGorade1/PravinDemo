import React from "react";
import "./HamburgerMenu.css";
import { FaTimes, FaHome, FaTrophy, FaListAlt, FaStar, FaEnvelope, FaCode } from "react-icons/fa";
import msgorade from "../../../assets/svg/msgorade2.png";
import { useNavigate, useLocation } from "react-router-dom";

function HamburgerMenu() {
    const navigate = useNavigate();
    const location = useLocation();

    // Helper to check if current route is active
    const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <div className="hamburger-menu-container slide-in-left">
      <div className="hamburger-menu-card">
        
        {/* Top Icon - Using X to close */}
        <div className="hamburger-menu-top">
          <FaTimes className="hamburger-menu-icon hover-rotate" 
          onClick={() => navigate("/insurance/dashboard/home")} />
        </div>

        {/* Profile Section */}
        <div className="hamburger-menu-profile">
          <img
            src={msgorade}
            alt="profile"
            className="hamburger-menu-avatar float-anim"
          />
          <div>
            <h3>MS Gorade</h3>
            <p>LIC Advisor</p>
          </div>
        </div>

        <div className="hamburger-menu-divider"></div>

        {/* Menu Items */}
        <div className="hamburger-menu-list">
          <div 
            className={`hamburger-menu-item ${isActive("/insurance/dashboard/home")}`}
            onClick={() => navigate("/insurance/dashboard/home")}
          >
            <FaHome className="menu-item-icon" />
            <span>Home</span>
          </div>

          <div 
            className={`hamburger-menu-item ${isActive("/insurance/dashboard/achievement")}`}
            onClick={() => navigate("/insurance/dashboard/achievement")}
          >
            <FaTrophy className="menu-item-icon" />
            <span>Achievements</span>
          </div>

          <div 
            className={`hamburger-menu-item ${isActive("/insurance/dashboard/plans")}`}
            onClick={() => navigate("/insurance/dashboard/plans")}
          >
            <FaListAlt className="menu-item-icon" />
            <span>Plans</span>
          </div>

          <div 
            className={`hamburger-menu-item ${isActive("/insurance/dashboard/testimonials")}`}
            onClick={() => navigate("/insurance/dashboard/testimonials")}
          >
            <FaStar className="menu-item-icon" />
            <span>Client Testimonials</span>
          </div>

          <div 
            className={`hamburger-menu-item ${isActive("/insurance/dashboard/contact")}`}
            onClick={() => navigate("/insurance/dashboard/contact")}
          >
            <FaEnvelope className="menu-item-icon" />
            <span>Contact</span>
          </div>
        </div>

        {/* Bottom Card - Developer */}
        <div 
          className="hamburger-menu-developer interactive-card"
          onClick={() => navigate("/insurance/dashboard/developer")}
        >
          <div className="hamburger-menu-dev-avatar">
             <FaCode className="dev-icon" />
          </div>
          <div className="hamburger-menu-dev-text">
            <h4>Developed By</h4>
            <p>Pravin Gorade - View Info</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default HamburgerMenu;