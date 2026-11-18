import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SOCIAL_LINKS = [
  { label: 'Telegram Community', desc: 'Main community group',           href: 'https://t.me/pipblcksfxhuz' },
  { label: 'Telegram Direct',    desc: 'Direct team enquiries',          href: 'https://t.me/pipblockfx'    },
  { label: 'WhatsApp',           desc: 'Speak directly with the team',   href: 'https://wa.me/233538132060' },
  { label: 'YouTube',            desc: 'Watch PiP Blocks content',       href: 'https://youtube.com/channel/UCLNMge-FeeicPfXTyyeKBXQ?sub_confirmation=1' },
  { label: 'TikTok',             desc: 'Short-form content and updates',  href: 'https://www.tiktok.com/@pipblockfx_?_r=1&_t=ZS-99WUfePMQR3' },
];

export default function CommunityPage() {
  const heroRef    = useScrollReveal();
  const offersRef  = useScrollReveal();
  const joinRef    = useScrollReveal();
  const linksRef   = useScrollReveal();

  return (
    <main>
      {/* HERO — full-bleed photo */}
      <section
        style={{
          position: 'relative',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'flex-end',
          overflow: 'hidden',
        }}
      >
        {/* Background */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <img
            src="/event-panel.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            style={{ objectPosition: '50% 30%' }}
            fetchPriority="high"
          />
          <div
            style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(26,25,24,0.92) 0%, rgba(26,25,24,0.45) 60%, rgba(26,25,24,0.20) 100%)',
            }}
          />
        </div>

        {/* Content */}
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: '72px' }}>
          <div ref={heroRef} className="reveal" style={{ maxWidth: '600px' }}>
            <p className="section-label section-label--white mb-5">The Community</p>
            <h1
              className="font-display text-white mb-5"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', lineHeight: 1.04 }}
            >
              Trade together.<br />Grow together.
            </h1>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.65)', maxWidth: '480px', lineHeight: 1.65 }}>
              A public community of traders sharing market insights, educational discussions and ideas for understanding the Forex market.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section style={{ background: 'var(--cream)', padding: '72px 0 80px' }}>
        <div className="container">
          <div ref={offersRef} className="reveal">
            <p className="section-label mb-4">What The Community Offers</p>
            <h2 className="font-display mb-10" style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)' }}>
              More than a group chat.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  n: '01',
                  title: 'Market Insights',
                  desc: 'Regular market analysis discussions, weekly outlooks and shared trading ideas from active community members.',
                },
                {
                  n: '02',
                  title: 'Learning Together',
                  desc: 'Discuss concepts, share observations and develop your understanding alongside other traders in a focused group environment.',
                },
                {
                  n: '03',
                  title: 'Educational Content',
                  desc: 'Access educational updates, analysis discussions and content shared by the PiP Blocks team.',
                },
              ].map(({ n, title, desc }) => (
                <div key={n} className="card">
                  <span
                    style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--orange)', display: 'block', marginBottom: '14px' }}
                  >
                    {n}
                  </span>
                  <h3 className="font-display mb-2" style={{ fontSize: '19px', letterSpacing: '-0.02em' }}>
                    {title}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.65 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* JOIN SECTION */}
      <section style={{ background: 'var(--charcoal)', padding: '80px 0' }}>
        <div className="container text-center">
          <div ref={joinRef} className="reveal">
            <p className="section-label section-label--white mb-5" style={{ justifyContent: 'center' }}>
              Join Today
            </p>
            <h2
              className="font-display text-white"
              style={{ fontSize: 'clamp(1.8rem, 5vw, 3.2rem)', marginBottom: '20px' }}
            >
              Join the PiP Blocks community.
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: '440px', margin: '0 auto' }}>
              The PiP Blocks Telegram community is free and open to anyone interested in Forex education and market discussion.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <a
                href="https://t.me/pipblcksfxhuz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: '14px 28px', fontSize: '15px' }}
              >
                Join on Telegram ↗
              </a>
              <a
                href="https://wa.me/233538132060"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-white"
                style={{ padding: '14px 28px', fontSize: '15px' }}
              >
                Chat on WhatsApp →
              </a>
            </div>

            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '20px', letterSpacing: '0.03em' }}>
              Ideas for education, not financial advice.
            </p>
          </div>
        </div>
      </section>

      {/* CONNECT LINKS */}
      <section style={{ background: 'var(--cream-dark)', padding: '64px 0 72px', borderTop: '1px solid var(--cream-border)' }}>
        <div className="container">
          <div ref={linksRef} className="reveal">
            <p className="section-label mb-6">Find Us On</p>

            <div style={{ maxWidth: '640px' }}>
              {SOCIAL_LINKS.map(({ label, desc, href }, i) => (
                <div
                  key={label}
                  className="flex justify-between items-center py-4"
                  style={{ borderBottom: i < SOCIAL_LINKS.length - 1 ? '1px solid var(--cream-border)' : 'none' }}
                >
                  <div>
                    <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--charcoal)', marginBottom: '2px' }}>
                      {label}
                    </p>
                    <p style={{ fontSize: '12px', color: 'var(--muted)' }}>{desc}</p>
                  </div>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ padding: '8px 16px', fontSize: '12px', flexShrink: 0, marginLeft: '20px' }}
                  >
                    Open →
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
