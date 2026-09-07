import React from 'react';

const STEPS = [
  {
    num:   '01',
    title: 'CHOOSE',
    body:  'Choose the service or program you\'re interested in.',
  },
  {
    num:   '02',
    title: 'CONNECT',
    body:  'Contact PiP Blocks directly through Telegram or WhatsApp.',
  },
  {
    num:   '03',
    title: 'GET STARTED',
    body:  'Receive the necessary details and next steps from the team.',
  },
];

export const HowItWorks: React.FC = () => (
  <section id="how-it-works" aria-label="How to get started" className="bg-pip-warm-grey border-b border-pip-border">
    <div className="max-w-site mx-auto px-5 sm:px-8">

      {/* Label */}
      <div className="py-5 border-b border-pip-border">
        <span className="pip-label">07 — Process</span>
      </div>

      {/* Horizontal steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-pip-border border-t border-pip-border mt-0">
        {STEPS.map(step => (
          <div key={step.num} className="py-10 md:px-10 first:pl-0 last:pr-0">
            <div
              className="font-mono font-bold mb-6 leading-none"
              style={{ fontSize: '2.4rem', color: '#DDDDDB', letterSpacing: '-0.02em' }}
            >
              {step.num}
            </div>
            <div
              className="font-bold uppercase text-pip-charcoal mb-3"
              style={{ fontSize: '12.5px', letterSpacing: '0.08em' }}
            >
              {step.title}
            </div>
            <p className="text-[14px] text-pip-mid leading-[1.65]">
              {step.body}
            </p>
          </div>
        ))}
      </div>

    </div>
  </section>
);
