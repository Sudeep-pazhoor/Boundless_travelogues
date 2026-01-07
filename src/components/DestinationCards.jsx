import { useState } from 'react';
import './DestinationCards.css';

const DestinationCards = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const destinations = [
    {
      id: 1,
      title: "One Day Destinations",
      routes: [
        "Vagamon - Parunthumpara",
        "Athirappally - Vazhachal - Silverstorm",
        "Wonderla - Lulu Mall",
        "Fort Kochi - Mattancherry - Water Metro - Marine Drive",
        "Kanyakumari",
        "Magic Planet",
        "Munnar",
        "Mango Medows",
        "Thenmala - Palaruvi"
      ]
    },
    {
      id: 2,
      title: "Two Days Destinations",
      routes: [
        "Wayanad - Ooty",
        "Marayoor - Munnar",
        "Kodaikanal - Marayoor",
        "Mysore - Ooty",
        "Mysore - Coorg",
        "Wayanad - Coorg",
        "Ooty - Black Thunder"
      ]
    },
    {
      id: 3,
      title: "Three Days Destinations",
      routes: [
        "Waynad - Mysore - Coorg",
        "Mysore - Chikkamagaluru - Coorg",
        "Coorg - Chikkamagaluru - Bellur",
        "Mysore - Chikkamagaluru - Bellur",
        "Wayanad - Mysore - Ooty",
        "Coorg - Mysore - Ooty",
        "Coorg - Mysore - Banglore"
      ]
    },
    {
      id: 4,
      title: "Four Days Destinations",
      routes: [
        "Mysore - Chikkamagaluru - Bellur - Udupi",
        "Coorg - Chikkamagaluru - Mysore - Ooty",
        "Coorg - Bellur - Chikkamagaluru - Udupi",
        "Wayanad - Mysore - Chikkamagaluru - Bellur",
        "Wayanad - Coorg - Chikkamagaluru - Bellur",
        "Coorg - Chikkamagaluru - Dandeli - Udupi",
        "Malpe - Goa - Goa - Murdeswar / Gokarna"
      ]
    },
    {
      id: 5,
      title: "Five Days Destinations",
      routes: [
        "Coorg - Chikkamagaluru - Shimoga - Dandeli - Malpe",
        "Coorg - Chikkamagaluru - Goa - Goa - Malpe",
        "Malpe - Dandeli - Goa - Gog - Chikkamagaluru",
        "Wayanad - Coorg - Chikkamagaluru - Bellur - Banglore",
        "Waynad - Coorg - Bellur - Chikkamagaluru - Malpe",
        "Coorg - Mysore - Hyderabad - Hyderabad - Banglore"
      ]
    },
    {
      id: 6,
      title: "Six Days Destinations",
      routes: [
        "Coorg - Chikkamagaluru - Dandeli - Goa - Goa - Malpe",
        "Coorg - Mysore - Hyderabad - Hyderabad - Hyderabad - Banglore",
        "Wayanad - Coorg - Chikkamagaluru - Bellur - Mysore - Banglore"
      ]
    }
  ];

  const handleCardClick = (id) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <div className="destination-section">
      <h2 className="destination-heading">Package Destinations</h2>
      <div className="marquee-container">
        <div className="marquee-content">
          {/* Duplicate cards for seamless loop */}
          {[...destinations, ...destinations].map((dest, index) => (
            <div
              key={`${dest.id}-${index}`}
              className={`destination-card ${flippedCard === dest.id ? 'flipped' : ''}`}
              onClick={() => handleCardClick(dest.id)}
            >
              <div className="card-inner">
                <div className={`card-front ${dest.id === 1 ? 'one-day-card' : ''} ${dest.id === 2 ? 'two-days-card' : ''} ${dest.id === 3 ? 'three-days-card' : ''} ${dest.id === 4 ? 'four-days-card' : ''} ${dest.id === 5 ? 'five-days-card' : ''} ${dest.id === 6 ? 'six-days-card' : ''}`}>
                  <h3>{dest.title}</h3>
                  <p className="click-hint">Click to view routes</p>
                </div>
                <div className="card-back">
                  <h3>{dest.title}</h3>
                  <ul className="routes-list">
                    {dest.routes.map((route, idx) => (
                      <li key={idx}>{route}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationCards;
