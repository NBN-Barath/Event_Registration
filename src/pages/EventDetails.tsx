import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import './EventDetails.css';

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { state } = useApp();
  
  const event = state.events.find(e => e.id === id);

  if (!event) {
    return <Navigate to="/events" replace />;
  }

  return (
    <div className="event-details-container">
      <div className="event-details-content">
        <div className="event-details-left">
          <div className="event-logo-large">
            <img 
              src={event.logo} 
              alt={event.name}
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNjY3ZWVhIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkV2ZW50PC90ZXh0Pjwvc3ZnPg==';
              }}
            />
          </div>
        </div>

        <div className="event-details-right">
          <div className="event-header">
            <h1>{event.name}</h1>
            <div className="event-type-large">
              <span className={`type-badge-large ${event.type.toLowerCase()}`}>
                {event.type} Event
              </span>
            </div>
          </div>

          <div className="event-basic-info">
            <div className="info-item">
              <h3>📅 Date & Time</h3>
              <p>{event.date} at {event.time}</p>
            </div>
            
            <div className="info-item">
              <h3>📍 Venue</h3>
              <p>{event.venue}</p>
            </div>
          </div>

          <div className="event-description">
            <h3>Description</h3>
            <p>{event.description}</p>
          </div>

          <div className="event-rules">
            <h3>Rules & Regulations</h3>
            <div className="rules-content">
              {event.rules.split('\n').map((rule, index) => (
                <p key={index}>{rule}</p>
              ))}
            </div>
          </div>

          {event.judges.length > 0 && (
            <div className="judges-section">
              <h3>Judges</h3>
              <div className="judges-grid">
                {event.judges.map((judge, index) => (
                  <div key={index} className="judge-card">
                    <h4>{judge.name}</h4>
                    <p>{judge.qualification}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {event.coordinators.length > 0 && (
            <div className="coordinators-section">
              <h3>Student Coordinators</h3>
              <div className="coordinators-grid">
                {event.coordinators.map((coordinator, index) => (
                  <div key={index} className="coordinator-card">
                    <h4>{coordinator.name}</h4>
                    <p className="coordinator-class">{coordinator.class}</p>
                    <p className="coordinator-phone">📞 {coordinator.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="event-actions">
            <button className="register-btn">
              Register Now
            </button>
            <button className="back-btn" onClick={() => window.history.back()}>
              Back to Events
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
