import React from 'react';
import { TELEGRAM_COMMUNITY_URL, TELEGRAM_DIRECT_URL, WHATSAPP_URL } from '../data/siteData';

export const FinalCTA: React.FC = () => (
  <section id="contact" aria-label="Contact PiP Blocks" className="bg-pip-charcoal border-b border-white/10">
    <div className="max-w-site mx-auto px-5 sm:px-8 py-14 sm:py-20">

      {/* Large editorial statement */}
      <div className="mb-12 border-b border-white/10 pb-10">
        <h2
          className="font-display font-extrabold text-white"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 6rem)',
            lineHeight: '1.02',
            letterSpacing: '-0.04em',
          }}
        >
          READY TO
          <br />
          <span className="text-pip-red">TRADE BETTER?</span>
        </h2>
      </div>

      {/* 3-column contact strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">

        {/* Telegram community */}
        <a
          href={TELEGRAM_COMMUNITY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-6 border-r border-white/10 last:border-r-0 hover:bg-white/5 transition-colors"
          aria-label="Join the PiP Blocks Telegram community"
        >
          <div className="pip-label text-white/30 mb-2" style={{ fontSize: '9px' }}>Telegram Community</div>
          <div className="text-[16px] font-semibold text-white mb-1 group-hover:text-pip-red transition-colors">
            Join the Community
          </div>
          <div className="text-[12.5px] text-white/40">Free. Open access on Telegram.</div>
          <div className="mt-4 text-[11px] font-semibold uppercase tracking-[0.09em] text-white/30 group-hover:text-pip-red transition-colors">
            Join Now →
          </div>
        </a>

        {/* Mentorship enquiry */}
        <a
          href={TELEGRAM_DIRECT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-6 border-r border-white/10 last:border-r-0 hover:bg-white/5 transition-colors"
          aria-label="Enquire about PiP Blocks mentorship"
        >
          <div className="pip-label text-white/30 mb-2" style={{ fontSize: '9px' }}>Mentorship Enquiry</div>
          <div className="text-[16px] font-semibold text-white mb-1 group-hover:text-pip-red transition-colors">
            Enquire About Mentorship
          </div>
          <div className="text-[12.5px] text-white/40">$370 program. Message us directly.</div>
          <div className="mt-4 text-[11px] font-semibold uppercase tracking-[0.09em] text-white/30 group-hover:text-pip-red transition-colors">
            Message Us →
          </div>
        </a>

        {/* WhatsApp */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-6 hover:bg-white/5 transition-colors"
          aria-label="Contact PiP Blocks on WhatsApp"
        >
          <div className="pip-label text-white/30 mb-2" style={{ fontSize: '9px' }}>WhatsApp</div>
          <div className="text-[16px] font-semibold text-white mb-1 group-hover:text-pip-red transition-colors">
            Chat on WhatsApp
          </div>
          <div className="text-[12.5px] text-white/40">Speak directly with the team.</div>
          <div className="mt-4 text-[11px] font-semibold uppercase tracking-[0.09em] text-white/30 group-hover:text-pip-red transition-colors">
            Chat Now →
          </div>
        </a>

      </div>

    </div>
  </section>
);
