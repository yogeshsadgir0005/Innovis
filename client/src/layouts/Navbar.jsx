import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronDown, Menu, Search, X } from 'lucide-react';

const links = [
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Clients', path: '/clients' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Partners', path: '/partners' },
];

const serviceLinks = [
  ['Web Development', 'web-development'],
  ['Ecommerce & Retail', 'ecommerce-retail'],
  ['Mobile App Development', 'mobile-app-development'],
  ['CRM, ERP & Enterprise', 'enterprise-systems'],
  ['SaaS Products', 'saas-products'],
  ['AI & Machine Learning', 'ai-machine-learning'],
  ['Data & Analytics', 'data-analytics'],
  ['Cybersecurity', 'cybersecurity'],
  ['UI/UX & Product Design', 'product-design'],
  ['Cloud & DevOps', 'cloud-devops'],
  ['Platform Modernisation', 'platform-modernisation'],
  ['QA & Test Automation', 'quality-assurance'],
];

const caseStudyLinks = [
  ['RightVerse AI', 'rightverse-ai'],
  ['SnapShop AI', 'snapshop-ai'],
  ['Localify AI', 'localify-ai'],
  ['RK Tours & Travels', 'rk-tours-travels'],
  ['Genz', 'genz'],
  ['Innovis Billing', 'innovis-billing'],
];

const searchItems = [
  ...links.map(link => ({ label: link.name, path: link.path, type: 'Page' })),
  { label: 'Home', path: '/', type: 'Page' },
  ...serviceLinks.map(([label, slug]) => ({ label, path: `/services#${slug}`, type: 'Service' })),
  ...caseStudyLinks.map(([label, slug]) => ({ label, path: `/case-studies#${slug}`, type: 'Case study' })),
];

const BrandLockup = () => <>
  <img className="brand-logo" src="/LOGO_BGdark.png" alt="" aria-hidden="true" />
  <span className="brand-copy"><strong>INNOVIS</strong><small>IT SOLUTIONS & INNOVATION</small></span>
</>;

function SiteSearch({ mobile = false, query, setQuery, searchOpen, setSearchOpen, results, onSubmit }) {
  return <form className={`nav-search${mobile ? ' nav-search--mobile' : ''}`} role="search" onSubmit={onSubmit} onFocus={() => setSearchOpen(true)} onBlur={event => {
    if (!event.currentTarget.contains(event.relatedTarget)) setSearchOpen(false);
  }}>
    <label className="sr-only" htmlFor={mobile ? 'mobile-site-search' : 'site-search'}>Search Innovis services and pages</label>
    <input
      id={mobile ? 'mobile-site-search' : 'site-search'}
      value={query}
      onChange={event => { setQuery(event.target.value); setSearchOpen(true); }}
      onKeyDown={event => { if (event.key === 'Escape') setSearchOpen(false); }}
      placeholder="Search services"
      autoComplete="off"
    />
    <button type="submit" aria-label="Search"><Search size={18} /></button>
    {searchOpen && query && <div className="nav-search-results">
      {results.length ? results.map(result => <Link to={result.path} key={`${result.type}-${result.label}`} onClick={() => { setSearchOpen(false); setQuery(''); }}>
        <span><strong>{result.label}</strong><small>{result.type}</small></span><ArrowRight size={15} />
      </Link>) : <p>No matching service or page.</p>}
    </div>}
  </form>;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return [];
    return searchItems.filter(item => item.label.toLowerCase().includes(term)).slice(0, 5);
  }, [query]);

  const submitSearch = event => {
    event.preventDefault();
    if (!results.length) return;
    navigate(results[0].path);
    setSearchOpen(false);
    setQuery('');
  };

  return <header className="navbar">
    <Link to="/contact" className="announcement-ribbon">
      <span className="ribbon-desktop">Product design · Software engineering · Applied AI — Discuss a project →</span>
      <span className="ribbon-mobile">Build something useful — Start a project →</span>
    </Link>
    <div className="container nav-inner nav-inner--search">
      <Link to="/" className="brand-link" aria-label="Innovis home"><BrandLockup /></Link>
      <SiteSearch query={query} setQuery={setQuery} searchOpen={searchOpen} setSearchOpen={setSearchOpen} results={results} onSubmit={submitSearch} />
      <nav className="nav-links" aria-label="Primary navigation">
        <Link to="/about" className={`nav-link${pathname === '/about' ? ' active' : ''}`} aria-current={pathname === '/about' ? 'page' : undefined}>About</Link>
        <div className="nav-menu-item">
          <Link to="/services" className={`nav-link nav-link--menu${pathname === '/services' ? ' active' : ''}`} aria-current={pathname === '/services' ? 'page' : undefined} aria-haspopup="true">Services <ChevronDown size={13} /></Link>
          <div className="nav-services-menu">
            <span>Capabilities</span>
            <div>{serviceLinks.slice(0, 8).map(([label, slug]) => <Link to={`/services#${slug}`} key={slug}>{label}<ArrowRight size={13} /></Link>)}</div>
          </div>
        </div>
        <Link to="/clients" className={`nav-link${pathname === '/clients' ? ' active' : ''}`} aria-current={pathname === '/clients' ? 'page' : undefined}>Clients</Link>
        <div className="nav-menu-item nav-menu-item--end">
          <Link to="/case-studies" className={`nav-link nav-link--menu${pathname === '/case-studies' ? ' active' : ''}`} aria-current={pathname === '/case-studies' ? 'page' : undefined} aria-haspopup="true">Case Studies <ChevronDown size={13} /></Link>
          <div className="nav-services-menu nav-services-menu--cases">
            <span>Selected work</span>
            <div>{caseStudyLinks.map(([label, slug]) => <Link to={`/case-studies#${slug}`} key={slug}>{label}<ArrowRight size={13} /></Link>)}</div>
          </div>
        </div>
        <Link to="/partners" className={`nav-link${pathname === '/partners' ? ' active' : ''}`} aria-current={pathname === '/partners' ? 'page' : undefined}>Partners</Link>
      </nav>
      <Link to="/contact" className="nav-contact">Start a project <ArrowRight size={15} /></Link>
      <button className="nav-toggle" onClick={() => setOpen(value => !value)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X size={21} /> : <Menu size={21} />}</button>
    </div>
    <nav className={`mobile-menu${open ? ' open' : ''}`} aria-label="Mobile navigation" aria-hidden={!open}>
      <SiteSearch mobile query={query} setQuery={setQuery} searchOpen={searchOpen} setSearchOpen={setSearchOpen} results={results} onSubmit={submitSearch} />
      {links.map(link => <Link key={link.path} to={link.path} className={pathname === link.path ? 'active' : undefined} aria-current={pathname === link.path ? 'page' : undefined} onClick={() => setOpen(false)}>{link.name}</Link>)}
      <Link to="/contact" onClick={() => setOpen(false)}>Start a project</Link>
    </nav>
  </header>;
}
