import { useState, type FormEvent } from 'react';
import AdminLayout from '../components/AdminLayout';
import { useStore } from '../AdminDataStore';
import '../admin.css';

function fmt(n: number) {
  return `LKR ${n.toLocaleString('en-LK', { minimumFractionDigits: 0 })}`;
}

export default function Settings() {
  const { settings, setSettings } = useStore();
  const [form, setForm] = useState({ ...settings });
  const [saved, setSaved] = useState(false);

  function handleChange(key: keyof typeof form, value: string | number) {
    setForm(prev => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSettings({ ...form });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <AdminLayout title="Settings">
      <div className="page-header">
        <h1 className="page-title">Settings</h1>
      </div>

      {saved && (
        <div style={{ background: 'var(--kk-green-bg)', border: '1px solid #b2dfcc', borderRadius: 6, padding: '12px 16px', marginBottom: 20, color: 'var(--kk-green)', fontSize: 14 }}>
          Settings saved successfully.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Store Information */}
        <div className="section-card" style={{ padding: 28, marginBottom: 20 }}>
          <div className="settings-section-title">Store Information</div>
          <div className="form-section">
            <div className="form-group">
              <label className="form-label" htmlFor="s-name">Store Name</label>
              <input id="s-name" type="text" className="form-input" value={form.storeName} onChange={e => handleChange('storeName', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="s-email">Store Email</label>
              <input id="s-email" type="email" className="form-input" value={form.storeEmail} onChange={e => handleChange('storeEmail', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="s-phone">Store Phone</label>
              <input id="s-phone" type="tel" className="form-input" value={form.storePhone} onChange={e => handleChange('storePhone', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="s-address">Store Address</label>
              <input id="s-address" type="text" className="form-input" value={form.storeAddress} onChange={e => handleChange('storeAddress', e.target.value)} />
            </div>
          </div>
        </div>

        {/* Delivery Settings */}
        <div className="section-card" style={{ padding: 28, marginBottom: 20 }}>
          <div className="settings-section-title">Delivery Settings</div>
          <div className="form-section">
            <div className="form-group">
              <label className="form-label" htmlFor="s-delivery">Standard Delivery Charge (LKR)</label>
              <input id="s-delivery" type="number" className="form-input" value={form.standardDeliveryCharge} onChange={e => handleChange('standardDeliveryCharge', Number(e.target.value))} min="0" step="1" />
              <span style={{ fontSize: 12, color: 'var(--kk-text-muted)', marginTop: 2 }}>Currently: {fmt(form.standardDeliveryCharge)}</span>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="s-threshold">Free Delivery Threshold (LKR)</label>
              <input id="s-threshold" type="number" className="form-input" value={form.freeDeliveryThreshold} onChange={e => handleChange('freeDeliveryThreshold', Number(e.target.value))} min="0" step="1" />
              <span style={{ fontSize: 12, color: 'var(--kk-text-muted)', marginTop: 2 }}>Free delivery above {fmt(form.freeDeliveryThreshold)}</span>
            </div>
          </div>
        </div>

        {/* Currency & Payment — read-only */}
        <div className="section-card" style={{ padding: 28, marginBottom: 24 }}>
          <div className="settings-section-title">Currency & Payment</div>
          <div className="settings-info-row">
            <span className="settings-info-label">Currency</span>
            <span className="settings-info-value">{form.currency} — Sri Lankan Rupee</span>
          </div>
          <div className="settings-info-row">
            <span className="settings-info-label">Payment Method</span>
            <span className="settings-info-value">{form.paymentMethod}</span>
          </div>
          <p style={{ fontSize: 12.5, color: 'var(--kk-text-muted)', marginTop: 12, marginBottom: 0 }}>
            Payment is handled at order level. Card details are never stored or requested.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button type="submit" className="btn btn-primary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z" />
              <polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" />
            </svg>
            Save Settings
          </button>
        </div>
      </form>
    </AdminLayout>
  );
}
