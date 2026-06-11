export interface Solution {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  benefits: string[];
  features: string[];
  category: 'managed' | 'cyber' | 'infra' | 'cloud' | 'support';
}

export interface Industry {
  id: string;
  name: string;
  iconName: string;
  challenge: string;
  solution: string;
  outcome: string;
  metric: string;
}

export interface CaseStudy {
  id: string;
  clientName: string;
  industry: string;
  challenge: string;
  solution: string;
  techStack: string[];
  outcomes: string[];
  roiMetric: string;
  roiLabel: string;
  imageName: string;
}

export interface Partner {
  name: string;
  logoType: string;
  tier: string;
}

export interface InsightPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Security' | 'Cloud' | 'Infrastructure' | 'Productivity' | 'IT Strategy';
  date: string;
  readTime: string;
  author: string;
}
