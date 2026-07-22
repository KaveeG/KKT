import ctaImg from '../imports/DesktopHome/d50ffb0afa333613e155822dc6b3dfe63f150a74.png';

export default function TailoringSection() {
  return (
    <section className="section-cta">
      <div className="section-cta-bg">
        <img src={ctaImg} alt="" />
        <div className="section-cta-overlay" />
      </div>
      <div className="section-cta-inner">
        <div className="section-cta-container">
          <div className="section-cta-content">
            <div className="cta-heading-group">
              <h2 className="cta-heading">Join our community</h2>
              <p className="cta-subheading">
                Sign up for early access to new collections, private sales, and the stories behind the seams.
              </p>
            </div>
            <div className="cta-form-wrap">
              <div className="cta-form">
                <input
                  className="cta-input"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="btn-subscribe">Subscribe</button>
              </div>
              <p className="cta-terms">
                By clicking Subscribe you agree with our Terms and Conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
