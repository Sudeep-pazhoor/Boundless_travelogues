import React from 'react';
import TestimonialCard from './TestimonialCard';
import './TestimonialCard.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      image: '/testimonials/c1.webp',
      name: 'Sudeep Pazhoor',
      rating: 5,
      comment: 'Best Trip Packagers handled both our trips very well. The Wayanad–Coorg and Goa trips were smoothly organized with good stays, food, and coordination. Overall, a satisfying experience.'
    },
    {
      image: '/testimonials/c3.webp',
      name: 'Madhavan V',
      rating: 5,
      comment: 'The trip and the coordinators were nice as a whole boundless did a great job.'
    },
    {
      image: '/testimonials/c2.webp',
      name: 'Sreeprasad L S',
      rating: 5,
      comment: 'The Coorg trip was awesome—comfortable travel, well-timed visits at every destination, and enough time to explore each place without any rush.'
    },
    {
      image: '/testimonials/c4.webp',
      name: 'Stinphy Juwal',
      rating: 5,
      comment: 'An amazing travelling experience was given by the tour package for all the three days. From the beginning to the end part, tour was well planned and executed. A big thanks to the entire team.'
    },
    {
      image: '/testimonials/c7.webp',
      name: 'Kiran Babu',
      rating: 5,
      comment: 'Highly recommend this team for their consistently great service. Everything from accommodation to food is thoughtfully arranged, and the pricing is very reasonable. A truly memorable travel experience.'
    },
    {
      image: '/testimonials/c5.webp',
      name: 'Akhosh M',
      rating: 5,
      comment: 'Nothing to say.100% most memorable trip. Well oraganised !'
    },
    {
      image: '/testimonials/c6.webp',
      name: 'Rohith B',
      rating: 5,
      comment: 'Our trip was smoothly managed from start to finish. The coordinators were supportive, well-organized, and ensured a stress-free, memorable experience. Highly recommended.'
    },
    // Add more testimonials here as needed

  ];

  // Duplicate testimonials for seamless loop only if there are multiple testimonials
  const duplicatedTestimonials = testimonials.length > 1 ? [...testimonials, ...testimonials] : testimonials;

  return (
    <div className="testimonials-section-wrapper" style={{ marginTop: '4rem', marginBottom: '3rem' }}>
      <h2 className="testimonials-heading" style={{
        textAlign: 'center',
        color: 'var(--primary-color)',
        marginBottom: '0.5rem',
        fontSize: '2rem'
      }}>
        What Our Clients Say
      </h2>
      <p className="testimonials-subheading" style={{
        textAlign: 'center',
        fontSize: '1.1rem',
        marginBottom: '2rem',
        color: 'var(--text-color)',
        opacity: 0.8
      }}>
        Real experiences from our valued travelers
      </p>

      <div className="testimonials-marquee-container">
        <div className={`testimonials-marquee ${testimonials.length === 1 ? 'single-card' : ''}`}>
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              rating={testimonial.rating}
              comment={testimonial.comment}
            />
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .testimonials-section-wrapper {
            margin-top: 3rem !important;
            margin-bottom: 2.5rem !important;
          }
          
          .testimonials-heading {
            font-size: 1.75rem !important;
          }
          
          .testimonials-subheading {
            font-size: 1rem !important;
            margin-bottom: 1.75rem !important;
          }
        }
        
        @media (max-width: 576px) {
          .testimonials-section-wrapper {
            margin-top: 2.5rem !important;
            margin-bottom: 2rem !important;
          }
          
          .testimonials-heading {
            font-size: 1.5rem !important;
          }
          
          .testimonials-subheading {
            font-size: 0.95rem !important;
            margin-bottom: 1.5rem !important;
          }
        }
        
        @media (max-width: 400px) {
          .testimonials-heading {
            font-size: 1.35rem !important;
          }
          
          .testimonials-subheading {
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSection;
