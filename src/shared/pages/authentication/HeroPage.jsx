import React from "react";
import "./HeroPage.css";
import CanvasAnimation from "../../popups/CanvasAnimation";
import logo from "../../../assets/png/liclogoo.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";


const HeroPage = () => {
  return (
    <div className="phone-frame">
      <div className="hero">

        <CanvasAnimation />

        {/* Top Bar */}
        <div className="top-bar">
          <div className="back-btn"><FaArrowLeftLong />
          </div>
          <div className="progress">
            <span></span>
            <span></span>
            <span className="active"></span>
          </div>
        </div>

        <div className="floating-card">
          <img
            // src={logo}
            alt="goggles"
          />
          {/* <p>Start goggles</p> */}
        </div>

        {/* Content */}
        <div className="content">
          <h1>
            Secure Your Future<br />
            with LIC <br />
          </h1>

          <p>
            23+ Years of Trusted Insurance Guidance
          </p>

          <div className="cta">
            <div className="icon">⚡</div>
            <button>Get Started</button>
            <div className="arrow"><FaAnglesRight />
              <FaAnglesRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
