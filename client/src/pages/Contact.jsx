import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/axios';
import { MapPin, Phone, Mail, Loader2, CheckCircle } from 'lucide-react';

const FacebookIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);
const TwitterIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);
const LinkedinIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Contact = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [formData, setFormData] = useState({ fullName:'', email:'', company:'', phone:'', message:'' });
  const [status, setStatus] = useState({ loading:false, error:null, success:false });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading:true, error:null, success:false });
    try {
      await axiosInstance.post('/contact', formData);
      setStatus({ loading:false, error:null, success:true });
      setFormData({ fullName:'', email:'', company:'', phone:'', message:'' });
      setTimeout(() => setStatus(s => ({ ...s, success:false })), 5000);
    } catch (err) {
      setStatus({ loading:false, error:err.response?.data?.message || 'Something went wrong. Please try again.', success:false });
    }
  };

  return (
    <div style={{ fontFamily:"'DM Sans', sans-serif", background:"#06060f", minHeight:"100vh", position:"relative", overflow:"hidden" }}>
      <style>{`
        @keyframes float-orb { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-18px);} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px);} to{opacity:1;transform:translateY(0);} }
        .orb-float { animation:float-orb 9s ease-in-out infinite; }
        .orb-float-2 { animation:float-orb 12s ease-in-out 3s infinite; }
        .fade-up { animation:fadeUp 0.6s ease forwards; opacity:0; }
        .contact-input {
          background:rgba(99,102,241,0.04);
          border:1px solid rgba(99,102,241,0.14);
          color:#e2e8f0;
          transition:all 0.22s;
        }
        .contact-input::placeholder { color:rgba(226,232,240,0.28); }
        .contact-input:focus {
          outline:none;
          border-color:#6366f1;
          box-shadow:0 0 0 3px rgba(99,102,241,0.1);
          background:rgba(99,102,241,0.07);
        }
        .social-btn {
          display:inline-flex; align-items:center; justify-content:center;
          width:36px; height:36px; border-radius:8px;
          background:rgba(99,102,241,0.08); border:1px solid rgba(99,102,241,0.18);
          color:#818cf8; transition:all 0.18s;
        }
        .social-btn:hover { background:#6366f1; border-color:#6366f1; color:#fff; transform:translateY(-1px); box-shadow:0 4px 14px rgba(99,102,241,0.28); }
      `}</style>

      <div className="orb-float" style={{ position:"absolute", top:"-10%", left:"-5%", width:420, height:420, background:"radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%)", borderRadius:"50%", pointerEvents:"none" }} />
      <div className="orb-float-2" style={{ position:"absolute", bottom:"-10%", right:"-5%", width:500, height:500, background:"radial-gradient(ellipse, rgba(129,140,248,0.07) 0%, transparent 70%)", borderRadius:"50%", pointerEvents:"none" }} />

      <div className="py-20 flex items-center justify-center relative z-10">
        <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-up" style={{ animationDelay:"0.1s" }}>
            <p style={{ fontSize:11, letterSpacing:"2px", textTransform:"uppercase", color:"#818cf8", marginBottom:14, fontWeight:700 }}>Connect With Us</p>
            <h1 style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"clamp(28px,4.5vw,48px)", fontWeight:800, color:"#e2e8f0", letterSpacing:"-1px", lineHeight:1.12, marginBottom:16 }}>
              Let's Build Something Great
            </h1>
            <p style={{ fontSize:15, color:"rgba(226,232,240,0.55)", maxWidth:520, margin:"0 auto", lineHeight:1.7 }}>
              Ready to transform your enterprise infrastructure? Reach out to our team of engineers and architects.
            </p>
          </div>

          <div className="rounded-[20px] overflow-hidden flex flex-col lg:flex-row fade-up" style={{ background:"rgba(255,255,255,0.02)", border:"1px solid rgba(99,102,241,0.12)", backdropFilter:"blur(14px)", animationDelay:"0.2s" }}>
            {/* Left Info Panel */}
            <div className="lg:w-2/5 p-8 lg:p-12 relative overflow-hidden flex flex-col justify-between" style={{ background:"rgba(0,0,0,0.15)", borderRight:"1px solid rgba(99,102,241,0.08)" }}>
              <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs><pattern id="grid" width="36" height="36" patternUnits="userSpaceOnUse"><path d="M 36 0 L 0 0 0 36" fill="none" stroke="#fff" strokeWidth="1"/></pattern></defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
              <div className="relative z-10 mb-10">
                <h2 style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:22, fontWeight:700, color:"#e2e8f0", marginBottom:10 }}>Contact Information</h2>
                <p style={{ fontSize:13, color:"rgba(226,232,240,0.5)", lineHeight:1.65 }}>
                  Fill out the form and our technical team will get back to you within 24 hours.
                </p>
              </div>
              <div className="relative z-10 space-y-6 mb-10 flex-grow">
                <div className="flex items-start gap-3">
                  <div style={{ width:38, height:38, borderRadius:9, background:"rgba(99,102,241,0.1)", display:"flex", alignItems:"center", justifyContent:"center", color:"#818cf8", flexShrink:0 }}><Phone size={17}/></div>
                  <div>
                    <h4 style={{ fontSize:11, fontWeight:700, color:"rgba(226,232,240,0.38)", textTransform:"uppercase", letterSpacing:"1px", marginBottom:3 }}>Phone</h4>
                    <p style={{ fontSize:14, fontWeight:500, color:"#e2e8f0" }}>+91 80879 59271</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div style={{ width:38, height:38, borderRadius:9, background:"rgba(99,102,241,0.1)", display:"flex", alignItems:"center", justifyContent:"center", color:"#818cf8", flexShrink:0 }}><Mail size={17}/></div>
                  <div>
                    <h4 style={{ fontSize:11, fontWeight:700, color:"rgba(226,232,240,0.38)", textTransform:"uppercase", letterSpacing:"1px", marginBottom:3 }}>Email</h4>
                    <p style={{ fontSize:14, fontWeight:500, color:"#e2e8f0" }}>contact@innovis.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div style={{ width:38, height:38, borderRadius:9, background:"rgba(99,102,241,0.1)", display:"flex", alignItems:"center", justifyContent:"center", color:"#818cf8", flexShrink:0 }}><MapPin size={17}/></div>
                  <div>
                    <h4 style={{ fontSize:11, fontWeight:700, color:"rgba(226,232,240,0.38)", textTransform:"uppercase", letterSpacing:"1px", marginBottom:3 }}>Office</h4>
                    <p style={{ fontSize:13, fontWeight:500, color:"#e2e8f0", lineHeight:1.55 }}>Innovis Pvt. Ltd., Sinnar,<br/>Maharashtra, India 422103</p>
                  </div>
                </div>
              </div>
              <div className="relative z-10">
                <h4 style={{ fontSize:11, fontWeight:700, color:"rgba(226,232,240,0.38)", textTransform:"uppercase", letterSpacing:"1px", marginBottom:12 }}>Follow Us</h4>
                <div className="flex gap-3">
                  <a href="#" className="social-btn"><LinkedinIcon size={15}/></a>
                  <a href="#" className="social-btn"><TwitterIcon size={15}/></a>
                  <a href="#" className="social-btn"><FacebookIcon size={15}/></a>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:w-3/5 p-8 lg:p-12">
              {status.success && (
                <div style={{ marginBottom:20, padding:14, background:"rgba(34,197,94,0.08)", color:"#4ade80", borderRadius:9, border:"1px solid rgba(34,197,94,0.18)", display:"flex", alignItems:"center", gap:10, fontSize:13, fontWeight:500 }}>
                  <CheckCircle size={17} /> Message sent successfully! We will be in touch soon.
                </div>
              )}
              {status.error && (
                <div style={{ marginBottom:20, padding:14, background:"rgba(239,68,68,0.08)", color:"#f87171", borderRadius:9, border:"1px solid rgba(239,68,68,0.18)", fontSize:13, fontWeight:500 }}>
                  {status.error}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label style={{ display:"block", fontSize:12, fontWeight:700, color:"rgba(226,232,240,0.6)", marginBottom:7, letterSpacing:"0.4px" }}>Full Name *</label>
                    <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg contact-input" placeholder="Your name" />
                  </div>
                  <div>
                    <label style={{ display:"block", fontSize:12, fontWeight:700, color:"rgba(226,232,240,0.6)", marginBottom:7, letterSpacing:"0.4px" }}>Email Address *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg contact-input" placeholder="your@company.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label style={{ display:"block", fontSize:12, fontWeight:700, color:"rgba(226,232,240,0.6)", marginBottom:7, letterSpacing:"0.4px" }}>Company</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg contact-input" placeholder="Your Company Ltd." />
                  </div>
                  <div>
                    <label style={{ display:"block", fontSize:12, fontWeight:700, color:"rgba(226,232,240,0.6)", marginBottom:7, letterSpacing:"0.4px" }}>Phone</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg contact-input" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>
                <div>
                  <label style={{ display:"block", fontSize:12, fontWeight:700, color:"rgba(226,232,240,0.6)", marginBottom:7, letterSpacing:"0.4px" }}>Message *</label>
                  <textarea name="message" required rows="5" value={formData.message} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg contact-input resize-none" placeholder="Tell us about your project or inquiry..." />
                </div>
                <button type="submit" disabled={status.loading}
                  style={{ width:"100%", padding:"13px", borderRadius:8, background:"#6366f1", color:"#fff", fontWeight:600, fontSize:14, display:"flex", alignItems:"center", justifyContent:"center", gap:8, transition:"all 0.22s", opacity:status.loading?0.7:1, cursor:status.loading?"not-allowed":"pointer" }}
                  onMouseEnter={e=>{ if(!status.loading){ e.currentTarget.style.background="#4f46e5"; e.currentTarget.style.transform="translateY(-1px)"; e.currentTarget.style.boxShadow="0 8px 22px rgba(99,102,241,0.35)"; } }}
                  onMouseLeave={e=>{ if(!status.loading){ e.currentTarget.style.background="#6366f1"; e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="none"; } }}>
                  {status.loading ? <Loader2 className="animate-spin" size={18} /> : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;