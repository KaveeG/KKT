import { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import StatusBadge from '../components/StatusBadge';
import SearchInput from '../components/SearchInput';
import FilterSelect from '../components/FilterSelect';
import EmptyState from '../components/EmptyState';
import Pagination from '../components/Pagination';
import { customers } from '../../data/customers';
import '../admin.css';

const STATUS_OPTS = [
  { label: 'All Accounts', value: '' },
  { label: 'Active', value: 'Active' },
  { label: 'Inactive', value: 'Inactive' },
];

function fmt(n: number) {
  return `LKR ${n.toLocaleString('en-LK', { minimumFractionDigits: 2 })}`;
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-LK', { day: '2-digit', month: 'short', year: 'numeric' });
}

const PER_PAGE = 8;

export default function Customers() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [page, setPage] = useState(1);

  const filtered = customers.filter(c => {
    const q = search.toLowerCase();
    const matchSearch = !search || c.name.toLowerCase().includes(q) || c.email.toLowerCase().includes(q);
    const matchStatus = !statusFilter || c.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <AdminLayout title="Customers">
      <div className="page-header">
        <div>
          <h1 className="page-title">Registered Customers</h1>
          <p className="page-subtitle">{customers.length} registered accounts</p>
        </div>
      </div>

      <div className="section-card">
        <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--kk-card-border)' }}>
          <div className="filter-bar" style={{ marginBottom: 0 }}>
            <SearchInput value={search} onChange={v => { setSearch(v); setPage(1); }} placeholder="Search by name or email…" />
            <FilterSelect value={statusFilter} onChange={v => { setStatusFilter(v); setPage(1); }} options={STATUS_OPTS} label="Filter by status" />
          </div>
        </div>

        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Phone</th>
                <th>Registered</th>
                <th>Orders</th>
                <th>Total Spent</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map(c => (
                <tr key={c.id}>
                  <td>
                    <div className="flex-center">
                      <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#F6EEF0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--kk-maroon)', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, flexShrink: 0 }}>
                        {c.name.charAt(0)}
                      </div>
                      <div>
                        <div style={{ fontWeight: 500 }}>{c.name}</div>
                        <div style={{ fontSize: 12, color: 'var(--kk-text-muted)' }}>{c.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-muted text-sm">{c.phone}</td>
                  <td className="text-muted">{formatDate(c.registrationDate)}</td>
                  <td style={{ fontWeight: 500 }}>{c.orders}</td>
                  <td className="lkr" style={{ fontWeight: 500 }}>{fmt(c.totalSpent)}</td>
                  <td><StatusBadge status={c.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
          {paginated.length === 0 && <EmptyState title="No customers found" description="Try adjusting your search or filter criteria." />}
        </div>
        <Pagination page={page} total={filtered.length} perPage={PER_PAGE} onChange={setPage} />
      </div>
    </AdminLayout>
  );
}
