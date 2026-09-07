import React from 'react';
import { Send, Instagram, Facebook, Video, ArrowUpRight } from 'lucide-react';
import { SOCIAL_DATA } from '../data/siteData';

export const Socials: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Send':
        return Send;
      case 'Instagram':
        return Instagram;
      case 'Facebook':
        return Facebook;
      case 'Video':
      default:
        return Video;
    }
  };

  return (
    <section id="contact" className="py-24 bg-pip-dark relative border-t border-pip-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold text-pip-red uppercase tracking-widest mb-3 block">
            STAY CONNECTED
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            FOLLOW PiP BLOCKS
          </h2>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOCIAL_DATA.map((item, idx) => {
            const Icon = getIcon(item.iconName);

            if (item.isComingSoon) {
              return (
                <div
                  key={idx}
                  className="bg-pip-card/50 border border-pip-border/60 rounded-xl p-6 opacity-60 cursor-not-allowed flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-pip-dark border border-pip-border flex items-center justify-center text-slate-500">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-pip-dark text-slate-400 border border-pip-border">
                        COMING SOON
                      </span>
                    </div>
                    <div className="text-xs font-mono font-bold uppercase text-slate-400">
                      {item.platform}
                    </div>
                    <div className="text-sm font-bold text-slate-400 mt-1">
                      {item.handle}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pip-card border border-pip-border hover:border-pip-red/40 rounded-xl p-6 transition-all duration-300 shadow-card hover:translate-y-[-2px] group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-pip-dark border border-pip-border group-hover:border-pip-red/50 flex items-center justify-center text-pip-red transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-pip-grey group-hover:text-pip-red transition-colors" />
                  </div>
                  <div className="text-xs font-mono font-bold uppercase text-pip-grey">
                    {item.platform}
                  </div>
                  <div className="text-base font-extrabold text-white mt-1 group-hover:text-pip-red transition-colors">
                    {item.handle}
                  </div>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};
