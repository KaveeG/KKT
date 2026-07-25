import { useState } from "react";
import imgLogo from "@/imports/DesktopProducts-1/b180ac54113cebf28684a3119ca0a4457cec4633.png";
import imgProduct from "@/imports/DesktopProducts-1/218e6913b615945832a6d17bca2f30717844024d.png";

// ─── Data ────────────────────────────────────────────────────────────────────

const products = [
  { id: 1, name: "Silk Saree", color: "Plum", category: "Sarees", price: 4999, image: imgProduct },
  { id: 2, name: "Cotton Saree", color: "Cream", category: "Sarees", price: 3499, image: imgProduct },
  { id: 3, name: "Linen Saree", color: "Ecru", category: "Sarees", price: 3999, image: imgProduct },
  { id: 4, name: "Chiffon Saree", color: "Rose", category: "Sarees", price: 4499, image: imgProduct },
  { id: 5, name: "Georgette Saree", color: "Teal", category: "Sarees", price: 5299, image: imgProduct },
  { id: 6, name: "Banarasi Saree", color: "Gold", category: "Sarees", price: 6999, image: imgProduct },
  { id: 7, name: "Kanjivaram Saree", color: "Crimson", category: "Sarees", price: 7999, image: imgProduct },
  { id: 8, name: "Tussar Saree", color: "Ivory", category: "Sarees", price: 4299, image: imgProduct },
];

function formatPrice(price: number) {
  return `Rs ${price.toLocaleString("en-IN")}`;
}

// ─── Logo ─────────────────────────────────────────────────────────────────────

function Logo() {
  return (
    <div className="h-[44px] relative shrink-0 w-[59px]">
      <svg className="absolute left-[2.65px] top-0 size-[41.5px]" fill="none" viewBox="0 0 41.5122 41.5122">
        <circle cx="20.7561" cy="20.7561" fill="white" stroke="#D10743" strokeWidth="1.12805" r="20.1921" />
        <circle cx="20.756" cy="20.7573" fill="white" stroke="#D10743" strokeWidth="0.479648" r="18.9461" />
      </svg>
      <div className="absolute left-0 top-[1.71px] flex h-[42px] w-[59px] items-center justify-center">
        <div className="rotate-[10.83deg] [transform:rotate(10.83deg)_skewX(-11.24deg)_scaleY(0.98)]">
          <img alt="" className="h-[36px] w-[46px] object-cover" src={imgLogo} />
        </div>
      </div>
      <div
        className="absolute text-[#d10743] text-center"
        style={{
          fontFamily: "'Gugi', sans-serif",
          fontSize: "5.15px",
          letterSpacing: "0.2575px",
          left: "23.47px",
          top: "19.42px",
          transform: "translate(-50%, -50%)",
          width: "27px",
          lineHeight: 1.1,
        }}
      >
        <div>KK</div>
        <div>TAILORS</div>
      </div>
    </div>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────

function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="flex items-center justify-between px-[80px] py-3 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-6">
          <Logo />
          <nav className="flex items-center gap-8">
            {["Home", "Shop", "New arrivals"].map((label) => (
              <span
                key={label}
                className="text-[16px] text-black cursor-pointer hover:opacity-70 transition-opacity"
                style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
              >
                {label}
              </span>
            ))}
            <span
              className="flex items-center gap-1 text-[16px] text-black cursor-pointer hover:opacity-70 transition-opacity"
              style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
            >
              Dresses
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path
                  clipRule="evenodd"
                  d="M12.3977 15.6629C12.178 15.8826 11.8219 15.8826 11.6022 15.6629L5.86739 9.92804C5.64772 9.70837 5.64772 9.35227 5.86739 9.13259L6.13256 8.86739C6.35222 8.64772 6.70838 8.64772 6.92805 8.86739L12 13.9393L17.0719 8.86739C17.2916 8.64772 17.6477 8.64772 17.8674 8.86739L18.1326 9.13259C18.3522 9.35227 18.3522 9.70837 18.1326 9.92804L12.3977 15.6629Z"
                  fill="black"
                  fillRule="evenodd"
                />
              </svg>
            </span>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="px-5 py-2 text-[16px] text-black border border-black hover:bg-gray-50 transition-colors"
            style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
          >
            Login
          </button>
          <button
            className="px-5 py-2 text-[16px] text-white bg-black border border-black hover:bg-gray-800 transition-colors"
            style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
          >
            Cart
          </button>
        </div>
      </div>
    </header>
  );
}

