import { useState, useEffect } from 'react';
import { Network, Phone, Menu, X, ShieldAlert, Monitor, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  onScrollToContact: () => void;
  onScrollToSolutions: () => void;
}

export default function Header({ darkMode, onToggleTheme, onScrollToContact, onScrollToSolutions }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      id="header-nav" 
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-white/5 py-4 shadow-lg shadow-black/80' 
          : 'bg-transparent py-6 border-b border-white/0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Elite Brand Logo */}
        <div 
          onClick={onScrollToSolutions} 
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-8 h-8 bg-blue-600 flex items-center justify-center rounded-lg shadow-[0_0_15px_rgba(37,99,235,0.45)] group-hover:scale-105 transition duration-300">
            <Network className="h-4.5 w-4.5 text-white" />
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight text-white leading-none">
              JORDAN<span className="text-blue-500">NETWORKS</span>
            </h1>
            <span className="text-[9px] font-mono tracking-widest text-slate-400 block mt-0.5 uppercase leading-none">
              ICT Integrator • Pty Ltd
            </span>
          </div>
        </div>

        {/* Desktop Navigation Link rails */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-400">
          <button 
            type="button" 
            onClick={onScrollToSolutions} 
            className="hover:text-white cursor-pointer transition uppercase tracking-wider"
          >
            Managed IT
          </button>
          <a 
            href="#industries" 
            className="hover:text-white transition uppercase tracking-wider"
          >
            Cybersecurity
          </a>
          <a 
            href="#managed-experience" 
            className="hover:text-white transition uppercase tracking-wider"
          >
            Infrastructure
          </a>
          <a 
            href="#infrastructure" 
            className="hover:text-white transition uppercase tracking-wider text-left"
          >
            Cloud Backup
          </a>
          <a 
            href="#knowledge" 
            className="hover:text-white transition uppercase tracking-wider"
          >
            Resources
          </a>
        </nav>

        {/* Right side controls */}
        <div className="hidden md:flex items-center gap-4">
          {/* Light / Dark selector theme icon */}
          <button
            type="button"
            id="theme-toggler"
            onClick={onToggleTheme}
            className="p-2 rounded-lg bg-slate-950/40 border border-white/5 text-slate-400 hover:text-white transition focus:outline-none"
            aria-label="Toggle theme mode"
          >
            {darkMode ? <Sun className="h-4.5 w-4.5 text-yellow-500" /> : <Moon className="h-4.5 w-4.5 text-blue-400" />}
          </button>

          {/* SLA telephone bar */}
          <a 
            href="tel:+27115550190" 
            className="bg-red-500/10 hover:bg-red-500/15 border border-red-500/20 px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-[10px] font-mono text-red-400 transition"
          >
            <ShieldAlert className="h-3.5 w-3.5 animate-pulse" />
            <span>CRITICAL SLA: +27 11 555 0190</span>
          </a>

          <button
            type="button"
            id="book-consultation-btn"
            onClick={onScrollToContact}
            className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 active:scale-95 transition-all cursor-pointer"
          >
            Book a Consultation
          </button>
        </div>

        {/* Mobile controls hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={onToggleTheme}
            className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-white transition"
          >
            {darkMode ? <Sun className="h-4 w-4 text-yellow-400" /> : <Moon className="h-4 w-4 text-blue-400" />}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-white transition"
            aria-label="Open primary menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Slide-out panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 py-4 px-4 space-y-4 shadow-xl">
          <nav className="flex flex-col gap-3.5 text-xs font-semibold text-slate-300 uppercase tracking-widest pl-2">
            <button 
              type="button" 
              onClick={() => { onScrollToSolutions(); setMobileMenuOpen(false); }} 
              className="text-left py-1.5 hover:text-cyan-400"
            >
              Services Redesigned
            </button>
            <a 
              href="#industries" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-1.5 hover:text-cyan-400"
            >
              Industries Served
            </a>
            <a 
              href="#managed-experience" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-1.5 hover:text-cyan-400"
            >
              NOC Telemetry Live
            </a>
            <a 
              href="#infrastructure" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-1.5 hover:text-cyan-400"
            >
              Structured Cabling
            </a>
            <a 
              href="#knowledge" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-1.5 hover:text-cyan-400"
            >
              Knowledge Database
            </a>
          </nav>

          <div className="pt-3.5 border-t border-slate-800 flex flex-col gap-3">
            <a 
              href="tel:+27115550190" 
              className="bg-rose-950 border border-rose-900 py-2 rounded-lg flex items-center justify-center gap-1.5 text-xs text-rose-400"
            >
              <ShieldAlert className="h-4 w-4 animate-bounce" />
              SLA HOTLINE: +27 11 555 0190
            </a>

            <button
              type="button"
              onClick={() => { onScrollToContact(); setMobileMenuOpen(false); }}
              className="w-full py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs rounded-lg text-center transition"
            >
              Book Audit Consultation
            </button>
          </div>
        </div>
      )}

    </header>
  );
}
