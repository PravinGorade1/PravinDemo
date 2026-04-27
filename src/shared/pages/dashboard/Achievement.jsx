import React, { useState, useEffect } from "react";
import "./Achievement.css";
import { FaArrowLeft, FaAward, FaUsers, FaHandshake, FaTrophy, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { fetchAchievements } from "../../../services/mockApi";

function Achievement() {
  const navigate = useNavigate();
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchAchievements();
      setAchievements(data);
    };
    loadData();
  }, []);

  // Map icons based on index
  const getIcon = (index) => {
    switch (index) {
      case 0: return <FaAward />;
      case 1: return <FaUsers />;
      case 2: return <FaHandshake />;
      case 3: return <FaTrophy />;
      default: return <FaStar />;
    }
  };

  return (
    <div className="solid-page-container">
      {/* Top Bar */}
      <div className="solid-top-bar">
        <FaArrowLeft className="solid-back-icon" onClick={() => navigate(-1)} />
        <h2>Our Milestones</h2>
        <div style={{width: '24px'}}></div> {/* Spacer for flex balance */}
      </div>

      {/* Header Banner */}
      <div className="solid-banner slide-down">
        <div className="banner-icon-bg">
          <FaTrophy className="banner-icon" />
        </div>
        <h3>23+ Years of Excellence</h3>
        <p>Building trust and securing futures across Maharashtra.</p>
      </div>

      {/* Grid */}
      <div className="solid-achievement-grid">
        {achievements.map((item, index) => (
          <div key={item.id} className="solid-achievement-card scale-in" style={{animationDelay: `${index * 0.15}s`}}>
            <div className="solid-achievement-icon-wrapper">
              {getIcon(index)}
            </div>
            <h4 className="solid-achievement-value">{item.value}</h4>
            <p className="solid-achievement-label">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievement;
