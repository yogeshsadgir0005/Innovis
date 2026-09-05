import { useState } from 'react';
import axiosInstance from '../utils/axios';
import { Loader2 } from 'lucide-react';

const details=[
 ['Email','innovistech63@gmail.com','mailto:innovistech63@gmail.com'],
 ['Phone','+91 80879 59271','tel:+918087959271'],
 ['Studio','Sinnar, Maharashtra · India 422103',null]
];

export default function Contact(){
 const[data,setData]=useState({fullName:'',email:'',company:'',phone:'',message:''});
 const[status,setStatus]=useState({loading:false,error:null,success:false});
 const change=e=>setData({...data,[e.target.name]:e.target.value});
 const submit=async e=>{
  e.preventDefault();
  setStatus({loading:true,error:null,success:false});
  try{
   await axiosInstance.post('/contact',data);
   setStatus({loading:false,error:null,success:true});
   setData({fullName:'',email:'',company:'',phone:'',message:''});
  }catch(err){
   setStatus({loading:false,success:false,error:err.response?.data?.message||'We could not send your message. Please try again.'});
  }
 };
 return <>
  <header className="compact-page-hero compact-page-hero--contact"><div className="container compact-page-hero-grid"><h1>Tell us where the work gets stuck.</h1><p>Share the rough version: the manual process, fragile product or new idea. We will reply with useful questions, normally within one business day.</p></div></header>
  <section className="contact-section"><div className="container contact-layout">
   <aside className="contact-panel">
    <p className="contact-panel-kicker">Direct contact</p>
    <div className="contact-details">{details.map(([label,value,href])=><div className="contact-detail" key={label}><small>{label}</small>{href?<a href={href}>{value}</a>:<span>{value}</span>}</div>)}</div>
    <p className="contact-panel-note">Prefer to write first? Email us directly and we will come back with questions, normally within one business day.</p>
   </aside>
   <div className="contact-form-card">
    <div className="contact-form-head"><span>Project enquiry</span><span>Takes about a minute</span></div>
    <form className="form-grid" onSubmit={submit} noValidate={false}>
     {status.success&&<div className="form-message form-message--success">Message received. We will be in touch soon.</div>}
     {status.error&&<div className="form-message form-message--error">{status.error}</div>}
     <div className="field"><label htmlFor="fullName">Your name *</label><input id="fullName" name="fullName" required value={data.fullName} onChange={change} placeholder="Jane Sharma"/></div>
     <div className="field"><label htmlFor="email">Work email *</label><input id="email" name="email" type="email" required value={data.email} onChange={change} placeholder="jane@company.com"/></div>
     <div className="field"><label htmlFor="company">Company</label><input id="company" name="company" value={data.company} onChange={change} placeholder="Company name"/></div>
     <div className="field"><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" value={data.phone} onChange={change} placeholder="+91 00000 00000"/></div>
     <div className="field field--full"><label htmlFor="message">What needs to change? *</label><textarea id="message" name="message" required value={data.message} onChange={change} placeholder="The process that keeps breaking, the product that needs rebuilding, or the idea you want scoped."/></div>
     <div className="form-actions"><button className="button" disabled={status.loading}>{status.loading?<><Loader2 size={17} className="animate-spin"/>Sending</>:'Send project note'}</button><small>Fields marked * are required.</small></div>
    </form>
   </div>
  </div></section>
 </>;
}
