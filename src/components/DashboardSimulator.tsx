import { useState, useEffect } from 'react';
import { 
  Server, Cpu, Activity, Clock, ThumbsUp, AlertTriangle, 
  RefreshCw, Power, Radio, Shield, Layers, HelpCircle, HardDrive 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MockTicket {
  id: string;
  title: string;
  time: string;
  status: 'monitoring' | 'remediating' | 'resolved' | 'queued';
  priority: 'low' | 'medium' | 'high' | 'critical';
  resolvedBy?: string;
  source: string;
}

export default function DashboardSimulator() {
  const [activeTab, setActiveTab] = useState<'status' | 'helpdesk' | 'backup'>('status');
  const [isGridDown, setIsGridDown] = useState(false);
  const [performanceBoost, setPerformanceBoost] = useState(false);
  const [systemLoad, setSystemLoad] = useState(34);
  const [simulatedLogs, setSimulatedLogs] = useState<string[]>([
    'NOC Engine initialized successfully.',
    'Verifying end-user active firewalls...',
    'Johannesburg Central Office primary WAN connected: Symmetric 500Mbps.',
    'Cape Town Core Router secure link - OK.',
    'System status: 100% Operational.'
  ]);
  
  const [tickets, setTickets] = useState<MockTicket[]>([
    {
      id: 'JN-9281',
      title: 'Vulnerability sweep requested (POPIA Audits)',
      time: 'Just now',
      status: 'remediating',
      priority: 'high',
      source: 'Internal Scanner'
    },
    {
      id: 'JN-9275',
      title: 'Power outage detected client office (Sandton)',
      time: '5 mins ago',
      status: 'monitoring',
      priority: 'critical',
      source: 'Smart UPS Node'
    },
    {
      id: 'JN-9240',
      title: 'Automated patch rollout - Exchange Server',
      time: '1 hour ago',
      status: 'resolved',
      priority: 'medium',
      resolvedBy: 'AI Sentinel Auto-Patch',
      source: 'Patch Management Hub'
    },
    {
      id: 'JN-9190',
      title: 'Active spoofing email filtered for Admin MD',
      time: '3 hours ago',
      status: 'resolved',
      priority: 'high',
      resolvedBy: 'Secure Mail Threat SOC',
      source: 'SOC Cloud Guard'
    },
  ]);

  // Handle system stats simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setSystemLoad(prev => {
        const base = performanceBoost ? 18 : isGridDown ? 57 : 34;
        const drift = Math.floor(Math.random() * 8) - 4;
        const next = base + drift;
        return Math.max(10, Math.min(95, next));
      });
    }, 3000);
    return () => clearInterval(timer);
  }, [isGridDown, performanceBoost]);

  // Simulated live log generator
  useEffect(() => {
    const timer = setInterval(() => {
      const logs = [
        'Checked file server integrity - 0 corruptions.',
        'Continuous synchronization to Redundant Cape Town Datacentre - Synced successfully 1.2MB.',
        'Ping response Sandton Office backup router: 4ms. Packet loss: 0.00%.',
        'Database transactional snapshot executed.',
        'Automated local domain controller health check clean.',
        'Sentinel MDR: Checked 1,240 threat definitions on fleet - 0 active signatures found.'
      ];
      const randomLog = logs[Math.floor(Math.random() * logs.length)];
      const timestamp = new Date().toLocaleTimeString();
      setSimulatedLogs(prev => [`[${timestamp}] ${randomLog}`, ...prev.slice(0, 5)]);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Trigger grid crash simulation (Load shedding resilience)
  const triggerGridCrash = () => {
    setIsGridDown(true);
    setSimulatedLogs(prev => [
      `[ALERT] OUTAGE COMMENCED: South African Grid Power lost.`,
      `[INTELLIGENT TRACER] Dual Lithium UPS systems engaged instantly. Failover delay: 0.00ms.`,
      `[COMMUNICATION] Triggered primary backup ISP line (LTE/5G Vuma Mesh). Routing critical assets.`,
      `[vCIO] Automated notification launched of power fallback modes. Server loads balanced.`,
      ...prev.slice(0, 3)
    ]);

    setTickets(prev => [
      {
        id: 'JN-9290',
        title: 'Mains Power Down - Sandton Server Room. Active UPS engaged.',
        time: 'Just now',
        status: 'remediating',
        priority: 'critical',
        source: 'UPS Smart Beacon'
      },
      ...prev
    ]);

    // Fast-resolve demo after 8 seconds
    setTimeout(() => {
      setTickets(prev => 
        prev.map(t => t.id === 'JN-9290' ? { ...t, status: 'resolved', resolvedBy: 'Automatic UPS Integration Tracker' } : t)
      );
      setSimulatedLogs(prev => [
        `[SUCCESS] Remote backup cooling and load balanced successfully.`,
        `[vCIO Log] Automated warning reports safely archived.`,
        ...prev.slice(0, 3)
      ]);
    }, 10000);
  };

  // Restore grid power
  const restoreGridPower = () => {
    setIsGridDown(false);
    setSimulatedLogs(prev => [
      `[STATUS] South African Mains Grid power restored.`,
      `[INTELLIGENT TRACER] Standard utility power safe. Lithium battery pools switched back to trickle-charge state.`,
      `[COMMUNICATION] Primary premium fiber channels restored and synced.`,
      ...prev.slice(0, 3)
    ]);
  };

  // Run dynamic manual vulnerability scanning
  const runSelfAuditScan = () => {
    setSystemLoad(85);
    setSimulatedLogs(prev => [
      `[ACTION] Manual user audit scanning launched.`,
      `[SCAN] Querying active connection DNS... Latency checks initiated...`,
      `[POSTURE ENGINE] Port scans evaluated. Zero insecure public ports active on corporate boundary.`,
      `[AUDIT SUCCESS] Score: 98% Optimal. Frame network secure against all registered threats.`,
      ...prev.slice(0, 3)
    ]);
    setTimeout(() => {
      setSystemLoad(prev => prev - 45);
    }, 2000);
  };

  return (
    <div id="dashboard-simulator-root" className="w-full bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-4 md:p-6 text-slate-100 font-sans select-none overflow-hidden">
      
      {/* Top bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800 pb-4 mb-4 gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-cyan-950/80 border border-cyan-800/60 rounded-xl text-cyan-400">
            <Server className="h-6 w-6 animate-pulse" />
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-white uppercase">Jordan NOC Client Portal</h4>
            <p className="text-xs text-slate-400">Redundant Johannesburg - Cape Town Virtual Private Cloud</p>
          </div>
        </div>

        {/* Live system state indicators */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="bg-slate-950/80 border border-slate-800 px-3 py-1.5 rounded-lg flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isGridDown ? 'bg-amber-400' : 'bg-green-400'} opacity-75`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isGridDown ? 'bg-amber-500' : 'bg-green-500'}`}></span>
            </span>
            <span className="text-xs font-mono text-slate-300">
              {isGridDown ? 'UPS BATTERY POWER STATE' : 'GRID MAINS SYNCED'}
            </span>
          </div>

          <div className="bg-slate-950/80 border border-slate-800 px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-mono text-slate-300">
            <Activity className="h-3 w-3 text-cyan-400 animate-bounce" />
            <span>SND SLA: 99.99%</span>
          </div>
        </div>
      </div>

      {/* Grid view */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Sidebar Actions (4cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-4 bg-slate-950/70 border border-slate-800/80 rounded-xl">
            <span className="text-[10px] font-mono tracking-widest text-slate-500 block mb-2 uppercase">POWER CRISIS EMULATION</span>
            <h5 className="text-sm font-medium mb-1.5 text-white">Load-Shedding Durability Test</h5>
            <p className="text-xs text-slate-400 leading-snug mb-3">
              Experience how our automatic, sub-millisecond hardware failover routes traffic and servers safely during power blackouts. Toggle power to state below:
            </p>

            <div className="space-y-2">
              {!isGridDown ? (
                <button
                  type="button"
                  id="simulate-load-shedding-btn"
                  onClick={triggerGridCrash}
                  className="w-full py-2.5 px-4 bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs rounded-lg transition-transform active:scale-95 flex items-center justify-center gap-2"
                >
                  <Power className="h-4 w-4" />
                  Cut South African Power Grid
                </button>
              ) : (
                <button
                  type="button"
                  id="restore-grid-power-btn"
                  onClick={restoreGridPower}
                  className="w-full py-2.5 px-4 bg-green-600 hover:bg-green-500 text-white font-semibold text-xs rounded-lg transition-all active:scale-95 flex items-center justify-center gap-2 animate-pulse"
                >
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  Restore Utility Power Sync
                </button>
              )}

              <button
                type="button"
                id="run-it-audit-btn"
                onClick={runSelfAuditScan}
                className="w-full py-2 px-3 border border-slate-800 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white text-xs rounded-lg transition"
              >
                Trigger Dynamic Network Assessment
              </button>
            </div>
          </div>

          {/* Quick SLA Stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-slate-950/40 border border-slate-800/50 rounded-xl">
              <span className="text-[10px] font-mono text-slate-500 block">FLEET LOAD</span>
              <span className="text-xl font-bold font-mono tracking-tight text-white">{systemLoad}%</span>
              <div className="w-full bg-slate-800 h-1 rounded-full mt-2 overflow-hidden">
                <div 
                  className={`h-full transition-all duration-1000 ${systemLoad > 75 ? 'bg-rose-500' : 'bg-cyan-400'}`}
                  style={{ width: `${systemLoad}%` }}
                />
              </div>
            </div>

            <div className="p-3 bg-slate-950/40 border border-slate-800/50 rounded-xl">
              <span className="text-[10px] font-mono text-slate-500 block">EST. TICKET SLA</span>
              <span className="text-xl font-bold font-mono tracking-tight text-emerald-400">8.4m</span>
              <span className="text-[9px] block text-slate-400 mt-1">Guaranteed Under 15m</span>
            </div>
          </div>

          {/* SLA Proactive Boost */}
          <div className="p-3 bg-gradient-to-r from-cyan-950/50 to-slate-950/50 border border-cyan-800/30 rounded-xl flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-cyan-400 uppercase font-semibold">Jordan Sentinel AI</span>
              <h6 className="text-xs text-white">Auto-Optimize CPU Core Allocation</h6>
            </div>
            <button
              type="button"
              onClick={() => setPerformanceBoost(prev => !prev)}
              className={`px-3 py-1 text-[10px] font-semibold rounded-full border transition ${
                performanceBoost 
                  ? 'bg-cyan-500 border-cyan-400 text-slate-950' 
                  : 'bg-transparent border-slate-700 text-slate-300 hover:border-slate-500'
              }`}
            >
              {performanceBoost ? 'BOOST ACTIVE' : 'ENGAGE BOOST'}
            </button>
          </div>
        </div>

        {/* Dashboard Main Visual Area (8cols) */}
        <div className="lg:col-span-8 flex flex-col bg-slate-950/50 border border-slate-800/80 rounded-xl overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-slate-800 bg-slate-950/80">
            <button
              type="button"
              id="tab-status-btn"
              onClick={() => setActiveTab('status')}
              className={`flex-1 py-3 px-4 text-xs font-semibold border-b-2 transition flex items-center justify-center gap-2 ${
                activeTab === 'status' 
                  ? 'border-cyan-500 text-cyan-400 bg-slate-900/30' 
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Activity className="h-3.5 w-3.5" />
              Infrastructure Health
            </button>
            <button
              type="button"
              id="tab-helpdesk-btn"
              onClick={() => setActiveTab('helpdesk')}
              className={`flex-1 py-3 px-4 text-xs font-semibold border-b-2 transition flex items-center justify-center gap-2 ${
                activeTab === 'helpdesk' 
                  ? 'border-cyan-500 text-cyan-400 bg-slate-900/30' 
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Radio className="h-3.5 w-3.5" />
              Proactive Support Tickets ({tickets.filter(t => t.status !== 'resolved').length})
            </button>
            <button
              type="button"
              id="tab-backup-btn"
              onClick={() => setActiveTab('backup')}
              className={`flex-1 py-3 px-4 text-xs font-semibold border-b-2 transition flex items-center justify-center gap-2 ${
                activeTab === 'backup' 
                  ? 'border-cyan-500 text-cyan-400 bg-slate-900/30' 
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <HardDrive className="h-3.5 w-3.5" />
              Secure Offsite Backups
            </button>
          </div>

          {/* Dynamic Content Display */}
          <div className="p-4 flex-1 min-h-[280px]">
            <AnimatePresence mode="wait">
              {activeTab === 'status' && (
                <motion.div
                  key="status"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  {/* Status Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] text-slate-400">JHB FILE SERVER</span>
                        <Shield className="h-3 w-3 text-cyan-400" />
                      </div>
                      <span className="text-xs font-semibold text-white">REDUNDANT ARCHIVE</span>
                      <p className="text-[10px] text-emerald-400 font-mono mt-1 flex items-center gap-1">
                        <span className="h-1.5 w-1.5 bg-green-500 rounded-full animate-ping"></span>
                        ONLINE & SYNCED
                      </p>
                    </div>

                    <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] text-slate-400">SECURE BOUNDARY</span>
                        <Layers className="h-3 w-3 text-purple-400" />
                      </div>
                      <span className="text-xs font-semibold text-white">SENTINEL EDGE SOC</span>
                      <p className="text-[10px] text-cyan-400 font-mono mt-1 flex items-center gap-1">
                        <span className="h-1.5 w-1.5 bg-cyan-400 rounded-full"></span>
                        THREAT SHIELD ACTIVE
                      </p>
                    </div>

                    <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] text-slate-400">LOCAL POWER GRID</span>
                        <Power className={`h-3 w-3 ${isGridDown ? 'text-amber-400' : 'text-slate-400'}`} />
                      </div>
                      <span className="text-xs font-semibold text-white">
                        {isGridDown ? 'ESKOM BLACKOUT' : 'MAINS SYNCHRONIZED'}
                      </span>
                      <p className={`text-[10px] font-mono mt-1 flex items-center gap-1 ${isGridDown ? 'text-amber-400' : 'text-emerald-400'}`}>
                        {isGridDown ? 'LITHIUM BACKUP STAGE 1' : 'STABLE UTILITY CURRENT'}
                      </p>
                    </div>
                  </div>

                  {/* Terminal Logs (Highly Technical & Professional looking) */}
                  <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono text-[10px] text-slate-400">
                    <div className="flex items-center justify-between mb-2 text-slate-500 border-b border-slate-900 pb-1.5">
                      <span>CONSOLE TELEMETRY OUTPUT</span>
                      <span className="text-[8px] px-1.5 py-0.5 bg-slate-900 rounded">LIVE STACK</span>
                    </div>
                    <div className="space-y-1.5 h-32 overflow-y-auto font-mono scrollbar-thin">
                      {simulatedLogs.map((log, index) => (
                        <div key={index} className={`truncate ${log.includes('[ALERT]') ? 'text-amber-400 font-bold' : log.includes('[SUCCESS]') || log.includes('clean') ? 'text-cyan-400' : 'text-slate-400'}`}>
                          {log}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'helpdesk' && (
                <motion.div
                  key="helpdesk"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-3"
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-slate-400">Continuous remediations of end-user endpoints:</span>
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/30 px-2 py-0.5 rounded">
                      Average Ticket Closure SLA: 8.4 Minutes
                    </span>
                  </div>

                  <div className="space-y-2 h-48 overflow-y-auto pr-1">
                    {tickets.map(ticket => (
                      <div 
                        key={ticket.id} 
                        className="p-3 bg-slate-900/80 border border-slate-800 rounded-lg flex items-center justify-between gap-3 text-xs"
                      >
                        <div className="flex items-start gap-2.5">
                          {ticket.status === 'resolved' ? (
                            <ThumbsUp className="h-4.5 w-4.5 text-emerald-400 shrink-0 mt-0.5" />
                          ) : ticket.priority === 'critical' ? (
                            <AlertTriangle className="h-4.5 w-4.5 text-rose-500 shrink-0 mt-0.5 animate-pulse" />
                          ) : (
                            <div className="h-4 w-4 rounded-full border border-separate border-cyan-500 shrink-0 mt-0.5 animate-spin" style={{ borderTopColor: 'transparent' }} />
                          )}
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-[10px] text-slate-500">{ticket.id}</span>
                              <span className="font-medium text-white">{ticket.title}</span>
                              <span className={`text-[8px] font-mono px-1.5 rounded uppercase ${
                                ticket.priority === 'critical' ? 'bg-rose-500/20 text-rose-400' :
                                ticket.priority === 'high' ? 'bg-amber-500/20 text-amber-400' :
                                'bg-slate-850 text-slate-400'
                              }`}>
                                {ticket.priority}
                              </span>
                            </div>
                            <span className="text-[10px] text-slate-400 block mt-0.5">
                              Origin: {ticket.source} • Received {ticket.time}
                            </span>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          {ticket.status === 'resolved' ? (
                            <span className="text-[10px] text-emerald-400 font-mono font-medium block">
                              RESOLVED
                              <span className="text-[9px] block text-slate-500 font-sans font-normal">
                                by {ticket.resolvedBy}
                              </span>
                            </span>
                          ) : (
                            <span className={`text-[10px] font-mono font-medium block ${
                              ticket.status === 'remediating' ? 'text-amber-400' : 'text-cyan-400'
                            }`}>
                              {ticket.status.toUpperCase()}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'backup' && (
                <motion.div
                  key="backup"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl flex flex-col md:flex-row items-center gap-4">
                    <div className="h-16 w-16 bg-cyan-950/60 border border-cyan-800/40 rounded-xl flex items-center justify-center shrink-0">
                      <HardDrive className="h-8 w-8 text-cyan-400" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h6 className="text-sm font-semibold text-white">Continuous Decentralized Backups (POPIA Safe)</h6>
                      <p className="text-xs text-slate-400 mt-1">
                        Files, transactional SQL tables, and database images are encrypted locally and pushed to secure multi-site datacentres out of immediate risk zones in South Africa.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                    <div className="p-3 bg-slate-900/30 border border-slate-850 rounded-lg flex justify-between items-center">
                      <span className="text-slate-400">ACTIVE VAULT SPEED:</span>
                      <span className="text-cyan-400 font-bold">10Gbps Dedicated</span>
                    </div>
                    <div className="p-3 bg-slate-900/30 border border-slate-850 rounded-lg flex justify-between items-center">
                      <span className="text-slate-400">LAST SYNC TIME:</span>
                      <span className="text-white">Every 15 Minutes</span>
                    </div>
                    <div className="p-3 bg-slate-900/30 border border-slate-850 rounded-lg flex justify-between items-center">
                      <span className="text-slate-400">ENCRYPTION TYPE:</span>
                      <span className="text-purple-400 font-bold">AES-256-GCM Sovereign</span>
                    </div>
                    <div className="p-3 bg-slate-900/30 border border-slate-850 rounded-lg flex justify-between items-center">
                      <span className="text-slate-400">REMEDIAL RESTORE TIME (SLA):</span>
                      <span className="text-emerald-400 font-bold">&lt; 30 Minutes</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>

      {/* Info indicator footer */}
      <div className="mt-4 pt-3 border-t border-slate-800/40 text-center flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] font-mono text-slate-500">
        <span>SECURITY ENCRYPTED PIPELINE • CERTIFICATE VAL-29X • ISO 27001 FRAMEWORK</span>
        <span className="flex items-center gap-1 text-cyan-400">
          <HelpCircle className="h-3 w-3" />
          Jordan Networks Proactive SOC Engine v2026.1
        </span>
      </div>
    </div>
  );
}
