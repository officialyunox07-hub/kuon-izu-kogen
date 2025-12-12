import React from 'react';
import { Section } from './Section';
import { SectionTitle } from './SectionTitle';
import { Calendar, MapPin, Building2 } from 'lucide-react';

const plans = [
  {
    year: '2024年',
    description: '伊豆高原に5施設の土地を確保。建設計画策定、1棟目の建設開始。石垣島に11施設建設可能な土地の取得、開発許認可の合意獲得。',
    icon: MapPin,
    image: 'https://kuon-resort.com/wp-content/uploads/2025/10/16.png'
  },
  {
    year: '2025年',
    description: '伊豆高原の1棟完成、2棟目の建設開始予定。石垣島の開発計画の策定、年内に1棟目の建設着手予定。',
    icon: Building2,
    image: 'https://kuon-resort.com/wp-content/uploads/2025/10/2.png'
  },
  {
    year: '2026年',
    description: '伊豆高原サウナOPEN予定。伊豆高原に計2〜4号棟の建設開始予定。石垣島リゾート1〜6号棟完成予定。',
    icon: Building2,
    image: 'https://kuon-resort.com/wp-content/uploads/2025/10/4.png'
  },
  {
    year: '2028年',
    description: '石垣島全面OPEN、全国新規展開本格化。',
    icon: MapPin,
    image: 'https://kuon-resort.com/wp-content/uploads/2025/10/10-1.png'
  },
  {
    year: '2035年',
    description: '全国100棟体制確立。日本最大級の会員制リゾートネットワークへ。将来的にはバリ、プーケット等アジア進出も計画。',
    icon: Calendar,
    image: 'https://kuon-resort.com/wp-content/uploads/2025/02/countrywide4.png'
  }
];

export const DevelopmentPlan: React.FC = () => {
  return (
    <Section id="development-plan" background="dark">
      <SectionTitle 
        title="開発計画" 
        subtitle="2035年まで全国100棟体制を目指す段階的な拡張計画" 
      />
      
      <div className="max-w-5xl mx-auto">
        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-kuon-gold/50 via-kuon-gold to-kuon-gold/50 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-16 md:space-y-24">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row items-stretch gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-kuon-gold border-4 border-kuon-black transform md:-translate-x-1/2 z-10 shadow-[0_0_20px_rgba(184,161,121,0.5)]"></div>
                
                {/* Content Card */}
                <div className={`w-full md:w-[45%] mx-auto md:mx-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="group relative bg-kuon-black p-8 md:p-10 border border-white/5 hover:border-kuon-gold/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(184,161,121,0.2)] h-[342px]">
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                      <plan.icon size={100} className="text-kuon-gold" />
                    </div>
                    
                    <div className="relative z-10">
                      <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-kuon-dark border-2 border-kuon-gold/30 text-kuon-gold group-hover:bg-kuon-gold group-hover:text-kuon-black group-hover:border-kuon-gold transition-all duration-300 group-hover:scale-110">
                        <plan.icon size={32} />
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-kuon-gold mb-4 tracking-wider group-hover:text-kuon-gold transition-colors">
                        {plan.year}
                      </h3>
                      
                      <p className="text-gray-300 font-sans text-sm md:text-base leading-7 text-justify">
                        {plan.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Image */}
                <div className={`w-full md:w-[45%] mx-auto md:mx-0 flex ${
                  index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'
                }`}>
                  <div className={`relative overflow-hidden rounded-sm border border-white/5 group w-full h-[342px] development-plan-image-${plan.year.replace('年', '')}`}>
                    <img 
                      src={plan.image} 
                      alt={plan.year}
                      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 development-plan-img-${plan.year.replace('年', '')}`}
                    />
                    <div className={`absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 development-plan-overlay-${plan.year.replace('年', '')}`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

