import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Bot, Cloud, Brush, BarChart3, Code2 } from 'lucide-react';

const projects = [
  { name:'Genz', category:'Beauty commerce', copy:'Discover and shop an edited range of perfumes, skincare and haircare essentials.', image:'/Genz.png', preview:'/GenzPreview.png', url:'https://genz-sepia-psi.vercel.app/', tone:'blue' },
  { name:'RK Tours & Travels', category:'Travel operations', copy:'A direct mobile booking experience for a growing multi-city transport business.', image:'/RK.png', preview:'/RKpreview.png', url:'https://rk-tours-travels.vercel.app', tone:'rose' },
  { name:'Innovis Billing', category:'Business operations', copy:'Create GST invoices, track stock, purchases and cash movement online or offline.', image:'/Billing.png', preview:'/BillingPreview.png', url:'https://billing-three-dusky.vercel.app/', tone:'orange' },
  { name:'Localify AI', category:'AI business discovery', copy:'Research, qualify and prepare local-business outreach in one managed workflow.', image:'/Localify.png', preview:'/Localifypreview.png', url:'https://localify-three.vercel.app', tone:'gold' },
];
const services = [
  {icon:Monitor,n:'01',title:'Web & product engineering',copy:'Customer-facing products and operational software built for performance, accessibility and growth.',tags:['Web apps','SaaS platforms','APIs']},
  {icon:Bot,n:'02',title:'AI & workflow automation',copy:'AI placed inside a clear business process—with human review where decisions matter.',tags:['LLM workflows','Extraction','Assistants']},
  {icon:Brush,n:'03',title:'UI/UX & product design',copy:'Research and interface design that turns complex requirements into software people can learn quickly.',tags:['Research','Prototypes','Design systems']},
  {icon:Cloud,n:'04',title:'Cloud architecture',copy:'Resilient infrastructure, deployment pipelines and migrations with visibility built in.',tags:['AWS / Azure / GCP','DevOps','Monitoring']},
  {icon:BarChart3,n:'05',title:'Data engineering',copy:'Pipelines and reporting layers that create one dependable view of the business.',tags:['ETL','Dashboards','Data quality']},
  {icon:Code2,n:'06',title:'Platform modernisation',copy:'Careful rebuilding of fragile systems without disrupting the business that depends on them.',tags:['Audits','Re-platforming','Integration']},
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

  <section className="services-focus">
    <div className="container">
      <div className="services-heading"><div><p className="kicker">What Innovis does</p><h2>Six capabilities.<br/>One delivery system.</h2></div><p>Bring us a new product, a manual process, or a platform under strain. We assemble the right mix of design and engineering around the outcome.</p></div>
      <div className="service-showcase-grid">{services.map((s,i)=>{const Icon=s.icon;return <Link to="/services" className={`service-panel service-panel--${i%3}`} key={s.n}><div className="service-panel-head"><span>{s.n}</span><Icon size={30}/></div><h3>{s.title}</h3><p>{s.copy}</p><div className="service-tags">{s.tags.map(t=><span key={t}>{t}</span>)}</div><ArrowRight className="service-go" size={20}/></Link>})}</div>
    </div>
  </section>

  <section className="delivery-section"><div className="container delivery-grid"><div><p className="kicker">How delivery works</p><h2>Clarity at every handoff—because there are fewer handoffs.</h2><p>Weekly decisions, visible prototypes and production-minded engineering from the same core team.</p><Link className="text-link" to="/about">Meet the Innovis team <ArrowRight size={15}/></Link></div><div className="delivery-visual"><div><span>01</span><strong>Frame</strong><small>Workflow, users, constraint</small></div><div><span>02</span><strong>Design</strong><small>Prototype, test, decide</small></div><div><span>03</span><strong>Engineer</strong><small>Build, integrate, release</small></div><div><span>04</span><strong>Improve</strong><small>Measure, support, scale</small></div></div></div></section>

  <section className="container contact-band"><div><p className="kicker">Have a product or process to improve?</p><h2 className="section-title">Let’s turn it into a working system.</h2></div><Link to="/contact" className="button">Start the conversation <ArrowRight size={16}/></Link></section>
</>}
