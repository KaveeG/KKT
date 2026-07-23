import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminLayout from '../components/AdminLayout';
import StatusBadge from '../components/StatusBadge';
import { useStore } from '../AdminDataStore';
import type { OrderStatus, PaymentStatus } from '../../data/orders';
import '../admin.css';

function fmt(n: number) {
  return `LKR ${n.toLocaleString('en-LK', { minimumFractionDigits: 2 })}`;
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-LK', { day: '2-digit', month: 'long', year: 'numeric' });
}

const ORDER_STATUSES: OrderStatus[] = ['Pending', 'Confirmed', 'Processing', 'Delivered', 'Cancelled'];
const PAYMENT_STATUSES: PaymentStatus[] = ['Pending', 'Paid', 'Failed', 'Refunded'];

export default function OrderDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { orders, setOrders } = useStore();
  const [saved, setSaved] = useState(false);

  const order = orders.find(o => o.id === id);
  const [localStatus, setLocalStatus] = useState<OrderStatus>(order?.status ?? 'Pending');
  const [localPayment, setLocalPayment] = useState<PaymentStatus>(order?.paymentStatus ?? 'Pending');

  if (!order) {
    return (
      <AdminLayout title="Order Details">
        <button className="back-link" onClick={() => navigate('/admin/orders')}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6" /></svg>
          Back to Orders
        </button>
        <div className="section-card" style={{ padding: 32, textAlign: 'center', color: 'var(--kk-text-muted)' }}>
          Order not found.
        </div>
      </AdminLayout>
    );
  }

  function handleSave() {
    setOrders(orders.map(o => o.id === id ? { ...o, status: localStatus, paymentStatus: localPayment } : o));
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <AdminLayout title="Order Details">
      <button className="back-link" onClick={() => navigate('/admin/orders')}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6" /></svg>
        Back to Orders
      </button>

      <div className="flex-between mb-20">
        <div>
          <h1 className="page-title">{order.orderNumber}</h1>
          <p className="page-subtitle">Placed on {formatDate(order.orderDate)}</p>
        </div>
        <div className="flex-center">
          <StatusBadge status={order.status} />
        </div>
      </div>

      {saved && (
        <div style={{ background: 'var(--kk-green-bg)', border: '1px solid #b2dfcc', borderRadius: 6, padding: '12px 16px', marginBottom: 20, color: 'var(--kk-green)', fontSize: 14 }}>
          Order updated successfully.
        </div>
      )}

      <div className="detail-grid">
        {/* Customer */}
        <div className="detail-card">
          <div className="detail-card-title">Customer Information</div>
          <div className="detail-row"><span className="detail-label">Name</span><span className="detail-value">{order.customerName}</span></div>
          <div className="detail-row"><span className="detail-label">Email</span><span className="detail-value">{order.email}</span></div>
          <div className="detail-row"><span className="detail-label">Phone</span><span className="detail-value">{order.phone}</span></div>
        </div>

        {/* Delivery */}
        <div className="detail-card">
          <div className="detail-card-title">Delivery Information</div>
          <div className="detail-row"><span className="detail-label">Address</span><span className="detail-value">{order.address}</span></div>
          <div className="detail-row"><span className="detail-label">City</span><span className="detail-value">{order.city}</span></div>
          <div className="detail-row"><span className="detail-label">Postal Code</span><span className="detail-value">{order.postalCode}</span></div>
        </div>
      </div>

      {/* Products */}
      <div className="section-card mb-20">
        <div className="section-card-header">
          <span className="section-card-title">Ordered Products</span>
        </div>
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Size</th>
                <th>Colour</th>
                <th>Qty</th>
                <th>Unit Price</th>
                <th>Line Total</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item, i) => (
                <tr key={i}>
                  <td>
                    <div className="flex-center">
                      <img src={item.image} alt={item.productName} className="product-thumb"
                        onError={e => { (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40"%3E%3Crect width="40" height="40" fill="%23F0E8DD"/%3E%3C/svg%3E'; }}
                      />
                      <span style={{ fontWeight: 500 }}>{item.productName}</span>
                    </div>
                  </td>
                  <td><span className="info-tag">{item.size}</span></td>
                  <td><span className="info-tag">{item.colour}</span></td>
                  <td>{item.quantity}</td>
                  <td className="lkr">{fmt(item.unitPrice)}</td>
                  <td className="lkr" style={{ fontWeight: 500 }}>{fmt(item.unitPrice * item.quantity)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px 20px', borderTop: '1px solid var(--kk-card-border)' }}>
          <div style={{ minWidth: 280 }}>
            <div className="detail-row">
              <span className="detail-label">Subtotal</span>
              <span className="detail-value lkr">{fmt(order.subtotal)}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Delivery Charge</span>
              <span className="detail-value lkr">{order.deliveryCharge === 0 ? 'Free' : fmt(order.deliveryCharge)}</span>
            </div>
            <div className="detail-row" style={{ marginTop: 8, paddingTop: 8, borderTop: '1px solid var(--kk-card-border)' }}>
              <span style={{ fontWeight: 600, color: 'var(--kk-text)', fontSize: 14 }}>Total</span>
              <span style={{ fontWeight: 700, color: 'var(--kk-maroon)', fontSize: 16 }} className="lkr">{fmt(order.total)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="detail-grid">
        {/* Payment */}
        <div className="detail-card">
          <div className="detail-card-title">Payment Information</div>
          <div className="detail-row"><span className="detail-label">Payment Method</span><span className="detail-value">{order.paymentMethod}</span></div>
          <div className="detail-row">
            <span className="detail-label">Payment Status</span>
            <span className="detail-value"><StatusBadge status={order.paymentStatus} /></span>
          </div>
        </div>

        {/* Status Update */}
        <div className="detail-card">
          <div className="detail-card-title">Update Order Status</div>
          <div className="form-group mb-12">
            <label className="form-label" htmlFor="order-status">Order Status</label>
            <select id="order-status" className="status-select" value={localStatus} onChange={e => setLocalStatus(e.target.value as OrderStatus)} style={{ width: '100%' }}>
              {ORDER_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="form-group mb-16">
            <label className="form-label" htmlFor="pay-status">Payment Status</label>
            <select id="pay-status" className="status-select" value={localPayment} onChange={e => setLocalPayment(e.target.value as PaymentStatus)} style={{ width: '100%' }}>
              {PAYMENT_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <button className="btn btn-primary btn-sm" onClick={handleSave}>Save Changes</button>
        </div>
      </div>
    </AdminLayout>
  );
}
