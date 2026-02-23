import { Course, TargetAudience, Testimonial } from './types';

export const COURSES: Course[] = [
  {
    id: 'k1',
    title: 'Unity Junior: Petualangan Kode Pertamaku',
    description: 'Belajar logika dasar pemrograman sambil membuat game 2D sederhana. Cocok untuk anak usia 8-12 tahun.',
    audience: TargetAudience.KIDS,
    level: 'Pemula',
    duration: '4 Minggu',
    price: 'Rp 499.000',
    originalPrice: 'Rp 750.000',
    image: 'https://picsum.photos/400/250?random=1',
    tags: ['Visual Scripting', '2D', 'Logika']
  },
  {
    id: 'k2',
    title: 'Membangun Dunia 3D Ajaib',
    description: 'Anak-anak akan belajar mendesain lingkungan 3D dan karakter lucu menggunakan aset Unity.',
    audience: TargetAudience.KIDS,
    level: 'Menengah',
    duration: '6 Minggu',
    price: 'Rp 749.000',
    originalPrice: 'Rp 1.100.000',
    image: 'https://picsum.photos/400/250?random=2',
    tags: ['3D Design', 'Creativity', 'Fun']
  },
  {
    id: 's1',
    title: 'Dasar C# & Unity Engine',
    description: 'Fondasi kuat untuk pelajar SMA/Mahasiswa. Pelajari sintaks C# dan antarmuka Unity secara mendalam.',
    audience: TargetAudience.STUDENTS,
    level: 'Pemula',
    duration: '8 Minggu',
    price: 'Rp 1.199.000',
    originalPrice: 'Rp 1.800.000',
    image: 'https://picsum.photos/400/250?random=3',
    tags: ['C#', 'Scripting', 'Physics']
  },
  {
    id: 's2',
    title: 'Matematika untuk Game Dev',
    description: 'Pahami vektor, quaternion, dan fisika di balik pergerakan game. Esensial untuk tugas akhir atau lomba.',
    audience: TargetAudience.STUDENTS,
    level: 'Lanjut',
    duration: '5 Minggu',
    price: 'Rp 899.000',
    originalPrice: 'Rp 1.350.000',
    image: 'https://picsum.photos/400/250?random=4',
    tags: ['Math', 'Vectors', 'Algorithms']
  },
  {
    id: 'c1',
    title: 'Unity Certified Associate Prep',
    description: 'Persiapan karir profesional. Materi mencakup seluruh kurikulum sertifikasi resmi Unity.',
    audience: TargetAudience.CAREER,
    level: 'Profesional',
    duration: '12 Minggu',
    price: 'Rp 3.499.000',
    originalPrice: 'Rp 5.250.000',
    image: 'https://picsum.photos/400/250?random=5',
    tags: ['Certification', 'Professional', 'Architecture']
  },
  {
    id: 'c2',
    title: 'Advanced Multiplayer Networking',
    description: 'Kuasai Netcode for GameObjects dan dedikasi server untuk membangun game online skala besar.',
    audience: TargetAudience.CAREER,
    level: 'Ahli',
    duration: '10 Minggu',
    price: 'Rp 3.999.000',
    originalPrice: 'Rp 6.000.000',
    image: 'https://picsum.photos/400/250?random=6',
    tags: ['Netcode', 'Multiplayer', 'Backend']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Budi Santoso',
    role: 'Orang Tua Murid',
    content: 'Anak saya jadi lebih kreatif dan logis berpikirnya setelah ikut kelas Unity Junior. Sangat direkomendasikan!',
    avatar: 'https://picsum.photos/100/100?random=10'
  },
  {
    id: 't2',
    name: 'Sarah Wijaya',
    role: 'Mahasiswa Informatika',
    content: 'Materi C# di Mainra sangat membantu saya menyelesaikan skripsi game edukasi saya.',
    avatar: 'https://picsum.photos/100/100?random=11'
  }
];