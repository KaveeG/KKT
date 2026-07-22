import ProductCard from './ProductCard';
import Header from './Header';

const FEATURED_PRODUCTS = [
  { id: 1, name: 'Wool blazer', color: 'Charcoal', price: '$450' },
  { id: 2, name: 'Wool blazer', color: 'Charcoal', price: '$450' },
  { id: 3, name: 'Linen dress', color: 'Ecru', price: '$320' },
  { id: 4, name: 'Cashmere crew', color: 'Camel', price: '$275' },
];

function SectionTitle({ tagline, heading, subheading }: { tagline: string; heading: string; subheading: string }) {
  return (
    <div className="section-title">
      <div className="section-tagline">
        <span className="tagline-text">{tagline}</span>
      </div>
      <div className="section-heading-group">
        <h2 className="section-heading">{heading}</h2>
        <p className="section-subheading">{subheading}</p>
      </div>
    </div>
  );
}

function ProductGrid({ products }: { products: Array<{ id: number; name: string; color: string; price: string }> }) {
  const row1 = products.slice(0, 4);
  const row2 = products.slice(4, 8);
  return (
    <div className="product-grid">
      <div className="product-row">
        {row1.map((p) => (
          <ProductCard key={p.id} name={p.name} color={p.color} price={p.price} />
        ))}
      </div>
      <div className="product-row">
        {row2.map((p) => (
          <ProductCard key={p.id} name={p.name} color={p.color} price={p.price} />
        ))}
      </div>
    </div>
  );
}

const FEATURED_ROWS = [
  ...FEATURED_PRODUCTS,
  ...FEATURED_PRODUCTS.map((p) => ({ ...p, id: p.id + 10 })),
];

const BEST_ROWS = [
  ...FEATURED_PRODUCTS.map((p) => ({ ...p, id: p.id + 20 })),
  ...FEATURED_PRODUCTS.map((p) => ({ ...p, id: p.id + 30 })),
];

export function FeaturedSection() {
  return (
    <section className="section-featured">
      <div className="section-inner">
        <Header />
        <div className="section-container">
          <SectionTitle
            tagline="Curated"
            heading="Featured"
            subheading="The pieces we are wearing now. Essential shapes, refined."
          />
          <ProductGrid products={FEATURED_ROWS} />
        </div>
        <div className="section-actions">
          <button className="btn-view-all">View all</button>
        </div>
      </div>
    </section>
  );
}

export function BestSellersSection() {
  return (
    <section className="section-best">
      <div className="section-inner">
        <div className="section-container">
          <SectionTitle
            tagline="Loved"
            heading="Best"
            subheading="The pieces you return for. Season after season."
          />
          <ProductGrid products={BEST_ROWS} />
        </div>
        <div className="section-actions">
          <button className="btn-view-all">View all</button>
        </div>
      </div>
    </section>
  );
}
