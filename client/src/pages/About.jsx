import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Avatar = ({ name, color }) => {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  return (
    <div style={{ width: 72, height: 72, margin: '0 auto 16px', borderRadius: '50%', background: color, border: '2px solid rgba(129,140,248,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 22, fontWeight: 800, color: '#e2e8f0', letterSpacing: '-1px', userSelect: 'none', boxShadow: '0 0 18px rgba(99,102,241,0.2)' }}>
      {initials}
    </div>
  );
};

const LinkedinIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const avatarColors = [
  'linear-gradient(135deg, #6366f1, #4f46e5)',
  'linear-gradient(135deg, #818cf8, #6366f1)',
  'linear-gradient(135deg, #4f46e5, #3730a3)',
  'linear-gradient(135deg, #818cf8, #4f46e5)',
];

const About = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const timeline = [
    { year: '2025', title: 'Innovis Founded', desc: 'Established in Sinnar, Maharashtra, Innovis launched its first enterprise consulting platform, delivering bespoke web and SaaS solutions to early-stage clients across India.', align: 'right' },
    { year: '2025', title: 'First Platform Deployed', desc: 'Built and shipped our first proprietary multi-tenant SaaS product, establishing Innovis as a serious technology partner for growing businesses.', align: 'left' },
      { year: '2026', title: 'AI & Automation Division', desc: 'Formally established our AI & Automation practice, integrating large language models, computer vision, and predictive analytics directly into enterprise client workflows.', align: 'right' }
  ];

  const missionCards = [
    { title: 'Our Mission', content: 'To democratize enterprise technology by delivering intelligent, scalable software solutions that empower businesses of every size to compete on a global stage — without compromise on quality or speed.' },
    { title: 'Our Vision', content: "To be the most trusted technology partner for forward-thinking enterprises — engineering tomorrow's infrastructure today, and building long-term relationships that outlast every project." },
    { title: 'Core Values', content: 'Innovation without shortcuts, radical client-first thinking, and a relentless engineering culture that holds every line of code to a production-grade standard before it ships.' }
  ];

  const leaders = [
    { name: 'Yogesh Sadgir', title: 'CO-FOUNDER', bio: "Yogesh architects Innovis's technical strategy and platform vision. With deep expertise in full-stack engineering and cloud systems, he ensures every solution is built for resilience and scale.", linkedin: 'https://www.linkedin.com/in/yogesh-sadgir' },
    { name: 'Aniket Pangavhane', title: 'CO-FOUNDER', bio: 'Aniket drives product innovation at Innovis, translating complex enterprise requirements into elegant SaaS platforms. He leads our front-end and product design culture.', linkedin: 'https://www.linkedin.com/in/aniket-pangavhane' },
    { name: 'Om Bhavsar', title: 'CO-FOUNDER', bio: 'Om leads our AI & Automation engineering division. His background in machine learning and data pipelines powers the intelligent features embedded across Innovis client deployments.', linkedin: 'https://www.linkedin.com/in/om-bhavsar' },
    { name: 'Karan Deshmukh', title: 'CO-FOUNDER', bio: 'Karan oversees business development, client strategy, and growth partnerships at Innovis. He bridges technical capability with real business outcomes for every engagement.', linkedin: 'https://www.linkedin.com/in/karan-deshmukh' }
  ];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#06060f', minHeight: '100vh', overflow: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap');
        @keyframes float-orb { 0%,100%{transform:translateY(0) scale(1);} 50%{transform:translateY(-20px) scale(1.03);} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(22px);} to{opacity:1;transform:translateY(0);} }
        .orb-float{animation:float-orb 9s ease-in-out infinite;}
        .orb-float-2{animation:float-orb 12s ease-in-out 3s infinite;}
        .fade-up{animation:fadeUp 0.6s ease forwards;opacity:0;}
        .about-card{background:rgba(255,255,255,0.02);border:1px solid rgba(99,102,241,0.12);border-radius:12px;transition:all 0.25s;}
        .about-card:hover{background:rgba(99,102,241,0.05);border-color:rgba(99,102,241,0.25);transform:translateY(-3px);box-shadow:0 8px 24px rgba(99,102,241,0.1);}
        .leader-card{background:rgba(255,255,255,0.02);border:1px solid rgba(99,102,241,0.12);border-radius:12px;transition:all 0.25s;padding:28px 24px;text-align:center;}
        .leader-card:hover{background:rgba(99,102,241,0.05);border-color:rgba(99,102,241,0.25);transform:translateY(-3px);box-shadow:0 8px 24px rgba(99,102,241,0.1);}
        .social-btn{display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:8px;background:rgba(99,102,241,0.1);color:#818cf8;transition:all 0.18s;text-decoration:none;}
        .social-btn:hover{background:#6366f1;color:#fff;transform:translateY(-1px);box-shadow:0 4px 14px rgba(99,102,241,0.3);}
        .leaders-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        @media (max-width: 479px) {
          .leaders-grid { gap: 10px; }
          .leader-card { padding: 20px 14px !important; }
        }
        .mission-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 767px) {
          .mission-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .about-card { padding: 20px 14px !important; border-radius: 10px !important; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section style={{ padding: '100px 0 52px', position: 'relative' }}>
        <div className="orb-float" style={{ position: 'absolute', top: '-40px', left: '-40px', width: 340, height: 340, background: 'radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center fade-up" style={{ animationDelay: '0.05s' }}>
          <p style={{ fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', color: '#818cf8', marginBottom: 14, fontWeight: 700 }}>Our Story</p>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(28px, 4.5vw, 48px)', fontWeight: 800, color: '#e2e8f0', letterSpacing: '-1px', lineHeight: 1.12, marginBottom: 18 }}>
            Built by Engineers,<br />Driven by Impact
          </h1>
          <p style={{ fontSize: 15, color: 'rgba(226,232,240,0.55)', maxWidth: 540, margin: '0 auto', lineHeight: 1.7 }}>
            From a small tech consultancy in Maharashtra to a trusted enterprise technology partner — this is how Innovis was built.
          </p>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section style={{ padding: '32px 0 80px', position: 'relative' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full hidden md:block" style={{ background: 'linear-gradient(180deg, transparent, rgba(99,102,241,0.3), transparent)' }} />
            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div key={idx} className={`relative flex items-center justify-between w-full ${item.align === 'left' ? 'flex-row-reverse' : ''}`}>
                  <div className="w-5/12 hidden md:block" />
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full z-10 hidden md:block" style={{ background: '#818cf8', boxShadow: '0 0 0 5px #06060f, 0 0 10px rgba(129,140,248,0.5)' }} />
                  <div className={`w-full md:w-5/12 ${item.align === 'right' ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'}`} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(99,102,241,0.12)', borderRadius: 12, padding: '22px 24px' }}>
                    <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 26, fontWeight: 800, color: '#818cf8', marginBottom: 6, lineHeight: 1 }}>{item.year}</h3>
                    <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, fontWeight: 700, color: '#e2e8f0', marginBottom: 8 }}>{item.title}</h4>
                    <p style={{ fontSize: 13, color: 'rgba(226,232,240,0.5)', lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section style={{ background: '#0c0c1c', padding: '80px 0', borderTop: '1px solid rgba(99,102,241,0.1)', borderBottom: '1px solid rgba(99,102,241,0.1)', position: 'relative' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 fade-up" style={{ animationDelay: '0.1s' }}>
            <p style={{ fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', color: '#818cf8', marginBottom: 12, fontWeight: 700 }}>What drives us</p>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, color: '#e2e8f0', letterSpacing: '-0.5px' }}>Mission & Vision</h2>
          </div>
          <div className="mission-grid">
            {missionCards.map((card, idx) => (
              <div key={idx} className="about-card fade-up" style={{ padding: '32px 26px', textAlign: 'center', animationDelay: `${0.12 * (idx + 2)}s` }}>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, fontWeight: 700, color: '#e2e8f0', marginBottom: 16, paddingBottom: 16, borderBottom: '1px solid rgba(99,102,241,0.14)' }}>{card.title}</h3>
                <p style={{ fontSize: 13, color: 'rgba(226,232,240,0.55)', lineHeight: 1.75 }}>{card.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERS ── */}
      <section style={{ padding: '80px 0 100px', position: 'relative', overflow: 'hidden' }}>
        <div className="orb-float-2" style={{ position: 'absolute', top: '20%', right: '-80px', width: 340, height: 340, background: 'radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 fade-up">
            <p style={{ fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', color: '#818cf8', marginBottom: 12, fontWeight: 700 }}>The Team</p>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, color: '#e2e8f0', letterSpacing: '-0.5px' }}>Meet Our Co-Founders</h2>
            <p style={{ fontSize: 14, color: 'rgba(226,232,240,0.5)', maxWidth: 440, margin: '12px auto 0', lineHeight: 1.7 }}>Four engineers who left comfortable careers to build technology that actually matters.</p>
          </div>
          <div className="leaders-grid">
            {leaders.map((leader, idx) => (
              <div key={idx} className="leader-card fade-up" style={{ animationDelay: `${0.1 * (idx + 1)}s` }}>
                <Avatar name={leader.name} color={avatarColors[idx]} />
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 17, fontWeight: 700, color: '#e2e8f0', marginBottom: 3 }}>{leader.name}</h3>
                <p style={{ fontSize: 11, fontWeight: 700, color: '#818cf8', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 12 }}>{leader.title}</p>
                <p style={{ fontSize: 13, color: 'rgba(226,232,240,0.5)', lineHeight: 1.7, marginBottom: 18 }}>{leader.bio}</p>
                <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn"><LinkedinIcon size={14} /></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#0c0c1c', borderTop: '1px solid rgba(99,102,241,0.1)', padding: '80px 20px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 55% 45% at 50% 100%, rgba(99,102,241,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(24px,3.5vw,40px)', fontWeight: 800, letterSpacing: '-0.8px', lineHeight: 1.15, color: '#e2e8f0', marginBottom: 16 }}>Ready to work with us?</h2>
          <p style={{ color: 'rgba(226,232,240,0.5)', fontSize: 15, marginBottom: 32, lineHeight: 1.7, maxWidth: 480, margin: '0 auto 32px' }}>Tell us about your project and our engineering team will craft a solution built for your exact requirements.</p>
          <Link to="/contact" style={{ background: '#6366f1', color: '#fff', padding: '12px 32px', borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 7, transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#4f46e5'; e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(99,102,241,0.35)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#6366f1'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;