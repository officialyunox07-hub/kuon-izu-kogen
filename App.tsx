import React from 'react';
import { Hero } from './components/Hero';
import { Concept } from './components/Concept';
import { Features } from './components/Features';
import { Influencers } from './components/Influencers';
import { Gallery } from './components/Gallery';
import { Closing } from './components/Closing';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-kuon-gold selection:text-black">
      {/* Sticky Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-kuon-black/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-serif text-white tracking-widest font-bold">
            久苑 <span className="text-kuon-gold text-base font-normal">KUON</span>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Concept />
        <Features />
        <Gallery />
        <Influencers />
        <Closing />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;