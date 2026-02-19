import React from 'react';
import { User, Course } from '../types';
import { BookOpen, Award, Clock, PlayCircle, Settings, LogOut, Trophy, Star } from 'lucide-react';
import { Button } from './Button';

interface StudentDashboardProps {
  user: User;
  onLogout: () => void;
  courses: Course[];
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({ user, onLogout, courses }) => {
  // Mock enrolled courses data
  const enrolledCourses = [
    { ...courses[0], progress: 75, lastAccessed: '2 Jam lalu', currentLesson: 'Intro to Physics' },
    { ...courses[2], progress: 30, lastAccessed: '1 Hari lalu', currentLesson: 'C# Variables' }
  ];

  return (
    <div className="min-h-screen bg-mainra-dark font-sans text-white">
      {/* Navbar specific for Dashboard */}
      <nav className="h-16 bg-[#151515] border-b border-gray-800 px-6 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-mainra-orange rounded-lg flex items-center justify-center transform -rotate-6">
            <BookOpen className="text-white" size={18} />
          </div>
          <span className="font-bold text-lg tracking-tight">Mainra<span className="text-gray-500">.Student</span></span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-right hidden md:block">
            <div className="text-sm font-bold text-white">{user.name}</div>
            <div className="text-xs text-mainra-orange capitalize">{user.role}</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-gray-600 flex items-center justify-center text-lg font-bold">
            {user.name.charAt(0)}
          </div>
          <button onClick={onLogout} className="p-2 text-gray-400 hover:text-red-400 transition-colors">
            <LogOut size={20} />
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="bg-[#252525] rounded-xl p-6 border border-gray-800 text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-mainra-orange to-red-500 flex items-center justify-center text-3xl font-bold mb-4 shadow-xl shadow-orange-900/20">
              {user.name.charAt(0)}
            </div>
            <h2 className="font-bold text-xl">{user.name}</h2>
            <p className="text-gray-400 text-sm mb-4">{user.email}</p>
            <div className="flex justify-center gap-2">
              <span className="px-3 py-1 bg-yellow-500/10 text-yellow-500 text-xs rounded-full font-bold border border-yellow-500/20 flex items-center gap-1">
                <Trophy size={12} /> Level 3
              </span>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-500 text-xs rounded-full font-bold border border-blue-500/20 flex items-center gap-1">
                <Star size={12} /> Pro
              </span>
            </div>
          </div>

          <div className="bg-[#252525] rounded-xl overflow-hidden border border-gray-800">
            <div className="p-4 bg-[#1F1F1F] font-bold text-sm text-gray-400 uppercase tracking-wider">Menu Belajar</div>
            <nav className="flex flex-col">
              <button className="flex items-center gap-3 px-4 py-3 bg-mainra-orange/10 text-mainra-orange border-l-4 border-mainra-orange font-medium">
                <BookOpen size={18} /> Kelas Saya
              </button>
              <button className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white transition-colors border-l-4 border-transparent">
                <Award size={18} /> Sertifikat
              </button>
              <button className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white transition-colors border-l-4 border-transparent">
                <Settings size={18} /> Pengaturan Akun
              </button>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-8">
          
          {/* Welcome Banner */}
          <div className="bg-gradient-to-r from-blue-900 to-mainra-dark rounded-2xl p-8 border border-blue-800/50 relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-3xl font-bold mb-2">Halo, {user.name}! 👋</h1>
              <p className="text-blue-200 mb-6 max-w-lg">Siap melanjutkan perjalanan menjadi Game Developer? Lanjutkan materi terakhirmu sekarang.</p>
              <Button variant="secondary" className="!px-6">Lanjut Belajar</Button>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-64 bg-blue-500/10 blur-3xl rounded-full transform translate-x-10"></div>
          </div>

          {/* Enrolled Courses */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <PlayCircle className="text-mainra-orange" /> Sedang Dipelajari
            </h3>
            <div className="space-y-4">
              {enrolledCourses.map((course) => (
                <div key={course.id} className="bg-[#252525] rounded-xl p-4 border border-gray-800 hover:border-gray-600 transition-all group">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Thumbnail */}
                    <div className="w-full md:w-48 h-32 rounded-lg overflow-hidden shrink-0 relative">
                      <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                         <PlayCircle size={32} className="text-white" />
                      </div>
                    </div>
                    
                    {/* Info */}
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                         <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-lg text-white group-hover:text-mainra-orange transition-colors">{course.title}</h4>
                            <span className="text-xs font-bold px-2 py-1 bg-gray-800 rounded text-gray-400">{course.level}</span>
                         </div>
                         <p className="text-sm text-gray-400 mb-3">Materi Selanjutnya: <span className="text-white">{course.currentLesson}</span></p>
                      </div>
                      
                      {/* Progress Bar */}
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-400 flex items-center gap-1"><Clock size={12} /> Diakses {course.lastAccessed}</span>
                          <span className="font-bold text-mainra-orange">{course.progress}% Selesai</span>
                        </div>
                        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-mainra-orange to-red-500 rounded-full transition-all duration-1000" 
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended (Upsell) */}
          <div className="pt-8 border-t border-gray-800">
             <h3 className="text-xl font-bold mb-6">Rekomendasi Kelas Lanjutan</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {courses.filter(c => !enrolledCourses.find(ec => ec.id === c.id)).slice(0, 2).map(course => (
                 <div key={course.id} className="bg-[#1F1F1F] p-4 rounded-lg border border-gray-800 flex gap-4 items-center">
                    <div className="w-20 h-20 rounded bg-gray-800 overflow-hidden shrink-0">
                      <img src={course.image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm mb-1 line-clamp-1">{course.title}</h5>
                      <p className="text-xs text-gray-500 mb-2">{course.level} • {course.duration}</p>
                      <button className="text-xs text-mainra-orange font-bold hover:underline">Lihat Detail</button>
                    </div>
                 </div>
               ))}
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};