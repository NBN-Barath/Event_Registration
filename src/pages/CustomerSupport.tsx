import React from 'react';
import './CustomerSupport.css';

const CustomerSupport: React.FC = () => {
  return (
    <div className="support-container">
      <div className="support-header">
        <h1>Customer Support</h1>
        <p>We're here to help! Get in touch with us for any assistance.</p>
      </div>

      <div className="support-content">
        <div className="contact-methods">
          <div className="contact-card">
            <div className="contact-icon">📞</div>
            <h3>Phone Support</h3>
            <p>Call us directly for immediate assistance</p>
            <a href="tel:+911234567890" className="contact-link">+91 123 456 7890</a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📧</div>
            <h3>Email Support</h3>
            <p>Send us your queries via email</p>
            <a href="mailto:support@techblast.edu" className="contact-link">support@techblast.edu</a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">💬</div>
            <h3>Live Chat</h3>
            <p>Chat with our support team online</p>
            <button className="chat-btn">Start Chat</button>
          </div>
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h4>How do I register for events?</h4>
              <p>You can register for events by visiting the Events page and clicking on "View More" for your desired event, then clicking "Register Now".</p>
            </div>
            
            <div className="faq-item">
              <h4>Can I participate in multiple events?</h4>
              <p>Yes, you can participate in multiple events. However, please check the event timings to avoid conflicts.</p>
            </div>
            
            <div className="faq-item">
              <h4>Is there an entry fee for events?</h4>
              <p>Entry fees vary by event. Please check individual event details for specific pricing information.</p>
            </div>
            
            <div className="faq-item">
              <h4>What should I bring to the event?</h4>
              <p>Please bring a valid college ID, registration confirmation, and any specific items mentioned in the event rules.</p>
            </div>
            
            <div className="faq-item">
              <h4>How can I get updates about the event?</h4>
              <p>Follow our official social media channels and check your registered email for important updates.</p>
            </div>
          </div>
        </div>

        <div className="support-form">
          <h2>Send us a Message</h2>
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Name:</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" required />
              </div>
            </div>
            
            <div className="form-group">
              <label>Subject:</label>
              <input type="text" required />
            </div>
            
            <div className="form-group">
              <label>Message:</label>
              <textarea rows={6} required></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
