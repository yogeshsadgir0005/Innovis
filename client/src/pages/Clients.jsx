import ProjectGrid from '../components/ProjectGrid';

const projects=[
 {name:'Genz',category:'Beauty commerce',summary:'Curated beauty shopping, made simple.',image:'/Genz.png',preview:'/GenzPreview.png',url:'https://genz-sepia-psi.vercel.app/',tone:'blue'},
 {name:'RK Tours & Travels',category:'Travel operations',summary:'Fast, mobile-first cab booking.',image:'/RK.png',preview:'/RKpreview.png',url:'https://rk-tours-travels.vercel.app',tone:'rose'},
 {name:'RightVerse AI',category:'Legal access',summary:'Everyday legal information in plain language.',image:'/RV.png',preview:'/RVpreview.png',url:'https://righ-verse.vercel.app',tone:'gold'}
];

export default function Clients(){return <><header className="compact-page-hero"><div className="container compact-page-hero-grid"><h1>Clients</h1><p>Products designed and engineered for client teams across beauty commerce, travel operations and legal access.</p></div></header><ProjectGrid projects={projects}/></>}
