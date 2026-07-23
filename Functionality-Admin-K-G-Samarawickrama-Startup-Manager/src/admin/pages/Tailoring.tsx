import { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import StatusBadge from '../components/StatusBadge';
import SearchInput from '../components/SearchInput';
import RescheduleModal from '../components/RescheduleModal';
import EmptyState from '../components/EmptyState';
import Pagination from '../components/Pagination';
import { useStore } from '../AdminDataStore';
import type { TailoringStatus } from '../../data/tailoring';
import '../admin.css';

const TABS = [
  { label: 'New Requests', value: 'new' },
  { label: 'Approved Requests', value: 'approved' },
  { label: 'All Requests', value: 'all' },
];

const NEW_STATUSES: TailoringStatus[] = ['Pending'];
const APPROVED_STATUSES: TailoringStatus[] = ['Approved', 'Confirmed', 'Scheduled'];

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-LK', { day: '2-digit', month: 'short', year: 'numeric' });
}

const PER_PAGE = 6;

export default function Tailoring() {
  const { tailoring, setTailoring } = useStore();
  const [tab, setTab] = useState('new');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [rescheduleId, setRescheduleId] = useState<string | null>(null);

  function updateStatus(id: string, status: TailoringStatus) {
    setTailoring(tailoring.map(t => t.id === id ? { ...t, status } : t));
  }

  const rescheduleTarget = tailoring.find(t => t.id === rescheduleId);

  function handleReschedule(date: string, time: string) {
    if (!rescheduleId) return;
    setTailoring(tailoring.map(t => t.id === rescheduleId ? { ...t, status: 'Rescheduled', preferredDate: date, preferredTime: time } : t));
    setRescheduleId(null);
  }

  const filtered = tailoring.filter(t => {
    const matchTab =
      tab === 'new' ? NEW_STATUSES.includes(t.status) :
      tab === 'approved' ? APPROVED_STATUSES.includes(t.status) :
      true;
    const q = search.toLowerCase();
    const matchSearch = !search || t.customerName.toLowerCase().includes(q) || t.requestNumber.toLowerCase().includes(q);
    return matchTab && matchSearch;
  });

  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <AdminLayout title="Tailoring Requests">
      <div className="page-header">
        <div>
          <h1 className="page-title">Tailoring Requests</h1>
          <p className="page-subtitle">{tailoring.filter(t => t.status === 'Pending').length} new requests pending</p>
        </div>
      </div>

      <div className="section-card">
        <div className="tab-bar">
          {TABS.map(t => (
            <button key={t.value} className={`tab-btn ${tab === t.value ? 'active' : ''}`} onClick={() => { setTab(t.value); setPage(1); }}>
              {t.label}
            </button>
          ))}
        </div>

        <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--kk-card-border)' }}>
          <SearchInput value={search} onChange={v => { setSearch(v); setPage(1); }} placeholder="Search by name or request number…" />
        </div>

        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Request #</th>
                <th>Customer</th>
                <th>Phone</th>
                <th>Preferred Date</th>
                <th>Time</th>
                <th>Note</th>
                <th>Submitted</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map(t => (
                <tr key={t.id}>
                  <td style={{ fontWeight: 500 }}>{t.requestNumber}</td>
                  <td>
                    <div style={{ fontWeight: 500 }}>{t.customerName}</div>
                    <div style={{ fontSize: 12, color: 'var(--kk-text-muted)' }}>{t.email}</div>
                  </td>
                  <td className="text-muted text-sm">{t.phone}</td>
                  <td className="text-muted">{formatDate(t.preferredDate)}</td>
                  <td className="text-muted text-sm">{t.preferredTime}</td>
                  <td style={{ maxWidth: 180 }}>
                    <span title={t.note} style={{ fontSize: 12.5, color: 'var(--kk-text-muted)', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 160 }}>
                      {t.note || '—'}
                    </span>
                  </td>
                  <td className="text-muted text-sm">{formatDate(t.submittedDate)}</td>
                  <td><StatusBadge status={t.status} /></td>
                  <td>
                    <div className="action-btns">
                      {t.status === 'Pending' && (
                        <button className="btn btn-secondary btn-sm" onClick={() => updateStatus(t.id, 'Approved')}>Approve</button>
                      )}
                      {['Pending', 'Approved', 'Confirmed', 'Scheduled'].includes(t.status) && (
                        <button className="btn btn-ghost btn-sm" onClick={() => setRescheduleId(t.id)}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                          Reschedule
                        </button>
                      )}
                      {['Approved', 'Confirmed', 'Scheduled', 'Rescheduled'].includes(t.status) && (
                        <button className="btn btn-sm" style={{ background: 'var(--kk-green-bg)', color: 'var(--kk-green)', border: '1px solid #b2dfcc' }} onClick={() => updateStatus(t.id, 'Completed')}>
                          Complete
                        </button>
                      )}
                      {!['Completed', 'Cancelled'].includes(t.status) && (
                        <button className="btn btn-danger btn-sm" onClick={() => updateStatus(t.id, 'Cancelled')}>Cancel</button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {paginated.length === 0 && <EmptyState title="No requests found" description="No tailoring requests match the current filters." />}
        </div>
        <Pagination page={page} total={filtered.length} perPage={PER_PAGE} onChange={setPage} />
      </div>

      {rescheduleId && rescheduleTarget && (
        <RescheduleModal
          requestNumber={rescheduleTarget.requestNumber}
          onConfirm={handleReschedule}
          onCancel={() => setRescheduleId(null)}
        />
      )}
    </AdminLayout>
  );
}
