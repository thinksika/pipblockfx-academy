import React, { useState } from 'react';

const FAQS = [
  {
    q: 'What is PiP Blocks Forex Trading Academy?',
    a: 'PiP Blocks Forex Trading Academy is a growing forex trading community focused on market analysis, mentorship, practical training and trader development. We aim to give traders a structured, disciplined approach to the markets.',
  },
  {
    q: 'What does the mentorship program cover?',
    a: 'The mentorship covers 6 modules: Introduction to Forex, Market Structure, Storyline & Zone Selection, Liquidity Concepts, Entry Models (SNR, Trendline Kiss, Entry Model), and Development & Management (Risk Management, Trading Psychology, Backtesting, Building a Trading Routine).',
  },
  {
    q: 'How much does the mentorship cost?',
    a: 'The PiP Blocks Forex Mentorship Program is priced at $370. A no-refund policy applies. Please contact the team directly for full terms and conditions before enrolling.',
  },
  {
    q: 'How can I join the Telegram community?',
    a: 'Visit https://t.me/pipblcksfxhuz or click any "Join Community" button on this website to access the PiP Blocks Telegram channel. It is free to join.',
  },
  {
    q: 'How do I enquire about mentorship or bootcamp?',
    a: 'Send a direct message to the team on Telegram at https://t.me/pipblockfx or via WhatsApp at https://wa.me/233538132060. The team will respond with full details.',
  },
  {
    q: 'Do you provide market analysis and signals?',
    a: 'We share market observations, technical analysis, trade setups and trading ideas through our community channels on Telegram. This is educational content and is not personalised financial advice.',
  },
  {
    q: 'What markets do you trade?',
    a: 'PiP Blocks focuses primarily on Forex, with coverage of Synthetic Indices, Metals (XAU/USD, XAG/USD), Stock Indices (US30, NAS100), Commodities, and select Crypto pairs.',
  },
  {
    q: 'Do you provide personalised financial advice?',
    a: 'No. PiP Blocks provides educational content, market analysis and trading ideas only. Nothing on this website or in our community constitutes personalised financial advice. Trading financial markets involves risk.',
  },
];

export const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" aria-label="Frequently asked questions" className="bg-pip-surface border-b border-pip-border">
      <div className="max-w-site mx-auto px-5 sm:px-8 pb-14">

        {/* Label */}
        <div className="py-5 border-b border-pip-border">
          <span className="pip-label">10 — FAQ</span>
        </div>

        {/* Heading */}
        <div className="pt-10 pb-8 sm:pt-12 border-b border-pip-border">
          <h2
            className="font-display font-extrabold text-pip-charcoal"
            style={{
              fontSize: 'clamp(1.55rem, 2.8vw, 2.4rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.025em',
            }}
          >
            Frequently Asked{' '}
            <span className="text-pip-red">Questions.</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-pip-border">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-5 text-left focus:outline-none group"
                >
                  <span
                    className="font-medium text-pip-charcoal group-hover:text-pip-red transition-colors duration-150"
                    style={{ fontSize: '15px', lineHeight: '1.5' }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className="shrink-0 text-[20px] leading-none transition-all duration-200 mt-0.5"
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
                    <p className="text-[14px] text-pip-mid leading-[1.75]">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
