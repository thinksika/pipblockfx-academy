import React from 'react';

export const About: React.FC = () => (
  <section id="about" aria-label="About PiP Blocks" className="bg-white border-b border-pip-border">
    <div className="max-w-site mx-auto px-5 sm:px-8">

      {/* Label strip */}
      <div className="py-5 border-b border-pip-border">
        <span className="pip-label">01 — About PiP Blocks</span>
      </div>

      {/* Editorial two-column */}
      <div className="grid grid-cols-1 lg:grid-cols-12 py-14 lg:py-20">

        {/* Left — heading */}
        <div className="lg:col-span-5 lg:pr-16 lg:border-r lg:border-pip-border mb-8 lg:mb-0">
          <h2
            className="font-display font-extrabold text-pip-charcoal"
            style={{
              fontSize: 'clamp(1.8rem, 2.7vw, 2.6rem)',
              lineHeight: '1.07',
              letterSpacing: '-0.025em',
            }}
          >
            BUILT AROUND
            <br />THE MARKET.
          </h2>
        </div>

        {/* Right — body */}
        <div className="lg:col-span-7 lg:pl-16 flex flex-col justify-center">
          <p className="text-[15.5px] text-pip-mid leading-[1.75] mb-5">
            PiP Blocks Forex Trading Academy is a growing forex trading community
            built around market analysis, mentorship, shared trading ideas and
            practical development.
          </p>
          <p className="text-[15.5px] text-pip-mid leading-[1.75]">
            Our goal is to create an environment where traders can engage with
            the market, develop their understanding and grow with discipline.
          </p>
        </div>

      </div>

      {/* Metadata strip */}
      <div className="border-t border-pip-border py-5 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-0 sm:divide-x sm:divide-pip-border">
        {[
          { l: 'Community Focus', v: 'Forex Markets'          },
          { l: 'Primary Channel', v: 'Telegram — @pipblcksfxhuz' },
          { l: 'Core Mission',    v: 'Education & Development' },
        ].map(item => (
          <div key={item.l} className="sm:px-7 first:pl-0 last:pr-0">
            <div className="pip-label mb-1">{item.l}</div>
            <div className="text-[13.5px] font-semibold text-pip-charcoal">{item.v}</div>
          </div>
        ))}
      </div>

    </div>
  </section>
);
