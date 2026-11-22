import {useState} from 'react';import {Link} from 'react-router-dom';import {motion,useScroll,useTransform} from 'framer-motion';import {photos} from '../../assets/photos';import {pop} from '../../components/common/Reveal';
import {Award,Heart,ShieldCheck,Sparkles,Star,MapPin,Phone,Mail,Clock,Target,Eye} from 'lucide-react';
import {useApp} from '../../context/AppContext';import ServiceCard from '../../components/cards/ServiceCard';
import Visual from '../../components/cards/Visual';import OfferSlider from '../../components/cards/OfferSlider';
import {Field} from '../../components/common/ui';import {site} from '../../data/site';import {inr} from '../../utils/appointments';
const Head=({t,s})=><div className="mb-8 text-center"><h2 className="text-3xl md:text-4xl">{t}</h2>{s&&<p className="mx-auto mt-2 max-w-xl text-sm text-charcoal/60">{s}</p>}<div className="mx-auto mt-3 h-0.5 w-16 bg-gold"/></div>;
const Sec=({children,bg=''})=><section className={`px-4 py-14 ${bg}`}><motion.div className="mx-auto max-w-6xl" initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-80px'}} transition={{duration:.7}}>{children}</motion.div></section>;
const fade={initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:true}};
const GAL=['Bridal','Hair Styling','Facial & Skincare','Salon Interior'];
const galCat=['Bridal Makeup','Hair Care','Facial','Spa'];
const Info=()=><div className="space-y-3 text-sm"><p className="flex gap-3"><MapPin className="text-gold" size={18}/>{site.address}</p><p className="flex gap-3"><Phone className="text-gold" size={18}/>{site.phone}</p><p className="flex gap-3"><Mail className="text-gold" size={18}/>{site.email}</p><p className="flex gap-3"><Clock className="text-gold" size={18}/>{site.hours}</p></div>;
const PageTop=({t})=><div className="bg-charcoal py-14 text-center text-white"><h1 className="text-4xl text-gold">{t}</h1></div>;
export function Home(){
  const {services}=useApp();const {scrollY}=useScroll();const y1=useTransform(scrollY,[0,600],[0,140]);const y2=useTransform(scrollY,[0,600],[0,-60]);
  return <>
  <section className="relative overflow-hidden bg-charcoal text-white"><motion.div style={{y:y1}} className="absolute inset-0 opacity-40" ><div className="h-full w-full" style={{background:'radial-gradient(circle at 80% 30%,#C6A66B,transparent 55%)'}}/></motion.div><motion.div style={{y:y2}} className="absolute right-4 top-10 hidden h-[400px] w-[290px] md:block lg:right-20"><div className="h-full w-full overflow-hidden rounded-t-full border-4 border-gold shadow-2xl"><img src={photos.hero} alt="Facial treatment at Shoba Salon & Spa" className="h-full w-full object-cover"/></div></motion.div>
    <motion.div {...fade} className="relative mx-auto max-w-6xl px-4 py-24 md:py-32"><p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">Women's Salon & Spa</p>
      <h1 className="text-5xl md:text-7xl">Shoba Salon & Spa</h1><p className="serif mt-4 text-2xl text-gold">{site.tagline}</p>
      <div className="mt-8 flex flex-wrap gap-3"><Link to="/client/book" className="btn-gold">Book Appointment</Link><Link to="/services" className="btn border border-white/60 hover:bg-white/10">Explore Services</Link></div></motion.div></section>
  <Sec><Head t="Featured Services" s="Signature treatments crafted for you."/><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.filter(s=>s.active).slice(0,3).map(s=><ServiceCard key={s.id} s={s} action={<Link className="btn-gold w-full" to={`/client/book?s=${s.code}`}>Book Now</Link>}/>)}</div></Sec>
  <Sec bg="bg-cream"><Head t="Special Offers"/><OfferSlider/></Sec>
  <Sec><Head t="Why Choose Us"/><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[[Award,'Expert Stylists','Skilled, certified professionals'],[ShieldCheck,'Hygienic Care','Sanitised tools every visit'],[Sparkles,'Premium Products','Gentle, trusted brands'],[Heart,'Personal Attention','Treatments tailored to you']].map(([I,t,d],i)=><motion.div key={t} {...pop(i)} className="card text-center"><I className="mx-auto mb-3 text-gold" size={30}/><h3 className="text-lg">{t}</h3><p className="text-sm text-charcoal/60">{d}</p></motion.div>)}</div></Sec>
  <Sec bg="bg-beige/40"><Head t="What Our Clients Say"/><div className="grid gap-5 md:grid-cols-3">{[['Anitha','The bridal makeup was flawless and lasted all day.'],['Kavya','Calm ambience and a wonderful facial. Highly recommended.'],['Divya','Booking online was simple and the team was on time.']].map(([n,t],i)=><motion.div key={n} {...pop(i)} className="card"><div className="mb-2 flex text-gold">{[...Array(5)].map((_,i)=><Star key={i} size={16} fill="#C6A66B"/>)}</div><p className="text-sm italic">“{t}”</p><p className="mt-3 text-sm font-semibold">{n} <span className="font-normal text-charcoal/40">(demo review)</span></p></motion.div>)}</div></Sec>
  <Sec><Head t="Gallery Preview"/><div className="grid grid-cols-2 gap-3 md:grid-cols-4">{galCat.map((c,i)=><motion.div key={c} {...pop(i)}><Visual cat={c} variant={i} className="h-40 rounded-xl"/></motion.div>)}</div><div className="mt-6 text-center"><Link to="/gallery" className="btn-out">View Full Gallery</Link></div></Sec>
  <Sec bg="bg-cream"><Head t="Visit Us"/><div className="mx-auto max-w-md"><Info/></div></Sec></>;
}
export function About(){return <><PageTop t="Our Story & Vision"/>
  <Sec><div className="grid items-center gap-8 md:grid-cols-2"><div className="space-y-4 text-sm leading-7"><h2 className="text-3xl">Welcome to Shoba Salon & Spa</h2><p>Shoba Salon & Spa is a women's salon created to make every visit feel calm, luxurious and personal. From everyday hair care to complete bridal makeovers, our team brings skill and warmth to every service.</p><p>Our philosophy is simple: beauty and wellness go together. We combine gentle products, careful technique and a relaxing environment so you leave feeling confident.</p></div><Visual cat="Spa" variant={1} className="h-80 rounded-2xl"/></div></Sec>
  <Sec bg="bg-cream"><div className="grid gap-5 md:grid-cols-2">{[[Eye,'Our Vision','To be the most trusted destination for elegant, confident beauty.'],[Target,'Our Mission','Deliver premium, hygienic and personalised care at fair prices, in a welcoming space.']].map(([I,t,d])=><div key={t} className="card"><I className="mb-2 text-gold"/><h3 className="text-xl">{t}</h3><p className="text-sm text-charcoal/70">{d}</p></div>)}</div></Sec></>}
