import React, { useState, useEffect, useCallback } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Mentorship', to: '/mentorship' },
  { label: 'Insights',   to: '/insights'   },
  { label: 'About',      to: '/about'       },
  { label: 'Community',  to: '/community'   },
  { label: 'FAQ',        to: '/#faq'        },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') setMenuOpen(false);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'shadow-sm' : ''
        }`}
        style={{
          background: 'var(--cream)',
          borderBottom: scrolled ? '1px solid var(--cream-border)' : '1px solid transparent',
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 flex-shrink-0" aria-label="PiP Blocks home">
              <img
                src="/pip-blocks-logo.png"
                alt="PiP Blocks logo"
                className="h-8 w-auto"
                width="32"
                height="32"
              />
              <div className="leading-none">
                <div
                  className="font-display text-sm tracking-wide"
                  style={{ letterSpacing: '0.08em', fontSize: '13px', color: 'var(--charcoal)' }}
                >
                  PiP BLOCKS
                </div>
                <div
                  className="text-muted"
                  style={{ fontSize: '8px', letterSpacing: '0.12em', textTransform: 'uppercase' }}
                >
                  FOREX TRADING ACADEMY
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
              {NAV_LINKS.map(({ label, to }) =>
                to.startsWith('/#') ? (
                  <a
                    key={label}
                    href={to}
                    className="nav-link"
                    style={{ fontSize: '14px', fontWeight: 600 }}
                  >
                    {label}
                  </a>
                ) : (
                  <NavLink
                    key={label}
                    to={to}
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    style={{ fontSize: '14px', fontWeight: 600 }}
                  >
                    {label}
                  </NavLink>
                )
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <a
                href="https://t.me/pipblcksfxhuz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: '10px 20px', fontSize: '13px' }}
              >
                Join Community ↗
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="md:hidden flex items-center justify-center w-10 h-10 -mr-2"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
                <rect y="0"  width="22" height="2" rx="1" fill="currentColor" />
                <rect y="7"  width="16" height="2" rx="1" fill="currentColor" />
                <rect y="14" width="22" height="2" rx="1" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        onKeyDown={handleKeyDown}
      >
        {/* Mobile menu header */}
        <div
          className="flex items-center justify-between px-6 h-16 flex-shrink-0"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
        >
          <Link to="/" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
            <img src="/pip-mark.png" alt="PiP Blocks" className="h-8 w-auto" />
            <span
              className="font-display text-white"
              style={{ letterSpacing: '0.06em', fontSize: '13px' }}
            >
              PiP BLOCKS
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center w-10 h-10 text-white"
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <line x1="2" y1="2" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="18" y1="2" x2="2" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Menu links */}
        <nav className="flex flex-col px-6 pt-8 pb-4 flex-1" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ label, to }) =>
            to.startsWith('/#') ? (
              <a
                key={label}
                href={to}
                className="mobile-menu-link"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ) : (
              <Link
                key={label}
                to={to}
                className="mobile-menu-link"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            )
          )}

          {/* Mobile CTA */}
          <div className="mt-8 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <a
              href="https://t.me/pipblcksfxhuz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full justify-center"
              onClick={() => setMenuOpen(false)}
            >
              Join Community ↗
            </a>
            <a
              href="https://wa.me/233538132060"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-white w-full justify-center mt-3"
              onClick={() => setMenuOpen(false)}
            >
              WhatsApp →
            </a>
          </div>
        </nav>

        {/* Mobile footer note */}
        <p className="px-6 pb-8 text-xs" style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.04em' }}>
          Education first. Process over promises.
        </p>
      </div>
    </>
  );
}
