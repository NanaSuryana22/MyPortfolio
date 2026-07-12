import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Globe } from "lucide-react";
import { content } from "./data/portfolioData";

// Import Komponen dan Halaman
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
// import Experience from "./pages/Experience";
// ... import halaman lainnya

const App = () => {
  const [lang, setLang] = useState(null);
  const t = lang ? content[lang] : content.id;

  // Modal Pilih Bahasa (Muncul pertama kali)
  if (!lang) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900 px-6">
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-lg w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
          <div className="mx-auto w-20 h-20 bg-indigo-100 rounded-3xl flex items-center justify-center text-indigo-600">
            <Globe size={40} />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-slate-900">
              Pilih Bahasa / Select Language
            </h1>
            {/* Tambahan subtitle yang hilang */}
            <p className="text-slate-500">
              Selamat datang di Portofolio Nana Suryana
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => setLang("id")}
              className="p-6 rounded-2xl border-2 border-slate-100 hover:border-indigo-600 hover:bg-indigo-50 transition-all text-slate-700 flex flex-col items-center justify-center gap-2 group"
            >
              <span className="text-xl font-bold text-slate-900">ID</span>
              <span className="text-sm font-semibold">Bahasa Indonesia</span>
            </button>
            <button
              onClick={() => setLang("en")}
              className="p-6 rounded-2xl border-2 border-slate-100 hover:border-indigo-600 hover:bg-indigo-50 transition-all text-slate-700 flex flex-col items-center justify-center gap-2 group"
            >
              <span className="text-xl font-bold text-slate-900">US</span>
              <span className="text-sm font-semibold">English (US)</span>
            </button>
          </div>
          
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-600">
      <Navbar t={t} lang={lang} setLang={setLang} />
      
      {/* Area yang berubah-ubah sesuai URL */}
      <main className="pt-20"> {/* Padding top agar tidak tertutup navbar */}
        <Routes>
          <Route path="/" element={<Home t={t} />} />
          <Route path="/about" element={<About t={t} />} />
          {/* Tambahkan Route lainnya di sini sesuai path yang dibuat */}
          {/* <Route path="/experience" element={<Experience t={t} />} /> */}
        </Routes>
      </main>

      {/* Footer bisa ditempatkan di luar Routes agar selalu muncul */}
      {/* <Footer t={t} /> */}
    </div>
  );
};

export default App;