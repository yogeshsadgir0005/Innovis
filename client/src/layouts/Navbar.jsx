import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Menu } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home',         path: '/' },
    { name: 'Services',     path: '/services' },
    { name: 'Partners',     path: '/partners' },
    { name: 'About',        path: '/about' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Contact',      path: '/contact' },
  ];

  return (
    <>
      <style>{`
        .nav-desktop-links { display: flex; gap: 28px; }
        .nav-desktop-cta   { display: flex; }
        .nav-hamburger     { display: none; }

        @media (max-width: 767px) {
          .nav-desktop-links { display: none !important; }
          .nav-desktop-cta   { display: none !important; }
          .nav-hamburger     { display: flex !important; }
        }

        .nav-drawer {
          position: fixed;
          top: 58px; left: 0; right: 0;
          z-index: 99;
          background: #0c0c1c;
          border-bottom: 1px solid rgba(99,102,241,0.15);
          padding: 16px 16px 24px;
          transform: translateY(-110%);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
        }
        .nav-drawer.open {
          transform: translateY(0);
          pointer-events: all;
        }
        .nav-drawer-link {
          display: block;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: rgba(226,232,240,0.8);
          text-decoration: none;
          padding: 11px 14px;
          border-radius: 8px;
          border: 1px solid transparent;
          transition: all 0.18s;
        }
        .nav-drawer-link.active {
          color: #818cf8;
          background: rgba(99,102,241,0.08);
          border-color: rgba(99,102,241,0.18);
        }
        .nav-drawer-cta {
          display: block;
          margin-top: 12px;
          background: #6366f1;
          color: #fff;
          padding: 11px 20px;
          border-radius: 8px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          text-align: center;
          transition: background 0.2s;
        }
        .nav-drawer-cta:hover { background: #4f46e5; }
      `}</style>

      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(6,6,15,0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(99,102,241,0.1)',
        width: '100%'
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 58 }}>

            {/* Logo */}
            <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <img src="/LOGO_BGdark.png" alt="Innovis" style={{ height: 30, width: 'auto', objectFit: 'contain', borderRadius: 6 }} />
            </Link>

            {/* Desktop Nav Links */}
            <div className="nav-desktop-links">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link key={link.name} to={link.path} style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 13, fontWeight: isActive ? 700 : 600,
                    color: isActive ? '#818cf8' : 'rgba(226,232,240,0.55)',
                    textDecoration: 'none', transition: 'color 0.18s ease',
                    letterSpacing: '0.01em'
                  }}
                    onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = '#e2e8f0'; }}
                    onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'rgba(226,232,240,0.55)'; }}>
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="nav-desktop-cta">
              <Link to="/contact" style={{
                background: '#6366f1', color: '#fff', padding: '8px 18px',
                borderRadius: 8, fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600, fontSize: 13, textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', transition: 'all 0.2s',
                letterSpacing: '0.01em'
              }}
                onMouseEnter={e => { e.currentTarget.style.background = '#4f46e5'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(99,102,241,0.35)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#6366f1'; e.currentTarget.style.boxShadow = 'none'; }}>
                Get Started
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="nav-hamburger"
              onClick={() => setIsOpen(o => !o)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              style={{
                background: 'rgba(99,102,241,0.08)',
                border: '1px solid rgba(99,102,241,0.18)',
                borderRadius: 8, padding: 7,
                color: '#818cf8', cursor: 'pointer',
                alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.18s'
              }}>
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile backdrop overlay */}
      {isOpen && (
        <div onClick={() => setIsOpen(false)} style={{
          position: 'fixed', inset: 0,
          background: 'rgba(6,6,15,0.7)',
          zIndex: 98, backdropFilter: 'blur(4px)'
        }} />
      )}

      {/* Mobile Drawer */}
      <div className={`nav-drawer${isOpen ? ' open' : ''}`}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path}
              className={`nav-drawer-link${location.pathname === link.path ? ' active' : ''}`}>
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="nav-drawer-cta">Get Started</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;