import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Menu, X, Rocket, Phone } from 'lucide-react';

interface HeaderProps {
  onNavigate?: (view: 'home' | 'holiday' | 'contact' | 'kids') => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, view?: string) => {
    if (onNavigate) {
      if (view === 'kids') {
        onNavigate('kids');
        window.scrollTo(0,0);
      } else {
        onNavigate('home');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          } else {
             window.location.hash = href;
          }
        }, 50);
      }
    }
    setMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    if (onNavigate) {
      onNavigate('contact');
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-mainra-dark/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => {
            if (onNavigate) onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="w-10 h-10 bg-mainra-orange rounded-lg flex items-center justify-center transform -rotate-6">
            <Rocket className="text-white" size={24} />
          </div>
          <span className="text-2xl font-bold text-white tracking-tight">Mainra<span className="text-mainra-orange">.</span></span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: 'Program Anak', href: '#kids', view: 'kids' },
            { name: 'Pelajar', href: '#students' },
            { name: 'Karir', href: '#career' },
            { name: 'Mentoring', href: '#career' }, // Redirect mentoring to career page for now
          ].map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNavClick(link.href, link.view)}
              className="text-gray-300 hover:text-mainra-orange text-sm font-medium transition-colors"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="primary" 
            className="!px-5 !py-2 text-sm"
            onClick={handleContactClick}
          >
            <Phone size={16} /> Hubungi Kami
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#252525] border-t border-gray-800 p-4 shadow-2xl flex flex-col gap-4 animate-slide-down">
          {[
            { name: 'Program Anak', href: '#kids', view: 'kids' },
            { name: 'Pelajar', href: '#students' },
            { name: 'Karir', href: '#career' },
            { name: 'Mentoring', href: '#career' },
          ].map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNavClick(link.href, link.view)}
              className="text-gray-300 hover:text-mainra-orange py-2 px-2 rounded hover:bg-white/5 transition-all text-left"
            >
              {link.name}
            </button>
          ))}
          <div className="h-px bg-gray-700 my-2"></div>
          <Button variant="primary" className="w-full justify-center" onClick={handleContactClick}>Hubungi Kami</Button>
        </div>
      )}
    </header>
  );
};