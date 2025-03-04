import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sprout } from 'lucide-react';

function Navigation() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-content">
          
          <div className="nav-links">
            <NavLink 
              to="/" 
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              end
            >
              Home
            </NavLink>
            
            <NavLink 
              to="/composting" 
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              Composting
            </NavLink>
            <NavLink 
              to="/tips" 
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              Tips
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navigation