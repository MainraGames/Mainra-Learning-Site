import { GoogleGenAI } from "@google/genai";
import { COURSES } from '../constants';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';

// Initialize client outside if key exists, or handle gracefully inside
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const getCourseRecommendation = async (userQuery: string): Promise<string> => {
  if (!ai) {
    return "Maaf, fitur AI belum dikonfigurasi (API Key hilang). Silakan hubungi admin.";
  }

  const courseContext = COURSES.map(c => 
    `- ${c.title} (Target: ${c.audience}, Level: ${c.level}, Tags: ${c.tags.join(', ')})`
  ).join('\n');

  const systemInstruction = `
    Anda adalah asisten akademik cerdas untuk "Mainra Learning", sebuah platform kursus Unity Game Development.
    Tujuan Anda adalah merekomendasikan kursus yang tepat berdasarkan input pengguna.
    
    Berikut adalah daftar kursus yang tersedia:
    ${courseContext}

    Gunakan nada bicara yang ramah, memotivasi, dan profesional.
    Jika input pengguna tidak jelas, tanyakan kembali latar belakang mereka (apakah anak-anak, pelajar, atau profesional).
    Berikan jawaban ringkas namun informatif dalam Bahasa Indonesia.
    Gunakan format markdown sederhana (bold/list) agar mudah dibaca.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "Maaf, saya tidak dapat memberikan rekomendasi saat ini.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Terjadi kesalahan saat menghubungi asisten AI. Silakan coba lagi nanti.";
  }
};