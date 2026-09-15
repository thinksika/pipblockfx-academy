import React from 'react';
import { TELEGRAM_DIRECT_URL, WHATSAPP_URL } from '../data/siteData';

const MODULES = [
  { n: '01', title: 'Introduction to Forex', items: ['How forex markets work', 'Currency pairs & terminology', 'Market sessions & timing'] },
  { n: '02', title: 'Market Structure', items: ['Identifying trends', 'Break of structure (BOS)', 'Change of character (CHOCH)'] },
  { n: '03', title: 'Storyline & Zone Selection', items: ['Reading chart narratives', 'Fair value gaps', 'Order blocks'] },
  { n: '04', title: 'Liquidity Concepts', items: ['Buy/sell-side liquidity', 'Liquidity sweeps', 'Inducement setups'] },
  { n: '05', title: 'Entry Models', items: ['SNR entries', 'Trendline kiss', 'Confirmation model'] },
  { n: '06', title: 'Development & Management', items: ['Risk management', 'Trading psychology', 'Backtesting routine'] },
];

export const Mentorship: React.FC = () => (
  <section id="mentorship" aria-label="PiP Blocks Mentorship Program" className="bg-white border-b border-pip-border">
    <div className="max-w-site mx-auto px-5 sm:px-8">

      {/* Label row */}
      <div className="py-5 border-b border-pip-border">
        <span className="pip-label">07 — Mentorship Program</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 pt-10 pb-14 sm:pt-12 sm:pb-16 gap-10 lg:gap-0">

        {/* Left — Curriculum */}
        <div className="lg:col-span-7 lg:pr-12 lg:border-r lg:border-pip-border">
          <h2
            className="font-display font-extrabold text-pip-charcoal mb-2"
            style={{
              fontSize: 'clamp(1.55rem, 2.8vw, 2.4rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.025em',
            }}
          >
            The PiP Blocks{' '}
            <span className="text-pip-red">Mentorship.</span>
          </h2>

          <p className="text-[14.5px] text-pip-mid leading-[1.75] mb-8 max-w-lg">
            A practical, structured forex mentorship program covering six comprehensive modules —
            from first principles through to advanced concepts, risk management and psychological discipline.
          </p>

          {/* Module grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-pip-border">
            {MODULES.map((mod, i) => {
              const hasRightBorder = i % 2 === 0;
              const isBottomRow = i >= 4;
              return (
                <div
                  key={mod.n}
                  className={[
                    'p-5',
                    hasRightBorder ? 'sm:border-r border-pip-border' : '',
                    !isBottomRow ? 'border-b border-pip-border' : '',
                  ].join(' ')}
                >
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="pip-label" style={{ color: '#E53514', fontSize: '9px' }}>{mod.n}</span>
                    <span className="text-[13.5px] font-semibold text-pip-charcoal">{mod.title}</span>
                  </div>
                  <ul className="space-y-0.5">
                    {mod.items.map((it) => (
                      <li key={it} className="text-[12.5px] text-pip-mid flex items-start gap-1.5">
                        <span className="text-pip-red/50 mt-0.5 text-[10px]">—</span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right — Pricing + CTA */}
        <div className="lg:col-span-5 lg:pl-12 flex flex-col justify-center">

          {/* Price card */}
          <div className="border border-pip-border p-7 mb-6">
            <div className="pip-label mb-3">Program Fee</div>
            <div
              className="font-display font-extrabold text-pip-charcoal mb-1"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', letterSpacing: '-0.04em', lineHeight: '1' }}
            >
              $370
            </div>
            <div className="pip-label mb-5" style={{ fontSize: '9px' }}>
              One-time payment · No refund policy
            </div>

            <div className="space-y-2 mb-6 border-t border-pip-border pt-5">
              {[
                '6 structured modules',
                'Advanced market structure & liquidity',
                'Personal entry models',
                'Risk management & psychology',
                'Backtesting guidance',
              ].map((f) => (
                <div key={f} className="flex items-center gap-2 text-[13px] text-pip-mid">
                  <span className="w-1.5 h-1.5 bg-pip-red rounded-full shrink-0" aria-hidden="true" />
                  {f}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={TELEGRAM_DIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-pip-charcoal hover:bg-pip-red text-white text-[11.5px] font-semibold tracking-[0.1em] uppercase py-[11px] px-[22px] rounded-[8px] border border-pip-charcoal hover:border-pip-red transition-all duration-200 text-center"
                aria-label="Enquire about PiP Blocks mentorship on Telegram"
              >
                Enquire About Mentorship →
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-pip-charcoal hover:text-pip-charcoal text-[11.5px] font-semibold tracking-[0.1em] uppercase py-[10.5px] px-[22px] rounded-[8px] border border-[#CCCCCA] hover:border-pip-charcoal transition-all duration-200 text-center"
                aria-label="Chat about mentorship on WhatsApp"
              >
                Chat on WhatsApp →
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-[11px] text-pip-muted border-l-2 border-pip-border pl-3 leading-relaxed">
            All mentorship enquiries are handled directly by the PiP Blocks team.
            Please read the full terms before enrolling. No refund policy applies.
          </p>
        </div>

      </div>
    </div>
  </section>
);
