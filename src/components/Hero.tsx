import React from 'react';
import { TELEGRAM_COMMUNITY_URL } from '../data/siteData';
import { ImagePlaceholder } from './ImagePlaceholder';

const scrollTo = (id: string) =>
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

export const Hero: React.FC = () => (
  <section
    id="hero"
    aria-label="Hero"
    className="bg-white border-b border-pip-border pt-[65px]"
  >
    <div className="max-w-site mx-auto px-5 sm:px-8 w-full">

      {/* Desktop: two-column grid | Mobile: stacked */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

        {/* ── LEFT — Copy ──────────────────────────────────────────── */}
        <div className="flex flex-col justify-center pt-10 pb-10 sm:pt-14 sm:pb-14 lg:py-24 lg:pr-16 lg:border-r lg:border-pip-border">

          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-7">
            <span className="w-5 h-px bg-pip-red shrink-0" aria-hidden="true" />
            <span className="pip-label">PIPBLOCKFX / Forex Trading Academy</span>
          </div>

          {/* Headline */}
          <h1
            className="font-display font-extrabold text-pip-charcoal mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              lineHeight: '1.02',
              letterSpacing: '-0.035em',
            }}
          >
            FOREX.
            <br />WITH
            <br /><span className="text-pip-red">STRUCTURE.</span>
          </h1>

          {/* Description */}
          <p className="text-[15.5px] text-pip-mid leading-[1.72] mb-6 max-w-[420px]">
            PiP Blocks is a trading education community built to develop serious traders.
            Through structured mentorship, market understanding, discipline and psychology —
            we help you approach the markets with confidence.
          </p>

          {/* Markets We Trade strip */}
          <div className="mb-8 border-l-2 border-pip-red/30 pl-3">
            <div className="pip-label mb-1" style={{ fontSize: '9.5px' }}>Markets We Trade</div>
            <div className="text-[12px] font-semibold text-pip-charcoal tracking-wider uppercase leading-snug flex flex-wrap gap-x-2 gap-y-0.5">
              <span>FOREX</span>
              <span className="text-pip-red/50 font-light">·</span>
              <span>SYNTHETICS</span>
              <span className="text-pip-red/50 font-light">·</span>
              <span>METALS</span>
              <span className="text-pip-red/50 font-light">·</span>
              <span>INDICES</span>
              <span className="text-pip-red/50 font-light">·</span>
              <span>COMMODITIES</span>
              <span className="text-pip-red/50 font-light">·</span>
              <span>CRYPTO</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-7">
            <a
              href={TELEGRAM_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-pip-charcoal hover:bg-pip-red text-white text-[11.5px] font-semibold tracking-[0.1em] uppercase py-[11px] px-[22px] rounded-[8px] border border-pip-charcoal hover:border-pip-red transition-all duration-200"
              aria-label="Join the PiP Blocks Telegram community"
            >
              Join the Community →
            </a>
            <button
              type="button"
              onClick={() => scrollTo('#mentorship')}
              className="inline-flex items-center justify-center gap-2 bg-transparent text-pip-charcoal text-[11.5px] font-semibold tracking-[0.1em] uppercase py-[10.5px] px-[22px] rounded-[8px] border border-[#CCCCCA] hover:border-pip-charcoal transition-all duration-200"
              aria-label="Scroll to Mentorship section"
            >
              Explore Mentorship →
            </button>
          </div>

          {/* Disclaimer */}
          <p className="text-[11px] text-pip-muted border-l-2 border-pip-border pl-3 leading-relaxed">
            Educational content only. Nothing on this website constitutes personalised financial advice.
          </p>
        </div>

        {/* ── RIGHT — Hero Image ───────────────────────────────────── */}
        <div className="lg:pl-10 lg:py-16 flex items-stretch">
          {/*
           * HERO IMAGE PLACEHOLDER — REPLACE WITH REAL PIP BLOCKS IMAGE
           * Suggested: A real photo of a PiP Blocks seminar, event, or training session.
           * Aspect ratio: 4/3 on mobile, fills full column on desktop.
           */}
          <ImagePlaceholder
            label="HERO_IMAGE — Replace with real PiP Blocks photo"
            aspectRatio="4/3"
            className="w-full h-full min-h-[240px] sm:min-h-[320px] lg:min-h-0"
          />
        </div>

      </div>
    </div>
  </section>
);
