import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({ image, name, rating, comment }) => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={index < rating ? 'star filled' : 'star empty'}>
        ★
      </span>
    ));
  };

  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <img src={image} alt={name} className="testimonial-avatar" />
        <div className="testimonial-info">
          <h3 className="testimonial-name">{name}</h3>
          <div className="testimonial-rating">
            {renderStars(rating)}
          </div>
        </div>
      </div>
      <p className="testimonial-comment">{comment}</p>
    </div>
  );
};

export default TestimonialCard;
