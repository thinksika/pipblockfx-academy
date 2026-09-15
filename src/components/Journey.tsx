import React from 'react';
import { ImagePlaceholder } from './ImagePlaceholder';

/**
 * Journey — "Our Journey / The Real PiP Blocks"
 * Warm-grey background to contrast the white sections around it.
 * Features a large editorial image placeholder + text copy.
 */
export const Journey: React.FC = () => (
  <section
    id="journey"
    aria-label="Our journey"
    className="bg-pip-warm-grey border-b border-pip-border"
  >
    <div className="max-w-site mx-auto px-5 sm:px-8">

      {/* Section label row */}
      <div className="py-5 border-b border-pip-border">
        <span className="pip-label">02 — Our Journey</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 pt-10 pb-14 sm:pt-14 sm:pb-16 gap-10 lg:gap-0">

        {/* Left — Large image placeholder */}
        <div className="lg:col-span-6 lg:pr-10 lg:border-r lg:border-pip-border flex flex-col gap-4">
          {/*
           * SEMINAR_IMAGE_01 — Replace with real PiP Blocks seminar / event photo
           * Suggested: A wide photo of a live PiP Blocks event, seminar, or session.
           */}
          <ImagePlaceholder
            label="SEMINAR_IMAGE_01 — Live event / seminar photo"
            aspectRatio="4/3"
            className="w-full"
          />
          <div className="grid grid-cols-2 gap-4">
            {/*
             * SEMINAR_IMAGE_02 — Replace with second event / seminar photo
             * SEMINAR_IMAGE_03 — Replace with third event / community photo
             */}
            <ImagePlaceholder label="SEMINAR_IMAGE_02" aspectRatio="4/3" />
            <ImagePlaceholder label="SEMINAR_IMAGE_03" aspectRatio="4/3" />
          </div>
        </div>

        {/* Right — Copy */}
        <div className="lg:col-span-6 lg:pl-12 flex flex-col justify-center">
          <h2
            className="font-display font-extrabold text-pip-charcoal mb-6"
            style={{
              fontSize: 'clamp(1.6rem, 2.8vw, 2.5rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.025em',
            }}
          >
            Where PiP Blocks{' '}
            <span className="text-pip-red">Began.</span>
          </h2>

          <div className="space-y-4 text-[14.5px] text-pip-mid leading-[1.78] max-w-md mb-8">
            <p>
              PiP Blocks started as a small community of traders determined to cut through
              the noise of the forex industry. No guaranteed profits, no gimmicks —
              just a focused approach to learning how markets actually work.
            </p>
            <p>
              From our first shared analysis to our live bootcamps and structured mentorship
              program, PiP Blocks has grown into a serious trading education community.
              Traders learn, test, and develop — together.
            </p>
            <p>
              We host regular seminars, training sessions, and community events. Real learning
              happens in real rooms, with real feedback.
            </p>
          </div>

          {/* Three key values */}
          <div className="space-y-0 border-t border-pip-border">
            {[
              { n: '01', label: 'Structured Education', desc: 'Every concept taught in a logical, progressive sequence.' },
              { n: '02', label: 'Community First', desc: 'Traders grow faster together than in isolation.' },
              { n: '03', label: 'Practical. Not Theoretical.', desc: 'We trade what we teach, and we teach what we trade.' },
            ].map((v) => (
              <div key={v.n} className="flex items-start gap-5 py-4 border-b border-pip-border last:border-b-0">
                <span className="pip-label shrink-0 w-6" style={{ color: '#E53514', fontSize: '9px' }}>{v.n}</span>
                <div>
                  <div className="text-[13px] font-semibold text-pip-charcoal mb-0.5">{v.label}</div>
                  <div className="text-[13px] text-pip-mid leading-relaxed">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </section>
);
