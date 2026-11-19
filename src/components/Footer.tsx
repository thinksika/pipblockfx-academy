import React from 'react';
import { Link } from 'react-router-dom';

const EXPLORE = [
  { label: 'Home',       to: '/',           internal: true },
  { label: 'Mentorship', to: '/mentorship', internal: true },
  { label: 'Insights',   to: '/insights',   internal: true },
  { label: 'About',      to: '/about',      internal: true },
  { label: 'Community',  to: '/community',  internal: true },
  { label: 'FAQ',        to: '/#faq',       internal: false },
];

const MARKETS = ['Forex', 'Synthetics', 'Metals', 'Indices', 'Commodities', 'Crypto'];

const SOCIALS = [
  { label: 'Telegram Community', href: 'https://t.me/pipblcksfxhuz' },
  { label: 'WhatsApp',           href: 'https://wa.me/233538132060' },
  { label: 'YouTube',            href: 'https://youtube.com/channel/UCLNMge-FeeicPfXTyyeKBXQ?sub_confirmation=1' },
  { label: 'TikTok',             href: 'https://www.tiktok.com/@pipblockfx_?_r=1&_t=ZS-99WUfePMQR3' },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: 'var(--charcoal)', color: 'var(--white)', fontFamily: "'DM Sans', sans-serif" }}>
      <div className="container">
        {/* Top grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '40px',
            padding: '56px 0 48px',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
          className="sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand col */}
          <div>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '16px' }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '10px',
                border: '1px solid rgba(255,255,255,0.15)',
                overflow: 'hidden', flexShrink: 0,
              }}>
                <img src="/pip-mark.png" alt="PiP Blocks" width="44" height="44" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700, fontSize: '18px',
                color: 'var(--white)', lineHeight: 1,
              }}>
                PiP<em style={{ fontStyle: 'normal', color: 'var(--orange)' }}>Blocks</em>
              </span>
            </Link>
            <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, maxWidth: '220px', margin: '0 0 20px' }}>
              Forex education, structured mentorship and a community focused on market understanding and trading process.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {SOCIALS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: '34px', height: '34px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '11px', fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'background 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = 'var(--orange)'; el.style.color = '#fff'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = 'rgba(255,255,255,0.08)'; el.style.color = 'rgba(255,255,255,0.5)'; }}
                >
                  {label[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '16px' }}>
              Explore
            </p>
            <nav aria-label="Footer explore">
              {EXPLORE.map(({ label, to, internal }) =>
                internal ? (
                  <Link key={label} to={to} className="footer-link">{label}</Link>
                ) : (
                  <a key={label} href={to} className="footer-link">{label}</a>
                )
              )}
            </nav>
          </div>

          {/* Markets */}
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '16px' }}>
              Markets
            </p>
            <nav aria-label="Markets">
              {MARKETS.map(m => (
                <span key={m} className="footer-link" style={{ display: 'block', cursor: 'default' }}>{m}</span>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '16px' }}>
              Connect
            </p>
            <nav aria-label="Footer connect">
              {SOCIALS.map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="footer-link">{label}</a>
              ))}
            </nav>

            {/* Broker affiliate */}
            <div style={{ marginTop: '20px', padding: '12px 14px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '6px' }}>
                Affiliate Partner
              </p>
              <a
                href="https://iux.com/en/register?code=S9ncfCvV:affiliate"
                target="_blank"
                rel="noopener noreferrer sponsored"
                style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.65)', textDecoration: 'none', display: 'block' }}
                onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = 'var(--white)')}
                onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.65)')}
              >
                Open an IUX Account →
              </a>
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', marginTop: '4px', lineHeight: 1.4 }}>
                Affiliate link. Trading involves risk.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex', flexDirection: 'column', gap: '8px',
          padding: '20px 0',
          fontSize: '12px', color: 'rgba(255,255,255,0.3)',
        }} className="sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} PiP Blocks Forex Trading Academy. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <span>Risk Disclaimer: Trading involves significant risk of loss.</span>
            <a href="#" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }} onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = '#fff')} onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.3)')}>Privacy Policy</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }} onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = '#fff')} onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.3)')}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
