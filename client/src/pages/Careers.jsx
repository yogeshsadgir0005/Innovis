import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Cloud, Bot, Code2, Shield, BarChart3, ArrowRight, Mail } from 'lucide-react';

const services = [
  { icon: Monitor, title: 'Web & Software Development', desc: 'Custom full-stack applications, SPAs, and enterprise portals built for performance and scale.' },
  { icon: Cloud, title: 'Cloud & SaaS Solutions', desc: 'Multi-tenant SaaS platforms and seamless cloud migrations to AWS, Azure, or GCP.' },
  { icon: Bot, title: 'AI & Automation', desc: 'LLM integration, computer vision, predictive analytics, and intelligent workflow automation.' },
  { icon: Code2, title: 'DevOps & Infrastructure', desc: 'CI/CD pipelines, Kubernetes orchestration, and 24/7 cloud monitoring.' },
  { icon: Shield, title: 'Cybersecurity', desc: 'Zero-trust architecture, penetration testing, and SOC 2 / ISO 27001 compliance.' },
  { icon: BarChart3, title: 'Data Engineering', desc: 'Real-time data pipelines, data lakes, ETL automation, and BI dashboards.' }
];

const Careers = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ fontFamily:"'DM Sans', sans-serif", background:'#06060f', minHeight:'100vh', overflow:'hidden' }}>
      <style>{`
        @keyframes float-orb { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-18px);} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px);} to{opacity:1;transform:translateY(0);} }
        .orb-float{animation:float-orb 9s ease-in-out infinite;}
        .orb-float-2{animation:float-orb 12s ease-in-out 3s infinite;}
        .fade-up{animation:fadeUp 0.6s ease forwards;opacity:0;}
        .service-chip{background:rgba(255,255,255,0.02);border:1px solid rgba(99,102,241,0.12);border-radius:10px;padding:22px;transition:all 0.22s;}
        .service-chip:hover{background:rgba(99,102,241,0.05);border-color:rgba(99,102,241,0.28);transform:translateY(-2px);box-shadow:0 8px 24px rgba(99,102,241,0.1);}
      `}</style>

      <div className="orb-float" style={{ position:'absolute', top:'-60px', right:'-60px', width:420, height:420, background:'radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%)', borderRadius:'50%', pointerEvents:'none' }} />
      <div className="orb-float-2" style={{ position:'absolute', bottom:'10%', left:'-80px', width:340, height:340, background:'radial-gradient(ellipse, rgba(129,140,248,0.07) 0%, transparent 70%)', borderRadius:'50%', pointerEvents:'none' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="text-center mb-16 fade-up" style={{ animationDelay:'0.05s' }}>
          <p style={{ fontSize:11, letterSpacing:'2px', textTransform:'uppercase', color:'#818cf8', marginBottom:14, fontWeight:700 }}>Technology Partner</p>
          <h1 style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:'clamp(28px,4.5vw,52px)', fontWeight:800, color:'#e2e8f0', letterSpacing:'-1px', lineHeight:1.12, marginBottom:18 }}>
            We Build. We Deliver.<br />
            <span style={{ color:'#818cf8' }}>We Scale.</span>
          </h1>
          <p style={{ fontSize:15, color:'rgba(226,232,240,0.55)', maxWidth:580, margin:'0 auto', lineHeight:1.75 }}>
            Innovis IT Solutions is an enterprise technology company specializing in custom software, cloud platforms, AI automation, and cybersecurity — not a staffing agency.
          </p>
        </div>

        <div className="fade-up" style={{ animationDelay:'0.15s', background:'rgba(99,102,241,0.05)', border:'1px solid rgba(99,102,241,0.2)', borderRadius:12, padding:'22px 28px', marginBottom:64, display:'flex', alignItems:'center', gap:16, flexWrap:'wrap' }}>
          <div style={{ width:42, height:42, background:'rgba(99,102,241,0.1)', borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center', color:'#818cf8', flexShrink:0 }}>
            <Mail size={19} />
          </div>
          <div style={{ flexGrow:1 }}>
            <h3 style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:16, fontWeight:700, color:'#e2e8f0', marginBottom:4 }}>No Open Positions at This Time</h3>
            <p style={{ fontSize:13, color:'rgba(226,232,240,0.5)', lineHeight:1.65 }}>
              We are not currently recruiting, but we're always open to connecting with talented engineers. Reach out and introduce yourself.
            </p>
          </div>
          <Link to="/contact"
            style={{ background:'#6366f1', color:'#fff', padding:'10px 22px', borderRadius:8, fontWeight:600, fontSize:13, textDecoration:'none', flexShrink:0, transition:'all 0.2s' }}
            onMouseEnter={e=>{ e.currentTarget.style.background='#4f46e5'; e.currentTarget.style.transform='translateY(-1px)'; }}
            onMouseLeave={e=>{ e.currentTarget.style.background='#6366f1'; e.currentTarget.style.transform='none'; }}>
            Get in Touch
          </Link>
        </div>

        <div className="text-center mb-12 fade-up" style={{ animationDelay:'0.2s' }}>
          <p style={{ fontSize:11, letterSpacing:'2px', textTransform:'uppercase', color:'#818cf8', marginBottom:12, fontWeight:700 }}>What we do</p>
          <h2 style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:'clamp(22px,3.5vw,34px)', fontWeight:800, color:'#e2e8f0', letterSpacing:'-0.5px', marginBottom:12 }}>Our Core IT Services</h2>
          <p style={{ fontSize:14, color:'rgba(226,232,240,0.5)', maxWidth:480, margin:'0 auto', lineHeight:1.7 }}>
            Looking to build something with us? Here's what our engineering team delivers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div key={i} className="service-chip fade-up" style={{ animationDelay:`${0.22+i*0.08}s` }}>
                <div style={{ width:38, height:38, background:'rgba(99,102,241,0.1)', borderRadius:9, display:'flex', alignItems:'center', justifyContent:'center', color:'#818cf8', marginBottom:14 }}>
                  <Icon size={19} />
                </div>
                <h3 style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:15, fontWeight:700, color:'#e2e8f0', marginBottom:8 }}>{svc.title}</h3>
                <p style={{ fontSize:13, color:'rgba(226,232,240,0.5)', lineHeight:1.65 }}>{svc.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="fade-up" style={{ animationDelay:'0.5s', textAlign:'center', background:'rgba(255,255,255,0.02)', border:'1px solid rgba(99,102,241,0.12)', borderRadius:16, padding:'52px 32px', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 55% 55% at 50% 100%, rgba(99,102,241,0.1) 0%, transparent 70%)', pointerEvents:'none' }} />
          <div style={{ position:'relative', zIndex:1 }}>
            <h2 style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:'clamp(22px,3.5vw,34px)', fontWeight:800, letterSpacing:'-0.8px', color:'#e2e8f0', marginBottom:12 }}>Need a Technology Partner?</h2>
            <p style={{ color:'rgba(226,232,240,0.5)', fontSize:14, marginBottom:28, maxWidth:440, margin:'0 auto 28px', lineHeight:1.7 }}>
              Tell us about your project. Our engineering team will get back to you within 24 hours.
            </p>
            <Link to="/contact"
              style={{ background:'#6366f1', color:'#fff', padding:'11px 28px', borderRadius:8, fontWeight:600, fontSize:14, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:7, transition:'all 0.2s' }}
              onMouseEnter={e=>{ e.currentTarget.style.background='#4f46e5'; e.currentTarget.style.transform='translateY(-1px)'; e.currentTarget.style.boxShadow='0 8px 22px rgba(99,102,241,0.35)'; }}
              onMouseLeave={e=>{ e.currentTarget.style.background='#6366f1'; e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='none'; }}>
              Start a Project <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
