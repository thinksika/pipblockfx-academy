import React from 'react';
import { Link } from 'react-router-dom';
import {
  TELEGRAM_COMMUNITY_URL,
  TELEGRAM_DIRECT_URL,
  WHATSAPP_URL,
  YOUTUBE_URL,
  TIKTOK_URL,
  BROKER_URL,
} from '../data/siteData';

const NAV = [
  { label: 'Home',       to: '/' },
  { label: 'About',      to: '/about' },
  { label: 'Mentorship', to: '/mentorship' },
  { label: 'Programs',   to: '/programs' },
  { label: 'Community',  to: '/community' },
];

const SOCIALS = [
  { label: 'Telegram Community', href: TELEGRAM_COMMUNITY_URL },
  { label: 'WhatsApp',           href: WHATSAPP_URL },
  { label: 'YouTube',            href: YOUTUBE_URL },
  { label: 'TikTok',             href: TIKTOK_URL },
  { label: 'Direct Telegram',    href: TELEGRAM_DIRECT_URL },
  { label: 'Broker (Affiliate)',  href: BROKER_URL },
];

export const Footer: React.FC = () => (
  <footer className="bg-[#F7F7F5] border-t border-[#E5E5E3]">
    <div className="max-w-[1380px] mx-auto px-5 sm:px-8">

      {/* Main row */}
      <div className="py-10 grid grid-cols-1 sm:grid-cols-3 gap-10 border-b border-[#E5E5E3]">

        {/* Brand */}
        <div>
          <Link to="/" className="inline-block mb-3">
            <img src="/logo_pip.jpg" alt="PiP Block Forex" className="h-8 w-auto object-contain" />
          </Link>
          <p className="text-[14px] text-[#555] leading-relaxed max-w-[200px]">
            Forex Trading Academy.<br />Structure. Discipline.
          </p>
        </div>

        {/* Pages */}
        <div>
          <p className="pip-label mb-4">Pages</p>
          <ul className="space-y-2.5">
            {NAV.map(l => (
              <li key={l.to}>
                <Link to={l.to} className="text-[14px] text-[#555] hover:text-[#E53514] transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div>
          <p className="pip-label mb-4">Connect</p>
          <ul className="space-y-2.5">
            {SOCIALS.map(s => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-[#555] hover:text-[#E53514] transition-colors"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <p className="text-[12px] text-[#666] leading-relaxed max-w-lg">
          © {new Date().getFullYear()} PiP Block Forex Trading Academy · Educational content only ·
          Not personalised financial advice · Trading involves risk of loss · Ghana 🇬🇭
        </p>
        <span className="text-[11px] text-[#bbb] uppercase tracking-widest shrink-0">
          PIPBLOCKFX
        </span>
      </div>
    </div>
  </footer>
);
