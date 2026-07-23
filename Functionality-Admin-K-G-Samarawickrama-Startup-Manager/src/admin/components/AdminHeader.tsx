import { useState } from 'react';

interface Props {
  title: string;
  onMenuToggle: () => void;
}

export default function AdminHeader({ title, onMenuToggle }: Props) {
  const [notifCount] = useState(3);

  return (
    <header className="admin-header">
      <button
        className="sidebar-toggle"
        onClick={onMenuToggle}
        aria-label="Toggle sidebar"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      <div style={{ flex: 1 }}>
        <div className="header-title">{title}</div>
      </div>

      <div className="header-actions">
        <button className="header-icon-btn" aria-label={`${notifCount} notifications`}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          {notifCount > 0 && <span className="notif-dot" />}
        </button>

        <div className="admin-profile" role="img" aria-label="Administrator profile">
          <div className="admin-avatar">A</div>
          <div>
            <div className="admin-name">Administrator</div>
            <div className="admin-role">Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
}
