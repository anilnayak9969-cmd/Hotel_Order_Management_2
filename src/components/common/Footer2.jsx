// import React from 'react'

// function Footer2() {
//   return (
//     <footer className="site-footer footer-variant-two mt-5">
//       <div className="container py-5">
//         <div className="row g-4 align-items-start">
//           <div className="col-12 col-lg-5">
//             <span className="footer-eyebrow">Launch Faster</span>
//             <h2 className="footer-hero mt-3">Ready to build your next digital product?</h2>
//             <p className="footer-text mt-3">
//               Strategy, branding, UI design, and development in one place for
//               teams that want momentum.
//             </p>
//             <div className="d-flex flex-wrap gap-2 mt-4">
//               <a className="btn btn-light px-4" href="#register">
//                 Register
//               </a>
//               <a className="btn btn-outline-light px-4" href="#contact">
//                 Book a Call
//               </a>
//             </div>
//           </div>

//           <div className="col-6 col-md-4 col-lg-2">
//             <h5 className="footer-title">Product</h5>
//             <ul className="footer-links">
//               <li><a href="#features">Features</a></li>
//               <li><a href="#integrations">Integrations</a></li>
//               <li><a href="#pricing">Pricing</a></li>
//               <li><a href="#updates">Updates</a></li>
//             </ul>
//           </div>

//           <div className="col-6 col-md-4 col-lg-2">
//             <h5 className="footer-title">Resources</h5>
//             <ul className="footer-links">
//               <li><a href="#docs">Documentation</a></li>
//               <li><a href="#guides">Guides</a></li>
//               <li><a href="#community">Community</a></li>
//               <li><a href="#support">Support</a></li>
//             </ul>
//           </div>

//           <div className="col-12 col-md-4 col-lg-3">
//             <h5 className="footer-title">Contact</h5>
//             <ul className="footer-contact-list">
//               <li>hello@creativehub.com</li>
//               <li>+91 98765 43210</li>
//               <li>Bangalore, India</li>
//             </ul>
//             <div className="footer-socials mt-3">
//               <a href="#x">X</a>
//               <a href="#dribbble">Dribbble</a>
//               <a href="#behance">Behance</a>
//             </div>
//           </div>
//         </div>

//         <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2 mt-5 pt-4">
//           <p className="mb-0">&copy; 2026 CreativeHub Studio.</p>
//           <div className="footer-bottom-links d-flex flex-wrap gap-3">
//             <a href="#privacy">Privacy</a>
//             <a href="#terms">Terms</a>
//             <a href="#cookies">Cookies</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer2


import React from 'react'

