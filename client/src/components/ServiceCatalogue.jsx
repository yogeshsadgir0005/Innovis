import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Bot, Boxes, Brush, Cloud, Code2, Monitor, Network, Search, ShieldCheck, ShoppingBag, Smartphone, TestTube2, X } from 'lucide-react';

const services = [
  { number: '01', slug: 'web-development', icon: Monitor, title: 'Web Development', copy: 'Websites, portals and web applications built for performance, accessibility and sustainable growth.', position: '0% 0%', categories: ['websites', 'software'] },
  { number: '02', slug: 'ecommerce-retail', icon: ShoppingBag, title: 'Ecommerce & Retail', copy: 'Digital commerce experiences connecting catalogue, checkout, operations and customer data.', position: '33.333% 0%', categories: ['commerce', 'software'] },
  { number: '03', slug: 'mobile-app-development', icon: Smartphone, title: 'Mobile App Development', copy: 'Native and cross-platform mobile products designed for dependable everyday use.', position: '66.666% 0%', categories: ['mobile'] },
  { number: '04', slug: 'enterprise-systems', icon: Network, title: 'CRM, ERP & Enterprise', copy: 'Business systems that connect teams, workflows, reporting and operational data.', position: '100% 0%', categories: ['software'] },
  { number: '05', slug: 'saas-products', icon: Boxes, title: 'SaaS Products', copy: 'Secure multi-tenant products designed for adoption, scale and continuous improvement.', position: '0% 50%', categories: ['software'] },
  { number: '06', slug: 'ai-machine-learning', icon: Bot, title: 'AI & Machine Learning', copy: 'Practical AI systems supporting automation, insight and better customer experiences.', position: '33.333% 50%', categories: ['ai'] },
  { number: '07', slug: 'data-analytics', icon: BarChart3, title: 'Data & Analytics', copy: 'Reliable data platforms, dashboards and decision-support systems built around useful evidence.', position: '66.666% 50%', categories: ['data'] },
  { number: '08', slug: 'cybersecurity', icon: ShieldCheck, title: 'Cybersecurity', copy: 'Security engineering embedded across applications, cloud and delivery workflows.', position: '100% 50%', categories: ['cloud-security'] },
  { number: '09', slug: 'product-design', icon: Brush, title: 'UI/UX & Product Design', copy: 'Research, interaction design and visual systems that turn complexity into confident use.', position: '0% 100%', categories: ['design'] },
  { number: '10', slug: 'cloud-devops', icon: Cloud, title: 'Cloud Architecture & DevOps', copy: 'Resilient infrastructure, automated delivery and practical observability across cloud platforms.', position: '33.333% 100%', categories: ['cloud-security'] },
  { number: '11', slug: 'platform-modernisation', icon: Code2, title: 'Platform Modernisation', copy: 'Controlled upgrades for fragile or ageing systems without putting operations at risk.', position: '66.666% 100%', categories: ['software', 'cloud-security'] },
  { number: '12', slug: 'quality-assurance', icon: TestTube2, title: 'QA & Test Automation', copy: 'Repeatable quality checks that improve release confidence across web, mobile and APIs.', position: '100% 100%', categories: ['software'] },
];

const filters = [
  { value: 'all', label: 'All' },
  { value: 'websites', label: 'Website development' },
  { value: 'mobile', label: 'Mobile apps' },
  { value: 'software', label: 'Software' },
  { value: 'ai', label: 'AI' },
  { value: 'commerce', label: 'Commerce' },
  { value: 'data', label: 'Data' },
  { value: 'design', label: 'UI/UX design' },
  { value: 'cloud-security', label: 'Cloud & security' },
];

export default function ServiceCatalogue({ home = false }) {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const visibleServices = useMemo(() => {
    const term = query.trim().toLowerCase();
    return services.filter(service => {
      const categoryMatch = activeFilter === 'all' || service.categories.includes(activeFilter);
      const searchMatch = !term || `${service.title} ${service.copy}`.toLowerCase().includes(term);
      return categoryMatch && searchMatch;
    });
  }, [activeFilter, query]);

  const resetFilters = () => {
    setQuery('');
    setActiveFilter('all');
  };

  return <section className={`service-catalogue${home ? ' service-catalogue--home' : ''}`}>
    <div className="container">
      <div className="service-catalogue-intro">
        <div>
          <p className="kicker">{home ? 'What Innovis does' : 'What we deliver'}</p>
          <h2>{home ? 'Twelve capabilities. One team.' : 'Digital services that move work forward.'}</h2>
        </div>
        <p>{home
          ? 'Product, design and engineering support shaped around your outcome.'
          : 'Choose a capability, or bring us the problem.'}</p>
      </div>

      {!home && <div className="service-tools">
        <label className="service-search" htmlFor="service-catalogue-search">
          <Search size={18} aria-hidden="true" />
          <span className="sr-only">Search services</span>
          <input id="service-catalogue-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search services" autoComplete="off" />
          {query && <button type="button" onClick={() => setQuery('')} aria-label="Clear service search"><X size={16} /></button>}
        </label>
        <div className="service-filters" role="group" aria-label="Filter services by category">
          {filters.map(filter => <button type="button" className={activeFilter === filter.value ? 'is-active' : ''} aria-pressed={activeFilter === filter.value} onClick={() => setActiveFilter(filter.value)} key={filter.value}>{filter.label}</button>)}
        </div>
      </div>}

      <div className="service-card-grid">
        {visibleServices.map(service => {
          const Icon = service.icon;
          return <article className="service-card" id={service.slug} key={service.slug}>
            <div className="service-card-media" style={{ '--service-image-position': service.position }} role="img" aria-label={`${service.title} team at work`} />
            <div className="service-card-body">
              <div className="service-card-meta"><span>{service.number}</span><Icon size={20} strokeWidth={1.8} /></div>
              <h2>{service.title}</h2>
              <p>{service.copy}</p>
              <Link to="/contact" className="service-card-link">Discuss this service <ArrowRight size={15} /></Link>
            </div>
          </article>;
        })}
      </div>
      {!visibleServices.length && <div className="service-empty"><p>No services match that search.</p><button type="button" onClick={resetFilters}>Show all services</button></div>}
    </div>
  </section>;
}
