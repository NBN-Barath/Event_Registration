import React from 'react';
import './TransportDetails.css';

const TransportDetails: React.FC = () => {
  return (
    <div className="transport-container">
      <div className="transport-header">
        <h1>Transport Details</h1>
        <p>Easy transportation options to reach TechBlast venue</p>
      </div>

      <div className="transport-content">
        <div className="venue-info">
          <div className="venue-card">
            <h2>📍 Venue Location</h2>
            <div className="venue-details">
              <h3>Main Auditorium</h3>
              <p>Department of Computer Science</p>
              <p>ABC Engineering College</p>
              <p>College Road, Tech City - 123456</p>
              <p>State, India</p>
            </div>
            <button className="map-btn">View on Google Maps</button>
          </div>
        </div>

        <div className="transport-options">
          <h2>Transportation Options</h2>
          
          <div className="transport-grid">
            <div className="transport-card">
              <div className="transport-icon">🚌</div>
              <h3>College Bus Service</h3>
              <div className="transport-details">
                <p><strong>Routes Available:</strong></p>
                <ul>
                  <li>City Center - College (Route A)</li>
                  <li>Railway Station - College (Route B)</li>
                  <li>Airport - College (Route C)</li>
                </ul>
                <p><strong>Timing:</strong> Every 30 minutes from 7:00 AM to 10:00 PM</p>
                <p><strong>Fare:</strong> ₹20 per trip</p>
              </div>
              <button className="book-btn">Book Bus Ticket</button>
            </div>

            <div className="transport-card">
              <div className="transport-icon">🚕</div>
              <h3>Taxi / Cab Services</h3>
              <div className="transport-details">
                <p><strong>Recommended Services:</strong></p>
                <ul>
                  <li>Ola / Uber (App-based)</li>
                  <li>Local Taxi Services</li>
                  <li>Auto Rickshaws</li>
                </ul>
                <p><strong>Estimated Fare:</strong></p>
                <ul>
                  <li>From City Center: ₹150-200</li>
                  <li>From Railway Station: ₹100-150</li>
                  <li>From Airport: ₹300-400</li>
                </ul>
              </div>
            </div>

            <div className="transport-card">
              <div className="transport-icon">🚂</div>
              <h3>Public Transport</h3>
              <div className="transport-details">
                <p><strong>Nearest Railway Station:</strong></p>
                <p>Tech City Railway Station (5 km)</p>
                
                <p><strong>Nearest Metro Station:</strong></p>
                <p>College Road Metro Station (2 km)</p>
                
                <p><strong>Local Buses:</strong></p>
                <ul>
                  <li>Route 45: City Center - College</li>
                  <li>Route 23: Railway Station - College</li>
                </ul>
                <p><strong>Fare:</strong> ₹10-15 per trip</p>
              </div>
            </div>

            <div className="transport-card">
              <div className="transport-icon">🚗</div>
              <h3>Private Vehicle</h3>
              <div className="transport-details">
                <p><strong>Parking Available:</strong></p>
                <ul>
                  <li>Two-Wheeler Parking: Free</li>
                  <li>Four-Wheeler Parking: ₹50 per day</li>
                </ul>
                
                <p><strong>Directions:</strong></p>
                <p>Take Highway 101, exit at College Road Junction, proceed 2km straight to reach the main gate.</p>
                
                <p><strong>Landmarks:</strong></p>
                <ul>
                  <li>Tech City Mall (1 km before college)</li>
                  <li>City Hospital (opposite to college)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="accommodation-info">
          <h2>🏨 Nearby Accommodation</h2>
          <div className="accommodation-grid">
            <div className="hotel-card">
              <h4>Tech City Hotel</h4>
              <p>⭐⭐⭐⭐ | 1.5 km from venue</p>
              <p>₹2,500 per night</p>
              <p>📞 +91 123 456 7891</p>
            </div>
            
            <div className="hotel-card">
              <h4>Student Guest House</h4>
              <p>⭐⭐⭐ | 0.8 km from venue</p>
              <p>₹1,200 per night</p>
              <p>📞 +91 123 456 7892</p>
            </div>
            
            <div className="hotel-card">
              <h4>Budget Inn</h4>
              <p>⭐⭐ | 2 km from venue</p>
              <p>₹800 per night</p>
              <p>📞 +91 123 456 7893</p>
            </div>
          </div>
        </div>

        <div className="contact-transport">
          <h2>Need Transport Assistance?</h2>
          <div className="contact-info">
            <div className="contact-item">
              <span>📞</span>
              <div>
                <p><strong>Transport Helpline:</strong></p>
                <p>+91 123 456 7800</p>
              </div>
            </div>
            
            <div className="contact-item">
              <span>📧</span>
              <div>
                <p><strong>Email:</strong></p>
                <p>transport@techblast.edu</p>
              </div>
            </div>
            
            <div className="contact-item">
              <span>🕒</span>
              <div>
                <p><strong>Available:</strong></p>
                <p>24/7 during event days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportDetails;
