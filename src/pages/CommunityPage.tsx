import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

const LINKS = [
  { label: 'Telegram Community', desc: 'Main community group — market ideas & discussion', href: 'https://t.me/pipblcksfxhuz',   cta: 'Join' },
  { label: 'Telegram Direct',    desc: 'Direct enquiries to the PiP Blocks team',          href: 'https://t.me/pipblockfx',    cta: 'Message' },
  { label: 'WhatsApp',           desc: 'Chat directly with the team',                        href: 'https://wa.me/233538132060', cta: 'Chat' },
  { label: 'YouTube',            desc: 'Watch PiP Blocks educational content',               href: 'https://youtube.com/channel/UCLNMge-FeeicPfXTyyeKBXQ?sub_confirmation=1', cta: 'Watch' },
  { label: 'TikTok',             desc: 'Short-form content and updates',                     href: 'https://www.tiktok.com/@pipblockfx_?_r=1&_t=ZS-99WUfePMQR3', cta: 'Follow' },
];

export default function CommunityPage() {
  const r1 = useScrollReveal();
  const r2 = useScrollReveal();
  const r3 = useScrollReveal();
  const r4 = useScrollReveal();

  return (
    <main>
      {/* HERO — full-bleed photo */}
      <section
        style={{
          position: 'relative',
          minHeight: '75vh',
          display: 'flex',
          alignItems: 'flex-end',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0 }}>
          <img
            src="/community-audience.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            style={{ objectPosition: '50% 35%' }}
            fetchPriority="high"
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(20,25,15,0.92) 0%, rgba(20,25,15,0.50) 55%, rgba(20,25,15,0.20) 100%)',
          }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: '72px', paddingTop: '120px' }}>
          <div ref={r1} className="reveal" style={{ maxWidth: '600px' }}>
            <p className="eyebrow eyebrow--white" style={{ marginBottom: '16px' }}>The Community</p>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
                color: 'var(--white)',
                lineHeight: 1.04,
                letterSpacing: '-0.03em',
                marginBottom: '20px',
              }}
            >
              Trade together.<br />Grow together.
            </h1>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, maxWidth: '480px', marginBottom: '28px' }}>
              An open community of traders sharing market insights, educational discussions and ideas for understanding the Forex market.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="https://t.me/pipblcksfxhuz" target="_blank" rel="noopener noreferrer" className="btn btn-orange">
                Join on Telegram ↗
              </a>
              <a href="https://wa.me/233538132060" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white">
                Chat on WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THE COMMUNITY OFFERS */}
      <section style={{ background: 'var(--cream)', padding: '80px 0 88px' }}>
        <div className="container">
          <div ref={r2} className="reveal">
            <p className="eyebrow" style={{ marginBottom: '12px' }}>What The Community Offers</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '36px',
              }}
            >
              More than a group chat.
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '14px', marginBottom: '40px' }} className="md:grid-cols-3">
              {[
                {
                  n: '01',
                  title: 'Market Insights',
                  desc: 'Regular market analysis discussions, weekly outlooks and shared trading ideas from active community members.',
                },
                {
                  n: '02',
                  title: 'Learning Together',
                  desc: 'Discuss concepts, share observations and develop your understanding alongside other traders in a focused environment.',
                },
                {
                  n: '03',
                  title: 'Educational Content',
                  desc: 'Access educational updates, analysis discussions and content shared directly by the PiP Blocks team.',
                },
              ].map(({ n, title, desc }) => (
                <div key={n} className="card" style={{ padding: '28px', background: 'var(--cream-02)' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--orange)', display: 'block', marginBottom: '14px' }}>
                    {n}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700, fontSize: '19px',
                      color: 'var(--charcoal)', marginBottom: '10px',
                    }}
                  >
                    {title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.65 }}>{desc}</p>
                </div>
              ))}
            </div>

            {/* Photo grid — mixing old + new */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '8px' }} className="md:grid-cols-4">
              {[
                { src: '/9B9A8756.jpg',     pos: '50% 20%', h: '220px' },
                { src: '/event-panel-3.jpg', pos: '50% 25%', h: '220px' },
                { src: '/wide-seminar.jpg',  pos: '50% 40%', h: '220px' },
                { src: '/9B9A8723.jpg',      pos: '50% 25%', h: '220px' },
              ].map(({ src, pos, h }) => (
                <div
                  key={src}
                  style={{ height: h, borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--charcoal)' }}
                >
                  <img
                    src={src} alt="PiP Blocks community event" loading="lazy"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: pos, transition: 'transform 0.5s ease' }}
                    onMouseEnter={e => ((e.target as HTMLImageElement).style.transform = 'scale(1.04)')}
                    onMouseLeave={e => ((e.target as HTMLImageElement).style.transform = 'scale(1)')}
                  />
                </div>
              ))}
            </div>
            <p style={{ fontSize: '12px', color: 'var(--muted-light)' }}>PiP Blocks hosts live educational events and maintains an active online community.</p>
          </div>
        </div>
      </section>

      {/* JOIN SECTION */}
      <section style={{ background: 'var(--charcoal)', padding: '80px 0 88px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div ref={r3} className="reveal">
            <p className="eyebrow eyebrow--white" style={{ marginBottom: '16px', justifyContent: 'center' }}>Join Today</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                fontSize: 'clamp(1.8rem, 5vw, 3.2rem)',
                color: 'var(--white)',
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                marginBottom: '20px',
              }}
            >
              Join the PiP Blocks community.
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: '440px', margin: '0 auto 32px' }}>
              The PiP Blocks Telegram community is free and open to anyone interested in Forex education and market discussion.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', maxWidth: '320px', margin: '0 auto 20px' }}>
              <a
                href="https://t.me/pipblcksfxhuz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-orange btn-lg"
                style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
              >
                Join on Telegram ↗
              </a>
              <a
                href="https://wa.me/233538132060"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-white btn-lg"
                style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
              >
                Chat on WhatsApp →
              </a>
            </div>

            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.03em' }}>
              Educational ideas, not financial advice.
            </p>
          </div>
        </div>
      </section>

      {/* CONNECT LINKS */}
      <section style={{ background: 'var(--cream-dark)', padding: '72px 0 80px', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div ref={r4} className="reveal">
            <p className="eyebrow" style={{ marginBottom: '24px' }}>Find Us On</p>

            <div style={{ maxWidth: '640px' }}>
              {LINKS.map(({ label, desc, href, cta }, i) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    padding: '18px 0',
                    borderBottom: i < LINKS.length - 1 ? '1px solid var(--border)' : 'none',
                  }}
                >
                  <div>
                    <p style={{ fontSize: '15.5px', fontWeight: 700, color: 'var(--charcoal)', marginBottom: '3px' }}>{label}</p>
                    <p style={{ fontSize: '12.5px', color: 'var(--muted)' }}>{desc}</p>
                  </div>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                    style={{ flexShrink: 0 }}
                  >
                    {cta} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
