import React from "react";
import "./Developer.css";
import { FaArrowLeft, FaCode, FaLaptopCode, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Developer() {
  const navigate = useNavigate();

  return (
    <div className="solid-page-container">
      {/* Top Bar */}
      <div className="solid-top-bar">
        <FaArrowLeft className="solid-back-icon" onClick={() => navigate(-1)} />
        <h2>Developer</h2>
        <div style={{width: '24px'}}></div>
      </div>

      {/* Main Developer Card */}
      <div className="dev-main-card scale-in">
        <div className="dev-avatar-container">
          <div className="dev-avatar">
            <FaCode className="dev-avatar-icon" />
          </div>
          <div className="dev-pulse-ring"></div>
        </div>
        
        <h3 className="dev-name">Webpixels</h3>
        <p className="dev-title">Premium Web & Mobile Solutions</p>
        
        <div className="dev-divider"></div>
        
        <p className="dev-description">
          This digital portfolio was crafted with passion and precision. We specialize in building fast, beautiful, and highly converting websites for professionals.
        </p>

        {/* Services Grid */}
        <div className="dev-services">
          <div className="dev-service-item">
            <FaLaptopCode className="dev-service-icon" />
            <span>Web Dev</span>
          </div>
          <div className="dev-service-item">
            <FaMobileAlt className="dev-service-icon" />
            <span>Mobile UI</span>
          </div>
        </div>

        {/* Action Button */}
        <button 
          className="dev-contact-btn hover-rotate"
          onClick={() => window.open("mailto:contact@webpixels.example.com")}
        >
          <FaEnvelope className="btn-icon" />
          Hire Us for Your Project
        </button>
      </div>
    </div>
  );
}

export default Developer;
