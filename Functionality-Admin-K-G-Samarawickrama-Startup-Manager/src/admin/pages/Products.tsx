import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../components/AdminLayout';
import StatusBadge from '../components/StatusBadge';
import SearchInput from '../components/SearchInput';
import FilterSelect from '../components/FilterSelect';
import DeleteConfirmationModal from '../components/DeleteConfirmationModal';
import EmptyState from '../components/EmptyState';
import Pagination from '../components/Pagination';
import { useStore } from '../AdminDataStore';
import type { Category, StockStatus } from '../../data/products';
import '../admin.css';

const CATEGORIES: { label: string; value: string }[] = [
  { label: 'All Categories', value: '' },
  { label: 'Sarees', value: 'Sarees' },
  { label: 'Tops', value: 'Tops' },
  { label: 'Frocks', value: 'Frocks' },
  { label: 'Lehengas', value: 'Lehengas' },
  { label: 'Kurti', value: 'Kurti' },
];

const STOCK_OPTIONS: { label: string; value: string }[] = [
  { label: 'All Stock', value: '' },
  { label: 'In Stock', value: 'In Stock' },
  { label: 'Low Stock', value: 'Low Stock' },
  { label: 'Out of Stock', value: 'Out of Stock' },
];

function fmt(n: number) {
  return `LKR ${n.toLocaleString('en-LK', { minimumFractionDigits: 2 })}`;
}

const PER_PAGE = 8;

export default function Products() {
  const navigate = useNavigate();
  const { products, setProducts } = useStore();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');
  const [page, setPage] = useState(1);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const filtered = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCat = !category || p.category === (category as Category);
    const matchStock = !stock || p.status === (stock as StockStatus);
    return matchSearch && matchCat && matchStock;
  });

  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const deleteTarget = products.find(p => p.id === deleteId);

  function handleDelete() {
    if (!deleteId) return;
    setProducts(products.filter(p => p.id !== deleteId));
    setDeleteId(null);
  }

  return (
    <AdminLayout title="Products">
      <div className="page-header">
        <div>
          <h1 className="page-title">Product Management</h1>
          <p className="page-subtitle">{products.length} products in catalogue</p>
        </div>
        <button className="btn btn-primary" onClick={() => navigate('/admin/products/add')}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Add Product
        </button>
      </div>

      <div className="section-card">
        <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--kk-card-border)' }}>
          <div className="filter-bar" style={{ marginBottom: 0 }}>
            <SearchInput value={search} onChange={v => { setSearch(v); setPage(1); }} placeholder="Search products…" />
            <FilterSelect value={category} onChange={v => { setCategory(v); setPage(1); }} options={CATEGORIES} label="Filter by category" />
            <FilterSelect value={stock} onChange={v => { setStock(v); setPage(1); }} options={STOCK_OPTIONS} label="Filter by stock" />
          </div>
        </div>

        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock Qty</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map(p => (
                <tr key={p.id}>
                  <td>
                    <div className="flex-center">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="product-thumb"
                        onError={e => { (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40"%3E%3Crect width="40" height="40" fill="%23F0E8DD"/%3E%3C/svg%3E'; }}
                      />
                      <div>
                        <div style={{ fontWeight: 500, fontSize: 14 }}>{p.name}</div>
                        <div style={{ fontSize: 12, color: 'var(--kk-text-muted)' }}>{p.id}</div>
                      </div>
                    </div>
                  </td>
                  <td><span className="info-tag">{p.category}</span></td>
                  <td className="lkr" style={{ fontWeight: 500 }}>{fmt(p.price)}</td>
                  <td style={{ fontWeight: 500 }}>{p.stock}</td>
                  <td><StatusBadge status={p.status} /></td>
                  <td>
                    <div className="flex-center">
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => navigate(`/admin/products/${p.id}/edit`)}
                        aria-label={`Edit ${p.name}`}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5Z" />
                        </svg>
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => setDeleteId(p.id)}
                        aria-label={`Delete ${p.name}`}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                          <path d="M10 11v6M14 11v6" /><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {paginated.length === 0 && <EmptyState title="No products found" description="Try adjusting your search or filter criteria." />}
        </div>
        <Pagination page={page} total={filtered.length} perPage={PER_PAGE} onChange={setPage} />
      </div>

      {deleteId && deleteTarget && (
        <DeleteConfirmationModal
          itemName={deleteTarget.name}
          onConfirm={handleDelete}
          onCancel={() => setDeleteId(null)}
        />
      )}
    </AdminLayout>
  );
}
