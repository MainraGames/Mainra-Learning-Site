import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  MessageSquare, 
  Settings, 
  LogOut, 
  Plus, 
  Search, 
  MoreVertical, 
  TrendingUp, 
  DollarSign,
  Bell,
  Trash2,
  Edit2,
  X,
  Check,
  Send,
  Eye,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import { Button } from './Button';
import { Course, TargetAudience, SiteSettings, User } from '../types';

interface AdminDashboardProps {
  onLogout: () => void;
  courses: Course[];
  setCourses: (courses: Course[]) => void;
  siteSettings: SiteSettings;
  setSiteSettings: (settings: SiteSettings) => void;
  users: User[];
  setUsers: (users: User[]) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ 
  onLogout, 
  courses, 
  setCourses,
  siteSettings,
  setSiteSettings,
  users,
  setUsers
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'users' | 'messages' | 'settings'>('overview');
  
  // --- Data State (Messages are still local simulated data) ---
  const [messages, setMessages] = useState([
    { id: 1, name: 'Andi Saputra', email: 'andi@example.com', subject: 'Tanya soal Unity Junior', content: 'Halo admin, apakah kelas Unity Junior cocok untuk anak umur 7 tahun? Anak saya suka sekali main Minecraft.', date: '2 Jam yang lalu', status: 'unread' },
    { id: 2, name: 'Siti Aminah', email: 'siti@test.com', subject: 'Masalah pembayaran', content: 'Saya sudah transfer tapi status di dashboard masih pending. Mohon bantuannya.', date: '5 Jam yang lalu', status: 'read' },
    { id: 3, name: 'Budi Doremi', email: 'budi@music.com', subject: 'Request silabus Career', content: 'Bisa minta detail silabus untuk kelas Career? Saya tertarik dengan materi multiplayer networking.', date: '1 Hari yang lalu', status: 'read' },
  ]);

  // --- UI State ---
  const [searchQuery, setSearchQuery] = useState('');
  
  // Course UI State
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Partial<Course>>({});
  
  // User UI State
  const [showUserModal, setShowUserModal] = useState(false);
  const [editingUser, setEditingUser] = useState<Partial<User>>({});
  const [userRoleFilter, setUserRoleFilter] = useState<'all' | 'student' | 'mentor'>('all');

  // View User UI State
  const [showViewUserModal, setShowViewUserModal] = useState(false);
  const [viewingUser, setViewingUser] = useState<User | null>(null);

  // Message UI State
  const [selectedMessageId, setSelectedMessageId] = useState<number | null>(null);
  const [replyText, setReplyText] = useState('');

