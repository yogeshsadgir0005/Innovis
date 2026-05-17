import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Loader2, CheckCircle } from 'lucide-react';

import axiosInstance from '../utils/axios';

const FacebookIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const LinkedinIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Footer = () => {
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState({ loading: false, success: false, error: null });

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setNewsletterStatus({ loading: false, success: false, error: 'Please enter a valid email address.' });
      return;
    }
    setNewsletterStatus({ loading: true, success: false, error: null });
    try {
      await axiosInstance.post('/newsletter', { email });
      setNewsletterStatus({ loading: false, success: true, error: null });
      setEmail('');
      setTimeout(() => setNewsletterStatus(s => ({ ...s, success: false })), 5000);
    } catch (err) {
      setNewsletterStatus({
        loading: false,
        success: false,
        error: err.response?.data?.message || 'Something went wrong. Please try again.'
      });
    }
  };

  return (
    <footer style={{ background: '#0c0c1c', borderTop: '1px solid rgba(99,102,241,0.1)', paddingTop: '64px', paddingBottom: '28px', fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        .footer-link{color:rgba(226,232,240,0.45);text-decoration:none;font-size:13px;transition:color 0.18s ease;}
        .footer-link:hover{color:#818cf8;}
        .footer-social-btn{display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:8px;background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.16);color:#818cf8;transition:all 0.18s;text-decoration:none;}
        .footer-social-btn:hover{background:#6366f1;border-color:#6366f1;color:#fff;transform:translateY(-1px);box-shadow:0 4px 12px rgba(99,102,241,0.3);}

        .footer-main-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 40px;
          margin-bottom: 48px;
        }
        @media (max-width: 1023px) {
          .footer-main-grid { grid-template-columns: 1fr 1fr; gap: 28px; }
        }
        @media (max-width: 479px) {
          .footer-main-grid { grid-template-columns: 1fr 1fr; gap: 20px; }
          .footer-main-grid .footer-brand { grid-column: 1 / -1; }
          .footer-link { font-size: 12px; }
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        @media (max-width: 479px) {
          .footer-bottom { flex-direction: column; align-items: flex-start; gap: 10px; }
        }
      `}</style>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 20px' }}>
        <div className="footer-main-grid">

          {/* Logo & About */}
          <div className="footer-brand">
            <div className="flex items-center mb-4">
              <img src="/LOGO_BGdark.png" alt="Innovis" style={{ height: 28, width: 'auto', objectFit: 'contain', borderRadius: 6 }} />
            </div>
            <p style={{ color: 'rgba(226,232,240,0.45)', fontSize: '13px', lineHeight: 1.65, marginBottom: '20px' }}>
              Engineering the Future with Intelligent Technology. Enterprise IT solutions and SaaS development for global innovators.
            </p>
            <div className="flex space-x-2">
              <a href="https://www.linkedin.com/company/innovis-it-solutions" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="LinkedIn"><LinkedinIcon size={14} /></a>
              <a href="https://twitter.com/innovis_it" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Twitter"><TwitterIcon size={14} /></a>
              <a href="https://www.facebook.com/innovis.it" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Facebook"><FacebookIcon size={14} /></a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '13px', fontWeight: 700, color: '#e2e8f0', marginBottom: '16px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/case-studies" className="footer-link">Case Studies</Link></li>
              <li><Link to="/partners" className="footer-link">Partners</Link></li>
              <li><Link to="/careers" className="footer-link">Careers</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '13px', fontWeight: 700, color: '#e2e8f0', marginBottom: '16px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="footer-link">Web Development</Link></li>
              <li><Link to="/services" className="footer-link">SaaS Solutions</Link></li>
              <li><Link to="/services" className="footer-link">AI & Automation</Link></li>
              <li><Link to="/services" className="footer-link">Cloud Services</Link></li>
              <li><Link to="/services" className="footer-link">Cybersecurity</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '13px', fontWeight: 700, color: '#e2e8f0', marginBottom: '16px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Stay Updated</h4>
            <p style={{ color: 'rgba(226,232,240,0.45)', fontSize: '13px', lineHeight: 1.65, marginBottom: '14px' }}>Subscribe for tech insights, case studies, and Innovis updates.</p>

            {newsletterStatus.success ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 8, color: '#4ade80', fontSize: 13, fontWeight: 500 }}>
                <CheckCircle size={15} /> Subscribed! Thank you.
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} noValidate>
                <div style={{ display: 'flex', gap: '6px', background: 'rgba(99,102,241,0.04)', borderRadius: '8px', padding: '5px', border: `1px solid ${newsletterStatus.error ? 'rgba(239,68,68,0.35)' : 'rgba(99,102,241,0.14)'}`, transition: 'border-color 0.2s' }}
                  onFocus={e => { if (!newsletterStatus.error) e.currentTarget.style.borderColor = '#6366f1'; }}
                  onBlur={e => { if (!newsletterStatus.error) e.currentTarget.style.borderColor = 'rgba(99,102,241,0.14)'; }}>
                  <input
                    type="email"
                    value={email}
                    onChange={e => { setEmail(e.target.value); if (newsletterStatus.error) setNewsletterStatus(s => ({ ...s, error: null })); }}
                    placeholder="Email address"
                    disabled={newsletterStatus.loading}
                    style={{ background: 'transparent', color: '#e2e8f0', padding: '6px 12px', width: '100%', border: 'none', outline: 'none', fontSize: '13px' }}
                  />
                  <button type="submit" disabled={newsletterStatus.loading}
                    style={{ background: '#6366f1', color: '#fff', padding: '7px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: newsletterStatus.loading ? 'not-allowed' : 'pointer', opacity: newsletterStatus.loading ? 0.7 : 1, transition: 'all 0.18s', flexShrink: 0 }}
                    onMouseEnter={e => { if (!newsletterStatus.loading) { e.currentTarget.style.background = '#4f46e5'; } }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#6366f1'; }}>
                    {newsletterStatus.loading ? <Loader2 size={14} style={{ animation: 'spin 1s linear infinite' }} /> : <ArrowRight size={14} />}
                  </button>
                </div>
                {newsletterStatus.error && (
                  <p style={{ fontSize: 11, color: '#f87171', marginTop: 6, paddingLeft: 2 }}>{newsletterStatus.error}</p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom" style={{ borderTop: '1px solid rgba(99,102,241,0.1)', paddingTop: '24px' }}>
          <p style={{ color: 'rgba(226,232,240,0.3)', fontSize: '12px' }}>© {new Date().getFullYear()} Innovis IT Solutions. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link to="/privacy" className="footer-link" style={{ fontSize: '12px' }}>Privacy Policy</Link>
            <Link to="/terms" className="footer-link" style={{ fontSize: '12px' }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;