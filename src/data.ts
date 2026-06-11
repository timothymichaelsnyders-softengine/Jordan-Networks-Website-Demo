import { Solution, Industry, CaseStudy, Partner, InsightPost } from './types';

export const SOLUTIONS: Solution[] = [
  {
    id: 'managed-it',
    title: 'Managed IT Operations',
    shortDesc: '24/7 proactive management, monitoring, and automated maintenance of your complete IT fleet.',
    fullDesc: 'We act as your full-time, virtual CIO and IT department. Our intelligent automation platform monitors endpoints, patches machines, and remediates issues before they impact your staff.',
    iconName: 'Cpu',
    category: 'managed',
    benefits: [
      'Eliminate unexpected IT downtime',
      'Reduce internal operational IT costs up to 40%',
      'Predictable monthly operational expenditure'
    ],
    features: [
      '24/7 NOC monitoring with instant alerts',
      'Automated OS patching & vulnerability management',
      'Unlimited Tier-1 to Tier-3 helpdesk support (Remote & On-site)',
      'Strategic virtual CIO (vCIO) consulting and IT roadmapping'
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Unified Cybersecurity Command & SOC',
    shortDesc: 'Zero-Trust defense systems guarding corporate assets against advanced persistent threats.',
    fullDesc: 'Protect your commercial secrets, customer databases, and active channels with our state-of-the-art security suite, which aligns directly with South Africa’s POPIA regulation.',
    iconName: 'ShieldCheck',
    category: 'cyber',
    benefits: [
      'Achieve absolute regulatory & POPIA compliance',
      'Mitigate ransomware and zero-day threat vectors',
      'Continuous defense with 24/7 security orchestration'
    ],
    features: [
      'Managed Detection & Response (EDR/MDR)',
      'Next-Gen firewalls with intrusion prevention and deep packet inspection',
      'Intelligent cloud email filtering & anti-phishing defense',
      'Continuous security posture scanning and vulnerability trials'
    ]
  },
  {
    id: 'network-infra',
    title: 'High-Density Network Infrastructure',
    shortDesc: 'Enterprise structured cabling, high-speed fiber backbones, and reliable high-density Wi-Fi layout.',
    fullDesc: 'Get bulletproof connectivity across your head offices, warehouses, and manufacturing hubs. We design and install robust, certified physical and wireless network meshes.',
    iconName: 'Network',
    category: 'infra',
    benefits: [
      'Interruption-free warehouse and office Roaming',
      'Symmetric low-latency data loops',
      'Certified systems backed by a 25-year structural warranty'
    ],
    features: [
      'Cat6A & Cat7 structured cabling installations',
      'Single/Multi-mode internal and external fiber backbones',
      'Cloud-managed Wi-Fi 6E/7 meshes with corporate tenant isolation',
      'Edge switches and redundant routing configurations'
    ]
  },
  {
    id: 'cloud-solutions',
    title: 'Hybrid Cloud & Disaster Recovery',
    shortDesc: 'Secure, load-shedding-resilient servers and reliable backup orchestration.',
    fullDesc: 'Migrate legacy workloads to redundant, South African hosted secure clouds or Microsoft Azure nodes. Keep your business running with instant offsite virtualization.',
    iconName: 'Cloud',
    category: 'cloud',
    benefits: [
      'Guaranteed business continuity regardless of power grid state',
      'Infinite processing scalability for enterprise applications',
      'Secure, localized data pipelines meeting compliance'
    ],
    features: [
      'Sovereign cloud compute & private storage vaults',
      'Continuous backup syncing with 15-minute recovery point objectives (RPO)',
      'Secure site-to-site VPN paths for remote workforces',
      'Automatic failover drills and virtual workspace desktops'
    ]
  },
  {
    id: 'it-consulting',
    title: 'Enterprise Architecture & Advisory',
    shortDesc: 'Strategic technology consulting that correlates physical IT models with business yield.',
    fullDesc: 'Navigate complex transformations, audits, and hardware asset acquisitions under expert guidance. We help you design long-term technology roadmaps.',
    iconName: 'HeartHandshake',
    category: 'support',
    benefits: [
      'Maximize capital technology investment return',
      'Future-proof high-scale infrastructure migrations',
      'Impartial software and hardware procurement validation'
    ],
    features: [
      'Detailed comprehensive IT security audits',
      'Network routing load and bandwidth optimization reports',
      'POPIA compliance tech framework mapping',
      'Detailed CapEx vs OpEx multi-year modeling'
    ]
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'corporate',
    name: 'Corporate & Finance',
    iconName: 'Building',
    challenge: 'Strict regulatory audits, work-from-home security issues, and legacy core database downtime.',
    solution: 'Engineered zero-trust VPN policies, managed SOC, and fully redundant local fiber lines.',
    outcome: 'Eliminated external breaches and reduced operational IT response overhead to under 10 minutes.',
    metric: '99.99% Uptime'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Clinics',
    iconName: 'Activity',
    challenge: 'Securing electronic health records under POPIA while ensuring immediate access in ICU units.',
    solution: 'Designed multi-zone high-density local Wi-Fi with isolated clinical VLANs and automated backups.',
    outcome: 'Seamless mobile charts access across two regional hospital wings with secure credentials.',
    metric: 'POPIA Compliant'
  },
  {
    id: 'logistics',
    name: 'Logistics & Warehouses',
    iconName: 'Truck',
    challenge: 'Connection drops on handheld scanners across 40,000 sqm distribution centers causing dispatch delays.',
    solution: 'Installed high-density industrial Wi-Fi 6 access points with sub-second device-roaming thresholds.',
    outcome: 'Zero packet loss during picking cycles with optimized physical antenna distribution.',
    metric: '0.0s Scan Delays'
  },
  {
    id: 'retail',
    name: 'Retail & Multi-site',
    iconName: 'ShoppingBag',
    challenge: 'POS drops across dozens of branches during central network offline states.',
    solution: 'Set up SD-WAN networks linking branches with dual-cellular backup routers (LTE/5G) and cloud POS sync.',
    outcome: 'Maintained checkout lines during regional fiber outages with instant sub-second grid failover.',
    metric: '100% Sales Uptime'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Plants',
    iconName: 'Factory',
    challenge: 'Factory machinery noise causing wireless signal corruption and extreme physical conditions for IT equipment.',
    solution: 'Deployed armored heavy-duty outdoor structured cabling and IP67 industrial dust-tight server cabinets.',
    outcome: 'Protected telemetry feeds and automated system controllers from downtime.',
    metric: 'Ruggedized IP67'
  }
];

export const CASESTUDIES: CaseStudy[] = [
  {
    id: 'rand-logistics',
    clientName: 'Rand Supply Chain & Logistics',
    industry: 'Logistics & Distribution',
    challenge: 'Frequent warehouse system drops in Johannesburg, causing millions in supply delivery delays during load shedding.',
    solution: 'Designed a hybrid local cloud environment with smart failover, high-density optical fiber, and solar-UPS redundant power controls.',
    techStack: ['Cisco Meraki Wifi', 'UPS Redundancy', 'Jordan Hybrid Cloud Sync', 'Azure Backup'],
    outcomes: [
      'Eliminated load-shedding computer power trips completely',
      'Enabled real-time barcode telemetry with absolute zero drops',
      'Achieved average dispatch processing speed increase of 28%'
    ],
    roiMetric: '310%',
    roiLabel: 'ROI in Year One',
    imageName: 'logistics_center'
  },
  {
    id: 'gauteng-medical',
    clientName: 'Apex Health Medical Center',
    industry: 'Private Healthcare Services',
    challenge: 'Security compliance audit warnings regarding unprotected medical records and intermittent network dropouts in wards.',
    solution: 'Conducted a zero-trust audit, deployed an advanced managed security service (EDR/MDR), and completed multi-gigabit campus fiber trunks.',
    techStack: ['Sophos Managed Firewalls', 'VLAN Segmentation', 'POPIA Audit Framework', 'Fibre Backbones'],
    outcomes: [
      'Secured 100% flawless score on independent POPIA review',
      'Upgraded internet bandwidth by 10x with zero price increase',
      'Created automated failsafe patient backup databases'
    ],
    roiMetric: '100%',
    roiLabel: 'Security Score',
    imageName: 'medical_networks'
  },
  {
    id: 'sable-holdings',
    clientName: 'Sable Financial Holdings',
    industry: 'Corporate Wealth Advisory',
    challenge: 'Extremely slow response times from their previous outsourced IT helper, leading to frustration and manual workarounds.',
    solution: 'Onboarded 120 staff onto our 24/7 Managed IT Operations tier, deploying proactive health sensors and centralized support rails.',
    techStack: ['MDR Security', 'Automated Patch Engine', 'vCIO Strategy', '24/7 Remote Helpdesk'],
    outcomes: [
      'Reduced average support ticket resolution time down to 8.4 minutes',
      'Upgraded desktop performance indices across the fleet by 35%',
      'Reduced annual overall technology capital costs by over R180,000'
    ],
    roiMetric: '12m',
    roiLabel: 'Avg Support SLA',
    imageName: 'financial_office'
  }
];

export const PARTNERS: Partner[] = [
  { name: 'Cisco Partner', logoType: 'cisco', tier: 'Premier Integrator' },
  { name: 'Microsoft Partner', logoType: 'microsoft', tier: 'Gold Cloud Solutions' },
  { name: 'Dell Technologies', logoType: 'dell', tier: 'Authorized Solutions Provider' },
  { name: 'Fortinet Security', logoType: 'fortinet', tier: 'Certified Security Specialist' },
  { name: 'Symmetrical Fiber', logoType: 'fiber', tier: 'Vuma & DFA Enterprise Partner' }
];

export const INSIGHTS: InsightPost[] = [
  {
    id: 'popia-ict-2026',
    title: 'POPIA Compliance Checklist for Corporate Networks in South Africa',
    excerpt: 'Are your storage structures and active cloud pipelines completely aligned with the newest regulatory standards?',
    content: 'The Protection of Personal Information Act (POPIA) mandates clear standards on processing, securing, and backing up sensitive client records. This guide covers how to encrypt local servers, configure automated offsite local-storage paths, prevent data leakage, and establish internal staff authentication profiles to ensure your business remains audit-proof.',
    category: 'Security',
    date: 'June 03, 2026',
    readTime: '6 min read',
    author: 'Renier Jordan, Director of Cybersecurity'
  },
  {
    id: 'redundant-power',
    title: 'Ensuring 100% IT Infrastructure Resilience Against Power Interruptions',
    excerpt: 'How redundant UPS configurations, lithium batteries, and smart cloud failover protect high-traffic company servers.',
    content: 'Sudden high-level load shedding or sub-station outages can cook server hardware, corrupt key databases, and throw your team into offline manual chaos. Learn about the strategic benefits of moving legacy server boxes to a certified high-availability local datacenter, paired with modern smart managed routers equipped with multi-network Cellular LTE failover systems.',
    category: 'Infrastructure',
    date: 'May 24, 2026',
    readTime: '8 min read',
    author: 'Willem Marais, Chief Architect'
  },
  {
    id: 'hybrid-workplace',
    title: 'The Modern Hybrid Office: How to Secure Mobile Employees Securely',
    excerpt: 'Why traditional password-only firewalls fail and how zero-trust application tunnels are taking their place.',
    content: 'As employees log in from coffee shops, home fiber loops and mobile devices, corporate data is exposed to risk. Traditional legacy VPN tunnels suffer from slow traversal speeds and absolute trust inside the perimeter. We layout our top 5 strategies to implement zero-trust access control protocols combined with device posture scanning, ensuring only secure corporate-grade hardware can read your private corporate apps.',
    category: 'IT Strategy',
    date: 'April 15, 2026',
    readTime: '5 min read',
    author: 'Sarah Sibanda, Enterprise Operations Advisor'
  }
];
