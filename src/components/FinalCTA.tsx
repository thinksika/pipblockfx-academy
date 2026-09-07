import React from 'react';
import { TELEGRAM_URL, WHATSAPP_URL, INSTAGRAM_URL, FACEBOOK_URL } from '../data/siteData';

const SOCIAL = [
  { label: 'Instagram', handle: 'PiP Blocks Forex',   href: INSTAGRAM_URL, active: true  },
  { label: 'Facebook',  handle: 'PiP Block Forex',    href: FACEBOOK_URL,  active: true  },
  { label: 'TikTok',    handle: 'Coming Soon',        href: null,          active: false },
];

export const FinalCTA: React.FC = () => (
  <section id="contact" aria-label="Contact PiP Blocks" className="bg-pip-surface border-b border-pip-border">
    <div className="max-w-site mx-auto px-5 sm:px-8">

      {/* Label */}
      <div className="py-5 border-b border-pip-border">
        <span className="pip-label">09 — Connect</span>
      </div>

      {/* Large closing statement */}
      <div className="pt-14 pb-10 border-b border-pip-border">
        <h2
          className="font-display font-extrabold text-pip-charcoal"
          style={{
            fontSize: 'clamp(2.8rem, 6vw, 6.5rem)',
            lineHeight: '1.03',
            letterSpacing: '-0.04em',
          }}
        >
          LET'S TALK
          <br /><span className="text-pip-red">TRADING.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 py-12 lg:py-14 gap-10 lg:gap-0">

        {/* Left — copy + unmistakable CTAs */}
        <div className="lg:col-span-6 lg:pr-14 lg:border-r lg:border-pip-border">
          <p className="text-[15.5px] text-pip-mid leading-[1.75] mb-10 max-w-md">
            Whether you're interested in mentorship, the community, market
            analysis, signals or an upcoming bootcamp, connect directly with
            PiP Blocks.
          </p>

          {/* Two distinct CTA buttons */}
          <div className="flex flex-col gap-4">

            {/* Telegram — block-style, prominent */}
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-5 px-6 bg-pip-charcoal hover:bg-pip-red text-white transition-colors duration-200 group"
              aria-label="Join the PiP Blocks community on Telegram"
            >
              <div>
                <div className="pip-label text-white/50 mb-1">Telegram</div>
                <div className="text-[13px] font-semibold uppercase tracking-[0.07em]">
                  Join the Community →
                </div>
              </div>
              <span
                className="text-white/30 group-hover:text-white/70 transition-all duration-200 text-xl group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </a>

            {/* WhatsApp — outlined */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-5 px-6 border border-pip-border-md hover:border-pip-charcoal text-pip-charcoal transition-colors duration-200 group"
              aria-label="Contact PiP Blocks on WhatsApp"
            >
              <div>
                <div className="pip-label text-pip-muted mb-1">WhatsApp</div>
                <div className="text-[13px] font-semibold uppercase tracking-[0.07em]">
                  Contact the Team →
                </div>
              </div>
              <span
                className="text-pip-border-md group-hover:text-pip-charcoal transition-all duration-200 text-xl group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </a>

          </div>
        </div>

        {/* Right — social editorial rows */}
        <div className="lg:col-span-6 lg:pl-14">
          <div className="pip-label mb-5">Also find us on</div>

          {/* Telegram row first */}
          <div className="divide-y divide-pip-border border-t border-pip-border">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-5 hover:opacity-60 transition-opacity group"
            >
              <div>
                <div className="pip-label mb-0.5">Telegram</div>
                <div className="text-[15px] font-semibold text-pip-charcoal">@pipblockfx</div>
              </div>
              <span className="text-pip-border-md group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
            </a>

            {SOCIAL.map(s => (
              <div key={s.label}>
                {s.active && s.href ? (
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-5 hover:opacity-60 transition-opacity group"
                  >
                    <div>
                      <div className="pip-label mb-0.5">{s.label}</div>
                      <div className="text-[15px] font-semibold text-pip-charcoal">{s.handle}</div>
                    </div>
                    <span className="text-pip-border-md group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                  </a>
                ) : (
                  <div className="flex items-center justify-between py-5 opacity-30">
                    <div>
                      <div className="pip-label mb-0.5">{s.label}</div>
                      <div className="text-[15px] font-semibold text-pip-charcoal">{s.handle}</div>
                    </div>
                    <span aria-hidden="true">—</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </section>
);
