import React from 'react';
import { Section } from './Section';
import { SectionTitle } from './SectionTitle';
import { PawPrint, TreePine, Sparkles } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    id: 'dogrun',
    title: '安全なドッグラン',
    description: '他のお客様やワンちゃんを気にすることなく、愛犬を自由に遊ばせることができます。大型犬でも十分に走り回れる広さを確保し、足腰に優しい芝生を採用しています。',
    icon: PawPrint
  },
  {
    id: 'onsen',
    title: '豊富なサービス',
    description: '天然温泉でのリラックスタイムや、広々としたテラスでのバーベキュー、プールでの贅沢なひとときが、日常を忘れさせる特別な時間を演出する究極のリゾートです。',
    icon: Sparkles
  },
  {
    id: 'dining',
    title: '自然を楽しむ',
    description: '敷地内に広がる豊かな自然が、特別なリゾート体験を提供します。澄んだ沢での釣りや、木々の間を駆け回るリスたちとの出会い、春には満開の桜が彩る絶景を楽しむことができます。',
    icon: TreePine
  }
];

export const Features: React.FC = () => {
  return (
    <Section id="features" background="dark">
      <SectionTitle 
        title="久苑が選ばれる理由" 
        subtitle="Our Values" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {features.map((feature) => (
          <div key={feature.id} className="group relative bg-kuon-black p-8 border border-white/5 hover:border-kuon-gold/50 transition-colors duration-500">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <feature.icon size={80} className="text-kuon-gold" />
            </div>
            
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-kuon-dark border border-kuon-gold/30 text-kuon-gold group-hover:bg-kuon-gold group-hover:text-kuon-black transition-colors duration-300">
              <feature.icon size={32} />
            </div>
            
            <h3 className="text-xl font-serif font-bold text-white mb-4 tracking-wide group-hover:text-kuon-gold transition-colors">
              {feature.title}
            </h3>
            
            <p className="text-gray-400 font-sans text-sm leading-7 text-justify whitespace-pre-line">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};