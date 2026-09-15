import React from 'react';
import { TELEGRAM_COMMUNITY_URL, WHATSAPP_URL } from '../data/siteData';
import { ImagePlaceholder } from './ImagePlaceholder';

/**
 * Testimonials — placeholder structure.
 * DO NOT invent fake testimonials, fake names, or fake photos.
 * Replace these placeholders with real testimonials from real community members when available.
 */
export const Testimonials: React.FC = () => (
  <section id="testimonials" aria-label="Community testimonials" className="bg-white border-b border-pip-border">
    <div className="max-w-site mx-auto px-5 sm:px-8">

      {/* Label row */}
      <div className="py-5 border-b border-pip-border">
        <span className="pip-label">09 — Community</span>
      </div>

      {/* Heading + copy */}
      <div className="pt-10 pb-8 sm:pt-12 border-b border-pip-border grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-6">
          <h2
            className="font-display font-extrabold text-pip-charcoal"
            style={{
              fontSize: 'clamp(1.55rem, 2.8vw, 2.4rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.025em',
            }}
          >
            The Community{' '}
            <span className="text-pip-red">Speaks.</span>
          </h2>
        </div>
        <div className="lg:col-span-6 lg:pl-10 flex items-end">
          <p className="text-[14px] text-pip-mid leading-relaxed max-w-md">
            Real feedback from real traders in the PiP Blocks community.
            These will be updated as the community grows.
          </p>
        </div>
      </div>

      {/* Testimonial placeholders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-8 pb-12 gap-6">
        {[
          'TESTIMONIAL_01 — Replace with real community member feedback',
          'TESTIMONIAL_02 — Replace with real community member feedback',
          'TESTIMONIAL_03 — Replace with real community member feedback',
        ].map((label, i) => (
          <div
            key={i}
            className="border border-pip-border p-6 flex flex-col gap-4"
            aria-label={label}
          >
            {/* Avatar placeholder */}
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full bg-pip-surface border border-pip-border flex items-center justify-center shrink-0"
                aria-hidden="true"
              >
                <span className="pip-label" style={{ fontSize: '8px', color: '#E53514' }}>IMG</span>
              </div>
              <div>
                <div className="h-2.5 w-24 bg-pip-surface rounded mb-1" aria-hidden="true" />
                <div className="h-2 w-16 bg-pip-surface rounded" aria-hidden="true" />
              </div>
            </div>
            {/* Quote placeholder */}
            <div className="space-y-1.5">
              <div className="h-2 w-full bg-pip-surface rounded" aria-hidden="true" />
              <div className="h-2 w-5/6 bg-pip-surface rounded" aria-hidden="true" />
              <div className="h-2 w-4/6 bg-pip-surface rounded" aria-hidden="true" />
            </div>
            {/* Label */}
            <div className="text-[10px] text-pip-muted border-t border-pip-border pt-3">
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Screenshot placeholder row */}
      <div className="pb-12">
        <div className="pip-label mb-4">Community Screenshot Placeholders</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/*
           * These are placeholders for real Telegram or WhatsApp community screenshots.
           * Replace with actual screenshots that show member activity.
           */}
          <ImagePlaceholder
            label="COMMUNITY_SCREENSHOT_01 — Replace with Telegram community screenshot"
            aspectRatio="16/9"
          />
          <ImagePlaceholder
            label="COMMUNITY_SCREENSHOT_02 — Replace with Telegram community screenshot"
            aspectRatio="16/9"
          />
        </div>
        <p className="text-[11px] text-pip-muted mt-3 border-l-2 border-pip-border pl-3">
          Replace placeholders above with real community screenshots from Telegram or WhatsApp.
          Do not fabricate testimonials.
        </p>
      </div>

      {/* CTA strip */}
      <div className="border-t border-pip-border py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="text-[15px] font-semibold text-pip-charcoal mb-0.5">
            Join 1,400+ traders in the community.
          </div>
          <div className="text-[13px] text-pip-mid">Free to join on Telegram.</div>
        </div>
        <div className="flex gap-3 flex-wrap">
          <a
            href={TELEGRAM_COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-pip-charcoal hover:bg-pip-red text-white text-[11.5px] font-semibold tracking-[0.1em] uppercase py-[11px] px-[22px] rounded-[8px] border border-pip-charcoal hover:border-pip-red transition-all duration-200"
            aria-label="Join the PiP Blocks Telegram community"
          >
            Join Telegram →
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent text-pip-charcoal text-[11.5px] font-semibold tracking-[0.1em] uppercase py-[10.5px] px-[22px] rounded-[8px] border border-[#CCCCCA] hover:border-pip-charcoal transition-all duration-200"
            aria-label="Contact PiP Blocks on WhatsApp"
          >
            Chat on WhatsApp →
          </a>
        </div>
      </div>

    </div>
  </section>
);
