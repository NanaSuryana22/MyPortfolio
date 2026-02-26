import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  User, 
  Briefcase, 
  Cpu, 
  Send,
  Menu,
  X,
  ChevronRight,
  Globe,
  Award,
  CheckCircle
} from 'lucide-react';
import foto from './assets/foto-portfolio.jpeg';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState('id');

  const content = {
    id: {
      nav: ['Beranda', 'Tentang', 'Pengalaman', 'Sertifikasi', 'Proyek', 'Keahlian', 'Kontak'],
      navIds: ['home', 'about', 'experience', 'certifications', 'projects', 'skills', 'contact'],
      heroBadge: '👋 Halo, Saya Nana Suryana',
      heroTitle: 'Membangun <span class="text-indigo-600">Pengalaman</span> Digital yang Luar Biasa.',
      heroDesc: 'Saya adalah seorang Full-stack Developer yang berfokus pada pembuatan antarmuka pengguna yang bersih, fungsional, dan responsif.',
      btnProject: 'Lihat Proyek',
      btnContact: 'Hubungi Saya',
      aboutTitle: 'Tentang Saya',
      aboutP1: 'Saya memiliki ketertarikan yang mendalam terhadap dunia teknologi sejak di bangku SMP. Kini saya telah bertransformasi menjadi profesional yang haus akan tantangan baru.',
      aboutP2: 'Filosofi desain saya sederhana: Fungsi di atas segalanya, namun estetika tidak boleh dikompromi.',
      expTitle: 'Pengalaman Kerja',
      certTitle: 'Sertifikasi Profesional',
      certSub: 'Lisensi dan sertifikasi yang telah saya peroleh untuk memvalidasi keahlian saya.',
      skillsTitle: 'Keahlian Teknis',
      projectTitle: 'Proyek Unggulan',
      projectSub: 'Kumpulan karya terbaik saya dalam beberapa tahun terakhir.',
      contactTitle: 'Siap untuk memulai proyek selanjutnya?',
      contactSub: 'Saya selalu terbuka untuk diskusi mengenai desain UI/UX atau peluang kerja sama lainnya.',
      formName: 'Nama',
      formMsg: 'Pesan',
      formBtn: 'Kirim Pesan',
      footerDesc: 'Dibuat dengan ❤️ menggunakan React & Tailwind.',
      viewCert: 'Verifikasi Sertifikat',
      expData: [
        { role: "Senior Web Developer", company: "Tech Solutions Inc.", period: "2022 - Sekarang", desc: "Memimpin tim pengembangan frontend untuk aplikasi dashboard enterprise." },
        { role: "Frontend Developer", company: "Creative Digital Agency", period: "2020 - 2022", desc: "Mengembangkan lebih dari 20+ website klien dengan fokus performa." }
      ],
      certifications: [
        { title: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", date: "Jan 2024", id: "AWS-12345" },
        { title: "Google Professional Cloud Developer", issuer: "Google Cloud", date: "Nov 2023", id: "GCP-67890" },
        { title: "Meta Front-End Developer Professional Certificate", issuer: "Meta", date: "Mei 2023", id: "META-UX-111" }
      ]
    },
    en: {
      nav: ['Home', 'About', 'Experience', 'Certifications', 'Projects', 'Skills', 'Contact'],
      navIds: ['home', 'about', 'experience', 'certifications', 'projects', 'skills', 'contact'],
      heroBadge: "👋 Hi, I'm John Doe",
      heroTitle: 'Crafting Exceptional Digital <span class="text-indigo-600">Experiences</span>.',
      heroDesc: 'I am a Full-stack Developer focused on building clean, functional, and responsive user interfaces.',
      btnProject: 'View Projects',
      btnContact: 'Contact Me',
      aboutTitle: 'About Me',
      aboutP1: 'I have had a deep interest in the world of technology since college. I have now transformed into a professional hungry for new challenges.',
      aboutP2: 'My design philosophy is simple: Function above all, but aesthetics must never be compromised.',
      expTitle: 'Work Experience',
      certTitle: 'Professional Certifications',
      certSub: 'Licenses and certifications I have earned to validate my expertise.',
      skillsTitle: 'Technical Skills',
      projectTitle: 'Featured Projects',
      projectSub: 'A collection of my best work over the past few years.',
      contactTitle: 'Ready to start your next project?',
      contactSub: 'I am always open to discussions about UI/UX design or other collaboration opportunities.',
      formName: 'Name',
      formMsg: 'Message',
      formBtn: 'Send Message',
      footerDesc: 'Built with ❤️ using React & Tailwind.',
      viewCert: 'Verify Certificate',
      expData: [
        { role: "Senior Web Developer", company: "Tech Solutions Inc.", period: "2022 - Present", desc: "Leading the frontend development team for enterprise dashboard applications." },
        { role: "Frontend Developer", company: "Creative Digital Agency", period: "2020 - 2022", desc: "Developed over 20+ client websites with a focus on performance." }
      ],
      certifications: [
        { title: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", date: "Jan 2024", id: "AWS-12345" },
        { title: "Google Professional Cloud Developer", issuer: "Google Cloud", date: "Nov 2023", id: "GCP-67890" },
        { title: "Meta Front-End Developer Professional Certificate", issuer: "Meta", date: "May 2023", id: "META-UX-111" }
      ]
    }
  };

  const t = content[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = t.navIds;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lang, t.navIds]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-600">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollTo('home')}>
            NS.
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {t.nav.map((name, i) => (
              <button key={t.navIds[i]} onClick={() => scrollTo(t.navIds[i])} className={`text-sm font-medium transition-colors hover:text-indigo-600 ${activeSection === t.navIds[i] ? 'text-indigo-600' : 'text-slate-600'}`}>
                {name}
              </button>
            ))}
            <button onClick={() => setLang(lang === 'id' ? 'en' : 'id')} className="flex items-center space-x-1 px-3 py-1 rounded-full border border-slate-200 text-xs font-bold hover:bg-slate-100 transition-all uppercase">
              <Globe size={14} /> <span>{lang === 'id' ? 'EN' : 'ID'}</span>
            </button>
          </div>

          <div className="flex items-center md:hidden space-x-4">
            <button onClick={() => setLang(lang === 'id' ? 'en' : 'id')} className="p-2 text-slate-600 border rounded-lg text-xs font-bold uppercase">{lang}</button>
            <button className="p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t py-6 px-6 flex flex-col space-y-4 shadow-xl">
            {t.nav.map((name, i) => (
              <button key={t.navIds[i]} onClick={() => scrollTo(t.navIds[i])} className={`text-left text-lg font-medium ${activeSection === t.navIds[i] ? 'text-indigo-600' : 'text-slate-600'}`}>
                {name}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-semibold">{t.heroBadge}</div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight" dangerouslySetInnerHTML={{ __html: t.heroTitle }}></h1>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">{t.heroDesc}</p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button onClick={() => scrollTo('projects')} className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">{t.btnProject}</button>
              <button onClick={() => scrollTo('contact')} className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-bold hover:bg-slate-50 transition-all">{t.btnContact}</button>
            </div>
          </div>
          <div className="hidden md:block">
             <div className="rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 border-8 border-white">
                <img src={foto} alt="Profile" className="w-full" />
             </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
               <h2 className="text-3xl font-bold mb-6 flex items-center"><User className="mr-3 text-indigo-600" /> {t.aboutTitle}</h2>
               <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                  <p>{t.aboutP1}</p>
                  <p>{t.aboutP2}</p>
               </div>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop" className="rounded-2xl shadow-lg" alt="Dev" />
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop" className="rounded-2xl shadow-lg mt-8" alt="Code" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
            <Briefcase className="mr-3 text-indigo-600" /> {t.expTitle}
          </h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:w-0.5 before:bg-slate-200">
            {t.expData.map((exp, i) => (
              <div key={i} className="relative pl-12 group">
                <div className="absolute left-0 top-1 w-10 h-10 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center group-hover:border-indigo-600 transition-colors">
                  <div className="w-2 h-2 bg-slate-300 group-hover:bg-indigo-600 rounded-full transition-colors"></div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-slate-900">{exp.role}</h3>
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">{exp.period}</span>
                  </div>
                  <div className="text-indigo-600 text-sm font-medium mb-3">{exp.company}</div>
                  <p className="text-slate-600 text-sm">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Certifications Section */}
      <section id="certifications" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <Award className="mr-3 text-indigo-600" /> {t.certTitle}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">{t.certSub}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {t.certifications.map((cert, i) => (
              <div key={i} className="group p-6 bg-slate-50 border border-slate-100 rounded-3xl hover:bg-white hover:shadow-xl hover:border-indigo-100 transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{cert.title}</h3>
                <p className="text-indigo-600 text-sm font-semibold mb-1">{cert.issuer}</p>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-xs font-medium text-slate-400">{cert.date}</span>
                  <button className="text-xs font-bold text-indigo-600 flex items-center hover:underline">
                    {t.viewCert} <ExternalLink size={12} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.projectTitle}</h2>
          <p className="text-slate-600 mb-12">{t.projectSub}</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all">
                <div className="h-48 relative overflow-hidden">
                  <img src={`https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop&q=${item}`} alt="Project" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6 text-left">
                  <h3 className="font-bold text-xl mb-2">Project {item}</h3>
                  <div className="flex gap-2 mb-4">
                    <span className="text-[10px] bg-slate-50 border px-2 py-0.5 rounded uppercase font-bold text-slate-400 tracking-wider">React</span>
                    <span className="text-[10px] bg-slate-50 border px-2 py-0.5 rounded uppercase font-bold text-slate-400 tracking-wider">Node.js</span>
                  </div>
                  <button className="w-full py-3 border border-slate-200 rounded-xl text-sm font-bold group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all">
                    Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-12 flex items-center justify-center">
            <Cpu className="mr-3 text-indigo-400" /> {t.skillsTitle}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'TypeScript', 'Figma', 'Docker'].map((skill) => (
              <div key={skill} className="px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-2xl font-medium hover:border-indigo-500 hover:text-indigo-300 transition-all">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-indigo-600 rounded-[3rem] p-8 md:p-16 text-white flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold leading-tight">{t.contactTitle}</h2>
              <p className="text-indigo-100 text-lg">{t.contactSub}</p>
            </div>
            <div className="md:w-1/2 w-full">
              <form className="bg-white p-8 rounded-3xl space-y-4 shadow-2xl text-slate-900" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase">{t.formName}</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase">{t.formMsg}</label>
                  <textarea rows="3" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none resize-none transition-all"></textarea>
                </div>
                <button className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center group">
                  {t.formBtn} <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <div className="text-xl font-bold bg-indigo-600 bg-clip-text text-transparent">NS.</div>
          <div className="font-medium">{t.footerDesc}</div>
          <div className="flex space-x-6 font-bold">
            <a href="#" className="hover:text-indigo-600 transition-colors">GitHub</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;