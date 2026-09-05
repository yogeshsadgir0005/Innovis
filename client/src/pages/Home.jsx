import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ServiceCatalogue from '../components/ServiceCatalogue';

const projects = [
  { name:'Genz', category:'Beauty commerce', copy:'Discover and shop an edited range of perfumes, skincare and haircare essentials.', image:'/Genz.png', preview:'/GenzPreview.png', url:'https://genz-sepia-psi.vercel.app/', tone:'blue' },
  { name:'RK Tours & Travels', category:'Travel operations', copy:'A direct mobile booking experience for a growing multi-city transport business.', image:'/RK.png', preview:'/RKpreview.png', url:'https://rk-tours-travels.vercel.app', tone:'rose' },
  { name:'Innovis Billing', category:'Business operations', copy:'Create GST invoices, track stock, purchases and cash movement online or offline.', image:'/Billing.png', preview:'/BillingPreview.png', url:'https://billing-three-dusky.vercel.app/', tone:'orange' },
  { name:'Localify AI', category:'AI business discovery', copy:'Research, qualify and prepare local-business outreach in one managed workflow.', image:'/Localify.png', preview:'/Localifypreview.png', url:'https://localify-three.vercel.app', tone:'gold' },
];
export default function Home(){return <>
  <section className="hero-v2">
    <div className="container hero-v2-grid">
      <div className="hero-v2-copy">
        <p className="kicker">Product design · Software engineering · Applied AI</p>
        <h1>Software that moves work forward.</h1>
        <p className="hero-v2-lede">We build digital products, automate workflows and strengthen business systems.</p>
        <div className="hero-actions"><Link to="/contact" className="button">Discuss your project <ArrowRight size={17}/></Link><Link to="/services" className="button button--ghost">Explore our services</Link></div>
        <div className="hero-proof"><strong>Strategy to release</strong><span>One senior team across product, design, engineering and cloud.</span></div>
      </div>
      <div className="product-stage" aria-label="A selection of products built by Innovis">
        <div className="stage-window stage-window--main"><div className="stage-browser"><i/><i/><i/></div><img className="stage-preview" src="/GenzPreview.png" alt="Genz website preview"/><p>Beauty commerce experience</p></div>
        <div className="stage-window stage-window--side"><img className="stage-preview" src="/RKpreview.png" alt="RK Tours & Travels website preview"/><p>Travel booking operations</p></div>
      </div>
    </div>
  </section>

  <section className="work-showcase">
    <div className="container">
      <div className="showcase-heading"><div><p className="kicker">Clients & ventures</p><h2>Proof you can see,<br/>not promises you have to trust.</h2></div><div><p>These are real products our team has designed and engineered across beauty, business operations, AI and travel.</p><Link className="text-link" to="/case-studies">Read the case studies <ArrowRight size={15}/></Link></div></div>
      <div className="project-showcase-grid">{projects.map((p,i)=><a className={`project-feature project-feature--${p.tone}`} href={p.url} target="_blank" rel="noreferrer" key={p.name}><div className="project-art"><span>0{i+1}</span><div className="client-preview-frame"><img className="client-preview" src={p.preview} alt={`${p.name} product preview`}/></div><span className="client-logo-badge"><img className="client-card-logo" src={p.image} alt="" aria-hidden="true"/></span><small>View live product ↗</small></div><div className="project-info"><span>{p.category}</span><h3>{p.name}</h3><p>{p.copy}</p></div></a>)}</div>
    </div>
  </section>

  <ServiceCatalogue home />

  <section className="container contact-band"><div><p className="kicker">Have a product or process to improve?</p><h2 className="section-title">Let’s turn it into a working system.</h2></div><Link to="/contact" className="button">Start the conversation <ArrowRight size={16}/></Link></section>
</>}
