import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DashboardOverview from './pages/DashboardOverview';
import SystemMonitor from './pages/SystemMonitor';
import StorageMonitor from './pages/StorageMonitor';
import UserManagement from './pages/UserManagement';

function App() {
  return (
    <Router>
      <div className="app-shell">
        <Sidebar />
        <main>
          <header className="topbar">
            <div>
              <p className="eyebrow">LINUX SYSTEM MONITORING</p>
              <h1>Good morning, Admin</h1>
            </div>
            <div className="top-actions">
              <button className="icon-button" aria-label="Notifications">
                ♢<b>1</b>
              </button>
              <button className="refresh-button">
                ↻ <span>Refresh data</span>
              </button>
              <div className="avatar">A</div>
            </div>
          </header>
          <section className="content">
            <Routes>
              <Route path="/" element={<DashboardOverview />} />
              <Route path="/system" element={<SystemMonitor />} />
              <Route path="/storage" element={<StorageMonitor />} />
              <Route path="/users" element={<UserManagement />} />
            </Routes>
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;
