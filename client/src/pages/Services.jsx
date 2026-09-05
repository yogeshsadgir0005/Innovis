import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ServiceCatalogue from '../components/ServiceCatalogue';

export default function Services() {
  return <>
    <ServiceCatalogue />

    <section className="service-cta"><div className="container"><div><p className="kicker">Not sure what the solution is yet?</p><h2>Start with what is not working.</h2></div><p>Bring us the manual process, customer frustration or technical constraint. Defining the right intervention is part of the work.</p><Link to="/contact" className="button">Map the problem with us <ArrowRight size={16} /></Link></div></section>
  </>;
}
