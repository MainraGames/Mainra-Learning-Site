import React, { useState } from 'react';
import { X, Mail, Lock, User as UserIcon, ArrowRight, AlertCircle } from 'lucide-react';
import { Button } from './Button';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (email: string, name?: string) => void;
  initialMode?: 'login' | 'register';
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLogin, initialMode = 'login' }) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate network delay
    setTimeout(() => {
      if (!email || !password) {
        setError('Mohon isi semua field');
        setIsLoading(false);
        return;
      }

      if (mode === 'register' && !name) {
        setError('Nama lengkap wajib diisi');
        setIsLoading(false);
        return;
      }

      // Simple validation mock
      if (email.includes('@')) {
        onLogin(email, name);
        onClose();
      } else {
        setError('Format email tidak valid');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-[#252525] border border-gray-700 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
        {/* Header Image/Pattern */}
        <div className="h-32 bg-gradient-to-r from-mainra-orange to-red-600 relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
          <h2 className="text-3xl font-bold text-white relative z-10">
            {mode === 'login' ? 'Selamat Datang' : 'Bergabunglah'}
          </h2>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-8">
          {error && (
            <div className="mb-6 bg-red-500/10 border border-red-500/50 rounded-lg p-3 flex items-center gap-2 text-red-400 text-sm">
              <AlertCircle size={16} />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Nama Lengkap</label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white focus:border-mainra-orange focus:outline-none transition-colors"
                    placeholder="Contoh: Budi Santoso"
                  />
                </div>
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white focus:border-mainra-orange focus:outline-none transition-colors"
                  placeholder="nama@email.com"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white focus:border-mainra-orange focus:outline-none transition-colors"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <Button variant="primary" className="w-full mt-6 py-3" disabled={isLoading}>
              {isLoading ? (
                <span className="flex items-center gap-2">Memproses...</span>
              ) : (
                <span className="flex items-center gap-2">
                  {mode === 'login' ? 'Masuk Sekarang' : 'Daftar Akun'} <ArrowRight size={18} />
                </span>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-400">
            {mode === 'login' ? 'Belum punya akun? ' : 'Sudah punya akun? '}
            <button 
              onClick={() => {
                setMode(mode === 'login' ? 'register' : 'login');
                setError('');
              }}
              className="text-mainra-orange font-bold hover:underline"
            >
              {mode === 'login' ? 'Daftar disini' : 'Masuk disini'}
            </button>
          </div>
          
          {/* Helper hint for demo */}
          <div className="mt-4 pt-4 border-t border-gray-800 text-xs text-gray-600 text-center">
            Demo Tip: Gunakan <b>admin@mainra.id</b> untuk masuk sebagai Admin.
          </div>
        </div>
      </div>
    </div>
  );
};