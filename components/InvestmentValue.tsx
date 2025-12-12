import React from 'react';
import { Section } from './Section';
import { SectionTitle } from './SectionTitle';
import { TrendingUp, Shield, Users, FileText } from 'lucide-react';

const priceData = [
  { year: '2024年', price: 120 },
  { year: '2025年', price: 200 },
  { year: '2026年', price: 240 },
  { year: '2028年', price: 350 },
  { year: '2035年', price: 650 }
];

const maxPrice = 700;
const benefits = [
  {
    icon: Shield,
    text: '権利型会員権を資産として保有'
  },
  {
    icon: TrendingUp,
    text: '運用可能価格上昇時の譲渡益（売却益）の獲得機会'
  },
  {
    icon: Users,
    text: '家族への贈与・相続資産としても活用可能'
  },
  {
    icon: FileText,
    text: '公式HPで会員間の安全・安心な取引環境'
  }
];

export const InvestmentValue: React.FC = () => {
  return (
    <Section id="investment-value" background="black">
      <SectionTitle 
        title="投資価値と価格推移" 
        subtitle="施設数増加に伴う資産価値の向上が期待できます" 
      />
      
      <div className="max-w-6xl mx-auto">
        {/* 権利型会員権価格推移予想 */}
        <div className="mb-16">
          <h3 className="text-xl md:text-3xl font-serif font-bold text-white mb-8 text-center tracking-wider">
            権利型会員権価格推移予想
          </h3>
          
          {/* Graph Container */}
          <div className="bg-kuon-black border border-white/5 px-8 md:px-12 py-4 md:py-12 rounded-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-kuon-gold/5 via-transparent to-kuon-gold/5 opacity-50"></div>
            
            <div className="relative z-10">
              {/* Y-axis labels */}
              <div 
                className="flex items-end justify-between h-[250px] md:h-[500px] mb-2 md:mb-4 relative bg-contain md:bg-cover bg-center bg-no-repeat py-[5px] md:py-0"
                style={{ backgroundImage: 'url("/画像/グラフ.png")' }}
              >
                <div className="hidden flex flex-col justify-between h-full text-gray-400 text-xs md:text-sm font-sans">
                  <span>700</span>
                  <span>600</span>
                  <span>500</span>
                  <span>400</span>
                  <span>300</span>
                  <span>200</span>
                  <span>100</span>
                  <span>0</span>
                </div>
                
                {/* Bars */}
                <div className="hidden flex-1 flex items-end justify-around gap-4 md:gap-8 px-4 md:px-8">
                  {priceData.map((data, index) => {
                    const height = (data.price / maxPrice) * 100;
                    return (
                      <div key={index} className="flex flex-col items-center flex-1 group">
                        {/* Bar */}
                        <div className="relative w-full flex flex-col items-center">
                          <div 
                            className="w-full bg-gradient-to-t from-kuon-gold via-kuon-gold/90 to-kuon-gold/70 rounded-t-sm transition-all duration-500 group-hover:from-kuon-gold group-hover:via-kuon-gold group-hover:to-kuon-gold group-hover:shadow-[0_0_30px_rgba(184,161,121,0.6)]"
                            style={{ height: `${height}%`, minHeight: '20px' }}
                          >
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="bg-kuon-gold text-kuon-black px-3 py-1 rounded text-xs md:text-sm font-bold whitespace-nowrap">
                                {data.price}万円
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Year label */}
                        <div className="mt-4 text-center">
                          <div className="text-kuon-gold font-serif font-bold text-sm md:text-base mb-1">
                            {data.price}万円
                          </div>
                          <div className="text-gray-400 font-sans text-xs md:text-sm">
                            {data.year}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 投資メリット */}
        <div>
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-kuon-gold mb-8 text-center tracking-wider">
            投資メリット
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group relative bg-kuon-black p-6 md:p-8 border border-white/5 hover:border-kuon-gold/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(184,161,121,0.2)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full bg-kuon-dark border-2 border-kuon-gold/30 text-kuon-gold group-hover:bg-kuon-gold group-hover:text-kuon-black group-hover:border-kuon-gold transition-all duration-300 group-hover:scale-110">
                    <benefit.icon size={24} />
                  </div>
                  <p className="text-gray-300 font-sans text-sm md:text-base leading-7 flex-1">
                    {benefit.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

