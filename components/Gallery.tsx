import React from 'react';
import { Section } from './Section';
import { SectionTitle } from './SectionTitle';
import { GalleryImage } from '../types';

const images: GalleryImage[] = [
  { 
    id: '1', 
    src: 'https://kuon-resort.com/wp-content/uploads/2025/10/19.png', 
    alt: '施設外観', 
    caption: '', 
    span: true 
  },
  { 
    id: '2', 
    src: 'https://kuon-resort.com/wp-content/uploads/2025/10/8.png', 
    alt: '客室', 
    caption: '' 
  },
  { 
    id: '3', 
    src: 'https://kuon-resort.com/wp-content/uploads/2025/10/4.png', 
    alt: '外観', 
    caption: '' 
  },
  { 
    id: '4', 
    src: 'https://kuon-resort.com/wp-content/uploads/2025/10/7.png', 
    alt: 'バスルーム', 
    caption: '' 
  },
  { 
    id: '5', 
    src: 'https://kuon-resort.com/wp-content/uploads/2025/10/11.png', 
    alt: 'キッチン', 
    caption: '' 
  },
  { 
    id: '6', 
    src: 'https://kuon-resort.com/wp-content/uploads/2025/10/1.png', 
    alt: 'ドッグラン', 
    caption: '', 
    span: true 
  },
];

export const Gallery: React.FC = () => {
  return (
    <Section id="gallery" background="black">
      <SectionTitle 
        title="施設ギャラリー" 
        subtitle="Gallery" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-4">
        {images.map((img) => {
          return (
          <div 
            key={img.id} 
            className={`relative overflow-hidden cursor-default ${img.span ? 'md:col-span-2' : 'md:col-span-1'} row-span-1 ${img.caption ? 'group' : ''}`}
          >
            <img 
              src={img.src} 
              alt={img.alt} 
              className={`w-full h-full object-cover ${img.caption ? 'transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100' : 'opacity-100'}`}
            />
            {img.caption && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-serif tracking-widest text-lg border-b border-kuon-gold pb-1">
                  {img.caption}
                </span>
              </div>
            )}
          </div>
          );
        })}
      </div>
    </Section>
  );
};