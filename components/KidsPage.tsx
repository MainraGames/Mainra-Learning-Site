import React, { useState } from 'react';
import { Course, TargetAudience } from '../types';
import { Button } from './Button';
import { Rocket, Star, Gamepad2, Puzzle, ArrowLeft, CheckCircle, Heart, Menu, X } from 'lucide-react';

interface KidsPageProps {
  courses: Course[];
  onNavigate: (view: any) => void;
  onBack: () => void;
}

const TESTIMONIALS = [
  {
    name: "Budi Santoso",
    role: "Ayah dari Kevin (9 Tahun)",
    text: "Anak saya jadi lebih kreatif dan logis berpikirnya. Awalnya cuma suka main game, sekarang malah sibuk bikin level game sendiri untuk dimainkan adiknya.",
    initials: "BS",
    color: "bg-yellow-400 text-yellow-900"
  },
  {
    name: "Dina Astuti",
    role: "Ibu dari Rara (11 Tahun)",
    text: "Mentornya sabar banget ngajarin anak-anak. Materinya juga disesuaikan bahasa anak, jadi mereka nggak merasa sedang belajar pelajaran berat.",
    initials: "DA",
    color: "bg-pink-400 text-pink-900"
  },
  {
    name: "Hendra Wijaya",
    role: "Ayah dari Aris (10 Tahun)",
    text: "Anak saya jadi lebih disiplin waktu. Dia tahu kapan harus main dan kapan harus fokus ngoding. Skill problem solvingnya meningkat drastis!",
    initials: "HW",
    color: "bg-blue-400 text-blue-900"
  },
  {
    name: "Maya Sari",
    role: "Ibu dari Gendis (8 Tahun)",
    text: "Materi codingnya sangat ramah anak. Anak saya yang tadinya takut matematika jadi lebih suka karena logika coding ternyata seru.",
    initials: "MS",
    color: "bg-green-400 text-green-900"
  },
  {
    name: "Andi Pratama",
    role: "Ayah dari Farel (12 Tahun)",
    text: "Sangat worth it! Anak saya sekarang punya portofolio game sendiri di usia 12 tahun. Ini bekal yang luar biasa untuk masa depannya.",
    initials: "AP",
    color: "bg-purple-400 text-purple-900"
  },
  {
    name: "Siti Aminah",
    role: "Ibu dari Zahra (10 Tahun)",
    text: "Mentornya sangat sabar. Anak saya yang pemalu jadi lebih percaya diri saat mempresentasikan gamenya di depan teman-temannya.",
    initials: "SA",
    color: "bg-orange-400 text-orange-900"
  }
];

