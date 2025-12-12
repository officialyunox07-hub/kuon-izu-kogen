import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-16 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center">
        
        {/* Brand Logo */}
        <h2 className="text-3xl font-serif text-white mb-10 tracking-widest">
          久苑 <span className="text-kuon-gold text-xl">KUON</span>
        </h2>

        {/* Contact Info */}
        <div className="flex justify-center mb-12 w-full">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 text-kuon-gold mb-1">
               <Mail size={18} />
               <span className="font-serif text-white">MAIL</span>
            </div>
            <span className="text-sm tracking-wider">support@kuon-resort.com</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-8 w-full text-center text-xs tracking-wider text-gray-600">
          &copy; {new Date().getFullYear()} KUON RESORT. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};