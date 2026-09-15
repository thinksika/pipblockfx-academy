import React from 'react';

interface ImagePlaceholderProps {
  label: string;
  aspectRatio?: string; // e.g. '16/9', '4/3', '1/1', '3/4'
  className?: string;
}

/**
 * ImagePlaceholder — swap <ImagePlaceholder> with <img src="..." /> when real images arrive.
 * The label string tells you exactly which asset goes here.
 */
export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  label,
  aspectRatio = '16/9',
  className = '',
}) => (
  <div
    className={`relative overflow-hidden bg-pip-surface border border-pip-border flex items-center justify-center ${className}`}
    style={{ aspectRatio }}
    aria-label={label}
    role="img"
  >
    {/* Crosshair lines */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-0 right-0 h-px bg-pip-border" />
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-pip-border" />
    </div>
    {/* Label */}
    <div className="relative z-10 text-center px-4">
      <div
        className="font-mono uppercase mb-1"
        style={{ fontSize: '9.5px', letterSpacing: '0.14em', color: '#E53514', fontWeight: 700 }}
      >
        IMAGE PLACEHOLDER
      </div>
      <div
        className="font-semibold text-pip-charcoal"
        style={{ fontSize: '11px', letterSpacing: '0.06em' }}
      >
        {label}
      </div>
    </div>
    {/* Corner brackets */}
    <span className="absolute top-3 left-3 w-5 h-5 border-t border-l border-pip-red/40" aria-hidden="true" />
    <span className="absolute top-3 right-3 w-5 h-5 border-t border-r border-pip-red/40" aria-hidden="true" />
    <span className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-pip-red/40" aria-hidden="true" />
    <span className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-pip-red/40" aria-hidden="true" />
  </div>
);
