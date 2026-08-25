import React from 'react';
import { users, userStats } from '../data/mockData';

const UserManagement = () => {
  return (
    <>
      <div className="page-intro">
        <div>
          <h2>Users & security</h2>
          <p>Review system access, account status, and inactive user accounts.</p>
        </div>
        <div className="filter-group">
          <button className="select-btn">Show inactive only</button>
          <button className="select-btn">All profiles⌄</button>
        </div>
      </div>

      <section className="kpis">
        <article className="kpi card">
          <div className="kpi-label">
            <span>TOTAL USERS</span>
            <span>♙</span>
          </div>
          <div className="metric">{userStats.total}</div>
          <div className="metric-note">Registered on system</div>
        </article>
        <article className="kpi card">
          <div className="kpi-label">
            <span>ACTIVE ACCOUNTS</span>
            <span>◉</span>
          </div>
          <div className="metric">{userStats.active}</div>
          <div className="metric-note">Currently allowed access</div>
        </article>
        <article className="kpi card">
          <div className="kpi-label">
            <span>SYSTEM ACCOUNTS</span>
            <span>◷</span>
          </div>
          <div className="metric">{userStats.system}</div>
          <div className="metric-note">Service / daemon profiles</div>
        </article>
        <article className="kpi card">
          <div className="kpi-label">
            <span>INACTIVE 1+ YEAR</span>
            <span>△</span>
          </div>
          <div className="metric">{userStats.inactive}</div>
          <div className="metric-note bad">Action required</div>
        </article>
      </section>

      <section className="table-card card">
        <div className="card-header" style={{ paddingBottom: '15px' }}>
          <div>
            <h3>System user directory</h3>
            <p>Inactive accounts are highlighted for access review</p>
          </div>
        </div>
        <div className="table-scroll">
          <table className="data-table">
            <thead>
              <tr>
                <th>USERNAME</th>
                <th>UID</th>
                <th>HOME DIRECTORY</th>
                <th>SHELL</th>
                <th>LAST LOGIN</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={i}>
                  <td>{user.username}</td>
                  <td>{user.uid}</td>
                  <td>{user.home}</td>
                  <td>{user.shell}</td>
                  <td>
                    {user.lastLogin === 'Never' ? 'Never' : 
                      new Date(user.lastLogin).toLocaleDateString()}
                  </td>
                  <td>
                    <span className={`tag ${
                      user.status === 'inactive' ? 'warn' : 
                      user.status === 'system' ? 'blue' : ''
                    }`}>
                      {user.status === 'inactive' ? 'Dormant' :
                       user.status === 'system' ? 'System' : 'Active'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default UserManagement;
