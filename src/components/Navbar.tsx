import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { TELEGRAM_COMMUNITY_URL } from '../data/siteData';

const NAV = [
  { label: 'Home',       to: '/' },
  { label: 'About',      to: '/about' },
  { label: 'Mentorship', to: '/mentorship' },
  { label: 'Programs',   to: '/programs' },
  { label: 'Community',  to: '/community' },
];

export const Navbar: React.FC = () => {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-[11px] font-semibold tracking-[0.12em] uppercase transition-colors ${
      isActive ? 'text-[#E53514]' : 'text-[#555] hover:text-[#171717]'
    }`;

  return (
    <>
      {/* Bar */}
      <header
        className={`fixed top-0 inset-x-0 z-50 bg-white border-b border-[#E5E5E3] transition-shadow duration-200 ${
          scrolled ? 'shadow-sm' : ''
        }`}
      >
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" onClick={() => setOpen(false)} className="shrink-0">
            <img
              src="/logo_pip.jpg"
              alt="PiP Block Forex Trading Academy"
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main">
            {NAV.map(l => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            {/*
             * IMPORTANT: Wrapping in a div (not directly on the <a>) so that
             * Tailwind's `hidden` is not fighting btn-dark's display:inline-flex.
             * Both live in @layer utilities; btn-dark appears later and wins.
             * The wrapper div has no conflicting display class, so hidden works.
             */}
            <div className="hidden lg:block">
              <a
                href={TELEGRAM_COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark text-[11px] py-2.5 px-5"
              >
                Join Community
              </a>
            </div>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen(v => !v)}
              className="lg:hidden flex flex-col justify-center gap-[5px] w-9 h-9 shrink-0"
            >
              <span className={`block w-5 h-[1.5px] bg-[#171717] transition-all duration-200 ${open ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
              <span className={`block w-5 h-[1.5px] bg-[#171717] transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-[1.5px] bg-[#171717] transition-all duration-200 ${open ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        role="dialog"
        aria-modal="true"
        className={`fixed inset-0 z-40 bg-white flex flex-col pt-16 lg:hidden transition-opacity duration-200 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex-1 overflow-y-auto px-5 pt-2 pb-10">
          {NAV.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center justify-between py-5 border-b border-[#E5E5E3] text-[17px] font-semibold ${
                  isActive ? 'text-[#E53514]' : 'text-[#171717]'
                }`
              }
            >
              {l.label}
              <span className="text-[#ccc] text-sm">→</span>
            </NavLink>
          ))}
          <div className="mt-8">
            <a
              href={TELEGRAM_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-dark w-full py-4 text-[13px]"
            >
              Join Community →
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};
