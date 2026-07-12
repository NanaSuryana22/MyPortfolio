import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";

const Navbar = ({ t, lang, setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
          NS.
        </NavLink>

        <div className="hidden md:flex items-center space-x-8">
          {t.nav.map((name, i) => (
            <NavLink
              key={i}
              to={t.navPaths[i]}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-indigo-600 ${isActive ? "text-indigo-600 font-bold" : "text-slate-600"}`
              }
            >
              {name}
            </NavLink>
          ))}
          <button onClick={() => setLang(lang === "id" ? "en" : "id")} className="flex items-center space-x-1 px-3 py-1 rounded-full border border-slate-200 text-xs font-bold hover:bg-slate-100 transition-all uppercase">
            <Globe size={14} /> <span>{lang === "id" ? "EN" : "ID"}</span>
          </button>
        </div>

        {/* Tombol Menu Mobile */}
        <div className="flex items-center md:hidden space-x-4">
          <button onClick={() => setLang(lang === "id" ? "en" : "id")} className="p-2 text-slate-600 border rounded-lg text-xs font-bold uppercase">
            {lang}
          </button>
          <button className="p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t py-6 px-6 flex flex-col space-y-4 shadow-xl">
          {t.nav.map((name, i) => (
            <NavLink
              key={i}
              to={t.navPaths[i]}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => `text-left text-lg font-medium ${isActive ? "text-indigo-600" : "text-slate-600"}`}
            >
              {name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;