import { Network, Mail, MapPin, Phone, Github, Linkedin, Shield } from 'lucide-react';

interface FooterProps {
  onScrollToContact: () => void;
  onScrollToSolutions: () => void;
}

export default function Footer({ onScrollToContact, onScrollToSolutions }: FooterProps) {
  return (
    <footer id="footer-section" className="bg-slate-950 border-t border-white/5 text-slate-400 text-xs py-12 md:py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-white/5">
        
        {/* Logo and About block (4cols) */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-blue-600 flex items-center justify-center rounded-lg shadow-[0_0_15px_rgba(37,99,235,0.45)]">
              <Network className="h-4.5 w-4.5 text-white" />
            </div>
            <div>
              <h2 className="text-sm font-bold tracking-tight text-white uppercase leading-none">
                JORDAN<span className="text-blue-500">NETWORKS</span>
              </h2>
              <span className="text-[9px] font-mono tracking-widest text-slate-400 block mt-1 uppercase leading-none">
                ICT SOLUTIONS • PTY LTD
              </span>
            </div>
          </div>

          <p className="text-slate-400 leading-relaxed text-[11px]">
            Jordan Networks (Pty) Ltd is a leading South African telecommunications and managed enterprise IT services integrator. We engineer certified structured network cabling, secure cybersecurity overwatch meshes, and high-performance hybrid cloud architectures.
          </p>

          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono uppercase text-slate-500">Corporate Member:</span>
            <div className="flex gap-2">
              <span className="px-1.5 py-0.5 bg-slate-900 border border-slate-800 rounded font-mono text-[8px] text-slate-400">ICASA licensed</span>
              <span className="px-1.5 py-0.5 bg-slate-900 border border-slate-800 rounded font-mono text-[8px] text-slate-400">POPIA Compliant</span>
            </div>
          </div>
        </div>

        {/* Quick Links Block (3cols) */}
        <div className="md:col-span-3 space-y-4">
          <h5 className="font-bold font-mono tracking-wider text-white uppercase text-[11px]">Corporate Solutions</h5>
          <ul className="space-y-2 text-[11px]">
            <li>
              <button onClick={onScrollToSolutions} className="hover:text-cyan-400 text-left transition duration-200">
                Managed IT Operations
              </button>
            </li>
            <li>
              <a href="#security" className="hover:text-cyan-400 transition duration-200">
                Threat SOC &amp; Cybersecurity
              </a>
            </li>
            <li>
              <a href="#infrastructure" className="hover:text-cyan-400 transition duration-200">
                Structured cabling networks
              </a>
            </li>
            <li>
              <a href="#managed-experience" className="hover:text-cyan-400 transition duration-200">
                Hybrid Cloud Backup Vaults
              </a>
            </li>
            <li>
              <button onClick={onScrollToContact} className="hover:text-cyan-400 text-left transition duration-200">
                Free IT Security Assessment
              </button>
            </li>
          </ul>
        </div>

        {/* Physical Office Locations block (3cols) */}
        <div className="md:col-span-3 space-y-4">
          <h5 className="font-bold font-mono tracking-wider text-white uppercase text-[11px]">South African Offices</h5>
          <ul className="space-y-3 text-[11px] text-slate-400">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-semibold">Gauteng Headquarters (JHB)</strong>
                <span>Sandton Corporate Precinct, 138 West Street, Sandton, Johannesburg, 2196</span>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-semibold">Western Cape Office (CPT)</strong>
                <span>Century Square Building, Century City, Cape Town, 7441</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Contact info Block (2cols) */}
        <div className="md:col-span-2 space-y-4">
          <h5 className="font-bold font-mono tracking-wider text-white uppercase text-[11px]">Direct Support Lines</h5>
          <ul className="space-y-2.5 text-[11px]">
            <li className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-cyan-400" />
              <a href="tel:+27115550200" className="hover:text-white font-mono">+27 11 555 0200</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-cyan-400" />
              <a href="mailto:solutions@jordannetworks.co.za" className="hover:text-white font-mono break-all">solutions@jordannetworks.co.za</a>
            </li>
            <li className="flex items-center gap-2">
              <Shield className="h-3.5 w-3.5 text-purple-400 animate-pulse" />
              <span className="font-mono text-purple-400">SOC Online 24/7/365</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright disclosures */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-slate-500 font-mono">
        <div className="space-y-1 text-center md:text-left">
          <span>© 2026 Jordan Networks (Pty) Ltd. All Rights Reserved. Reg No: 2018/482931/07.</span>
          <p className="hidden md:block">Certified ICASA Telecommunications Operator • Symmetrical Fiber Aggregator</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-slate-500">
          <a href="#privacy" className="hover:text-slate-350">POPIA Privacy Disclosures</a>
          <span>•</span>
          <a href="#terms" className="hover:text-slate-350">SLA Master Terms of Business</a>
          <span>•</span>
          <a href="#acceptable-use" className="hover:text-slate-350">Acceptable Use Policy</a>
        </div>
      </div>

    </footer>
  );
}
