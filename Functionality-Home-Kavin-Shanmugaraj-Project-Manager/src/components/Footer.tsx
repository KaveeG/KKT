import logoImg from '../imports/DesktopHome/b180ac54113cebf28684a3119ca0a4457cec4633.png';

function FooterLogo() {
  return (
    <div className="footer-logo-large" style={{ flexShrink: 0 }}>
      <svg className="footer-logo-circles" fill="none" viewBox="0 0 61.8113 61.8112">
        <circle cx="30.9056" cy="30.9056" fill="white" r="30.0658" stroke="#D10743" strokeWidth="1.67965" />
        <circle cx="30.9056" cy="30.9056" fill="white" r="28.2105" stroke="#D10743" strokeWidth="0.714189" />
      </svg>
      <div className="footer-logo-image-wrap">
        <div className="footer-logo-image-inner">
          <img className="footer-logo-img" src={logoImg} alt="KK Tailors" />
        </div>
      </div>
      <div className="footer-logo-text">
        <p>KK</p>
        <p>TAILORS</p>
      </div>
    </div>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="footer-col">
      <p className="footer-col-title">{title}</p>
      <div className="footer-col-links">
        {links.map((link: string) => (
          <div key={link} className="footer-link">
            <span>{link}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="footer-social">
      {/* Facebook */}
      <div className="social-icon">
        <svg viewBox="0 0 20 20" fill="none" style={{ position: 'absolute', top: '9.34%', left: '8.33%', right: '8.33%', bottom: '7.32%', width: '83.34%', height: '83.34%' }}>
          <path d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878V12.89h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" fill="white" />
        </svg>
      </div>
      {/* Instagram */}
      <div className="social-icon">
        <svg viewBox="0 0 18 18" fill="none" style={{ position: 'absolute', top: '13.51%', left: '12.5%', right: '12.5%', bottom: '11.49%', width: '75%', height: '75%' }}>
          <path fillRule="evenodd" clipRule="evenodd" d="M9 0C6.556 0 6.25.01 5.29.054 4.33.098 3.677.25 3.105.472a4.5 4.5 0 00-1.63 1.062 4.514 4.514 0 00-1.062 1.63C.25 3.678.097 4.33.054 5.29.01 6.25 0 6.556 0 9s.01 2.75.054 3.71c.044.96.196 1.612.418 2.184a4.5 4.5 0 001.062 1.63 4.514 4.514 0 001.63 1.062c.572.222 1.224.374 2.184.418C6.25 17.99 6.556 18 9 18s2.75-.01 3.71-.054c.96-.044 1.612-.196 2.184-.418a4.5 4.5 0 001.63-1.062 4.514 4.514 0 001.062-1.63c.222-.572.374-1.224.418-2.184C17.99 11.75 18 11.444 18 9s-.01-2.75-.054-3.71c-.044-.96-.196-1.612-.418-2.184a4.514 4.514 0 00-1.062-1.63A4.5 4.5 0 0014.894.472C14.322.25 13.67.098 12.71.054 11.75.01 11.444 0 9 0zm0 1.621c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.671.31.42.163.72.358 1.035.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.671a2.789 2.789 0 01-.673 1.035 2.789 2.789 0 01-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.671-.31a2.789 2.789 0 01-1.035-.673 2.789 2.789 0 01-.673-1.035c-.123-.317-.27-.794-.31-1.671C1.63 11.688 1.621 11.404 1.621 9s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.671.163-.42.358-.72.673-1.035A2.789 2.789 0 013.691.984c.317-.123.794-.27 1.671-.31C6.312 1.63 6.597 1.621 9 1.621zm0 2.758A4.621 4.621 0 1013.621 9 4.621 4.621 0 009 4.379zm0 7.621A3 3 0 116 9a3 3 0 013 3zm5.884-7.804a1.08 1.08 0 11-1.08-1.08 1.08 1.08 0 011.08 1.08z" fill="white" />
        </svg>
      </div>
      {/* X / Twitter */}
      <div className="social-icon">
        <svg viewBox="0 0 18 16" fill="none" style={{ position: 'absolute', top: '17.68%', left: '12.5%', right: '12.5%', bottom: '15.66%', width: '75%', height: '66.66%' }}>
          <path d="M14.258 0h2.765L10.87 6.786 18 16h-5.958L7.93 10.403 2.846 16H.082l6.58-7.528L0 0h6.108l3.558 4.705L14.258 0zm-.972 14.374h1.532L4.78 1.579H3.135L13.286 14.374z" fill="white" />
        </svg>
      </div>
      {/* LinkedIn */}
      <div className="social-icon">
        <svg viewBox="0 0 18 18" fill="none" style={{ position: 'absolute', top: '13.51%', left: '12.5%', right: '12.5%', bottom: '11.49%', width: '75%', height: '75%' }}>
          <path fillRule="evenodd" clipRule="evenodd" d="M0 1.146C0 .513.526 0 1.175 0h15.65C17.474 0 18 .513 18 1.146v15.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 18 0 17.487 0 16.854V1.146zM5.403 15.12V6.95H2.68v8.17h2.723zm-1.362-9.29a1.587 1.587 0 100-3.174 1.587 1.587 0 000 3.174zM15.12 15.12h-2.722v-4.008c0-1.017-.018-2.323-1.415-2.323-1.416 0-1.633 1.105-1.633 2.248v4.083H6.628V6.95H9.24v1.127h.037c.36-.68 1.24-1.397 2.554-1.397 2.732 0 3.236 1.798 3.236 4.136v4.304h.053z" fill="white" />
        </svg>
      </div>
      {/* YouTube */}
      <div className="social-icon">
        <svg viewBox="0 0 20.0141 14.012" fill="none" style={{ position: 'absolute', top: '20.83%', left: '8.27%', right: '8.33%', bottom: '20.78%', width: '83.4%', height: '58.39%' }}>
          <path d="M19.612 2.188a2.507 2.507 0 00-1.763-1.773C16.254 0 10.007 0 10.007 0S3.76 0 2.165.415A2.507 2.507 0 00.402 2.188C0 3.804 0 7.006 0 7.006s0 3.202.402 4.818a2.507 2.507 0 001.763 1.773C3.76 14.012 10.007 14.012 10.007 14.012s6.247 0 7.842-.415a2.507 2.507 0 001.763-1.773c.402-1.616.402-4.818.402-4.818s0-3.202-.402-4.818zM7.974 9.956V4.056l5.25 2.95-5.25 2.95z" fill="white" />
        </svg>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-container">
          {/* Newsletter */}
          <div className="footer-newsletter">
            <div className="footer-newsletter-content">
              <p className="footer-newsletter-title">Join our newsletter</p>
              <p className="footer-newsletter-desc">Receive early access to new collections and private sales.</p>
            </div>
            <div className="footer-newsletter-actions">
              <div className="footer-form">
                <input className="footer-input" type="email" placeholder="Enter your email" />
                <button className="btn-footer-subscribe">Subscribe</button>
              </div>
              <p className="footer-privacy">By subscribing you agree to with our Privacy Policy</p>
            </div>
          </div>

          {/* Links */}
          <div className="footer-links">
            <FooterLogo />
            <FooterCol
              title="Shop"
              links={['New arrivals', 'Dresses', 'Tops', 'Bottoms', 'Sale']}
            />
            <FooterCol
              title="Customer service"
              links={['Contact', 'Shipping', 'Returns', 'FAQ', 'Size guide']}
            />
            <FooterCol
              title="About"
              links={['Our story', 'Sustainability', 'Careers', 'Press', 'Stores']}
            />
            <FooterCol
              title="Follow"
              links={['Instagram', 'Pinterest', 'Facebook', 'TikTok', 'X']}
            />
            <FooterCol
              title="Account"
              links={['My account', 'Order status', 'Wishlist', 'Gift cards', 'Loyalty program']}
            />
          </div>

          {/* Credits */}
          <div className="footer-credits">
            <hr className="footer-divider" />
            <div className="footer-credits-row">
              <div className="footer-credits-text">
                <span>© 2025 ELEVÉ. All rights reserved.</span>
                <span className="footer-credits-link">Privacy policy</span>
                <span className="footer-credits-link">Terms of service</span>
                <span className="footer-credits-link">Cookies settings</span>
              </div>
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
