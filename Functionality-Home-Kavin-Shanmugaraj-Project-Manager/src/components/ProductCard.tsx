import productImg from '../imports/DesktopHome/218e6913b615945832a6d17bca2f30717844024d.png';

export default function ProductCard({ name, color, price }: { name: string; color: string; price: string }) {
  return (
    <div className="product-card">
      <div className="product-card-image">
        <img src={productImg} alt={name} />
      </div>
      <div className="product-card-info">
        <div>
          <p className="product-card-name">{name}</p>
          <p className="product-card-color">{color}</p>
        </div>
        <p className="product-card-price">{price}</p>
      </div>
    </div>
  );
}
