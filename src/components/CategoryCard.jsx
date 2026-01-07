import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const CategoryCard = ({ title, image, description }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(cardRef.current, 
        { opacity: 0.5, y: 30 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
          }
        }
      );
    }
  }, []);

  return (
    <>
    <div ref={cardRef} className="category-card-wrapper" style={{ 
      background: 'rgba(10, 15, 25, 0.9)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(0, 212, 255, 0.15)',
      borderRadius: '12px', 
      overflow: 'hidden', 
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)', 
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }} 
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 212, 255, 0.25), 0 0 30px rgba(0, 212, 255, 0.15)';
      e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.4)';
      e.currentTarget.style.background = 'rgba(15, 20, 30, 0.95)';
    }} 
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0) scale(1)';
      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
      e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.15)';
      e.currentTarget.style.background = 'rgba(10, 15, 25, 0.9)';
    }}
    >
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img 
          src={image} 
          alt={title} 
          style={{ 
            width: '100%', 
            height: '200px', 
            objectFit: 'cover',
            transition: 'transform 0.4s ease'
          }} 
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, transparent 0%, rgba(10, 15, 25, 0.8) 100%)',
          pointerEvents: 'none'
        }}></div>
      </div>
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ 
          color: '#00D4FF', 
          marginBottom: '0.75rem', 
          fontSize: '1.3rem',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 212, 255, 0.3)',
          fontWeight: '700'
        }}>{title}</h3>
        <p style={{ 
          marginBottom: '0', 
          flex: 1, 
          color: '#f0f0f0',
          lineHeight: '1.6',
          fontSize: '0.95rem',
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.6)',
          fontWeight: '500',
          textAlign: 'justify'
        }}>{description}</p>
      </div>
    </div>
    <style>{`
      @media (max-width: 768px) {
        .category-card-wrapper img {
          height: 180px !important;
        }
        
        .category-card-wrapper > div:last-child {
          padding: 1.25rem !important;
        }
        
        .category-card-wrapper h3 {
          font-size: 1.2rem !important;
          margin-bottom: 0.65rem !important;
        }
        
        .category-card-wrapper p {
          font-size: 0.9rem !important;
          line-height: 1.5 !important;
        }
      }
      
      @media (max-width: 576px) {
        .category-card-wrapper img {
          height: 160px !important;
        }
        
        .category-card-wrapper > div:last-child {
          padding: 1rem !important;
        }
        
        .category-card-wrapper h3 {
          font-size: 1.15rem !important;
          margin-bottom: 0.6rem !important;
        }
        
        .category-card-wrapper p {
          font-size: 0.85rem !important;
          line-height: 1.5 !important;
        }
      }
      
      @media (max-width: 400px) {
        .category-card-wrapper img {
          height: 140px !important;
        }
        
        .category-card-wrapper > div:last-child {
          padding: 0.85rem !important;
        }
        
        .category-card-wrapper h3 {
          font-size: 1.05rem !important;
        }
        
        .category-card-wrapper p {
          font-size: 0.8rem !important;
        }
      }
    `}</style>
    </>
  );
};

export default CategoryCard;
