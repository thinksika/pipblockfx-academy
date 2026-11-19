import React, { useState, useEffect, useCallback } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const NAV = [
  { label: 'Mentorship', to: '/mentorship' },
  { label: 'Insights',   to: '/insights'   },
  { label: 'About',      to: '/about'       },
  { label: 'Community',  to: '/community'   },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const location = useLocation();

  useEffect(() => { setMenuOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const close = useCallback(() => setMenuOpen(false), []);
  const toggle = useCallback(() => setMenuOpen(o => !o), []);

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: 'var(--cream-02)',
        borderBottom: '1px solid var(--border)',
        fontFamily: "'DM Sans', system-ui, sans-serif",
        transition: 'box-shadow 0.25s ease',
        boxShadow: scrolled ? '0 6px 24px rgba(20,25,15,0.07)' : 'none',
      }}
    >
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '66px', gap: '16px' }}>
          {/* Brand */}
          <Link
            to="/"
            aria-label="PiP Blocks home"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', flexShrink: 0 }}
          >
            <div style={{
              width: '40px', height: '40px', borderRadius: '10px',
              border: '1.5px solid var(--charcoal)',
              background: 'var(--orange-soft)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden', flexShrink: 0,
            }}>
              <img src="/pip-mark.png" alt="" width="40" height="40" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <span style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: '19px',
              lineHeight: 1,
              color: 'var(--charcoal)',
              letterSpacing: '-0.01em',
              whiteSpace: 'nowrap',
            }}>
              PiP<em style={{ fontStyle: 'normal', color: 'var(--orange)' }}>Blocks</em>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="hidden md:flex" aria-label="Main navigation">
            {NAV.map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}
                className={({ isActive }) => `sh-link ${isActive ? 'active' : ''}`}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://t.me/pipblcksfxhuz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              Join Community ↗
            </a>
          </div>

          {/* Mobile: hamburger */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={toggle}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: '44px', height: '44px', padding: 0,
                border: '1.5px solid var(--border)',
                borderRadius: '10px',
                background: 'var(--cream-02)',
                color: 'var(--charcoal)',
                cursor: 'pointer',
                transition: 'border-color 0.2s',
                borderColor: menuOpen ? 'var(--charcoal)' : 'var(--border)',
              }}
            >
              {menuOpen ? (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <line x1="2" y1="2" x2="16" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="16" y1="2" x2="2" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
                  <rect y="0"  width="20" height="2" rx="1" fill="currentColor" />
                  <rect y="6"  width="14" height="2" rx="1" fill="currentColor" />
                  <rect y="12" width="20" height="2" rx="1" fill="currentColor" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`mobile-sheet ${menuOpen ? 'open' : ''}`}
      >
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }} role="list">
          <li>
            <Link to="/" className="mobile-sheet-link" onClick={close}>Home</Link>
          </li>
          {NAV.map(({ label, to }) => (
            <li key={label}>
              <Link to={to} className="mobile-sheet-link" onClick={close}>{label}</Link>
            </li>
          ))}
          <li>
            <a href="/#faq" className="mobile-sheet-link" onClick={close}
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '16px', fontWeight: 600, color: 'var(--muted)' }}>
              FAQ
            </a>
          </li>
        </ul>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
          <a
            href="https://t.me/pipblcksfxhuz"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ display: 'flex', justifyContent: 'center' }}
            onClick={close}
          >
            Join Community ↗
          </a>
          <a
            href="https://wa.me/233538132060"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ display: 'flex', justifyContent: 'center' }}
            onClick={close}
          >
            WhatsApp →
          </a>
        </div>

        <p style={{ fontSize: '12px', color: 'var(--muted-light)', marginTop: '20px', lineHeight: 1.5 }}>
          Education first. Process over promises.
        </p>
      </div>
    </header>
  );
}
