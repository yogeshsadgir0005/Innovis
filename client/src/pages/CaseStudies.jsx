import React, { useState, useEffect } from 'react';
import { ArrowRight, BarChart3, TrendingDown, Zap, ChevronDown } from 'lucide-react';

const CaseStudies = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [expanded, setExpanded] = useState(null);

  const toggle = (idx) => setExpanded(prev => prev === idx ? null : idx);

  const studies = [
    {
      client: 'RIGHTVERSE Ai',
      title: 'Building a Legal Awareness Platform for Citizens',
      problem: 'Citizens lacked access to clear, simplified legal information, leaving them unable to understand or exercise their basic rights.',
      solution: 'Designed and launched a full-stack legal awareness web platform with categorised law guides, rights summaries, and an intuitive search experience.',
      results: [
        { icon: <Zap size={18}/>, stat: '3K+', label: 'Monthly Visitors' },
        { icon: <BarChart3 size={18}/>, stat: '4.7/5', label: 'User Rating' }
      ],
      deep: "We built RightVerse from the ground up using React and a Node.js backend. The platform features a structured content library covering criminal, civil, and constitutional law, all written in plain language. SEO-optimised pages and a clean search experience help users find relevant legal topics quickly. Since launch, the platform has grown to 3,000+ monthly visitors with a user satisfaction rating of 4.7 out of 5."
    },
    {
      client: 'SnapShop Ai',
      title: 'AI-Powered Shopping assistant for E-commerce',
      problem: 'Finding Products links to purchase , which you see on social media ',
      solution: 'Delivered Ai Powered search and shopping assistant with just image upload and get the product links with best prices and deals from multiple e-commerece platforms.',
      results: [
        { icon: <Zap size={18}/>, stat: '+80%', label: 'Faster Search' },
        { icon: <TrendingDown size={18}/>, stat: '-4 hours', label: 'Manual Efforts' }
      ],
      deep: "We built a structured recruitment workflow tool that helps the Product search from initial outreach through final onboarding. Document checklists and a shared dashboard keep all stakeholders aligned and cut down on back-and-forth communication. Since going live, the team has reduced average onboarding time from 11 days to 7, and overall hiring coordination speed has improved by around 80%."
    },
    {
      client: 'Localify Ai',
      title: 'AI-Powered Recruitment Management',
      problem: 'Find local businesses and their contact details along with manually creating website prototypes and pinch scripts manually',
      solution: 'Delivered Ai Powered management platform with structured pipelines, Business tracking, and compliance-ready reporting tools.',
      results: [
        { icon: <Zap size={18}/>, stat: '+80%', label: 'Clients' },
        { icon: <TrendingDown size={18}/>, stat: '-4 hours', label: 'Manual Time' }
      ],
      deep: "We built a structured recruitment workflow tool that helps the team track candidates from initial outreach through final onboarding. Document checklists and a shared dashboard keep all stakeholders aligned and cut down on back-and-forth communication. Since going live, the team has reduced average onboarding time from 11 days to 7, and overall hiring coordination speed has improved by around 80%."
    }, {
      client: 'RK TOURS & TRAVELS',
      title: 'Modernising Cab Booking Across Multiple Cities',
      problem: 'The booking process relied on phone calls and manual coordination, causing delays, customer drop-off, and difficulty scaling operations.',
      solution: 'Built a modern, mobile-first cab booking web application with instant booking confirmation and a simple admin dashboard.',
      results: [
        { icon: <Zap size={18}/>, stat: '+95%', label: 'Booking Volume' },
        { icon: <TrendingDown size={18}/>, stat: '-42%', label: 'Drop-off Rate' }
      ],
        deep: "We built a responsive React frontend paired with a Node.js backend to handle booking requests, route details, and confirmation notifications. A lightweight admin panel gives the team clear visibility over active bookings and customer requests. Within the first few months of launch, online bookings nearly doubled compared to the previous phone-only flow, and checkout drop-off reduced by around 42%."
    }

  ];

  return (
    <div style={{ fontFamily:"'DM Sans', sans-serif", background:'#06060f', minHeight:'100vh', position:'relative', overflow:'hidden' }}>
      <style>{`
        @keyframes float-orb { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-18px);} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px);} to{opacity:1;transform:translateY(0);} }
        .orb-float{animation:float-orb 9s ease-in-out infinite;}
        .orb-float-2{animation:float-orb 12s ease-in-out 3s infinite;}
        .fade-up{animation:fadeUp 0.6s ease forwards;opacity:0;}
        .case-card{background:rgba(255,255,255,0.02);border:1px solid rgba(99,102,241,0.12);border-radius:12px;transition:all 0.25s;display:flex;flex-direction:column;}
        .case-card:hover{background:rgba(99,102,241,0.04);border-color:rgba(99,102,241,0.26);transform:translateY(-3px);box-shadow:0 10px 28px rgba(99,102,241,0.1);}
        .case-btn{margin-top:20px;width:100%;padding:11px;border-radius:8px;border:1px solid rgba(99,102,241,0.22);color:#818cf8;background:transparent;font-size:13px;font-weight:600;display:flex;align-items:center;justify-content:center;gap:7px;transition:all 0.22s;cursor:pointer;font-family:"DM Sans",sans-serif;}
        .case-btn:hover{background:#6366f1;color:#fff;border-color:#6366f1;}
        .expand-content{overflow:hidden;transition:max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease;}
        .case-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        @media (max-width:1023px) { .case-grid { grid-template-columns:repeat(2,1fr); gap:14px; } }
        @media (max-width:639px) {
          .case-grid { grid-template-columns:repeat(2,1fr); gap:10px; }
          .case-card { padding:20px 14px !important; border-radius:10px !important; }
          .case-btn { padding:9px; font-size:12px; margin-top:14px; }
        }
      `}</style>

      <div className="orb-float" style={{ position:'absolute', top:'-40px', left:'-40px', width:420, height:420, background:'radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%)', borderRadius:'50%', pointerEvents:'none' }} />
      <div className="orb-float-2" style={{ position:'absolute', bottom:'10%', right:'-80px', width:340, height:340, background:'radial-gradient(ellipse, rgba(129,140,248,0.07) 0%, transparent 70%)', borderRadius:'50%', pointerEvents:'none' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center mb-16 fade-up" style={{ animationDelay:'0.1s' }}>
          <p style={{ fontSize:11, letterSpacing:'2px', textTransform:'uppercase', color:'#818cf8', marginBottom:14, fontWeight:700 }}>Proven Results</p>
          <h1 style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:'clamp(28px,4.5vw,48px)', fontWeight:800, color:'#e2e8f0', letterSpacing:'-1px', lineHeight:1.12, marginBottom:18 }}>
            Enterprise Success Stories
          </h1>
          <p style={{ fontSize:15, color:'rgba(226,232,240,0.55)', maxWidth:560, margin:'0 auto', lineHeight:1.7 }}>
            Real-world examples of how our technology solutions drive measurable business growth and scale operations.
          </p>
        </div>

        <div className="case-grid">
          {studies.map((study, idx) => {
            const isOpen = expanded === idx;
            return (
              <div key={idx} className="case-card fade-up" style={{ padding:'32px 26px', animationDelay:`${0.18+(0.12*idx)}s` }}>
                <div style={{ fontSize:11, fontWeight:700, color:'#818cf8', letterSpacing:'1.5px', textTransform:'uppercase', marginBottom:20, paddingBottom:16, borderBottom:'1px solid rgba(99,102,241,0.12)' }}>
                  {study.client}
                </div>
                <h3 style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:18, fontWeight:800, color:'#e2e8f0', marginBottom:22, lineHeight:1.3, letterSpacing:'-0.3px' }}>
                  {study.title}
                </h3>
                <div style={{ marginBottom:22, flexGrow:1 }}>
                  <h4 style={{ fontSize:11, fontWeight:700, color:'#e2e8f0', marginBottom:7, textTransform:'uppercase', letterSpacing:'0.5px' }}>Problem</h4>
                  <p style={{ fontSize:13, color:'rgba(226,232,240,0.5)', lineHeight:1.65, marginBottom:16 }}>{study.problem}</p>
                  <h4 style={{ fontSize:11, fontWeight:700, color:'#e2e8f0', marginBottom:7, textTransform:'uppercase', letterSpacing:'0.5px' }}>Solution</h4>
                  <p style={{ fontSize:13, color:'rgba(226,232,240,0.5)', lineHeight:1.65 }}>{study.solution}</p>
                </div>

                <div className="expand-content" style={{ maxHeight:isOpen?'220px':'0px', opacity:isOpen?1:0 }}>
                  <div style={{ background:'rgba(99,102,241,0.04)', border:'1px solid rgba(99,102,241,0.12)', borderRadius:10, padding:16, marginBottom:16 }}>
                    <h4 style={{ fontSize:11, fontWeight:700, color:'#818cf8', textTransform:'uppercase', letterSpacing:'1px', marginBottom:10 }}>Deep Dive</h4>
                    <p style={{ fontSize:13, color:'rgba(226,232,240,0.55)', lineHeight:1.7 }}>{study.deep}</p>
                  </div>
                </div>

                <div style={{ background:'rgba(99,102,241,0.04)', border:'1px solid rgba(99,102,241,0.12)', borderRadius:10, padding:'20px', marginTop:'auto' }}>
                  <h4 style={{ fontSize:11, fontWeight:700, color:'#818cf8', textTransform:'uppercase', letterSpacing:'1px', marginBottom:16 }}>Key Results</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {study.results.map((res, rIdx) => (
                      <div key={rIdx}>
                        <div style={{ display:'flex', alignItems:'center', gap:6, marginBottom:3 }}>
                          <span style={{ color:'#818cf8' }}>{res.icon}</span>
                          <span style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:24, fontWeight:800, color:'#e2e8f0', letterSpacing:'-0.3px' }}>{res.stat}</span>
                        </div>
                        <span style={{ fontSize:11, color:'rgba(226,232,240,0.5)', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.5px' }}>{res.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="case-btn" onClick={() => toggle(idx)}>
                  {isOpen ? 'Show Less' : 'Read Full Case Study'}
                  <ChevronDown size={14} style={{ transform:isOpen?'rotate(180deg)':'rotate(0deg)', transition:'transform 0.3s' }} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;