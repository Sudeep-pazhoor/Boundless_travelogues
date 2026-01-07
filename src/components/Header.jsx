import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    gsap.from('.nav-item', { duration: 0.6, opacity: 0.3, stagger: 0.08 });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open on mobile
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
      <header style={{
        background: '#0d0d0d',
        color: '#fff',
        padding: '1.2rem 2rem',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.9)',
        borderBottom: '2px solid rgba(0, 212, 255, 0.3)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1400px', margin: '0 auto' }}>
          {/* Logo - Left Side */}
          <div style={{ display: 'flex', alignItems: 'center', flex: '0 0 auto' }}>
            <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', transition: 'transform 0.3s ease' }} className="logo-link">
              <img src="/logo.png" alt="Boundless Travelogues Logo" style={{ height: '60px', marginRight: '1rem', filter: 'drop-shadow(0 0 10px rgba(0, 212, 255, 0.3))' }} onError={(e) => { e.target.style.display = 'none'; }} />
              <img src="/Boundless_text.png" alt="Boundless Travelogues" style={{ height: '80px', filter: 'drop-shadow(0 0 10px rgba(0, 212, 255, 0.3))' }} />
            </a>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="desktop-nav" style={{ display: 'flex', gap: '2.5rem', flex: '1', justifyContent: 'center', alignItems: 'center' }}>
            <a href="/about" className="nav-item" style={{
              color: '#ffffff',
              textDecoration: 'none',
              fontWeight: '700',
              transition: 'all 0.3s ease',
              fontSize: '1.05rem',
              position: 'relative',
              padding: '0.5rem 0',
              opacity: 1,
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)',
              display: 'inline-block',
              lineHeight: '1.5'
            }}>About Us</a>
            <a href="/packages" className="nav-item" style={{
              color: '#ffffff',
              textDecoration: 'none',
              fontWeight: '700',
              transition: 'all 0.3s ease',
              fontSize: '1.05rem',
              position: 'relative',
              padding: '0.5rem 0',
              opacity: 1,
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)',
              display: 'inline-block',
              lineHeight: '1.5'
            }}>Packages</a>
            <a href="/services" className="nav-item" style={{
              color: '#ffffff',
              textDecoration: 'none',
              fontWeight: '700',
              transition: 'all 0.3s ease',
              fontSize: '1.05rem',
              position: 'relative',
              padding: '0.5rem 0',
              opacity: 1,
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)',
              display: 'inline-block',
              lineHeight: '1.5'
            }}>Services</a>
            <a href="/gallery" className="nav-item" style={{
              color: '#ffffff',
              textDecoration: 'none',
              fontWeight: '700',
              transition: 'all 0.3s ease',
              fontSize: '1.05rem',
              position: 'relative',
              padding: '0.5rem 0',
              opacity: 1,
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)',
              display: 'inline-block',
              lineHeight: '1.5'
            }}>Gallery</a>
            <a href="/contact" className="nav-item" style={{
              color: '#ffffff',
              textDecoration: 'none',
              fontWeight: '700',
              transition: 'all 0.3s ease',
              fontSize: '1.05rem',
              position: 'relative',
              padding: '0.5rem 0',
              opacity: 1,
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)',
              display: 'inline-block',
              lineHeight: '1.5'
            }}>Contact Us</a>
          </nav>

          {/* Download Brochure Button - Right Side */}
          <div className="desktop-brochure" style={{ flex: '0 0 auto' }}>
            <a
              href="/Boundless Travelogues.pdf"
              download
              className="brochure-btn"
              style={{
                background: 'linear-gradient(135deg, #28a745, #20c997)',
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: '600',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                transition: 'all 0.3s ease',
                fontSize: '0.9rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                boxShadow: '0 2px 10px rgba(40, 167, 69, 0.3)',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              <i className="bi bi-download" style={{ fontSize: '1rem' }}></i>
              <span>Brochure</span>
            </a>
          </div>

          {/* Mobile Menu Button - Animated Hamburger */}
          <button
            className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              flex: '0 0 auto',
              padding: '0.5rem',
              position: 'relative',
              width: '40px',
              height: '40px',
              zIndex: 1001
            }}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        {/* Mobile Navigation - Full Screen Overlay */}
        <div className={`mobile-nav-overlay ${isMenuOpen ? 'active' : ''}`}>
          <nav className="mobile-nav">
            <div className="mobile-nav-content">
              <a href="/" onClick={closeMenu} className="mobile-nav-item">
                <i className="bi bi-house-door-fill"></i>
                <span>Home</span>
              </a>
              <a href="/about" onClick={closeMenu} className="mobile-nav-item">
                <i className="bi bi-info-circle-fill"></i>
                <span>About Us</span>
              </a>
              <a href="/packages" onClick={closeMenu} className="mobile-nav-item">
                <i className="bi bi-box-seam-fill"></i>
                <span>Packages</span>
              </a>
              <a href="/services" onClick={closeMenu} className="mobile-nav-item">
                <i className="bi bi-gear-fill"></i>
                <span>Services</span>
              </a>
              <a href="/gallery" onClick={closeMenu} className="mobile-nav-item">
                <i className="bi bi-images"></i>
                <span>Gallery</span>
              </a>
              <a href="/contact" onClick={closeMenu} className="mobile-nav-item">
                <i className="bi bi-envelope-fill"></i>
                <span>Contact Us</span>
              </a>

              {/* Social Media Links */}
              <div className="mobile-social-links">
                <a
                  href="mailto:boundlesstravelogues@gmail.com"
                  className="social-link"
                  aria-label="Email"
                >
                  <i className="bi bi-envelope-fill"></i>
                </a>
                <a
                  href="https://instagram.com/boundless_travelogues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Instagram"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://wa.me/8078107622"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="WhatsApp"
                >
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>

              {/* Download Brochure Button */}
              <a
                href="/Boundless Travelogues.pdf"
                download
                onClick={closeMenu}
                className="mobile-brochure-btn"
              >
                <i className="bi bi-download"></i>
                <span>Download Brochure</span>
              </a>
            </div>
          </nav>
        </div>

        <style>{`
        /* Desktop Navigation Alignment */
        .nav-item {
          vertical-align: middle;
        }
        
        /* Desktop Navigation Hover Effects */
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #00D4FF, #00BFFF);
          transition: width 0.3s ease;
          box-shadow: 0 0 10px rgba(0, 212, 255, 0.8);
        }
        
        .nav-item:hover::after {
          width: 100%;
        }
        
        .nav-item:hover {
          color: #00D4FF !important;
          text-shadow: 0 0 15px rgba(0, 212, 255, 0.6);
        }
        
        /* Logo Hover Effect */
        .logo-link:hover {
          transform: scale(1.05);
        }
        
        .logo-link:hover span {
          text-shadow: 0 0 30px rgba(0, 212, 255, 0.8);
        }
        
        /* Brochure Button Hover */
        .brochure-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(40, 167, 69, 0.5);
          background: linear-gradient(135deg, #20c997, #28a745);
        }
        
        /* Animated Hamburger Menu */
        .hamburger-line {
          display: block;
          width: 28px;
          height: 3px;
          background: #00D4FF;
          border-radius: 3px;
          position: absolute;
          left: 6px;
          transition: all 0.3s ease;
          box-shadow: 0 0 8px rgba(0, 212, 255, 0.5);
        }
        
        .hamburger-line:nth-child(1) {
          top: 10px;
        }
        
        .hamburger-line:nth-child(2) {
          top: 18px;
        }
        
        .hamburger-line:nth-child(3) {
          top: 26px;
        }
        
        .mobile-menu-btn.active .hamburger-line:nth-child(1) {
          top: 18px;
          transform: rotate(45deg);
        }
        
        .mobile-menu-btn.active .hamburger-line:nth-child(2) {
          opacity: 0;
        }
        
        .mobile-menu-btn.active .hamburger-line:nth-child(3) {
          top: 18px;
          transform: rotate(-45deg);
        }
        
        .mobile-menu-btn:hover .hamburger-line {
          box-shadow: 0 0 15px rgba(0, 212, 255, 0.8);
        }
        
        /* Mobile Navigation Overlay */
        .mobile-nav-overlay {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.98);
          backdrop-filter: blur(10px);
          z-index: 999;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease, visibility 0.3s ease;
        }
        
        .mobile-nav-overlay.active {
          opacity: 1;
          visibility: visible;
        }
        
        .mobile-nav {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        
        .mobile-nav-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
          max-width: 400px;
          animation: slideIn 0.4s ease;
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .mobile-nav-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.5rem;
          background: rgba(0, 212, 255, 0.1);
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: 12px;
          color: #ffffff;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }
        
        .mobile-nav-item i {
          font-size: 1.3rem;
          color: #00D4FF;
        }
        
        .mobile-nav-item:hover {
          background: rgba(0, 212, 255, 0.2);
          border-color: rgba(0, 212, 255, 0.4);
          transform: translateX(10px);
          box-shadow: 0 4px 20px rgba(0, 212, 255, 0.3);
        }
        
        /* Social Links */
        .mobile-social-links {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin: 1rem 0;
          padding: 1rem 0;
          border-top: 1px solid rgba(0, 212, 255, 0.2);
          border-bottom: 1px solid rgba(0, 212, 255, 0.2);
        }
        
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: rgba(0, 212, 255, 0.1);
          border: 2px solid rgba(0, 212, 255, 0.3);
          border-radius: 50%;
          color: #00D4FF;
          font-size: 1.5rem;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        
        .social-link:hover {
          background: rgba(0, 212, 255, 0.2);
          border-color: #00D4FF;
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 4px 20px rgba(0, 212, 255, 0.5);
        }
        
        /* Mobile Brochure Button */
        .mobile-brochure-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem 1.5rem;
          background: linear-gradient(135deg, #28a745, #20c997);
          border-radius: 12px;
          color: #ffffff;
          text-decoration: none;
          font-weight: 700;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
        }
        
        .mobile-brochure-btn i {
          font-size: 1.3rem;
        }
        
        .mobile-brochure-btn:hover {
          background: linear-gradient(135deg, #20c997, #28a745);
          transform: translateY(-3px);
          box-shadow: 0 6px 25px rgba(40, 167, 69, 0.5);
        }
        
        /* Responsive Breakpoints */
        @media (max-width: 968px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-brochure {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .mobile-nav-overlay {
            display: block !important;
          }
        }
        
        @media (max-width: 768px) {
          header {
            padding: 1rem 1.5rem !important;
          }
          
          header img {
            height: 50px !important;
          }
          
          header span {
            font-size: 1.1rem !important;
          }
          
          .mobile-menu-btn {
            width: 38px !important;
            height: 38px !important;
          }
          
          .hamburger-line {
            width: 26px !important;
            left: 6px !important;
          }
          
          .mobile-nav-item {
            padding: 0.85rem 1.25rem !important;
            font-size: 1rem !important;
          }
          
          .mobile-nav-item i {
            font-size: 1.2rem !important;
          }
          
          .social-link {
            width: 45px !important;
            height: 45px !important;
            font-size: 1.3rem !important;
          }
          
          .mobile-brochure-btn {
            padding: 0.85rem 1.25rem !important;
            font-size: 1rem !important;
          }
        }
        
        @media (max-width: 576px) {
          header {
            padding: 0.85rem 1rem !important;
          }
          
          header img {
            height: 45px !important;
            margin-right: 0.75rem !important;
          }
          
          header span {
            font-size: 1rem !important;
            letter-spacing: 0.5px !important;
          }
          
          .mobile-menu-btn {
            width: 36px !important;
            height: 36px !important;
          }
          
          .hamburger-line {
            width: 24px !important;
            height: 2.5px !important;
            left: 6px !important;
          }
          
          .hamburger-line:nth-child(1) {
            top: 9px !important;
          }
          
          .hamburger-line:nth-child(2) {
            top: 16.5px !important;
          }
          
          .hamburger-line:nth-child(3) {
            top: 24px !important;
          }
          
          .mobile-menu-btn.active .hamburger-line:nth-child(1),
          .mobile-menu-btn.active .hamburger-line:nth-child(3) {
            top: 16.5px !important;
          }
          
          .mobile-nav {
            padding: 1.5rem !important;
          }
          
          .mobile-nav-content {
            gap: 0.85rem !important;
          }
          
          .mobile-nav-item {
            padding: 0.75rem 1rem !important;
            font-size: 0.95rem !important;
          }
          
          .mobile-nav-item i {
            font-size: 1.1rem !important;
          }
          
          .social-link {
            width: 42px !important;
            height: 42px !important;
            font-size: 1.2rem !important;
          }
          
          .mobile-brochure-btn {
            padding: 0.75rem 1rem !important;
            font-size: 0.95rem !important;
          }
          
          .mobile-brochure-btn i {
            font-size: 1.2rem !important;
          }
        }
        
        @media (max-width: 400px) {
          header {
            padding: 0.75rem 0.75rem !important;
          }
          
          header img {
            height: 40px !important;
            margin-right: 0.5rem !important;
          }
          
          header span {
            font-size: 0.9rem !important;
          }
          
          .mobile-menu-btn {
            width: 34px !important;
            height: 34px !important;
          }
          
          .hamburger-line {
            width: 22px !important;
            height: 2px !important;
            left: 6px !important;
          }
          
          .hamburger-line:nth-child(1) {
            top: 8px !important;
          }
          
          .hamburger-line:nth-child(2) {
            top: 15px !important;
          }
          
          .hamburger-line:nth-child(3) {
            top: 22px !important;
          }
          
          .mobile-menu-btn.active .hamburger-line:nth-child(1),
          .mobile-menu-btn.active .hamburger-line:nth-child(3) {
            top: 15px !important;
          }
          
          .mobile-nav {
            padding: 1rem !important;
          }
          
          .mobile-nav-content {
            gap: 0.75rem !important;
          }
          
          .mobile-nav-item {
            padding: 0.65rem 0.85rem !important;
            font-size: 0.9rem !important;
          }
          
          .mobile-nav-item i {
            font-size: 1rem !important;
          }
          
          .social-link {
            width: 40px !important;
            height: 40px !important;
            font-size: 1.1rem !important;
          }
          
          .mobile-brochure-btn {
            padding: 0.65rem 0.85rem !important;
            font-size: 0.9rem !important;
          }
          
          .mobile-brochure-btn i {
            font-size: 1.1rem !important;
          }
        }
      `}</style>
      </header>
    </>
  );
};

export default Header;