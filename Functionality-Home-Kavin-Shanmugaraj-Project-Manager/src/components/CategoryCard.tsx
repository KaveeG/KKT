import categoryImg from '../imports/DesktopHome/b7b4e314cc3eb923b7fa8aac8183d1866fe76120.png';

function ChevronRight() {
  return (
    <div className="chevron-right-icon">
      <svg
        style={{ position: 'absolute', top: '25.72%', left: '35.46%', right: '36.66%', bottom: '25.88%', width: '27.88%', height: '48.4%' }}
        fill="none"
        viewBox="0 0 6.69159 11.6166"
      >
        <path
          d="M0.5 0.5L6.19 5.81L0.5 11.12"
          fill="none"
          stroke="black"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

export default function CategoryCard({ tagline, title, description }: { tagline: string; title: string; description: string }) {
  return (
    <div className="category-card">
      <div className="category-card-image">
        <img src={categoryImg} alt={tagline} />
      </div>
      <div className="category-card-content">
        <div className="category-card-top">
          <span className="category-tagline">{tagline}</span>
          <div>
            <p className="category-title">{title}</p>
            <p className="category-desc">{description}</p>
          </div>
        </div>
        <div className="category-card-actions">
          <button className="btn-shop-link">
            <span>Shop</span>
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