export const KidsPage: React.FC<KidsPageProps> = ({ courses, onNavigate, onBack }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const kidsCourses = courses.filter(c => c.audience === TargetAudience.KIDS);

  return (
    <div className="min-h-screen bg-[#E0F2FE] font-sans text-slate-800 selection:bg-yellow-300">
      
      {/* Kids Navbar */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b-4 border-sky-200 py-4 px-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 cursor-pointer" onClick={onBack} role="button">
              <div className="bg-yellow-400 p-2 rounded-xl transform -rotate-6 shadow-lg border-2 border-yellow-500">
                <Rocket className="text-white" size={28} />
              </div>
              <span className="text-2xl font-black text-sky-600 tracking-tight">Mainra<span className="text-yellow-500">Kids</span></span>
            </div>

            <div className="hidden md:flex items-center gap-4 ml-4">
              <button 
                onClick={() => onNavigate('holiday')}
                className="text-slate-500 hover:text-sky-600 font-bold transition-colors"
              >
                Program Liburan
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={onBack}
              className="hidden md:flex items-center gap-2 font-bold text-slate-500 hover:text-sky-600 transition-colors bg-white border-2 border-slate-200 px-4 py-2 rounded-full"
            >
              <ArrowLeft size={20} /> <span>Kembali ke Beranda</span>
            </button>
            
            <button 
              className="md:hidden text-slate-600 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b-4 border-sky-200 p-4 shadow-lg flex flex-col gap-4 animate-slide-down">
            <button 
              onClick={() => {
                onNavigate('holiday');
                setIsMenuOpen(false);
              }}
              className="text-slate-600 hover:text-sky-600 font-bold py-2 px-4 rounded-xl hover:bg-sky-50 transition-colors text-left"
            >
              Program Liburan
            </button>
            <div className="h-px bg-slate-100 my-1"></div>
            <button 
              onClick={() => {
                onBack();
                setIsMenuOpen(false);
              }}
              className="flex items-center gap-2 text-slate-600 hover:text-sky-600 font-bold py-2 px-4 rounded-xl hover:bg-sky-50 transition-colors text-left"
            >
              <ArrowLeft size={20} /> Kembali ke Beranda
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-84px)] flex items-center pt-12 pb-24 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block bg-yellow-300 text-yellow-900 font-bold px-6 py-2 rounded-full mb-6 transform rotate-2 border-2 border-yellow-400 shadow-lg animate-bounce">
            🚀 Coding is Super Fun!
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-800 mb-6 leading-tight">
            Belajar Bikin <span className="text-sky-500">Game</span> <br/>
            Impianmu Sendiri!
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Ubah waktu main gadget jadi waktu berkarya. Belajar logika coding dengan cara seru tanpa pusing, khusus untuk usia 8-12 tahun.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => document.getElementById('kids-courses')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-sky-500 hover:bg-sky-600 text-white text-xl font-bold px-8 py-4 rounded-3xl shadow-[0_6px_0_rgb(14,116,144)] hover:shadow-[0_3px_0_rgb(14,116,144)] hover:translate-y-1 transition-all border-b-0"
            >
              Mulai Petualangan
            </button>
            <button 
              onClick={() => onNavigate('holiday')}
              className="bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-200 text-xl font-bold px-8 py-4 rounded-3xl shadow-sm transition-colors"
            >
              Lihat Program Liburan
            </button>
          </div>
        </div>

        {/* Decorative Blobs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 transform -translate-x-1/2"></div>
      </section>

      {/* Why Choose Us (Benefits) */}
      <section className="py-16 bg-white border-y-4 border-sky-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-orange-50 p-8 rounded-[2rem] border-2 border-orange-100 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-600">
                <Puzzle size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Melatih Logika</h3>
              <p className="text-slate-600">Belajar memecahkan masalah (problem solving) lewat puzzle dan algoritma sederhana.</p>
            </div>
            <div className="bg-purple-50 p-8 rounded-[2rem] border-2 border-purple-100 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-600">
                <Star size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Kreativitas</h3>
              <p className="text-slate-600">Bebaskan imajinasi dengan mendesain karakter, dunia, dan cerita game sendiri.</p>
            </div>
            <div className="bg-green-50 p-8 rounded-[2rem] border-2 border-green-100 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                <Gamepad2 size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Hasil Nyata</h3>
              <p className="text-slate-600">Bukan cuma main, tapi bisa pamerin game buatan sendiri ke teman dan orang tua.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses List */}
      <section id="kids-courses" className="py-24 bg-[#E0F2FE]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-800 mb-4">Pilih Kelas Petualanganmu</h2>
            <p className="text-lg text-slate-600">Mulai dari nol, tanpa perlu pengalaman coding sebelumnya.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {kidsCourses.map((course, idx) => (
              <div key={course.id} className="group bg-white rounded-[2.5rem] p-4 shadow-xl border-4 border-transparent hover:border-yellow-400 transition-all duration-300 flex flex-col h-full">
                <div className="relative h-56 rounded-[2rem] overflow-hidden mb-6">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-sky-600 font-black px-4 py-2 rounded-full text-sm shadow-sm border border-sky-100">
                    USIA 8-12 TAHUN
                  </div>
                </div>
                
                <div className="px-4 pb-6 flex-1 flex flex-col">
                  <div className="flex gap-2 mb-4">
                    {course.tags.map(tag => (
                      <span key={tag} className="bg-sky-100 text-sky-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-black text-slate-800 mb-3 group-hover:text-sky-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-slate-500 mb-6 font-medium leading-relaxed flex-grow">
                    {course.description}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex items-center justify-between border-t-2 border-slate-100 pt-6">
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase">Investasi</p>
                        <div className="flex flex-col">
                          {course.originalPrice && (
                            <span className="text-xs text-slate-400 line-through leading-none mb-1">{course.originalPrice}</span>
                          )}
                          <p className="text-xl font-black text-slate-800 leading-none">{course.price}</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => {
                          const message = encodeURIComponent(`Halo Mainra Kids, saya tertarik untuk mendaftarkan anak saya di kelas *${course.title}*. Mohon informasi lebih lanjut.`);
                          window.open(`https://wa.me/6285117590001?text=${message}`, '_blank');
                        }}
                        className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold px-6 py-3 rounded-2xl transition-colors flex items-center gap-2"
                      >
                        Daftar Sekarang
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parents Testimonial */}
      <section className="py-24 bg-sky-600 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="relative z-10">
          <div className="container mx-auto px-4 text-center mb-16">
            <Heart className="mx-auto mb-4 text-pink-300 fill-current animate-pulse" size={48} />
            <h2 className="text-4xl md:text-5xl font-black mb-4">Kata Orang Tua</h2>
            <p className="text-sky-100 text-lg max-w-2xl mx-auto">Lebih dari sekadar belajar coding, kami membangun kepercayaan diri dan kreativitas anak.</p>
          </div>

          {/* Autoscrolling Marquee Container */}
          <div className="relative flex overflow-x-hidden">
            <div className="flex animate-marquee whitespace-nowrap py-4">
              {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
                <div key={idx} className="mx-4 w-[350px] md:w-[450px] bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 flex flex-col whitespace-normal">
                  <p className="text-lg mb-8 italic leading-relaxed">"{t.text}"</p>
                  <div className="mt-auto flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl ${t.color} flex items-center justify-center font-black text-xl shadow-lg transform -rotate-3`}>
                      {t.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{t.name}</h4>
                      <p className="text-sky-200 text-sm font-medium">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Marquee (Reverse) */}
          <div className="relative flex overflow-x-hidden mt-8">
            <div className="flex animate-marquee-reverse whitespace-nowrap py-4">
              {[...TESTIMONIALS, ...TESTIMONIALS].reverse().map((t, idx) => (
                <div key={idx} className="mx-4 w-[350px] md:w-[450px] bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 flex flex-col whitespace-normal">
                  <p className="text-lg mb-8 italic leading-relaxed">"{t.text}"</p>
                  <div className="mt-auto flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl ${t.color} flex items-center justify-center font-black text-xl shadow-lg transform rotate-3`}>
                      {t.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{t.name}</h4>
                      <p className="text-sky-200 text-sm font-medium">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Simple */}
      <footer className="bg-sky-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Siap Jadi Game Developer Cilik?</h2>
          <div className="flex justify-center gap-6 mb-8 text-sky-200 text-sm font-semibold">
            <span className="flex items-center gap-2"><CheckCircle size={16} /> Sertifikat</span>
            <span className="flex items-center gap-2"><CheckCircle size={16} /> Mentor Ramah</span>
            <span className="flex items-center gap-2"><CheckCircle size={16} /> Teman Baru</span>
          </div>
          <p className="text-sky-400 text-sm">&copy; {new Date().getFullYear()} Mainra Kids. Bagian dari Mainra Learning.</p>
        </div>
      </footer>
    </div>
  );
};