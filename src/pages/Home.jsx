import React from "react";
import { Link } from "react-router-dom";
import foto from "../assets/foto-portfolio.jpeg"; // Sesuaikan path

const Home = ({ t }) => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-semibold">
            {t.heroBadge}
          </div>
          <h1
            className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight"
            dangerouslySetInnerHTML={{ __html: t.heroTitle }}
          ></h1>
          <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
            {t.heroDesc}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="/skills"
              className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
            >
              {t.btnSkill}
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-bold hover:bg-slate-50 transition-all"
            >
              {t.btnContact}
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 border-8 border-white">
            <img src={foto} alt="Profile" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;