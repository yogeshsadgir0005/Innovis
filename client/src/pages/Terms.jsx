import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Terms = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const sections = [
    { title: '1. Acceptance of Terms', content: `By accessing or using the Innovis IT Solutions website (innovis.com) and any services offered therein, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this website.\n\nThese Terms of Service apply to all visitors, users, and others who access or use the website. Innovis reserves the right to update these Terms at any time. Continued use of the website after any modification constitutes acceptance of the new terms.` },
    { title: '2. Services Description', content: `Innovis IT Solutions provides enterprise technology services including, but not limited to:\n\n• Custom web and software development\n• SaaS platform design and development\n• Cloud infrastructure services (AWS, Azure, GCP)\n• Cybersecurity consulting and implementation\n• AI and automation engineering\n• Data engineering and business intelligence\n\nSpecific service terms, deliverables, timelines, and pricing are governed by separate Service Agreements or Statements of Work (SOW) entered into between Innovis and each client.` },
    { title: '3. Intellectual Property', content: `The content on this website — including text, graphics, logos, images, and software — is the property of Innovis IT Solutions and is protected by applicable intellectual property laws.\n\nYou may not reproduce, distribute, modify, or create derivative works from any content on this website without express written permission from Innovis.\n\nClient work product, including custom software developed under a service agreement, is subject to the intellectual property provisions specified in the respective service contract. Unless otherwise agreed, upon full payment, clients receive a license to use the delivered software for their intended business purpose.` },
    { title: '4. User Conduct', content: `When using this website, you agree not to:\n\n• Use the website for any unlawful purpose or in violation of any regulations.\n• Attempt to gain unauthorized access to any part of the website or its systems.\n• Transmit any malicious code, viruses, or disruptive software.\n• Submit false or misleading information through contact forms.\n• Engage in any activity that interferes with the proper functioning of the website.\n• Use automated bots, scrapers, or crawlers without prior written consent.` },
    { title: '5. Limitation of Liability', content: `To the maximum extent permitted by applicable law, Innovis IT Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, this website or our services.\n\nThe website and its content are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.\n\nOur total liability for any claim arising from the use of this website shall not exceed INR 1,000 (or equivalent currency).` },
    { title: '6. Third-Party Links', content: `Our website may contain links to third-party websites, including client and partner portals. These links are provided for your convenience only. Innovis does not endorse, control, or assume responsibility for the content, privacy policies, or practices of any third-party websites.\n\nWe encourage you to read the terms and privacy policies of any third-party websites you visit.` },
    { title: '7. Confidentiality', content: `Any information submitted through our contact forms or communicated to Innovis in the course of business discussions will be treated with professional confidentiality. We will not disclose your business requirements, technical challenges, or project details to third parties without your consent, except as required by law.\n\nFormal confidentiality obligations for engagements are governed by Non-Disclosure Agreements (NDAs) entered into prior to project commencement.` },
    { title: '8. Governing Law', content: `These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or your use of this website shall be subject to the exclusive jurisdiction of the courts located in Nashik, Maharashtra, India.\n\nIf any provision of these Terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.` },
    { title: '9. Contact Information', content: `For questions regarding these Terms of Service, please contact us:\n\n• **Email**: contact@innovis.com\n• **Phone**: +91 80879 59271\n• **Address**: Innovis Pvt. Ltd., Sinnar, Maharashtra, India 422103` }
  ];

  return (
    <div style={{ fontFamily:"'DM Sans', sans-serif", background:'#06060f', minHeight:'100vh' }}>
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(18px);} to{opacity:1;transform:translateY(0);} }
        .fade-up{animation:fadeUp 0.55s ease forwards;opacity:0;}
        .policy-section{border-bottom:1px solid rgba(99,102,241,0.1);padding:26px 0;}
        .policy-section:last-child{border-bottom:none;}
      `}</style>

      <section style={{ background:'linear-gradient(180deg, #0c0c1c, #06060f)', borderBottom:'1px solid rgba(99,102,241,0.1)', padding:'72px 0 52px', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 45% 70% at 82% 50%, rgba(99,102,241,0.08) 0%, transparent 70%)', pointerEvents:'none' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/" className="fade-up" style={{ animationDelay:'0.05s', display:'inline-flex', alignItems:'center', gap:7, color:'rgba(226,232,240,0.45)', fontSize:13, fontWeight:600, marginBottom:28, transition:'color 0.18s' }}
            onMouseEnter={e=>e.currentTarget.style.color='#818cf8'}
            onMouseLeave={e=>e.currentTarget.style.color='rgba(226,232,240,0.45)'}>
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <p className="fade-up" style={{ animationDelay:'0.1s', fontSize:11, letterSpacing:'2px', textTransform:'uppercase', color:'#818cf8', marginBottom:14, fontWeight:700 }}>Legal</p>
          <h1 className="fade-up" style={{ animationDelay:'0.15s', fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:'clamp(26px,4.5vw,44px)', fontWeight:800, color:'#e2e8f0', letterSpacing:'-1px', lineHeight:1.12, marginBottom:16 }}>
            Terms of Service
          </h1>
          <p className="fade-up" style={{ animationDelay:'0.2s', fontSize:14, color:'rgba(226,232,240,0.45)', lineHeight:1.65 }}>
            Last Updated: May 2025 · Effective for all users of innovis.com
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div style={{ background:'rgba(255,255,255,0.02)', border:'1px solid rgba(99,102,241,0.12)', borderRadius:14, padding:'40px 36px' }}>
          <p style={{ fontSize:14, color:'rgba(226,232,240,0.6)', lineHeight:1.8, marginBottom:32, paddingBottom:28, borderBottom:'1px solid rgba(99,102,241,0.1)' }}>
            Please read these Terms of Service carefully before using the Innovis IT Solutions website. These terms govern your access to and use of our website and services. By using our site, you accept and agree to be bound by these terms.
          </p>
          {sections.map((sec, idx) => (
            <div key={idx} className="policy-section">
              <h2 style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:17, fontWeight:700, color:'#e2e8f0', marginBottom:14 }}>{sec.title}</h2>
              <div style={{ fontSize:13, color:'rgba(226,232,240,0.58)', lineHeight:1.85, whiteSpace:'pre-line' }}>
                {sec.content.split('\n').map((line, i) => {
                  const bold = line.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#e2e8f0">$1</strong>');
                  return <p key={i} style={{ marginBottom:line.trim()===''?7:3 }} dangerouslySetInnerHTML={{ __html: bold }} />;
                })}
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign:'center', marginTop:36 }}>
          <p style={{ fontSize:13, color:'rgba(226,232,240,0.35)', marginBottom:18 }}>Have questions about these terms?</p>
          <Link to="/contact" style={{ background:'#6366f1', color:'#fff', padding:'10px 26px', borderRadius:8, fontWeight:600, fontSize:13, textDecoration:'none', transition:'all 0.2s', display:'inline-block' }}
            onMouseEnter={e=>{ e.currentTarget.style.background='#4f46e5'; e.currentTarget.style.transform='translateY(-1px)'; }}
            onMouseLeave={e=>{ e.currentTarget.style.background='#6366f1'; e.currentTarget.style.transform='none'; }}>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Terms;
