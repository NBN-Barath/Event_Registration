import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import './Feedback.css';

const Feedback: React.FC = () => {
  const { state } = useApp();
  const [feedbackData, setFeedbackData] = useState({
    name: '',
    email: '',
    event: '',
    rating: 5,
    category: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a server
    console.log('Feedback submitted:', feedbackData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFeedbackData({
        name: '',
        email: '',
        event: '',
        rating: 5,
        category: 'general',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFeedbackData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!state.feedbackEnabled) {
    return (
      <div className="feedback-container">
        <div className="feedback-disabled">
          <div className="disabled-icon">🔒</div>
          <h2>Feedback Currently Unavailable</h2>
          <p>Feedback collection is currently disabled by the administrator.</p>
          <p>Please check back later or contact support for assistance.</p>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="feedback-container">
        <div className="feedback-success">
          <div className="success-icon">✅</div>
          <h2>Thank You!</h2>
          <p>Your feedback has been submitted successfully.</p>
          <p>We appreciate your valuable input!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="feedback-container">
      <div className="feedback-header">
        <h1>Feedback</h1>
        <p>Share your experience and help us improve TechBlast</p>
      </div>

      <div className="feedback-content">
        <div className="feedback-form-container">
          <form className="feedback-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={feedbackData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={feedbackData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Event (Optional):</label>
                <select
                  name="event"
                  value={feedbackData.event}
                  onChange={handleChange}
                >
                  <option value="">Select an event</option>
                  {state.events.map(event => (
                    <option key={event.id} value={event.name}>
                      {event.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Category:</label>
                <select
                  name="category"
                  value={feedbackData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="general">General</option>
                  <option value="organization">Organization</option>
                  <option value="technical">Technical</option>
                  <option value="venue">Venue</option>
                  <option value="transport">Transport</option>
                  <option value="food">Food & Refreshments</option>
                  <option value="support">Customer Support</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Overall Rating:</label>
              <div className="rating-container">
                <div className="rating-stars">
                  {[1, 2, 3, 4, 5].map(star => (
                    <span
                      key={star}
                      className={`star ${star <= feedbackData.rating ? 'active' : ''}`}
                      onClick={() => setFeedbackData(prev => ({ ...prev, rating: star }))}
                    >
                      ⭐
                    </span>
                  ))}
                </div>
                <span className="rating-text">
                  {feedbackData.rating === 1 && 'Poor'}
                  {feedbackData.rating === 2 && 'Fair'}
                  {feedbackData.rating === 3 && 'Good'}
                  {feedbackData.rating === 4 && 'Very Good'}
                  {feedbackData.rating === 5 && 'Excellent'}
                </span>
              </div>
            </div>

            <div className="form-group">
              <label>Your Feedback:</label>
              <textarea
                name="message"
                value={feedbackData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Please share your thoughts, suggestions, or any issues you experienced..."
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Submit Feedback
            </button>
          </form>
        </div>

        <div className="feedback-info">
          <div className="info-card">
            <h3>🎯 Help Us Improve</h3>
            <p>Your feedback is invaluable in helping us create better events and experiences for future participants.</p>
          </div>

          <div className="info-card">
            <h3>📊 What We Track</h3>
            <ul>
              <li>Event organization quality</li>
              <li>Technical infrastructure</li>
              <li>Venue facilities</li>
              <li>Transportation services</li>
              <li>Customer support experience</li>
              <li>Overall satisfaction</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>🔒 Privacy</h3>
            <p>Your feedback will be used solely for improving our services. Personal information will be kept confidential.</p>
          </div>

          <div className="info-card">
            <h3>📞 Need Help?</h3>
            <p>If you're experiencing issues submitting feedback, please contact our support team.</p>
            <p><strong>Email:</strong> support@techblast.edu</p>
            <p><strong>Phone:</strong> +91 123 456 7890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
