import React from 'react';
import { ArrowRight } from 'lucide-react';

const Partners = () => {
  const partners = [
     { id:1, title:'Localify Ai', category:'AI & AUTOMATION', subtitle:'Smart Solutions for a Smarter Future', description:'Leveraging cutting-edge AI to deliver personalized experiences and automate routine tasks, empowering businesses to innovate and grow.', image:'/Localify.png', bgColor:'rgba(99,102,241,0.06)', url:'https://localify-three.vercel.app' },
     { id:2, title:'SnapShop Ai', category:'AI & AUTOMATION', subtitle:'Ai based Solutions for a Complex Problems', description:'AI-powered product search and shopping assistant that helps users find the best deals and prices across multiple e-commerce platforms.', image:'/SnapShop.png', bgColor:'rgba(99,102,241,0.06)', url:'https://snapshop-ai-eta.vercel.app' },  
    { id:3, title:'RightVerse Ai', category:'Ai LEGAL & HUMAN RIGHTS', subtitle:'Justice, Liberty, Equality for All', description:'Empowering citizens to understand the law and stand up for their rights through simplified legal information and education.', image:'/RV.png', bgColor:'rgba(255,255,255,0.02)', url:'https://righ-verse.vercel.app' },
    { id:4, title:'RK Tours & Travels', category:'TRAVEL & MOBILITY', subtitle:'Book Your Ride, Anytime Anywhere', description:'Reliable, comfortable, and affordable cab booking services operating seamlessly across 100+ cities in India.', image:'/RK.png', bgColor:'#0d0d1e', url:'https://rk-tours-travels.vercel.app' },
   
  ];

  return (
    <div style={{ fontFamily:"'DM Sans', sans-serif", background:"#06060f", minHeight:"100vh", position:"relative", overflow:"hidden" }}>
      <style>{`
        @keyframes float-orb { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-18px);} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px);} to{opacity:1;transform:translateY(0);} }
        .orb-float { animation: float-orb 9s ease-in-out infinite; }
        .orb-float-2 { animation: float-orb 12s ease-in-out 3s infinite; }
        .fade-up { animation: fadeUp 0.6s ease forwards; }
        .partner-card { background:rgba(255,255,255,0.02); border:1px solid rgba(99,102,241,0.12); border-radius:12px; transition:all 0.25s; display:flex; flex-direction:column; overflow:hidden; }
        .partner-card:hover { background:rgba(99,102,241,0.05); border-color:rgba(99,102,241,0.28); transform:translateY(-3px); box-shadow:0 10px 28px rgba(99,102,241,0.12); }
        .partner-img-wrapper img { transition:transform 0.6s ease; }
        .partner-card:hover .partner-img-wrapper img { transform:scale(1.04); }
        .service-arrow { display:inline-flex; align-items:center; gap:5px; font-size:13px; font-weight:600; color:#818cf8; cursor:pointer; transition:gap 0.18s; text-decoration:none; }
        .service-arrow:hover { gap:9px; }
        .partners-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        @media (max-width:1023px) { .partners-grid { grid-template-columns:repeat(2,1fr); gap:14px; } }
        @media (max-width:479px) {
          .partners-grid { grid-template-columns:repeat(2,1fr); gap:8px; }
          .partner-card { border-radius:10px !important; }
          .partner-img-wrapper { height:120px !important; }
          .partner-content { padding:12px !important; }
          .partner-title { font-size:13px !important; }
          .partner-subtitle { font-size:11px !important; }
          .partner-desc { display:none; }
        }
      `}</style>

      <div className="orb-float" style={{ position:"absolute", top:"-60px", left:"-60px", width:360, height:360, background:"radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)", borderRadius:"50%", pointerEvents:"none" }} />
      <div className="orb-float-2" style={{ position:"absolute", bottom:"10%", right:"-80px", width:420, height:420, background:"radial-gradient(ellipse, rgba(129,140,248,0.07) 0%, transparent 70%)", borderRadius:"50%", pointerEvents:"none" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center mb-16 fade-up">
          <p style={{ fontSize:11, letterSpacing:"2px", textTransform:"uppercase", color:"#818cf8", marginBottom:12, fontWeight:700 }}>Our Network</p>
          <h1 style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"clamp(28px,4.5vw,48px)", fontWeight:800, color:"#e2e8f0", letterSpacing:"-1px", lineHeight:1.12, marginBottom:16 }}>
            Our Partners & Clients
          </h1>
          <p style={{ fontSize:15, color:"rgba(226,232,240,0.55)", maxWidth:520, margin:"0 auto", lineHeight:1.7 }}>
            A showcase of cutting-edge platforms and modern digital solutions engineered by our team.
          </p>
        </div>

        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={partner.id} className="partner-card fade-up" style={{ animationDelay:`${index*0.12}s` }}>
              <div className="relative overflow-hidden flex items-center justify-center partner-img-wrapper" style={{ height:200, width:'100%', background:partner.bgColor }}>
                <div style={{ position:"absolute", top:"12px", right:"12px", zIndex:10, background:"rgba(99,102,241,0.12)", backdropFilter:"blur(8px)", color:"#818cf8", fontSize:"9px", fontWeight:700, padding:"5px 12px", letterSpacing:"1px", textTransform:"uppercase", borderRadius:"100px", border:"1px solid rgba(99,102,241,0.22)" }}>
                  {partner.category}
                </div>
                <img src={partner.image} alt={partner.title} className="w-full h-full object-contain p-6" />
              </div>
              <div className="partner-content" style={{ padding:"24px", display:"flex", flexDirection:"column", flexGrow:1, background:"transparent" }}>
                <h3 className="partner-title" style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:18, fontWeight:700, color:"#e2e8f0", marginBottom:5 }}>{partner.title}</h3>
                <p className="partner-subtitle" style={{ fontSize:13, fontWeight:600, color:"#818cf8", marginBottom:12 }}>{partner.subtitle}</p>
                <p className="partner-desc" style={{ fontSize:13, color:"rgba(226,232,240,0.5)", lineHeight:1.65, marginBottom:24, flexGrow:1 }}>{partner.description}</p>
                <a href={partner.url} target="_blank" rel="noopener noreferrer" className="service-arrow">
                  Visit Website <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;