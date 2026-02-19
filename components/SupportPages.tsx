import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp, Mail, MapPin, Phone, Send, CheckCircle, Shield, FileText } from 'lucide-react';
import { Button } from './Button';
import { SiteSettings } from '../types';

interface PageProps {
  onBack: () => void;
}

interface ContactPageProps extends PageProps {
  settings?: SiteSettings;
}

// --- FAQ Page ---
export const FAQPage: React.FC<PageProps> = ({ onBack }) => {
  const faqs = [
    { q: "Apakah pemula tanpa pengalaman coding bisa ikut?", a: "Tentu saja! Kurikulum kami dirancang dari dasar. Untuk anak-anak kami menggunakan Visual Scripting, dan untuk pelajar kami mulai dari pengenalan logika pemrograman sebelum masuk ke sintaks C#." },
    { q: "Spesifikasi laptop/PC seperti apa yang dibutuhkan?", a: "Untuk Unity 2D (Kelas Anak/Pemula), Laptop dengan RAM 4GB dan prosesor i3/Ryzen 3 sudah cukup. Untuk kelas 3D/Career, disarankan minimal RAM 8GB dan memiliki dedicated VGA (Nvidia/AMD)." },
    { q: "Apakah mendapat sertifikat?", a: "Ya, seluruh peserta yang menyelesaikan proyek akhir akan mendapatkan sertifikat penyelesaian dari Mainra Learning. Untuk kelas Career, kami juga membantu persiapan ujian Unity Certified Associate (Internasional)." },
    { q: "Bagaimana sistem belajarnya?", a: "Pembelajaran dilakukan secara Hybrid (Online via Zoom & Offline di hub Jakarta). Materi video tersedia selamanya (Lifetime Access) dan ada sesi mentoring live setiap minggu." },
    { q: "Apakah ada jaminan penyaluran kerja?", a: "Untuk program Career Bootcamp, kami memiliki hiring partner studio game. Kami tidak menjamin 100% diterima karena tergantung performa, namun kami menjamin akses ke jaringan rekrutmen tersebut dan review portofolio." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-mainra-dark min-h-screen pt-24 pb-20 animate-fade-in text-white">
      <div className="container mx-auto px-4">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-mainra-orange mb-8 transition-colors">
          <ArrowLeft size={20} /> Kembali
        </button>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-center">Tanya Jawab (FAQ)</h1>
          <p className="text-gray-400 text-center mb-12">Jawaban untuk pertanyaan yang sering diajukan calon murid.</p>
          
          <div className="space-y-4">
            {faqs.map((item, idx) => (
              <div key={idx} className="bg-[#2A2A2A] rounded-xl border border-gray-800 overflow-hidden">
                <button 
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-lg">{item.q}</span>
                  {openIndex === idx ? <ChevronUp className="text-mainra-orange" /> : <ChevronDown className="text-gray-500" />}
                </button>
                {openIndex === idx && (
                  <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-gray-700 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Contact Page ---
export const ContactPage: React.FC<ContactPageProps> = ({ onBack, settings }) => {
  // Fallback defaults if settings not provided
  const title = settings?.title || 'Mainra Learning';
  const address = settings?.address || 'Jl. Teknologi Raya No. 10, Kebayoran Baru, Jakarta Selatan 12150';
  const email = settings?.email || 'halo@mainralearning.id';
  const phone = settings?.phone || '+62 812-3456-7890 (Admin)';

  return (
    <div className="bg-mainra-dark min-h-screen pt-24 pb-20 animate-fade-in text-white">
      <div className="container mx-auto px-4">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-mainra-orange mb-8 transition-colors">
          <ArrowLeft size={20} /> Kembali
        </button>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h1 className="text-4xl font-bold mb-6">Hubungi Kami</h1>
            <p className="text-gray-400 mb-8">Punya pertanyaan tentang program kursus atau kerjasama korporat? Tim kami siap membantu Anda.</p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-mainra-blue/20 p-3 rounded-lg"><MapPin className="text-mainra-blue" /></div>
                <div>
                  <h3 className="font-bold mb-1">Kantor Pusat</h3>
                  <p className="text-gray-400 text-sm whitespace-pre-wrap">{address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-mainra-orange/20 p-3 rounded-lg"><Mail className="text-mainra-orange" /></div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-gray-400 text-sm">{email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-500/20 p-3 rounded-lg"><Phone className="text-green-500" /></div>
                <div>
                  <h3 className="font-bold mb-1">WhatsApp</h3>
                  <p className="text-gray-400 text-sm">{phone}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#2A2A2A] p-8 rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold mb-6">Kirim Pesan</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Nama Lengkap</label>
                <input type="text" className="w-full bg-mainra-dark border border-gray-700 rounded-lg p-3 text-white focus:border-mainra-orange focus:outline-none" placeholder="Masukkan nama Anda" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input type="email" className="w-full bg-mainra-dark border border-gray-700 rounded-lg p-3 text-white focus:border-mainra-orange focus:outline-none" placeholder="email@contoh.com" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Pesan</label>
                <textarea className="w-full bg-mainra-dark border border-gray-700 rounded-lg p-3 text-white focus:border-mainra-orange focus:outline-none h-32 resize-none" placeholder="Tulis pesan Anda disini..."></textarea>
              </div>
              <Button variant="primary" className="w-full">
                <Send size={18} /> Kirim Pesan
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Career Mentor Page ---
export const CareerPage: React.FC<PageProps> = ({ onBack }) => {
  return (
    <div className="bg-mainra-dark min-h-screen pt-24 pb-20 animate-fade-in text-white">
      <div className="container mx-auto px-4">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-mainra-orange mb-8 transition-colors">
          <ArrowLeft size={20} /> Kembali
        </button>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-mainra-orange font-bold tracking-widest uppercase text-sm mb-2 block">We Are Hiring</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Jadilah Mentor Game Dev</h1>
          <p className="text-xl text-gray-400">Bagikan ilmu Anda dan bantu lahirkan talenta baru di industri game Indonesia.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#252525] p-6 rounded-xl border border-gray-800">
            <h3 className="font-bold text-xl mb-4 text-mainra-blue">Impactful Work</h3>
            <p className="text-gray-400 text-sm">Berkontribusi langsung pada ekosistem pendidikan teknologi.</p>
          </div>
          <div className="bg-[#252525] p-6 rounded-xl border border-gray-800">
             <h3 className="font-bold text-xl mb-4 text-mainra-orange">Flexible Schedule</h3>
            <p className="text-gray-400 text-sm">Pilih jadwal mengajar di akhir pekan atau malam hari (Remote/On-site).</p>
          </div>
          <div className="bg-[#252525] p-6 rounded-xl border border-gray-800">
             <h3 className="font-bold text-xl mb-4 text-green-500">Competitive Salary</h3>
            <p className="text-gray-400 text-sm">Honor mengajar yang kompetitif dan bonus performa.</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-[#2A2A2A] rounded-2xl p-8 border border-gray-800">
          <h2 className="text-2xl font-bold mb-6">Posisi Terbuka</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-700 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="text-xl font-bold">Unity Instructor (Kids)</h3>
                <p className="text-gray-400 text-sm mt-1">Full-time / Part-time • Remote Friendly</p>
                <div className="flex gap-2 mt-2">
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded">Sabar</span>
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded">Visual Scripting</span>
                </div>
              </div>
              <Button variant="outline" className="shrink-0">Apply Now</Button>
            </div>
            <div className="border-b border-gray-700 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="text-xl font-bold">C# Expert Mentor</h3>
                <p className="text-gray-400 text-sm mt-1">Part-time (Weekend) • On-site Jakarta</p>
                <div className="flex gap-2 mt-2">
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded">Advanced C#</span>
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded">Industry Experience</span>
                </div>
              </div>
              <Button variant="outline" className="shrink-0">Apply Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Privacy Policy Page ---
export const PrivacyPage: React.FC<PageProps> = ({ onBack }) => {
  return (
    <div className="bg-mainra-dark min-h-screen pt-24 pb-20 animate-fade-in text-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-mainra-orange mb-8 transition-colors">
          <ArrowLeft size={20} /> Kembali
        </button>
        
        <div className="bg-[#2A2A2A] p-8 md:p-12 rounded-xl border border-gray-800 shadow-xl">
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-700">
            <Shield className="text-mainra-orange" size={32} />
            <h1 className="text-3xl font-bold">Kebijakan Privasi</h1>
          </div>
          
          <div className="prose prose-invert prose-sm max-w-none text-gray-300 space-y-6">
            <p>Terakhir diperbarui: 1 Januari 2024</p>
            
            <section>
              <h3 className="text-xl font-bold text-white mb-3">1. Pendahuluan</h3>
              <p>Mainra Learning ("kami") menghargai privasi Anda. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat menggunakan layanan kami.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-3">2. Informasi yang Kami Kumpulkan</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Informasi Akun: Nama, alamat email, nomor telepon.</li>
                <li>Data Pembayaran: Diproses oleh pihak ketiga (Payment Gateway), kami tidak menyimpan detail kartu kredit.</li>
                <li>Data Aktivitas: Progress belajar, nilai kuis, dan interaksi dalam kelas.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-3">3. Penggunaan Informasi</h3>
              <p>Kami menggunakan data Anda untuk:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Menyediakan akses ke kelas dan materi pembelajaran.</li>
                <li>Mengirimkan sertifikat dan laporan perkembangan.</li>
                <li>Menghubungi Anda terkait pembaruan layanan atau promo (dapat di-unsubscribe).</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-3">4. Keamanan Data</h3>
              <p>Kami menerapkan langkah-langkah keamanan teknis untuk melindungi data Anda dari akses yang tidak sah. Namun, tidak ada metode transmisi internet yang 100% aman.</p>
            </section>

             <section>
              <h3 className="text-xl font-bold text-white mb-3">5. Hubungi Kami</h3>
              <p>Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi kami melalui halaman "Hubungi Kami".</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};