function Footer2() {
  return (
    <footer className="site-footer footer-variant-two mt-5">
      <style>{`
        .site-footer {
          background: #111827;
          color: #F9FAFB;
        }
        .footer-eyebrow {
          display: inline-block;
          background: rgba(255, 61, 0, 0.15);
          color: #FF6B35;
          border: 1px solid rgba(255, 61, 0, 0.3);
          border-radius: 999px;
          padding: 5px 16px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .footer-hero {
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 800;
          color: #F9FAFB;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }
        .footer-hero span {
          color: #FF3D00;
          font-style: italic;
        }
        .footer-text {
          color: #9CA3AF;
          font-size: 15px;
          line-height: 1.75;
          max-width: 400px;
        }
        .footer-title {
          color: #F9FAFB;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-links li a {
          color: #6B7280;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s ease;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .footer-links li a:hover {
          color: #FF3D00;
        }
        .footer-links li a::before {
          content: '›';
          color: #FF3D00;
          font-size: 16px;
          line-height: 1;
        }
        .footer-contact-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-contact-list li {
          color: #6B7280;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .footer-socials {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .footer-socials a {
          background: #1F2937;
          color: #9CA3AF;
          border: 1px solid #374151;
          border-radius: 8px;
          padding: 6px 14px;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .footer-socials a:hover {
          background: #FF3D00;
          color: #fff;
          border-color: #FF3D00;
        }
        .footer-bottom {
          border-top: 1px solid #1F2937;
          color: #6B7280;
          font-size: 13px;
        }
        .footer-bottom p {
          color: #6B7280;
        }
        .footer-bottom-links a {
          color: #6B7280;
          text-decoration: none;
          font-size: 13px;
          transition: color 0.2s;
        }
        .footer-bottom-links a:hover {
          color: #FF3D00;
        }
        .footer-app-badges {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 16px;
        }
        .footer-app-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #1F2937;
          border: 1px solid #374151;
          border-radius: 10px;
          padding: 8px 16px;
          color: #F9FAFB;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
          cursor: pointer;
        }
        .footer-app-badge:hover {
          border-color: #FF3D00;
          color: #FF3D00;
        }
        .footer-stats-row {
          display: flex;
          gap: 32px;
          flex-wrap: wrap;
          padding: 24px 0;
          border-top: 1px solid #1F2937;
          border-bottom: 1px solid #1F2937;
          margin-bottom: 48px;
        }
        .footer-stat-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .footer-stat-val {
          font-size: 22px;
          font-weight: 800;
          color: #F9FAFB;
          letter-spacing: -0.02em;
        }
        .footer-stat-lbl {
          font-size: 12px;
          color: #6B7280;
        }
        .pro-strip {
          background: linear-gradient(135deg, #FF3D00, #FF6B35);
          border-radius: 16px;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 48px;
        }
        .pro-strip-text p:first-child {
          font-size: 16px;
          font-weight: 800;
          color: #fff;
          margin: 0 0 4px 0;
        }
        .pro-strip-text p:last-child {
          font-size: 13px;
          color: rgba(255,255,255,0.8);
          margin: 0;
        }
        .pro-strip-btn {
          background: #fff;
          color: #FF3D00;
          border: none;
          border-radius: 10px;
          padding: 10px 22px;
          font-weight: 800;
          font-size: 14px;
          cursor: pointer;
          white-space: nowrap;
          text-decoration: none;
        }
        .pro-strip-btn:hover {
          background: #111827;
          color: #fff;
        }
      `}</style>

      <div className="container py-5">

        {/* ── Stats strip ── */}
        <div className="footer-stats-row">
          {[
            ['🏪', '500+', 'Restaurant partners'],
            ['📦', '50K+', 'Daily orders'],
            ['🛵', '200+', 'Delivery riders'],
            ['⭐', '4.8',  'App rating'],
            ['🌆', '50+',  'Cities covered'],
          ].map(([icon, val, lbl]) => (
            <div key={lbl} className="footer-stat-item">
              <span className="footer-stat-val">{icon} {val}</span>
              <span className="footer-stat-lbl">{lbl}</span>
            </div>
          ))}
        </div>

        {/* ── Pro upgrade strip ── */}
        <div className="pro-strip">
          <div className="pro-strip-text">
            <p>⭐ Try FoodRush Pro — Free for 30 days</p>
            <p>Unlimited free delivery · Exclusive deals · Priority support</p>
          </div>
          <a href="/register" className="pro-strip-btn">Upgrade Now →</a>
        </div>

        {/* ── Main footer columns ── */}
        <div className="row g-4 align-items-start">

          {/* Brand column */}
          <div className="col-12 col-lg-5">
            <span className="footer-eyebrow">🍴 FoodRush</span>
            <h2 className="footer-hero mt-3">
              Hot food delivered<br />
              <span>in 30 minutes</span> or less
            </h2>
            <p className="footer-text mt-3">
              Order from 500+ top-rated restaurants across 50+ Indian cities.
              Fresh, fast and always delicious — from your favourite local spots
              to trending cloud kitchens.
            </p>
            <div className="d-flex flex-wrap gap-2 mt-4">
              <a className="btn btn-danger px-4" href="/register">
                🍽️ Order Now
              </a>
              <a className="btn btn-outline-light px-4" href="/about">
                Our Story
              </a>
            </div>
            {/* App download badges */}
            <div className="footer-app-badges">
              <a className="footer-app-badge" href="#">🍎 App Store</a>
              <a className="footer-app-badge" href="#">🤖 Google Play</a>
            </div>
          </div>

          {/* Order column */}
          <div className="col-6 col-md-4 col-lg-2">
            <h5 className="footer-title">Order Food</h5>
            <ul className="footer-links">
              <li><a href="#">Restaurants Near Me</a></li>
              <li><a href="#">Today's Offers</a></li>
              <li><a href="#">Free Delivery</a></li>
              <li><a href="#">Top Rated</a></li>
              <li><a href="#">New Arrivals</a></li>
            </ul>
          </div>

          {/* Company column */}
          <div className="col-6 col-md-4 col-lg-2">
            <h5 className="footer-title">Company</h5>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Our Services</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog & News</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact column */}
          <div className="col-12 col-md-4 col-lg-3">
            <h5 className="footer-title">Get In Touch</h5>
            <ul className="footer-contact-list">
              <li>📧 hello@foodrush.in</li>
              <li>📞 +91 98765 43210</li>
              <li>📍 Bandra Kurla Complex, Mumbai</li>
              <li>🕐 Support: 24 / 7</li>
            </ul>
            <div className="footer-socials mt-3">
              <a href="#">🌐 Web</a>
              <a href="#">📘 FB</a>
              <a href="#">📸 IG</a>
              <a href="#">🐦 X</a>
            </div>
          </div>

        </div>

        {/* ── Footer bottom bar ── */}
        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2 mt-5 pt-4">
          <p className="mb-0">© 2026 FoodRush Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="footer-bottom-links d-flex flex-wrap gap-3">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer2