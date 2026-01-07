import React, { useState } from 'react';

const InstructionsModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  const tripInstructions = [
    "THE TRIP PLAN AND SCHEDULE SHOULD BE FIXED BEFORE THE TRIP. NO FURTHER CHANGES ARE ALLOWED AND WILL NOT BE ACCEPTED.",
    "THE STUDENTS SHOULD STRICTLY FOLLOW THE INSTRUCTIONS AND GUIDELINES PROVIDED BY THE TOUR PLANNER AND CO-ORDINATOR.",
    "WE ARE NOT RESPONSIBLE FOR ANY TYPE OF ISSUES RELATED TO THE NEGLIGENCE OR VIOLATION OF SAID INSTRUCTIONS.",
    "STUDENTS SHOULD CARRY AN ID CARD OR ANY OTHER VALID PROOF.",
    "THOSE WHO ARE UNDER ANY TREATMENTS OR SUFFERING FROM ANY HEALTH PROBLEMS SHOULD INFORM US EARLY AND SHOULD TRAVEL ONLY WITH PRIOR CONCERNS.",
    "DUE TO UNPREDICTABLE REASONS (NATURAL CALAMITIES, POLITICAL ISSUES, ETC.), THE TRIP SCHEDULE CAN HAVE SUDDEN CHANGES AND WE WILL NOTIFY YOU OF THE SAME.",
    "CHANGES OF ANY TICKET RATES, TAXES OR HOTEL RATES SUDDENLY WILL BE NOTIFIED WITH GENUINE PROOF.",
    "IF ANY STUDENT IS ON ANY MEDICATION, THEY SHOULD BRING THEIR MEDICINES ALONG WITH THEM.",
    "THE STUDENTS CAN INFORM THE CO-ORDINATOR/PACKAGER OF ANY NEEDS AND HELP DURING THE ENTIRE TRIP. FEEL FREE TO EXPRESS DISCOMFORT OR ISSUES."
  ];

  const paymentInstructions = [
    "THE AGREEMENT SHOULD BE DONE AS SOON AS POSSIBLE TO AVOID CLASHES.",
    "THE PREFIXED AMOUNT SHOULD BE PAID ON THE DATE OF THE AGREEMENT AND THE REMAINING WOULD BE PAID DURING THE DAYS OF THE TRIP.",
    "THE TOTAL AMOUNT OF THE TRIP IS BASED UPON THE NUMBER OF STUDENTS.",
    "A SHORTAGE OF STUDENTS OR AN INCREASE IN THE NUMBER OF STUDENTS WILL AFFECT THE TOTAL RATE.",
    "IF THERE ARE ANY SUGGESTIONS FOR TRAVEL, THE PACKAGER SHOULD BE INFORMED PRIOR TO THE TRIP.",
    "THE BUS WILL BE BOOKED ONLY AFTER THE AGREEMENT.",
    "ALL THE DETAILS OF THE TRIP AND ITINERARY SHOULD BE VERIFIED AND THE AGREEMENT SHOULD BE DONE IN THE PRESENCE OF AUTHORITIES.",
    "AFTER THE AGREEMENT, NO CHANGES IN RATES OR SCHEDULES ARE ENTERTAINED."
  ];

  return (
    <>
      <button onClick={toggleModal} className="instructions-btn" style={{ backgroundColor: '#00BFFF', color: '#fff', border: 'none', padding: '0.5rem 1rem', margin: '1rem 0', cursor: 'pointer', borderRadius: '6px', fontWeight: '600', transition: 'all 0.3s ease' }}>
        Important Instructions
      </button>
      {isOpen && (
        <div className="modal-overlay" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div className="modal-content" style={{ backgroundColor: '#0a0f19', color: '#e8eaed', padding: '2rem', maxWidth: '600px', width: '100%', borderRadius: '12px', maxHeight: '80vh', overflowY: 'auto', border: '1px solid rgba(0, 212, 255, 0.3)', boxShadow: '0 8px 32px rgba(0, 212, 255, 0.2)' }}>
            <h2 style={{ color: '#00D4FF', marginBottom: '1rem', textShadow: '0 0 10px rgba(0, 212, 255, 0.3)' }}>Trip Guidelines</h2>
            <ul style={{ color: '#e8eaed' }}>{tripInstructions.map((item, idx) => <li key={idx} style={{ marginBottom: '0.75rem', lineHeight: '1.6' }}>{item}</li>)}</ul>
            <h2 style={{ color: '#00D4FF', marginTop: '1.5rem', marginBottom: '1rem', textShadow: '0 0 10px rgba(0, 212, 255, 0.3)' }}>Payment & Agreement</h2>
            <ul style={{ color: '#e8eaed' }}>{paymentInstructions.map((item, idx) => <li key={idx} style={{ marginBottom: '0.75rem', lineHeight: '1.6' }}>{item}</li>)}</ul>
            <button onClick={toggleModal} className="modal-close-btn" style={{ backgroundColor: '#00D4FF', color: '#0a0f19', border: 'none', padding: '0.75rem 1.5rem', cursor: 'pointer', borderRadius: '6px', fontWeight: 'bold', marginTop: '1rem', transition: 'all 0.3s ease', width: '100%' }} onMouseEnter={(e) => { e.target.style.backgroundColor = '#FFB800'; e.target.style.transform = 'scale(1.05)'; }} onMouseLeave={(e) => { e.target.style.backgroundColor = '#00D4FF'; e.target.style.transform = 'scale(1)'; }}>Close</button>
          </div>
        </div>
      )}
      <style>{`
        .instructions-btn:hover {
          background-color: #0099cc !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 191, 255, 0.4);
        }
        
        @media (max-width: 768px) {
          .modal-content {
            padding: 1.5rem !important;
            max-height: 85vh !important;
          }
          
          .modal-content h2 {
            font-size: 1.5rem !important;
          }
          
          .modal-content ul li {
            font-size: 0.9rem !important;
            margin-bottom: 0.65rem !important;
          }
          
          .modal-close-btn {
            padding: 0.65rem 1.25rem !important;
            font-size: 0.95rem !important;
          }
        }
        
        @media (max-width: 576px) {
          .modal-overlay {
            padding: 0.75rem !important;
          }
          
          .modal-content {
            padding: 1.25rem !important;
            max-height: 90vh !important;
          }
          
          .modal-content h2 {
            font-size: 1.35rem !important;
            margin-bottom: 0.85rem !important;
          }
          
          .modal-content ul {
            padding-left: 1.25rem !important;
          }
          
          .modal-content ul li {
            font-size: 0.85rem !important;
            margin-bottom: 0.6rem !important;
            line-height: 1.5 !important;
          }
          
          .modal-close-btn {
            padding: 0.6rem 1rem !important;
            font-size: 0.9rem !important;
          }
          
          .instructions-btn {
            padding: 0.45rem 0.85rem !important;
            font-size: 0.9rem !important;
          }
        }
        
        @media (max-width: 400px) {
          .modal-content {
            padding: 1rem !important;
          }
          
          .modal-content h2 {
            font-size: 1.2rem !important;
          }
          
          .modal-content ul li {
            font-size: 0.8rem !important;
          }
          
          .instructions-btn {
            padding: 0.4rem 0.75rem !important;
            font-size: 0.85rem !important;
          }
        }
      `}</style>
    </>
  );
};

export { InstructionsModal };