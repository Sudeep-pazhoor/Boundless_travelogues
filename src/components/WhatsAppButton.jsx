import React from 'react';

const WhatsAppButton = () => {
  return (
    <>
    <a
      href="https://wa.me/9544075583?text=Hi%2C%20I'm%20interested%20in%20Boundless%20Travelogues%20packages%21"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        color: '#fff',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
        textDecoration: 'none',
        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        zIndex: 1000,
        transition: 'all 0.3s ease'
      }}
    >
      💬
    </a>
    <style>{`
      .whatsapp-button:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 16px rgba(37, 211, 102, 0.5);
      }
      
      @media (max-width: 768px) {
        .whatsapp-button {
          width: 55px !important;
          height: 55px !important;
          font-size: 1.8rem !important;
          bottom: 15px !important;
          right: 15px !important;
        }
      }
      
      @media (max-width: 576px) {
        .whatsapp-button {
          width: 50px !important;
          height: 50px !important;
          font-size: 1.6rem !important;
          bottom: 12px !important;
          right: 12px !important;
        }
      }
      
      @media (max-width: 400px) {
        .whatsapp-button {
          width: 45px !important;
          height: 45px !important;
          font-size: 1.4rem !important;
          bottom: 10px !important;
          right: 10px !important;
        }
      }
    `}</style>
    </>
  );
};

export { WhatsAppButton };