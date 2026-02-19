import React, { useState } from 'react';
import { Button } from './Button';
import { getCourseRecommendation } from '../services/geminiService';
import { Sparkles, Send, Bot } from 'lucide-react';

export const AIRecommender: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    setResponse('');
    
    try {
      const result = await getCourseRecommendation(query);
      setResponse(result);
    } catch (error) {
      setResponse("Maaf, terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-mainra-dark to-[#252525] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-mainra-blue opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-mainra-orange opacity-5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#333] border border-gray-700 rounded-full px-4 py-1 mb-4">
            <Sparkles size={16} className="text-mainra-orange" />
            <span className="text-sm font-medium text-gray-300">Powered by Gemini AI</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Bingung Memilih Kelas?
          </h2>
          <p className="text-mainra-grey text-lg">
            Ceritakan tujuan atau minat Anda, dan AI Advisor kami akan merekomendasikan jalur belajar terbaik untuk Anda di Mainra Learning.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-[#1a1a1a] rounded-2xl shadow-2xl border border-gray-800 p-6 md:p-8">
          <div className="flex flex-col gap-4">
            <div className="relative">
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Contoh: Saya pelajar SMA ingin belajar coding C# untuk membuat game RPG..."
                className="w-full bg-[#252525] text-white border border-gray-700 rounded-xl p-4 pr-12 focus:outline-none focus:border-mainra-orange focus:ring-1 focus:ring-mainra-orange min-h-[120px] resize-none"
              />
              <button 
                onClick={handleSearch}
                disabled={isLoading || !query.trim()}
                className="absolute bottom-4 right-4 p-2 bg-mainra-orange rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-600 transition-colors"
              >
                {isLoading ? <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" /> : <Send size={20} />}
              </button>
            </div>

            {response && (
              <div className="mt-4 bg-[#2A2A2A] rounded-xl p-6 border-l-4 border-mainra-blue animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-mainra-blue/20 rounded-lg">
                    <Bot size={24} className="text-mainra-blue" />
                  </div>
                  <h4 className="font-bold text-white">Rekomendasi Mainra AI</h4>
                </div>
                <div className="prose prose-invert prose-sm max-w-none text-gray-300 leading-relaxed whitespace-pre-wrap">
                  {response}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};