import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = ({ title }) => {
  return (
    <nav
      id="navbar"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'bisque',
      }}>
      <div className="navbar-logo" style={{ height: '50px', display: 'flex' }}>
        <img
          src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
          alt="Logo"
          className="logo"
        />
        <div style={{ padding: '0px 10px', color: 'red' }}>
          <h1>{title}</h1>
        </div>
      </div>
      <div id="nav-items" style={{ display: 'flex', flexDirection: 'row', gap: '1.5rem' }}>
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/downloads">Downloads</Link>
        </p>
        <p>
          <Link to="/settings">Settings</Link>
        </p>
        <p>
          <Link to="/profile">Profile</Link>
        </p>
        <p>
          {' '}
          <Link to="/downloads">Downloads</Link>
        </p>
        <p>
          <Link to="/login">Login</Link>
        </p>
      </div>
    </nav>
  );
};
export default Navbar;
