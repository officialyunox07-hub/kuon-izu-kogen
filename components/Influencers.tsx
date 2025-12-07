import React from 'react';
import { Section } from './Section';
import { SectionTitle } from './SectionTitle';
import { InfluencerPost } from '../types';
import { Quote } from 'lucide-react';

const posts: InfluencerPost[] = [
  {
    id: '1',
    name: 'M. Tanaka & Golden Retriever Leo',
    handle: '@leo_golden_life',
    image: 'https://picsum.photos/100/100?random=1',
    content: '初めての「久苑」。大型犬もOKなプライベートドッグランが本当に広くて感動！部屋食なのでレオも一緒にリラックスして過ごせました。これぞ本当の贅沢。',
    tags: ['#久苑', '#愛犬と旅行', '#大型犬のいる暮らし']
  },
  {
    id: '2',
    name: 'S. Suzuki & Toy Poodle Momo',
    handle: '@momo_poodle_style',
    image: 'https://picsum.photos/100/100?random=2',
    content: 'アメニティの充実度が凄い✨ 人間用はもちろん、ワンちゃん用も完璧。温泉に入りながらモモが遊んでるのを見れるのが最高に幸せでした。',
    tags: ['#犬連れ温泉', '#伊豆高原', '#ラグジュアリー']
  },
  {
    id: '3',
    name: 'K. Sato (Architect)',
    handle: '@architect_k',
    image: 'https://picsum.photos/100/100?random=3',
    content: '建築美と機能性が両立している稀有な宿。素材の質感、照明の設計、そして犬の動線まで考え抜かれている。静寂の中で過ごす週末は格別。',
    tags: ['#建築デザイン', '#和モダン', '#大人の隠れ家']
  },
  {
    id: '4',
    name: 'Y. Yamamoto & French Bulldog',
    handle: '@buhi_yamamoto',
    image: 'https://picsum.photos/100/100?random=4',
    content: '以前から気になっていた久苑へ。スタッフの方々のホスピタリティが素晴らしく、愛犬の名前をすぐに覚えてくれました。ドッグランの芝生も手入れが行き届いています。',
    tags: ['#フレブル', '#愛犬との休日', '#リピート確定']
  },
  {
    id: '5',
    name: 'E. Nakamura (Lifestyle Editor)',
    handle: '@elena_edit_life',
    image: 'https://picsum.photos/100/100?random=5',
    content: '都心から車で数時間。この静けさは何物にも代えがたい。ワーケーション利用でしたが、Wi-Fi環境も快適で、仕事の合間に犬とドッグランへ。理想のライフスタイル。',
    tags: ['#ワーケーション', '#愛犬と仕事', '#伊豆リゾート']
  },
  {
    id: '6',
    name: 'H. Ito & Shiba Inu Kotaro',
    handle: '@shiba_kotaro_diary',
    image: 'https://picsum.photos/100/100?random=6',
    content: '和の趣を感じる落ち着いた空間。小太郎も最初からリラックスモードでした。夕食の懐石料理は絶品で、地元の海鮮を堪能できました。また必ず訪れます。',
    tags: ['#柴犬', '#和のリゾート', '#美食の宿']
  }
];

export const Influencers: React.FC = () => {
  return (
    <Section id="voices" background="dark">
      <SectionTitle 
        title="愛犬家・著名人が選ぶ、至福の場所" 
        subtitle="Voices" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-kuon-black p-8 relative rounded-sm border-t-2 border-kuon-gold shadow-lg">
            <Quote className="absolute top-4 right-4 text-kuon-gold/20" size={48} />
            
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={post.image} 
                alt={post.name} 
                className="w-14 h-14 rounded-full border-2 border-kuon-gold/50 object-cover"
              />
              <div>
                <p className="text-white font-serif font-medium text-sm">{post.name}</p>
                <p className="text-kuon-gold text-xs">{post.handle}</p>
              </div>
            </div>
            
            <p className="text-gray-300 font-sans text-sm leading-relaxed mb-4">
              {post.content}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, i) => (
                <span key={i} className="text-xs text-gray-500 hover:text-kuon-gold transition-colors cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};