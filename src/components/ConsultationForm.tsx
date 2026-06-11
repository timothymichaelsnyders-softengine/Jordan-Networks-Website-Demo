import { useState, FormEvent } from 'react';
import { 
  Building2, Users, AlertCircle, HelpCircle, HardDrive, 
  Calendar, CheckCircle, ChevronLeft, ChevronRight, Phone, Mail, Clock 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ConsultationForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form selections and data
  const [company, setCompany] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Johannesburg');
  const [size, setSize] = useState('11-50 employees');

  // Selected challenges (multiple selection)
  const [challenges, setChallenges] = useState<string[]>([]);
  // Selected services (multiple selection)
  const [services, setServices] = useState<string[]>([]);
  // Project Scope / Budget type
  const [scope, setScope] = useState('Ongoing Managed IT Service Tier');

  // Selected date/time for the consultation appointment
  const [selectedDate, setSelectedDate] = useState<string>('June 15, 2026');
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM');

  // Static options
  const LOCATIONS = ['Johannesburg', 'Pretoria', 'Midrand', 'Sandton', 'Cape Town', 'Durban', 'Gauteng-wide', 'Other'];
  const SIZES = ['1 - 10 employees', '11 - 50 employees', '51 - 150 employees', '150+ Enterprise seats'];

  const CHALLENGE_OPTIONS = [
    'Unreliable / Slow IT Support SLAs',
    'Load Shedding server crashes',
    'POPIA compliance audit anxiety',
    'Messy cabling cabinets & packet drops',
    'Frequent Wi-Fi and fiber drops',
    'Need secure hybrid cloud remote paths'
  ];

  const SERVICE_OPTIONS = [
    'Fully Managed IT Department Service',
    'Unified Threat SOC & Cybersecurity',
    'Structured Fiber / Network Cabling',
    'Redundant Cloud & Backup Disaster Vaults',
    'IT Strategic Roadmap Audit'
  ];

  const SCOPE_OPTIONS = [
    'Ongoing Managed IT Service Tier',
    'Immediate once-off infrastructure project',
    'Urgent emergency remedial support audit'
  ];

  const DATE_OPTIONS = ['June 15, 2026', 'June 16, 2026', 'June 17, 2026', 'June 18, 2026'];
  const TIME_OPTIONS = ['09:00 AM', '10:00 AM', '11:30 AM', '02:00 PM', '03:30 PM'];

  const toggleChallenge = (item: string) => {
    setChallenges(prev => 
      prev.includes(item) ? prev.filter(c => c !== item) : [...prev, item]
    );
  };

  const toggleService = (item: string) => {
    setServices(prev => 
      prev.includes(item) ? prev.filter(s => s !== item) : [...prev, item]
    );
  };

  const handleNext = () => {
    if (step === 1) {
      if (!company || !contactName || !email) {
        alert('Please fill out Company, Contact Name, and Email to proceed.');
        return;
      }
    }
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate elite sales CRM receipt delay
    setTimeout(() => {
      setLoading(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div id="consultation-form-wrapper" className="w-full bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-5 md:p-8 text-slate-100 font-sans max-w-3xl mx-auto overflow-hidden relative">
      
      {/* Background flare */}
      <div className="absolute -top-10 -left-10 w-48 h-48 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Progress header */}
      {!isSuccess && (
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2.5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold">
              STEP {step} OF 5: {
                step === 1 ? 'Business & Contact Information' :
                step === 2 ? 'Identify Operational Roadblocks' :
                step === 3 ? 'Select Desired Solutions' :
                step === 4 ? 'Project & Scope Timeline' :
                'Choose Appointment Slot'
              }
            </span>
            <span className="text-xs text-slate-500 font-mono">
              {Math.round((step / 5) * 100)}% Complete
            </span>
          </div>
          {/* Progress bar */}
          <div className="w-full bg-slate-850 h-1.5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-300"
              style={{ width: `${(step / 5) * 100}%` }}
            />
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {/* Success Screen */}
        {isSuccess ? (
          <motion.div
            key="success-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-10 space-y-5"
          >
            <div className="h-16 w-16 bg-cyan-950/80 border border-cyan-500/50 rounded-full flex items-center justify-center mx-auto text-cyan-400">
              <CheckCircle className="h-8 w-8 animate-bounce" />
            </div>

            <div className="space-y-2 max-w-md mx-auto">
              <h4 className="text-xl font-bold text-white">Consultation Booked Successfully!</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Thank you, <strong className="text-white">{contactName}</strong>! Your custom ICT briefing file for <strong className="text-white">{company}</strong> is being prepped. An invitation has been requested for your slot on:
              </p>
              
              {/* Slot Details Badge */}
              <div className="bg-slate-950 border border-slate-800 p-3 rounded-lg font-mono text-xs text-cyan-400 inline-block mt-1">
                📅 {selectedDate} @ 🕒 {selectedTime} ({location} time zone)
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed max-w-sm mx-auto">
              One of our Senior Solutions Architects of Jordan Networks will contact you on <strong className="text-slate-300">{phone || email}</strong> within the next 4 business hours to confirm your topology brief.
            </p>

            <button
              type="button"
              id="reset-form-btn"
              onClick={() => {
                setStep(1);
                setIsSuccess(false);
                setCompany('');
                setContactName('');
                setEmail('');
                setPhone('');
                setChallenges([]);
                setServices([]);
              }}
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white font-semibold text-xs rounded-lg transition"
            >
              Configure Another Assessment
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Step 1: Business Information */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white">Let’s kick off your Technology Audit</h4>
                  <p className="text-xs text-slate-400">Tell us basic details so we can investigate localized lines (e.g. Vuma/DFA availability).</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">Registered Company Name *</label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                      <input 
                        type="text" 
                        required
                        value={company}
                        id="form-company-name"
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Acme Logistics (Pty) Ltd" 
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 pl-9 pr-4 text-xs focus:border-cyan-500 focus:outline-none text-slate-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">Contact Person Name *</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                      <input 
                        type="text" 
                        required
                        id="form-contact-name"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="e.g. Timothy Snyders" 
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 pl-9 pr-4 text-xs focus:border-cyan-500 focus:outline-none text-slate-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">Business Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                      <input 
                        type="email" 
                        required
                        id="form-contact-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. compliance@yourcompany.co.za" 
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 pl-9 pr-4 text-xs focus:border-cyan-500 focus:outline-none text-slate-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">Direct Telephone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                      <input 
                        type="tel" 
                        id="form-contact-phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +27 11 123 4567" 
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 pl-9 pr-4 text-xs focus:border-cyan-500 focus:outline-none text-slate-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">Primary South African Office Location</label>
                    <select 
                      value={location} 
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 p-2 text-xs rounded-lg text-slate-200 focus:border-cyan-500 focus:outline-none"
                    >
                      {LOCATIONS.map(l => (
                        <option key={l} value={l}>{l}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">Estimated Fleet Size</label>
                    <select 
                      value={size} 
                      onChange={(e) => setSize(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 p-2 text-xs rounded-lg text-slate-200 focus:border-cyan-500 focus:outline-none"
                    >
                      {SIZES.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Challenges */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white">What are your critical IT pain points?</h4>
                  <p className="text-xs text-slate-400">Select all parameters currently causing operational concern. (Click to select multiple)</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CHALLENGE_OPTIONS.map(opt => {
                    const selected = challenges.includes(opt);
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => toggleChallenge(opt)}
                        className={`p-3.5 rounded-xl border text-left text-xs transition flex items-start gap-2.5 ${
                          selected 
                            ? 'bg-cyan-950/40 border-cyan-500 text-cyan-200 shadow-md shadow-cyan-950/10' 
                            : 'bg-slate-950/50 border-slate-850 hover:border-slate-700 text-slate-300 hover:text-white'
                        }`}
                      >
                        <AlertCircle className={`h-4.5 w-4.5 shrink-0 mt-0.5 ${selected ? 'text-cyan-400 animate-pulse' : 'text-slate-500'}`} />
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Step 3: Required Services */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white">Which solutions interest your team?</h4>
                  <p className="text-xs text-slate-400">Select any target technologies you want to integrate or discuss. (Click to select multiple)</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICE_OPTIONS.map(opt => {
                    const selected = services.includes(opt);
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => toggleService(opt)}
                        className={`p-3.5 rounded-xl border text-left text-xs transition flex items-start gap-2.5 ${
                          selected 
                            ? 'bg-cyan-950/40 border-cyan-500 text-cyan-200 shadow-md shadow-cyan-950/10' 
                            : 'bg-slate-950/50 border-slate-850 hover:border-slate-700 text-slate-300 hover:text-white'
                        }`}
                      >
                        <HelpCircle className={`h-4.5 w-4.5 shrink-0 mt-0.5 ${selected ? 'text-cyan-400' : 'text-slate-500'}`} />
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Step 4: Project Scope */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white">Project Scope & Scale parameters</h4>
                  <p className="text-xs text-slate-400">Select the model which aligns with your operational budget.</p>
                </div>

                <div className="space-y-3">
                  {SCOPE_OPTIONS.map(opt => {
                    const selected = scope === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setScope(opt)}
                        className={`w-full p-4 rounded-xl border text-left text-xs transition flex items-start gap-3 ${
                          selected 
                            ? 'bg-cyan-950/40 border-cyan-500 text-cyan-200' 
                            : 'bg-slate-950/50 border-slate-850 hover:border-slate-750 text-slate-300 hover:text-white'
                        }`}
                      >
                        <HardDrive className={`h-5 w-5 shrink-0 mt-0.5 ${selected ? 'text-cyan-400' : 'text-slate-500'}`} />
                        <div>
                          <span className="font-semibold block text-white">{opt}</span>
                          <span className="text-[11px] text-slate-400 mt-0.5 block">
                            {opt === 'Ongoing Managed IT Service Tier' ? 'Predictable monthly support with SLA protection, virtual CIO consultations, and proactive 24/7 security overwatch.' :
                             opt === 'Immediate once-off infrastructure project' ? 'Structured network layout installations, regional multi-gigabit fiber rollouts, or deep migration initiatives.' :
                             'Urgent critical security breach scans or active disaster control restoration.'}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Step 5: Appointment Selection */}
            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white">Conclude Assessment - Choose Slot</h4>
                  <p className="text-xs text-slate-400">Select an available workspace consultation slot with our Architecture Lead.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-2">
                  {/* Calendar Dates Column */}
                  <div className="bg-slate-950/60 p-3.5 border border-slate-850 rounded-xl space-y-2.5">
                    <span className="text-[9px] font-mono tracking-wider text-slate-500 block uppercase">AVAILABLE BRIEFING DATES</span>
                    <div className="grid grid-cols-2 gap-2">
                      {DATE_OPTIONS.map(d => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setSelectedDate(d)}
                          className={`py-2 px-1 focus:outline-none rounded text-xs border font-mono transition text-center ${
                            selectedDate === d 
                              ? 'bg-cyan-500 border-cyan-400 text-slate-950 font-bold' 
                              : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-600'
                          }`}
                        >
                          {d.replace(', 2026', '')}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Times Column */}
                  <div className="bg-slate-950/60 p-3.5 border border-slate-850 rounded-xl space-y-2.5">
                    <span className="text-[9px] font-mono tracking-wider text-slate-500 block uppercase">AVAILABLE SLOTS (SAST TIME)</span>
                    <div className="grid grid-cols-2 gap-2">
                      {TIME_OPTIONS.map(t => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setSelectedTime(t)}
                          className={`py-2 px-1 focus:outline-none rounded text-xs border font-mono transition text-center ${
                            selectedTime === t 
                              ? 'bg-cyan-500 border-cyan-400 text-slate-950 font-bold' 
                              : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-600'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-cyan-950/20 border border-cyan-900/30 rounded-xl text-xs flex items-center gap-2.5">
                  <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse shrink-0"></div>
                  <p className="text-cyan-300 leading-snug">
                    You have selected a 30-minute ICT scoping meeting on <strong className="text-white">{selectedDate}</strong> at <strong className="text-white">{selectedTime}</strong>.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Controls */}
            <div className="flex justify-between items-center border-t border-slate-800/60 pt-4 mt-6">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1 transition"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Back
                </button>
              ) : (
                <div />
              )}

              {step < 5 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-lg flex items-center gap-1 transition active:scale-95"
                >
                  Continue
                  <ChevronRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 disabled:from-slate-800 disabled:to-slate-800 text-slate-950 font-extrabold text-xs rounded-lg flex items-center gap-1.5 transition active:scale-95 shadow-lg shadow-cyan-950/20"
                >
                  {loading ? (
                    <>
                      <Clock className="h-4 w-4 animate-spin" />
                      Saving Consultation slot...
                    </>
                  ) : (
                    <>
                      <Calendar className="h-4 w-4" />
                      Save My Scoping Briefing Slot
                    </>
                  )}
                </button>
              )}
            </div>

          </form>
        )}
      </AnimatePresence>

    </div>
  );
}
