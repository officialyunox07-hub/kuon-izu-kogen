import React from 'react';
import { Section } from './Section';
import { SectionTitle } from './SectionTitle';
import { Infinity, Calendar, TrendingUp, User, Building2, Briefcase } from 'lucide-react';

const features = [
  {
    title: '半永久的な所有権',
    description: '施設が存続する限り半永久的に所有可能。贈与・相続が可能なため、資産として継承できます。',
    icon: Infinity
  },
  {
    title: '利用制限',
    description: '会員権1口につき年間5泊までご利用いただけます。5口の場合は年間25泊、10口の場合は年間50泊までご利用いただけます。',
    icon: Calendar
  },
  {
    title: '流動性の確保',
    description: '公式HPを通じて中古売買が可能で流動性があります。会員間の安全・安心な取引環境をサポート。',
    icon: TrendingUp
  }
];

const taxBenefits = [
  {
    title: '個人保有の場合',
    icon: User,
    items: [
      '権利型会員権を個人資産として保有',
      '売却時は譲渡所得課税（長期保有で軽減税率適用）',
      '家族への贈与・相続資産として活用可能'
    ]
  },
  {
    title: '法人保有の場合',
    icon: Building2,
    items: [
      '権利型会員権は会員権として資産に計上',
      '保証金は毎月のシステム利用料と相殺され費用計上が可能',
      '家族への贈与・相続資産として活用可能'
    ]
  },
  {
    title: '個人事業主の場合',
    icon: Briefcase,
    items: [
      '事業関連性の立証で一部経費計上の可能性',
      '接待・会議利用での事業経費としての活用'
    ]
  }
];

export const MembershipFeatures: React.FC = () => {
  return (
    <Section id="membership-features" background="dark">
      {/* 権利型会員権の特徴 */}
      <SectionTitle 
        title="権利型会員権の特徴" 
        subtitle="Membership Features" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-20 md:mb-32">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="group relative bg-kuon-black p-8 md:p-10 border border-white/5 hover:border-kuon-gold/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(184,161,121,0.2)]"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <feature.icon size={100} className="text-kuon-gold" />
            </div>
            
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-kuon-dark border-2 border-kuon-gold/30 text-kuon-gold group-hover:bg-kuon-gold group-hover:text-kuon-black group-hover:border-kuon-gold transition-all duration-300 group-hover:scale-110">
              <feature.icon size={32} />
            </div>
            
            <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-4 tracking-wide group-hover:text-kuon-gold transition-colors">
              {feature.title}
            </h3>
            
            <p className="text-gray-300 font-sans text-sm md:text-base leading-7 text-justify">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* 税務・経理上のメリット */}
      <SectionTitle 
        title="税務・経理上のメリット" 
        subtitle="Tax & Accounting Benefits" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {taxBenefits.map((benefit, index) => (
          <div 
            key={index}
            className="group relative bg-kuon-black p-8 md:p-10 border border-white/5 hover:border-kuon-gold/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(184,161,121,0.2)]"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <benefit.icon size={100} className="text-kuon-gold" />
            </div>
            
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-kuon-dark border-2 border-kuon-gold/30 text-kuon-gold group-hover:bg-kuon-gold group-hover:text-kuon-black group-hover:border-kuon-gold transition-all duration-300 group-hover:scale-110">
              <benefit.icon size={32} />
            </div>
            
            <h3 className="text-xl md:text-2xl font-serif font-bold text-kuon-gold mb-6 tracking-wide">
              {benefit.title}
            </h3>
            
            <ul className="space-y-3">
              {benefit.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-3">
                  <span className="text-kuon-gold mt-1 flex-shrink-0">・</span>
                  <span className="text-gray-300 font-sans text-sm md:text-base leading-7">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

