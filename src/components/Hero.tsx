import React from 'react';
import { TELEGRAM_COMMUNITY_URL } from '../data/siteData';

const scrollTo = (id: string) =>
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

/* ── Minimal brand-led right panel (no fake dashboards, no giant P) ── */
const HeroBrand: React.FC = () => (
  <div className="relative flex flex-col justify-center py-12 lg:py-0 lg:pl-16">
    {/* Vertical rule — editorial left border */}
    <div className="hidden lg:block absolute left-0 inset-y-0 w-px bg-pip-border" aria-hidden="true" />

    {/* Logo centrepiece */}
    <div className="flex justify-center mb-10">
      <img
        src="/logo.png"
        alt="PiP Blocks Forex Trading Academy"
        className="w-44 h-44 object-contain"
      />
    </div>

    {/* Brand identity block */}
    <div className="border-t border-pip-border pt-7 mb-7">
      <div className="pip-label mb-3">Trading Approach</div>
      <div className="flex flex-col gap-1.5">
        {[
          'Market Structure',
          'Smart Money Concepts',
          'Liquidity & Entries',
          'Risk Management',
        ].map(item => (
          <div key={item} className="flex items-center gap-3">
            <span className="w-1 h-1 rounded-full bg-pip-red shrink-0" aria-hidden="true" />
            <span className="text-[13.5px] text-pip-mid">{item}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Status strip */}
    <div className="border-t border-pip-border pt-6 grid grid-cols-2 gap-x-6 gap-y-4">
      {[
        { l: 'Community',  v: '1.4K+' },
        { l: 'Platform',   v: 'Telegram' },
        { l: 'Bootcamp',   v: 'Sep 21–24' },
        { l: 'Mentorship', v: '$370' },
      ].map(item => (
        <div key={item.l}>
          <div className="pip-label mb-0.5" style={{ fontSize: '9px' }}>{item.l}</div>
          <div className="text-[13px] font-semibold text-pip-charcoal tracking-tight">{item.v}</div>
        </div>
      ))}
    </div>

    {/* Subtle dividing line motif — editorial, not a fake chart */}
    <div className="mt-8 pt-6 border-t border-pip-border">
      <div className="flex items-center gap-2">
        <div className="h-px flex-1 bg-pip-red/20" />
        <div className="h-1.5 w-1.5 rounded-full bg-pip-red" />
        <div className="h-px flex-1 bg-pip-border" />
        <div className="pip-label" style={{ fontSize: '9px' }}>PIPBLOCKFX</div>
      </div>
    </div>
  </div>
);

export const Hero: React.FC = () => (
  <section
    id="hero"
    aria-label="Hero"
    className="min-h-0 lg:min-h-screen flex items-center bg-white border-b border-pip-border pt-[65px]"
  >
    <div className="max-w-site mx-auto px-5 sm:px-8 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-0 lg:min-h-[calc(100vh-65px)]">

        {/* ── LEFT — Copy + Real CTA buttons ──────────────────────────── */}
        <div className="flex flex-col justify-start lg:justify-center pt-8 pb-12 sm:pt-12 sm:pb-16 lg:py-24 lg:pr-16">

          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-6 lg:mb-10">
            <span className="w-5 h-px bg-pip-red shrink-0" aria-hidden="true" />
            <span className="pip-label">PIPBLOCKFX / Forex Trading Academy</span>
          </div>

          {/* Headline — controlled, not oversized */}
          <h1
            className="font-display font-extrabold text-pip-charcoal mb-7"
            style={{
              fontSize: 'clamp(2.25rem, 4.2vw, 3.9rem)',
              lineHeight: '1.04',
              letterSpacing: '-0.03em',
            }}
          >
            FOREX.
            <br />WITH
            <br /><span className="text-pip-red">STRUCTURE.</span>
          </h1>

          {/* Supporting copy */}
          <p className="text-[15.5px] text-pip-mid leading-[1.72] mb-9 max-w-[400px]">
            PiP Blocks is a forex trading community focused on mentorship,
            market analysis, trading ideas and practical development.
          </p>

          {/* ── Real CTA buttons ─────────────────────────────────────── */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <a
              href={TELEGRAM_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              aria-label="Join the PiP Blocks Telegram community"
            >
              Join the Community
              <span aria-hidden="true">→</span>
            </a>

            <button
              type="button"
              onClick={() => scrollTo('#mentorship')}
              className="btn-ghost"
              aria-label="Scroll to Mentorship section"
            >
              Explore Mentorship
              <span aria-hidden="true">→</span>
            </button>
          </div>

          {/* Disclaimer */}
          <p className="text-[11px] text-pip-muted border-l-2 border-pip-border pl-3 leading-relaxed">
            Educational content only. Nothing on this website constitutes personalised financial advice.
          </p>
        </div>

        {/* ── RIGHT — Brand panel, no fake dashboard ───────────────────── */}
        <div className="hidden lg:block">
          <HeroBrand />
        </div>

      </div>
    </div>
  </section>
);
