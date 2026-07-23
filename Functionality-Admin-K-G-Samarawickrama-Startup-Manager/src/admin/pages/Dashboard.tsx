import { useNavigate } from 'react-router-dom';
import AdminLayout from '../components/AdminLayout';
import AdminStatCard from '../components/AdminStatCard';
import StatusBadge from '../components/StatusBadge';
import { getDashboardStats, getRecentOrders, getLowStockProducts, getUpcomingTailoring } from '../../data/dashboard';
import '../admin.css';

function fmt(n: number) {
  return `LKR ${n.toLocaleString('en-LK', { minimumFractionDigits: 2 })}`;
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-LK', { day: '2-digit', month: 'short', year: 'numeric' });
}

export default function Dashboard() {
  const navigate = useNavigate();
  const stats = getDashboardStats();
  const recentOrders = getRecentOrders();
  const lowStock = getLowStockProducts();
  const upcoming = getUpcomingTailoring();

  return (
    <AdminLayout title="Dashboard">
      <div className="stats-grid">
        <AdminStatCard
          iconClass="maroon"
          value={stats.totalProducts}
          label="Total Products"
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>}
        />
        <AdminStatCard
          iconClass="blue"
          value={stats.totalOrders}
          label="Total Orders"
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>}
        />
        <AdminStatCard
          iconClass="amber"
          value={stats.pendingOrders}
          label="Pending Orders"
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>}
        />
        <AdminStatCard
          iconClass="green"
          value={stats.completedOrders}
          label="Completed Orders"
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="20 6 9 17 4 12" /></svg>}
        />
        <AdminStatCard
          iconClass="red"
          value={stats.lowStockProducts}
          label="Low / Out of Stock"
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>}
        />
        <AdminStatCard
          iconClass="neutral"
          value={stats.tailoringRequests}
          label="New Tailoring Requests"
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>}
        />
      </div>

      {/* Recent Orders */}
      <div className="section-card mb-24">
        <div className="section-card-header">
          <span className="section-card-title">Recent Orders</span>
          <button className="btn btn-ghost btn-sm" onClick={() => navigate('/admin/orders')}>View All</button>
        </div>
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Order #</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map(o => (
                <tr key={o.id} style={{ cursor: 'pointer' }} onClick={() => navigate(`/admin/orders/${o.id}`)}>
                  <td style={{ fontWeight: 500 }}>{o.orderNumber}</td>
                  <td>{o.customerName}</td>
                  <td className="text-muted">{formatDate(o.orderDate)}</td>
                  <td className="lkr">{fmt(o.total)}</td>
                  <td><StatusBadge status={o.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        {/* Low Stock */}
        <div className="section-card">
          <div className="section-card-header">
            <span className="section-card-title">Low Stock Products</span>
            <button className="btn btn-ghost btn-sm" onClick={() => navigate('/admin/products')}>View All</button>
          </div>
          <div style={{ padding: '4px 20px 8px' }}>
            {lowStock.length === 0 ? (
              <p style={{ padding: '16px 0', color: 'var(--kk-text-muted)', fontSize: 13.5 }}>All products are well stocked.</p>
            ) : (
              lowStock.map(p => (
                <div key={p.id} className="low-stock-item">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="product-thumb"
                    onError={e => { (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"%3E%3Crect width="40" height="40" fill="%23F0E8DD"/%3E%3C/svg%3E'; }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13.5, fontWeight: 500 }}>{p.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--kk-text-muted)' }}>{p.category}</div>
                  </div>
                  <StatusBadge status={p.status} />
                </div>
              ))
            )}
          </div>
        </div>

        {/* Upcoming Tailoring */}
        <div className="section-card">
          <div className="section-card-header">
            <span className="section-card-title">Upcoming Tailoring</span>
            <button className="btn btn-ghost btn-sm" onClick={() => navigate('/admin/tailoring')}>View All</button>
          </div>
          <div style={{ padding: '4px 20px 8px' }}>
            {upcoming.length === 0 ? (
              <p style={{ padding: '16px 0', color: 'var(--kk-text-muted)', fontSize: 13.5 }}>No upcoming appointments.</p>
            ) : (
              upcoming.map(t => (
                <div key={t.id} className="low-stock-item">
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#F6EEF0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--kk-maroon)', flexShrink: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14 }}>
                    {t.customerName.charAt(0)}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13.5, fontWeight: 500 }}>{t.customerName}</div>
                    <div style={{ fontSize: 12, color: 'var(--kk-text-muted)' }}>{formatDate(t.preferredDate)} · {t.preferredTime}</div>
                  </div>
                  <StatusBadge status={t.status} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
