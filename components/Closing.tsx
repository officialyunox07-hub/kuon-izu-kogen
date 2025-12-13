import React from 'react';
import { Button } from './Button';
import { CheckCircle2 } from 'lucide-react';

export const Closing: React.FC = () => {
  return (
    <div className="relative pt-16 pb-24 px-6 overflow-hidden bg-kuon-black">

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Main Headings */}
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-2xl font-serif text-white mb-4 tracking-widest">
            もっと詳しく知りたい方へ
          </h2>
          <div className="text-3xl md:text-5xl font-serif text-kuon-gold tracking-wider">
            個別説明会開催中
          </div>
        </div>
        
        {/* Information Box */}
        <div className="bg-white/5 border border-kuon-gold/30 p-8 md:p-12 backdrop-blur-md rounded-sm">
          
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-stretch">
            
            {/* Left Column: Content */}
            <div className="w-full md:w-1/2 flex flex-col text-left pb-0">
              
              {/* Vertical List */}
              <div className="flex flex-col gap-6 mb-8 w-full">
                <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <CheckCircle2 className="text-kuon-gold shrink-0" size={24} />
                  <span className="text-white font-serif text-lg md:text-xl tracking-wide">会員システムのご説明</span>
                </div>
                <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <CheckCircle2 className="text-kuon-gold shrink-0" size={24} />
                  <span className="text-white font-serif text-lg md:text-xl tracking-wide">施設の利用方法のご案内</span>
                </div>
                <div className="hidden flex items-center gap-4 border-b border-white/10 pb-4">
                  <CheckCircle2 className="text-kuon-gold shrink-0" size={24} />
                  <span className="text-white font-serif text-lg md:text-xl tracking-wide">ホームグラウンドのご相談</span>
                </div>
              </div>

              <p className="text-gray-300 font-sans text-sm md:text-base leading-loose mb-10">
                検討にあたり、大切なポイントを担当スタッフより<br className="hidden lg:block" />
                詳しくご説明をさせていただきます。
              </p>

              {/* CTA Button */}
              <div className="w-full">
                <p className="text-kuon-gold font-serif text-[11px] md:text-[13px] font-bold text-left mb-3 tracking-wider whitespace-pre-line">
                  当サイト限定：特別価格でご案内<br />
                  会員権価格は段階的な価格改定を予定しています。
                </p>
                 <Button 
                   fullWidth={true} 
                   className="text-lg md:text-xl px-8 py-5 shadow-xl"
                   onClick={() => window.open('https://lin.ee/kT3TzVC', '_blank')}
                 >
                   個別説明会のご予約はこちら
                 </Button>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="w-full md:w-1/2">
              <div className="w-full h-[380px] relative overflow-hidden rounded-sm border border-white/10 shadow-2xl">
                 <img 
                   src="https://images.unsplash.com/photo-1556020685-ae41abfc9365?q=80&w=2000&auto=format&fit=crop" 
                   alt="Concierge Service" 
                   className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};