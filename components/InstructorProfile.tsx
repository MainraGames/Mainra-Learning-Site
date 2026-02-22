import React from 'react';
import { Award, Linkedin, Github, Globe } from 'lucide-react';

const INSTRUCTORS = [
  {
    id: 1,
    name: "Ahmad Mainra",
    role: "Lead Game Developer",
    image: "https://picsum.photos/seed/ahmad/400/400",
    bio: "8+ tahun pengalaman merilis game di PC & Mobile. Expert di Unity & C#.",
    socials: { linkedin: "#", github: "#", portfolio: "#" }
  },
  {
    id: 2,
    name: "Sarah Wijaya",
    role: "Senior 3D Artist",
    image: "https://picsum.photos/seed/sarah/400/400",
    bio: "Mantan artist di studio AAA. Spesialis karakter dan environment design dengan Blender.",
    socials: { linkedin: "#", portfolio: "#" }
  },
  {
    id: 3,
    name: "Budi Santoso",
    role: "Game Designer",
    image: "https://picsum.photos/seed/budi/400/400",
    bio: "Pakar mekanik game dan level design. Fokus menciptakan pengalaman bermain yang engaging.",
    socials: { linkedin: "#", github: "#" }
  }
];

export const InstructorProfile: React.FC = () => {
  return (
    <section id="instructors" className="py-20 bg-mainra-dark border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="p-3 bg-[#252525] border border-gray-700 rounded-xl mb-4 shadow-lg">
            <Award size={32} className="text-mainra-orange" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Kenali Instruktur Anda</h2>
          <p className="text-gray-400 max-w-xl">Belajar langsung dari praktisi industri dengan pengalaman bertahun-tahun di bidang pengembangan game.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {INSTRUCTORS.map((instructor) => (
            <div key={instructor.id} className="bg-[#1f1f1f] border border-gray-800 rounded-2xl overflow-hidden shadow-xl hover:border-gray-600 transition-all duration-300 group">
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={instructor.image} 
                  alt={instructor.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f1f1f] via-transparent to-transparent opacity-80"></div>
              </div>
              
              <div className="p-6 relative">
                <h3 className="text-2xl font-bold text-white mb-1">{instructor.name}</h3>
                <p className="text-mainra-blue font-medium text-sm mb-4">{instructor.role}</p>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {instructor.bio}
                </p>
                
                <div className="flex gap-3">
                  {instructor.socials.linkedin && (
                    <a href={instructor.socials.linkedin} className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-mainra-blue hover:text-white transition-colors" aria-label="LinkedIn">
                      <Linkedin size={16} />
                    </a>
                  )}
                  {instructor.socials.github && (
                    <a href={instructor.socials.github} className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-mainra-blue hover:text-white transition-colors" aria-label="GitHub">
                      <Github size={16} />
                    </a>
                  )}
                  {instructor.socials.portfolio && (
                    <a href={instructor.socials.portfolio} className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-mainra-blue hover:text-white transition-colors" aria-label="Portfolio">
                      <Globe size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
