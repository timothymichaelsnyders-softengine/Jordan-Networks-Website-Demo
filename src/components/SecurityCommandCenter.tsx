import { useState, useEffect, FormEvent } from 'react';
import { Shield, ShieldAlert, Cpu, Lock, Terminal, Radio, HelpCircle, FileCheck, RefreshCw, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Threat {
  id: string;
  sourceIp: string;
  location: string;
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  time: string;
  target: string;
}

export default function SecurityCommandCenter() {
  const [activeThreatsCount, setActiveThreatsCount] = useState(13240);
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<null | { score: number; status: string; advice: string }>(null);

  // User input states for the Security Risk Estimator
  const [employees, setEmployees] = useState('11-50');
  const [hasFirewall, setHasFirewall] = useState('partial');
  const [backupFreq, setBackupFreq] = useState('weekly');
  const [securityTraining, setSecurityTraining] = useState('no');

  // Threat feed state
  const [feeds, setFeeds] = useState<Threat[]>([
    {
      id: 'TX-401',
      sourceIp: '185.190.140.22',
      location: 'Western Europe Gateway',
      type: 'SQL Injection attempt on JHB-DB-02',
      severity: 'high',
      time: '1.2s ago',
      target: 'Johannesburg Cluster'
    },
    {
      id: 'TX-402',
      sourceIp: '103.220.12.190',
      location: 'East Asian Hub',
      type: 'DDoS Amplification Vector',
      severity: 'critical',
      time: '3.4s ago',
      target: 'Cape Town WAN Gateway'
    },
    {
      id: 'TX-403',
      sourceIp: '196.11.240.231',
      location: 'Local ISP Segment (South Africa)',
      type: 'Office Brute-Force Auth Attempt',
      severity: 'medium',
      time: '8.1s ago',
      target: 'Pretoria Active Directory'
    }
  ]);

  // Simulate threat counter updating
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveThreatsCount(prev => prev + Math.floor(Math.random() * 4) - 1);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Simulate updating threat log list
  useEffect(() => {
    const timer = setInterval(() => {
      const types = [
        'Brute-Force SSH scanning on JHB-Edge-Firewall',
        'Phishing attachment blocked on Sandton Tenant MX',
        'Unauthorized LDAP scan blocked',
        'Cryptomining connection terminated at source',
        'XSS injection vector isolated at secure WAF layer'
      ];
      const locations = ['North America VPN', 'Eastern Europe Proxy', 'Rest of Africa ISP Node', 'South America Relay'];
      const targets = ['Johannesburg Core Hub', 'Cape Town Edge Vault', 'Durban Backup Target', 'Port Elizabeth Node'];
      const severed = ['medium', 'high', 'critical'] as const;

      const randomIp = `${Math.floor(Math.random() * 190) + 10}.${Math.floor(Math.random() * 254) + 1}.${Math.floor(Math.random() * 254) + 1}.${Math.floor(Math.random() * 254) + 1}`;
      const newThreat: Threat = {
        id: `TX-${Math.floor(Math.random() * 800) + 400}`,
        sourceIp: randomIp,
        location: locations[Math.floor(Math.random() * locations.length)],
        type: types[Math.floor(Math.random() * types.length)],
        severity: severed[Math.floor(Math.random() * severed.length)],
        time: 'Just now',
        target: targets[Math.floor(Math.random() * targets.length)]
      };

      setFeeds(prev => [newThreat, ...prev.slice(0, 3)]);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  // Run a interactive risk calculation
  const calculateRisk = (e: FormEvent) => {
    e.preventDefault();
    setIsScanning(true);
    setScanResult(null);

    // Simulate cyber telemetry progress
    setTimeout(() => {
      let score = 90; // Default max score
      let adviceLines: string[] = [];

      // Subtract based on fields
      if (employees === '100+') score -= 10;
      if (hasFirewall === 'no') {
        score -= 30;
        adviceLines.push('Immediate deployment of Next-Gen Firewalls needed.');
      } else if (hasFirewall === 'partial') {
        score -= 15;
        adviceLines.push('Configure Unified Threat Control maps across offsite remote work networks.');
      }

      if (backupFreq === 'none') {
        score -= 25;
        adviceLines.push('Implement redundant daily offsite POPIA protection loops immediately.');
      } else if (backupFreq === 'monthly') {
        score -= 15;
        adviceLines.push('Accelerate cloud-sync frequency to RPO target windows of under 4 hours.');
      } else if (backupFreq === 'weekly') {
        score -= 5;
        adviceLines.push('Increase high-frequency cloud sync increments to shield active databases.');
      }

      if (securityTraining === 'no') {
        score -= 15;
        adviceLines.push('Conduct security phishing test simulations for administrative executives.');
      }

      // Safeguard boundaries
      score = Math.max(15, score);

      let status = 'Critical Risk';
      if (score >= 80) status = 'Excellent Security Posture';
      else if (score >= 50) status = 'Moderate Security Concerns';

      setScanResult({
        score,
        status,
        advice: adviceLines[0] || 'Upgrade firewall intrusion policies to modern zero-trust tunnels.'
      });
      setIsScanning(false);
    }, 1500);
  };

  return (
    <div id="security-command-center-root" className="w-full bg-slate-950 border border-purple-950/40 rounded-2xl p-5 md:p-6 text-slate-100 font-sans shadow-2xl relative overflow-hidden">
      
      {/* Background radial gradient to give a high-tech glowing look */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-60 h-60 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Title block */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-purple-950/30 pb-4 mb-6 gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-purple-950/40 border border-purple-800/40 rounded-xl text-purple-400">
            <Shield className="h-6 w-6" />
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-widest text-slate-300 font-mono uppercase">CYBERSECURITY OVERWATCH CENTER</h4>
            <p className="text-xs text-slate-400">Continuous Security Information & Event Orchestration (SIEM)</p>
          </div>
        </div>

        {/* Live Counter */}
        <div className="text-right">
          <span className="text-[10px] font-mono text-slate-500 block uppercase">Threats Terminated This Month</span>
          <span className="text-lg font-bold font-mono tracking-wider text-purple-400">
            {activeThreatsCount.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Interactive Calculator (7cols) */}
        <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800/80 p-5 rounded-xl">
          <div className="flex items-center gap-2.5 mb-3.5">
            <FileCheck className="h-5 w-5 text-purple-400" />
            <h5 className="font-semibold text-sm text-white">Instant POPIA & Cyber Risk Assessment</h5>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            Evaluate your corporate technology vulnerabilities instantly. Select your current IT parameters below to obtain an automated readiness report and risk score.
          </p>

          <form onSubmit={calculateRisk} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Company Fleet Size</label>
                <select 
                  value={employees} 
                  onChange={(e) => setEmployees(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 p-2 text-xs rounded text-slate-200 focus:border-purple-500 focus:outline-none"
                >
                  <option value="1-10">1 - 10 employees</option>
                  <option value="11-50">11 - 50 employees</option>
                  <option value="51-100">51 - 100 employees</option>
                  <option value="100+">100+ Enterprise seats</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Active Next-Gen Firewall</label>
                <select 
                  value={hasFirewall} 
                  onChange={(e) => setHasFirewall(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 p-2 text-xs rounded text-slate-200 focus:border-purple-500 focus:outline-none"
                >
                  <option value="yes">Yes, fully monitored 24/7</option>
                  <option value="partial">Basic Office Router Only</option>
                  <option value="no">Unsure / No central firewall</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Backup Infrastructure Sync</label>
                <select 
                  value={backupFreq} 
                  onChange={(e) => setBackupFreq(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 p-2 text-xs rounded text-slate-200 focus:border-purple-500 focus:outline-none"
                >
                  <option value="daily">Daily encrypted offsite</option>
                  <option value="weekly">Weekly backups to NAS</option>
                  <option value="monthly">Monthly / Ad-hoc physical backups</option>
                  <option value="none">No automated offsite storage</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Staff Cybersecurity Training</label>
                <select 
                  value={securityTraining} 
                  onChange={(e) => setSecurityTraining(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 p-2 text-xs rounded text-slate-200 focus:border-purple-500 focus:outline-none"
                >
                  <option value="yes">Yes, run annual audits</option>
                  <option value="no">No active training or anti-phish simulation</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isScanning}
              className="w-full mt-2 py-2.5 bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 disabled:from-slate-800 disabled:to-slate-800 text-white font-bold text-xs rounded-lg transition active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-purple-900/10"
            >
              {isScanning ? (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin text-purple-300" />
                  Analyzing Threat Surface Posture...
                </>
              ) : (
                <>
                  <Lock className="h-4 w-4" />
                  Run Automated Readiness Assessment
                </>
              )}
            </button>
          </form>

          {/* Interactive Scan Response */}
          <AnimatePresence mode="wait">
            {scanResult && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 pt-4 border-t border-purple-950/20"
              >
                <div className={`p-4 rounded-lg flex flex-col sm:flex-row items-center gap-4 border ${
                  scanResult.score >= 80 
                    ? 'bg-emerald-950/30 border-emerald-800/40 text-emerald-300' 
                    : scanResult.score >= 50 
                    ? 'bg-yellow-950/30 border-yellow-800/40 text-yellow-300' 
                    : 'bg-rose-950/30 border-rose-800/40 text-rose-300'
                }`}>
                  <div className="shrink-0 text-center">
                    <span className="text-[10px] uppercase font-mono block tracking-wider opacity-65">ESTIMATED INDEX</span>
                    <span className="text-3xl font-extrabold font-mono">{scanResult.score}%</span>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h6 className="text-sm font-bold leading-none mb-1 text-white">{scanResult.status}</h6>
                    <p className="text-xs text-slate-300 mt-1.5 font-sans">
                      <strong className="text-white uppercase font-mono text-[10px]">Jordan SOC Recommends:</strong> {scanResult.advice}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Active Threat Vector Feed (5cols) */}
        <div className="lg:col-span-5 flex flex-col bg-slate-950 border border-slate-800 rounded-xl overflow-hidden min-h-[300px]">
          <div className="bg-slate-900/60 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between text-xs font-mono">
            <span className="flex items-center gap-1.5 text-purple-400">
              <Terminal className="h-3.5 w-3.5" />
              LIVE SHIELD LOGS
            </span>
            <span className="text-[9px] text-slate-500 uppercase tracking-widest leading-none">REAL-TIME BLOCKS</span>
          </div>

          <div className="p-3 flex-1 flex flex-col justify-between space-y-3">
            <div className="space-y-2.5">
              {feeds.map((threat, index) => (
                <div 
                  key={threat.id} 
                  className={`p-2.5 bg-slate-900/60 border rounded-lg text-[11px] font-mono transition-all duration-500 ${
                    threat.severity === 'critical' ? 'border-rose-950/80 bg-rose-950/5 text-rose-300' : 'border-slate-850 text-slate-300'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1 text-[10px] text-slate-500">
                    <span>IP: {threat.sourceIp} ({threat.location})</span>
                    <span className={`text-[8px] px-1 rounded uppercase font-semibold ${
                      threat.severity === 'critical' ? 'bg-rose-500/20 text-rose-400' :
                      threat.severity === 'high' ? 'bg-amber-500/20 text-amber-400' :
                      'bg-slate-800 text-slate-400'
                    }`}>
                      {threat.severity}
                    </span>
                  </div>
                  <div className="text-slate-200 truncate">{threat.type}</div>
                  <div className="flex justify-between items-center mt-1.5 text-[9px] text-slate-500">
                    <span>Target: {threat.target}</span>
                    <span>{threat.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 bg-indigo-950/20 border border-indigo-900/30 rounded-lg text-center">
              <span className="text-[10px] font-bold text-slate-200 block mb-0.5">Need a comprehensive security audit?</span>
              <p className="text-[9px] text-indigo-300 leading-snug">
                Get a Certified POPIA IT Alignment Check & deep penetration scan.
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-5 text-center text-[10px] text-slate-500 font-mono flex items-center justify-center gap-1">
        <Radio className="h-3 w-3 text-purple-500 animate-ping" />
        Jordan Networks Sentinel EDR protects endpoints across South African commercial zones 24/7.
      </div>

    </div>
  );
}
