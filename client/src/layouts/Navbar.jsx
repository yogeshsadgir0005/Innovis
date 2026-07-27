import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Clients & Partners', path: '/partners' },
  { name: 'Services', path: '/services' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'About', path: '/about' },
];

const BrandLockup = () => <><img className="brand-logo" src="/LOGO_BGdark.png" alt="" aria-hidden="true"/><span className="brand-copy"><strong>INNOVIS</strong><small>IT SOLUTIONS & INNOVATION</small></span></>;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);
  return <header className="navbar">
    <Link to="/contact" className="announcement-ribbon">
      <span className="ribbon-desktop">Product design · Software engineering · Applied AI — Discuss a project →</span>
      <span className="ribbon-mobile">Build something useful — Start a project →</span>
    </Link>
    <div className="container nav-inner">
      <Link to="/" className="brand-link" aria-label="Innovis home"><BrandLockup/></Link>
      <nav className="nav-links" aria-label="Primary navigation">
        {links.map(link => <Link key={link.path} to={link.path} className={`nav-link${pathname === link.path ? ' active' : ''}`} aria-current={pathname === link.path ? 'page' : undefined}>{link.name}</Link>)}
      </nav>
      <Link to="/contact" className="nav-contact">Start a project</Link>
      <button className="nav-toggle" onClick={() => setOpen(v => !v)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X size={21}/> : <Menu size={21}/>}</button>
    </div>
    <nav className={`mobile-menu${open ? ' open' : ''}`} aria-label="Mobile navigation" aria-hidden={!open}>
      {links.map(link => <Link key={link.path} to={link.path} className={pathname === link.path ? 'active' : undefined} aria-current={pathname === link.path ? 'page' : undefined} onClick={() => setOpen(false)}>{link.name}</Link>)}
      <Link to="/contact" onClick={() => setOpen(false)}>Start a project</Link>
    </nav>
  </header>;
}





