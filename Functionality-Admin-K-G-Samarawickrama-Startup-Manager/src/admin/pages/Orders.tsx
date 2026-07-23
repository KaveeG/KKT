import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../components/AdminLayout';
import StatusBadge from '../components/StatusBadge';
import SearchInput from '../components/SearchInput';
import FilterSelect from '../components/FilterSelect';
import EmptyState from '../components/EmptyState';
import Pagination from '../components/Pagination';
import { useStore } from '../AdminDataStore';
import type { OrderStatus } from '../../data/orders';
import '../admin.css';

const TABS = [
  { label: 'All Orders', value: 'all' },
  { label: 'Pending Orders', value: 'pending' },
  { label: 'Completed Orders', value: 'completed' },
];

const STATUS_OPTS = [
  { label: 'All Statuses', value: '' },
  { label: 'Pending', value: 'Pending' },
  { label: 'Confirmed', value: 'Confirmed' },
  { label: 'Processing', value: 'Processing' },
  { label: 'Delivered', value: 'Delivered' },
  { label: 'Completed', value: 'Completed' },
  { label: 'Cancelled', value: 'Cancelled' },
];

function fmt(n: number) {
  return `LKR ${n.toLocaleString('en-LK', { minimumFractionDigits: 2 })}`;
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-LK', { day: '2-digit', month: 'short', year: 'numeric' });
}

const PER_PAGE = 8;

export default function Orders() {
  const navigate = useNavigate();
  const { orders } = useStore();
  const [tab, setTab] = useState('all');
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [page, setPage] = useState(1);

  const PENDING_STATUSES: OrderStatus[] = ['Pending', 'Confirmed', 'Processing'];
  const COMPLETE_STATUSES: OrderStatus[] = ['Delivered', 'Completed'];

  const filtered = orders.filter(o => {
    const matchTab =
      tab === 'all' ? true :
      tab === 'pending' ? PENDING_STATUSES.includes(o.status) :
      COMPLETE_STATUSES.includes(o.status);

    const q = search.toLowerCase();
    const matchSearch = !search || o.orderNumber.toLowerCase().includes(q) || o.customerName.toLowerCase().includes(q);
    const matchStatus = !statusFilter || o.status === statusFilter;
    const matchDate = !dateFilter || o.orderDate.startsWith(dateFilter);

    return matchTab && matchSearch && matchStatus && matchDate;
  });

  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  function changeTab(t: string) {
    setTab(t);
    setPage(1);
  }

  return (
    <AdminLayout title="Orders">
      <div className="page-header">
        <div>
          <h1 className="page-title">Order Management</h1>
          <p className="page-subtitle">{orders.length} orders total</p>
        </div>
      </div>

      <div className="section-card">
        {/* Tabs */}
        <div className="tab-bar">
          {TABS.map(t => (
            <button key={t.value} className={`tab-btn ${tab === t.value ? 'active' : ''}`} onClick={() => changeTab(t.value)}>
              {t.label}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--kk-card-border)' }}>
          <div className="filter-bar" style={{ marginBottom: 0 }}>
            <SearchInput value={search} onChange={v => { setSearch(v); setPage(1); }} placeholder="Search by order number or customer…" />
            <FilterSelect value={statusFilter} onChange={v => { setStatusFilter(v); setPage(1); }} options={STATUS_OPTS} label="Filter by status" />
            <input
              type="month"
              className="filter-select"
              value={dateFilter}
              onChange={e => { setDateFilter(e.target.value); setPage(1); }}
              aria-label="Filter by month"
            />
          </div>
        </div>

        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Order #</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Items</th>
                <th>Total</th>
                <th>Payment</th>
                <th>Payment Status</th>
                <th>Order Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {paginated.map(o => (
                <tr key={o.id}>
                  <td style={{ fontWeight: 500 }}>{o.orderNumber}</td>
                  <td>{o.customerName}</td>
                  <td className="text-muted">{formatDate(o.orderDate)}</td>
                  <td className="text-muted">{o.items.reduce((s, i) => s + i.quantity, 0)} item(s)</td>
                  <td className="lkr" style={{ fontWeight: 500 }}>{fmt(o.total)}</td>
                  <td className="text-muted text-sm">{o.paymentMethod}</td>
                  <td><StatusBadge status={o.paymentStatus} /></td>
                  <td><StatusBadge status={o.status} /></td>
                  <td>
                    <button className="btn btn-secondary btn-sm" onClick={() => navigate(`/admin/orders/${o.id}`)}>
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {paginated.length === 0 && <EmptyState title="No orders found" description="Try adjusting your search or filter criteria." />}
        </div>
        <Pagination page={page} total={filtered.length} perPage={PER_PAGE} onChange={setPage} />
      </div>
    </AdminLayout>
  );
}
