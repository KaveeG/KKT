import type { ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  value: number | string;
  label: string;
  iconClass?: string;
}

export default function AdminStatCard({ icon, value, label, iconClass = 'maroon' }: Props) {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${iconClass}`}>{icon}</div>
      <div>
        <div className="stat-value">{value}</div>
        <div className="stat-label">{label}</div>
      </div>
    </div>
  );
}
