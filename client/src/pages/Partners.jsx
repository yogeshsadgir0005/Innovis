import ProjectGrid from '../components/ProjectGrid';

const projects=[
 {name:'Innovis Billing',category:'Business operations',summary:'GST billing and inventory in one system.',image:'/Billing.png',preview:'/BillingPreview.png',url:'https://billing-three-dusky.vercel.app/',tone:'orange'},
 {name:'Localify AI',category:'AI business discovery',summary:'AI-assisted business research and outreach.',image:'/Localify.png',preview:'/Localifypreview.png',url:'https://localify-three.vercel.app',tone:'gold'},
 {name:'SnapShop AI',category:'Visual commerce',summary:'Find products visually and compare where to buy.',image:'/SnapShop.png',preview:'/SnapShopPreview.png',url:'https://snapshop-ai-eta.vercel.app',tone:'orange'}
];

export default function Partners(){return <><header className="compact-page-hero"><div className="container compact-page-hero-grid"><h1>Partners</h1><p>Platforms built and run alongside partner teams across business operations, applied AI and visual commerce.</p></div></header><ProjectGrid projects={projects}/></>}
