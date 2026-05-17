import React, { useEffect } from 'react';
import { ArrowRight, Monitor, Cloud, Bot, Code2, Shield, BarChart3, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const services = [
    { id: 'web-dev', num: '01', icon: Monitor, title: 'Web Development', desc: 'Full-stack web applications built for performance, scale, and seamless user experiences across all devices.', features: ['Modern Single Page Applications (SPAs)', 'Server-Side Rendering (SSR) for SEO', 'Custom API Architecture & Integration', 'Responsive & Accessible UI/UX'], visualGradient: 'linear-gradient(135deg, rgba(99,102,241,0.16) 0%, rgba(79,70,229,0.04) 100%)' },
    { id: 'saas', num: '02', icon: Cloud, title: 'SaaS Solutions', desc: 'End-to-end multi-tenant SaaS platforms engineered from the ground up with billing, auth, and analytics.', features: ['Multi-tenant Database Architecture', 'Role-Based Access Control (RBAC)', 'Subscription & Billing Integration', 'Automated Provisioning Workflows'], visualGradient: 'linear-gradient(135deg, rgba(129,140,248,0.16) 0%, rgba(99,102,241,0.04) 100%)' },
    { id: 'ai-automation', num: '03', icon: Bot, title: 'AI & Automation', desc: 'Embed LLMs, computer vision, and predictive analytics directly into your existing workflows.', features: ['Custom LLM Integration & Fine-tuning', 'Computer Vision & Data Extraction', 'Automated Customer Support Agents', 'Predictive Business Analytics'], visualGradient: 'linear-gradient(135deg, rgba(99,102,241,0.16) 0%, rgba(55,48,163,0.04) 100%)' },
    { id: 'cloud-services', num: '04', icon: Code2, title: 'Cloud Services', desc: 'Seamless migration to AWS, Azure, or GCP with zero downtime strategies and 99.99% uptime.', features: ['Zero-Downtime Cloud Migration', 'Serverless Architecture Design', 'Docker & Kubernetes Orchestration', '24/7 Cloud Monitoring & Support'], visualGradient: 'linear-gradient(135deg, rgba(99,102,241,0.16) 0%, rgba(15,23,42,0.08) 100%)' },
    { id: 'cybersecurity', num: '05', icon: Shield, title: 'Cybersecurity', desc: 'Zero-trust architectures, rigorous penetration testing, and full compliance for regulated industries.', features: ['Zero-Trust Network Implementation', 'Vulnerability & Penetration Testing', 'Data Encryption (At Rest & In Transit)', 'SOC 2 & ISO 27001 Compliance Prep'], visualGradient: 'linear-gradient(135deg, rgba(129,140,248,0.16) 0%, rgba(79,70,229,0.04) 100%)' },
    { id: 'data-engineering', num: '06', icon: BarChart3, title: 'Data Engineering', desc: 'Real-time pipelines, data lakes, and BI dashboards that turn raw data into actionable business decisions.', features: ['Real-Time Data Streaming Pipelines', 'Data Warehouse & Lakehouse Setup', 'ETL / ELT Process Automation', 'Interactive BI Dashboards'], visualGradient: 'linear-gradient(135deg, rgba(99,102,241,0.16) 0%, rgba(46,16,101,0.04) 100%)' }
  ];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#06060f", minHeight: "100vh", overflow: "hidden" }}>
      <style>{`
        @keyframes float-orb { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-18px);} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px);} to{opacity:1;transform:translateY(0);} }
        .orb-float { animation: float-orb 9s ease-in-out infinite; }
        .orb-float-2 { animation: float-orb 12s ease-in-out 3s infinite; }
        .fade-up { animation: fadeUp 0.6s ease forwards; }
        .service-row:hover .service-visual { transform:scale(1.02); border-color:rgba(99,102,241,0.32); box-shadow:0 14px 28px rgba(99,102,241,0.1); }
        .service-visual { transition: all 0.4s cubic-bezier(0.4,0,0.2,1); }
        @media (max-width: 767px) {
          .service-row { flex-direction:column !important; gap:20px !important; }
          .service-visual { max-width:100% !important; aspect-ratio:16/9 !important; }
        }
      `}</style>

      <section style={{ position: "relative", padding: "100px 0 52px" }}>
        <div className="orb-float" style={{ position:"absolute", top:"-80px", left:"10%", width:320, height:320, background:"radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)", borderRadius:"50%", pointerEvents:"none" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="fade-up" style={{ fontSize:11, letterSpacing:"2px", textTransform:"uppercase", color:"#818cf8", marginBottom:14, fontWeight:700 }}>Our Capabilities</p>
          <h1 className="fade-up" style={{ animationDelay:"0.1s", fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"clamp(28px,4.5vw,50px)", fontWeight:800, color:"#e2e8f0", letterSpacing:"-1px", lineHeight:1.12, marginBottom:16 }}>
            Intelligent Solutions for<br />Modern Enterprises
          </h1>
          <p className="fade-up" style={{ animationDelay:"0.2s", fontSize:15, color:"rgba(226,232,240,0.55)", maxWidth:520, margin:"0 auto", lineHeight:1.7 }}>
            From resilient cloud infrastructure to autonomous AI agents — systems that drive your business forward.
          </p>
        </div>
      </section>

      <section style={{ padding: "60px 0 100px" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ display:"flex", flexDirection:"column", gap:"72px" }}>
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              const Icon = service.icon;
              return (
                <div key={service.id} id={service.id} className="service-row fade-up"
                  style={{ animationDelay:`${0.1*index}s`, display:"flex", flexDirection:isEven?"row":"row-reverse", alignItems:"center", gap:"48px", flexWrap:"wrap" }}>
                  <div style={{ flex:"1 1 340px" }}>
                    <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:18 }}>
                      <div style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:36, fontWeight:800, color:"rgba(99,102,241,0.15)", lineHeight:1 }}>{service.num}</div>
                      <div style={{ height:1, flexGrow:1, background:"linear-gradient(90deg, rgba(99,102,241,0.22), transparent)" }} />
                    </div>
                    <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:12 }}>
                      <div style={{ width:38, height:38, background:"rgba(99,102,241,0.1)", borderRadius:9, display:"flex", alignItems:"center", justifyContent:"center", color:"#818cf8" }}><Icon size={19} /></div>
                      <h2 style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:24, fontWeight:800, color:"#e2e8f0", letterSpacing:"-0.3px" }}>{service.title}</h2>
                    </div>
                    <p style={{ fontSize:13, color:"rgba(226,232,240,0.55)", lineHeight:1.75, marginBottom:20 }}>{service.desc}</p>
                    <div style={{ display:"flex", flexDirection:"column", gap:10, marginBottom:28 }}>
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} style={{ display:"flex", alignItems:"flex-start", gap:9 }}>
                          <CheckCircle2 size={14} color="#818cf8" style={{ marginTop:3, flexShrink:0 }} />
                          <span style={{ fontSize:13, color:"#e2e8f0", fontWeight:500 }}>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link to="/contact"
                      style={{ display:"inline-flex", alignItems:"center", gap:6, background:"rgba(99,102,241,0.08)", border:"1px solid rgba(99,102,241,0.2)", color:"#818cf8", padding:"9px 20px", borderRadius:8, fontWeight:600, fontSize:13, textDecoration:"none", transition:"all 0.22s" }}
                      onMouseEnter={e=>{ e.currentTarget.style.background="#6366f1"; e.currentTarget.style.color="#fff"; e.currentTarget.style.borderColor="#6366f1"; }}
                      onMouseLeave={e=>{ e.currentTarget.style.background="rgba(99,102,241,0.08)"; e.currentTarget.style.color="#818cf8"; e.currentTarget.style.borderColor="rgba(99,102,241,0.2)"; }}>
                      Discuss Your Project <ArrowRight size={13} />
                    </Link>
                  </div>
                  <div style={{ flex:"1 1 340px", display:"flex", justifyContent:isEven?"flex-end":"flex-start" }}>
                    <div className="service-visual" style={{ width:"100%", maxWidth:440, aspectRatio:"4/3", background:service.visualGradient, border:"1px solid rgba(99,102,241,0.12)", borderRadius:14, position:"relative", overflow:"hidden", display:"flex", alignItems:"center", justifyContent:"center" }}>
                      <div style={{ width:"55%", height:"55%", background:"rgba(255,255,255,0.02)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.04)", borderRadius:12, display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 16px 32px rgba(0,0,0,0.3)" }}>
                        <Icon size={48} color="rgba(129,140,248,0.32)" />
                      </div>
                      <div style={{ position:"absolute", top:14, right:14, display:"flex", gap:4 }}>
                        <div style={{ width:6, height:6, borderRadius:"50%", background:"rgba(99,102,241,0.35)" }} />
                        <div style={{ width:6, height:6, borderRadius:"50%", background:"rgba(99,102,241,0.18)" }} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ background:"#0c0c1c", borderTop:"1px solid rgba(99,102,241,0.1)", padding:"72px 20px", textAlign:"center", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 55% 45% at 50% 100%, rgba(99,102,241,0.1) 0%, transparent 70%)", pointerEvents:"none" }} />
        <div style={{ position:"relative", zIndex:1, maxWidth:580, margin:"0 auto" }}>
          <h2 style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"clamp(22px,3.5vw,38px)", fontWeight:800, letterSpacing:"-0.8px", lineHeight:1.15, color:"#e2e8f0", marginBottom:12 }}>Don't see exactly what you need?</h2>
          <p style={{ color:"rgba(226,232,240,0.5)", fontSize:14, marginBottom:28, lineHeight:1.7 }}>Our engineering team specializes in custom solutions. Reach out and let's map out a technical strategy for your goals.</p>
          <Link to="/contact" style={{ background:"#6366f1", color:"#fff", padding:"11px 28px", borderRadius:8, fontWeight:600, fontSize:14, textDecoration:"none", display:"inline-flex", alignItems:"center", gap:7, transition:"all 0.2s" }}
            onMouseEnter={e=>{ e.currentTarget.style.background="#4f46e5"; e.currentTarget.style.transform="translateY(-1px)"; e.currentTarget.style.boxShadow="0 8px 22px rgba(99,102,241,0.35)"; }}
            onMouseLeave={e=>{ e.currentTarget.style.background="#6366f1"; e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="none"; }}>
            Contact Our Architects <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;