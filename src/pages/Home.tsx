import React from 'react';
import { useApp } from '../context/AppContext';
import './Home.css';

const Home: React.FC = () => {
  const { state } = useApp();

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="logo-container">
          <img 
            src="/assets/techblastlogo.png" 
            alt="TechBlast Logo" 
            className="main-logo"
            onError={(e) => {
              // Fallback if image doesn't exist
              (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNjY3ZWVhIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxPR088L3RleHQ+PC9zdmc+';
            }}
          />
        </div>
        <h1 className="main-title">TechBlast</h1>
        <p className="subtitle">A National Level Inter Collegiate Technical Meet</p>
      </div>

      <div className="sponsors-section">
        <h2 className="section-title">Our Sponsors</h2>
        <div className="sponsors-container">
          <div className="sponsors-carousel">
            {state.sponsors.length > 0 ? (
              state.sponsors.map((sponsor, index) => (
                <div key={sponsor.id} className="sponsor-item" style={{
                  animationDelay: `${index * 0.5}s`
                }}>
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlNwb25zb3I8L3RleHQ+PC9zdmc+';
                    }}
                  />
                </div>
              ))
            ) : (
              // Default sponsors placeholder
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="sponsor-item" style={{
                  animationDelay: `${index * 0.5}s`
                }}>
                  <div className="sponsor-placeholder">
                    Sponsor {index + 1}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="about-section">
        <h2 className="section-title">About Us</h2>
        <div className="about-content">
          <p>
            TechBlast is a premier national-level inter-collegiate technical meet that brings together 
            the brightest minds from colleges across the country. Our event showcases cutting-edge 
            technology, innovation, and creativity through various competitions, workshops, and 
            interactive sessions.
          </p>
          <p>
            Join us for an exciting journey of learning, networking, and competition as we celebrate 
            the spirit of technology and innovation. Whether you're a solo participant or part of a 
            team, TechBlast offers something for everyone.
          </p>
          <div className="stats">
            <div className="stat-item">
              <h3>{state.events.length}</h3>
              <p>Events</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Participants</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Colleges</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
