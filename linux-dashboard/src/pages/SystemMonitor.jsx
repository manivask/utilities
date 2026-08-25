import React from 'react';
import { systemMetrics } from '../data/mockData';

const SystemMonitor = () => {
  return (
    <>
      <div className="page-intro">
        <div>
          <h2>Performance monitor</h2>
          <p>Watch system workload, CPU performance, and memory utilization.</p>
        </div>
        <div className="filter-group">
          <button className="select-btn">Last 24 hours⌄</button>
        </div>
      </div>

      <section className="kpis">
        <article className="kpi card">
          <div className="kpi-label">
            <span>CPU CORES</span>
            <span>◌</span>
          </div>
          <div className="metric">{systemMetrics.cpu.cores}</div>
          <div className="metric-note">{systemMetrics.cpu.model}</div>
        </article>
        <article className="kpi card">
          <div className="kpi-label">
            <span>CPU SPEED</span>
            <span>◷</span>
          </div>
          <div className="metric">{systemMetrics.cpu.speed.replace(' GHz', '')}<span className="metric-unit"> GHz</span></div>
          <div className="metric-note">Base clock</div>
        </article>
        <article className="kpi card">
          <div className="kpi-label">
            <span>CPU LOAD</span>
            <span>↗</span>
          </div>
          <div className="metric">{systemMetrics.cpu.overallLoad}<span className="metric-unit">%</span></div>
          <div className="metric-note">Normal workload</div>
        </article>
        <article className="kpi card">
          <div className="kpi-label">
            <span>TEMPERATURE</span>
            <span>⊗</span>
          </div>
          <div className="metric">{systemMetrics.cpu.temperature}<span className="metric-unit">°C</span></div>
          <div className="metric-note warn">Slightly warm</div>
        </article>
      </section>

      <section className="grid-two">
        <article className="card">
          <div className="card-header">
            <div>
              <h3>Load per Core</h3>
              <p>Active workload distribution across CPU cores</p>
            </div>
          </div>
          <div style={{ padding: '20px' }}>
            <div className="capacity-list" style={{ width: '100%' }}>
              {systemMetrics.cpu.load.map((load, index) => (
                <div key={index} className="capacity-item">
                  Core {index} <span>{load}%</span>
                  <div className="progress">
                    <i className={load > 55 ? "orange" : "cyan"} style={{ width: `${load}%` }}></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>

        <article className="card">
          <div className="card-header">
            <div>
              <h3>System alerts</h3>
              <p>Events ranked by priority</p>
            </div>
          </div>
          <div className="alert-list">
            <div className="alert">
              <div className="alert-icon">1</div>
              <div>
                <b>High memory usage</b>
                <p>System memory usage is at 50% capacity</p>
              </div>
              <time>WARN</time>
            </div>
            <div className="alert">
              <div className="alert-icon">2</div>
              <div>
                <b>Swap usage detected</b>
                <p>1 GB of swap space currently in use</p>
              </div>
              <time>INFO</time>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default SystemMonitor;
