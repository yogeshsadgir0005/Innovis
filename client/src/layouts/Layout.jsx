import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SiteMotion from '../components/SiteMotion';

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return <div className="site-shell"><Navbar /><main className="site-main"><Outlet /></main><Footer /><SiteMotion /></div>;
}

