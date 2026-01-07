import React from 'react';

const CommitmentsSection = () => {
  const stats = [
    {
      number: '150+',
      title: 'Trips',
      description: 'Successful journeys across destinations',
      gradient: 'linear-gradient(135deg, #ff6b35, #f7931e)',
      glowColor: 'rgba(255, 107, 53, 0.4)'
    },
    {
      number: '30+',
      title: 'Colleges',
      description: 'Educational institutions partnered',
      gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
      glowColor: 'rgba(79, 172, 254, 0.4)'
    },
    {
      number: '40+',
      title: 'Schools',
      description: 'School trips organized',
      gradient: 'linear-gradient(135deg, #a855f7, #ec4899)',
      glowColor: 'rgba(168, 85, 247, 0.4)'
    },
    {
      number: '20+',
      title: 'Families',
      description: 'Happy families traveled with us',
      gradient: 'linear-gradient(135deg, #10b981, #14b8a6)',
      glowColor: 'rgba(16, 185, 129, 0.4)'
    }
  ];

  return (
    <section style={{ padding: '4rem 2rem', background: 'transparent' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '1rem',
          fontSize: '3rem',
          fontWeight: '800',
          background: 'linear-gradient(to right, #ffffff, #00D4FF)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 0 10px rgba(0, 212, 255, 0.3))'
        }}>
          Our Commitments
        </h2>
        <p style={{
          textAlign: 'center',
          color: '#b0b0b0',
          fontSize: '1.2rem',
          marginBottom: '4rem',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Numbers that reflect our dedication to crafting extraordinary travel experiences across India and beyond.
        </p>

        <div className="stats-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem',
          padding: '1rem',
          marginBottom: '3rem'
        }}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card"
              style={{
                background: 'rgba(13, 13, 13, 0.8)',
                borderRadius: '20px',
                padding: '2rem 1rem',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                border: '2px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.4s ease',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '220px'
              }}
            >
              {/* Decorative dot */}
              <div style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: stat.gradient,
                boxShadow: `0 0 15px ${stat.glowColor}`
              }}></div>

              {/* Number */}
              <div style={{
                fontSize: '3.5rem',
                fontWeight: 'bold',
                background: stat.gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0.5rem',
                lineHeight: '1',
                textShadow: `0 0 30px ${stat.glowColor}`
              }}>
                {stat.number}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: '0.5rem',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
              }}>
                {stat.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '0.9rem',
                color: '#b0b0b0',
                lineHeight: '1.4',
                margin: 0,
                maxWidth: '90%'
              }}>
                {stat.description}
              </p>

              {/* Bottom decorative dot */}
              <div style={{
                position: 'absolute',
                bottom: '15px',
                left: '15px',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: stat.gradient,
                opacity: 0.6
              }}></div>
            </div>
          ))}
        </div>

        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center',
          color: '#e0e0e0',
          fontSize: '1.1rem',
          lineHeight: '1.8',
          padding: '2rem',
          background: 'rgba(255, 255, 255, 0.03)',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(5px)'
        }}>
          <p style={{ margin: 0 }}>
            We are committed to providing exceptional travel experiences that exceed expectations. Every journey with Boundless Travelogues is carefully planned with attention to detail, ensuring your safety, comfort, and satisfaction. From the moment you contact us until you return home with cherished memories, we're with you every step of the way.
          </p>
        </div>
      </div>

      <style>{`
        .stat-card:hover {
          transform: translateY(-10px);
          border-color: rgba(0, 212, 255, 0.3);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
        }
        
        @media (max-width: 1024px) {
          section {
            padding: 3rem 1.5rem !important;
          }
          
          h2 {
            font-size: 2.5rem !important;
          }
          
          .stats-grid {
            gap: 1.25rem !important;
          }
        }
        
        @media (max-width: 992px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          section {
            padding: 2.5rem 1rem !important;
          }
          
          h2 {
            font-size: 2rem !important;
            margin-bottom: 0.75rem !important;
          }
          
          section p {
            font-size: 1rem !important;
            margin-bottom: 3rem !important;
          }
          
          .stats-grid {
            gap: 1rem !important;
            padding: 0.5rem !important;
          }
          
          .stat-card {
            min-height: 200px !important;
            padding: 1.75rem 1rem !important;
          }
          
          .stat-card > div:first-of-type {
            font-size: 3rem !important;
          }
          
          .stat-card h3 {
            font-size: 1.2rem !important;
          }
          
          .stat-card p {
            font-size: 0.85rem !important;
          }
          
          section > div > div:last-child {
            padding: 1.5rem !important;
            font-size: 1rem !important;
          }
        }

        @media (max-width: 576px) {
          section {
            padding: 2rem 0.75rem !important;
          }
          
          h2 {
            font-size: 1.75rem !important;
          }
          
          section > div > p {
            font-size: 0.95rem !important;
            margin-bottom: 2.5rem !important;
          }
          
          .stats-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
            padding: 0 !important;
          }
          
          .stat-card {
            padding: 1.5rem 1rem !important;
            min-height: 180px !important;
          }
          
          .stat-card > div:first-of-type {
            font-size: 2.75rem !important;
          }
          
          .stat-card h3 {
            font-size: 1.15rem !important;
          }
          
          .stat-card p {
            font-size: 0.8rem !important;
          }
          
          section > div > div:last-child {
            padding: 1.25rem !important;
            font-size: 0.95rem !important;
            line-height: 1.6 !important;
          }
        }
        
        @media (max-width: 400px) {
          h2 {
            font-size: 1.5rem !important;
          }
          
          section > div > p {
            font-size: 0.9rem !important;
          }
          
          .stat-card {
            padding: 1.25rem 0.85rem !important;
            min-height: 160px !important;
          }
          
          .stat-card > div:first-of-type {
            font-size: 2.5rem !important;
          }
          
          .stat-card h3 {
            font-size: 1.05rem !important;
          }
          
          .stat-card p {
            font-size: 0.75rem !important;
          }
          
          section > div > div:last-child {
            padding: 1rem !important;
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CommitmentsSection;
