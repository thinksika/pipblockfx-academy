import React from 'react';
import { WHATSAPP_URL, TELEGRAM_DIRECT_URL } from '../data/siteData';

export const ProgramsPage: React.FC = () => (
  <div>

    {/* ── PAGE HEADING ────────────────────────────────── */}
    <section className="bg-[#111] border-b border-white/10">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <div className="flex items-center gap-2.5 mb-5">
          <span className="w-2 h-2 rounded-full bg-[#E53514] animate-pulse" />
          <span className="pip-label text-white/40">Upcoming Program</span>
        </div>
        <h1
          style={{
            fontFamily: '"Plus Jakarta Sans", Inter, system-ui, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 4.5vw, 4rem)',
            lineHeight: 1.04,
            letterSpacing: '-0.04em',
            color: '#fff',
          }}
        >
          PIPBLOCKFX 2.0<br />
          <span style={{ color: '#E53514' }}>BOOTCAMP</span>
        </h1>
      </div>
    </section>

    {/* ── MAIN CONTENT ─────────────────────────────────── */}
    <section className="bg-white border-b border-[#E5E5E3]">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0">

          {/* ── FLYER — the main visual ─────────────────── */}
          <div className="lg:col-span-6 lg:pr-12 lg:border-r lg:border-[#E5E5E3]">
            {/*
             * BOOTCAMP_FLYER — This is the primary visual.
             * File: /public/bootcamp_flyer.jpg
             * Replace this comment with the real flyer if available.
             *
             * If bootcamp_flyer.jpg is a real image, it will display here.
             * The div below handles the fallback placeholder state.
             */}
            <img
              src="/bootcamp_flyer.jpg"
              alt="PIPBLOCKFX 2.0 Bootcamp Program flyer"
              className="w-full h-auto"
              style={{ maxHeight: 700, objectFit: 'contain', objectPosition: 'top' }}
              onError={(e) => {
                const el = e.currentTarget;
                el.style.display = 'none';
                const parent = el.parentElement;
                if (parent) {
                  const placeholder = document.createElement('div');
                  placeholder.style.cssText = 'aspect-ratio:3/4;background:#F7F7F5;border:1px solid #E5E5E3;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;';
                  placeholder.innerHTML = '<p style="font-size:10px;font-weight:700;letter-spacing:.14em;color:#E53514;text-transform:uppercase">Flyer Placeholder</p><p style="font-size:13px;color:#888;font-weight:500">BOOTCAMP_FLYER</p><p style="font-size:11px;color:#bbb">Replace with /public/bootcamp_flyer.jpg</p>';
                  parent.appendChild(placeholder);
                }
              }}
            />
          </div>

          {/* ── Key info + registration ─────────────────── */}
          <div className="lg:col-span-6 lg:pl-12">

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-px bg-[#E5E5E3] mb-8">
              {[
                { label: 'Fee',      val: '$60' },
                { label: 'Dates',    val: 'Sept 21–24' },
                { label: 'Capacity', val: '10 Only' },
                { label: 'Bonus',    val: '2 Months Signals' },
              ].map(d => (
                <div key={d.label} className="bg-white p-5">
                  <p className="pip-label mb-1">{d.label}</p>
                  <p className="text-[17px] font-semibold text-[#171717]">{d.val}</p>
                </div>
              ))}
            </div>

            {/* Registration */}
            <div className="border border-[#E5E5E3] p-6 mb-5">
              <p className="pip-label mb-3">How to Register</p>
              <p className="text-[15px] text-[#444] leading-[1.7] mb-5">
                All registrations are handled directly by the PiP Blocks team.
                Contact via WhatsApp or Telegram — there is no online checkout.
              </p>
              <div className="flex flex-col gap-3">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-dark justify-center">
                  Register via WhatsApp →
                </a>
                <a href={TELEGRAM_DIRECT_URL} target="_blank" rel="noopener noreferrer" className="btn-outline justify-center">
                  Message on Telegram →
                </a>
              </div>
            </div>

            <p className="text-[12.5px] text-[#999] border-l-2 border-[#E5E5E3] pl-3 leading-relaxed">
              Strictly 10 participants. No refund policy applies.
              Contact the team for full details and payment instructions.
            </p>

          </div>
        </div>
      </div>
    </section>

  </div>
);
