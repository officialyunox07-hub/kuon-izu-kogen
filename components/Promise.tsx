import React from 'react';
import { Section } from './Section';
import { SectionTitle } from './SectionTitle';
import { Star } from 'lucide-react';

const sections = [
  {
    id: 'resort',
    title: '最高のリゾート体験を届けたい',
    icon: Star,
    content: '私たちが目指すのは、最高のリゾート体験をお届けすることです。\n\n疲れた心を癒し、家族の絆を深め、新しい明日への活力を生み出す場所。\nそんな特別な体験を、多くの方々に提供したい。\n高級リゾートでしか味わえなかった感動を、もっと身近な価格で実現したい。\n\n今、日本経済は冷え込み、多くの人が未来に不安を抱えています。暗いニュースばかりが流れる中で、家族の絆、夫婦の絆が試される時代です。\n\nだからこそ、私は決意しました。人生をかけて、みんなに喜ばれる何かを残したい。それも、一部の人間だけのものではなく、みんなの手が届く価格で。\n\n久苑グループは、単なるビジネスではありません。一人の父親として、一人の夫として、そして一人の日本人として、未来への希望を形にした想いの結晶なのです。\n\nみんなが笑顔になれる場所を作りたい。\n家族の絆を深められる時間を提供したい。\n手の届く価格で、最高の思い出を届けたい。\n\nこれが、久苑グループに込めた私の想いです。'
  }
];

export const Promise: React.FC = () => {
  return (
    <Section id="promise" background="black" className="pb-12 md:pb-20">
      <SectionTitle 
        title="久苑グループ創業者の想い" 
        subtitle="" 
        titleClassName="text-2xl md:text-5xl font-serif font-medium text-white mb-6"
      />
      
      <div className="max-w-5xl mx-auto space-y-10 md:space-y-16">
        {sections.map((section, index) => (
          <div 
            key={section.id}
            className="group relative"
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Icon Section */}
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-kuon-dark border-2 border-kuon-gold/30 text-kuon-gold group-hover:bg-kuon-gold group-hover:text-kuon-black group-hover:border-kuon-gold transition-all duration-300 group-hover:scale-110">
                  <section.icon size={32} />
                </div>
              </div>
              
              {/* Content Section */}
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-serif font-bold text-kuon-gold mb-4 tracking-wider">
                  {section.title}
                </h3>
                <div className="bg-kuon-black border border-white/5 p-6 md:p-8 rounded-sm">
                  <div className="space-y-6 mb-8">
                    {/* オープニング */}
                    <p className="text-white font-serif text-xl md:text-2xl leading-relaxed mb-6">
                      私たちが目指すのは、<br />
                      <span className="text-kuon-gold font-bold text-2xl md:text-3xl">最高のリゾート体験</span>をお届けすることです。
                    </p>
                    
                    {/* 説明文 */}
                    {/* スマホ用 */}
                    <p className="block md:hidden text-gray-300 font-sans text-sm leading-8 mb-6">
                      疲れた心を癒し、<span className="text-white font-semibold">新しい明日への活力</span>を生み出す場所。そんな<span className="text-kuon-gold font-semibold">特別な体験</span>を、多くの方々に提供したい。<br /><br />
                      <span className="text-kuon-gold font-semibold">高級リゾート</span>でしか味わえなかった感動を、<span className="text-white font-semibold">もっと身近な価格</span>で実現したい。
                    </p>
                    {/* デスクトップ用 */}
                    <p className="hidden md:block text-gray-300 font-sans text-base md:text-lg leading-8 mb-6">
                      疲れた心を癒し、<span className="text-white font-semibold">新しい明日への活力</span>を生み出す場所。<br />
                      そんな<span className="text-kuon-gold font-semibold">特別な体験</span>を、多くの方々に提供したい。<br />
                      <span className="text-kuon-gold font-semibold">高級リゾート</span>でしか味わえなかった感動を、<span className="text-white font-semibold">もっと身近な価格</span>で実現したい。
                    </p>
                    
                    {/* 決意 */}
                    <div className="hidden md:block bg-gradient-to-r from-kuon-gold/10 via-transparent to-kuon-gold/10 border-l-2 border-kuon-gold/30 pl-6 py-4 mb-6">
                      <p className="text-white font-serif text-lg md:text-xl leading-relaxed mb-3">
                        <span className="text-kuon-gold font-bold text-[15px] md:text-2xl">だからこそ、私は決意しました。</span>
                      </p>
                      <p className="text-white font-serif text-[15px] md:text-lg leading-relaxed mb-2">
                        人生をかけて、<span className="text-kuon-gold font-semibold">みんなに喜ばれる何か</span>を残したい。
                      </p>
                      <p className="text-kuon-gold font-serif text-[15px] md:text-xl font-bold italic">
                        それも、一部の人間だけのものではなく、みんなの手が届く価格で。
                      </p>
                    </div>
                    
                    {/* 3つの目標 */}
                    <div className="space-y-4 pt-6 pb-4">
                      <div className="flex items-start gap-3">
                        <span className="text-kuon-gold font-serif text-2xl md:text-3xl font-bold mt-1">・</span>
                        <p className="text-kuon-gold font-serif text-lg md:text-xl font-bold tracking-wider flex-1">
                          <span className="text-white">みんなが</span>笑顔になれる場所を作りたい。
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-kuon-gold font-serif text-2xl md:text-3xl font-bold mt-1">・</span>
                        <p className="text-kuon-gold font-serif text-lg md:text-xl font-bold tracking-wider flex-1">
                          <span className="text-white">家族の絆を</span>深められる時間を提供したい。
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-kuon-gold font-serif text-2xl md:text-3xl font-bold mt-1">・</span>
                        <p className="text-kuon-gold font-serif text-lg md:text-xl font-bold tracking-wider flex-1">
                          <span className="text-white">手の届く価格で、</span>最高の思い出を届けたい。
                        </p>
                      </div>
                    </div>
                    
                    {/* まとめ */}
                    <div className="text-center pt-8 border-t border-kuon-gold/30">
                      <p className="text-white font-serif text-lg md:text-2xl font-medium mb-2">
                        これが、<span className="text-kuon-gold font-bold text-xl md:text-3xl">久苑グループ</span>に込めた私の想いです。
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-kuon-gold/30">
                    <p className="text-kuon-gold font-serif text-xl md:text-2xl font-bold text-center tracking-widest">
                      <span className="text-white/90">極上の</span><span className="text-2xl md:text-3xl">自由</span><span className="text-white/90">を大切な人とお過ごしください</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Divider */}
            {index < sections.length - 1 && (
              <div className="mt-8 md:mt-10 flex justify-center">
                <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-kuon-gold/50 to-transparent"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

