export const systemMetrics = {
  cpu: {
    cores: 8,
    model: 'AMD Ryzen 7 5800X',
    speed: '3.8 GHz',
    load: [45, 52, 38, 60, 41, 55, 48, 50],
    overallLoad: 48.6,
    temperature: 65,
  },
  memory: {
    total: 32768, // MB
    used: 16384,
    free: 16384,
    swapTotal: 8192,
    swapUsed: 1024,
  },
  uptime: '14 days, 5 hours, 22 minutes',
  kernel: 'Linux 5.15.0-82-generic',
  distro: 'Ubuntu 22.04.3 LTS',
};

export const fileSystem = [
  { mount: '/', filesystem: '/dev/sda1', size: '500G', used: '320G', avail: '180G', usePercent: 64 },
  { mount: '/home', filesystem: '/dev/sdb1', size: '2T', used: '1.2T', avail: '800G', usePercent: 60 },
  { mount: '/var', filesystem: '/dev/sda2', size: '100G', used: '85G', avail: '15G', usePercent: 85 },
  { mount: '/tmp', filesystem: 'tmpfs', size: '16G', used: '1G', avail: '15G', usePercent: 6 },
];

export const storageStats = {
  totalFiles: 4852914,
  inodeUsage: 45, // percent
  diskHealth: 'Good',
  lastScrub: '2026-08-20T10:00:00Z',
};

export const users = [
  { username: 'root', uid: 0, gid: 0, home: '/root', shell: '/bin/bash', lastLogin: '2026-08-24T08:15:00Z', status: 'active' },
  { username: 'maniv', uid: 1000, gid: 1000, home: '/home/maniv', shell: '/bin/bash', lastLogin: '2026-08-24T09:30:00Z', status: 'active' },
  { username: 'postgres', uid: 112, gid: 115, home: '/var/lib/postgresql', shell: '/bin/false', lastLogin: '2026-08-10T14:20:00Z', status: 'system' },
  { username: 'nginx', uid: 113, gid: 116, home: '/nonexistent', shell: '/usr/sbin/nologin', lastLogin: 'Never', status: 'system' },
  { username: 'jdoe', uid: 1001, gid: 1001, home: '/home/jdoe', shell: '/bin/bash', lastLogin: '2025-06-15T11:00:00Z', status: 'inactive' },
  { username: 'asmith', uid: 1002, gid: 1002, home: '/home/asmith', shell: '/bin/bash', lastLogin: '2024-11-20T09:45:00Z', status: 'inactive' },
];

export const userStats = {
  total: users.length,
  active: users.filter(u => u.status === 'active').length,
  system: users.filter(u => u.status === 'system').length,
  inactive: users.filter(u => u.status === 'inactive').length, // Over a year
};
