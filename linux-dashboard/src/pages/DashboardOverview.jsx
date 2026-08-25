import React from 'react';
import { systemMetrics, storageStats, userStats } from '../data/mockData';

const DashboardOverview = () => {
  return (
    <>
      <div className="page-intro">
        <div>
          <h2>System overview</h2>
          <p>A real-time view of SERVER-01 · last data collection just now</p>
        </div>
        <div className="filter-group">
          <button className="select-btn">Last 24 hours⌄</button>
          <button className="select-btn">Production⌄</button>
        </div>
      </div>

      <section className="kpis">
        <article className="kpi health-score card">
          <div className="kpi-label">
            <span>SYSTEM HEALTH SCORE</span>
            <span className="healthy-pill">● HEALTHY</span>
          </div>
          <div className="score-main">
            <strong>98</strong>
            <span>/ 100 · +1 since yesterday</span>
          </div>
        </article>
        <article className="kpi card">
          <div className="kpi-label">
            <span>CPU UTILIZATION</span>
            <span>◌</span>
          </div>
          <div className="metric">
            {systemMetrics.cpu.overallLoad}<span className="metric-unit">%</span>
          </div>
          <div className="metric-note">Within normal parameters</div>
        </article>
        <article className="kpi card">
          <div className="kpi-label">
            <span>MEMORY USAGE</span>
            <span>▤</span>
          </div>
          <div className="metric">
            {Math.round((systemMetrics.memory.used / systemMetrics.memory.total) * 100)}<span className="metric-unit">%</span>
          </div>
          <div className="metric-note warn">Requires attention soon</div>
        </article>
        <article className="kpi card">
          <div className="kpi-label">
            <span>ACTIVE USERS</span>
            <span>◉</span>
          </div>
          <div className="metric">{userStats.active}</div>
          <div className="metric-note">out of {userStats.total} total accounts</div>
        </article>
        <article className="kpi card">
          <div className="kpi-label">
            <span>OPEN ALERTS</span>
            <span>△</span>
          </div>
          <div className="metric">1</div>
          <div className="metric-note bad">Needs review</div>
        </article>
      </section>

      <section className="grid-two">
        <article className="card">
          <div className="card-header">
            <div>
              <h3>System Details</h3>
              <p>Host machine information</p>
            </div>
          </div>
          <div className="chart-wrap" style={{ padding: '20px 18px' }}>
            <div style={{ marginBottom: '10px' }}><strong>Kernel:</strong> {systemMetrics.kernel}</div>
            <div style={{ marginBottom: '10px' }}><strong>Distro:</strong> {systemMetrics.distro}</div>
            <div style={{ marginBottom: '10px' }}><strong>CPU:</strong> {systemMetrics.cpu.model}</div>
            <div style={{ marginBottom: '10px' }}><strong>Uptime:</strong> {systemMetrics.uptime}</div>
          </div>
        </article>
        
        <article className="card">
          <div className="card-header">
            <div>
              <h3>Memory Details</h3>
              <p>Usage distribution</p>
            </div>
          </div>
          <div className="donut-row">
            <div className="donut">
              <div>
                {(systemMetrics.memory.used / 1024).toFixed(1)}
                <small>GB used of {(systemMetrics.memory.total / 1024).toFixed(1)} GB</small>
              </div>
            </div>
            <div className="capacity-list">
              <div className="capacity-item">
                Used <span>{Math.round((systemMetrics.memory.used / systemMetrics.memory.total) * 100)}%</span>
                <div className="progress"><i className="orange" style={{ width: `${Math.round((systemMetrics.memory.used / systemMetrics.memory.total) * 100)}%` }}></i></div>
              </div>
              <div className="capacity-item">
                Free <span>{Math.round((systemMetrics.memory.free / systemMetrics.memory.total) * 100)}%</span>
                <div className="progress"><i className="cyan" style={{ width: `${Math.round((systemMetrics.memory.free / systemMetrics.memory.total) * 100)}%` }}></i></div>
              </div>
              <div className="capacity-item">
                Swap <span>{Math.round((systemMetrics.memory.swapUsed / systemMetrics.memory.swapTotal) * 100)}%</span>
                <div className="progress"><i style={{ width: `${Math.round((systemMetrics.memory.swapUsed / systemMetrics.memory.swapTotal) * 100)}%` }}></i></div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default DashboardOverview;
