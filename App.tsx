import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CourseCard } from './components/CourseCard';
import { AIRecommender } from './components/AIRecommender';
import { Footer } from './components/Footer';
import { SchoolHolidayPage } from './components/SchoolHolidayPage';
import { FAQPage, ContactPage, CareerPage, PrivacyPage } from './components/SupportPages';
import { KidsPage } from './components/KidsPage';
import { WhatsAppBubble } from './components/WhatsAppBubble';
import { InstructorProfile } from './components/InstructorProfile';
import { COURSES } from './constants';
import { TargetAudience, Course, SiteSettings } from './types';
import { ArrowRight, Code, GraduationCap, Briefcase } from 'lucide-react';

type ViewState = 'home' | 'holiday' | 'faq' | 'contact' | 'career' | 'privacy' | 'kids';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  // --- Global State ---
  const [courses, setCourses] = useState<Course[]>(COURSES);
  
  const [siteSettings, setSiteSettings] = useState<SiteSettings>({
    title: 'Mainra Learning',
    email: 'mainralearning@gmail.com',
    phone: '085117590001',
    address: '' // Removed physical address
  });

  // Handle browser back button manually for SPA feel without router
  useEffect(() => {
    const handlePopState = () => {
      if (currentView !== 'home') {
        setCurrentView('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [currentView]);

  // Content Filter
  const studentCourses = courses.filter(c => c.audience === TargetAudience.STUDENTS);
  const careerCourses = courses.filter(c => c.audience === TargetAudience.CAREER);

  const SectionHeader = ({ title, subtitle, icon: Icon }: { title: string, subtitle: string, icon: any }) => (
    <div className="flex flex-col items-center text-center mb-12">
      <div className="p-3 bg-mainra-dark border border-gray-700 rounded-xl mb-4 shadow-lg">
        <Icon size={32} className="text-mainra-orange" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{title}</h2>
      <p className="text-gray-400 max-w-xl">{subtitle}</p>
    </div>
  );

  const renderContent = () => {
    switch (currentView) {
      case 'kids':
        return (
          <KidsPage 
            courses={courses} 
            onNavigate={(view) => setCurrentView(view)} 
            onBack={() => {
              setCurrentView('home');
              window.scrollTo(0, 0);
            }} 
          />
        );
      case 'holiday':
        return <SchoolHolidayPage onBack={() => setCurrentView('home')} />;
      case 'faq':
        return <FAQPage onBack={() => setCurrentView('home')} />;
      case 'contact':
        return <ContactPage onBack={() => setCurrentView('home')} settings={siteSettings} />;
      case 'career':
        return <CareerPage onBack={() => setCurrentView('home')} />;
      case 'privacy':
        return <PrivacyPage onBack={() => setCurrentView('home')} />;
      case 'home':
      default:
        return (
          <div className="min-h-screen bg-mainra-dark text-mainra-white font-sans selection:bg-mainra-orange selection:text-white">
            <Header 
              onNavigate={(view) => setCurrentView(view as any)} 
            />
            
            <main>
              <Hero />

              {/* Note: Kids Section removed from Home, moved to dedicated page */}

              {/* AI Section */}
              <AIRecommender />

              {/* Students Section */}
              <section id="students" className="py-20 bg-mainra-dark border-t border-gray-800">
                <div className="container mx-auto px-4">
                  <SectionHeader 
                    title="Untuk Pelajar & Mahasiswa" 
                    subtitle="Lengkapi skill akademismu dengan kemampuan teknis industri yang paling dicari."
                    icon={GraduationCap}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {studentCourses.map(course => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                    <div className="bg-[#252525] border border-dashed border-gray-600 rounded-xl flex flex-col items-center justify-center p-8 text-center text-gray-400 hover:border-mainra-blue hover:text-mainra-blue transition-colors cursor-pointer group">
                       <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mb-4 group-hover:bg-mainra-blue/20">
                          <ArrowRight size={24} />
                       </div>
                       <h4 className="font-semibold text-lg">Lihat Semua Kelas Pelajar</h4>
                    </div>
                  </div>
                </div>
              </section>

              {/* Career Section */}
              <section id="career" className="py-20 bg-[#1f1f1f]">
                <div className="container mx-auto px-4">
                   <SectionHeader 
                    title="Akselerasi Karir Profesional" 
                    subtitle="Kurikulum advanced untuk Anda yang serius terjun ke industri game global."
                    icon={Briefcase}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {careerCourses.map(course => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </div>
                </div>
              </section>

              {/* Instructor Profile Section */}
              <InstructorProfile />

              {/* CTA Section */}
              <section className="py-24 bg-mainra-blue relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                   <h2 className="text-4xl font-bold text-white mb-6">Siap Mewujudkan Ide Game-mu?</h2>
                   <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-10">
                     Dapatkan bimbingan intensif, materi standar industri, dan komunitas yang suportif untuk memulai karirmu.
                   </p>
                   <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <button 
                      onClick={() => setCurrentView('contact')}
                      className="bg-white text-mainra-blue font-bold text-lg px-8 py-4 rounded-xl shadow-xl hover:bg-gray-100 transition-colors"
                     >
                       Hubungi Kami
                     </button>
                     <button 
                       onClick={() => setCurrentView('faq')}
                       className="bg-transparent border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
                       Tanya Jawab (FAQ)
                     </button>
                   </div>
                </div>
              </section>
            </main>

            <Footer 
              onNavigate={(view) => setCurrentView(view)} 
              settings={siteSettings}
            />
          </div>
        );
    }
  };

  return (
    <>
      {renderContent()}
      <WhatsAppBubble phoneNumber={siteSettings.phone} />
    </>
  );
};

export default App;