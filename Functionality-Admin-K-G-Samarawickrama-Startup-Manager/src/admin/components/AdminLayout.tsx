import { useState, type ReactNode } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';

interface Props {
  title: string;
  children: ReactNode;
}

export default function AdminLayout({ title, children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.35)', zIndex: 199 }}
          aria-hidden="true"
        />
      )}
      <div className="admin-layout">
        <AdminSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <AdminHeader title={title} onMenuToggle={() => setSidebarOpen(s => !s)} />
        <main className="admin-content">
          {children}
        </main>
      </div>
    </>
  );
}
