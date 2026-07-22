import logoImg from '../imports/DesktopHome/b180ac54113cebf28684a3119ca0a4457cec4633.png';

function Logo() {
  return (
    <div className="kk-logo">
      <svg className="kk-logo-circles" fill="none" viewBox="0 0 41.5122 41.5122">
        <circle cx="20.7561" cy="20.7561" fill="white" r="20.1921" stroke="#D10743" strokeWidth="1.12805" />
        <circle cx="20.756" cy="20.7573" fill="white" r="18.9461" stroke="#D10743" strokeWidth="0.479648" />
      </svg>
      <div className="kk-logo-image-wrap">
        <div className="kk-logo-image-inner">
          <img className="kk-logo-img" src={logoImg} alt="" />
        </div>
      </div>
      <div className="kk-logo-text">
        <p>KK</p>
        <p>TAILORS</p>
      </div>
    </div>
  );
}

function ChevronDown() {
  return (
    <svg className="chevron-down-icon" fill="none" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
        fill="black"
      />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header-left">
        <Logo />
        <nav className="site-nav">
          <span className="nav-link">Home</span>
          <span className="nav-link">Shop</span>
          <span className="nav-link">New arrivals</span>
          <div className="nav-link-dropdown">
            <span className="nav-link">Dresses</span>
            <ChevronDown />
          </div>
        </nav>
      </div>
      <div className="site-header-actions">
        <button className="btn-outline">Login</button>
        <button className="btn-solid">Cart</button>
      </div>
    </header>
  );
}
