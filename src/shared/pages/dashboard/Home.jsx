import React, { useState, useEffect } from "react";
import "./Home.css";
import { FaBell, FaUserCircle, FaStar, FaQuoteLeft, FaCheckCircle, FaAward, FaUsers, FaShieldAlt, FaTrophy, FaHandshake } from "react-icons/fa";
import { FaSearch, FaProjectDiagram, FaLayerGroup } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import { AiOutlineSafety } from "react-icons/ai";
import { SiAlwaysdata } from "react-icons/si";

import bgImage from "../../../assets/svg/Cad.jpg";
import Dashboard from "./Dashboard";
import logoGif from "../../../assets/gif/whats-app.gif";
import msgorade from "../../../assets/svg/msgorade2.png";
import liclogo from "../../../assets/svg/liclogo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { fetchLicPlans, fetchAchievements, fetchReviews } from "../../../services/mockApi";
import Contact from "./Contact";

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [plans, setPlans] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 3000);

    // Fetch mock data
    const loadData = async () => {
      const plansData = await fetchLicPlans();
      const achievementsData = await fetchAchievements();
      const reviewsData = await fetchReviews();
      setPlans(plansData);
      setAchievements(achievementsData);
      setReviews(reviewsData);
    };
    loadData();

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="home-header">
        <div className="home-header-left">
          <img
            src={liclogo}
            alt="Life Insurance"
            className="home-header-logo"
          />
        </div>

        <div className="home-header-right">
          {/* {/* <FaBell className="home-header-icon" /> */}
          <GiHamburgerMenu
            className="home-header-icon"
            onClick={() => navigate("/insurance/dashboard/hamburger-menu")}
          />
        </div>
      </div>

      <div className="home-container-main">
        {/* Page Content */}
        <div className="home-profile advanced-glass">
          {/* Liquid Glass Aurora Background */}
          <div className="aurora-bg">
            <div className="aurora-orb aurora-orb-1"></div>
            <div className="aurora-orb aurora-orb-2"></div>
            <div className="aurora-orb aurora-orb-3"></div>
          </div>
          
          <div className="home-profile-inner">
          {/* Top Branding */}
          <div className="home-profile-header">
            <div className="home-profile-logo shimmer-text">MS GORADE</div>
            <div className="home-profile-icons">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`home-profile-icons-dot ${
                    activeIndex === i ? "home-profile-icons-dot-active" : ""
                  }`}
                ></span>
              ))}
            </div>
          </div>

          <div className="home-profile-slider">
            <div className="home-profile-slider-track">
              {/* Card 1 */}
              <div className="home-profile-card">
                <div className="home-profile-content">
                  <div className="home-bubble">
                    <p className="home-bubble-text">
                      Trusted by 1000+ Families
                    </p>
                  </div>

                  <div className="home-timeline">
                    {/* Vertical Line */}
                    <div className="home-timeline-line"></div>

                    {/* Item 1 */}
                    <div className="home-timeline-item left">
                      <div className="home-timeline-card">
                        <div className="home-timeline-bar red"></div>
                        <div className="home-timeline-card-text">Serving with Trust & Transparency</div>
                        <div className="home-timeline-icon pink">
                          <SiTrustpilot  />
                        </div>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="home-timeline-item right">
                      <div className="home-timeline-card">
                        <div className="home-timeline-bar green"></div>
                        <div className="home-timeline-card-text">Simple Plans for a Safe Future</div>
                        <div className="home-timeline-icon green-bg">
                          <AiOutlineSafety />
                        </div>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="home-timeline-item left">
                      <div className="home-timeline-card">
                        <div className="home-timeline-bar purple"></div>
                        <div className="home-timeline-card-text">We Stand by You Always</div>
                        <div className="home-timeline-icon purple-bg">
                          <SiAlwaysdata />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="home-profile-image-container">
                  <img
                    src={msgorade}
                    alt="Life Insurance"
                    className="home-profile-img"
                  />
                </div>
              </div>

              {/* Card 2 */}
              <div className="home-profile-card">
                <div className="home-profile-content">
                  <h2>INSURE</h2>
                  <h2>YOUR DREAMS</h2>
                  <h2>TODAY</h2>

                  <p className="home-profile-description">
                    Secure your family’s future with trusted LIC plans including
                    life cover, child education, retirement planning and
                    long-term investment solutions.
                  </p>

                  <h4 className="home-profile-script">
                    Plan smart. Live secure.
                  </h4>

                  <h3 className="home-profile-training">TRUSTED LIC ADVISOR</h3>
                  <p>23+ Years Experience | 1000+ Happy Clients</p>
                </div>

                <div className="home-profile-image-container">
                  <img
                    src={msgorade}
                    alt="Life Insurance"
                    className="home-profile-img"
                  />
                </div>
              </div>

              {/* Card 3 */}
              <div className="home-profile-card">
                <div className="home-profile-content">
                  <h2>LIFE</h2>
                  <h2>INSURANCE</h2>
                  <h2>SERVICES</h2>

                  <p className="home-profile-description">
                    Child plans, pension plans & investment solutions for a
                    secure and happy future.
                  </p>

                  <h4 className="home-profile-script">Plan smart today</h4>

                  <h3 className="home-profile-training">TRUSTED LIC AGENT</h3>
                </div>
                <div className="home-profile-image-container">
                  <img
                    src={msgorade}
                    alt="Life Insurance"
                    className="home-profile-img"
                  />
                </div>{" "}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="home-profile-footer">
            <div className="home-profile-phone">
              📞 +91 880 538 4935 📞 +91 880 538 4935
            </div>

            <div className="home-profile-enquire">
              <button className="home-profile-btn" onClick={() => {
                window.open("https://wa.me/8805384935", "_blank");
              }}>
                <img src={logoGif} alt="logo" className="whatsapp-logo" />
                ENQUIRE NOW
              </button>
            </div>

            <div className="home-profile-web">
              🌐 LIC Advisor - Nillod, Sambhajinagar
            </div>
          </div>
          </div> {/* End home-profile-inner */}
        </div>

        {/* --- NEW SECTIONS START HERE --- */}

        {/* 1. About Section */}
        <section className="home-section home-about-section">
          <div className="section-header">
            <h3>About Ms Gorade</h3>
            <div className="section-divider"></div>
          </div>
          <div className="about-card glass-panel">
            <div className="about-icon-container">
               <FaShieldAlt className="about-main-icon" />
            </div>
            <p className="about-description">
              With over <strong>23+ years of dedicated service</strong> as an LIC Advisor, I specialize in crafting personalized financial portfolios to secure your family's future. From child education plans to retirement solutions, I ensure transparent, trust-based guidance every step of the way.
            </p>
          </div>
        </section>

        {/* 2. Achievements Section */}
        <section className="home-section home-achievements-section">
           <div className="section-header">
            <h3>Our Milestones</h3>
            <div className="section-divider"></div>
          </div>
          <div className="achievements-grid">
            {achievements.map((item, index) => (
              <div key={item.id} className="achievement-card glass-panel fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="achievement-icon">
                  {index === 0 && <FaAward />}
                  {index === 1 && <FaUsers />}
                  {index === 2 && <FaHandshake />}
                  {index === 3 && <FaTrophy />}
                </div>
                <h4 className="achievement-value">{item.value}</h4>
                <p className="achievement-label">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. LIC Plans Section */}
        <section className="home-section home-plans-section">
           <div className="section-header">
            <h3>Featured LIC Plans</h3>
            <div className="section-divider"></div>
          </div>
          <div className="plans-slider">
            {plans.map((plan, index) => (
              <div key={plan.id} className="plan-card glass-panel fade-in-right" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="plan-card-header">
                  <img src={liclogo} alt="LIC" className="plan-lic-logo" />
                  <span className="plan-type">{plan.type}</span>
                </div>
                <h4 className="plan-name">{plan.name}</h4>
                <ul className="plan-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}><FaCheckCircle className="feature-icon" /> {feature}</li>
                  ))}
                </ul>
                <div className="plan-footer">
                  <span>Age: {plan.minAge} - {plan.maxAge} yrs</span>
                  <button className="plan-btn" onClick={() => window.open(`https://wa.me/8805384935?text=I am interested in ${plan.name}`, "_blank")}>
                    Know More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Contact/>

        {/* 4. Reviews Section */}
        <section className="home-section home-reviews-section">
           <div className="section-header">
            <h3>Client Testimonials</h3>
            <div className="section-divider"></div>
          </div>
          <div className="reviews-container">
            {reviews.map((review, index) => (
              <div key={review.id} className="review-card glass-panel fade-in-up" style={{animationDelay: `${index * 0.15}s`}}>
                <FaQuoteLeft className="quote-icon" />
                <p className="review-comment">"{review.comment}"</p>
                <div className="review-footer">
                  <div className="reviewer-info">
                    <h5 className="reviewer-name">{review.name}</h5>
                    <span className="reviewer-location">{review.location}</span>
                  </div>
                  <div className="review-rating">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="star-icon" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Empty space at bottom so dashboard menu doesn't overlap */}
        <div style={{height: "80px"}}></div>

      </div>
      <Dashboard />
    </div>
  );
}

export default Home;
