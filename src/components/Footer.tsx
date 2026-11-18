import React from 'react';
import { Link } from 'react-router-dom';

const EXPLORE = [
  { label: 'Mentorship', to: '/mentorship' },
  { label: 'Insights',   to: '/insights'   },
  { label: 'About',      to: '/about'       },
  { label: 'Community',  to: '/community'   },
  { label: 'FAQ',        to: '/#faq'        },
];

const CONNECT = [
  { label: 'Telegram Community', href: 'https://t.me/pipblcksfxhuz' },
  { label: 'Direct Telegram',    href: 'https://t.me/pipblockfx'    },
  { label: 'WhatsApp',           href: 'https://wa.me/233538132060' },
  { label: 'YouTube',            href: 'https://youtube.com/channel/UCLNMge-FeeicPfXTyyeKBXQ?sub_confirmation=1' },
  { label: 'TikTok',             href: 'https://www.tiktok.com/@pipblockfx_?_r=1&_t=ZS-99WUfePMQR3' },
];

const SOCIAL_ICONS = [
  {
    label: 'YouTube',
    href: 'https://youtube.com/channel/UCLNMge-FeeicPfXTyyeKBXQ?sub_confirmation=1',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c2 .5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.75 15.5v-7l6.3 3.5-6.3 3.5z" />
      </svg>
    ),
  },
  {
    label: 'Telegram',
    href: 'https://t.me/pipblcksfxhuz',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.95 8.1-2 9.42c-.15.68-.54.84-1.08.52l-3-2.21-1.44 1.39c-.16.16-.3.3-.61.3l.21-3.07 5.56-5.03c.24-.22-.05-.34-.38-.12L6.4 14.3l-2.96-.93c-.64-.2-.65-.64.14-.95l11.57-4.46c.53-.2 1 .12.8.94z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@pipblockfx_?_r=1&_t=ZS-99WUfePMQR3',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.26 8.26 0 0 0 4.83 1.54V6.84a4.85 4.85 0 0 1-1.06-.15z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/233538132060',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.18.2-.35.22-.65.07a8.23 8.23 0 0 1-2.42-1.49 9.07 9.07 0 0 1-1.68-2.08c-.17-.3-.02-.47.13-.62.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51-.17 0-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.34zM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.73.98 1-3.65-.23-.38a9.86 9.86 0 0 1-1.51-5.27C2.18 6.6 6.63 2.18 12.05 2.18a9.78 9.78 0 0 1 6.96 2.88 9.74 9.74 0 0 1 2.88 6.95c0 5.42-4.44 9.79-9.84 9.79zm8.37-18.1A11.82 11.82 0 0 0 12.05.2C5.5.2.2 5.5.2 12.05c0 2.08.55 4.12 1.59 5.9L.1 23.78l5.97-1.57a11.86 11.86 0 0 0 5.98 1.6h.01c6.55 0 11.85-5.3 11.85-11.85A11.82 11.82 0 0 0 20.42 3.7z"/>
      </svg>
    ),
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--charcoal)', color: 'var(--white)' }}>
      <div className="container">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-14 md:py-16" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4" aria-label="PiP Blocks home">
              <img src="/pip-mark.png" alt="PiP Blocks mark" className="h-10 w-auto" />
              <div className="leading-none">
                <div className="font-display text-white" style={{ letterSpacing: '0.08em', fontSize: '13px' }}>
                  PiP BLOCKS
                </div>
                <div style={{ fontSize: '8px', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
                  FOREX TRADING ACADEMY
                </div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mt-4" style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '220px' }}>
              Forex education, structured mentorship and a community focused on market understanding and continuous learning.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              {SOCIAL_ICONS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 transition-colors duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.5)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'var(--orange)';
                    (e.currentTarget as HTMLElement).style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)';
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Explore
            </p>
            <nav aria-label="Footer explore links">
              {EXPLORE.map(({ label, to }) =>
                to.startsWith('/') && !to.startsWith('/#') ? (
                  <Link key={label} to={to} className="footer-link">
                    {label}
                  </Link>
                ) : (
                  <a key={label} href={to} className="footer-link">
                    {label}
                  </a>
                )
              )}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Connect
            </p>
            <nav aria-label="Footer connect links">
              {CONNECT.map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="footer-link">
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 py-6 text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
          <span>© {year} PiP Blocks. All rights reserved.</span>
          <span>Trading involves risk. Educational content is not financial advice.</span>
        </div>
      </div>
    </footer>
  );
}
