import React, { useState, useEffect } from "react";
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
  CheckCircle,
  MessageCircle,
  MessageSquare,
  PhoneCall,
  Sparkles,      // Tambahkan ini (untuk AI Chat)
  Loader2,       // Tambahkan ini (untuk Loading)
  Maximize2,
  FileText,
  Download
} from "lucide-react";
import foto from "./assets/foto-portfolio.jpeg";
import fotoAboutMe1 from "./assets/foto-formal.jpeg";
import fotoAboutMe2 from "./assets/foto-nana-suryana-02.jpeg";
import cvPdf from "./assets/Resume_Nana_Suryana.pdf";
import portoPdf from "./assets/Portofolio.pdf";

// Sertifikat file
import CertskillHTML from "./assets/certificate/Skill_HTML_certificate.jpg";
import CertskillLaravel from "./assets/certificate/Skill_Laravel_Bootcamp.jpeg";
import CertskillLaravel02 from "./assets/certificate/Skill_Laravel_Certicate.jpg";
import Certskillphp from "./assets/certificate/Skill_PHP_certificate.jpg";
import CertskillSQL from "./assets/certificate/Skill_SQL.jpg";
import Certskill_Graduated_MajorSMK from "./assets/certificate/Lulus_Ujikompetensi_Kejuruan.jpg";
import CertWebinarBecomeAGoodFrontend from "./assets/certificate/Webinar_Become_A_Good_Frontend.jpg";
import CertWebinarBusiness_Dev from "./assets/certificate/Webinar_Business_Development.jpg";
import CertWebinarDigitalEra from "./assets/certificate/Webinar_Digital_Era.jpg";