  // --- Helpers ---
  const stats = [
    { title: 'Total Pendapatan', value: 'Rp 145.2 Jt', change: '+12.5%', icon: DollarSign, color: 'text-green-500', bg: 'bg-green-500/10' },
    { title: 'Siswa Aktif', value: String(users.filter(u => u.role === 'student').length), change: '+5.2%', icon: Users, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { title: 'Kursus Terjual', value: String(courses.length * 120 + 85), change: '+8.1%', icon: BookOpen, color: 'text-mainra-orange', bg: 'bg-orange-500/10' },
    { title: 'Pesan Baru', value: String(messages.filter(m => m.status === 'unread').length), change: 'New', icon: MessageSquare, color: 'text-purple-500', bg: 'bg-purple-500/10' },
  ];

  // --- Course Functions ---
  const handleEditCourse = (course: Course) => {
    setEditingCourse({ ...course });
    setShowCourseModal(true);
  };

  const handleAddCourse = () => {
    setEditingCourse({
      id: '',
      title: '',
      description: '',
      audience: TargetAudience.STUDENTS,
      level: 'Pemula',
      duration: '',
      price: '',
      image: '',
      tags: []
    });
    setShowCourseModal(true);
  };

  const handleDeleteCourse = (id: string) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus kursus ini? (Perubahan akan tampil di halaman utama)')) {
      setCourses(courses.filter(c => c.id !== id));
    }
  };

  const handleSaveCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCourse.title) return;

    if (editingCourse.id) {
      // Edit existing
      setCourses(courses.map(c => c.id === editingCourse.id ? { ...c, ...editingCourse } as Course : c));
    } else {
      // Add new
      const newCourse = {
        ...editingCourse,
        id: Date.now().toString(),
        image: editingCourse.image || `https://picsum.photos/400/250?random=${Date.now()}`,
        tags: editingCourse.tags || ['New']
      } as Course;
      setCourses([...courses, newCourse]);
    }
    setShowCourseModal(false);
  };

  // --- User Functions ---
  const handleAddUser = () => {
    setEditingUser({
      id: '',
      name: '',
      email: '',
      role: 'student',
    });
    setShowUserModal(true);
  };

  const handleEditUser = (user: User) => {
    setEditingUser({ ...user });
    setShowUserModal(true);
  };

  const handleViewUser = (user: User) => {
    setViewingUser(user);
    setShowViewUserModal(true);
  };

  const handleDeleteUser = (id: string) => {
    if (window.confirm('Hapus pengguna ini?')) {
      setUsers(users.filter(u => u.id !== id));
    }
  };

  const handleSaveUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingUser.email || !editingUser.name) return;

    if (editingUser.id) {
      // Edit
      setUsers(users.map(u => u.id === editingUser.id ? { ...u, ...editingUser } as User : u));
    } else {
      // Add
      const newUser = {
        ...editingUser,
        id: Date.now().toString(),
        joinedDate: new Date().toISOString().split('T')[0]
      } as User;
      setUsers([...users, newUser]);
    }
    setShowUserModal(false);
  };

  // --- Message Functions ---
  const handleSelectMessage = (id: number) => {
    setSelectedMessageId(id);
    setMessages(messages.map(m => m.id === id ? { ...m, status: 'read' } : m));
    setReplyText('');
  };

  const handleDeleteMessage = (id: number) => {
    if (window.confirm('Hapus pesan ini?')) {
      setMessages(messages.filter(m => m.id !== id));
      if (selectedMessageId === id) setSelectedMessageId(null);
    }
  };

  const handleSendReply = () => {
    if (!replyText.trim()) return;
    const msg = messages.find(m => m.id === selectedMessageId);
    if (msg) {
      alert(`Balasan telah dikirim ke ${msg.email}:\n\n"${replyText}"`);
      setReplyText('');
    }
  };

  // --- Components ---
  const SidebarItem = ({ id, icon: Icon, label }: { id: typeof activeTab, icon: any, label: string }) => (
    <button 
      onClick={() => {
        setActiveTab(id);
        setSearchQuery(''); // Reset search when switching tabs
      }}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
        activeTab === id 
          ? 'bg-mainra-orange text-white font-medium shadow-lg shadow-orange-900/20' 
          : 'text-gray-400 hover:bg-white/5 hover:text-white'
      }`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="bg-mainra-dark min-h-screen flex text-white font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-[#151515] border-r border-gray-800 flex flex-col fixed h-full z-20">
        <div className="p-6 border-b border-gray-800">
          <h2 className="text-xl font-bold tracking-tight">Mainra<span className="text-mainra-orange">.</span> Admin</h2>
          <p className="text-xs text-gray-500 mt-1">Content Management Portal</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <SidebarItem id="overview" icon={LayoutDashboard} label="Dashboard" />
          <SidebarItem id="courses" icon={BookOpen} label="Kelola Kursus" />
          <SidebarItem id="users" icon={Users} label="Kelola Pengguna" />
          <SidebarItem id="messages" icon={MessageSquare} label="Pesan Masuk" />
          <div className="pt-4 mt-4 border-t border-gray-800">
             <SidebarItem id="settings" icon={Settings} label="Pengaturan" />
          </div>
        </nav>

        <div className="p-4 border-t border-gray-800">
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <LogOut size={20} />
            <span>Keluar</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 bg-mainra-dark min-h-screen">
        {/* Top Header */}
        <header className="h-16 bg-[#151515]/80 backdrop-blur border-b border-gray-800 flex items-center justify-between px-8 sticky top-0 z-10">
          <h2 className="font-semibold text-lg capitalize">{activeTab === 'overview' ? 'Dashboard Overview' : activeTab}</h2>
          <div className="flex items-center gap-4">
            <div className="relative">
               <Bell size={20} className="text-gray-400 hover:text-white cursor-pointer" />
               <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </div>
            <div className="flex items-center gap-3 pl-4 border-l border-gray-700">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-mainra-orange to-red-500"></div>
              <span className="text-sm font-medium">Administrator</span>
            </div>
          </div>
        </header>

        <div className="p-8 animate-fade-in pb-20">
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-[#252525] p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-3 rounded-lg ${stat.bg}`}>
                        <stat.icon className={stat.color} size={24} />
                      </div>
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}>
                        {stat.change}
                      </span>
                    </div>
                    <h3 className="text-gray-400 text-sm font-medium">{stat.title}</h3>
                    <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="bg-[#252525] rounded-xl border border-gray-800 p-6">
                <h3 className="text-lg font-bold mb-6">Aktivitas Terkini</h3>
                <div className="space-y-6">
                   <div className="flex gap-4 items-center border-b border-gray-800 pb-4">
                     <div className="w-2 h-2 rounded-full bg-mainra-orange shrink-0"></div>
                     <p className="text-gray-300 text-sm">
                       <span className="font-bold text-white">System</span>: Database backup berhasil dilakukan.
                       <span className="block text-gray-500 text-xs mt-1">10 menit yang lalu</span>
                     </p>
                   </div>
                   {courses.slice(0, 2).map((c, i) => (
                     <div key={i} className="flex gap-4 items-center border-b border-gray-800 pb-4 last:border-0">
                       <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>
                       <p className="text-gray-300 text-sm">
                         <span className="font-bold text-white">Enrollment</span>: Siswa baru mendaftar di kelas <span className="text-mainra-orange">{c.title}</span>.
                         <span className="block text-gray-500 text-xs mt-1">{i + 1} jam yang lalu</span>
                       </p>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          )}

          {/* Courses Tab */}
          {activeTab === 'courses' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div className="relative max-w-md w-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                  <input 
                    type="text" 
                    placeholder="Cari kursus..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#252525] border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-mainra-orange text-white transition-colors"
                  />
                </div>
                <Button variant="primary" className="!px-4 !py-2 text-sm" onClick={handleAddCourse}>
                  <Plus size={16} /> Tambah Kursus
                </Button>
              </div>

              <div className="bg-[#252525] rounded-xl border border-gray-800 overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-[#1F1F1F] text-gray-400 text-xs uppercase font-semibold">
                    <tr>
                      <th className="px-6 py-4">Judul Kursus</th>
                      <th className="px-6 py-4">Target</th>
                      <th className="px-6 py-4">Harga</th>
                      <th className="px-6 py-4 text-center">Durasi</th>
                      <th className="px-6 py-4 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {courses.filter(c => c.title.toLowerCase().includes(searchQuery.toLowerCase())).map((course) => (
                      <tr key={course.id} className="hover:bg-white/5 transition-colors group">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded bg-gray-700 overflow-hidden shrink-0">
                              <img src={course.image} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <div className="font-medium text-white line-clamp-1">{course.title}</div>
                              <div className="text-xs text-gray-500 line-clamp-1">{course.level}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-400">
                          <span className={`px-2 py-1 rounded text-xs border ${
                            course.audience === 'KIDS' ? 'border-blue-500 text-blue-400 bg-blue-500/10' :
                            course.audience === 'STUDENTS' ? 'border-green-500 text-green-400 bg-green-500/10' :
                            'border-purple-500 text-purple-400 bg-purple-500/10'
                          }`}>
                            {course.audience}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-white">{course.price}</td>
                        <td className="px-6 py-4 text-sm text-gray-400 text-center">{course.duration}</td>
                        <td className="px-6 py-4 text-right">
                           <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                             <button onClick={() => handleEditCourse(course)} className="p-2 text-blue-400 hover:bg-blue-400/10 rounded">
                               <Edit2 size={16} />
                             </button>
                             <button onClick={() => handleDeleteCourse(course.id)} className="p-2 text-red-400 hover:bg-red-400/10 rounded">
                               <Trash2 size={16} />
                             </button>
                           </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {courses.length === 0 && (
                  <div className="p-8 text-center text-gray-500">Tidak ada kursus yang ditemukan.</div>
                )}
              </div>
            </div>
          )}

          {/* Users Tab (New) */}
          {activeTab === 'users' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div className="relative max-w-md w-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                  <input 
                    type="text" 
                    placeholder="Cari nama atau email..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#252525] border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-mainra-orange text-white transition-colors"
                  />
                </div>
                <Button variant="primary" className="!px-4 !py-2 text-sm" onClick={handleAddUser}>
                  <Plus size={16} /> Tambah Pengguna
                </Button>
              </div>

              {/* Filter Tabs */}
              <div className="flex gap-2">
                {(['all', 'student', 'mentor'] as const).map(role => (
                  <button
                    key={role}
                    onClick={() => setUserRoleFilter(role)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                      userRoleFilter === role 
                        ? 'bg-mainra-orange text-white' 
                        : 'bg-[#252525] text-gray-400 hover:text-white'
                    }`}
                  >
                    {role === 'all' ? 'Semua Pengguna' : role === 'student' ? 'Pelajar' : 'Mentor'}
                  </button>
                ))}
              </div>

              <div className="bg-[#252525] rounded-xl border border-gray-800 overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-[#1F1F1F] text-gray-400 text-xs uppercase font-semibold">
                    <tr>
                      <th className="px-6 py-4">Nama Pengguna</th>
                      <th className="px-6 py-4">Peran</th>
                      <th className="px-6 py-4">Email</th>
                      <th className="px-6 py-4">Tanggal Bergabung</th>
                      <th className="px-6 py-4 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {users
                      .filter(u => userRoleFilter === 'all' || u.role === userRoleFilter)
                      .filter(u => u.name.toLowerCase().includes(searchQuery.toLowerCase()) || u.email.toLowerCase().includes(searchQuery.toLowerCase()))
                      .map((user) => (
                      <tr key={user.id} className="hover:bg-white/5 transition-colors group">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                              user.role === 'admin' ? 'bg-red-500/20 text-red-500' : 
                              user.role === 'mentor' ? 'bg-purple-500/20 text-purple-500' : 'bg-blue-500/20 text-blue-500'
                            }`}>
                              {user.name.charAt(0)}
                            </div>
                            <div className="font-medium text-white">{user.name}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                           <div className="flex items-center gap-2">
                             {user.role === 'student' && <GraduationCap size={16} className="text-blue-500" />}
                             {user.role === 'mentor' && <Briefcase size={16} className="text-purple-500" />}
                             <span className="capitalize text-sm text-gray-300">{user.role}</span>
                           </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-400">{user.email}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">{user.joinedDate || '-'}</td>
                        <td className="px-6 py-4 text-right">
                           <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                             <button onClick={() => handleViewUser(user)} className="p-2 text-green-400 hover:bg-green-400/10 rounded">
                               <Eye size={16} />
                             </button>
                             <button onClick={() => handleEditUser(user)} className="p-2 text-blue-400 hover:bg-blue-400/10 rounded">
                               <Edit2 size={16} />
                             </button>
                             {user.role !== 'admin' && (
                               <button onClick={() => handleDeleteUser(user.id)} className="p-2 text-red-400 hover:bg-red-400/10 rounded">
                                 <Trash2 size={16} />
                               </button>
                             )}
                           </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {users.length === 0 && (
                  <div className="p-8 text-center text-gray-500">Tidak ada pengguna yang ditemukan.</div>
                )}
              </div>
            </div>
          )}

          {/* Messages Tab */}
          {activeTab === 'messages' && (
            <div className="bg-[#252525] rounded-xl border border-gray-800 overflow-hidden h-[600px] flex">
              {/* Message List */}
              <div className="w-1/3 border-r border-gray-800 flex flex-col">
                <div className="p-4 border-b border-gray-800">
                  <h3 className="font-bold text-white">Inbox ({messages.filter(m => m.status === 'unread').length})</h3>
                </div>
                <div className="overflow-y-auto flex-1 divide-y divide-gray-800">
                  {messages.map((msg) => (
                    <div 
                      key={msg.id} 
                      onClick={() => handleSelectMessage(msg.id)}
                      className={`p-4 cursor-pointer hover:bg-white/5 transition-colors ${selectedMessageId === msg.id ? 'bg-white/10' : ''} ${msg.status === 'unread' ? 'border-l-2 border-mainra-orange bg-mainra-orange/5' : 'border-l-2 border-transparent'}`}
                    >
                       <div className="flex justify-between items-start mb-1">
                         <span className={`text-sm font-bold truncate pr-2 ${msg.status === 'unread' ? 'text-white' : 'text-gray-400'}`}>{msg.name}</span>
                         <span className="text-[10px] text-gray-500 shrink-0">{msg.date}</span>
                       </div>
                       <p className="text-xs text-gray-400 truncate font-medium">{msg.subject}</p>
                       <p className="text-[10px] text-gray-500 truncate mt-1">{msg.content}</p>
                    </div>
                  ))}
                  {messages.length === 0 && <div className="p-4 text-center text-gray-500 text-sm">Tidak ada pesan.</div>}
                </div>
              </div>
              
              {/* Message Detail */}
              <div className="flex-1 flex flex-col bg-[#1A1A1A]">
                {selectedMessageId ? (
                  (() => {
                    const msg = messages.find(m => m.id === selectedMessageId);
                    if (!msg) return null;
                    return (
                      <>
                        <div className="p-6 border-b border-gray-800 flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{msg.subject}</h3>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                              <span>Dari: <span className="text-white">{msg.name}</span> &lt;{msg.email}&gt;</span>
                            </div>
                          </div>
                          <button onClick={() => handleDeleteMessage(msg.id)} className="text-gray-400 hover:text-red-500 p-2 hover:bg-red-500/10 rounded transition-colors">
                            <Trash2 size={18} />
                          </button>
                        </div>
                        <div className="flex-1 p-6 overflow-y-auto">
                          <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                        </div>
                        <div className="p-4 border-t border-gray-800 bg-[#252525]">
                          <div className="flex gap-2">
                             <input 
                               type="text" 
                               value={replyText}
                               onChange={(e) => setReplyText(e.target.value)}
                               placeholder="Ketik balasan Anda..." 
                               className="flex-1 bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-mainra-orange"
                             />
                             <Button variant="primary" onClick={handleSendReply} disabled={!replyText}>
                               <Send size={16} /> Kirim
                             </Button>
                          </div>
                        </div>
                      </>
                    );
                  })()
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-gray-500 p-8">
                    <MessageSquare size={48} className="mb-4 opacity-20" />
                    <p>Pilih pesan untuk melihat detail</p>
                  </div>
                )}
              </div>
            </div>
          )}

           {/* Settings Tab */}
           {activeTab === 'settings' && (
            <div className="max-w-2xl bg-[#252525] p-8 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-6">Pengaturan Umum</h3>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Pengaturan berhasil disimpan! Cek halaman Hubungi Kami untuk melihat perubahan.'); }}>
                <div>
                   <label className="block text-sm text-gray-400 mb-2">Nama Website</label>
                   <input 
                     type="text" 
                     value={siteSettings.title} 
                     onChange={(e) => setSiteSettings({...siteSettings, title: e.target.value})}
                     className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg p-3 text-white focus:border-mainra-orange focus:outline-none transition-colors" 
                   />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                     <label className="block text-sm text-gray-400 mb-2">Email Admin</label>
                     <input 
                       type="email" 
                       value={siteSettings.email} 
                       onChange={(e) => setSiteSettings({...siteSettings, email: e.target.value})}
                       className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg p-3 text-white focus:border-mainra-orange focus:outline-none transition-colors" 
                     />
                  </div>
                  <div>
                     <label className="block text-sm text-gray-400 mb-2">Nomor Telepon</label>
                     <input 
                       type="text" 
                       value={siteSettings.phone} 
                       onChange={(e) => setSiteSettings({...siteSettings, phone: e.target.value})}
                       className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg p-3 text-white focus:border-mainra-orange focus:outline-none transition-colors" 
                     />
                  </div>
                </div>
                <div>
                   <label className="block text-sm text-gray-400 mb-2">Alamat Kantor</label>
                   <textarea 
                     value={siteSettings.address} 
                     onChange={(e) => setSiteSettings({...siteSettings, address: e.target.value})}
                     className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg p-3 text-white focus:border-mainra-orange focus:outline-none transition-colors h-24 resize-none" 
                   />
                </div>
                <div className="pt-4 border-t border-gray-700 flex justify-end">
                   <Button variant="primary" type="submit">
                     <Check size={18} /> Simpan Perubahan
                   </Button>
                </div>
              </form>
            </div>
          )}

        </div>
      </main>

      {/* Course Modal */}
      {showCourseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-[#252525] rounded-xl w-full max-w-lg border border-gray-700 shadow-2xl flex flex-col max-h-[90vh]">
            <div className="p-6 border-b border-gray-700 flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">
                {editingCourse.id ? 'Edit Kursus' : 'Tambah Kursus Baru'}
              </h3>
              <button onClick={() => setShowCourseModal(false)} className="text-gray-400 hover:text-white">
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleSaveCourse} className="p-6 overflow-y-auto space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Judul Kursus</label>
                <input 
                  required
                  type="text" 
                  value={editingCourse.title || ''}
                  onChange={e => setEditingCourse({...editingCourse, title: e.target.value})}
                  className="w-full bg-[#1A1A1A] border border-gray-700 rounded px-3 py-2 text-white focus:border-mainra-orange focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Deskripsi Singkat</label>
                <textarea 
                  required
                  value={editingCourse.description || ''}
                  onChange={e => setEditingCourse({...editingCourse, description: e.target.value})}
                  className="w-full bg-[#1A1A1A] border border-gray-700 rounded px-3 py-2 text-white focus:border-mainra-orange focus:outline-none h-20 resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Target Peserta</label>
                  <select 
                    value={editingCourse.audience}
                    onChange={e => setEditingCourse({...editingCourse, audience: e.target.value as TargetAudience})}
                    className="w-full bg-[#1A1A1A] border border-gray-700 rounded px-3 py-2 text-white focus:border-mainra-orange focus:outline-none"
                  >
                    <option value={TargetAudience.KIDS}>Anak-anak (Kids)</option>
                    <option value={TargetAudience.STUDENTS}>Pelajar (Students)</option>
                    <option value={TargetAudience.CAREER}>Karir (Career)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Level</label>
                  <select 
                    value={editingCourse.level}
                    onChange={e => setEditingCourse({...editingCourse, level: e.target.value})}
                    className="w-full bg-[#1A1A1A] border border-gray-700 rounded px-3 py-2 text-white focus:border-mainra-orange focus:outline-none"
                  >
                    <option value="Pemula">Pemula</option>
                    <option value="Menengah">Menengah</option>
                    <option value="Lanjut">Lanjut</option>
                    <option value="Profesional">Profesional</option>
                    <option value="Ahli">Ahli</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Durasi</label>
                  <input 
                    type="text" 
                    placeholder="Contoh: 4 Minggu"
                    value={editingCourse.duration || ''}
                    onChange={e => setEditingCourse({...editingCourse, duration: e.target.value})}
                    className="w-full bg-[#1A1A1A] border border-gray-700 rounded px-3 py-2 text-white focus:border-mainra-orange focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Harga</label>
                  <input 
                    type="text" 
                    placeholder="Contoh: Rp 500.000"
                    value={editingCourse.price || ''}
                    onChange={e => setEditingCourse({...editingCourse, price: e.target.value})}
                    className="w-full bg-[#1A1A1A] border border-gray-700 rounded px-3 py-2 text-white focus:border-mainra-orange focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button 
                  type="button" 
                  onClick={() => setShowCourseModal(false)}
                  className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                >
                  Batal
                </button>
                <Button variant="primary" type="submit">
                  Simpan
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* User Modal */}
      {showUserModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-[#252525] rounded-xl w-full max-w-md border border-gray-700 shadow-2xl flex flex-col">
            <div className="p-6 border-b border-gray-700 flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">
                {editingUser.id ? 'Edit Pengguna' : 'Tambah Pengguna Baru'}
              </h3>
              <button onClick={() => setShowUserModal(false)} className="text-gray-400 hover:text-white">
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleSaveUser} className="p-6 space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Nama Lengkap</label>
                <input 
                  required
                  type="text" 
                  value={editingUser.name || ''}
                  onChange={e => setEditingUser({...editingUser, name: e.target.value})}
                  className="w-full bg-[#1A1A1A] border border-gray-700 rounded px-3 py-2 text-white focus:border-mainra-orange focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Email</label>
                <input 
                  required
                  type="email" 
                  value={editingUser.email || ''}
                  onChange={e => setEditingUser({...editingUser, email: e.target.value})}
                  className="w-full bg-[#1A1A1A] border border-gray-700 rounded px-3 py-2 text-white focus:border-mainra-orange focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Peran (Role)</label>
                <select 
                  value={editingUser.role}
                  onChange={e => setEditingUser({...editingUser, role: e.target.value as any})}
                  className="w-full bg-[#1A1A1A] border border-gray-700 rounded px-3 py-2 text-white focus:border-mainra-orange focus:outline-none"
                >
                  <option value="student">Pelajar (Student)</option>
                  <option value="mentor">Mentor (Instructor)</option>
                  <option value="admin">Administrator</option>
                </select>
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button 
                  type="button" 
                  onClick={() => setShowUserModal(false)}
                  className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                >
                  Batal
                </button>
                <Button variant="primary" type="submit">
                  Simpan
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View User Modal */}
      {showViewUserModal && viewingUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-[#252525] rounded-xl w-full max-w-md border border-gray-700 shadow-2xl flex flex-col relative overflow-hidden">
              {/* Header with gradient background */}
              <div className="h-24 bg-gradient-to-r from-mainra-orange to-red-600 relative">
                  <button onClick={() => setShowViewUserModal(false)} className="absolute top-4 right-4 text-white hover:bg-black/20 p-2 rounded-full transition-colors">
                      <X size={20} />
                    </button>
              </div>
              <div className="px-6 pb-6 -mt-10 relative">
                  <div className="w-20 h-20 rounded-full border-4 border-[#252525] bg-gray-800 flex items-center justify-center text-3xl font-bold text-white mb-4 shadow-lg">
                      {viewingUser.name.charAt(0)}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-1">{viewingUser.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{viewingUser.email}</p>

                  <div className="space-y-4">
                      <div className="bg-[#1A1A1A] p-4 rounded-lg border border-gray-800">
                          <span className="text-xs text-gray-500 uppercase tracking-wider font-bold block mb-1">Peran (Role)</span>
                          <div className="flex items-center gap-2 text-white">
                              {viewingUser.role === 'student' && <GraduationCap size={18} className="text-blue-500" />}
                              {viewingUser.role === 'mentor' && <Briefcase size={18} className="text-purple-500" />}
                              {viewingUser.role === 'admin' && <LayoutDashboard size={18} className="text-red-500" />}
                              <span className="capitalize font-medium">{viewingUser.role}</span>
                          </div>
                      </div>
                      
                      <div className="bg-[#1A1A1A] p-4 rounded-lg border border-gray-800">
                          <span className="text-xs text-gray-500 uppercase tracking-wider font-bold block mb-1">Tanggal Bergabung</span>
                          <div className="text-white font-medium">
                              {viewingUser.joinedDate || 'Tidak diketahui'}
                          </div>
                      </div>
                      
                      <div className="bg-[#1A1A1A] p-4 rounded-lg border border-gray-800">
                          <span className="text-xs text-gray-500 uppercase tracking-wider font-bold block mb-1">User ID</span>
                          <div className="text-gray-400 text-xs font-mono">
                              {viewingUser.id}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      )}
    </div>
  );
};