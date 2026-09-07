import React from 'react';
import { TELEGRAM_URL, WHATSAPP_URL } from '../data/siteData';

/* ── Syllabus data from the supplied class document ─────────────────── */
const MODULES = [
  {
    num:   '00',
    title: 'Introduction',
    items: [
      'Introduction to Forex Trading',
      'Platform Setup & Chart Basics',
      'Trading Mindset Introduction',
    ],
  },
  {
    num:   '01',
    title: 'Market Structure',
    items: [
      'Market Structure',
      'Valid BOS (EEC/SMC)',
      'Range Concept',
      'SNR (Support & Resistance) Basics',
      'Market Pricing',
    ],
  },
  {
    num:   '02',
    title: 'Storyline & Zones',
    items: [
      'Storyline',
      'Zone Selection (SMC/EEC)',
      'Types of EG',
      'SNR Significant',
    ],
  },
  {
    num:   '03',
    title: 'Liquidity',
    items: [
      'Liquidity Concept',
      'Money Transfer',
    ],
  },
  {
    num:   '04',
    title: 'Entry Models',
    items: [
      'SNR Trendlines',
      'TL Kiss (Trendline Kiss)',
      'TL Logics',
      'Entry Model',
    ],
  },
  {
    num:   '05',
    title: 'Development & Management',
    items: [
      'Risk / Trade Management',
      'Trading Psychology',
      'Backtesting & Journaling',
      'Building a Trading Routine',
      'Review & Continuous Improvement',
    ],
  },
];

const MERITS = [
  'Access to prerecorded classes on private Telegram group',
  'Weekly market outlook',
  'PDF books on trading for better understanding',
];

export const Mentorship: React.FC = () => (
  <section id="mentorship" aria-label="Mentorship program" className="bg-white border-b border-pip-border">
    <div className="max-w-site mx-auto px-5 sm:px-8">

      {/* ── Label ───────────────────────────────────────────────────────── */}
      <div className="py-5 border-b border-pip-border">
        <span className="pip-label">03 — Mentorship</span>
      </div>

      {/* ── Header: heading left, price right ──────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-12 sm:py-16 border-b border-pip-border">

        <div>
          <h2
            className="font-display font-extrabold text-pip-charcoal mb-5"
            style={{
              fontSize: 'clamp(2rem, 3.2vw, 3.1rem)',
              lineHeight: '1.06',
              letterSpacing: '-0.028em',
            }}
          >
            BUILD YOUR
            <br />TRADING PROCESS.
          </h2>
          <p className="text-[15.5px] text-pip-mid leading-[1.72] max-w-md">
            Our mentorship program is designed around practical forex education,
            market understanding and the development of a structured trading process.
          </p>
        </div>

        {/* Price block — editorial, not a pricing card with glows */}
        <div className="flex flex-col justify-between sm:items-end">
          <div className="sm:text-right mb-8 sm:mb-0">
            <div className="pip-label mb-2">Program Fee</div>
            <div
              className="font-display font-extrabold text-pip-charcoal"
              style={{
                fontSize: 'clamp(3.5rem, 5vw, 5.5rem)',
                lineHeight: '1',
                letterSpacing: '-0.04em',
              }}
            >
              $370
            </div>
            <p className="text-[11px] text-pip-muted mt-2">No refund policy · Terms & conditions apply</p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col gap-3 sm:items-end w-full sm:w-auto">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto justify-center sm:justify-start"
              aria-label="Enquire about mentorship on Telegram"
            >
              Enquire About Mentorship →
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-full sm:w-auto justify-center sm:justify-start"
              aria-label="Chat about mentorship on WhatsApp"
            >
              Chat on WhatsApp →
            </a>
          </div>
        </div>

      </div>

      {/* ── Program details strip ───────────────────────────────────────── */}
      <div className="py-6 border-b border-pip-border grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-0 sm:divide-x sm:divide-pip-border">
        {[
          { l: 'Venue',    v: 'Zoom Meeting' },
          { l: 'Duration', v: 'Lifetime'     },
          { l: 'Format',   v: 'Live + Pre-recorded' },
          { l: 'Access',   v: 'Private Telegram Group' },
        ].map(item => (
          <div key={item.l} className="sm:px-7 first:pl-0 last:pr-0">
            <div className="pip-label mb-1">{item.l}</div>
            <div className="text-[13.5px] font-semibold text-pip-charcoal">{item.v}</div>
          </div>
        ))}
      </div>

      {/* ── Syllabus heading ──────────────────────────────────────────────── */}
      <div className="pt-12 pb-8">
        <h3
          className="font-display font-extrabold text-pip-charcoal"
          style={{
            fontSize: 'clamp(1.2rem, 2vw, 1.75rem)',
            letterSpacing: '-0.02em',
          }}
        >
          WHAT YOU'LL COVER
        </h3>
      </div>

      {/* ── Module grid — 2 columns on desktop, 1 on mobile ──────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-pip-border mb-12">
        {MODULES.map((mod, idx) => (
          <div
            key={mod.num}
            className={`py-8 border-b border-pip-border ${
              /* right column items get a left border on desktop */
              idx % 2 === 1 ? 'md:pl-10 md:border-l md:border-pip-border' : 'md:pr-10'
            }`}
          >
            {/* Module label */}
            <div className="flex items-baseline gap-3 mb-4">
              <span
                className="font-mono font-bold"
                style={{ fontSize: '11px', color: '#E53514', letterSpacing: '0.08em' }}
              >
                MODULE {mod.num}
              </span>
              <span
                className="font-bold text-pip-charcoal uppercase tracking-wider"
                style={{ fontSize: '11.5px', letterSpacing: '0.07em' }}
              >
                {mod.title}
              </span>
            </div>

            {/* Topics */}
            <ul className="space-y-2">
              {mod.items.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-[7px] w-1 h-1 rounded-full bg-pip-border-md shrink-0" aria-hidden="true" />
                  <span className="text-[14px] text-pip-mid leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Merits / What's included ──────────────────────────────────────── */}
      <div className="border-t border-pip-border py-8 mb-0">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
          <div className="sm:col-span-3">
            <div className="pip-label mb-2">What's Included</div>
          </div>
          <div className="sm:col-span-9">
            <ul className="space-y-3">
              {MERITS.map(m => (
                <li key={m} className="flex items-start gap-3">
                  <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-pip-red shrink-0" aria-hidden="true" />
                  <span className="text-[14.5px] text-pip-mid leading-snug">{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom disclaimer ─────────────────────────────────────────────── */}
      <div className="border-t border-pip-border py-5 pb-8">
        <p className="text-[11.5px] text-pip-muted leading-relaxed max-w-xl">
          Mentorship provides educational guidance only. Results will vary based on
          the individual's effort, market conditions and experience. Past performance
          is not indicative of future results.
        </p>
      </div>

    </div>
  </section>
);
