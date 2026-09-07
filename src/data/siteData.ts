import { ServiceItem, FAQItem, StatItem, SocialItem } from '../types';

export const TELEGRAM_URL = "https://t.me/pipblockfx";
export const WHATSAPP_URL = "https://wa.me/233538132060";
export const INSTAGRAM_URL = "https://www.instagram.com/pipblock_fx";
export const FACEBOOK_URL = "https://www.facebook.com/pipblock_fx";

export const SITE_STATS: StatItem[] = [
  {
    value: "1.4K+",
    label: "Community Subscribers"
  },
  {
    value: "ACTIVE",
    label: "Telegram Community"
  },
  {
    value: "FOREX",
    label: "Trading Focus"
  },
  {
    value: "OPEN",
    label: "Community Access"
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "mentorship",
    title: "MENTORSHIP",
    badge: "GUIDED LEARNING",
    description: "Practical forex mentorship designed to help traders develop their understanding of market structure, liquidity, entries and risk management.",
    ctaText: "ENQUIRE ABOUT MENTORSHIP",
    ctaLink: TELEGRAM_URL,
    isExternal: true
  },
  {
    id: "market-analysis",
    title: "MARKET ANALYSIS",
    badge: "DAILY INSIGHTS",
    description: "Follow market analysis and trading ideas shared through the PiP Blocks community.",
    ctaText: "JOIN THE COMMUNITY",
    ctaLink: TELEGRAM_URL,
    isExternal: true
  },
  {
    id: "trading-signals",
    title: "TRADING SIGNALS",
    badge: "COMMUNITY IDEAS",
    description: "Stay connected to shared market ideas and signals from the PiP Blocks trading community.",
    ctaText: "ENQUIRE NOW",
    ctaLink: TELEGRAM_URL,
    isExternal: true
  },
  {
    id: "bootcamps",
    title: "BOOTCAMPS",
    badge: "INTENSIVE PROGRAM",
    description: "Join focused training programs designed around practical market concepts and guided learning.",
    ctaText: "VIEW BOOTCAMP",
    ctaLink: "#bootcamp",
    isExternal: false,
    targetId: "bootcamp"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is PiP Blocks Forex Trading Academy?",
    answer: "PiP Blocks Forex Trading Academy is a growing forex trading community focused on market analysis, mentorship, shared trading ideas and practical trader development."
  },
  {
    id: "faq-2",
    question: "Do you offer forex mentorship?",
    answer: "Yes. Our mentorship approach focuses on practical market understanding, advanced market structure, liquidity concepts, personal entries, risk management and backtesting."
  },
  {
    id: "faq-3",
    question: "Do you provide market analysis and signals?",
    answer: "We regularly share market observations, technical analysis, trade setups and market ideas with our community members through our official communication channels."
  },
  {
    id: "faq-4",
    question: "How can I join the Telegram community?",
    answer: "You can join our Telegram community directly by clicking any 'Join Community' button on this website or by visiting https://t.me/pipblockfx."
  },
  {
    id: "faq-5",
    question: "How do I register for a bootcamp?",
    answer: "Bootcamp registrations are handled directly by the PiP Blocks team. You can reach out via WhatsApp at +233 53 813 2060 or through our Telegram channel."
  },
  {
    id: "faq-6",
    question: "Do you provide financial advice?",
    answer: "PiP Blocks provides educational content, market analysis and trading ideas. Our content is not intended to constitute personalised financial advice."
  }
];

export const SOCIAL_DATA: SocialItem[] = [
  {
    platform: "TELEGRAM",
    handle: "@pipblockfx",
    link: TELEGRAM_URL,
    iconName: "Send"
  },
  {
    platform: "INSTAGRAM",
    handle: "pipblock_fx",
    link: INSTAGRAM_URL,
    iconName: "Instagram"
  },
  {
    platform: "FACEBOOK",
    handle: "pipblock_fx",
    link: FACEBOOK_URL,
    iconName: "Facebook"
  },
  {
    platform: "TIKTOK",
    handle: "Coming Soon",
    link: "#",
    iconName: "Video",
    isComingSoon: true
  }
];

export const BOOTCAMP_DETAILS = {
  title: "PIPBLOCKFX 2.0 BOOTCAMP",
  badge: "UPCOMING BOOTCAMP",
  dates: "September 21 – 24",
  capacity: "Strictly Limited to 10",
  fee: "$60",
  curriculum: [
    "Advance Market Structure",
    "Advance Liquidity Concept",
    "Personal Entries",
    "Questions, Guidance & Backtesting",
    "Risk Management",
    "Shared Analysis and Signals — 2 MONTHS"
  ],
  whatsappLink: WHATSAPP_URL,
  telegramLink: TELEGRAM_URL
};
