import React from 'react';
import { WhatsAppButton } from './WhatsAppButton.jsx';
import { InstructionsModal } from './InstructionsModal.jsx';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#0d0d0d', 
      color: '#fff', 
      padding: '3rem 2rem', 
      marginTop: '4rem',
      borderTop: '2px solid rgba(0, 212, 255, 0.3)',
      boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.5)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          {/* Company Info */}
          <div>
            <h3 style={{ color: '#00D4FF', marginBottom: '1rem', fontWeight: 'bold', textShadow: '0 0 15px rgba(0, 212, 255, 0.4)' }}>Boundless Travelogues</h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#e8eaed' }}>Your gateway to unforgettable journeys! Established 2023 with 7-8 years of expertise.</p>
            <p style={{ fontSize: '0.95rem', marginTop: '0.5rem', color: '#e8eaed' }}>Headquartered in Kerala, operating across India.</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#00D4FF', marginBottom: '1rem', fontWeight: 'bold', textShadow: '0 0 15px rgba(0, 212, 255, 0.4)' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
                <a href="/" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '0.95rem', transition: 'all 0.3s ease' }} className="footer-link">Home</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
                <a href="/packages" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '0.95rem', transition: 'all 0.3s ease' }} className="footer-link">Packages</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
                <a href="/gallery" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '0.95rem', transition: 'all 0.3s ease' }} className="footer-link">Gallery</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
                <a href="/contact" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '0.95rem', transition: 'all 0.3s ease' }} className="footer-link">Contact Us</a>
              </div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 style={{ color: '#00D4FF', marginBottom: '1rem', fontWeight: 'bold', textShadow: '0 0 15px rgba(0, 212, 255, 0.4)' }}>Contact Us</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.704"></path>
              </svg>
              <a href="https://wa.me/918078107622" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '0.95rem', transition: 'all 0.3s ease' }} className="footer-link">+91 8078107622</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <a href="mailto:boundlesstravelogues@gmail.com" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '0.95rem', transition: 'all 0.3s ease' }} className="footer-link">boundlesstravelogues@gmail.com</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <a href="https://instagram.com/boundless_travelogues" target="_blank" rel="noopener noreferrer" style={{ color: '#00D4FF', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 'bold', transition: 'all 0.3s ease' }} className="footer-link-special">@boundless_travelogues</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span style={{ color: '#e8eaed', fontSize: '0.95rem' }}>Kerala, India</span>
            </div>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid rgba(0, 212, 255, 0.2)', paddingTop: '1.5rem', marginTop: '1.5rem' }}>
          <InstructionsModal />
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            <a href="/terms" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '0.95rem', transition: 'all 0.3s ease' }} className="footer-link">Terms & Conditions</a>
            <a href="/privacy" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '0.95rem', transition: 'all 0.3s ease' }} className="footer-link">Privacy Policy</a>
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', opacity: 0.7, color: '#e8eaed', textAlign: 'center' }}>
            © 2025 Boundless Travelogues. All rights reserved.
          </p>
        </div>
        <WhatsAppButton />
      </div>
      
      <style>{`
        .footer-link:hover {
          color: #00D4FF !important;
          text-shadow: 0 0 10px rgba(0, 212, 255, 0.6);
          transform: translateX(3px);
          display: inline-block;
        }
        
        .footer-link-special:hover {
          text-shadow: 0 0 15px rgba(0, 212, 255, 0.8);
          transform: scale(1.05);
          display: inline-block;
        }
        
        @media (max-width: 768px) {
          footer {
            padding: 2.5rem 1.5rem !important;
          }
          
          footer > div > div {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          footer h3, footer h4 {
            font-size: 1.2rem !important;
          }
          
          footer p, footer a {
            font-size: 0.9rem !important;
          }
        }
        
        @media (max-width: 576px) {
          footer {
            padding: 2rem 1rem !important;
            margin-top: 3rem !important;
          }
          
          footer > div > div {
            gap: 1.5rem !important;
          }
          
          footer h3, footer h4 {
            font-size: 1.1rem !important;
            margin-bottom: 0.75rem !important;
          }
          
          footer p, footer a {
            font-size: 0.85rem !important;
          }
          
          footer > div > div:last-child {
            flex-direction: column !important;
            gap: 1rem !important;
          }
          
          footer > div > div:last-child > div {
            flex-direction: column !important;
            gap: 0.75rem !important;
          }
        }
        
        @media (max-width: 400px) {
          footer {
            padding: 1.5rem 0.75rem !important;
          }
          
          footer h3, footer h4 {
            font-size: 1rem !important;
          }
          
          footer p, footer a {
            font-size: 0.8rem !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;