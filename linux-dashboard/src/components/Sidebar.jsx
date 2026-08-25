import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <a className="brand" href="/">
        <span className="brand-mark">L</span>
        <span>Linux<span>Dash</span></span>
      </a>
      <p className="environment-label">ENVIRONMENT</p>
      <button className="instance-switcher" aria-label="Change instance">
        <span>
          <b>SERVER-01</b>
          <small>Production · local</small>
        </span>
        <span>⌄</span>
      </button>
      <nav aria-label="Dashboard sections">
        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
          <span>◈</span> Overview
        </NavLink>
        <NavLink to="/system" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          <span>◌</span> System
        </NavLink>
        <NavLink to="/storage" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          <span>▣</span> Storage
        </NavLink>
        <NavLink to="/users" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          <span>♙</span> Users
        </NavLink>
      </nav>
      <div className="sidebar-bottom">
        <p className="environment-label">SYSTEM STATUS</p>
        <div className="status-summary">
          <i></i>
          <span>All systems operational</span>
        </div>
        <small>Last refresh <span>just now</span></small>
      </div>
    </aside>
  );
};

export default Sidebar;
