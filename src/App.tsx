import { useState, useRef, useEffect } from 'react';
import { 
  Cpu, ShieldCheck, Network, Cloud, HeartHandshake, Building2, 
  Activity, Truck, ShoppingBag, Factory, AlertTriangle, ArrowRight, 
  Shield, Check, Award, Zap, ChevronRight, HelpCircle, HardDrive, 
  ChevronLeft, Users, Calendar, X, Globe, LogIn 
} from 'lucide-react';
import { SOLUTIONS, INDUSTRIES, CASESTUDIES, PARTNERS } from './data';
import Header from './components/Header';
import Footer from './components/Footer';
import NetworkVisualizer from './components/NetworkVisualizer';
import DashboardSimulator from './components/DashboardSimulator';
import SecurityCommandCenter from './components/SecurityCommandCenter';
import InfraShowcase from './components/InfraShowcase';
import ConsultationForm from './components/ConsultationForm';
import KnowledgeCenter from './components/KnowledgeCenter';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSolution, setActiveSolution] = useState<typeof SOLUTIONS[0] | null>(null);
  const [activeIndustryIdx, setActiveIndustryIdx] = useState(0);
  const [activeCaseStudyIdx, setActiveCaseStudyIdx] = useState(0);
  const [isOfferOpen, setIsOfferOpen] = useState(false);
  const [showExitIntent, setShowExitIntent] = useState(false);

  // References for scrolling
  const contactFormRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSolutions = () => {
    solutionsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Setup structured schemas for South African Local SEO optimization dynamically
  useEffect(() => {
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "GovernmentOrPrivateB2B",
      "name": "Jordan Networks (Pty) Ltd",
      "logo": "https://jordannetworks.co.za/assets/logo.png",
      "url": "https://jordannetworks.co.za",
      "telephone": "+27115550200",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "138 West Street, Sandton",
        "addressLocality": "Johannesburg",
        "postalCode": "2196",
        "addressCountry": "ZA"
      },
      "sameAs": [
        "https://www.linkedin.com/company/jordan-networks"
      ]
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(orgSchema);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Exit intent simulation
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 30) {
        setShowExitIntent(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const activeIndustry = INDUSTRIES[activeIndustryIdx];
  const activeCaseStudy = CASESTUDIES[activeCaseStudyIdx];

  function getSolutionIcon(iconName: string) {
    switch (iconName) {
      case 'Cpu': return <Cpu className="h-6 w-6 text-cyan-400 group-hover:text-slate-950 transition duration-300" />;
      case 'ShieldCheck': return <ShieldCheck className="h-6 w-6 text-purple-400 group-hover:text-slate-950 transition duration-300" />;
      case 'Network': return <Network className="h-6 w-6 text-cyan-400 group-hover:text-slate-950 transition duration-300" />;
      case 'Cloud': return <Cloud className="h-6 w-6 text-sky-400 group-hover:text-slate-950 transition duration-300" />;
      case 'HeartHandshake': return <HeartHandshake className="h-6 w-6 text-indigo-400 group-hover:text-slate-950 transition duration-300" />;
      default: return <Cpu className="h-6 w-6 text-cyan-400" />;
    }
  }

  function getIndustryIcon(iconName: string) {
    switch (iconName) {
      case 'Building': return <Building2 className="h-5 w-5 text-cyan-400" />;
      case 'Activity': return <Activity className="h-5 w-5 text-purple-400" />;
      case 'Truck': return <Truck className="h-5 w-5 text-sky-400" />;
      case 'ShoppingBag': return <ShoppingBag className="h-5 w-5 text-pink-400" />;
      case 'Factory': return <Factory className="h-5 w-5 text-amber-400" />;
      default: return <Building2 className="h-5 w-5 text-cyan-400" />;
    }
  }

  return (
    <div className={`${darkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} min-h-screen font-sans transition-colors duration-300 selection:bg-cyan-500 selection:text-slate-950 relative overflow-hidden`}>
      
      {/* Background Decor from Elegant Dark design */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -mr-48 -mt-48 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[100px] -ml-24 -mb-24 z-0 pointer-events-none"></div>

      {/* 24/7 Security banner context */}
      <div className="bg-gradient-to-r from-cyan-950 via-slate-900 to-indigo-950 text-slate-200 text-xs py-2 px-4 border-b border-cyan-800/25 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1">
          <span className="flex items-center gap-2 text-[10px] font-mono tracking-wider text-cyan-400 font-semibold uppercase">
            <span className="h-2 w-2 bg-cyan-400 rounded-full animate-ping"></span>
            ACTIVE SPECIAL PROMOTION
          </span>
          <p className="font-medium text-center text-[11px] text-slate-100">
            Secure a comprehensive physical IT Audit and POPIA Regulatory Compliance Briefing (Value R5,000) 
            <strong className="text-[#00FFFF] ml-1">completely free</strong> this June.
          </p>
          <button 
            type="button" 
            onClick={() => setIsOfferOpen(true)}
            className="text-[10px] uppercase font-mono font-bold text-white hover:underline ml-2"
          >
            Claim Assessment
          </button>
        </div>
      </div>

      {/* Modern responsive navbar */}
      <Header 
        darkMode={darkMode} 
        onToggleTheme={toggleTheme} 
        onScrollToContact={scrollToContact}
        onScrollToSolutions={scrollToSolutions}
      />

      <main className="pt-20">

        {/* ====================================================
            1. NEXT-GENERATION ENTERPRISE HERO SECTION
            ==================================================== */}
        <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden border-b border-white/5 py-12">
          
          {/* Animated Background Vector Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 z-0 pointer-events-none" />

          {/* Interactive Network Floating Nodes Canvas */}
          <NetworkVisualizer />

          {/* Foreground Canvas */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pointer-events-none">
            
            {/* Left: Hero Messaging (7cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center gap-6 text-left pointer-events-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest w-fit">
                <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                Enterprise ICT Excellence
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.05] tracking-tight text-white mb-2">
                Enterprise Technology <br/>Solutions Built For <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Business Growth.</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-[540px] leading-relaxed">
                Secure, scalable, and intelligent ICT solutions that modernize infrastructure, strengthen security, and maximize operational efficiency for South African enterprises.
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <button
                  type="button"
                  id="hero-book-btn"
                  onClick={scrollToContact}
                  className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-xl shadow-blue-900/30 flex items-center gap-3 cursor-pointer transition-all hover:scale-[1.01] active:scale-95 text-xs sm:text-sm"
                >
                  Get Started Today
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </button>
                <div className="flex -space-x-3">
                  <div className="w-9 h-9 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-350 font-mono">C</div>
                  <div className="w-9 h-9 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-350 font-mono">M</div>
                  <div className="w-9 h-9 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-350 font-mono">P</div>
                </div>
                <span className="text-xs text-slate-500 font-medium font-sans">Trusted by 250+ South African Entities</span>
              </div>
            </div>

            {/* Right: Visual Component (5cols) */}
            <div className="lg:col-span-5 flex flex-col justify-center items-center gap-6 pointer-events-auto hidden lg:flex">
              <div className="w-full aspect-square bg-slate-900/40 rounded-3xl border border-white/10 relative overflow-hidden p-6 shadow-2xl backdrop-blur-sm">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08),transparent_70%)] pointer-events-none"></div>
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <div className="text-[10px] font-mono text-cyan-400 tracking-wider">SYSTEM_STATUS: SECURE</div>
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-3 bg-blue-500 rounded-sm"></div>
                    <div className="w-1.5 h-3 bg-blue-500 opacity-50 rounded-sm"></div>
                    <div className="w-1.5 h-3 bg-blue-500 opacity-20 rounded-sm"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 relative z-10">
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-white/5">
                    <div className="text-[9px] text-slate-500 uppercase font-bold mb-1 tracking-wider font-mono">Threat Defense</div>
                    <div className="text-2xl font-bold text-white">99.9%</div>
                    <div className="w-full bg-slate-800 h-1 mt-2.5 rounded-full overflow-hidden">
                       <div className="bg-blue-500 h-full w-[99.9%]"></div>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-white/5">
                    <div className="text-[9px] text-slate-500 uppercase font-bold mb-1 tracking-wider font-mono">Uptime SLA</div>
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="w-full bg-slate-800 h-1 mt-2.5 rounded-full overflow-hidden">
                       <div className="bg-cyan-500 h-full w-full"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-white/5 h-40 flex flex-col justify-between">
                   <div className="text-[9px] text-slate-500 uppercase font-bold mb-1 tracking-wider font-mono">Network Infrastructure</div>
                   <div className="flex-1 flex items-end gap-2 pt-4">
                      <div className="flex-1 bg-blue-600/30 h-[20%] rounded-t-sm"></div>
                      <div className="flex-1 bg-blue-600/40 h-[45%] rounded-t-sm"></div>
                      <div className="flex-1 bg-blue-600/60 h-[70%] rounded-t-sm"></div>
                      <div className="flex-1 bg-blue-600/80 h-[40%] rounded-t-sm"></div>
                      <div className="flex-1 bg-blue-600 h-[90%] rounded-t-sm"></div>
                      <div className="flex-1 bg-blue-600/50 h-[30%] rounded-t-sm"></div>
                      <div className="flex-1 bg-blue-600/90 h-[55%] rounded-t-sm"></div>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* ====================================================
            2. TRUST & CREDIBILITY SECTION
            ==================================================== */}
        <section id="trust" className="py-12 bg-slate-950/60 border-b border-white/5 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              
              <div className="space-y-1">
                <span className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-mono">15+</span>
                <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Years IT Industry Experience</p>
              </div>

              <div className="space-y-1">
                <span className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-mono">350+</span>
                <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Corporate networks deployed</p>
              </div>

              <div className="space-y-1">
                <span className="text-3xl md:text-4xl font-extrabold tracking-tight text-blue-400 font-mono">&lt; 15m</span>
                <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Emergency On-Site Response Time</p>
              </div>

              <div className="space-y-1">
                <span className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-mono">99.99%</span>
                <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Fibre WAN Route Availability</p>
              </div>

            </div>

            {/* Vendor Logos Carousel Interaction */}
            <div className="mt-12 pt-8 border-t border-white/5 text-center space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-[#00FFFF] uppercase block">
                PARTNERED WITH GLOBAL TECHNOLOGY BRAND LEADERS
              </span>
              
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 opacity-70">
                {PARTNERS.map(vendor => (
                  <div key={vendor.name} className="px-4 py-2 bg-slate-950/85 border border-white/5 rounded-lg text-slate-350 hover:text-white hover:border-white/10 transition cursor-default">
                    <span className="font-extrabold tracking-tight uppercase text-xs font-mono">{vendor.name}</span>
                    <span className="text-[8px] font-mono block text-slate-500 leading-none">{vendor.tier}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>


        {/* ====================================================
            3. WHAT WE DO: PREMIUM SOLUTIONS CARDS
            ==================================================== */}
        <section id="solutions" ref={solutionsRef} className="py-20 bg-slate-950/30 border-b border-white/5 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase bg-blue-950/40 border border-blue-900/30 px-3 py-1.5 rounded-full inline-block">
                SOLUTIONS PORTFOLIO
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-white animate-fade-in">
                Premium ICT Solutions Built For Secure Scaling
              </h2>
              <p className="text-xs md:text-sm leading-relaxed text-slate-400">
                Every service we engineer features SLA protection, local South African assistance (JHB/CPT), and full POPIA regulatory alignment out of the box. Click on any solution to visualize a full architecture brief:
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SOLUTIONS.map(sol => (
                <div 
                  key={sol.id} 
                  id={`sol-${sol.id}-card`}
                  onClick={() => setActiveSolution(sol)}
                  className="bg-slate-900/40 border border-white/5 hover:border-blue-500/50 p-6 rounded-2xl shadow-xl cursor-pointer group hover:-translate-y-1 transition duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="p-3 bg-slate-950/85 border border-white/5 rounded-xl w-fit text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                      {getSolutionIcon(sol.iconName)}
                    </div>

                    <h3 className="font-bold text-base text-white group-hover:text-blue-400 transition duration-200">
                      {sol.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {sol.shortDesc}
                    </p>

                    {/* Features checklist view */}
                    <ul className="space-y-2 pt-2 text-[11px] text-slate-350">
                      {sol.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-center gap-2">
                          <Check className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-blue-400 group-hover:underline">
                    <span>View Architectural Brief</span>
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* ====================================================
            4. INDUSTRIES WE SERVE: INTERACTIVE SHOWCASE
            ==================================================== */}
        <section id="industries" className="py-20 bg-slate-950 border-b border-white/5 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase bg-blue-950/40 border border-blue-900/30 px-3 py-1.5 rounded-full inline-block">
                INDUSTRIES WE SERVE
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                Bespoke Technology Modules For Regional Sectors
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                We configure physical firewalls, redundant lines, and access meshes certified to withstand extreme conditions and high compliance challenges. Click a tile to check industry outcomes:
              </p>
            </div>

            {/* Showcase selector layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Selector List (4cols) */}
              <div className="lg:col-span-4 space-y-2">
                {INDUSTRIES.map((ind, idx) => (
                  <button
                    key={ind.id}
                    type="button"
                    onClick={() => setActiveIndustryIdx(idx)}
                    className={`w-full p-4 rounded-xl border text-left text-xs transition flex items-center justify-between focus:outline-none cursor-pointer ${
                      activeIndustryIdx === idx 
                        ? 'bg-slate-900/60 border-blue-500 text-blue-300 font-bold shadow-[0_0_15px_rgba(37,99,235,0.15)]' 
                        : 'bg-transparent border-white/5 hover:border-white/10 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${activeIndustryIdx === idx ? 'bg-blue-500/10 text-blue-400' : 'bg-slate-900 border border-white/5 text-slate-400'}`}>
                        {getIndustryIcon(ind.iconName)}
                      </div>
                      <span>{ind.name}</span>
                    </div>
                    <ChevronRight className={`h-4.5 w-4.5 transition-transform ${activeIndustryIdx === idx ? 'translate-x-0.5 text-blue-400' : 'text-slate-600'}`} />
                  </button>
                ))}
              </div>

              {/* Right Content Display Plate (8cols) */}
              <div className="lg:col-span-8 bg-slate-900/40 border border-white/5 p-6 md:p-8 rounded-2xl flex flex-col justify-between shadow-xl backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/5 pb-4 gap-4">
                    <span className="text-base font-extrabold text-white uppercase tracking-tight">
                      {activeIndustry.name} Solutions
                    </span>
                    <div className="bg-slate-950 border border-white/5 px-3 py-1.5 rounded-lg font-mono text-xs text-blue-400 inline-block tracking-widest text-[11px]">
                      🏆 {activeIndustry.metric} OUTCOME
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
                    
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 font-bold block">
                        LOCAL CLIENT CHALLENGE
                      </span>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {activeIndustry.challenge}
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 font-bold block">
                        ENGINEERED SOLUTION
                      </span>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {activeIndustry.solution}
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold block">
                        REAL MEASURED OUTCOME
                      </span>
                      <p className="text-xs text-slate-350 leading-relaxed">
                        {activeIndustry.outcome}
                      </p>
                    </div>

                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
                  <span className="text-[10px] font-mono text-slate-500">
                    ALIGN YOUR BUSINESS MODEL TO INTEGRATED SOUTH AFRICAN BEST PRACTICES
                  </span>
                  
                  <button
                    type="button"
                    onClick={scrollToContact}
                    className="hover:underline text-blue-400 font-bold flex items-center gap-0.5 cursor-pointer"
                  >
                    Request custom sector brief
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* ====================================================
            5. MANAGED SERVICES EXPERIENCE
            ==================================================== */}
        <section id="managed-experience" className="py-20 bg-slate-950/20 border-b border-white/5 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase bg-blue-950/40 border border-blue-900/30 px-3 py-1.5 rounded-full inline-block">
                vCIO MANAGER PORTAL
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                Your Entire IT Department — Without The Overhead
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Interact with our smart client telemetry portal simulating standard server monitoring, remote active support response ticks, and instantaneous load-shedding battery failover triggers.
              </p>
            </div>

            {/* Dashboard simulator widget */}
            <DashboardSimulator />

          </div>
        </section>


        {/* ====================================================
            6. CYBERSECURITY COMMAND CENTER
            ==================================================== */}
          <section id="security" className="py-20 bg-slate-950 border-b border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
                <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase bg-purple-950/40 border border-purple-800/20 px-3 py-1.5 rounded-full inline-block">
                  SECURE SYSTEM SIEM
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                  Intelligent Threat Monitoring & Compliance Command
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Cyber attacks cost companies millions in ransom and legal penalties under South Africa's POPIA act. Run our instant network vulnerability test to calculate your current defense score.
                </p>
              </div>

              {/* Security command widget */}
              <SecurityCommandCenter />

            </div>
          </section>


        {/* ====================================================
            7. NETWORK INFRASTRUCTURE SHOWCASE
            ==================================================== */}
        <section id="infrastructure" className="py-20 bg-slate-950/20 border-b border-white/5 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase bg-blue-950/40 border border-blue-900/30 px-3 py-1.5 rounded-full inline-block">
                PHYSICAL NETWORKS
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                Highly Redundant Network Cabling & Topology Architectures
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                The absolute foundation of corporate tech is cabling depth. Compare server cabinets and trace active multi-site WAN backup routes in our active sandbox simulation.
              </p>
            </div>

            {/* Infrastructure Showcase Slider & topology */}
            <InfraShowcase />

          </div>
        </section>

        {/* ====================================================
            8. CASE STUDIES & SUCCESS STORIES
            ==================================================== */}
        <section id="case-studies" className="py-20 bg-slate-950 border-b border-white/5 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase bg-blue-950/40 border border-blue-900/30 px-3 py-1.5 rounded-full inline-block">
                MEASURED OUTCOMES
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                Verifiable Business Success Models Across South Africa
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We focus on concrete, audit-proof return on investments. Read our case file archives to explore how we solved outages and compliance failures.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Selector List (4cols) */}
              <div className="lg:col-span-4 space-y-3">
                {CASESTUDIES.map((cs, idx) => (
                  <button
                    key={cs.id}
                    type="button"
                    onClick={() => setActiveCaseStudyIdx(idx)}
                    className={`w-full p-5 rounded-xl border text-left text-xs transition duration-300 focus:outline-none cursor-pointer ${
                      activeCaseStudyIdx === idx 
                        ? 'bg-slate-900 border-blue-500 text-blue-300 shadow-[0_0_15px_rgba(37,99,235,0.15)]' 
                        : 'bg-transparent border-white/5 hover:border-white/10 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block mb-1">
                      {cs.industry}
                    </span>
                    <span className="font-bold block text-sm text-white mb-2">{cs.clientName}</span>
                    <span className="text-xs text-blue-400 font-mono">
                      ⭐ {cs.roiMetric} — {cs.roiLabel}
                    </span>
                  </button>
                ))}
              </div>

              {/* Right Showcase Panel (8cols) */}
              <div className="lg:col-span-8 bg-slate-900/40 border border-white/5 p-6 md:p-8 rounded-2xl flex flex-col justify-between shadow-2xl relative overflow-hidden backdrop-blur-sm">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-6">
                  
                  {/* Card Title Header */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/5 pb-4">
                    <div>
                      <span className="text-[10px] font-mono text-blue-400 uppercase font-semibold">Client File:</span>
                      <h4 className="text-base font-extrabold text-white">{activeCaseStudy.clientName}</h4>
                    </div>

                    <div className="bg-blue-950/60 border border-blue-900/30 p-2.5 rounded-xl text-right">
                      <span className="text-[10px] uppercase font-mono text-slate-400 block tracking-wider leading-none">VERIFIED RESULT</span>
                      <span className="text-base font-extrabold text-blue-400 font-mono leading-none">{activeCaseStudy.roiMetric}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                    
                    <div className="space-y-2">
                      <strong className="text-white block uppercase tracking-wide text-[11px]">Commercial Roadblock:</strong>
                      <p className="text-slate-450 leading-relaxed">{activeCaseStudy.challenge}</p>
                    </div>

                    <div className="space-y-2">
                      <strong className="text-white block uppercase tracking-wide text-[11px]">Delivered Engineering:</strong>
                      <p className="text-slate-450 leading-relaxed">{activeCaseStudy.solution}</p>
                    </div>

                  </div>

                  {/* Measurable outcomes checklist list */}
                  <div className="p-4 bg-slate-950 border border-slate-850 rounded-xl space-y-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold block">
                      CONFIRMED VALUE DELIVERED &amp; ROI OUTCOMES
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] text-slate-300">
                      {activeCaseStudy.outcomes.map((metric, mIdx) => (
                        <li key={mIdx} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology parameters / badges used */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">DEPLOYED ARCHITECTURE STACK:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeCaseStudy.techStack.map((tech, tIdx) => (
                        <span key={tIdx} className="px-2 py-1 bg-slate-950 border border-white/5 rounded text-[9px] font-mono text-blue-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
                  <span className="text-[10px] font-mono text-slate-500">
                    SAMPLES CORRESPOND DIRECTLY WITH INDEPENDENT TELEMETRY LOGS
                  </span>

                  <button
                    type="button"
                    onClick={scrollToContact}
                    className="px-4 py-2 bg-slate-950 hover:bg-slate-800 border border-white/10 rounded-lg text-white font-bold transition flex items-center gap-1 hover:border-white/20 cursor-pointer"
                  >
                    <span>Request Similar Case Brief</span>
                    <ArrowRight className="h-4.5 w-4.5 text-blue-400" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* ====================================================
            10. WHY CHOOSE JORDAN NETWORKS (SLA Comparison)
            ==================================================== */}
        <section id="why-choose" className="py-20 bg-slate-950 border-b border-white/5 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase bg-blue-950/40 border border-blue-900/30 px-3 py-1.5 rounded-full inline-block">
                THE JORDAN VALUE SLA DIFFERENCE
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                B2B Technology Audits: Proactive SLA vs. Reactive Support
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Most standard local suppliers wait until firewalls crash or offices go black to begin answering. We monitor, patch, and failover network lines automatically under guaranteed timing agreements.
              </p>
            </div>

            {/* Elite Side by Side Table Comparison */}
            <div className="bg-slate-950/60 border border-white/5 rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-white/5 text-xs font-semibold uppercase font-mono tracking-wider text-slate-400 bg-slate-900/40 p-4 gap-4">
                <span>IT AUDIT CRITERIA</span>
                <span className="text-blue-400">JORDAN NETWORKS SLA SERVICES</span>
                <span>TYPICAL BREAK-FIX SUPPLIER</span>
              </div>

              <div className="divide-y divide-white/5">
                
                <div className="grid grid-cols-1 sm:grid-cols-3 p-4 gap-4 text-xs">
                  <span className="font-bold text-white uppercase font-mono text-[10px]">Average Helpdesk Resolution</span>
                  <p className="text-blue-400 font-semibold">Under 15 Minutes Guaranteed (Logs prove 8.4m Average)</p>
                  <p className="text-slate-450">4 to 24 Business Hours (Requires repetitive calls)</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 p-4 gap-4 text-xs">
                  <span className="font-bold text-white uppercase font-mono text-[10px]">Load-Shedding Backups</span>
                  <p className="text-blue-400 font-semibold">Dual high-speed cellular LTE/5G failover paths on router</p>
                  <p className="text-slate-450">Offices go dark. Zero backup databases triggered.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 p-4 gap-4 text-xs">
                  <span className="font-bold text-white uppercase font-mono text-[10px]">Underlying Security patches</span>
                  <p className="text-blue-400 font-semibold">Automated machine patching and firmware runs (Weekly)</p>
                  <p className="text-slate-450">Manual reviews only after active security vulnerabilities occur.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 p-4 gap-4 text-xs">
                  <span className="font-bold text-white uppercase font-mono text-[10px]">vCIO Strategic Roadmap</span>
                  <p className="text-blue-400 font-semibold">Quarterly CapEx &amp; regulatory alignment logs curated</p>
                  <p className="text-slate-450">None. Hardware only sold on a premium ad-hoc basis.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 p-4 gap-4 text-xs">
                  <span className="font-bold text-white uppercase font-mono text-[10px]">POPIA Guarding protocols</span>
                  <p className="text-blue-400 font-semibold">Full system isolation mapping &amp; offsite encryption</p>
                  <p className="text-slate-450">Unchecked storage databases exposing company records.</p>
                </div>

              </div>

              {/* Table CTA */}
              <div className="bg-slate-900/30 p-4 border-t border-white/5 text-center text-xs">
                <span className="text-slate-450">Stop settling for technology excuses. </span>
                <button onClick={scrollToContact} className="text-blue-400 font-bold hover:underline ml-1 cursor-pointer">
                  Obtain full Jordan SLA protection today &gt;
                </button>
              </div>
            </div>

          </div>
        </section>


        {/* ====================================================
            11. PROCESS EXPERIENCE TIMELINE
            ==================================================== */}
        <section id="process" className="py-20 bg-slate-950 border-b border-white/5 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase bg-blue-950/40 border border-blue-900/30 px-3 py-1.5 rounded-full inline-block">
                THE TRANSFORMATION ROADMAP
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                The Jordan Onboarding Process Experience
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                We align each business carefully to reduce friction. Our structured integration milestone phases are engineered to protect your team from unexpected interruptions.
              </p>
            </div>

            {/* Structured horizontal timeline boxes */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 font-sans text-xs">
              
              <div className="p-4 bg-slate-900/40 border border-white/5 rounded-xl space-y-2 relative">
                <div className="h-7 w-7 rounded-full bg-blue-950 text-blue-400 flex items-center justify-center font-mono font-bold border border-blue-900/30">1</div>
                <h5 className="font-bold text-white">Discover &amp; Audit</h5>
                <p className="text-slate-400 leading-normal text-[11px]">We examine cabling closets, ISP speeds, POPIA risk profiles, and active security firewalls.</p>
              </div>

              <div className="p-4 bg-slate-900/40 border border-white/5 rounded-xl space-y-2 relative">
                <div className="h-7 w-7 rounded-full bg-blue-950 text-blue-400 flex items-center justify-center font-mono font-bold border border-blue-900/30">2</div>
                <h5 className="font-bold text-white">Assess &amp; Report</h5>
                <p className="text-slate-400 leading-normal text-[11px]">Your team gets a full network blueprint with thermal maps and compliance index reports.</p>
              </div>

              <div className="p-4 bg-slate-900/40 border border-white/5 rounded-xl space-y-2 relative">
                <div className="h-7 w-7 rounded-full bg-blue-950 text-blue-400 flex items-center justify-center font-mono font-bold border border-blue-900/30">3</div>
                <h5 className="font-bold text-white">Custom Design</h5>
                <p className="text-slate-400 leading-normal text-[11px]">We map redundant dual-WAN routers, isolated enterprise VLANs, and offsite server backups.</p>
              </div>

              <div className="p-4 bg-slate-900/40 border border-white/5 rounded-xl space-y-2 relative">
                <div className="h-7 w-7 rounded-full bg-blue-950 text-blue-400 flex items-center justify-center font-mono font-bold border border-blue-900/30">4</div>
                <h5 className="font-bold text-white">Implement</h5>
                <p className="text-slate-400 leading-normal text-[11px]">Our certified tech team installs gigabit hardware, secures endpoint agents, and runs failover tests.</p>
              </div>

              <div className="p-4 bg-slate-900/40 border border-white/5 rounded-xl space-y-2 relative">
                <div className="h-7 w-7 rounded-full bg-blue-950 text-blue-400 flex items-center justify-center font-mono font-bold border border-blue-900/30">5</div>
                <h5 className="font-bold text-white">Monitor &amp; Manage</h5>
                <p className="text-slate-400 leading-normal text-[11px]">Our 24/7 JHB NOC scans logs, pushes weekly server patches, and handles desktop support tickets.</p>
              </div>

              <div className="p-4 bg-slate-900/40 border border-white/5 rounded-xl space-y-2 relative">
                <div className="h-7 w-7 rounded-full bg-blue-950 text-blue-400 flex items-center justify-center font-mono font-bold border border-blue-900/30">6</div>
                <h5 className="font-bold text-white">Optimize</h5>
                <p className="text-slate-400 leading-normal text-[11px]">Your vCIO lead reviews usage stats quarterly to reduce technology costs and scale bandwidth.</p>
              </div>

            </div>

          </div>
        </section>


        {/* ====================================================
            12. KNOWLEDGE CENTER (ICT Insights Resource Hub)
            ==================================================== */}
        <section id="knowledge" className="py-20 bg-slate-950/20 border-b border-white/5 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase bg-blue-950/40 border border-blue-900/30 px-3 py-1.5 rounded-full inline-block">
                RESOURCE BLUEPRINTS &amp; COMPLIANCE GUIDES
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                Jordan Technical Knowledge Hub
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Review exhaustive research manuals and checklist outlines written by our security council. Perfect for aligning Sandton and regional companies with global IT safety procedures.
              </p>
            </div>

            {/* Knowledge center database component */}
            <KnowledgeCenter />

          </div>
        </section>


        {/* ====================================================
            13. CLIENT TESTIMONIALS (B2B Reviews)
            ==================================================== */}
        <section id="testimonials" className="py-20 bg-slate-950 border-b border-white/5 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase bg-blue-950/40 border border-blue-900/30 px-3 py-1.5 rounded-full inline-block">
                COMMERCIAL FEEDBACK
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                What Directors Say About Jordan Networks Services
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We are proud to serve some of South Africa's most prominent industrial, financial, logistics and private clinical hubs. Read honest, real-world reviews from IT decision makers:
              </p>
            </div>

            {/* Bento-like reviews layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
              
              <div className="p-6 bg-slate-900/40 border border-white/5 rounded-2xl space-y-4 flex flex-col justify-between backdrop-blur-sm">
                <div className="space-y-3">
                  <div className="flex text-amber-400 text-xs font-bold tracking-tight">★ ★ ★ ★ ★</div>
                  <p className="text-xs text-slate-300 italic leading-relaxed">
                    "Before onboardings with Jordan, the Cape Town office went offline twice during major load-shedding slots. Jordan configured smart cellular LTE redundancy and local SSD backup synchronization. True enterprise stability!"
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <span className="text-xs font-bold block text-white">Arthur van de Merwe</span>
                  <span className="text-[10px] text-slate-500 font-mono">Managing Director, Van De Merwe Holdings</span>
                </div>
              </div>

              <div className="p-6 bg-slate-900/40 border border-white/5 rounded-2xl space-y-4 flex flex-col justify-between backdrop-blur-sm">
                <div className="space-y-3">
                  <div className="flex text-amber-400 text-xs font-bold tracking-tight">★ ★ ★ ★ ★</div>
                  <p className="text-xs text-slate-300 italic leading-relaxed">
                    "Their Helpdesk is phenomenally fast. The ticketing system resolves remote issues within 10 minutes, compared to our previous billing helper who took hours. They also mapped our full POPIA audit framework flawlessly."
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <span className="text-xs font-bold block text-white">Thembeka Khumalo</span>
                  <span className="text-[10px] text-slate-500 font-mono">Operations Controller, Apex Logistics group</span>
                </div>
              </div>

              <div className="p-6 bg-slate-900/40 border border-white/5 rounded-2xl space-y-4 flex flex-col justify-between backdrop-blur-sm">
                <div className="space-y-3">
                  <div className="flex text-amber-400 text-xs font-bold tracking-tight">★ ★ ★ ★ ★</div>
                  <p className="text-xs text-slate-300 italic leading-relaxed">
                    "The structural optical Fiber backbones they installed across our Pretoria factory floors have zero packet loss despite extreme heavy electrical interference. Excellent cables, absolute precision labeling."
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <span className="text-xs font-bold block text-white">Johan de Klerk</span>
                  <span className="text-[10px] text-slate-500 font-mono">Chief Technology Officer, ElectroPlates Ltd</span>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* ====================================================
            14. CONTACT EXPERIENCES (Multi-step sales funnel)
            ==================================================== */}
        <section id="contact" ref={contactFormRef} className="py-20 bg-slate-950 border-b border-white/5 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-4 animate-fade-in">
              <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase bg-blue-950/40 border border-blue-900/30 px-3 py-1.5 rounded-full inline-block">
                CLAIM YOUR FREE AUDIT BRIEFING
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Secure Your Symmetric Connected Audit &amp; Consultation
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Fill out our high-conversion scoping planner. We examine lines and prepare your localized POPIA security outline (valued at R5,000) completely free.
              </p>
            </div>

            {/* Consultation Wizard Core Component */}
            <ConsultationForm />

          </div>
        </section>


      </main>

      {/* Modern footer */}
      <Footer 
        onScrollToContact={scrollToContact} 
        onScrollToSolutions={scrollToSolutions} 
      />

      {/* Floating emergency callback button (High conversion!) */}
      <div className="fixed bottom-6 right-6 z-40 space-y-3 pointer-events-none">
        
        {/* Assessment Offer Button */}
        <div className="pointer-events-auto">
          <button
            type="button"
            id="floating-assessment-offer-btn"
            onClick={() => setIsOfferOpen(true)}
            className="flex items-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-blue-700 to-indigo-700 text-white font-bold text-xs rounded-full shadow-lg shadow-blue-950/30 border border-blue-600/40 animate-pulse transition hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Shield className="h-4 w-4 text-blue-300 shrink-0" />
            <span>Free Security Audit Offer</span>
          </button>
        </div>

        {/* Emergency support clicker */}
        <div className="pointer-events-auto">
          <a
            href="tel:+27115550190"
            className="flex items-center gap-1.5 px-4 py-3 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs rounded-full shadow-lg shadow-rose-950/30 transition hover:scale-105 active:scale-95"
            title="Emergency ICT Helpline"
          >
            <AlertTriangle className="h-4 w-4 text-white shrink-0 animate-bounce" />
            <span>Emergency IT SLA Helpline</span>
          </a>
        </div>
      </div>


      {/* ====================================================
          ASSESSMENT PROMOTION DIALOG SCREEN
          ==================================================== */}
      <AnimatePresence>
        {isOfferOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Dark backing overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOfferOpen(false)}
              className="absolute inset-0 bg-slate-950"
            />

            {/* Modal Body Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-md bg-slate-900 border border-white/5 rounded-2xl shadow-2xl p-6 md:p-8 z-10 text-slate-100 text-center backdrop-blur-sm"
            >
              
              {/* Close Button */}
              <button
                type="button"
                id="close-promo-btn"
                onClick={() => setIsOfferOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-slate-950 border border-white/5 text-slate-400 hover:text-white transition cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="h-12 w-12 bg-blue-950/80 border border-blue-800/40 rounded-full flex items-center justify-center mx-auto text-blue-400 mb-4 animate-bounce">
                <ShieldCheck className="h-6 w-6" />
              </div>

              <span className="text-[9px] font-mono tracking-widest text-blue-400 uppercase block mb-1">
                LIMITED INTEL BRIEF OFFER
              </span>

              <h4 className="text-base font-bold text-white mb-2 leading-snug">
                Request Your Free Corporate Cybersecurity &amp; Cabling Audit File
              </h4>

              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Get an expert analysis of your servers, networks, fiber connectivity paths, and regulatory alignment. A Senior Technology Architect will deliver a comprehensive vulnerability blueprint booklet (R5,000 value) <strong className="text-white">completely free</strong>.
              </p>

              <div className="space-y-2.5">
                <button
                  type="button"
                  id="claim-custom-audit-btn"
                  onClick={() => {
                    setIsOfferOpen(false);
                    scrollToContact();
                  }}
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl uppercase tracking-wider transition hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  Configure My Free Audit File
                </button>
                <button
                  type="button"
                  id="close-promo-link-btn"
                  onClick={() => setIsOfferOpen(false)}
                  className="w-full py-2 text-slate-450 hover:text-white transition text-xs font-semibold cursor-pointer"
                >
                  No thanks, my corporate data is already completely secured and audited
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* ====================================================
          EXIT INTENT MODAL LEAD CAPTURE
          ==================================================== */}
      <AnimatePresence>
        {showExitIntent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowExitIntent(false)}
              className="absolute inset-0 bg-slate-950"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-sm bg-slate-900 border border-white/5 rounded-2xl shadow-2xl p-6 text-slate-100 text-center backdrop-blur-sm"
            >
              <button
                type="button"
                id="close-exit-intent-btn"
                onClick={() => setShowExitIntent(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-950 border border-white/5 text-slate-400 hover:text-white transition cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="h-10 w-10 bg-blue-950 border border-blue-900/30 rounded-full flex items-center justify-center mx-auto text-blue-400 mb-3">
                <AlertTriangle className="h-5 w-5 text-blue-400 animate-pulse" />
              </div>

              <h4 className="text-sm font-bold text-white mb-1.5 leading-snug">
                Wait! Don't Leave Your Infrastructure Vulnerable
              </h4>

              <p className="text-xs text-slate-400 leading-normal mb-5">
                Download our proprietary South African Corporate IT Best Practices Guidebook (2026 Edition) covering POPIA data pipelines and power redundancies.
              </p>

              <button
                type="button"
                id="claim-guidebook-btn"
                onClick={() => {
                  setShowExitIntent(false);
                  setIsOfferOpen(true);
                }}
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-lg transition cursor-pointer"
              >
                Claim Free Booklet &amp; Audit File
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* ====================================================
          CORE SOLUTIONS ARCHITECTURAL OVERLAY DRAWER/MODAL
          ==================================================== */}
      <AnimatePresence>
        {activeSolution && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveSolution(null)}
              className="absolute inset-0 bg-slate-950"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-xl bg-slate-900 border border-white/5 rounded-2xl shadow-2xl p-6 md:p-8 z-10 text-slate-100 text-left cursor-default max-h-[85vh] overflow-y-auto scrollbar-thin backdrop-blur-sm"
            >
              <button
                type="button"
                id="close-sol-brief-btn"
                onClick={() => setActiveSolution(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-slate-950 border border-white/5 text-slate-400 hover:text-white transition cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-slate-950 border border-white/5 rounded-xl text-blue-400 w-fit">
                  {getSolutionIcon(activeSolution.iconName)}
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-blue-500 font-bold tracking-widest block">
                    {activeSolution.category.toUpperCase()} SOLUTION OUTLINE
                  </span>
                  <h4 className="text-base md:text-lg font-bold text-white leading-none mt-1">
                    {activeSolution.title}
                  </h4>
                </div>
              </div>

              <div className="space-y-4 text-xs md:text-sm text-slate-300 leading-relaxed">
                <p className="leading-relaxed">
                  {activeSolution.fullDesc}
                </p>

                {/* Benefits breakdown */}
                <div className="space-y-2 p-3.5 bg-slate-950 border border-white/5 rounded-xl">
                  <span className="text-[10px] font-mono text-blue-400 uppercase font-semibold">Delivered Value Benefits:</span>
                  <ul className="space-y-2 text-xs">
                    {activeSolution.benefits.map((ben, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-slate-200">
                        <Check className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Detailed checklist points */}
                <div className="space-y-2 pt-1">
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold">Standard SLA Features Deployed:</span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {activeSolution.features.map((feat, fIdx) => (
                      <li key={fIdx} className="p-2 bg-slate-950/50 border border-white/5 rounded flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0"></span>
                        <span className="text-slate-350">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action buttons inside architectural modal */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-5 mt-6 text-xs">
                <span className="text-[10px] font-mono text-slate-500">
                  WARRANTY REGISTERED • FULL POPIA PROTECTION BUILT-IN
                </span>
                
                <div className="flex gap-2 w-full sm:w-auto font-semibold">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveSolution(null);
                      scrollToContact();
                    }}
                    className="flex-1 sm:flex-initial px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition cursor-pointer"
                  >
                    Discuss This Brief
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveSolution(null)}
                    className="flex-1 sm:flex-initial px-3 py-2 bg-slate-950 border border-white/5 rounded-lg hover:border-white/10 hover:text-white transition cursor-pointer"
                  >
                    Close Outline
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
