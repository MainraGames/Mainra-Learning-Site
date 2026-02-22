import React, { useEffect } from 'react';
import { Course } from '../types';
import { Button } from './Button';
import { ArrowLeft, Clock, BarChart, Tag, CheckCircle, PlayCircle, Calendar, Users, Star, Award } from 'lucide-react';

interface CourseDetailPageProps {
  course: Course;
  onBack: () => void;
  onNavigate: (view: string) => void;
}

export const CourseDetailPage: React.FC<CourseDetailPageProps> = ({ course, onBack, onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isKids = course.audience === 'KIDS';

  return (
    <div className={`min-h-screen ${isKids ? 'bg-[#E0F2FE] text-slate-800 selection:bg-yellow-300' : 'bg-mainra-dark text-white selection:bg-mainra-orange'}`}>
      {/* Navbar */}
      <nav className={`sticky top-0 z-40 backdrop-blur-md shadow-sm py-4 px-4 ${isKids ? 'bg-white/80 border-b-4 border-sky-200' : 'bg-mainra-dark/95 border-b border-gray-800'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <button 
            onClick={onBack}
            className={`flex items-center gap-2 font-bold transition-colors group ${isKids ? 'text-slate-500 hover:text-sky-600' : 'text-gray-400 hover:text-mainra-orange'}`}
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
            <span className="hidden sm:inline">Kembali</span>
          </button>
          
          <div className={`font-bold text-lg ${isKids ? 'text-sky-600' : 'text-white'}`}>
            Detail Kelas
          </div>
          
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className={`rounded-[2rem] overflow-hidden shadow-2xl relative ${isKids ? 'border-4 border-white' : 'border border-gray-800'}`}>
            <img src={course.image} alt={course.title} className="w-full h-full object-cover aspect-video" />
            <div className={`absolute top-4 right-4 font-bold px-4 py-2 rounded-full text-sm shadow-sm ${isKids ? 'bg-white/90 text-sky-600 border border-sky-100' : 'bg-mainra-orange text-white'}`}>
              {course.audience}
            </div>
          </div>
          
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {course.tags.map(tag => (
                <span key={tag} className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide ${isKids ? 'bg-sky-100 text-sky-700' : 'bg-[#333] text-gray-300 border border-gray-700'}`}>
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className={`text-4xl md:text-5xl font-black mb-6 ${isKids ? 'text-slate-800' : 'text-white'}`}>
              {course.title}
            </h1>
            
            <p className={`text-lg mb-8 leading-relaxed ${isKids ? 'text-slate-600 font-medium' : 'text-gray-400'}`}>
              {course.description}
            </p>
            
            <div className={`flex flex-wrap gap-6 mb-8 p-6 rounded-2xl ${isKids ? 'bg-white shadow-sm border-2 border-slate-100' : 'bg-[#252525] border border-gray-800'}`}>
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-xl ${isKids ? 'bg-sky-100 text-sky-600' : 'bg-mainra-blue/20 text-mainra-blue'}`}>
                  <Clock size={24} />
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase ${isKids ? 'text-slate-400' : 'text-gray-500'}`}>Durasi</p>
                  <p className={`font-bold ${isKids ? 'text-slate-800' : 'text-white'}`}>{course.duration}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-xl ${isKids ? 'bg-orange-100 text-orange-600' : 'bg-mainra-orange/20 text-mainra-orange'}`}>
                  <BarChart size={24} />
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase ${isKids ? 'text-slate-400' : 'text-gray-500'}`}>Level</p>
                  <p className={`font-bold ${isKids ? 'text-slate-800' : 'text-white'}`}>{course.level}</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className={`text-sm font-bold uppercase ${isKids ? 'text-slate-400' : 'text-gray-500'}`}>Investasi</p>
                <p className={`text-3xl font-black ${isKids ? 'text-slate-800' : 'text-white'}`}>{course.price}</p>
              </div>
              
              {isKids ? (
                <button 
                  onClick={() => onNavigate('contact')}
                  className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold px-8 py-4 rounded-2xl transition-colors shadow-[0_4px_0_rgb(161,98,7)] hover:shadow-[0_2px_0_rgb(161,98,7)] hover:translate-y-1"
                >
                  Daftar Sekarang
                </button>
              ) : (
                <Button variant="primary" className="!px-8 !py-4 text-lg" onClick={() => onNavigate('contact')}>
                  Daftar Sekarang
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isKids ? 'text-slate-800' : 'text-white'}`}>
                <Star className={isKids ? 'text-yellow-400' : 'text-mainra-orange'} /> 
                Apa yang akan dipelajari?
              </h2>
              <div className={`grid sm:grid-cols-2 gap-4 p-8 rounded-3xl ${isKids ? 'bg-white shadow-sm border-2 border-slate-100' : 'bg-[#252525] border border-gray-800'}`}>
                {[
                  "Pengenalan antarmuka Unity",
                  "Dasar-dasar logika pemrograman",
                  "Membuat karakter dan animasi",
                  "Desain level dan environment",
                  "Menambahkan efek suara dan musik",
                  "Build game ke platform target"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className={`shrink-0 mt-1 ${isKids ? 'text-green-500' : 'text-mainra-blue'}`} size={20} />
                    <span className={isKids ? 'text-slate-600 font-medium' : 'text-gray-300'}>{item}</span>
                  </div>
                ))}
              </div>
            </section>
            
            <section>
               <h2 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isKids ? 'text-slate-800' : 'text-white'}`}>
                <Award className={isKids ? 'text-purple-500' : 'text-mainra-orange'} /> 
                Fasilitas Kelas
              </h2>
              <ul className={`space-y-4 p-8 rounded-3xl ${isKids ? 'bg-white shadow-sm border-2 border-slate-100' : 'bg-[#252525] border border-gray-800'}`}>
                <li className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${isKids ? 'bg-purple-100 text-purple-600' : 'bg-gray-800 text-gray-300'}`}><PlayCircle size={20}/></div>
                  <span className={isKids ? 'text-slate-600 font-medium' : 'text-gray-300'}>Akses materi video selamanya (Lifetime Access)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${isKids ? 'bg-sky-100 text-sky-600' : 'bg-gray-800 text-gray-300'}`}><Users size={20}/></div>
                  <span className={isKids ? 'text-slate-600 font-medium' : 'text-gray-300'}>Sesi mentoring live setiap minggu</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${isKids ? 'bg-green-100 text-green-600' : 'bg-gray-800 text-gray-300'}`}><CheckCircle size={20}/></div>
                  <span className={isKids ? 'text-slate-600 font-medium' : 'text-gray-300'}>Sertifikat penyelesaian kelas</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${isKids ? 'bg-orange-100 text-orange-600' : 'bg-gray-800 text-gray-300'}`}><Calendar size={20}/></div>
                  <span className={isKids ? 'text-slate-600 font-medium' : 'text-gray-300'}>Jadwal belajar fleksibel</span>
                </li>
              </ul>
            </section>
          </div>
          
          <div className="space-y-6">
             <div className={`p-8 rounded-3xl sticky top-24 ${isKids ? 'bg-sky-50 border-2 border-sky-200' : 'bg-[#1f1f1f] border border-gray-800'}`}>
               <h3 className={`text-xl font-bold mb-4 ${isKids ? 'text-slate-800' : 'text-white'}`}>Butuh Bantuan?</h3>
               <p className={`mb-6 text-sm ${isKids ? 'text-slate-600' : 'text-gray-400'}`}>
                 Tim kami siap membantu menjawab pertanyaan Anda seputar kelas ini.
               </p>
               <button 
                  onClick={() => onNavigate('contact')}
                  className={`w-full py-3 px-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 ${
                    isKids 
                      ? 'bg-white text-sky-600 border-2 border-sky-200 hover:bg-sky-100' 
                      : 'bg-transparent border border-gray-600 text-white hover:border-mainra-orange hover:text-mainra-orange'
                  }`}
                >
                  Hubungi Admin
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
