import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div style={{ fontFamily:"'DM Sans', sans-serif", background:'#06060f', minHeight:'80vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'40px 20px', position:'relative', overflow:'hidden' }}>
      <style>{`
        @keyframes float-orb { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-18px);} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px);} to{opacity:1;transform:translateY(0);} }
        .orb-float{animation:float-orb 9s ease-in-out infinite;}
        .fade-up{animation:fadeUp 0.6s ease forwards;opacity:0;}
      `}</style>

      <div className="orb-float" style={{ position:'absolute', top:'-60px', left:'10%', width:340, height:340, background:'radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%)', borderRadius:'50%', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'-30px', right:'10%', width:260, height:260, background:'radial-gradient(ellipse, rgba(129,140,248,0.06) 0%, transparent 70%)', borderRadius:'50%', pointerEvents:'none' }} />

      <div className="text-center relative z-10" style={{ maxWidth:520 }}>
        <div className="fade-up" style={{ animationDelay:'0.05s', fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:'clamp(80px,18vw,130px)', fontWeight:800, lineHeight:1, color:'transparent', WebkitTextStroke:'2px rgba(99,102,241,0.3)', marginBottom:6, letterSpacing:'-4px', userSelect:'none' }}>
          404
        </div>
        <p className="fade-up" style={{ animationDelay:'0.1s', fontSize:11, letterSpacing:'2px', textTransform:'uppercase', color:'#818cf8', marginBottom:14, fontWeight:700 }}>Page Not Found</p>
        <h1 className="fade-up" style={{ animationDelay:'0.15s', fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:'clamp(20px,3.5vw,30px)', fontWeight:800, color:'#e2e8f0', letterSpacing:'-0.3px', lineHeight:1.2, marginBottom:14 }}>
          This page doesn't exist
        </h1>
        <p className="fade-up" style={{ animationDelay:'0.2s', fontSize:14, color:'rgba(226,232,240,0.5)', lineHeight:1.7, marginBottom:32, maxWidth:380, margin:'0 auto 32px' }}>
          The page you're looking for may have been moved, deleted, or never existed. Let's get you back on track.
        </p>
        <div className="fade-up" style={{ animationDelay:'0.25s', display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
          <Link to="/"
            style={{ background:'#6366f1', color:'#fff', padding:'10px 24px', borderRadius:8, fontWeight:600, fontSize:14, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:7, transition:'all 0.2s' }}
            onMouseEnter={e=>{ e.currentTarget.style.background='#4f46e5'; e.currentTarget.style.transform='translateY(-1px)'; e.currentTarget.style.boxShadow='0 8px 22px rgba(99,102,241,0.35)'; }}
            onMouseLeave={e=>{ e.currentTarget.style.background='#6366f1'; e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='none'; }}>
            <Home size={15} /> Go Home
          </Link>
          <Link to="/contact"
            style={{ background:'transparent', color:'#e2e8f0', border:'1px solid rgba(226,232,240,0.15)', padding:'10px 24px', borderRadius:8, fontWeight:600, fontSize:14, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:7, transition:'all 0.2s' }}
            onMouseEnter={e=>{ e.currentTarget.style.borderColor='#6366f1'; e.currentTarget.style.color='#818cf8'; }}
            onMouseLeave={e=>{ e.currentTarget.style.borderColor='rgba(226,232,240,0.15)'; e.currentTarget.style.color='#e2e8f0'; }}>
            Contact Us <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
