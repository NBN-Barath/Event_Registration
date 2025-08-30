import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import CustomerSupport from './pages/CustomerSupport';
import TransportDetails from './pages/TransportDetails';
import Feedback from './pages/Feedback';
import Admin from './pages/Admin';
import './App.css';

const SpinWheelNav: React.FC = () => {
  const getCurrentPage = () => {
    const path = window.location.pathname;
    if (path === '/') return 'home';
    if (path === '/events') return 'events';
    if (path === '/support') return 'support';
    if (path === '/transport') return 'transport';
    if (path === '/admin') return 'admin';
    return 'home';
  };

  const [activeItem, setActiveItem] = React.useState(getCurrentPage());
  
  const navigationItems = [
    { id: 'home', label: 'Home', href: '/', angle: 0 },
    { id: 'events', label: 'Events', href: '/events', angle: -45 },
    { id: 'support', label: 'Support', href: '/support', angle: -90 },
    { id: 'transport', label: 'Transport', href: '/transport', angle: 45 },
    { id: 'admin', label: 'Admin', href: '/admin', angle: 90 }
  ];

  const getCurrentRotation = () => {
    const currentItem = navigationItems.find(item => item.id === activeItem);
    return currentItem ? currentItem.angle : 0;
  };

  const [currentRotation, setCurrentRotation] = React.useState(getCurrentRotation());

  React.useEffect(() => {
    const newActiveItem = getCurrentPage();
    setActiveItem(newActiveItem);
    const newRotation = navigationItems.find(item => item.id === newActiveItem)?.angle || 0;
    setCurrentRotation(newRotation);
  }, []);

  const handleNavClick = (item: any, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveItem(item.id);
    setCurrentRotation(item.angle);
    setTimeout(() => {
      window.location.href = item.href;
    }, 500);
  };

  return (
    <div style={{
      position: 'fixed',
      right: '-90px', // Reduced from -100px to show more of the circle
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 1000,
      userSelect: 'none',
      width: '200px',
      height: '200px',
      overflow: 'visible'
    }}>
      <div style={{
        position: 'relative',
        width: '200px',
        height: '200px'
      }}>
        <div style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          position: 'absolute',
          top: '0',
          left: '0',
          boxShadow: '-5px 0 15px rgba(0, 0, 0, 0.3)',
          border: '3px solid #fff',
          transform: `rotate(${currentRotation}deg)`,
          transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
        }}></div>
        
        <div style={{ 
          position: 'absolute', 
          width: '100%', 
          height: '100%',
          transform: `rotate(${currentRotation}deg)`,
          transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          {navigationItems.map((item, index) => (
            <a 
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(item, e)}
              style={{
                position: 'absolute',
                // Adjusted positioning to keep items visible and prevent overlap
                top: index === 0 ? '15px' : index === 1 ? '45px' : index === 2 ? '100px' : index === 3 ? '155px' : '175px',
                left: index === 0 ? '100px' : index === 1 ? '160px' : index === 2 ? '175px' : index === 3 ? '145px' : '100px',
                transform: `translateX(-50%) rotate(${-currentRotation}deg)`,
                background: activeItem === item.id ? '#fff' : 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                borderRadius: '15px',
                padding: '6px 10px',
                fontSize: '10px',
                fontWeight: '600',
                color: '#333',
                textDecoration: 'none',
                boxShadow: activeItem === item.id ? '0 4px 12px rgba(0, 0, 0, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease',
                minWidth: '55px',
                textAlign: 'center',
                cursor: 'pointer',
                whiteSpace: 'nowrap', // Prevent text wrapping
                zIndex: 10 // Ensure buttons are above the circle
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <div className="App">
        <Router>
          <div className="app-layout" style={{
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/event/:id" element={<EventDetails />} />
                <Route path="/support" element={<CustomerSupport />} />
                <Route path="/transport" element={<TransportDetails />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/admin" element={<Admin />} />
              </Routes>
            </main>
            
            <SpinWheelNav />
          </div>
        </Router>
      </div>
    </AppProvider>
  );
};

export default App;