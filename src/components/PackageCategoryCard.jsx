import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const PackageCategoryCard = ({ title, image, description }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(cardRef.current, 
        { opacity: 0, y: 50 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
          }
        }
      );
    }
  }, []);

  return (
    <div 
      ref={cardRef}
      className="package-category-card"
      style={{ 
        background: 'rgba(10, 15, 25, 0.9)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(0, 212, 255, 0.15)',
        borderRadius: '16px', 
        overflow: 'hidden', 
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6)', 
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '1.5rem',
        padding: '1.5rem',
        position: 'relative'
      }} 
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
        e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 212, 255, 0.3), 0 0 40px rgba(0, 212, 255, 0.15)';
        e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.5)';
        e.currentTarget.style.background = 'rgba(15, 20, 30, 0.95)';
      }} 
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.6)';
        e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.15)';
        e.currentTarget.style.background = 'rgba(10, 15, 25, 0.9)';
      }}
    >
      {/* Image Section */}
      <div className="card-image-wrapper" style={{ 
        position: 'relative', 
        overflow: 'hidden',
        borderRadius: '12px',
        minWidth: '200px',
        width: '200px',
        height: '200px',
        flexShrink: 0
      }}>
        <img 
          src={image} 
          alt={title} 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            transition: 'transform 0.4s ease'
          }} 
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.15)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(10, 15, 25, 0.3) 100%)',
          pointerEvents: 'none'
        }}></div>
      </div>

      {/* Content Section */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <h3 style={{ 
          color: '#00D4FF', 
          fontSize: '1.8rem',
          textShadow: '0 2px 8px rgba(0, 212, 255, 0.4), 0 0 20px rgba(0, 212, 255, 0.2)',
          fontWeight: '700',
          margin: 0,
          letterSpacing: '0.5px'
        }}>
          {title}
        </h3>
        <p style={{ 
          color: '#e8e8e8',
          lineHeight: '1.7',
          fontSize: '1rem',
          textShadow: '0 1px 3px rgba(0, 0, 0, 0.8)',
          fontWeight: '400',
          margin: 0
        }}>
          {description}
        </p>
      </div>

      {/* Decorative corner accent */}
      <div style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        width: '40px',
        height: '40px',
        borderTop: '2px solid rgba(0, 212, 255, 0.3)',
        borderRight: '2px solid rgba(0, 212, 255, 0.3)',
        borderTopRightRadius: '12px',
        pointerEvents: 'none'
      }}></div>

      <style>{`
        @media (max-width: 1024px) {
          .package-category-card {
            padding: 1.25rem !important;
            gap: 1.25rem !important;
          }
          
          .card-image-wrapper {
            min-width: 180px !important;
            width: 180px !important;
            height: 180px !important;
          }
          
          .package-category-card h3 {
            font-size: 1.6rem !important;
          }
          
          .package-category-card p {
            font-size: 0.95rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .package-category-card {
            flex-direction: column !important;
            text-align: center;
            padding: 1rem !important;
          }
          
          .card-image-wrapper {
            min-width: 100% !important;
            width: 100% !important;
            height: 220px !important;
          }
          
          .package-category-card h3 {
            font-size: 1.5rem !important;
          }
          
          .package-category-card p {
            font-size: 0.9rem !important;
            line-height: 1.6 !important;
          }
        }
        
        @media (max-width: 576px) {
          .package-category-card {
            padding: 0.85rem !important;
            gap: 1rem !important;
          }
          
          .card-image-wrapper {
            height: 200px !important;
          }
          
          .package-category-card h3 {
            font-size: 1.35rem !important;
          }
          
          .package-category-card p {
            font-size: 0.85rem !important;
            line-height: 1.5 !important;
          }
        }
        
        @media (max-width: 400px) {
          .package-category-card {
            padding: 0.75rem !important;
          }
          
          .card-image-wrapper {
            height: 180px !important;
          }
          
          .package-category-card h3 {
            font-size: 1.2rem !important;
          }
          
          .package-category-card p {
            font-size: 0.8rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PackageCategoryCard;
