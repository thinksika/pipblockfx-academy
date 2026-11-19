import React, { useState, useEffect, useCallback } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const NAV = [
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

  const toggle = useCallback(() => setMenuOpen(o => !o), []);
  const close  = useCallback(() => setMenuOpen(false), []);

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: 'var(--cream)',
        borderBottom: '1px solid var(--border)',
        fontFamily: "'DM Sans', system-ui, sans-serif",
        transition: 'box-shadow 0.25s ease',
        boxShadow: scrolled ? '0 4px 20px rgba(20,25,15,0.08)' : 'none',
      }}
    >
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px', gap: '16px' }}>

          {/* ── BRAND ── */}
          <Link
            to="/"
            aria-label="PiP Blocks home"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', flexShrink: 0 }}
          >
            {/* Logo mark */}
            <div style={{
              width: '38px', height: '38px', borderRadius: '9px',
              overflow: 'hidden', flexShrink: 0,
              border: '1.5px solid var(--border)',
              background: 'var(--cream-02)',
            }}>
              <img
                src="/pip-mark.png"
                alt=""
                width="38" height="38"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            {/* Wordmark */}
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 800,
                fontSize: '16px',
                letterSpacing: '-0.01em',
                color: 'var(--charcoal)',
              }}>
                PiP BLOCKS
              </span>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: '10px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                marginTop: '1px',
              }}>
                Forex Trading Academy
              </span>
            </div>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <nav
            style={{ display: 'flex', alignItems: 'center', gap: '24px' }}
            className="hidden md:flex"
            aria-label="Main navigation"
          >
            {NAV.map(({ label, to }) =>
              to.startsWith('/#') ? (
                <a
                  key={label}
                  href={to}
                  style={{
                    fontSize: '14px', fontWeight: 600,
                    color: 'var(--muted)', textDecoration: 'none',
                    transition: 'color 0.18s',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--charcoal)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--muted)')}
                >
                  {label}
                </a>
              ) : (
                <NavLink
                  key={label}
                  to={to}
                  style={({ isActive }) => ({
                    fontSize: '14px', fontWeight: 600,
                    color: isActive ? 'var(--charcoal)' : 'var(--muted)',
                    textDecoration: 'none',
                    transition: 'color 0.18s',
                    borderBottom: isActive ? '2px solid var(--orange)' : '2px solid transparent',
                    paddingBottom: '2px',
                  })}
                >
                  {label}
                </NavLink>
              )
            )}
          </nav>

          {/* ── DESKTOP CTA ── */}
          <a
            href="https://t.me/pipblcksfxhuz"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-orange btn-sm hidden md:inline-flex"
          >
            Join Community ↗
          </a>

          {/* ── HAMBURGER ── */}
          <button
            type="button"
            onClick={toggle}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="flex md:hidden"
            style={{
              width: '42px', height: '42px', padding: 0,
              border: `1.5px solid ${menuOpen ? 'var(--charcoal)' : 'var(--border)'}`,
              borderRadius: '10px',
              background: 'var(--cream-02)',
              color: 'var(--charcoal)',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'border-color 0.2s',
            }}
          >
            {menuOpen ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <line x1="2" y1="2" x2="14" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="14" y1="2" x2="2" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
                <rect y="0"  width="18" height="2" rx="1" fill="currentColor" />
                <rect y="5"  width="12" height="2" rx="1" fill="currentColor" />
                <rect y="10" width="18" height="2" rx="1" fill="currentColor" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── MOBILE SHEET ── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`mobile-sheet ${menuOpen ? 'open' : ''}`}
      >
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          <li>
            <Link to="/" className="mobile-sheet-link" onClick={close}>Home</Link>
          </li>
          {NAV.map(({ label, to }) => (
            <li key={label}>
              {to.startsWith('/#') ? (
                <a href={to} className="mobile-sheet-link" onClick={close}>{label}</a>
              ) : (
                <Link to={to} className="mobile-sheet-link" onClick={close}>{label}</Link>
              )}
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
          <a
            href="https://t.me/pipblcksfxhuz"
            target="_blank" rel="noopener noreferrer"
            className="btn btn-orange"
            style={{ display: 'flex', justifyContent: 'center' }}
            onClick={close}
          >
            Join Community ↗
          </a>
          <a
            href="https://wa.me/233538132060"
            target="_blank" rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ display: 'flex', justifyContent: 'center' }}
            onClick={close}
          >
            WhatsApp →
          </a>
        </div>
      </div>
    </header>
  );
}
