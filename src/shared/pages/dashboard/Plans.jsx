import React, { useState, useEffect } from "react";
import "./Plans.css";
import { FaArrowLeft, FaCheckCircle, FaShieldAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { fetchLicPlans } from "../../../services/mockApi";
import liclogo from "../../../assets/svg/liclogo.svg";

function Plans() {
  const navigate = useNavigate();
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchLicPlans();
      setPlans(data);
    };
    loadData();
  }, []);

  return (
    <div className="solid-page-container">
      {/* Top Bar */}
      <div className="solid-top-bar">
        <FaArrowLeft className="solid-back-icon" onClick={() => navigate(-1)} />
        <h2>LIC Plans</h2>
        <div style={{width: '24px'}}></div>
      </div>

      {/* Header Banner */}
      <div className="solid-banner slide-down">
        <div className="banner-icon-bg">
          <FaShieldAlt className="banner-icon" />
        </div>
        <h3>Secure Your Future</h3>
        <p>Explore our top-rated life insurance plans tailored for you.</p>
      </div>

      {/* Plans List */}
      <div className="solid-plans-list">
        {plans.map((plan, index) => (
          <div key={plan.id} className="solid-plan-card fade-in-up" style={{animationDelay: `${index * 0.15}s`}}>
            <div className="solid-plan-header">
              <img src={liclogo} alt="LIC Logo" className="solid-plan-logo" />
              <span className="solid-plan-type">{plan.type}</span>
            </div>
            
            <h4 className="solid-plan-name">{plan.name}</h4>
            
            <ul className="solid-plan-features">
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <FaCheckCircle className="solid-feature-icon" /> {feature}
                </li>
              ))}
            </ul>

            <div className="solid-plan-footer">
              <div className="solid-plan-age">
                <span>Age Limit:</span>
                <strong>{plan.minAge} - {plan.maxAge} yrs</strong>
              </div>
              <button 
                className="solid-plan-btn"
                onClick={() => window.open(`https://wa.me/918805384935?text=I want to know more about ${plan.name}`, "_blank")}
              >
                Inquire Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
