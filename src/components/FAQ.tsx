import React, { useState } from 'react';

const FAQS = [
  {
    q: 'What is PiP Blocks Forex Trading Academy?',
    a: 'PiP Blocks Forex Trading Academy is a growing forex trading community focused on market analysis, mentorship, shared trading ideas and practical trader development.',
  },
  {
    q: 'What does the mentorship program cover?',
    a: 'The mentorship program covers 6 modules: Introduction to Forex, Market Structure, Storyline & Zone Selection, Liquidity Concepts, Entry Models (SNR Trendlines, TL Kiss, Entry Model), and Development & Management (Risk Management, Trading Psychology, Backtesting, Building a Trading Routine).',
  },
  {
    q: 'How much is the mentorship program?',
    a: 'The PiP Blocks Forex Mentorship Program is priced at $370. No refund policy applies. Please contact the team directly for full terms and conditions.',
  },
  {
    q: 'How can I join the Telegram community?',
    a: 'Visit https://t.me/pipblockfx or click any "Join Community" button on this website to access the PiP Blocks Telegram channel.',
  },
  {
    q: 'Do you provide market analysis and signals?',
    a: 'We share market observations, technical analysis, trade setups and trading ideas through our community channels on Telegram.',
  },
  {
    q: 'How do I register for a bootcamp?',
    a: 'Bootcamp registrations are managed directly by the PiP Blocks team. Contact us via WhatsApp at +233 53 813 2060 or through our Telegram channel. There is no online payment or checkout.',
  },
  {
    q: 'Do you provide financial advice?',
    a: 'PiP Blocks provides educational content, market analysis and trading ideas. This website does not provide personalised financial advice. Trading financial markets involves risk.',
  },
];

export const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" aria-label="Frequently asked questions" className="bg-white border-b border-pip-border">
      <div className="max-w-site mx-auto px-5 sm:px-8">

        {/* Label */}
        <div className="py-5 border-b border-pip-border">
          <span className="pip-label">08 — FAQ</span>
        </div>

        {/* Heading */}
        <div className="pt-9 pb-7 border-b border-pip-border">
          <h2
            className="font-display font-extrabold text-pip-charcoal"
            style={{
              fontSize: 'clamp(1.5rem, 2.3vw, 2.1rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
            }}
          >
            Frequently Asked Questions
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
                    <p className="text-[14px] text-pip-mid leading-[1.72]">{faq.a}</p>
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
