import React from 'react';
import { Section } from './Section';
import { SectionTitle } from './SectionTitle';
import { Users, Briefcase, TrendingUp } from 'lucide-react';

const concerns = [
  {
    id: 'family',
    title: 'ファミリー層',
    description: '大型犬も一緒に泊まれるホテルがなかなか見つからない',
    icon: Users
  },
  {
    id: 'business',
    title: '経営者層',
    description: '人脈が活かせる高収益の\n新しいビジネスを探している',
    icon: Briefcase
  },
  {
    id: 'investor',
    title: '投資家層',
    description: '不動産投資・株式投資に代わる\n新しい投資対象を探している',
    icon: TrendingUp
  }
];

export const Concerns: React.FC = () => {
  return (
    <Section id="concerns" background="dark">
      <SectionTitle 
        title="こんなお困りはございませんか？" 
        subtitle="Concerns" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
        {concerns.map((concern) => (
          <div 
            key={concern.id} 
            className="group relative bg-kuon-black p-10 border border-white/5 hover:border-kuon-gold/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(184,161,121,0.2)]"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <concern.icon size={100} className="text-kuon-gold" />
            </div>
            
            <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-kuon-dark border-2 border-kuon-gold/30 text-kuon-gold group-hover:bg-kuon-gold group-hover:text-kuon-black group-hover:border-kuon-gold transition-all duration-300 group-hover:scale-110">
              <concern.icon size={40} />
            </div>
            
            <h3 className="text-2xl font-serif font-bold text-white mb-6 tracking-wider group-hover:text-kuon-gold transition-colors">
              {concern.title}
            </h3>
            
            <p className="text-gray-300 font-sans text-base leading-8 whitespace-pre-line">
              {concern.description}
            </p>
          </div>
        ))}
      </div>

      {/* Solution Section */}
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-kuon-black via-kuon-dark to-kuon-black p-12 md:p-16 border border-kuon-gold/20 rounded-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-kuon-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-kuon-gold mb-6 tracking-widest">
              久苑リゾート会員権が解決できます！
            </h3>
            
            <p className="text-white/90 font-sans text-lg md:text-xl leading-relaxed mb-8 tracking-wide">
              家族との時間、ビジネスの成功、資産価値の向上<br />
              すべてを手に入れるリゾート会員権で新しい人生をスタートしましょう。
            </p>
            
            <div className="w-24 h-[1px] bg-kuon-gold mx-auto opacity-60"></div>
          </div>
        </div>
      </div>
    </Section>
  );
};

