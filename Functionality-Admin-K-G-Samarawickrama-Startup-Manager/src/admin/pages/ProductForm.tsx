import { useState, type FormEvent, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminLayout from '../components/AdminLayout';
import { useStore } from '../AdminDataStore';
import type { Product, Category, StockStatus } from '../../data/products';
import '../admin.css';

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'Free Size'];
const COLOUR_PRESETS = ['White', 'Black', 'Red', 'Deep Red', 'Maroon', 'Ivory', 'Cream', 'Blush Pink', 'Dusty Rose', 'Crimson',
  'Navy', 'Royal Blue', 'Sky Blue', 'Powder Blue', 'Teal', 'Turquoise', 'Peacock Green', 'Mint Green', 'Olive',
  'Yellow', 'Gold', 'Champagne', 'Orange', 'Coral', 'Amber', 'Magenta', 'Lilac', 'Lavender', 'Purple', 'Silver', 'Burgundy'];
const CATEGORIES: Category[] = ['Sarees', 'Tops', 'Frocks', 'Lehengas', 'Kurti'];
const STATUSES: StockStatus[] = ['In Stock', 'Low Stock', 'Out of Stock'];

function newId() {
  return 'P' + String(Date.now()).slice(-4);
}

interface Errors {
  name?: string;
  category?: string;
  price?: string;
  stock?: string;
}

