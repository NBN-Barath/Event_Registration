import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Event, Judge, Coordinator } from '../types';
import './Admin.css';

const Admin: React.FC = () => {
  const { state, dispatch } = useApp();
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [newEvent, setNewEvent] = useState<Partial<Event>>({
    name: '',
    logo: '',
    type: 'Solo',
    description: '',
    rules: '',
    date: '',
    time: '',
    venue: '',
    judges: [],
    coordinators: [],
  });
  const [newJudge, setNewJudge] = useState<Judge>({ name: '', qualification: '' });
  const [newCoordinator, setNewCoordinator] = useState<Coordinator>({ name: '', class: '', phone: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple authentication (in real app, this would be server-side)
    if (loginData.username === 'admin' && loginData.password === 'techblast2025') {
      setIsLoggedIn(true);
      dispatch({ type: 'SET_USER', payload: { id: '1', username: 'admin', isAdmin: true } });
    } else {
      alert('Invalid credentials');
    }
  };

  const handleAddJudge = () => {
    if (newJudge.name && newJudge.qualification) {
      setNewEvent(prev => ({
        ...prev,
        judges: [...(prev.judges || []), newJudge]
      }));
      setNewJudge({ name: '', qualification: '' });
    }
  };

  const handleAddCoordinator = () => {
    if (newCoordinator.name && newCoordinator.class && newCoordinator.phone) {
      setNewEvent(prev => ({
        ...prev,
        coordinators: [...(prev.coordinators || []), newCoordinator]
      }));
      setNewCoordinator({ name: '', class: '', phone: '' });
    }
  };

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (newEvent.name && newEvent.description) {
      const event: Event = {
        id: Date.now().toString(),
        name: newEvent.name || '',
        logo: newEvent.logo || '',
        type: newEvent.type as 'Solo' | 'Team',
        description: newEvent.description || '',
        rules: newEvent.rules || '',
        date: newEvent.date || '',
        time: newEvent.time || '',
        venue: newEvent.venue || '',
        judges: newEvent.judges || [],
        coordinators: newEvent.coordinators || [],
        participants: 0,
      };
      
      dispatch({ type: 'ADD_EVENT', payload: event });
      setNewEvent({
        name: '',
        logo: '',
        type: 'Solo',
        description: '',
        rules: '',
        date: '',
        time: '',
        venue: '',
        judges: [],
        coordinators: [],
      });
      setShowAddEvent(false);
      alert('Event added successfully!');
    }
  };

  const toggleFeedback = () => {
    dispatch({ type: 'SET_FEEDBACK_ENABLED', payload: !state.feedbackEnabled });
  };

  const getTotalParticipants = () => {
    return state.events.reduce((total, event) => total + (event.participants || 0), 0);
  };

  if (!isLoggedIn) {
    return (
      <div className="admin-login-container">
        <div className="login-card">
          <h2>Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                value={loginData.username}
                onChange={(e) => setLoginData(prev => ({ ...prev, username: e.target.value }))}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                required
              />
            </div>
            <button type="submit" className="login-btn">Login</button>
          </form>
          <p className="login-hint">Hint: username: admin, password: techblast2025</p>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <button 
          className="logout-btn" 
          onClick={() => {
            setIsLoggedIn(false);
            dispatch({ type: 'SET_USER', payload: null });
          }}
        >
          Logout
        </button>
      </div>

      <div className="admin-stats">
        <div className="stat-card">
          <h3>{state.events.length}</h3>
          <p>Total Events</p>
        </div>
        <div className="stat-card">
          <h3>{getTotalParticipants()}</h3>
          <p>Total Participants</p>
        </div>
        <div className="stat-card">
          <h3>{state.feedbackEnabled ? 'Enabled' : 'Disabled'}</h3>
          <p>Feedback Status</p>
        </div>
      </div>

      <div className="admin-controls">
        <button 
          className="control-btn add-event-btn"
          onClick={() => setShowAddEvent(!showAddEvent)}
        >
          {showAddEvent ? 'Cancel' : 'Add New Event'}
        </button>
        <button 
          className={`control-btn feedback-btn ${state.feedbackEnabled ? 'enabled' : 'disabled'}`}
          onClick={toggleFeedback}
        >
          {state.feedbackEnabled ? 'Disable' : 'Enable'} Feedback
        </button>
      </div>

      {showAddEvent && (
        <div className="add-event-form">
          <h3>Add New Event</h3>
          <form onSubmit={handleAddEvent}>
            <div className="form-row">
              <div className="form-group">
                <label>Event Name:</label>
                <input
                  type="text"
                  value={newEvent.name}
                  onChange={(e) => setNewEvent(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>
              <div className="form-group">
                <label>Event Type:</label>
                <select
                  value={newEvent.type}
                  onChange={(e) => setNewEvent(prev => ({ ...prev, type: e.target.value as 'Solo' | 'Team' }))}
                >
                  <option value="Solo">Solo</option>
                  <option value="Team">Team</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Date:</label>
                <input
                  type="date"
                  value={newEvent.date}
                  onChange={(e) => setNewEvent(prev => ({ ...prev, date: e.target.value }))}
                  required
                />
              </div>
              <div className="form-group">
                <label>Time:</label>
                <input
                  type="time"
                  value={newEvent.time}
                  onChange={(e) => setNewEvent(prev => ({ ...prev, time: e.target.value }))}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Venue:</label>
              <input
                type="text"
                value={newEvent.venue}
                onChange={(e) => setNewEvent(prev => ({ ...prev, venue: e.target.value }))}
                required
              />
            </div>

            <div className="form-group">
              <label>Logo URL:</label>
              <input
                type="url"
                value={newEvent.logo}
                onChange={(e) => setNewEvent(prev => ({ ...prev, logo: e.target.value }))}
                placeholder="https://example.com/logo.png"
              />
            </div>

            <div className="form-group">
              <label>Description:</label>
              <textarea
                value={newEvent.description}
                onChange={(e) => setNewEvent(prev => ({ ...prev, description: e.target.value }))}
                rows={4}
                required
              />
            </div>

            <div className="form-group">
              <label>Rules & Regulations:</label>
              <textarea
                value={newEvent.rules}
                onChange={(e) => setNewEvent(prev => ({ ...prev, rules: e.target.value }))}
                rows={6}
                placeholder="Enter each rule on a new line"
              />
            </div>

            {/* Judges Section */}
            <div className="section">
              <h4>Judges</h4>
              <div className="add-item-form">
                <input
                  type="text"
                  placeholder="Judge Name"
                  value={newJudge.name}
                  onChange={(e) => setNewJudge(prev => ({ ...prev, name: e.target.value }))}
                />
                <input
                  type="text"
                  placeholder="Qualification"
                  value={newJudge.qualification}
                  onChange={(e) => setNewJudge(prev => ({ ...prev, qualification: e.target.value }))}
                />
                <button type="button" onClick={handleAddJudge}>Add Judge</button>
              </div>
              <div className="items-list">
                {newEvent.judges?.map((judge, index) => (
                  <div key={index} className="item">
                    <span>{judge.name} - {judge.qualification}</span>
                    <button 
                      type="button" 
                      onClick={() => setNewEvent(prev => ({
                        ...prev,
                        judges: prev.judges?.filter((_, i) => i !== index)
                      }))}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Coordinators Section */}
            <div className="section">
              <h4>Student Coordinators</h4>
              <div className="add-item-form">
                <input
                  type="text"
                  placeholder="Coordinator Name"
                  value={newCoordinator.name}
                  onChange={(e) => setNewCoordinator(prev => ({ ...prev, name: e.target.value }))}
                />
                <input
                  type="text"
                  placeholder="Class"
                  value={newCoordinator.class}
                  onChange={(e) => setNewCoordinator(prev => ({ ...prev, class: e.target.value }))}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={newCoordinator.phone}
                  onChange={(e) => setNewCoordinator(prev => ({ ...prev, phone: e.target.value }))}
                />
                <button type="button" onClick={handleAddCoordinator}>Add Coordinator</button>
              </div>
              <div className="items-list">
                {newEvent.coordinators?.map((coordinator, index) => (
                  <div key={index} className="item">
                    <span>{coordinator.name} - {coordinator.class} - {coordinator.phone}</span>
                    <button 
                      type="button" 
                      onClick={() => setNewEvent(prev => ({
                        ...prev,
                        coordinators: prev.coordinators?.filter((_, i) => i !== index)
                      }))}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <button type="submit" className="submit-btn">Add Event</button>
          </form>
        </div>
      )}

      <div className="events-list">
        <h3>Existing Events</h3>
        {state.events.length === 0 ? (
          <p>No events added yet.</p>
        ) : (
          <div className="events-table">
            {state.events.map((event) => (
              <div key={event.id} className="event-row">
                <div className="event-info">
                  <h4>{event.name}</h4>
                  <p>{event.type} Event - {event.date} at {event.time}</p>
                  <p>Participants: {event.participants || 0}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
