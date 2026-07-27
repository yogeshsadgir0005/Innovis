import { Link } from 'react-router-dom';

export default function Footer() {
  return <footer className="footer">
    <div className="container">
      <div className="footer-top">
        <div>
          <Link to="/" className="footer-brand-lockup" aria-label="Innovis home"><img className="footer-logo" src="/LOGO_BGdark.png" alt="" aria-hidden="true"/><span><strong>INNOVIS</strong><small>IT SOLUTIONS & INNOVATION</small></span></Link>
          <p className="footer-statement">Product design, software engineering and applied AI—working as one delivery team.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <Link to="/services">Services</Link><Link to="/case-studies">Case studies</Link>
          <Link to="/partners">Clients & ventures</Link><Link to="/about">About</Link>
          <Link to="/careers">Careers</Link><Link to="/contact">Contact</Link>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Innovis Technologies · Sinnar, Maharashtra</span>
        <div className="footer-legal"><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link></div>
      </div>
    </div>
  </footer>;
}