// ─── Product Card ─────────────────────────────────────────────────────────────

function ProductCard({
  product,
  onClick,
}: {
  product: (typeof products)[0];
  onClick: () => void;
}) {
  return (
    <div
      className="flex flex-col gap-4 cursor-pointer group"
      onClick={onClick}
    >
      <div
        className="relative rounded-[15px] overflow-hidden bg-[rgba(247,247,249,0.6)]"
        style={{ height: "364px", width: "100%" }}
      >
        <img
          alt={product.name}
          className="absolute h-[96%] max-w-none"
          style={{ left: "10.73%", top: "3.87%", width: "79.03%" }}
          src={product.image}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <p
            className="text-[18px] text-black font-semibold"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            {product.name}
          </p>
          <p
            className="text-[14px] text-black font-normal"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            {product.color}
          </p>
        </div>
        <p
          className="text-[20px] text-black font-semibold"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          {formatPrice(product.price)}
        </p>
      </div>
    </div>
  );
}

// ─── Products Page ────────────────────────────────────────────────────────────

function ProductsPage({ onSelect }: { onSelect: (id: number) => void }) {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="flex flex-col items-center gap-[80px] px-[64px] py-[80px] max-w-[1440px] mx-auto">
        {/* Title */}
        <div className="flex flex-col items-center gap-6 max-w-[768px] w-full text-center">
          <p
            className="text-[16px] text-black font-semibold"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Loved
          </p>
          <div className="flex flex-col gap-6 w-full">
            <h1
              className="text-[48px] text-black font-bold leading-[1.2]"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              Sarees
            </h1>
            <p
              className="text-[18px] text-black font-normal leading-[1.5]"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              The pieces you return for. Season after season.
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex flex-col gap-16 w-full max-w-[1280px]">
          {/* Row 1 */}
          <div className="grid grid-cols-4 gap-8">
            {products.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} onClick={() => onSelect(p.id)} />
            ))}
          </div>
          {/* Row 2 */}
          <div className="grid grid-cols-4 gap-8">
            {products.slice(4, 8).map((p) => (
              <ProductCard key={p.id} product={p} onClick={() => onSelect(p.id)} />
            ))}
          </div>
        </div>

        {/* View all */}
        <button
          className="px-6 py-3 text-[16px] text-black border border-black hover:bg-gray-50 transition-colors"
          style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
        >
          View all
        </button>
      </div>
    </div>
  );
}

// ─── Option Button ────────────────────────────────────────────────────────────

