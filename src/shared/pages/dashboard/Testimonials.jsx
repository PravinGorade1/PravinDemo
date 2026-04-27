import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import { FaArrowLeft, FaQuoteLeft, FaStar, FaCommentDots } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { fetchReviews } from "../../../services/mockApi";

function Testimonials() {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchReviews();
      setReviews(data);
    };
    loadData();
  }, []);

  return (
    <div className="solid-page-container">
      {/* Top Bar */}
      <div className="solid-top-bar">
        <FaArrowLeft className="solid-back-icon" onClick={() => navigate(-1)} />
        <h2>Testimonials</h2>
        <div style={{width: '24px'}}></div>
      </div>

      {/* Header Banner */}
      <div className="solid-banner slide-down">
        <div className="banner-icon-bg">
          <FaCommentDots className="banner-icon" />
        </div>
        <h3>What Our Clients Say</h3>
        <p>Real stories from families whose futures we helped secure.</p>
      </div>

      {/* Reviews List */}
      <div className="solid-reviews-list">
        {reviews.map((review, index) => (
          <div key={review.id} className="solid-review-card fade-in-up" style={{animationDelay: `${index * 0.15}s`}}>
            <FaQuoteLeft className="solid-quote-icon" />
            
            <p className="solid-review-text">"{review.comment}"</p>
            
            <div className="solid-review-footer">
              <div className="solid-reviewer-info">
                <div className="solid-reviewer-avatar">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="solid-reviewer-name">{review.name}</h4>
                  <span className="solid-reviewer-location">{review.location}</span>
                </div>
              </div>
              <div className="solid-review-stars">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="solid-star" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
