import React from 'react';
import { Section } from './Section';
import { SectionTitle } from './SectionTitle';
import { Button } from './Button';
import { PawPrint, Briefcase, TrendingUp } from 'lucide-react';

export const Concept1: React.FC = () => {
  return (
    <Section id="concept1" background="black">
      {/* Header Section - Centered */}
      <div className="flex flex-col items-center text-center mb-24 md:mb-32 animate-fade-in-up">
        
        {/* New Button with increased margin */}
        <div className="mb-20">
           <p className="text-kuon-gold font-serif text-xl md:text-2xl mb-6 tracking-widest">
             会員権募集中
           </p>
           <Button 
             variant="outline" 
             className="text-base px-10 py-4 border-white/40 text-white hover:border-kuon-gold hover:bg-kuon-gold hover:text-kuon-black min-w-[280px]"
             onClick={() => window.open('https://lin.ee/kT3TzVC', '_blank')}
           >
             個別説明会はこちら
           </Button>
        </div>

        {/* Lead Text - Font size reduced and bottom margin increased */}
        <h2 className="text-[15px] md:text-2xl font-serif text-white leading-loose tracking-widest mb-20">
          愛犬と共に、<br />
          ホテルでもなく別荘でもない、<br />
          「第二の我が家」のような<br />
          人生を彩る時間を手に入れませんか。
        </h2>
        <div className="w-1 bg-kuon-gold h-12 mx-auto opacity-50"></div>
      </div>

      {/* Concerns Section */}
      <div className="mt-12 md:mt-32">
        <SectionTitle 
          title="こんなお困りはございませんか？" 
          subtitle="Concerns" 
          titleClassName="text-[20px] md:text-5xl font-serif font-medium text-white mb-6"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16 mt-16">
          <div className="group relative bg-kuon-black p-10 border border-white/5 hover:border-kuon-gold/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(184,161,121,0.2)]">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <PawPrint size={100} className="text-kuon-gold" />
            </div>
            
            <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-kuon-dark border-2 border-kuon-gold/30 text-kuon-gold group-hover:bg-kuon-gold group-hover:text-kuon-black group-hover:border-kuon-gold transition-all duration-300 group-hover:scale-110">
              <PawPrint size={40} />
            </div>
            
            <h3 className="text-2xl font-serif font-bold text-white mb-6 tracking-wider group-hover:text-kuon-gold transition-colors">
              ファミリー層
            </h3>
            
            <p className="text-gray-300 font-sans text-base leading-8 whitespace-pre-line">
              愛犬も一緒に泊まれるホテルがなかなか見つからない
            </p>
          </div>

          <div className="group relative bg-kuon-black p-10 border border-white/5 hover:border-kuon-gold/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(184,161,121,0.2)]">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Briefcase size={100} className="text-kuon-gold" />
            </div>
            
            <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-kuon-dark border-2 border-kuon-gold/30 text-kuon-gold group-hover:bg-kuon-gold group-hover:text-kuon-black group-hover:border-kuon-gold transition-all duration-300 group-hover:scale-110">
              <Briefcase size={40} />
            </div>
            
            <h3 className="text-2xl font-serif font-bold text-white mb-6 tracking-wider group-hover:text-kuon-gold transition-colors">
              経営者層
            </h3>
            
            <p className="text-gray-300 font-sans text-base leading-8 whitespace-pre-line">
              人脈が活かせる高収益の新しいビジネスを探している
            </p>
          </div>

          <div className="group relative bg-kuon-black p-10 border border-white/5 hover:border-kuon-gold/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(184,161,121,0.2)]">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <TrendingUp size={100} className="text-kuon-gold" />
            </div>
            
            <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-kuon-dark border-2 border-kuon-gold/30 text-kuon-gold group-hover:bg-kuon-gold group-hover:text-kuon-black group-hover:border-kuon-gold transition-all duration-300 group-hover:scale-110">
              <TrendingUp size={40} />
            </div>
            
            <h3 className="text-2xl font-serif font-bold text-white mb-6 tracking-wider group-hover:text-kuon-gold transition-colors">
              投資家層
            </h3>
            
            <p className="text-gray-300 font-sans text-base leading-8 whitespace-pre-line">
              不動産投資・株式投資に代わる「新しい投資対象」を探している
            </p>
          </div>
        </div>

        {/* Solution Section */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-kuon-black via-kuon-dark to-kuon-black p-12 md:p-16 border border-kuon-gold/20 rounded-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-kuon-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-4xl font-serif font-bold text-kuon-gold mb-6 tracking-widest">
                久苑リゾート会員権が解決できます
              </h3>
              
              <p className="text-white/90 font-sans text-base md:text-xl leading-relaxed mb-8 tracking-wide">
                家族との時間、ビジネスの成功、資産価値の向上<br />
                すべてを手に入れるリゾート会員権で新しい人生をスタートしましょう。
              </p>
              
              <div className="w-24 h-[1px] bg-kuon-gold mx-auto opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

