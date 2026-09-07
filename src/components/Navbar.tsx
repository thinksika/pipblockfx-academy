import React, { useState, useEffect } from 'react';
import { TELEGRAM_URL } from '../data/siteData';

const NAV = [
  { name: 'About',      href: '#about'      },
  { name: 'Services',   href: '#services'   },
  { name: 'Mentorship', href: '#mentorship' },
  { name: 'Bootcamp',   href: '#bootcamp'   },
  { name: 'Community',  href: '#community'  },
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

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
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
        <div className="max-w-site mx-auto px-5 sm:px-8 flex items-center justify-between gap-6">

          {/* Brand */}
          <a href="#hero" onClick={e => go(e, '#hero')}
            className="flex items-center gap-2.5 shrink-0"
            aria-label="PiP Blocks home">
            <img src="/logo_mark.png" alt="" aria-hidden="true"
              className="w-8 h-8 object-contain" />
            <div className="leading-none">
              <div className="text-[14px] font-bold tracking-tight text-pip-charcoal leading-none">
                PiP Blocks
              </div>
              <div className="pip-label mt-[3px] leading-none">
                Forex Trading Academy
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden lg:flex items-center gap-7">
            {NAV.map(l => (
              <a key={l.name} href={l.href} onClick={e => go(e, l.href)}
                className="text-[13px] font-medium text-pip-mid hover:text-pip-charcoal transition-colors duration-150">
                {l.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer"
            className="btn-primary hidden lg:inline-flex text-[11px]">
            Join Community
          </a>

          {/* Mobile toggle */}
          <button type="button" aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(v => !v)}
            className="lg:hidden w-7 h-5 flex flex-col justify-between shrink-0">
            <span className={`block w-full h-[1.5px] bg-pip-charcoal origin-center transition-transform duration-200 ${mobileOpen ? 'translate-y-[9px] rotate-45' : ''}`} />
            <span className={`block h-[1.5px] bg-pip-charcoal transition-all duration-200 ${mobileOpen ? 'opacity-0 w-0' : 'w-full'}`} />
            <span className={`block w-full h-[1.5px] bg-pip-charcoal origin-center transition-transform duration-200 ${mobileOpen ? '-translate-y-[9px] -rotate-45' : ''}`} />
          </button>

        </div>
      </header>

      {/* Mobile menu */}
      <div aria-hidden={!mobileOpen}
        className={`fixed inset-0 z-40 bg-white flex flex-col transition-opacity duration-200 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
        <div className="pt-[68px] flex flex-col h-full overflow-y-auto px-5">
          <nav className="flex flex-col divide-y divide-pip-border">
            {NAV.map(l => (
              <a key={l.name} href={l.href} onClick={e => go(e, l.href)}
                className="py-5 text-[21px] font-semibold tracking-tight text-pip-charcoal hover:text-pip-red transition-colors">
                {l.name}
              </a>
            ))}
          </nav>
          <div className="mt-7">
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full justify-center text-[12px]">
              Join Community
            </a>
          </div>
          <p className="mt-auto pb-6 pt-8 text-[11px] text-pip-muted">
            © 2026 PiP Blocks Forex Trading Academy
          </p>
        </div>
      </div>
    </>
  );
};
