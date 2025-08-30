import React from 'react';
import { Link } from 'react-router-dom';
import Draggable from 'react-draggable';
import { useApp } from '../../context/AppContext';
import './NavBar.css';

const NavBar: React.FC = () => {
  const { state } = useApp();

  return (
    <Draggable
      axis="y"
      bounds={{ top: -200, bottom: 200 }}
      defaultPosition={{ x: 0, y: 0 }}
    >
      <div className="navbar-container">
        <div className="navbar-wheel">
          <div className="navbar-wheel-bg"></div>
          <div className="navbar-items">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/events" className="navbar-item">
              Events
            </Link>
            <Link to="/support" className="navbar-item">
              Support
            </Link>
            <Link to="/transport" className="navbar-item">
              Transport
            </Link>
            <Link 
              to="/feedback" 
              className={`navbar-item ${!state.feedbackEnabled ? 'disabled' : ''}`}
              onClick={(e) => {
                if (!state.feedbackEnabled) {
                  e.preventDefault();
                }
              }}
            >
              Feedback
            </Link>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default NavBar;
