import React from 'react';
import { WHATSAPP_URL, TELEGRAM_DIRECT_URL } from '../data/siteData';

/**
 * Programs — replaces old Bootcamp.tsx
 * Dark background (#111) for strong visual contrast break.
 * Large bootcamp flyer placeholder + key details.
 */
export const Programs: React.FC = () => (
  <section
    id="bootcamp"
    aria-label="Programs and Events"
    className="bg-pip-dark border-b border-white/10"
  >
    <div className="max-w-site mx-auto px-5 sm:px-8">

      {/* Label row */}
      <div className="py-5 border-b border-white/10">
        <span className="pip-label text-white/40">06 — Programs & Events</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 pt-10 pb-14 sm:pt-12 sm:pb-16 gap-10 lg:gap-0">

        {/* Left — Flyer placeholder */}
        <div className="lg:col-span-5 lg:pr-10 lg:border-r lg:border-white/10">
          {/*
           * BOOTCAMP_FLYER — Replace with the actual PiP Blocks bootcamp flyer image.
           * You can use the existing /public/bootcamp_flyer.jpg here.
           * Aspect ratio: 3/4 (portrait poster format)
           */}
          <div
            className="relative overflow-hidden flex items-center justify-center border border-white/10"
            style={{ aspectRatio: '3/4', background: '#1A1A1A' }}
            aria-label="BOOTCAMP_FLYER placeholder"
            role="img"
          >
            {/* If bootcamp_flyer.jpg is available, uncomment the line below and delete this div content */}
            {/* <img src="/bootcamp_flyer.jpg" alt="PiP Blocks Bootcamp Flyer" className="w-full h-full object-cover" /> */}

            {/* Placeholder content */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-white/5" />
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5" />
            </div>
            <div className="relative z-10 text-center px-4">
              <div className="text-[9.5px] font-mono font-bold tracking-[0.14em] uppercase text-pip-red mb-1">
                Image Placeholder
              </div>
              <div className="text-[11px] font-semibold text-white/60 tracking-wide">
                BOOTCAMP_FLYER
              </div>
              <div className="text-[10px] text-white/30 mt-1">
                Replace with /public/bootcamp_flyer.jpg
              </div>
            </div>
            <span className="absolute top-3 left-3 w-5 h-5 border-t border-l border-pip-red/30" aria-hidden="true" />
            <span className="absolute top-3 right-3 w-5 h-5 border-t border-r border-pip-red/30" aria-hidden="true" />
            <span className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-pip-red/30" aria-hidden="true" />
            <span className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-pip-red/30" aria-hidden="true" />
          </div>
        </div>

        {/* Right — Bootcamp details */}
        <div className="lg:col-span-7 lg:pl-12 flex flex-col justify-center">

          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-pip-red animate-pulse" aria-label="Active" />
            <span className="pip-label text-white/40">Upcoming Program</span>
          </div>

          <h2
            className="font-display font-extrabold text-white mb-5"
            style={{
              fontSize: 'clamp(1.7rem, 3vw, 2.8rem)',
              lineHeight: '1.08',
              letterSpacing: '-0.03em',
            }}
          >
            PIPBLOCKFX 2.0
            <br /><span className="text-pip-red">BOOTCAMP</span>
          </h2>

          {/* Key details */}
          <div className="grid grid-cols-2 gap-px mb-8 bg-white/10">
            {[
              { label: 'Dates', val: 'September 21–24' },
              { label: 'Program Fee', val: '$60' },
              { label: 'Capacity', val: 'Strictly 10 Only' },
              { label: 'Format', val: 'In-Person / Live' },
            ].map((d) => (
              <div key={d.label} className="bg-pip-dark p-5">
                <div className="pip-label text-white/30 mb-1" style={{ fontSize: '9px' }}>{d.label}</div>
                <div className="text-[17px] font-semibold text-white" style={{ letterSpacing: '-0.01em' }}>
                  {d.val}
                </div>
              </div>
            ))}
          </div>

          {/* Curriculum */}
          <div className="mb-8">
            <div className="pip-label text-white/30 mb-3" style={{ fontSize: '9px' }}>Curriculum</div>
            <div className="space-y-1.5">
              {[
                'Advanced Market Structure',
                'Advanced Liquidity Concepts',
                'Personal Entry Models',
                'Risk Management',
                'Trading Psychology & Backtesting',
                '2 Months — Shared Analysis & Signals',
              ].map((item, i) => (
                <div key={item} className="flex items-start gap-3 text-[13.5px] text-white/60">
                  <span className="text-pip-red/60 text-[11px] font-mono mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-pip-red text-pip-charcoal hover:text-white text-[11.5px] font-semibold tracking-[0.1em] uppercase py-[11px] px-[22px] rounded-[8px] border border-white hover:border-pip-red transition-all duration-200"
              aria-label="Register for the bootcamp via WhatsApp"
            >
              Register via WhatsApp →
            </a>
            <a
              href={TELEGRAM_DIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white/60 hover:text-white text-[11.5px] font-semibold tracking-[0.1em] uppercase py-[10.5px] px-[22px] rounded-[8px] border border-white/20 hover:border-white/50 transition-all duration-200"
              aria-label="Enquire about the bootcamp via Telegram"
            >
              Message on Telegram →
            </a>
          </div>

          <p className="mt-5 text-[11px] text-white/25 border-l border-white/10 pl-3 leading-relaxed">
            All bootcamp enquiries are handled directly by the PiP Blocks team. No online payment.
          </p>
        </div>

      </div>
    </div>
  </section>
);
