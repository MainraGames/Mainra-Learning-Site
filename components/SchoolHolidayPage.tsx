import React from 'react';
import { Calendar, Users, Gift, CheckCircle, ArrowLeft, Gamepad2, Zap, Sun } from 'lucide-react';

interface SchoolHolidayPageProps {
  onBack: () => void;
}

export const SchoolHolidayPage: React.FC<SchoolHolidayPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#FFFBEB] font-sans text-slate-800 selection:bg-orange-300">
      {/* Navigation / Back */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b-4 border-yellow-200 py-4 px-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2" role="button" onClick={onBack}>
             <div className="bg-sky-400 p-2 rounded-xl transform rotate-3 shadow-lg border-2 border-sky-500">
                <Sun className="text-white" size={28} />
             </div>
             <span className="text-2xl font-black text-slate-800 tracking-tight">Mainra<span className="text-sky-500">Holiday</span></span>
            </div>

            <button
            onClick={onBack}
            className="flex items-center gap-2 font-bold text-slate-500 hover:text-orange-500 transition-colors bg-white border-2 border-slate-200 px-4 py-2 rounded-full"
            >
            <ArrowLeft size={20} /> <span className="hidden sm:inline">Kembali</span>
            </button>
        </div>
      </nav>

      {/* Hero Header */}
      <div className="relative pt-12 pb-24 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-10 right-10 text-yellow-300 opacity-80 animate-spin-slow">
            <Sun size={120} />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
            <span className="inline-block py-2 px-6 rounded-full bg-orange-100 text-orange-600 text-sm font-black mb-6 border-2 border-orange-200 shadow-sm uppercase tracking-wide transform -rotate-2">
            LIMITED EDITION: JUNI - JULI 2024
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-800 mb-6 leading-tight">
            Liburan Sekolah? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Bikin Game Aja!
            </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 font-medium">
            Bootcamp intensif 5 hari. Dari nol sampai punya game sendiri yang bisa dimainkan di HP Mama Papa!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold px-8 py-4 rounded-3xl shadow-[0_6px_0_rgb(194,65,12)] hover:shadow-[0_3px_0_rgb(194,65,12)] hover:translate-y-1 transition-all border-b-0">
                    Daftar Sekarang
                </button>
                <button 
                    onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-200 text-xl font-bold px-8 py-4 rounded-3xl shadow-sm transition-colors"
                >
                    Lihat Jadwal
                </button>
            </div>
        </div>
      </div>

      {/* Value Props */}
      <div className="bg-white py-16 border-y-4 border-yellow-100">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-[2rem] bg-sky-50 border-2 border-sky-100 hover:scale-105 transition-transform duration-300 text-center">
            <div className="w-20 h-20 bg-sky-200 rounded-full flex items-center justify-center mx-auto mb-6 text-sky-600">
              <Gamepad2 size={40} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Hasil Nyata</h3>
            <p className="text-slate-600">Pulang bootcamp bawa game buatan sendiri. Bisa pamer ke teman-teman!</p>
          </div>
          <div className="p-8 rounded-[2rem] bg-orange-50 border-2 border-orange-100 hover:scale-105 transition-transform duration-300 text-center">
            <div className="w-20 h-20 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-600">
              <Users size={40} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Teman Baru</h3>
            <p className="text-slate-600">Ketemu teman baru yang sama-sama suka game. Main bareng, bikin bareng!</p>
          </div>
          <div className="p-8 rounded-[2rem] bg-green-50 border-2 border-green-100 hover:scale-105 transition-transform duration-300 text-center">
            <div className="w-20 h-20 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
              <Zap size={40} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Skill Keren</h3>
            <p className="text-slate-600">Belajar coding tanpa pusing. Pakai sistem pasang blok yang seru.</p>
          </div>
        </div>
      </div>

      {/* Curriculum */}
      <div id="curriculum" className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-800 mb-4">Petualangan 5 Hari</h2>
            <p className="text-lg text-slate-600">Setiap hari ada misi baru yang harus diselesaikan!</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {[
            { day: 'Hari 1', title: 'World Building', desc: 'Mengenal Unity dan membuat dunia game pertamamu.', color: 'bg-red-400' },
            { day: 'Hari 2', title: 'Karakter & Animasi', desc: 'Memasukkan jagoanmu dan membuatnya bisa bergerak.', color: 'bg-orange-400' },
            { day: 'Hari 3', title: 'Logika & Koding', desc: 'Membuat karakter bisa lompat dan mengalahkan musuh.', color: 'bg-yellow-400 text-yellow-900' },
            { day: 'Hari 4', title: 'Suara & Musik', desc: 'Menambahkan efek suara biar game makin seru.', color: 'bg-green-400' },
            { day: 'Hari 5', title: 'Showcase!', desc: 'Install game di HP dan presentasi depan orang tua.', color: 'bg-sky-400' }
          ].map((item, idx) => (
            <div key={idx} className="group flex flex-col sm:flex-row gap-6 items-start bg-white p-6 rounded-[2rem] border-4 border-slate-100 hover:border-sky-200 transition-colors shadow-sm">
              <div className={`${item.color} ${item.color.includes('text-yellow') ? '' : 'text-white'} font-black text-xl py-4 px-6 rounded-2xl shrink-0 shadow-sm rotate-3 group-hover:rotate-0 transition-transform`}>
                {item.day}
              </div>
              <div className="pt-2">
                <h4 className="text-2xl font-bold text-slate-800 mb-2">{item.title}</h4>
                <p className="text-slate-500 font-medium text-lg">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Promo Section */}
      <div className="container mx-auto px-4 mb-24">
        <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl text-white">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400 opacity-20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 text-yellow-300 font-bold text-sm mb-6 border border-white/10">
                <Gift size={18} /> PROMO SPESIAL
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">Ajak Teman, <br/>Lebih Hemat!</h2>
              <ul className="space-y-4 text-indigo-100 text-lg mb-10 font-medium">
                <li className="flex items-center gap-3"><CheckCircle size={24} className="text-yellow-400 shrink-0" /> Daftar sendiri: Rp 1.500.000</li>
                <li className="flex items-center gap-3 bg-white/10 p-3 rounded-xl border border-white/10"><CheckCircle size={24} className="text-yellow-400 shrink-0" /> <span className="font-bold text-white">Daftar Grup (3 org): Rp 750.000 /anak</span></li>
                <li className="flex items-center gap-3"><CheckCircle size={24} className="text-yellow-400 shrink-0" /> Hemat 50% untuk pendaftaran kolektif!</li>
              </ul>
              <button className="bg-yellow-400 text-yellow-900 hover:bg-yellow-300 font-black text-xl px-8 py-4 rounded-2xl shadow-[0_4px_0_rgb(161,98,7)] hover:shadow-[0_2px_0_rgb(161,98,7)] hover:translate-y-1 transition-all w-full md:w-auto">
                Klaim Diskon Grup
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2.5rem] border-2 border-white/20">
               <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><Calendar className="text-yellow-300"/> Pilih Jadwal</h3>
               <div className="space-y-4">
                 <div className="bg-indigo-900/40 p-4 rounded-2xl flex justify-between items-center border border-white/10 opacity-75">
                   <div className="font-bold">Batch 1: 17 - 21 Juni</div>
                   <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Penuh</span>
                 </div>
                 <div className="bg-white p-4 rounded-2xl flex justify-between items-center text-slate-800 shadow-lg transform scale-105">
                   <div className="font-bold">Batch 2: 24 - 28 Juni</div>
                   <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Tersedia</span>
                 </div>
                 <div className="bg-indigo-900/40 p-4 rounded-2xl flex justify-between items-center border border-white/10">
                   <div className="font-bold">Batch 3: 1 - 5 Juli</div>
                   <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Tersedia</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};