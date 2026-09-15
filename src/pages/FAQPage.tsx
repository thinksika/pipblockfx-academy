import React, { useState } from 'react';
import { TELEGRAM_COMMUNITY_URL, TELEGRAM_DIRECT_URL, WHATSAPP_URL } from '../data/siteData';

const FAQS = [
  {
    q: 'What is PiP Blocks?',
    a: 'PiP Blocks is a forex trading education community. We provide mentorship, market analysis, bootcamps and an active Telegram community for traders at all levels.',
  },
  {
    q: 'Who is the mentorship program for?',
    a: 'The mentorship is designed for traders who are serious about developing a structured approach. It is suitable for beginners and intermediate traders looking to build proper foundations.',
  },
  {
    q: 'What does the mentorship include?',
    a: 'Six modules covering market structure, storyline and zone selection, liquidity concepts, entry models, risk management, trading psychology and backtesting. Delivered via Zoom (live + pre-recorded) with private Telegram group access.',
  },
  {
    q: 'How do I join the community?',
    a: 'Visit t.me/pipblcksfxhuz or click any "Join Community" button on this website. It is free to join.',
  },
  {
    q: 'How do I register for a bootcamp?',
    a: 'Contact the PiP Blocks team directly via WhatsApp or Telegram. All registrations are handled personally. There is no online payment system.',
  },
  {
    q: 'What markets do you trade?',
    a: 'We focus primarily on Forex, with coverage of Synthetic Indices, Metals (XAUUSD), Stock Indices (US30, NAS100), Commodities and select Crypto pairs.',
  },
  {
    q: 'How can I contact PiP Blocks?',
    a: 'Message directly on Telegram at t.me/pipblockfx, or via WhatsApp at +233 53 813 2060. You can also join the community channel at t.me/pipblcksfxhuz.',
  },
];

export const FAQPage: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>

      {/* Page header */}
      <section className="bg-white border-b border-pip-border">
        <div className="max-w-site mx-auto px-5 sm:px-8 py-14 sm:py-16">
          <div className="pip-label mb-4">FAQ</div>
          <h1
            className="font-display font-extrabold text-pip-charcoal"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: '1.07', letterSpacing: '-0.03em' }}
          >
            Frequently Asked <span className="text-pip-red">Questions.</span>
          </h1>
        </div>
      </section>

      {/* Accordion */}
      <section className="bg-pip-surface border-b border-pip-border">
        <div className="max-w-site mx-auto px-5 sm:px-8 py-8 pb-14">
          <div className="max-w-3xl">
            {FAQS.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="border-b border-pip-border">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-6 py-5 text-left group focus:outline-none"
                  >
                    <span
                      className="font-medium text-pip-charcoal group-hover:text-pip-red transition-colors"
                      style={{ fontSize: '16px', lineHeight: '1.5' }}
                    >
                      {faq.q}
                    </span>
                    <span
                      className="shrink-0 text-[22px] leading-none transition-all duration-200"
                      style={{
                        color: isOpen ? '#E53514' : '#CCCCCA',
                        transform: isOpen ? 'rotate(45deg)' : 'none',
                      }}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-5 pr-8">
                      <p className="text-[15px] text-[#444] leading-[1.75]">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="bg-white border-b border-pip-border py-10">
        <div className="max-w-site mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-[17px] font-semibold text-pip-charcoal mb-1">Still have a question?</p>
            <p className="text-[15px] text-[#555]">Reach the PiP Blocks team directly.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={TELEGRAM_COMMUNITY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Join Community →
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Chat on WhatsApp →
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
