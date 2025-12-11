import React from 'react';
import { Section } from './Section';
import { SectionTitle } from './SectionTitle';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: '1',
    name: 'M. Tanaka様',
    role: '会員権購入者',
    image: 'https://picsum.photos/100/100?random=1',
    content: '投資商品は数多くありますが、これほど「使いながら資産を増やせる」商品は他にありません。家族との時間、ビジネスでの成果、そして将来の資産価値向上。すべてが手に入る理想的な投資です。',
    highlight: '使いながら資産を増やせる'
  },
  {
    id: '2',
    name: 'S. Suzuki様',
    role: '会員権購入者',
    image: 'https://picsum.photos/100/100?random=2',
    content: '2,000万円で購入した会員権が、10年後には6,500万円での売却が見込まれますが、それ以上に利用価値が素晴らしいんです。毎年思いっきり遊べて、将来的には高値で売却する選択肢もある。',
    highlight: '利用価値が素晴らしい'
  },
  {
    id: '3',
    name: 'K. Sato様',
    role: '会員権購入者',
    image: 'https://picsum.photos/100/100?random=3',
    content: '年間24泊を家族旅行で利用し、さらに24泊を取引先の接待に活用しています。接待で1口成約すれば40万円の収益になりますし、結婚記念日の2泊利用では妻に特別な体験をプレゼントできています。',
    highlight: '家族旅行とビジネス活用'
  }
];

export const CustomerVoices: React.FC = () => {
  return (
    <Section id="customer-voices" background="dark">
      <SectionTitle 
        title="ご購入者の声" 
        subtitle="Customer Voices" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className="group relative bg-kuon-black p-8 md:p-10 border border-white/5 hover:border-kuon-gold/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(184,161,121,0.2)] rounded-sm"
          >
            <Quote className="absolute top-6 right-6 text-kuon-gold/20 group-hover:text-kuon-gold/30 transition-colors" size={48} />
            
            <div className="relative z-10">
              {/* Profile Section */}
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full border-2 border-kuon-gold/50 object-cover"
                />
                <div>
                  <p className="text-white font-serif font-bold text-base">
                    {testimonial.name}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-300 font-sans text-sm md:text-base leading-relaxed text-justify">
                {testimonial.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

