import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'black' | 'dark';
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  children, 
  className = '', 
  background = 'black' 
}) => {
  const bgClass = background === 'black' ? 'bg-kuon-black' : 'bg-kuon-dark';
  
  return (
    <section id={id} className={`py-20 md:py-32 px-6 md:px-12 lg:px-20 ${bgClass} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};