import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
export default function NotFound(){return <main className="section"><div className="container--narrow"><p className="kicker">404 · Page not found</p><h1 className="page-title">This route does not lead anywhere.</h1><p className="lede" style={{margin:'28px 0'}}>The link may be old, or the page may have moved.</p><Link to="/" className="button"><ArrowLeft size={16}/>Return home</Link></div></main>}
