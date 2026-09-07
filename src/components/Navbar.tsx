import React, { useState, useEffect } from 'react';
import { TELEGRAM_COMMUNITY_URL } from '../data/siteData';

const NAV = [
  { name: 'About',      href: '#about'      },
  { name: 'Services',   href: '#services'   },
  { name: 'Mentorship', href: '#mentorship' },
  { name: 'Bootcamp',   href: '#bootcamp'   },
  { name: 'Community',  href: '#community'  },
  { name: 'Connect',    href: '#connect'    },
  { name: 'FAQ',        href: '#faq'        },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 28);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const go = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    // Small delay to allow menu close animation
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 bg-white transition-all duration-200 ${
          scrolled
            ? 'border-b border-pip-border shadow-[0_1px_6px_rgba(0,0,0,0.07)] py-3'
            : 'border-b border-pip-border py-[14px]'
        }`}
      >
        <div className="max-w-site mx-auto px-5 sm:px-8 flex items-center justify-between gap-4">

          {/* Brand */}
          <a href="#hero" onClick={(e) => go(e, '#hero')}
            className="flex items-center gap-2 shrink-0"
            aria-label="PiP Blocks home">
            <img src="/logo_mark.png" alt="" aria-hidden="true"
              className="w-8 h-8 object-contain" />
            <div className="leading-none">
              <div className="text-[14px] font-bold tracking-tight text-pip-charcoal leading-none">
                PiP Blocks
              </div>
              <div className="pip-label mt-[3px] leading-none hidden sm:block">
                Forex Trading Academy
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden lg:flex items-center gap-7">
            {NAV.map(l => (
              <a key={l.name} href={l.href} onClick={(e) => go(e, l.href)}
                className="text-[13px] font-medium text-pip-mid hover:text-pip-charcoal transition-colors duration-150">
                {l.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={TELEGRAM_COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center justify-center bg-pip-charcoal hover:bg-pip-red text-white text-[11px] font-semibold tracking-[0.1em] uppercase px-[18px] py-[9px] rounded-[8px] border border-pip-charcoal hover:border-pip-red transition-colors duration-180"
          >
            Join Community
          </a>

          {/* Mobile toggle */}
          <button type="button" aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(v => !v)}
            className="lg:hidden w-8 h-8 flex items-center justify-center shrink-0 -mr-1">
            {mobileOpen ? (
              /* X close icon */
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-pip-charcoal">
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </svg>
            ) : (
              /* Hamburger icon */
              <div className="w-6 h-4 flex flex-col justify-between">
                <span className="block w-full h-[1.5px] bg-pip-charcoal" />
                <span className="block w-full h-[1.5px] bg-pip-charcoal" />
                <span className="block w-full h-[1.5px] bg-pip-charcoal" />
              </div>
            )}
          </button>

        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-white flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {/* Spacer for fixed header */}
          <div className="pt-[62px]" />

          <div className="flex flex-col h-full overflow-y-auto px-5">
            <nav className="flex flex-col divide-y divide-pip-border" aria-label="Mobile navigation">
              {NAV.map(l => (
                <button
                  key={l.name}
                  type="button"
                  onClick={(e) => go(e, l.href)}
                  className="py-5 text-left text-[20px] font-semibold tracking-tight text-pip-charcoal hover:text-pip-red transition-colors"
                >
                  {l.name}
                </button>
              ))}
            </nav>
            <div className="mt-7">
              <a
                href={TELEGRAM_COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full justify-center text-[12px] rounded-[8px]"
              >
                Join Community
              </a>
            </div>
            <p className="mt-auto pb-6 pt-8 text-[11px] text-pip-muted">
              © 2026 PiP Blocks Forex Trading Academy
            </p>
          </div>
        </div>
      )}
    </>
  );
};
