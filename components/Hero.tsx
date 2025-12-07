import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] hover:scale-105"
        style={{ backgroundImage: 'url("https://kuon-resort.com/wp-content/uploads/2025/10/19.png")' }}
      >
        {/* グラデーションを調整して文字の視認性と画像の美しさを両立 */}
        <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black/60 via-transparent to-kuon-black/90"></div>
      </div>

      {/* Content Container - Centered Layout */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        
        <div className="max-w-5xl w-full flex flex-col items-center justify-center text-center">
          
          {/* Main Title - Horizontal, Elegant Serif */}
           <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-loose md:leading-snug tracking-widest drop-shadow-xl mb-8">
             愛犬との極上の自由を<br className="md:hidden" />
             <span className="md:inline-block">伊豆高原で</span>
           </h1>

           {/* Decorative Divider */}
           <div className="w-12 md:w-20 h-[1px] bg-white/80 mb-8 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>

          {/* Subcopy */}
          <p className="text-white/90 font-sans text-sm md:text-lg leading-loose tracking-wider max-w-3xl drop-shadow-md">
            大型犬も歓迎する全棟プライベートドッグラン・温泉付きのヴィラ。<br className="hidden md:block"/>
            誰にも邪魔されない、大切な家族との至福のひととき。
          </p>
          
        </div>
      </div>

      {/* Scroll Indicator - Correctly Centered */}
      <div className="absolute bottom-10 left-0 w-full flex justify-center animate-bounce text-white/60 z-20">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.3em] uppercase font-serif">Scroll</span>
          <ChevronDown size={20} />
        </div>
      </div>
    </div>
  );
};