export function Services(){
  const {services,categories}=useApp();const [c,setC]=useState('All');
  const list=services.filter(s=>s.active&&(c==='All'||s.category===c));
  return <><PageTop t="Services"/><Sec><div className="mb-8 flex flex-wrap justify-center gap-2">{['All',...categories].map(x=><button key={x} onClick={()=>setC(x)} className={`rounded-full border px-4 py-1.5 text-sm ${c===x?'border-gold bg-gold text-white':'border-beige bg-white'}`}>{x}</button>)}</div>
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{list.map(s=><ServiceCard key={s.id} s={s} action={<Link className="btn-gold w-full" to={`/client/book?s=${s.code}`}>Book Now</Link>}/>)}</div>{!list.length&&<p className="text-center text-sm">No services in this category.</p>}</Sec></>;
}
export function Gallery(){
  const [f,setF]=useState('All');const items=[...Array(12)].map((_,i)=>({i,g:GAL[i%4],c:galCat[i%4]}));
  return <><PageTop t="Gallery"/><Sec><div className="mb-8 flex flex-wrap justify-center gap-2">{['All',...GAL].map(x=><button key={x} onClick={()=>setF(x)} className={`rounded-full border px-4 py-1.5 text-sm ${f===x?'border-gold bg-gold text-white':'border-beige bg-white'}`}>{x}</button>)}</div>
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">{items.filter(x=>f==='All'||x.g===f).map(x=><motion.div layout key={x.i} {...pop(x.i)} className="relative overflow-hidden rounded-xl"><Visual cat={x.c} variant={Math.floor(x.i/4)} className="h-44"/><span className="absolute bottom-2 left-2 rounded bg-black/40 px-2 py-0.5 text-xs text-white">{x.g}</span></motion.div>)}</div>
    <p className="mt-6 text-center text-xs text-charcoal/50">Original vector illustrations - swap in your own photography any time.</p></Sec></>;
}
export function Offers(){
  const {offers,today}=useApp();
  return <><PageTop t="Offers"/><Sec><OfferSlider/><div className="mt-10 grid gap-5 md:grid-cols-3">{offers.filter(o=>o.active).map(o=>{const exp=o.validTo<today;return <div key={o.id} className={`card ${exp?'opacity-60':''}`}>
    <div className="serif text-4xl text-gold">{o.discount}% OFF</div><h3 className="mt-1 text-xl">{o.title}</h3><p className="text-sm text-charcoal/70">{o.description}</p>
    <p className="mt-2 text-xs">Example: <s>{inr(1000)}</s> <b>{inr(1000*(100-o.discount)/100)}</b></p><p className="text-xs text-charcoal/50">{exp?'Expired':`Valid until ${o.validTo}`}</p>
    {exp?<button disabled className="btn-gold mt-3 w-full">Expired</button>:<Link to={`/client/book?offer=${o.id}`} className="btn-gold mt-3 w-full">Book Now</Link>}</div>})}</div></Sec></>;
}
export function Contact(){
  const {toast}=useApp();const [f,setF]=useState({name:'',email:'',phone:'',msg:''});const [e,setE]=useState({});
  const send=ev=>{ev.preventDefault();const x={};
    if(f.name.trim().length<2)x.name='Enter your name';if(!/^\S+@\S+\.\S+$/.test(f.email))x.email='Enter a valid email';
    if(!/^\d{10}$/.test(f.phone))x.phone='Enter a 10-digit phone number';if(f.msg.trim().length<5)x.msg='Write a short message';
    setE(x);if(Object.keys(x).length)return;toast('Thanks! Your enquiry was recorded (demo - not sent anywhere).');setF({name:'',email:'',phone:'',msg:''});};
  const u=k=>({value:f[k],onChange:ev=>setF({...f,[k]:ev.target.value}),className:'input'});
  return <><PageTop t="Contact & Enquiry"/><Sec><div className="grid gap-8 md:grid-cols-2"><div className="space-y-6"><Info/><div className="flex h-52 items-center justify-center rounded-2xl border border-dashed border-gold bg-cream text-sm text-charcoal/50">Map placeholder</div></div>
    <form onSubmit={send} className="card space-y-4"><Field label="Name" error={e.name}><input {...u('name')}/></Field><Field label="Email" error={e.email}><input {...u('email')}/></Field><Field label="Phone" error={e.phone}><input {...u('phone')}/></Field><Field label="Message" error={e.msg}><textarea rows={4} {...u('msg')}/></Field><button className="btn-gold w-full">Send Enquiry</button></form></div></Sec></>;
}
