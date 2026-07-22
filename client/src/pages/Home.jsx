import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Cloud, Bot, Code2, Lightbulb, Settings, RefreshCw, ArrowRight, Shield, BarChart3, Zap, Globe ,Brush} from 'lucide-react';

const Home = () => {
  const myPartners = [
      { name: "Localify Ai",  image: "/Localify.png" },
    { name: "SnapShop Ai",  image: "/SnapShop.png" },
    { name: "RightVerse Ai",           image: "/RV.png" },
    { name: "RK Tours & Travels",   image: "/RK.png" },
  
  ];

  const stats = [
    { num: "10+",   label: "Enterprise Clients" },
    { num: "99.9%", label: "Uptime SLA" },
    { num: "2yr",   label: "Industry Experience" },
  ];

  const services = [
    { icon: <Monitor size={20} />,   num: "01", title: "Web Development",  desc: "Full-stack web applications built for performance, scale, and seamless user experiences across all devices." },
    { icon: <Cloud size={20} />,     num: "02", title: "SaaS Solutions",    desc: "End-to-end multi-tenant SaaS platforms with billing, auth, and analytics built in from day one." },
    { icon: <Bot size={20} />,       num: "03", title: "AI & Automation",   desc: "Embed LLMs, computer vision, and predictive analytics directly into your existing workflows." },
    { icon: <Code2 size={20} />,     num: "04", title: "Cloud Services",    desc: "Seamless migration to AWS, Azure, or GCP with zero downtime strategies and 99.99% uptime." },
    { icon: <Brush size={20} />,    num: "05", title: "Ui Ux design",     desc: "Creating intuitive and engaging user experiences through thoughtful design and research." },
    { icon: <BarChart3 size={20} />, num: "06", title: "Data Engineering",  desc: "Real-time pipelines, data lakes, and BI dashboards that turn raw data into business decisions." },
  ];

  const enterprises = [
    { icon: <Lightbulb size={24} />, title: "Problem Solving", desc: "We identify and analyze complex enterprise challenges, mapping them to precise technical solutions that reduce overhead and drive efficiency." },
    { icon: <Settings size={24} />,  title: "Smart Solutions", desc: "Our engineers design scalable architectures tailored to your business — not off-the-shelf, but purpose-built for your exact requirements." },
    { icon: <RefreshCw size={24} />, title: "Automation",      desc: "We automate repetitive workflows end-to-end, from data pipelines to CI/CD, freeing your team to focus on high-value outcomes." },
    { icon: <Cloud size={24} />,     title: "Cloud Services",  desc: "From lift-and-shift migrations to full re-architecture, we move your infrastructure to the cloud with minimal disruption and maximum resilience." },
  ];

  const marqueeItems = [
    "Cloud Infrastructure","AI & Machine Learning","SaaS Platforms",
    "Cybersecurity","DevOps & CI/CD","Data Engineering","Web Development","Automation"
  ];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap');

        @keyframes infinite-scroll { 0%{transform:translateX(0);} 100%{transform:translateX(-50%);} }
        @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:0.4;transform:scale(0.75);} }
        @keyframes float-orb { 0%,100%{transform:translateY(0) scale(1);} 50%{transform:translateY(-20px) scale(1.03);} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(22px);} to{opacity:1;transform:translateY(0);} }

        .animate-infinite-scroll { animation:infinite-scroll 35s linear infinite; display:flex; width:max-content; }
        .orb-float  { animation:float-orb 9s ease-in-out infinite; }
        .orb-float-2{ animation:float-orb 12s ease-in-out 3s infinite; }
        .fade-up    { animation:fadeUp 0.6s ease forwards; }
        .d1{animation-delay:0.08s;opacity:0;} .d2{animation-delay:0.2s;opacity:0;}
        .d3{animation-delay:0.32s;opacity:0;} .d4{animation-delay:0.44s;opacity:0;}

        .hero-card { transition:all 0.25s; }
        .hero-card:hover { background:rgba(99,102,241,0.08)!important; border-color:rgba(99,102,241,0.35)!important; transform:translateY(-3px); }
        .service-item:hover { background:rgba(99,102,241,0.05)!important; }
        .service-arrow { display:inline-flex;align-items:center;gap:5px;font-size:12px;color:#818cf8;cursor:pointer;transition:gap 0.18s;text-decoration:none;font-weight:600; }
        .service-arrow:hover { gap:9px; }
        .enterprise-card:hover { background:rgba(99,102,241,0.05)!important; border-color:rgba(99,102,241,0.25)!important; }

        .hero-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .hero-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
        }
        @media (max-width: 1023px) {
          .hero-layout { grid-template-columns: 1fr; gap: 28px; }
        }
        .hero-cta-row { display:flex; gap:10px; flex-wrap:wrap; }
        @media (max-width: 479px) {
          .hero-cta-row { flex-direction:column; }
          .hero-cta-row a { text-align:center; justify-content:center; }
        }
        .stats-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; text-align:center; }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(99,102,241,0.12);
          border-radius: 14px;
          overflow: hidden;
        }
        @media (max-width: 767px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); border-radius: 10px; }
          .service-item { padding: 20px 14px !important; }
          .service-item .svc-title { font-size: 14px !important; }
          .service-item .svc-desc  { font-size: 12px !important; }
        }
        .enterprise-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (max-width: 639px) {
          .enterprise-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
          .enterprise-card { padding: 20px 14px !important; gap: 10px !important; flex-direction: column !important; }
          .enterprise-icon { width: 38px !important; height: 38px !important; }
          .enterprise-title { font-size: 14px !important; }
          .enterprise-desc  { font-size: 12px !important; }
        }
        @media (max-width: 639px) {
          .hero-card { padding: 14px 10px !important; border-radius: 10px !important; }
          .hero-card-icon { width: 28px !important; height: 28px !important; border-radius: 7px !important; margin-bottom: 8px !important; }
          .hero-card-title { font-size: 12px !important; margin-bottom: 3px !important; }
          .hero-card-desc  { font-size: 11px !important; line-height: 1.5 !important; }
          .hero-stat-num   { font-size: 28px !important; margin-top: 12px !important; }
          .hero-stat-label { font-size: 10px !important; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section style={{ background: "#06060f", minHeight: "92vh", padding: "70px 0 60px", position: "relative", overflow: "hidden" }}>
        <div className="orb-float" style={{ position: "absolute", top: "-60px", right: "-60px", width: 360, height: 360, background: "radial-gradient(ellipse, rgba(99,102,241,0.14) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
        <div className="orb-float-2" style={{ position: "absolute", bottom: "-40px", left: "-40px", width: 280, height: 280, background: "radial-gradient(ellipse, rgba(129,140,248,0.08) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1280, padding: "0px 20px" }} className='md:mt-10 md:mx-auto'>
          <div className="hero-layout">

            {/* Left copy */}
            <div style={{ position: "relative", zIndex: 2 }}>
              <div className="fade-up d1" style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.22)", padding: "5px 14px", borderRadius: 100, marginBottom: 20 }}>
                <span style={{ width: 5, height: 5, background: "#818cf8", borderRadius: "50%", display: "inline-block", animation: "pulse-dot 2s infinite" }} />
                <span style={{ fontSize: 11, letterSpacing: "1.2px", textTransform: "uppercase", color: "#818cf8", fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>Enterprise IT Solutions</span>
              </div>

              <h1 className="fade-up d2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(30px, 4.5vw, 56px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.8px", color: "#e2e8f0", marginBottom: 16 }}>
                Engineering the Future with{" "}
                <span style={{ color: "#818cf8" }}>Intelligent Technology</span>
              </h1>

              <p className="fade-up d3" style={{ fontSize: "clamp(14px,1.8vw,16px)", color: "rgba(226,232,240,0.55)", lineHeight: 1.7, maxWidth: 440, marginBottom: 28 }}>
                Empowering global enterprises through cutting-edge SaaS platforms and intelligent automation systems built for scale.
              </p>

              <div className="fade-up d4 hero-cta-row">
                <Link to="/services" style={{ background: "#6366f1", color: "#fff", padding: "11px 24px", borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 7, transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#4f46e5"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(99,102,241,0.35)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#6366f1"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
                  Get Started <ArrowRight size={15} />
                </Link>
                <Link to="/contact" style={{ background: "transparent", color: "#e2e8f0", border: "1px solid rgba(226,232,240,0.15)", padding: "11px 24px", borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: "none", transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#6366f1"; e.currentTarget.style.color = "#818cf8"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(226,232,240,0.15)"; e.currentTarget.style.color = "#e2e8f0"; }}>
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right — 2×2 feature cards */}
            <div className="fade-up d3">
              <div className="hero-cards-grid">
                {[
                  { icon: <Zap size={16} />,      title: "AI-Powered Automation",  desc: "Reduce overhead with intelligent process automation.", stat: "94%", statLabel: "Efficiency gain", tall: true },
                  { icon: <Shield size={16} />,    title: "Enterprise Security",    desc: "Zero-trust architecture built for scale.", tall: false },
                  { icon: <Globe size={16} />,     title: "Global Infrastructure", desc: "99.99% uptime SLA across 30+ regions.", tall: false },
                  { icon: <BarChart3 size={16} />, title: "Real-time Analytics",   desc: "Deep insights into every layer of your stack.", tall: false },
                ].map((card, i) => (
                  <div key={i} className="hero-card" style={{
                    gridRow: card.tall ? "span 2" : undefined,
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(99,102,241,0.14)",
                    borderRadius: 12, padding: "20px 16px",
                  }}>
                    <div className="hero-card-icon" style={{ width: 34, height: 34, background: "rgba(99,102,241,0.12)", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", color: "#818cf8", marginBottom: 10 }}>{card.icon}</div>
                    <div className="hero-card-title" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, fontWeight: 700, color: "#e2e8f0", marginBottom: 5 }}>{card.title}</div>
                    <div className="hero-card-desc" style={{ fontSize: 12, color: "rgba(226,232,240,0.45)", lineHeight: 1.55 }}>{card.desc}</div>
                    {card.stat && <div className="hero-stat-num" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 34, fontWeight: 800, color: "#818cf8", marginTop: 16, lineHeight: 1 }}>{card.stat}<div className="hero-stat-label" style={{ fontSize: 11, color: "rgba(226,232,240,0.45)", marginTop: 5, fontWeight: 400, fontFamily: "'DM Sans', sans-serif" }}>{card.statLabel}</div></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ background: "#06060f", borderTop: "1px solid rgba(99,102,241,0.1)", borderBottom: "1px solid rgba(99,102,241,0.1)", padding: "28px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px" }}>
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div key={i} style={{ padding: "0 8px" }}>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(24px,4vw,36px)", fontWeight: 800, color: "#e2e8f0", letterSpacing: "-0.5px" }}>
                  {s.num.replace(/[+%yr]/g, '')}<span style={{ color: "#818cf8" }}>{s.num.match(/[+%yr]+/)?.[0]}</span>
                </div>
                <div style={{ fontSize: 12, color: "rgba(226,232,240,0.45)", marginTop: 3, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CLIENTS & PARTNERS ── */}
      <section style={{ background: "#06060f", padding: "52px 0", overflow: "hidden", borderBottom: "1px solid rgba(99,102,241,0.1)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px", marginBottom: 32, textAlign: "center" }}>
          <p style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: "#818cf8", marginBottom: 10, fontWeight: 700 }}>Trusted by</p>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(20px,3vw,32px)", fontWeight: 800, color: "#e2e8f0", letterSpacing: "-0.5px" }}>Clients & Partners</h2>
          <div style={{ height: 3, width: 36, background: "linear-gradient(90deg,#6366f1,#4f46e5)", borderRadius: 4, margin: "12px auto 0" }} />
        </div>
        <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: 60, background: "linear-gradient(to right, #06060f, transparent)", zIndex: 20, pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: 60, background: "linear-gradient(to left, #06060f, transparent)", zIndex: 20, pointerEvents: "none" }} />
          <div className="animate-infinite-scroll" style={{ alignItems: "center" }}>
            {[...myPartners, ...myPartners, ...myPartners].map((partner, index) => (
              <div key={index} style={{ display: "flex", alignItems: "center", gap: 8, margin: "0 28px", flexShrink: 0 }}>
                <img src={partner.image} alt={partner.name} style={{ height: 30, width: "auto", objectFit: "contain", borderRadius: 6, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(99,102,241,0.12)", boxShadow: "0 2px 10px rgba(0,0,0,0.2)", transition: "all 0.25s" }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 6px 18px rgba(99,102,241,0.18)"; e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)"; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)"; e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.12)"; }}
                />
                       </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ background: "#06060f", padding: "64px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px" }}>
          <p style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: "#818cf8", marginBottom: 12, fontWeight: 700 }}>What we do</p>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(22px,3.5vw,36px)", fontWeight: 800, color: "#e2e8f0", letterSpacing: "-0.5px", lineHeight: 1.2, marginBottom: 36, maxWidth: 500 }}>
            Solutions built for scale and speed
          </h2>
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className="service-item" style={{ background: "#06060f", padding: "28px 22px", transition: "all 0.25s" }}>
                <div style={{ fontSize: 11, color: "#818cf8", letterSpacing: "1px", marginBottom: 12, fontWeight: 700 }}>{s.num}</div>
                <div style={{ width: 38, height: 38, background: "rgba(99,102,241,0.1)", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", color: "#818cf8", marginBottom: 12 }}>{s.icon}</div>
                <div className="svc-title" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, fontWeight: 700, color: "#e2e8f0", marginBottom: 8 }}>{s.title}</div>
                <div className="svc-desc" style={{ fontSize: 12, color: "rgba(226,232,240,0.5)", lineHeight: 1.6 }}>{s.desc}</div>
                <Link to="/services" className="service-arrow" style={{ marginTop: 16 }}>Learn more <ArrowRight size={12} /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR ENTERPRISES ── */}
      <section style={{ background: "#0c0c1c", padding: "64px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -60, top: "50%", transform: "translateY(-50%)", opacity: 0.03, pointerEvents: "none" }}>
          <svg width="360" height="360" viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="90" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 12" />
            <circle cx="100" cy="100" r="70" stroke="#6366f1" strokeWidth="3" strokeDasharray="4 14" />
          </svg>
        </div>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <p style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: "#818cf8", marginBottom: 12, fontWeight: 700 }}>Why Innovis</p>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(22px,3.5vw,36px)", fontWeight: 800, color: "#e2e8f0", letterSpacing: "-0.5px", lineHeight: 1.2, marginBottom: 12 }}>Our Enterprises</h2>
            <p style={{ fontSize: "clamp(13px,1.8vw,15px)", color: "rgba(226,232,240,0.5)", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
              We bridge the gap between complex enterprise problems and elegant, scalable technology solutions.
            </p>
          </div>
          <div className="enterprise-grid">
            {enterprises.map((e, i) => (
              <div key={i} className="enterprise-card" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(99,102,241,0.12)", borderRadius: 12, padding: "24px", display: "flex", gap: 16, alignItems: "flex-start", transition: "all 0.25s" }}>
                <div className="enterprise-icon" style={{ width: 46, height: 46, background: "rgba(99,102,241,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#818cf8", flexShrink: 0 }}>{e.icon}</div>
                <div>
                  <h4 className="enterprise-title" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, fontWeight: 700, color: "#e2e8f0", marginBottom: 8 }}>{e.title}</h4>
                  <p className="enterprise-desc" style={{ fontSize: 13, color: "rgba(226,232,240,0.5)", lineHeight: 1.65 }}>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#06060f", padding: "64px 20px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(99,102,241,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(26px,4vw,46px)", fontWeight: 800, letterSpacing: "-1px", lineHeight: 1.12, color: "#e2e8f0", marginBottom: 14 }}>
            Ready to engineer<br />your future?
          </h2>
          <p style={{ color: "rgba(226,232,240,0.5)", fontSize: "clamp(13px,1.8vw,15px)", marginBottom: 28 }}>Let's build something extraordinary together.</p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/services" style={{ background: "#6366f1", color: "#fff", padding: "11px 28px", borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 7, transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#4f46e5"; e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(99,102,241,0.35)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#6366f1"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
              Start a Project <ArrowRight size={15} />
            </Link>
            <Link to="/contact" style={{ background: "transparent", color: "#e2e8f0", border: "1px solid rgba(226,232,240,0.15)", padding: "11px 28px", borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#6366f1"; e.currentTarget.style.color = "#818cf8"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(226,232,240,0.15)"; e.currentTarget.style.color = "#e2e8f0"; }}>
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;