import React, { useState } from "react";
import "./Contact.css";
import { FaRunning, FaPhone, FaMapMarkerAlt, FaEnvelopeOpenText, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import Dashboard from "./Dashboard";
import whatsapp from "../../../assets/gif/whats-app.gif";
import location from "../../../assets/gif/location1.gif";
import bgImage from "../../../assets/svg/Cad.jpg";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // clear error when typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowPopup(true);
    }
  };

  const handleConfirm = () => {
    setShowPopup(false);
    setIsSuccess(true);
    // In a real app, you would submit to backend here.
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <div className="dashboard-contact-container" style={{ backgroundImage: `url(${bgImage})` }}>
      
      {/* Dynamic Background Elements */}
      <div className="contact-bg-glow"></div>
      
      {/* Header */}
      <div className="dashboard-contact-header">
        <div className="contact-header-icon-wrapper">
           <FaEnvelopeOpenText className="contact-header-envelope float-anim" />
        </div>
        <h2>Get In Touch</h2>
        <p>We're here to help you secure your future. Send us a message today! ✨</p>
      </div>

      {/* Form Card */}
      <div className="dashboard-contact-form-card glass-panel">
        {isSuccess ? (
          <div className="success-message fade-in">
            <FaCheckCircle className="success-icon" />
            <h3>Message Sent!</h3>
            <p>Thank you, {formData.name}. We will get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="input-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={`dashboard-contact-input ${errors.name ? 'input-error' : ''}`}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`dashboard-contact-input ${errors.email ? 'input-error' : ''}`}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="input-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                className={`dashboard-contact-textarea ${errors.message ? 'input-error' : ''}`}
              ></textarea>
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>

            <button type="submit" className="dashboard-contact-btn pulse-btn">
              Submit Message
            </button>
          </form>
        )}
      </div>

      {/* Info Section */}
      {/* <div className="dashboard-contact-info">
        
        <div className="dashboard-contact-card glass-panel">
          <div className="dashboard-contact-icon">
            <FaRunning />
          </div>
          <h4>About</h4>
          <p>LIC Advisor</p>
          <p className="highlight-text">17+ Years Experience</p>
        </div>

        
        <div
          className="dashboard-contact-card glass-panel interactive-card"
          onClick={() => window.open("https://wa.me/918805384935", "_blank")}
        >
          <div className="dashboard-contact-icon">
            <img src={whatsapp} alt="whatsapp" className="home-header-logo-contact" />
          </div>
          <h4>Contact</h4>
          <p>+91 8805384935</p>
          <p className="highlight-text">Tap to WhatsApp</p>
        </div>

        
        <div
          className="dashboard-contact-card glass-panel interactive-card"
          onClick={() =>
            window.open("https://www.google.com/maps?q=Nillod,Sambhajinagar,Maharashtra", "_blank")
          }
        >
          <div className="dashboard-contact-icon">
            <img src={location} alt="location" className="home-header-logo-location" />
          </div>
          <h4>Location</h4>
          <p>Nillod</p>
          <p className="highlight-text">Sambhajinagar</p>
        </div>
      </div> */}
      
    
      <div style={{height: "80px"}}></div>

      <Dashboard />

      {/* Confirmation Popup Modal */}
      {showPopup && (
        <div className="popup-overlay fade-in">
          <div className="popup-modal pop-in glass-panel-heavy">
            <div className="popup-header">
              <div className="popup-warning-icon-bg">
                 <FaExclamationTriangle className="popup-warning-icon" />
              </div>
              <h3>Confirm Details</h3>
            </div>
            <div className="popup-body">
              <p className="popup-msg">Please confirm that all information is correct.</p>
              <div className="popup-data-review">
                <div className="popup-data-row">
                  <span className="data-label">Name:</span>
                  <span className="data-value">{formData.name}</span>
                </div>
                <div className="popup-data-row">
                  <span className="data-label">Email:</span>
                  <span className="data-value">{formData.email}</span>
                </div>
                <div className="popup-data-row message-row">
                  <span className="data-label">Message:</span>
                  <p className="data-value message-value">"{formData.message}"</p>
                </div>
              </div>
            </div>
            <div className="popup-actions">
              <button className="popup-btn popup-btn-cancel" onClick={() => setShowPopup(false)}>
                Go Back
              </button>
              <button className="popup-btn popup-btn-confirm" onClick={handleConfirm}>
                Confirm & Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