export default function ProductForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);
  const { products, setProducts } = useStore();

  const existing = isEdit ? products.find(p => p.id === id) : undefined;

  const [name, setName] = useState(existing?.name ?? '');
  const [category, setCategory] = useState<Category>(existing?.category ?? 'Sarees');
  const [description, setDescription] = useState(existing?.description ?? '');
  const [price, setPrice] = useState(existing ? String(existing.price) : '');
  const [stock, setStock] = useState(existing ? String(existing.stock) : '');
  const [sizes, setSizes] = useState<string[]>(existing?.sizes ?? []);
  const [colours, setColours] = useState<string[]>(existing?.colours ?? []);
  const [status, setStatus] = useState<StockStatus>(existing?.status ?? 'In Stock');
  const [imagePreviews, setImagePreviews] = useState<string[]>(existing ? [existing.image] : []);
  const [errors, setErrors] = useState<Errors>({});
  const [saved, setSaved] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  function toggleSize(s: string) {
    setSizes(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);
  }

  function toggleColour(c: string) {
    setColours(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);
  }

  function handleImages(files: FileList | null) {
    if (!files) return;
    Array.from(files).forEach(f => {
      const reader = new FileReader();
      reader.onload = e => {
        setImagePreviews(prev => [...prev, e.target?.result as string]);
      };
      reader.readAsDataURL(f);
    });
  }

  function validate(): boolean {
    const e: Errors = {};
    if (!name.trim()) e.name = 'Product name is required.';
    if (!price || isNaN(Number(price)) || Number(price) <= 0) e.price = 'Please enter a valid price.';
    if (!stock || isNaN(Number(stock)) || Number(stock) < 0) e.stock = 'Please enter a valid stock quantity.';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const p: Product = {
      id: existing?.id ?? newId(),
      name: name.trim(),
      category,
      description: description.trim(),
      price: Number(price),
      stock: Number(stock),
      status,
      sizes,
      colours,
      image: imagePreviews[0] || 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=120&h=120&fit=crop&auto=format',
    };

    if (isEdit) {
      setProducts(products.map(x => x.id === id ? p : x));
    } else {
      setProducts([p, ...products]);
    }

    setSaved(true);
    setTimeout(() => navigate('/admin/products'), 800);
  }

  const title = isEdit ? 'Edit Product' : 'Add Product';

  return (
    <AdminLayout title={title}>
      <button className="back-link" onClick={() => navigate('/admin/products')}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6" /></svg>
        Back to Products
      </button>

      <div className="page-header">
        <h1 className="page-title">{title}</h1>
      </div>

      {saved && (
        <div style={{ background: 'var(--kk-green-bg)', border: '1px solid #b2dfcc', borderRadius: 6, padding: '12px 16px', marginBottom: 20, color: 'var(--kk-green)', fontSize: 14 }}>
          Product {isEdit ? 'updated' : 'added'} successfully. Redirecting…
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="section-card" style={{ padding: 28, marginBottom: 20 }}>
          <div className="settings-section-title">Basic Information</div>
          <div className="form-section">
            <div className="form-group span-2">
              <label className="form-label" htmlFor="pname">Product Name <span className="required">*</span></label>
              <input id="pname" type="text" className={`form-input ${errors.name ? 'error' : ''}`} value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Kanjivaram Silk Saree" />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="pcat">Category <span className="required">*</span></label>
              <select id="pcat" className="form-select" value={category} onChange={e => setCategory(e.target.value as Category)}>
                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="pstatus">Status <span className="required">*</span></label>
              <select id="pstatus" className="form-select" value={status} onChange={e => setStatus(e.target.value as StockStatus)}>
                {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="pprice">Price (LKR) <span className="required">*</span></label>
              <input id="pprice" type="number" className={`form-input ${errors.price ? 'error' : ''}`} value={price} onChange={e => setPrice(e.target.value)} placeholder="e.g. 6500" min="0" step="0.01" />
              {errors.price && <span className="form-error">{errors.price}</span>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="pstock">Stock Quantity <span className="required">*</span></label>
              <input id="pstock" type="number" className={`form-input ${errors.stock ? 'error' : ''}`} value={stock} onChange={e => setStock(e.target.value)} placeholder="e.g. 10" min="0" step="1" />
              {errors.stock && <span className="form-error">{errors.stock}</span>}
            </div>

            <div className="form-group span-2">
              <label className="form-label" htmlFor="pdesc">Description</label>
              <textarea id="pdesc" className="form-textarea" value={description} onChange={e => setDescription(e.target.value)} placeholder="Describe the product…" rows={3} />
            </div>
          </div>
        </div>

        <div className="section-card" style={{ padding: 28, marginBottom: 20 }}>
          <div className="settings-section-title">Sizes & Colours</div>
          <div className="form-section">
            <div className="form-group">
              <span className="form-label">Available Sizes</span>
              <div className="checkbox-group">
                {SIZES.map(s => (
                  <button key={s} type="button" className={`chip ${sizes.includes(s) ? 'selected' : ''}`} onClick={() => toggleSize(s)}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <span className="form-label">Available Colours</span>
              <div className="checkbox-group">
                {COLOUR_PRESETS.map(c => (
                  <button key={c} type="button" className={`chip ${colours.includes(c) ? 'selected' : ''}`} onClick={() => toggleColour(c)}>
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="section-card" style={{ padding: 28, marginBottom: 24 }}>
          <div className="settings-section-title">Product Images</div>
          <div
            className="image-drop-zone"
            onClick={() => fileRef.current?.click()}
            onDragOver={e => e.preventDefault()}
            onDrop={e => { e.preventDefault(); handleImages(e.dataTransfer.files); }}
            role="button"
            tabIndex={0}
            aria-label="Upload product images"
            onKeyDown={e => e.key === 'Enter' && fileRef.current?.click()}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--kk-text-muted)" strokeWidth="1.5" style={{ marginBottom: 8 }}>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            <p style={{ fontSize: 14, color: 'var(--kk-text-muted)', margin: 0 }}>Click or drag images here to upload</p>
            <p style={{ fontSize: 12, color: 'var(--kk-text-muted)', marginTop: 4, marginBottom: 0 }}>Frontend preview only</p>
          </div>
          <input ref={fileRef} type="file" accept="image/*" multiple style={{ display: 'none' }} onChange={e => handleImages(e.target.files)} />
          {imagePreviews.length > 0 && (
            <div className="image-previews">
              {imagePreviews.map((src, i) => (
                <img key={i} src={src} alt={`Preview ${i + 1}`} className="image-preview-thumb"
                  onError={e => { (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="72" height="72"%3E%3Crect width="72" height="72" fill="%23F0E8DD"/%3E%3C/svg%3E'; }}
                />
              ))}
            </div>
          )}
        </div>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
          <button type="button" className="btn btn-secondary" onClick={() => navigate('/admin/products')}>Cancel</button>
          <button type="submit" className="btn btn-primary">
            {isEdit ? 'Update Product' : 'Save Product'}
          </button>
        </div>
      </form>
    </AdminLayout>
  );
}
