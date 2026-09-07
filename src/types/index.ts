export interface ServiceItem {
  id: string;
  title: string;
  badge?: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  isExternal: boolean;
  targetId?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface SocialItem {
  platform: string;
  handle: string;
  link: string;
  iconName: string;
  isComingSoon?: boolean;
}
