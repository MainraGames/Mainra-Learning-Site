import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';
import { SiteSettings } from '../types';

interface FooterProps {
  onNavigate?: (view: any) => void;
  settings: SiteSettings;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, settings }) => {
  const handleNav = (view: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(view);
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">{settings.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Membangun generasi developer game masa depan Indonesia dengan kurikulum berstandar industri dan mentor berpengalaman.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-mainra-blue"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-mainra-blue"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-mainra-blue"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-bold mb-6">Program Belajar</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><button onClick={handleNav('home')} className="hover:text-mainra-orange transition-colors">Unity for Kids</button></li>
              <li><button onClick={handleNav('home')} className="hover:text-mainra-orange transition-colors">Student Academy</button></li>
              <li><button onClick={handleNav('home')} className="hover:text-mainra-orange transition-colors">Professional Bootcamp</button></li>
              <li><button onClick={handleNav('home')} className="hover:text-mainra-orange transition-colors">Sertifikasi Unity</button></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-6">Bantuan</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><button onClick={handleNav('faq')} className="hover:text-mainra-orange transition-colors">FAQ</button></li>
              <li><button onClick={handleNav('contact')} className="hover:text-mainra-orange transition-colors">Hubungi Kami</button></li>
              <li><button onClick={handleNav('career')} className="hover:text-mainra-orange transition-colors">Karir Mentor</button></li>
              <li><button onClick={handleNav('privacy')} className="hover:text-mainra-orange transition-colors">Kebijakan Privasi</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Kontak</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex gap-3">
                <Mail size={18} className="text-mainra-orange shrink-0" />
                <span>{settings.email}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-mainra-orange shrink-0" />
                <span>{settings.phone}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {settings.title}. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 items-center">
            <button onClick={handleNav('privacy')} className="hover:text-gray-300">Terms</button>
            <button onClick={handleNav('privacy')} className="hover:text-gray-300">Privacy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};