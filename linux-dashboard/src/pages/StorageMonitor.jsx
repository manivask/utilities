import React from 'react';
import { fileSystem, storageStats } from '../data/mockData';

const StorageMonitor = () => {
  return (
    <>
      <div className="page-intro">
        <div>
          <h2>Storage monitor</h2>
          <p>Filesystem mounts, disk health, and capacity planning.</p>
        </div>
        <div className="filter-group">
          <button className="select-btn">All partitions⌄</button>
        </div>
      </div>

      <section className="kpis">
        <article className="kpi card">
          <div className="kpi-label">
            <span>TOTAL FILES</span>
            <span>▣</span>
          </div>
          <div className="metric">{(storageStats.totalFiles / 1000000).toFixed(1)}<span className="metric-unit"> M</span></div>
          <div className="metric-note">Across all filesystems</div>
        </article>
        <article className="kpi card">
          <div className="kpi-label">
            <span>INODE USAGE</span>
            <span>◫</span>
          </div>
          <div className="metric">{storageStats.inodeUsage}<span className="metric-unit">%</span></div>
          <div className="metric-note">Plenty available</div>
        </article>
        <article className="kpi card">
          <div className="kpi-label">
            <span>DISK HEALTH</span>
            <span>▤</span>
          </div>
          <div className="metric">{storageStats.diskHealth}</div>
          <div className="metric-note">S.M.A.R.T. status</div>
        </article>
        <article className="kpi card">
          <div className="kpi-label">
            <span>LAST SCRUB</span>
            <span>▥</span>
          </div>
          <div className="metric">{new Date(storageStats.lastScrub).toLocaleDateString()}</div>
          <div className="metric-note">Monthly maintenance</div>
        </article>
      </section>

      <section className="table-card card">
        <div className="card-header" style={{ paddingBottom: '15px' }}>
          <div>
            <h3>Filesystem utilization</h3>
            <p>Monitor partition capacity to avoid 100% full errors</p>
          </div>
        </div>
        <div className="table-scroll">
          <table className="data-table">
            <thead>
              <tr>
                <th>MOUNT</th>
                <th>FILESYSTEM</th>
                <th>SIZE</th>
                <th>USED</th>
                <th>AVAILABLE</th>
                <th>UTILIZATION</th>
              </tr>
            </thead>
            <tbody>
              {fileSystem.map((fs, i) => (
                <tr key={i}>
                  <td>{fs.mount}</td>
                  <td>{fs.filesystem}</td>
                  <td>{fs.size}</td>
                  <td>{fs.used}</td>
                  <td>{fs.avail}</td>
                  <td>
                    <div className="progress" style={{ width: '80px', display: 'inline-block', marginRight: '10px', verticalAlign: 'middle' }}>
                      <i className={fs.usePercent > 80 ? 'orange' : ''} style={{ width: `${fs.usePercent}%` }}></i>
                    </div>
                    <small>{fs.usePercent}%</small>
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

export default StorageMonitor;