function OptionButton({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-10 py-[10px] rounded-[10px] text-[16px] leading-[1.5] transition-colors ${
        selected
          ? "bg-black text-white"
          : "bg-white text-black border border-[#ccc] hover:border-black"
      }`}
      style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
    >
      {label}
    </button>
  );
}

// ─── Product Details Page ─────────────────────────────────────────────────────

function ProductDetailsPage({
  product,
  onBack,
}: {
  product: (typeof products)[0];
  onBack: () => void;
}) {
  const [selectedColor, setSelectedColor] = useState("Black");
  const [selectedSize, setSelectedSize] = useState("S");
  const colors = ["Black", "Red", "Blue", "Yellow"];
  const sizes = ["S", "M", "L", "XL"];

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div
        className="flex flex-col gap-[60px] px-[80px] py-[50px] max-w-[1440px] mx-auto"
      >
        {/* Back link */}
        <button
          onClick={onBack}
          className="self-start text-[14px] text-gray-500 hover:text-black transition-colors flex items-center gap-1"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          ← Back to products
        </button>

        {/* Main content */}
        <div className="flex gap-[60px] items-start">
          {/* Left: thumbnails + main image */}
          <div className="flex gap-[40px] items-center shrink-0">
            {/* Thumbnails */}
            <div className="flex flex-col justify-between h-[291px] gap-4">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="relative rounded-[10px] size-[60px] overflow-hidden bg-[#bdbdbd] cursor-pointer hover:ring-2 hover:ring-black transition-all"
                >
                  <img
                    alt=""
                    className="absolute max-w-none"
                    style={{
                      height: "96.19%",
                      left: "10.73%",
                      top: "3.87%",
                      width: "79.03%",
                    }}
                    src={product.image}
                  />
                </div>
              ))}
            </div>
            {/* Main image */}
            <div
              className="relative rounded-[20px] overflow-hidden bg-[#999] shrink-0"
              style={{ width: "491px", height: "591px" }}
            >
              <img
                alt={product.name}
                className="absolute max-w-none"
                style={{
                  height: "96.19%",
                  left: "10.73%",
                  top: "3.87%",
                  width: "79.03%",
                }}
                src={product.image}
              />
            </div>
          </div>

          {/* Right: details */}
          <div className="flex flex-col gap-[40px] w-[495px]">
            {/* Color & Size & Stock */}
            <div className="flex flex-col gap-4 w-full">
              {/* Color */}
              <div className="flex flex-col gap-[10px] w-full">
                <p
                  className="text-[16px] text-black leading-[1.5]"
                  style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
                >
                  Color
                </p>
                <div className="flex gap-2 flex-wrap">
                  {colors.map((c) => (
                    <OptionButton
                      key={c}
                      label={c}
                      selected={selectedColor === c}
                      onClick={() => setSelectedColor(c)}
                    />
                  ))}
                </div>
              </div>

              {/* Size */}
              <div className="flex flex-col gap-[10px] w-full">
                <p
                  className="text-[16px] text-black leading-[1.5]"
                  style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
                >
                  Size
                </p>
                <div className="flex gap-[9px]">
                  {sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`w-[60px] py-[10px] rounded-[10px] text-[16px] leading-[1.5] transition-colors ${
                        selectedSize === s
                          ? "bg-black text-white"
                          : "bg-white text-black border border-[#ccc] hover:border-black"
                      }`}
                      style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Stock */}
              <div className="flex items-center gap-[6px]">
                <div className="size-[14px] rounded-full bg-[#29EB1F] shrink-0" />
                <p
                  className="text-[#29eb1f] text-[16px] leading-[1.5] whitespace-nowrap"
                  style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
                >
                  In stock
                </p>
              </div>
            </div>

            {/* Price & Buttons & Description */}
            <div className="flex flex-col gap-[50px] w-full">
              {/* Price + CTA */}
              <div className="flex flex-col gap-5 w-full">
                <p
                  className="text-[25px] text-black font-semibold leading-[1.5]"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  {formatPrice(product.price)}
                </p>
                <div className="flex flex-col gap-[15px] w-full">
                  <button
                    className="w-full py-[10px] rounded-[10px] text-[16px] text-black bg-white border border-[#999] hover:bg-gray-50 transition-colors"
                    style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
                  >
                    Add to cart
                  </button>
                  <button
                    className="w-full py-[10px] rounded-[10px] text-[16px] text-white bg-black hover:bg-gray-800 transition-colors"
                    style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
                  >
                    Buy it now
                  </button>
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-5">
                <p
                  className="text-[16px] text-black leading-[1.5]"
                  style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
                >
                  DESCRIPTION
                </p>
                <div
                  className="flex flex-col gap-[6px] text-[16px] text-black"
                  style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400, lineHeight: 1.5 }}
                >
                  {[
                    ". 60% COTTON 40% POLYESTER",
                    ". ULTRA SOFT FLEECE FABRIC",
                    ". CONTRAST PANELS",
                    ". MINIMAL BRANDING",
                    ". CONTRAST PIPING DETAILING",
                  ].map((line) => (
                    <p key={line} className="whitespace-pre">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selected = products.find((p) => p.id === selectedId) ?? null;

  if (selected) {
    return (
      <ProductDetailsPage
        product={selected}
        onBack={() => setSelectedId(null)}
      />
    );
  }

  return (
    <ProductsPage onSelect={(id) => setSelectedId(id)} />
  );
}
