import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const studies=[
 {client:'RightVerse AI',slug:'rightverse-ai',tone:'deep',title:'Making legal information easier to approach',problem:'Citizens lacked a clear route into everyday legal topics and basic rights.',solution:'We structured a plain-language content library with topical browsing and direct search.',results:[['3K+','monthly visitors'],['4.7 / 5','reported rating']],deep:'The platform combines a React interface with a structured content library covering civil, criminal and constitutional topics. Information architecture and search were prioritised so people could reach a relevant topic without already knowing the legal terminology.'},
 {client:'SnapShop AI',slug:'snapshop-ai',tone:'plum',title:'Finding a product from a single image',problem:'Products seen on social media were difficult to locate and compare across stores.',solution:'We designed an image-led search flow that returns likely matches and purchase links.',results:[['Image in','one simple input'],['Multi-store','comparison']],deep:'The experience keeps a technically complex search process to one clear customer action. Results are organised for quick comparison, with the system doing the retrieval work behind the interface.'},
 {client:'Localify AI',slug:'localify-ai',tone:'ink',title:'Shortening local-business research',problem:'Business discovery, contact research and outreach preparation were disconnected manual tasks.',solution:'We brought discovery, tracking and outreach preparation into one managed workflow.',results:[['One place','for the pipeline'],['Less rework','between steps']],deep:'Rather than presenting AI as a chat box, the product applies it inside a recognisable research workflow. Operators retain visibility over sources, prospects and prepared outreach.'},
 {client:'RK Tours & Travels',slug:'rk-tours-travels',tone:'plum',title:'Moving cab enquiries beyond phone calls',problem:'Manual coordination made customer enquiries slower and difficult to track.',solution:'We created a mobile-first booking enquiry and a lightweight operational view.',results:[['Mobile-first','booking flow'],['Clearer','request tracking']],deep:'The frontend focuses on the information a traveller needs to make a request, while the operational side gives the business a consistent record of incoming journeys and contact details.'},
 {client:'Genz',slug:'genz',tone:'ink',title:'Turning personal care into a considered storefront',problem:'A broad catalogue of fragrances, skincare and haircare needed to feel edited rather than overwhelming.',solution:'We shaped a visual commerce journey around discovery, clear product groupings and a focused path to purchase.',results:[['Curated','catalogue journey'],['Responsive','shopping experience']],deep:'The interface balances editorial storytelling with practical commerce. Product categories stay easy to scan, visual hierarchy keeps the range approachable, and the buying journey remains clear across screen sizes.'},
 {client:'Innovis Billing',slug:'innovis-billing',tone:'deep',title:'Connecting billing, inventory and daily cash flow',problem:'Invoices, stock, purchases and payments were difficult to manage when each lived in a separate process.',solution:'We brought GST billing and operational records into one workspace designed to remain useful online or offline.',results:[['One system','billing + stock'],['Offline-ready','daily operations']],deep:'The product connects the records a business uses every day instead of treating invoicing as an isolated task. Clear workflows support GST invoices, stock movement, purchases, payments and reporting with continuity when connectivity is limited.'}
];

export default function CaseStudies(){
 const[open,setOpen]=useState(null);
 return <>
  <header className="compact-page-hero"><div className="container compact-page-hero-grid"><h1>Case Studies</h1><p>How operating constraints became useful, working products.</p></div></header>
  <section className="case-list"><div className="container">{studies.map((study,index)=><article className={`case-card case-card--${study.tone}`} id={study.slug} key={study.client}>
   <div className="case-card-head"><span>{String(index+1).padStart(2,'0')}</span><span>{study.client}</span></div>
   <div className="case-card-body">
    <h2>{study.title}</h2>
    <div className="case-card-results">{study.results.map(result=><div className="case-result" key={result[0]}><strong>{result[0]}</strong><span className="muted">{result[1]}</span></div>)}</div>
    <h3>The constraint</h3><p>{study.problem}</p>
    <h3>What we changed</h3><p>{study.solution}</p>
    <button className="case-card-toggle" onClick={()=>setOpen(open===index?null:index)} aria-expanded={open===index}>{open===index?'Close project note':'Read the project note'} <ArrowRight size={13}/></button>
    {open===index&&<p className="case-deep">{study.deep}</p>}
   </div>
  </article>)}</div></section>
 </>;
}
