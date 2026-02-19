import React from 'react';
import { Button } from './Button';
import { Gamepad2, ChevronRight, PlayCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-mainra-dark min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Radial Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-mainra-orange/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-mainra-blue text-sm font-semibold animate-fade-in-up">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            Kelas Baru Telah Dibuka
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
            Wujudkan <span className="text-transparent bg-clip-text bg-gradient-to-r from-mainra-orange to-red-500">Game Impian</span> Jadi Nyata
          </h1>
          
          <p className="text-xl text-mainra-grey max-w-lg mx-auto md:mx-0 leading-relaxed">
            Mainra Learning adalah platform #1 di Indonesia untuk belajar Unity Game Development. Kurikulum terstruktur untuk Anak, Pelajar, dan Profesional.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button variant="primary" className="text-lg px-8 py-3">
              Mulai Belajar Sekarang <ChevronRight size={20} />
            </Button>
            <Button variant="outline" className="text-lg px-8 py-3 group">
              <PlayCircle size={20} className="group-hover:text-white transition-colors" /> Lihat Demo Kelas
            </Button>
          </div>

          <div className="pt-8 flex items-center justify-center md:justify-start gap-8 text-gray-500 text-sm font-semibold uppercase tracking-widest">
            <span>Unity Authorized</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-700"></span>
            <span>Certiport Partner</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-700"></span>
            <span>Expert Mentors</span>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="relative z-10 bg-[#252525] p-2 rounded-2xl shadow-2xl border border-gray-700 transform rotate-2 hover:rotate-0 transition-all duration-500">
             <img 
               src="https://picsum.photos/600/400?random=hero" 
               alt="Unity Interface" 
               className="rounded-xl w-full h-auto opacity-90 hover:opacity-100 transition-opacity"
             />
             
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -left-6 bg-mainra-dark p-4 rounded-xl border border-gray-700 shadow-xl flex items-center gap-3">
                <div className="bg-mainra-orange/20 p-3 rounded-lg">
                  <Gamepad2 className="text-mainra-orange" size={24} />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">1,500+</div>
                  <div className="text-gray-400 text-xs">Game Dibuat Siswa</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};