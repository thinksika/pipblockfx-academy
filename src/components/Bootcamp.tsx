import React from 'react';
import { TELEGRAM_DIRECT_URL, WHATSAPP_URL } from '../data/siteData';

const OUTLINE = [
  'Advanced Market Structure',
  'Advanced Liquidity Concept',
  'Personal Entries',
  'Questions, Guidance & Backtesting',
  'Risk Management',
  'Shared Analysis & Signals — 2 Months',
];

const INFO = [
  { label: 'Dates',    value: '21–24 September'       },
  { label: 'Capacity', value: 'Limited to 10'         },
  { label: 'Duration', value: '4 Days + 2 Months Signals' },
];

export const Bootcamp: React.FC = () => (
  <section id="bootcamp" aria-label="Upcoming Bootcamp" className="bg-pip-dark border-b border-black">
    <div className="max-w-site mx-auto px-5 sm:px-8">

      {/* Label */}
      <div className="py-5 border-b border-white/10 flex items-center justify-between">
        <span className="pip-label" style={{ color: 'rgba(255,255,255,0.32)' }}>
          06 — Upcoming Program
        </span>
        <span className="pip-label" style={{ color: 'rgba(255,255,255,0.32)' }}>
          PIPBLOCKFX
        </span>
      </div>

      {/* Header: title + fee */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-12 pb-10 border-b border-white/10">
        <h2
          className="font-display font-extrabold text-white"
          style={{
            fontSize: 'clamp(2.4rem, 5vw, 5.2rem)',
            lineHeight: '1.03',
            letterSpacing: '-0.035em',
          }}
        >
          PIPBLOCKFX 2.0
          <br /><span className="text-pip-red">BOOTCAMP</span>
        </h2>

        <div className="sm:text-right shrink-0">
          <div className="pip-label mb-1.5" style={{ color: 'rgba(255,255,255,0.32)' }}>
            Program Fee
          </div>
          <div
            className="font-display font-extrabold text-white"
            style={{
              fontSize: 'clamp(2.8rem, 4.5vw, 5rem)',
              lineHeight: '1',
              letterSpacing: '-0.04em',
            }}
          >
            $60
          </div>
        </div>
      </div>

      {/* Info band */}
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10 border-b border-white/10">
        {INFO.map(item => (
          <div key={item.label} className="py-5 sm:px-8 first:pl-0 last:pr-0">
            <div className="pip-label mb-1.5" style={{ color: 'rgba(255,255,255,0.32)' }}>
              {item.label}
            </div>
            <div className="text-[15px] font-semibold text-white">{item.value}</div>
          </div>
        ))}
      </div>

      {/* Content: outline + optional artwork + CTA */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 py-12">

        {/* Outline */}
        <div className="lg:col-span-5 lg:pr-10 lg:border-r lg:border-white/10 mb-10 lg:mb-0">
          <div className="pip-label mb-6" style={{ color: 'rgba(255,255,255,0.32)' }}>
            Program Outline
          </div>
          <ol className="space-y-4">
            {OUTLINE.map((item, i) => (
              <li key={i} className="flex items-baseline gap-5">
                <span
                  className="font-mono shrink-0 w-5"
                  style={{ fontSize: '11px', color: '#E53514', letterSpacing: '0.06em' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[14.5px] font-medium leading-snug" style={{ color: 'rgba(255,255,255,0.78)' }}>
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* Optional bootcamp artwork — intentionally placed, not small/forced */}
        <div className="lg:col-span-3 hidden lg:flex items-center justify-center px-10 border-r border-white/10">
          <img
            src="/bootcamp_flyer.jpg"
            alt="PIPBLOCKFX 2.0 Bootcamp"
            className="w-full max-w-[210px] border border-white/10"
            loading="lazy"
          />
        </div>

        {/* CTA */}
        <div className="lg:col-span-4 lg:pl-10 flex flex-col justify-between">
          <p className="text-[13.5px] leading-[1.7] mb-8" style={{ color: 'rgba(255,255,255,0.42)' }}>
            Registration is handled directly by the PiP Blocks team.
            There is no online payment or checkout.
          </p>

          <div className="flex flex-col gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white justify-between"
              aria-label="Enquire about bootcamp on WhatsApp"
            >
              <span>Enquire / Register</span>
              <span aria-hidden="true">→</span>
            </a>
            <a
              href={TELEGRAM_DIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-dark justify-between"
              aria-label="Message PiP Blocks on Telegram"
            >
              <span>Message on Telegram</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
);
