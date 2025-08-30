import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import './Events.css';

const Events: React.FC = () => {
  const { state } = useApp();

  return (
    <div className="events-container">
      <div className="events-header">
        <h1>Events</h1>
        <p>Explore our exciting range of technical competitions and workshops</p>
      </div>

      <div className="events-grid">
        {state.events.length > 0 ? (
          state.events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-logo">
                <img 
                  src={event.logo} 
                  alt={event.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNjY3ZWVhIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkV2ZW50PC90ZXh0Pjwvc3ZnPg==';
                  }}
                />
              </div>
              <div className="event-info">
                <h3>{event.name}</h3>
                <div className="event-type">
                  <span className={`type-badge ${event.type.toLowerCase()}`}>
                    {event.type} Event
                  </span>
                </div>
                <p className="event-description">{event.description.substring(0, 100)}...</p>
                <Link to={`/events/${event.id}`} className="view-more-btn">
                  View More
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="no-events">
            <h3>No events available</h3>
            <p>Events will be added soon. Stay tuned!</p>
          </div>
        )}
      </div>

      {state.events.length === 0 && (
        <div className="sample-events">
          <h2>Coming Soon</h2>
          <div className="events-grid">
            {[
              { name: 'Code Quest', type: 'Solo' },
              { name: 'Robo Wars', type: 'Team' },
              { name: 'Web Wizardry', type: 'Solo' },
              { name: 'AI Challenge', type: 'Team' },
            ].map((event, index) => (
              <div key={index} className="event-card sample">
                <div className="event-logo">
                  <div className="sample-logo">
                    {event.name.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                <div className="event-info">
                  <h3>{event.name}</h3>
                  <div className="event-type">
                    <span className={`type-badge ${event.type.toLowerCase()}`}>
                      {event.type} Event
                    </span>
                  </div>
                  <p className="event-description">
                    Exciting {event.type.toLowerCase()} competition coming soon...
                  </p>
                  <button className="view-more-btn" disabled>
                    Coming Soon
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
