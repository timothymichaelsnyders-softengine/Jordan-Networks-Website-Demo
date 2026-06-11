import { useState } from 'react';
import { Network, Server, Cable, Shuffle, ShieldCheck, CheckCircle2, ChevronRight, Eye } from 'lucide-react';
import { motion } from 'motion/react';

export default function InfraShowcase() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeSegment, setActiveSegment] = useState<'hq' | 'branch' | 'datacenter'>('hq');

  // Cabling parameters
  const [isCableColorTested, setIsCableColorTested] = useState(true);

  return (
    <div id="infra-showcase-root" className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-5 md:p-6 text-slate-100 font-sans shadow-2xl relative overflow-hidden select-none">
      
      {/* Structural visual split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: Before & After Cabling Cabinet Slider (6cols) */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center gap-2.5">
            <Cable className="h-5 w-5 text-cyan-400" />
            <h4 className="text-base font-bold text-white">Interactive Server Cabinet Cabling Visual</h4>
          </div>
          
          <p className="text-xs text-slate-400 leading-relaxed">
            Messy cabling causes packet loss, overheating, and massive maintenance delays. Move the slider below to compare a typical neglected "spaghetti" server room cabinet with our certified, structured high-density fiber and copper cable layouts.
          </p>

          {/* Interactive Slider Container */}
          <div className="relative h-64 w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
            {/* Before Content (Messy Wires Side) */}
            <div className="absolute inset-0 bg-slate-950 flex flex-col justify-center items-center p-6 text-center">
              <div className="max-w-xs space-y-2">
                <span className="text-[10px] font-mono bg-rose-950/60 border border-rose-800/40 text-rose-400 px-2.5 py-1 rounded-full uppercase font-semibold">TYPICAL UNMANAGED STATE</span>
                <p className="text-xs text-slate-400">
                  Unidentified lines, tangled Ethernet loops, blocked fan exhaust paths, and zero network label indices. Extremely vulnerable to dropouts.
                </p>
                <div className="flex flex-wrap justify-center gap-1.5 pt-2">
                  <span className="px-1.5 py-0.5 bg-slate-900 text-slate-500 font-mono text-[9px] border border-slate-800">No Labels</span>
                  <span className="px-1.5 py-0.5 bg-slate-900 text-slate-500 font-mono text-[9px] border border-slate-800">Thermal Risk</span>
                  <span className="px-1.5 py-0.5 bg-slate-900 text-slate-500 font-mono text-[9px] border border-slate-800">25% Packet Drops</span>
                </div>
              </div>
            </div>

            {/* After Content (Beautiful Structured Cabling - Slides on top) */}
            <div 
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-950 via-slate-900 to-slate-950 border-r-2 border-cyan-400 flex flex-col justify-center items-center p-6 text-center select-none overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="min-w-[280px] max-w-xs space-y-2 text-white">
                <span className="text-[10px] font-mono bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 px-2.5 py-1 rounded-full uppercase font-semibold">JORDAN CERTIFIED SETUP</span>
                <p className="text-xs text-slate-300">
                  Flawless structured lines, color-coded trunk links, custom horizontal organizers, optimized cold-aisle airflows, and full label maps.
                </p>
                <div className="flex flex-wrap justify-center gap-1.5 pt-2">
                  <span className="px-1.5 py-0.5 bg-cyan-900/30 text-cyan-300 font-mono text-[9px] border border-cyan-800/30">Certified Cat6A</span>
                  <span className="px-1.5 py-0.5 bg-cyan-900/30 text-cyan-300 font-mono text-[9px] border border-cyan-800/30">Dual SFP+ Up links</span>
                  <span className="px-1.5 py-0.5 bg-cyan-900/30 text-cyan-300 font-mono text-[9px] border border-cyan-800/30">0.0ns Thermal Hotspots</span>
                </div>
              </div>
            </div>

            {/* Handle/Overlay */}
            <div 
              className="absolute inset-y-0 pointer-events-none"
              style={{ left: `calc(${sliderPosition}% - 12px)` }}
            >
              <div className="h-full w-0.5 bg-cyan-400 absolute left-2.5"></div>
              <div className="h-6 w-6 rounded-full bg-cyan-400 border border-slate-950 flex items-center justify-center shadow-lg shadow-cyan-900/30 absolute top-1/2 -translate-y-1/2 cursor-ew-resize pointer-events-auto">
                <Shuffle className="h-3 w-3 text-slate-950 font-bold" />
              </div>
            </div>

            {/* Native slider control input overlay to make it interactive */}
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderPosition} 
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-y-0 w-full opacity-0 cursor-ew-resize z-10" 
            />
          </div>

          <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
            <span>◀ SLIDE LEFT FOR UNMANAGED</span>
            <span className="text-cyan-400 hover:underline cursor-pointer flex items-center gap-1" onClick={() => setSliderPosition(100)}>
              <Eye className="h-3 w-3" /> Show complete redesign
            </span>
            <span>SLIDE RIGHT FOR REDESIGN ▶</span>
          </div>
        </div>

        {/* Right Side: VLAN Network Topology Designer / Simulator (6cols) */}
        <div className="lg:col-span-6 bg-slate-950/80 border border-slate-850 p-5 rounded-xl flex flex-col justify-between h-full min-h-[340px]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono text-slate-500 uppercase">Interactive Architecture Lab</span>
              <span className="text-[9px] bg-cyan-950/80 border border-cyan-800/60 px-2 py-0.5 rounded text-cyan-400 font-mono">
                TEST CONNECTION PATHS
              </span>
            </div>

            <h5 className="font-bold text-sm mb-1.5 text-white">Unified Multi-site SD-WAN Design</h5>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Our engineering team builds isolated, high-speed virtual local area networks (VLANs) that ensure security parameters are maintained across your commercial zones. Click a zone to load its diagram:
            </p>

            {/* Zone Buttons */}
            <div className="grid grid-cols-3 gap-2.5 mb-5 text-xs">
              <button
                type="button"
                onClick={() => setActiveSegment('hq')}
                className={`py-2 px-1 focus:outline-none rounded border font-semibold transition ${
                  activeSegment === 'hq' 
                    ? 'bg-cyan-950/60 border-cyan-500 text-cyan-300' 
                    : 'bg-transparent border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                Headquarters
              </button>
              <button
                type="button"
                onClick={() => setActiveSegment('branch')}
                className={`py-2 px-1 focus:outline-none rounded border font-semibold transition ${
                  activeSegment === 'branch' 
                    ? 'bg-cyan-950/60 border-cyan-500 text-cyan-300' 
                    : 'bg-transparent border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                Remote Branch
              </button>
              <button
                type="button"
                onClick={() => setActiveSegment('datacenter')}
                className={`py-2 px-1 focus:outline-none rounded border font-semibold transition ${
                  activeSegment === 'datacenter' 
                    ? 'bg-cyan-950/60 border-cyan-500 text-cyan-300' 
                    : 'bg-transparent border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                Secure Cloud Vault
              </button>
            </div>

            {/* Active Topology Diagram */}
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg min-h-[140px] flex flex-col justify-between">
              {activeSegment === 'hq' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">ZONE: HQ LAN ARCHITECTURE</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5" /> High redundancy (LACP) active
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-around py-3">
                    <div className="text-center">
                      <Server className="h-7 w-7 mx-auto text-cyan-400" />
                      <span className="text-[10px] font-mono text-slate-300 block mt-1">Core Switch</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-600" />
                    <div className="text-center">
                      <Network className="h-7 w-7 mx-auto text-purple-400" />
                      <span className="text-[10px] font-mono text-slate-300 block mt-1">VLAN 10 (Corp)</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-600" />
                    <div className="text-center">
                      <ShieldCheck className="h-7 w-7 mx-auto text-emerald-400" />
                      <span className="text-[10px] font-mono text-slate-300 block mt-1">Firewall</span>
                    </div>
                  </div>
                </div>
              )}

              {activeSegment === 'branch' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">ZONE: BRANCH REDUNDANT LTE</span>
                    <span className="text-cyan-400 flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5" /> SD-WAN tunnels established
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-around py-3">
                    <div className="text-center">
                      <Server className="h-7 w-7 mx-auto text-slate-400" />
                      <span className="text-[10px] font-mono text-slate-300 block mt-1">Branch Router</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-600" />
                    <div className="text-center">
                      <Shuffle className="h-7 w-7 mx-auto text-cyan-400" />
                      <span className="text-[10px] font-mono text-slate-300 block mt-1">LTE backup path</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-600" />
                    <div className="text-center">
                      <Server className="h-7 w-7 mx-auto text-violet-400" />
                      <span className="text-[10px] font-mono text-slate-300 block mt-1">Main JHB Node</span>
                    </div>
                  </div>
                </div>
              )}

              {activeSegment === 'datacenter' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">ZONE: SOVEREIGN HYBRID VAULT</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Synchronized offsite replication
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-around py-3">
                    <div className="text-center">
                      <Server className="h-7 w-7 mx-auto text-purple-400" />
                      <span className="text-[10px] font-mono text-slate-300 block mt-1">Primary Storage</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-600" />
                    <div className="text-center">
                      <ShieldCheck className="h-7 w-7 mx-auto text-cyan-400" />
                      <span className="text-[10px] font-mono text-slate-300 block mt-1">AES Encryption</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-600" />
                    <div className="text-center">
                      <Server className="h-7 w-7 mx-auto text-emerald-400" />
                      <span className="text-[10px] font-mono text-slate-300 block mt-1">Redundant Node</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Specs label */}
              <div className="border-t border-slate-800 pt-2 text-[10px] font-mono text-slate-500 flex justify-between">
                <span>CONFIGURED BY: JORDAN ENGINEERING NOC</span>
                <span>WARRANTY: 25 YEARS CERTIFIED</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
