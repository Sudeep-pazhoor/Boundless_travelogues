import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const AboutPageLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    // Zoom animation
    gsap.to('.loader-container', {
      scale: 1.2,
      duration: 1.5,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: 1,
    });

    // Complete loading after animation
    setTimeout(() => {
      gsap.to('.loader-container', {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className="loader-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #000 0%, #0a0f19 50%, #000 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      <div
        style={{
          fontSize: '80px',
          marginBottom: '2rem',
          animation: 'float 2s ease-in-out infinite',
        }}
      >
        ✈️
      </div>
      <h2
        style={{
          color: '#00D4FF',
          fontSize: '2rem',
          marginBottom: '1rem',
          textShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
        }}
      >
        Welcome to Boundless Travelogues
      </h2>
      <div
        style={{
          width: '300px',
          height: '4px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '2px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #00D4FF, #00BFFF)',
            transition: 'width 0.3s ease',
            boxShadow: '0 0 10px rgba(0, 212, 255, 0.8)',
          }}
        />
      </div>
      <p
        style={{
          color: '#fff',
          marginTop: '1rem',
          fontSize: '1rem',
          opacity: 0.7,
        }}
      >
        Loading your journey... {progress}%
      </p>
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
};

export default AboutPageLoader;
