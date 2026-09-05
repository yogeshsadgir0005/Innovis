import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SiteMotion from '../components/SiteMotion';

export default function Layout() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return undefined;
    }
    const scrollToHash = () => {
      const target = document.getElementById(hash.slice(1));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return Boolean(target);
    };
    if (scrollToHash()) return undefined;
    const timer = setTimeout(scrollToHash, 120);
    return () => clearTimeout(timer);
  }, [pathname, hash]);
  return <div className="site-shell"><Navbar /><main className="site-main"><Outlet /></main><Footer /><SiteMotion /></div>;
}

