import React from 'react';
import { TELEGRAM_URL, INSTAGRAM_URL, FACEBOOK_URL } from '../data/siteData';

const NAV_LINKS = [
  { name: 'About',      href: '#about'      },
  { name: 'Services',   href: '#services'   },
  { name: 'Mentorship', href: '#mentorship' },
  { name: 'Bootcamp',   href: '#bootcamp'   },
  { name: 'Community',  href: '#community'  },
  { name: 'FAQ',        href: '#faq'        },
];

const SOCIAL_LINKS = [
  { name: 'Telegram',  href: TELEGRAM_URL,  active: true  },
  { name: 'Instagram', href: INSTAGRAM_URL, active: true  },
  { name: 'Facebook',  href: FACEBOOK_URL,  active: true  },
  { name: 'TikTok',    href: null,          active: false },
];

export const Footer: React.FC = () => {
  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-pip-border">
      <div className="max-w-site mx-auto px-5 sm:px-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 py-12 border-b border-pip-border">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <img src="/logo_mark.png" alt="" aria-hidden="true" className="w-7 h-7 object-contain" />
              <div className="leading-none">
                <div className="text-[13.5px] font-bold text-pip-charcoal tracking-tight">PiP Blocks</div>
                <div className="pip-label mt-[3px]" style={{ fontSize: '9px' }}>Forex Trading Academy</div>
              </div>
            </div>
            <p className="text-[12px] text-pip-muted leading-[1.65] mt-4 max-w-[210px]">
              Forex community · Mentorship · Market Analysis · Trading Ideas
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="pip-label mb-4">Navigate</div>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(l => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    onClick={e => go(e, l.href)}
                    className="text-[13px] text-pip-mid hover:text-pip-red transition-colors duration-150"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <div className="pip-label mb-4">Connect</div>
            <ul className="space-y-2.5">
              {SOCIAL_LINKS.map(l => (
                <li key={l.name}>
                  {l.active && l.href ? (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] text-pip-mid hover:text-pip-red transition-colors duration-150"
                    >
                      {l.name}
                    </a>
                  ) : (
                    <span className="text-[13px] text-pip-muted/40">{l.name} — Coming Soon</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[11px] text-pip-muted leading-[1.65] max-w-xl">
            PiP Blocks Forex Trading Academy provides educational content and
            market-related information. Nothing on this website constitutes
            personalised financial advice. Trading financial markets involves risk.
          </p>
          <p className="text-[11px] text-pip-muted shrink-0">
            © 2026 PiP Blocks Forex Trading Academy
          </p>
        </div>

      </div>
    </footer>
  );
};
