import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  align?: 'center' | 'left';
  titleClassName?: string;
  subtitleClassName?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, align = 'center', titleClassName, subtitleClassName }) => {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  const lineClass = align === 'center' ? 'mx-auto' : '';
  const defaultTitleClass = "text-3xl md:text-5xl font-serif font-medium text-white mb-6";
  const defaultSubtitleClass = "block text-kuon-gold font-serif text-lg md:text-xl italic mb-3 tracking-wider";

  return (
    <div className={`mb-16 ${alignClass}`}>
      <h2 className={titleClassName || defaultTitleClass}>
        {title}
      </h2>
      {subtitle && (
        <span className={subtitleClassName || defaultSubtitleClass}>
          {subtitle}
        </span>
      )}
      <div className={`w-16 h-0.5 bg-kuon-gold ${lineClass}`} />
    </div>
  );
};