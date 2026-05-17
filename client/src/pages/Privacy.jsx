import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Privacy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const sections = [
    { title: '1. Information We Collect', content: `We collect information you provide directly to us when you use our services or contact us. This includes:\n\n• **Contact Form Data**: Name, email address, company name, phone number, and message content when you submit an inquiry through our contact form.\n• **Newsletter Subscriptions**: Email address when you subscribe to our newsletter.\n• **Technical Data**: IP address, browser type, device information, and pages visited, collected automatically through standard web server logs.\n• **Communication Data**: Records of correspondence if you contact us by email or phone.\n\nWe do not collect sensitive personal data such as payment information, government IDs, or biometric data through this website.` },
    { title: '2. How We Use Your Information', content: `Innovis IT Solutions uses the collected information for the following purposes:\n\n• **Service Delivery**: To respond to your inquiries, provide requested information, and engage in business discussions.\n• **Newsletter Communication**: To send periodic updates about our services, case studies, and technology insights (only with your explicit consent).\n• **Service Improvement**: To analyze usage patterns and improve the functionality and content of our website.\n• **Legal Compliance**: To comply with applicable laws, regulations, and legal processes.\n• **Business Operations**: To protect the security and integrity of our services and prevent fraudulent activity.` },
    { title: '3. Sharing of Information', content: `We do not sell, rent, or trade your personal information to third parties. We may share your information only in the following limited circumstances:\n\n• **Service Providers**: With trusted third-party vendors who assist in operating our website and delivering services (e.g., email delivery via Brevo/Sendinblue), bound by confidentiality obligations.\n• **Legal Requirements**: When required by law, court order, or governmental authority.\n• **Business Transfers**: In connection with a merger, acquisition, or sale of assets, with appropriate confidentiality protections.\n• **With Your Consent**: In any other situation where you have given explicit consent.` },
    { title: '4. Data Retention', content: `We retain your personal information for as long as necessary to fulfil the purposes for which it was collected and to comply with legal obligations. Specifically:\n\n• Contact form submissions are retained for 24 months from the date of submission.\n• Newsletter subscription data is retained until you unsubscribe.\n• Technical log data is retained for 90 days.\n\nYou may request deletion of your data at any time by contacting us at contact@innovis.com.` },
    { title: '5. Data Security', content: `Innovis IT Solutions implements industry-standard security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These include:\n\n• TLS/SSL encryption for all data transmitted between your browser and our servers.\n• Secure, access-controlled database systems hosted on cloud infrastructure.\n• Regular security reviews and penetration testing of our systems.\n\nWhile we strive to protect your personal information, no method of electronic storage or transmission is 100% secure. We cannot guarantee absolute security.` },
    { title: '6. Cookies & Tracking', content: `Our website may use minimal cookies to improve your browsing experience. We do not use third-party advertising cookies or tracking pixels. The cookies we may use include:\n\n• **Session Cookies**: Temporary cookies that are deleted when you close your browser.\n• **Preference Cookies**: To remember your settings and preferences.\n\nYou can instruct your browser to refuse all cookies or indicate when a cookie is being sent. If you do not accept cookies, some portions of our website may not function properly.` },
    { title: '7. Your Rights', content: `Depending on your jurisdiction, you may have the following rights regarding your personal data:\n\n• **Access**: Request a copy of the personal information we hold about you.\n• **Rectification**: Request correction of inaccurate or incomplete information.\n• **Erasure**: Request deletion of your personal information ("right to be forgotten").\n• **Portability**: Request transfer of your data in a machine-readable format.\n• **Objection**: Object to specific processing of your personal data.\n• **Withdrawal of Consent**: Withdraw consent for newsletter communications at any time.\n\nTo exercise any of these rights, contact us at contact@innovis.com.` },
    { title: '8. Third-Party Links', content: `Our website may contain links to third-party websites, including our client and partner sites. These sites have their own privacy policies and are not governed by this Privacy Policy. We encourage you to review the privacy policies of any third-party sites you visit. Innovis IT Solutions is not responsible for the content or privacy practices of such sites.` },
    { title: '9. Changes to This Policy', content: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will post the updated policy on this page with a revised "Last Updated" date. We encourage you to review this page periodically. Continued use of our website after any changes constitutes acceptance of the updated policy.` },
    { title: '10. Contact Us', content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:\n\n• **Email**: contact@innovis.com\n• **Phone**: +91 80879 59271\n• **Address**: Innovis Pvt. Ltd., Sinnar, Maharashtra, India 422103` }
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
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 45% 70% at 18% 50%, rgba(99,102,241,0.08) 0%, transparent 70%)', pointerEvents:'none' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/" className="fade-up" style={{ animationDelay:'0.05s', display:'inline-flex', alignItems:'center', gap:7, color:'rgba(226,232,240,0.45)', fontSize:13, fontWeight:600, marginBottom:28, transition:'color 0.18s' }}
            onMouseEnter={e=>e.currentTarget.style.color='#818cf8'}
            onMouseLeave={e=>e.currentTarget.style.color='rgba(226,232,240,0.45)'}>
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <p className="fade-up" style={{ animationDelay:'0.1s', fontSize:11, letterSpacing:'2px', textTransform:'uppercase', color:'#818cf8', marginBottom:14, fontWeight:700 }}>Legal</p>
          <h1 className="fade-up" style={{ animationDelay:'0.15s', fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:'clamp(26px,4.5vw,44px)', fontWeight:800, color:'#e2e8f0', letterSpacing:'-1px', lineHeight:1.12, marginBottom:16 }}>
            Privacy Policy
          </h1>
          <p className="fade-up" style={{ animationDelay:'0.2s', fontSize:14, color:'rgba(226,232,240,0.45)', lineHeight:1.65 }}>
            Last Updated: May 2025 · Effective for all users of innovis.com
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div style={{ background:'rgba(255,255,255,0.02)', border:'1px solid rgba(99,102,241,0.12)', borderRadius:14, padding:'40px 36px' }}>
          <p style={{ fontSize:14, color:'rgba(226,232,240,0.6)', lineHeight:1.8, marginBottom:32, paddingBottom:28, borderBottom:'1px solid rgba(99,102,241,0.1)' }}>
            Innovis IT Solutions ("Innovis," "we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website at innovis.com or engage with our services.
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
          <p style={{ fontSize:13, color:'rgba(226,232,240,0.35)', marginBottom:18 }}>Questions about this policy?</p>
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

export default Privacy;
