import React from 'react';
import { Section } from './Section';
import { SectionTitle } from './SectionTitle';

export const Concept2: React.FC = () => {
  return (
    <Section id="concept2" background="black" className="pt-10 md:pt-16 pb-20 md:pb-32">
      {/* 施設の魅力タイトル */}
      <SectionTitle 
        title="施設の魅力" 
        subtitle="開発許可が困難な希少立地に位置する最高級の設備" 
        subtitleClassName="block text-kuon-gold font-serif text-[13px] md:text-[17px] italic mb-3 tracking-wider"
      />
      
      {/* 3 Key Concepts */}
      <div className="flex flex-col gap-24 max-w-6xl mx-auto mt-16">
        
        {/* Concept 1: Text Left, Image Right */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2 text-left order-2 md:order-1">
            <h3 className="text-kuon-gold font-serif text-lg mb-3 tracking-wider">
              圧倒的な自由を
            </h3>
            <p className="text-2xl md:text-3xl font-serif text-white mb-8">
              「いつでも、気兼ねなく」
            </p>
            <p className="text-gray-400 font-sans text-sm leading-8 text-justify">
              全棟独立型のプライベートヴィラだからこそ、周囲を気にすることなく愛犬との時間を最優先にお過ごしいただけます。大型犬ものびのびと遊べる空間で、誰にも邪魔されない休日を。
            </p>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="aspect-[4/3] w-full relative overflow-hidden rounded-sm border border-white/5 group concept2-image-1">
              <img 
                src="/画像/S__8773646.jpg" 
                alt="Private Villa Exterior" 
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 concept2-img-1"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 concept2-overlay-1"></div>
            </div>
          </div>
        </div>

        {/* Concept 2: Image Left, Text Right (Zigzag Layout) */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Image - First on Mobile, First on Desktop */}
          <div className="w-full md:w-1/2 order-1">
            <div className="aspect-[4/3] w-full relative overflow-hidden rounded-sm border border-white/5 group concept2-image-2">
              <img 
                src="https://kuon-resort.com/wp-content/uploads/2025/10/1.png" 
                alt="Family gathering with dogs" 
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 concept2-img-2"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 concept2-overlay-2"></div>
            </div>
          </div>
          
          {/* Text - Second on Mobile, Second on Desktop */}
          <div className="w-full md:w-1/2 text-left order-2">
            <h3 className="text-kuon-gold font-serif text-lg mb-3 tracking-wider">
              大切な家族と
            </h3>
            <p className="text-2xl md:text-3xl font-serif text-white mb-8">
              「だれとでも、何度でも」
            </p>
            <p className="text-gray-400 font-sans text-sm leading-8 text-justify">
              ご家族やご友人、そして愛犬。大切なパートナーとの絆を深めるための広大なドッグランと客室温泉をご用意しました。季節を変えて何度でも訪れたくなる、皆様の「居場所」となります。
            </p>
          </div>
        </div>

        {/* Concept 3: Text Left, Image Right */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2 text-left order-2 md:order-1">
            <h3 className="text-kuon-gold font-serif text-lg mb-3 tracking-wider">
              極上の空間で
            </h3>
            <p className="text-2xl md:text-3xl font-serif text-white mb-8">
              「どこよりも、癒される」
            </p>
            <p className="text-gray-400 font-sans text-sm leading-8 text-justify">
              リフレッシュ効果抜群の天然温泉。自然を眺めながら浸かれる温泉は、ラグジュアリー間満載。優雅な空間をカップルやファミリーでお楽しみ頂けます。
            </p>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="aspect-[4/3] w-full relative overflow-hidden rounded-sm border border-white/5 group concept2-image-3">
              <img 
                src="https://kuon-resort.com/wp-content/uploads/2025/10/5-1536x864.png" 
                alt="Luxury Interior" 
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 concept2-img-3"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 concept2-overlay-3"></div>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};

