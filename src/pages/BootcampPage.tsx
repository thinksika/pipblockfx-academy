import React from 'react';
import { WHATSAPP_URL, TELEGRAM_DIRECT_URL } from '../data/siteData';

const CURRICULUM = [
  'Advanced Market Structure',
  'Advanced Liquidity Concepts',
  'Personal Entry Models',
  'Risk Management',
  'Trading Psychology & Backtesting',
  '2 Months — Shared Analysis & Signals',
];

export const BootcampPage: React.FC = () => (
  <div>

    {/* Page header */}
    <section className="bg-pip-dark border-b border-white/10">
      <div className="max-w-site mx-auto px-5 sm:px-8 py-12 sm:py-14">
        <div className="flex items-center gap-2 mb-5">
          <span className="w-2 h-2 rounded-full bg-pip-red animate-pulse" />
          <span className="pip-label text-white/40">Upcoming Program</span>
        </div>
        <h1
          className="font-display font-extrabold text-white mb-3"
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: '1.05', letterSpacing: '-0.035em' }}
        >
          PIPBLOCKFX 2.0
          <br /><span className="text-pip-red">BOOTCAMP</span>
        </h1>
        <p className="text-[16px] text-white/60 leading-[1.72] max-w-lg">
          An intensive live training program. Strictly limited to 10 participants.
          Enquire directly — no online payment system.
        </p>
      </div>
    </section>

    {/* Main content */}
    <section className="bg-white border-b border-pip-border">
      <div className="max-w-site mx-auto px-5 sm:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0">

          {/* FLYER — main visual, prominent */}
          <div className="lg:col-span-5 lg:pr-10 lg:border-r lg:border-pip-border">
            {/*
             * BOOTCAMP_FLYER — REPLACE WITH ACTUAL BOOTCAMP FLYER IMAGE
             *
             * When ready, replace this entire div with:
             * <img src="/bootcamp_flyer.jpg" alt="PiP Blocks 2.0 Bootcamp Flyer" className="w-full" />
             *
             * The existing /public/bootcamp_flyer.jpg can be used directly.
             */}
            <div
              className="relative flex items-center justify-center border border-pip-border bg-pip-surface"
              style={{ aspectRatio: '3/4' }}
              role="img"
              aria-label="BOOTCAMP_FLYER — Replace with the real bootcamp flyer"
            >
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 right-0 h-px bg-pip-border" />
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-pip-border" />
              </div>
              <div className="relative z-10 text-center px-6">
                <div className="text-[9.5px] font-mono font-bold tracking-[0.14em] uppercase text-pip-red mb-2">Image Placeholder</div>
                <div className="text-[13px] font-semibold text-pip-charcoal mb-1">BOOTCAMP_FLYER</div>
                <div className="text-[12px] text-[#888]">Replace with /public/bootcamp_flyer.jpg</div>
              </div>
              <span className="absolute top-4 left-4 w-6 h-6 border-t border-l border-pip-red/30" aria-hidden="true" />
              <span className="absolute top-4 right-4 w-6 h-6 border-t border-r border-pip-red/30" aria-hidden="true" />
              <span className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-pip-red/30" aria-hidden="true" />
              <span className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-pip-red/30" aria-hidden="true" />
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-7 lg:pl-12">

            {/* Key details */}
            <div className="grid grid-cols-2 gap-px bg-pip-border mb-8">
              {[
                { label: 'Program Fee', val: '$60' },
                { label: 'Dates',       val: 'Sept 21–24, 2025' },
                { label: 'Capacity',    val: 'Strictly 10 Only' },
                { label: 'Format',      val: '4 Days + 2 Months Signals' },
              ].map((d) => (
                <div key={d.label} className="bg-white p-5">
                  <div className="pip-label mb-1" style={{ fontSize: '9.5px' }}>{d.label}</div>
                  <div className="text-[17px] font-semibold text-pip-charcoal">{d.val}</div>
                </div>
              ))}
            </div>

            {/* Curriculum */}
            <div className="mb-8">
              <div className="pip-label mb-3">What You'll Cover</div>
              <ul className="space-y-2">
                {CURRICULUM.map((item, i) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-[#333]">
                    <span className="text-[11px] font-mono text-pip-red/70 mt-0.5 shrink-0 w-5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Registration */}
            <div className="border border-pip-border p-6 mb-5">
              <div className="pip-label mb-2">How to Register</div>
              <p className="text-[15px] text-[#444] leading-[1.7] mb-4">
                All registrations are handled directly by the PiP Blocks team via WhatsApp or Telegram.
                There is no online payment or checkout system.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary justify-center">
                  Register via WhatsApp →
                </a>
                <a href={TELEGRAM_DIRECT_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost justify-center">
                  Message on Telegram →
                </a>
              </div>
            </div>

            <p className="text-[12.5px] text-[#999] border-l-2 border-pip-border pl-3 leading-relaxed">
              No payment gateway. No Paystack. Enquiries only. The team will confirm details directly.
            </p>

          </div>
        </div>
      </div>
    </section>

  </div>
);