// Catatan: Ganti URL placeholder ini dengan import foto lokal Anda kembali

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState(null); // Mulai dengan null untuk mendeteksi pilihan bahasa
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [selectedImage, setSelectedImage] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', content: 'Halo! Saya asisten AI Nana. Ada yang bisa saya bantu terkait proyek web development atau ide kolaborasi?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  // Data dummy untuk sertifikat
  const certificates = [
    { id: 1, url: CertskillHTML, title: "Certificate 1 - HTML Skill" },
    { id: 2, url: CertskillLaravel, title: "Certificate 2 - Laravel Bootcamp" },
    { id: 3, url: CertskillLaravel02, title: "Certificate 3 - Laravel Certificate" },
    { id: 4, url: Certskillphp, title: "Certificate 4 - PHP Certificate" },
    { id: 5, url: CertskillSQL, title: "Certificate 5 - SQL Certificate" },
    { id: 6, url: CertWebinarBecomeAGoodFrontend, title: "Certificate 6 - Webinar Become A Good Frontend" },
    { id: 7, url: CertWebinarBusiness_Dev, title: "Certificate 7 - Webinar Business Development" },
    { id: 8, url: CertWebinarDigitalEra, title: "Certificate 8 - Webinar Digital Era" },
    { id: 9, url: Certskill_Graduated_MajorSMK, title: "Certificate 9 - Lulus Uji Kompetensi Kejuruan" },
  ];

  const displayCertificates = [...certificates, ...certificates];

  const content = {
    id: {
      nav: ["Beranda", "Tentang", "Pengalaman", "Pendidikan", "Keahlian", "Sertifikat", "Kontak"],
      navIds: ["home", "about", "experience", "education", "skills", "certs", "contact"],
      heroBadge: "👋 Halo, Saya Nana Suryana, S.T",
      heroTitle: 'Membangun <span class="text-indigo-600">Solusi Digital</span> yang Andal.',
      heroDesc: "Software Engineer / Full Stack Developer berpengalaman membangun backend maupun frontend & web application dengan fokus pada kualitas, performa, dan maintainability.",
      btnProject: "Lihat Proyek",
      btnContact: "Hubungi Saya",
      aboutTitle: "Tentang Saya",
      aboutP1: "Saya adalah Software Engineer dengan passion di bidang teknologi dan pemecahan masalah. Menguasai pengembangan backend dan web application dengan pengalaman menggunakan Ruby on Rails, PHP (Laravel/CodeIgniter), frontend (ReactJS, VueJS, dan Angular), & MobileApps (React Native & Flutter) serta berbagai tool pengembangan.",
      aboutP2: "Berpengalaman bekerja dalam tim Agile, membangun API, maintenance sistem, dan mengimplementasikan solusi optimisasi sesuai kebutuhan bisnis.",
      btnDownloadCV: "Unduh CV (PDF)",
      btnDownloadPorto: "Unduh Portofolio (PDF)",
      expTitle: "Pengalaman Kerja",
      certTitle: "Sertifikasi & Lisensi",
      certSub: "Daftar sertifikasi profesional yang telah saya raih.",
      skillsTitle: "Keahlian Teknis",
      languageSkillTitle: "Bahasa",
      frameworkSkillsTitle: "Framework",
      databaseskillsTitle: "Database",
      toolsSkillsTitle: "Tools",
      projectTitle: "Proyek Unggulan",
      educationTitle: "Pendidikan",
      projectSub: "Contoh proyek yang pernah saya bangun atau kontribusikan.",
      contactTitle: "Siap untuk memulai proyek selanjutnya?",
      contactSub: "Saya selalu terbuka untuk diskusi mengenai proyek, konsultasi, atau peluang kerja sama.",
      formName: "Nama Lengkap",
      formMsg: "Pesan Anda",
      formBtn: "Kirim ke WhatsApp",
      footerDesc: "Dibuat dengan ❤️ — Nana Suryana",
      viewCert: "Lihat Sertifikat",
      
      expData: [
        {
          role: "Fullstack Developer",
          company: "PT. Innoark Servis Internasional",
          period: "September 2022 - Sekarang",
          desc: "Bekerja pada requirement berbasis proyek, memberikan solusi teknis, terlibat pada desain algoritma optimisasi, menerapkan best practice teknis, menulis kode bersih dan testable (Ruby on Rails). Maintenance Aplikasi dan database. Membuat report menggunakan C# & Pentaho. Berpartisipasi dalam siklus Agile.",
        },
        {
          role: "Software Engineer / Fullstack Developer",
          company: "PT. Sarana Bisnis Bersama (BeezzGroup)",
          period: "Juli 2021 - Agustus 2022",
          desc: "Membangun API service untuk aplikasi mobile BeezzGroup menggunakan Ruby on Rails dan juga maintenance dan melakukan beberapa enhancement di aplikasi mobile menggunakan tech tools React Native. Maintenance backoffice application, manajemen database (PostgreSQL dan MongoDB), deployment server (Digital Ocean).",
        },
        {
          role: "Fullstack Develop / Backend Developer / Web Developer",
          company: "PT Rahmat Loka Teknologi (DotERB Solution)",
          period: "Agustus 2019 - Juni 2021",
          desc: "Membangun beberapa project application web maupun API Service menggunakan Ruby On Rails sebagai backend, dan ReactJs sebagai Frontend. Mengimplementasikan metode Scrum Agile, debugging test, & pemeliharaan database.",
        },
        {
          role: "Web Developer",
          company: "PT Digital Amore Kriyase (DAK)",
          period: "Juni 2018 - Agustus 2019",
          desc: "Membangun aplikasi koperasi simpan pinjam menggunakan CodeIgniter dan Laravel, manajemen database menggunakan PostgreSQL, fixed bug, dan ikut serta dalam siklus Scrum Agile.",
        },
        {
          role: "Oracle Application Apex Developer",
          company: "PT. Global Integrated Technologies (GIT)",
          period: "Juli 2017 - Juni 2018",
          desc: "Membuat aplikasi ERP seperti POS, HRMS, Accounting, Inventory menggunakan Oracle Application Apex, maintenance aplikasi, membuat report, dan management database Oracle.",
        },
      ],
      certifications: [
        {
          title: "Sertifikat Kompetensi - Software Development",
          issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
          date: "2021",
          img: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=500&q=80"
        },
        {
          title: "Full Stack Web Development",
          issuer: "Certification Authority",
          date: "2020",
          img: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=500&q=80"
        }
      ],
      education: [
        {
          degree: "S1 - Teknik Informatika",
          school: "Perguruan Tinggi Indonesia Mandiri (STMIK-IM)",
          period: "2018 - 2021",
          note: "IPK 3.68",
        },
        {
          degree: "SMK - Rekayasa Perangkat Lunak",
          school: "SMK Nusantara Raya",
          period: "2011 - 2014",
        },
      ],
      projects: [
        {
          title: "OKGLOW Website",
          subtitle: "Fazcode - OKGLOW",
          desc: "Membangun website klinik OkGlow menggunakan framework Laravel. (2021).",
          tags: ["Laravel", "PHP", "MySQL"],
          demo: "http://okglow.herokuapp.com/"
        },
      ],
      skillsList: {
        languages: ["PHP", "Ruby", "Golang", "Java", ".Net", "C", "C++", "C#", "Pascal", "Javascript", "Typescript", "HTML", "CSS"],
        frameworks: ["Ruby on Rails", "Laravel", "CodeIgniter", "Gin - Gonic", "GORM", "YII", "React JS", "Vue JS", "Angular", "React Native", "Next.JS", "Bootstrap", "JQuery", "Tailwind CSS", "Xpress.js", "Node.js"],
        databases: ["MySQL", "PostgreSQL", "Oracle", "MongoDB", "SQL Server", "Oracle", "Redis", "RabbitMQ"],
        tools: ["Docker", "Pentaho Report Designer", "Oracle Application Apex", "Wordpress", "Pentaho Data Integration", "Figma", "Android Studio", "Visual Studio", "Postman", "Pentaho", "Version Control System (VCS) - Github, Gitlab, Bitbucket", "Scrum Agile"],
      },
      contact: {
        phone: "089677705979", // Format murni angka untuk WA
        email: "nanasuryana554@gmail.com",
        website: "http://www.nanasuryana.rf.gd",
        linkedin: "https://www.linkedin.com/in/nanasuryana22",
        github: "https://www.github.com/NanaSuryana22",
      },
    },
    en: {
      nav: ["Home", "About", "Experience", "Education", "Skills", "Certificates", "Contact"],
      navIds: ["home", "about", "experience", "education", "skills", "certs", "contact"],
      heroBadge: "👋 Hi, I'm Nana Suryana, S.T",
      heroTitle: 'Building Reliable <span class="text-indigo-600">Digital Solutions</span>.',
      heroDesc: "Software Engineer / Full Stack Developer experienced in building backend and frontend & web applications with a focus on quality, performance, and maintainability.",
      btnProject: "View Projects",
      btnContact: "Contact Me",
      aboutTitle: "About Me",
      aboutP1: "I am a Software Engineer with a passion for technology and problem-solving. I have expertise in backend and web application development, with experience using Ruby on Rails, PHP (Laravel/CodeIgniter), frontend (ReactJS, VueJS, and Angular), and mobile apps (React Native & Flutter).",
      aboutP2: "Experienced working in Agile teams, building APIs, maintaining systems, and implementing optimization solutions based on business needs.",
      btnDownloadCV: "Download CV (PDF)",
      btnDownloadPorto: "Download Portfolio (PDF)",
      expTitle: "Work Experience",
      certTitle: "Certifications & Licenses",
      certSub: "List of professional certifications I have achieved.",
      skillsTitle: "Technical Skills",
      languageSkillTitle: "Language",
      frameworkSkillsTitle: "Framework",
      databaseskillsTitle: "Database",
      toolsSkillsTitle: "Tools",
      projectTitle: "Featured Projects",
      educationTitle: "Education",
      projectSub: "Examples of projects I built or contributed to.",
      contactTitle: "Ready to start your next project?",
      contactSub: "I am open to project discussions, consulting, or collaboration opportunities.",
      formName: "Full Name",
      formMsg: "Your Message",
      formBtn: "Send to WhatsApp",
      footerDesc: "Built with ❤️ — Nana Suryana",
      viewCert: "View Certificate",
      
      expData: [
        {
          role: "Fullstack Developer",
          company: "PT. Innoark Servis Internasional",
          period: "September 2022 - Present",
          desc: "Working on project-based requirements, providing technical solutions, participating in optimization algorithm design, writing clean and testable code (Ruby on Rails). Maintaining applications and databases.",
        },
        {
          role: "Software Engineer / Fullstack Developer",
          company: "PT. Sarana Bisnis Bersama (BeezzGroup)",
          period: "July 2021 - August 2022",
          desc: "Building API service for BeezzGroup mobile application using Ruby on Rails and React Native. Database management and server maintenance.",
        },
        {
          role: "Fullstack Develop / Backend Developer / Web Developer",
          company: "PT Rahmat Loka Teknologi (DotERB Solution)",
          period: "August 2019 - June 2021",
          desc: "Building web application projects and API Services using Ruby On Rails and ReactJs. Implementing Scrum Agile and database maintenance.",
        },
        {
          role: "Web Developer",
          company: "PT Digital Amore Kriyase (DAK)",
          period: "June 2018 - August 2019",
          desc: "Building savings and loan cooperative applications using CodeIgniter and Laravel, database management, and Agile Scrum cycle.",
        },
        {
          role: "Oracle Application Apex Developer",
          company: "PT. Global Integrated Technologies (GIT)",
          period: "July 2017 - June 2018",
          desc: "Creating ERP applications such as POS, HRMS, and Accounting systems using Oracle Application Apex.",
        },
      ],
      certifications: [
        {
          title: "Competency Certificate - Software Development",
          issuer: "National Professional Certification Agency (BNSP)",
          date: "2021",
          img: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=500&q=80"
        },
        {
          title: "Full Stack Web Development",
          issuer: "Certification Authority",
          date: "2020",
          img: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=500&q=80"
        }
      ],
      education: [
        {
          degree: "B.Sc. Computer Science",
          school: "Perguruan Tinggi Indonesia Mandiri (STMIK-IM)",
          period: "2018 - 2021",
          note: "GPA 3.68",
        },
        {
          degree: "Major Software Engineering (RPL)",
          school: "Vocational High School Nusantara Raya",
          period: "2011 - 2014",
        },
      ],
      projects: [
        {
          title: "OKGLOW Website",
          subtitle: "Fazcode - OKGLOW",
          desc: "Built OkGlow clinic website using Laravel. (2021).",
          tags: ["Laravel", "PHP", "MySQL"],
          demo: "http://okglow.herokuapp.com/"
        },
      ],
      skillsList: {
        languages: ["PHP", "Ruby", "Golang", "Java", ".Net", "C", "C++", "C#", "Pascal", "Javascript", "Typescript", "HTML", "CSS"],
        frameworks: ["Ruby on Rails", "Laravel", "CodeIgniter", "Gin - Gonic", "GORM", "YII", "React JS", "Vue JS", "Angular", "React Native", "Next.JS", "Bootstrap", "JQuery", "Tailwind CSS", "Xpress.js", "Node.js"],
        databases: ["MySQL", "PostgreSQL", "Oracle", "MongoDB", "SQL Server", "Oracle", "Redis", "RabbitMQ"],
        tools: ["Docker", "Pentaho Report Designer", "Oracle Application Apex", "Wordpress", "Pentaho Data Integration", "Figma", "Android Studio", "Visual Studio", "Postman", "Pentaho", "Version Control System (VCS) - Github, Gitlab, Bitbucket", "Scrum Agile"],
      },
      contact: {
        phone: "089677705979",
        email: "nanasuryana554@gmail.com",
        website: "https://www.nanasuryana22.github.com/portofolio/",
        linkedin: "https://www.linkedin.com/in/nanasuryana22",
        github: "https://www.github.com/NanaSuryana22",
      },
    },
  };

  const t = lang ? content[lang] : content.id; // Fallback ke ID jika lang belum dipilih

  useEffect(() => {
    if (!lang) return;
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lang, t.navIds]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const phone = t.contact.phone;
    const text = `Halo Nana, saya ${formData.name}. %0A%0A${formData.message}`;
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  // Language Selector Modal
  if (!lang) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900 px-6">
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-lg w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
          <div className="mx-auto w-20 h-20 bg-indigo-100 rounded-3xl flex items-center justify-center text-indigo-600">
            <Globe size={40} />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-slate-900">Pilih Bahasa / Select Language</h1>
            <p className="text-slate-500">Selamat datang di Portofolio Nana Suryana</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => setLang("id")}
              className="p-4 rounded-2xl border-2 border-slate-100 hover:border-indigo-600 hover:bg-indigo-50 transition-all font-bold text-slate-700 flex flex-col items-center gap-2 group"
            >
              <span className="text-2xl">🇮🇩</span>
              Bahasa Indonesia
            </button>
            <button
              onClick={() => setLang("en")}
              className="p-4 rounded-2xl border-2 border-slate-100 hover:border-indigo-600 hover:bg-indigo-50 transition-all font-bold text-slate-700 flex flex-col items-center gap-2 group"
            >
              <span className="text-2xl">🇺🇸</span>
              English (US)
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-600">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div
            className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent cursor-pointer"
            onClick={() => scrollTo("home")}
          >
            NS.
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {t.nav.map((name, i) => (
              <button
                key={t.navIds[i]}
                onClick={() => scrollTo(t.navIds[i])}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${activeSection === t.navIds[i] ? "text-indigo-600" : "text-slate-600"}`}
              >
                {name}
              </button>
            ))}
            <button
              onClick={() => setLang(lang === "id" ? "en" : "id")}
              className="flex items-center space-x-1 px-3 py-1 rounded-full border border-slate-200 text-xs font-bold hover:bg-slate-100 transition-all uppercase"
            >
              <Globe size={14} /> <span>{lang === "id" ? "EN" : "ID"}</span>
            </button>
          </div>

          <div className="flex items-center md:hidden space-x-4">
            <button
              onClick={() => setLang(lang === "id" ? "en" : "id")}
              className="p-2 text-slate-600 border rounded-lg text-xs font-bold uppercase"
            >
              {lang}
            </button>
            <button className="p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t py-6 px-6 flex flex-col space-y-4 shadow-xl">
            {t.nav.map((name, i) => (
              <button
                key={t.navIds[i]}
                onClick={() => scrollTo(t.navIds[i])}
                className={`text-left text-lg font-medium ${activeSection === t.navIds[i] ? "text-indigo-600" : "text-slate-600"}`}
              >
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
              <button
                onClick={() => scrollTo("projects")}
                className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
              >
                {t.btnProject}
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-bold hover:bg-slate-50 transition-all"
              >
                {t.btnContact}
              </button>
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
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <User className="mr-3 text-indigo-600" /> {t.aboutTitle}
              </h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>{t.aboutP1}</p>
                <p>{t.aboutP2}</p>
              </div>
              {/* PDF Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-100 mt-8">
                <a href={cvPdf} download="CV_Nana_Suryana.pdf" className="flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg group">
                  <FileText size={18} className="group-hover:scale-110 transition-transform" />
                    {t.btnDownloadCV}
                    <Download size={16} className="ml-1 opacity-60" />
                </a>
                <a href={portoPdf} download="Portfolio_Nana_Suryana.pdf" className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white border-2 border-slate-100 text-slate-900 rounded-xl font-bold hover:border-indigo-600 hover:text-indigo-600 transition-all group">
                  <Briefcase size={18} className="group-hover:scale-110 transition-transform" />
                  {t.btnDownloadPorto}
                  <Download size={16} className="ml-1 opacity-60" />
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              <img src={fotoAboutMe1} className="rounded-2xl shadow-lg" alt="Dev" />
              <img src={fotoAboutMe2} className="rounded-2xl shadow-lg mt-8" alt="Code" />
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
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-indigo-600 text-sm font-medium mb-3">
                    {exp.company}
                  </div>
                  <p className="text-slate-600 text-sm">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">{t.educationTitle}</h2>
          <div className="space-y-6">
            {t.education.map((edu, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-lg">{edu.degree}</h3>
                    <div className="text-indigo-600 text-sm font-semibold">{edu.school}</div>
                  </div>
                  <div className="text-sm text-slate-500">{edu.period}</div>
                </div>
                {edu.note && <p className="mt-3 text-slate-600 text-sm">{edu.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* <section id="projects" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.projectTitle}</h2>
          <p className="text-slate-600 mb-12">{t.projectSub}</p>
          <div className="grid md:grid-cols-3 gap-8">
            {t.projects.map((p, idx) => (
              <div key={idx} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all">
                <div className="h-48 relative overflow-hidden">
                  <img src={`https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop&q=${idx + 10}`} alt="Project" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6 text-left">
                  <h3 className="font-bold text-xl mb-2">{p.title}</h3>
                  <div className="text-sm text-slate-500 mb-2">{p.subtitle}</div>
                  <p className="text-slate-600 mb-4">{p.desc}</p>
                  <div className="flex gap-2 mb-4">
                    {p.tags.map((tag) => (
                      <span key={tag} className="text-[10px] bg-slate-50 border px-2 py-0.5 rounded uppercase font-bold text-slate-400 tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={p.demo || "#"} target="_blank" rel="noreferrer" className="w-full inline-block text-center py-3 border border-slate-200 rounded-xl text-sm font-bold group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    Detail / Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 flex items-center justify-center">
            <Cpu className="mr-3 text-indigo-400" /> {t.skillsTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-800/30 p-6 rounded-2xl">
              <h4 className="font-bold mb-3">{t.languageSkillTitle}</h4>
              <div className="flex flex-wrap gap-2">
                {t.skillsList.languages.map((s) => (
                  <span key={s} className="px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-sm">{s}</span>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-2xl">
              <h4 className="font-bold mb-3">{t.frameworkSkillsTitle}</h4>
              <div className="flex flex-wrap gap-2">
                {t.skillsList.frameworks.map((s) => (
                  <span key={s} className="px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-sm">{s}</span>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-2xl">
              <h4 className="font-bold mb-3">{t.databaseskillsTitle}</h4>
              <div className="flex flex-wrap gap-2">
                {t.skillsList.databases.map((s) => (
                  <span key={s} className="px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-sm">{s}</span>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-2xl">
              <h4 className="font-bold mb-3">{t.toolsSkillsTitle}</h4>
              <div className="flex flex-wrap gap-2">
                {t.skillsList.tools.map((s) => (
                  <span key={s} className="px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-sm">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CERTIFICATE MARQUEE SECTION --- */}
      <section className="py-20 bg-white overflow-hidden border-y border-slate-100" id="certs">
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center italic">
                <Award className="mr-3 text-indigo-600" /> {t.certTitle}
              </h2>
              <p className="text-center italic items-center">{t.certSub}</p>
        </div>

        <div className="relative flex overflow-hidden group">
          <div className="flex animate-marquee whitespace-nowrap py-4 gap-6 group-hover:pause-animation">
            {displayCertificates.map((cert, index) => (
              <div 
                key={`${cert.id}-${index}`}
                onClick={() => setSelectedImage(cert.url)}
                className="relative w-72 h-48 md:w-96 md:h-64 flex-shrink-0 cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group/item"
              >
                <img 
                  src={cert.url} 
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center">
                   <Maximize2 className="text-white" size={32} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: fit-content;
            animation: marquee 30s linear infinite;
          }
          .pause-animation {
            animation-play-state: paused;
          }
        `}} />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-indigo-600 rounded-[3rem] p-8 md:p-16 text-white flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold leading-tight">{t.contactTitle}</h2>
              <p className="text-indigo-100 text-lg">{t.contactSub}</p>
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center"><Mail size={18} /></div>
                  <span>
                    <a href={`mailto:${t.contact.email}`} className="flex items-center text-lg">
                      {t.contact.email}
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center"><PhoneCall size={18} /></div>
                  <span>
                    <a href={`tel:${t.contact.phone}`} className="flex items-center text-lg">
                      {t.contact.phone}
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <form
                className="bg-white p-8 md:p-12 rounded-[2.5rem] space-y-6 shadow-2xl text-slate-900"
                onSubmit={handleWhatsAppSend}
              >
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">{t.formName}</label>
                  <input
                    required
                    type="text"
                    placeholder="Enter your name..."
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">{t.formMsg}</label>
                  <textarea
                    required
                    rows="4"
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none resize-none transition-all placeholder:text-slate-300"
                  ></textarea>
                </div>
                <button type="submit" className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center group shadow-xl shadow-indigo-100">
                  {t.formBtn} <Send size={20} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
            <a href={t.contact.github} target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors">GitHub</a>
            <a href={t.contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

      {/* --- LIGHTBOX MODAL --- */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 md:p-12 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged Certificate" 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in duration-300"
          />
        </div>
      )}


    </div>
  );
};

export default App;