import React, { useState } from "react";
import "./WhatsApp.css";

import {
  FaWhatsapp,
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

function WhatsApp() {
  const [showMessagePopup, setShowMessagePopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

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
    const whatsappMsg =
      `Hello,\n` +
      `Name: ${formData.name}\n` +
      `Message: ${formData.message}`;

    const message = encodeURIComponent(whatsappMsg);

    const appUrl = `whatsapp://send?phone=918805384935&text=${message}`;
    const webUrl = `https://wa.me/918805384935?text=${message}`;

    const isMobile =
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = appUrl;

      setTimeout(() => {
        window.location.href = webUrl;
      }, 1500);
    } else {
      window.open(webUrl, "_blank");
    }
  };

  const customMessages = [
    // English
    "Hello Sir, I want information about LIC policy plans.",
    "Hi, I am interested in buying a new LIC policy. Please guide me.",
    "Hello, I need help choosing the best LIC policy for my family.",
    "Hi Sir, I want details regarding LIC premium and benefits.",
    "Hello, I have some questions related to LIC policy. Please contact me.",

    // Marathi
    "नमस्कार सर, मला LIC पॉलिसीची माहिती हवी आहे.",
    "सर, मला नवीन LIC पॉलिसी घ्यायची आहे, कृपया मार्गदर्शन करा.",
    "नमस्कार, माझ्या कुटुंबासाठी योग्य LIC पॉलिसी कोणती ते सांगावे.",
    "सर, LIC प्रीमियम आणि लाभांविषयी माहिती हवी आहे.",
    "नमस्कार सर, LIC पॉलिसी संदर्भात काही प्रश्न आहेत, कृपया संपर्क करा."
  ];


  const sendCustomMessage = (msg) => {
    setFormData((prev) => ({
      ...prev,
      message: msg,
    }));

    setShowMessagePopup(false);
  };

  return (
    <div className="wa-wrapper">
      <div className="wa-glow"></div>

      <div className="wa-header">
        <div className="wa-icon-box">
          <FaWhatsapp className="wa-main-icon" />
        </div>

        <h2>Chat With Us</h2>
        <p>Send your details directly on WhatsApp 💚</p>
      </div>

      <div className="wa-card">
        {isSuccess ? (
          <div className="wa-success">
            <FaCheckCircle className="wa-success-icon" />
            <h3>Message Sent</h3>
            <p>Thank you {formData.name}, we received your message.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="wa-form">
            <div className="wa-field">
              <FaUser className="wa-input-icon" />
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "wa-error-border" : ""}
              />
              {errors.name && <span>{errors.name}</span>}
            </div>

            <div className="wa-field">
              <FaCommentDots className="wa-input-icon textarea-icon" />
              <textarea
                name="message"
                placeholder="Type message..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <div className="wa-field">
              <button
                type="button"
                className="wa-custom-btn"
                onClick={() => setShowMessagePopup(true)}
              >
                Choose Custom Message
              </button>
            </div>


            <button className="wa-btn"
              onClick={() => setShowPopup(true)}
            >
              <FaWhatsapp size={20} /> Send Message
            </button>
          </form>
        )}
      </div>

      {showMessagePopup && (
        <div className="wa-popup-overlay">
          <div className="wa-msg-popup">
            <h3>Select Message</h3>

            <div className="wa-message-list">
              {customMessages.map((msg, index) => (
                <button
                  key={index}
                  className="wa-message-item"
                  onClick={() => sendCustomMessage(msg)}
                >
                  {msg}
                </button>
              ))}
            </div>

            <button
              className="wa-close-btn"
              onClick={() => setShowMessagePopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showPopup && (
        <div className="wa-confirm-overlay">
          <div className="wa-confirm-box">
            <div className="wa-confirm-icon-wrap">
              <FaExclamationTriangle className="wa-confirm-icon" />
            </div>

            <h3>Confirm Submission</h3>

            <p className="wa-confirm-text">
              Are you sure you want to submit this message?
            </p>

            <p className="wa-confirm-subtext">
              Please verify your details before submitting.
            </p>

            <div className="wa-review-card">
              <div className="wa-review-row">
                <span>Name :</span>
                <strong>{formData.name}</strong>
              </div>

              <div className="wa-review-message">
                <span>Message :</span>
                <p>{formData.message}</p>
              </div>
            </div>

            <div className="wa-confirm-actions">
              <button
                type="button"
                className="wa-back-btn"
                onClick={() => setShowPopup(false)}
              >
                Edit
              </button>

              <button
                type="button"
                className="wa-send-btn"
                onClick={handleConfirm}
              >
                Send on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WhatsApp;
