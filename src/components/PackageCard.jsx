import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const PackageCard = ({ title, image, description, link = '#', accommodation }) => {
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
    <div ref={cardRef} className="package-card-wrapper" style={{ 
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
      const arrow = e.currentTarget.querySelector('.arrow-icon');
      if (arrow) arrow.style.transform = 'translateX(5px)';
    }} 
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0) scale(1)';
      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
      e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.15)';
      e.currentTarget.style.background = 'rgba(10, 15, 25, 0.9)';
      const arrow = e.currentTarget.querySelector('.arrow-icon');
      if (arrow) arrow.style.transform = 'translateX(0)';
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
          marginBottom: '1rem', 
          flex: 1, 
          color: '#f0f0f0',
          lineHeight: '1.6',
          fontSize: '0.95rem',
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.6)',
          fontWeight: '500'
        }}>{description}</p>
        {accommodation && (
          <p style={{ 
            fontSize: '0.85rem', 
            color: '#9aa0a6', 
            marginBottom: '1rem',
            padding: '0.5rem',
            background: 'rgba(0, 212, 255, 0.05)',
            borderRadius: '6px',
            borderLeft: '3px solid rgba(0, 212, 255, 0.3)'
          }}>
            <strong style={{ color: '#00D4FF' }}>Accommodation:</strong> {accommodation} (with meals included)
          </p>
        )}
        <a 
          href={link} 
          style={{ 
            color: '#00D4FF', 
            textDecoration: 'none', 
            fontWeight: 'bold', 
            fontSize: '1rem', 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#FFB800';
            e.currentTarget.style.textShadow = '0 0 10px rgba(255, 184, 0, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#00D4FF';
            e.currentTarget.style.textShadow = 'none';
          }}
        >
          Explore <span className="arrow-icon" style={{ transition: 'transform 0.3s' }}>→</span>
        </a>
      </div>
    </div>
    <style>{`
      @media (max-width: 768px) {
        .package-card-wrapper img {
          height: 180px !important;
        }
        
        .package-card-wrapper > div:last-child {
          padding: 1.25rem !important;
        }
        
        .package-card-wrapper h3 {
          font-size: 1.2rem !important;
          margin-bottom: 0.65rem !important;
        }
        
        .package-card-wrapper p {
          font-size: 0.9rem !important;
          margin-bottom: 0.85rem !important;
        }
        
        .package-card-wrapper a {
          font-size: 0.95rem !important;
        }
      }
      
      @media (max-width: 576px) {
        .package-card-wrapper img {
          height: 160px !important;
        }
        
        .package-card-wrapper > div:last-child {
          padding: 1rem !important;
        }
        
        .package-card-wrapper h3 {
          font-size: 1.15rem !important;
          margin-bottom: 0.6rem !important;
        }
        
        .package-card-wrapper p {
          font-size: 0.85rem !important;
          margin-bottom: 0.75rem !important;
          line-height: 1.5 !important;
        }
        
        .package-card-wrapper a {
          font-size: 0.9rem !important;
        }
      }
      
      @media (max-width: 400px) {
        .package-card-wrapper img {
          height: 140px !important;
        }
        
        .package-card-wrapper > div:last-child {
          padding: 0.85rem !important;
        }
        
        .package-card-wrapper h3 {
          font-size: 1.05rem !important;
        }
        
        .package-card-wrapper p {
          font-size: 0.8rem !important;
        }
        
        .package-card-wrapper a {
          font-size: 0.85rem !important;
        }
      }
    `}</style>
    </>
  );
};

export default PackageCard;