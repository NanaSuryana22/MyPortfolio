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
} from "lucide-react";
import foto from "./assets/foto-portfolio.jpeg";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState("id");

  // Content diisi sesuai data resume
  const content = {
    id: {
      nav: [
        "Beranda",
        "Tentang",
        "Pengalaman",
        "Pendidikan",
        "Proyek",
        "Keahlian",
        "Kontak",
      ],
      navIds: [
        "home",
        "about",
        "experience",
        "education",
        "projects",
        "skills",
        "contact",
      ],
      heroBadge: "👋 Halo, Saya Nana Suryana, S.T",
      heroTitle:
        'Membangun <span class="text-indigo-600">Solusi Digital</span> yang Andal.',
      heroDesc:
        "Software Engineer / Full Stack Developer berpengalaman membangun backend maupun frontend & web application dengan fokus pada kualitas, performa, dan maintainability.",
      btnProject: "Lihat Proyek",
      btnContact: "Hubungi Saya",
      aboutTitle: "Tentang Saya",
      aboutP1:
        "Saya adalah Software Engineer dengan passion di bidang teknologi dan pemecahan masalah. Menguasai pengembangan backend dan web application dengan pengalaman menggunakan Ruby on Rails, PHP (Laravel/CodeIgniter), frontend (ReactJS, VueJS, dan Angular), & MobileApps (React Native & Flutter) serta berbagai tool pengembangan.",
      aboutP2:
        "Berpengalaman bekerja dalam tim Agile, membangun API, maintenance sistem, dan mengimplementasikan solusi optimisasi sesuai kebutuhan bisnis.",
      expTitle: "Pengalaman Kerja",
      certTitle: "Sertifikasi & Lisensi",
      certSub: "Lisensi / sertifikasi (jika ada) akan ditampilkan di sini.",
      skillsTitle: "Keahlian Teknis",
      projectTitle: "Proyek Unggulan",
      educationTitle: "Pendidikan",
      projectSub: "Contoh proyek yang pernah saya bangun atau kontribusikan.",
      contactTitle: "Siap untuk memulai proyek selanjutnya?",
      contactSub:
        "Saya selalu terbuka untuk diskusi mengenai proyek, konsultasi, atau peluang kerja sama.",
      formName: "Nama",
      formMsg: "Pesan",
      formBtn: "Kirim Pesan",
      footerDesc: "Dibuat dengan ❤️ — Nana Suryana",
      viewCert: "Verifikasi Sertifikat",

      // Pengalaman berdasarkan resume
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
          desc: "Membangun API service untuk aplikasi mobile BeezzGroup menggunakan Ruby on Rails dan juga maintenance dan melakukan beberapa enhancement di aplikasi mobile menggunakan tech tools React Native. Maintenance backoffice application (Web admin Marketplace yang dibangun), manajemen database (PostgreSQL dan MongoDB (NoSQL)) deployment dan pemeliharaan server (Digital Ocean), version control di GitLab.",
        },
        {
          role: "Backend Developer",
          company: "PT Rahmat Loka Teknologi (DotERB Solution)",
          period: "Agustus 2019 - Juni 2021",
          desc: "Mengimplementasikan backend/API dengan Ruby on Rails; bekerja bersama frontend React JS; menerapkan metode Scrum; penggunaan MongoDB sebagai storage; push per modul ke repo (Bitbucket/GitLab).",
        },
        {
          role: "Web Developer",
          company: "PT Digital Amore Kriyase (DAK)",
          period: "Juni 2018 - Agustus 2019",
          desc: "Membangun aplikasi koperasi simpan pinjam menggunakan CodeIgniter; manajemen database PostgreSQL; debugging modul dan deployment.",
        },
        {
          role: "Oracle Application Apex Developer",
          company: "PT. GIT",
          period: "Juli 2017 - Juni 2018",
          desc: "Membangun aplikasi menggunakan Oracle Application Express (Apex); desain form, chart, login; maintenance dan laporan.",
        },
      ],

      // Resume tidak menampilkan sertifikasi formal terperinci — biarkan array kosong atau tambahkan jika tersedia
      certifications: [],

      // Pendidikan dari resume
      education: [
        {
          degree: "S1 - Teknik Informatika",
          school: "Perguruan Tinggi Indonesia Mandiri (STMIK-IM)",
          period: "2018 - Februari 2021",
          note: "Lulus berijazah, IPK 3.68",
        },
        {
          degree: "SMK - Rekayasa Perangkat Lunak",
          school: "SMK Nusantara Raya",
          period: "2011 - 2014",
        },
      ],

      // Contoh proyek berdasarkan resume (OKGLOW)
      projects: [
        {
          title: "OKGLOW Website",
          subtitle: "Fazcode - OKGLOW",
          desc: "Membangun website klinik OkGlow menggunakan framework Laravel. Demo: http://okglow.herokuapp.com/ (2021).",
          tags: ["Laravel", "PHP", "MySQL"],
        },
      ],

      // Keahlian teknis (ringkasan dari resume)
      skillsList: {
        languages: [
          "PHP",
          "Ruby",
          "C",
          "C++",
          "C#",
          "Pascal",
          "Javascript",
          "HTML",
          "CSS",
        ],
        frameworks: [
          "Ruby on Rails",
          "Laravel",
          "CodeIgniter",
          "YII",
          "React JS",
          "Vue JS",
          "Angular",
        ],
        databases: ["MySQL", "PostgreSQL", "Oracle", "MongoDB"],
        tools: [
          "Android Studio",
          "Visual Studio",
          "Postman",
          "Pentaho Report Designer",
          "Git (GitHub/GitLab/Bitbucket)",
          "Trello",
        ],
      },

      // Kontak dari resume (disesuaikan untuk ditampilkan di footer)
      contact: {
        phone: "0896.7770.5979",
        email: "nanasuryana554@gmail.com",
        website: "http://www.nanasuryana.rf.gd",
        linkedin: "https://www.linkedin.com/in/nanasuryana22",
        github: "https://www.github.com/NanaSuryana22",
      },
    },

    // Versi bahasa Inggris — ringkasan terjemahan dari data yang sama
    en: {
      nav: [
        "Home",
        "About",
        "Experience",
        "Education",
        "Projects",
        "Skills",
        "Contact",
      ],
      navIds: [
        "home",
        "about",
        "experience",
        "education",
        "projects",
        "skills",
        "contact",
      ],
      heroBadge: "👋 Hi, I'm Nana Suryana, S.T",
      heroTitle:
        'Building Reliable <span class="text-indigo-600">Digital Solutions</span>.',
      heroDesc:
        "Software Engineer / Full Stack Developer experienced in building backend and frontend & web applications with a focus on quality, performance, and maintainability.",
      btnProject: "View Projects",
      btnContact: "Contact Me",
      aboutTitle: "About Me",
      aboutP1:
        "I am a Software Engineer with a passion for technology and problem-solving. I have expertise in backend and web application development, with experience using Ruby on Rails, PHP (Laravel/CodeIgniter), frontend (ReactJS, VueJS, and Angular), and mobile apps (React Native & Flutter), as well as various development tools.",
      aboutP2:
        "Experienced working in Agile teams, building APIs, maintaining systems, and implementing optimization solutions based on business needs.",
      expTitle: "Work Experience",
      certTitle: "Certifications & Licenses",
      certSub: "Certifications (if any) will be shown here.",
      skillsTitle: "Technical Skills",
      projectTitle: "Featured Projects",
      educationTitle: "Education",
      projectSub: "Examples of projects I built or contributed to.",
      contactTitle: "Ready to start your next project?",
      contactSub:
        "I am open to project discussions, consulting, or collaboration opportunities.",
      formName: "Name",
      formMsg: "Message",
      formBtn: "Send Message",
      footerDesc: "Built with ❤️ — Nana Suryana",
      viewCert: "Verify Certificate",

      expData: [
        {
          role: "Fullstack Developer",
          company: "PT. Innoark Servis Internasional",
          period: "September 2022 - Present",
          desc: "Working on project-based requirements, providing technical solutions, participating in optimization algorithm design, implementing technical best practices, writing clean and testable code (Ruby on Rails). Maintaining applications and databases. Creating reports using C# & Pentaho. Participating in Agile cycles.",
        },
        {
          role: "Software Engineer / Fullstack Developer",
          company: "PT. Sarana Bisnis Bersama (BeezzGroup)",
          period: "July 2021 - August 2022",
          desc: "Building API service for BeezzGroup mobile application using Ruby on Rails and also maintenance and doing some enhancement in mobile application using React Native tech tools. Maintenance backoffice application (Web admin Marketplace built), database management (PostgreSQL and MongoDB (NoSQL)) deployment and server maintenance (Digital Ocean), version control in GitLab.",
        },
        {
          role: "Backend Developer",
          company: "PT Rahmat Loka Teknologi (DotERB Solution)",
          period: "August 2019 - June 2021",
          desc: "Implemented backend/API with Ruby on Rails; worked with React JS frontend; used Scrum; MongoDB for storage.",
        },
      ],

      certifications: [],

      education: [
        {
          degree: "B.Sc. Computer Science",
          school: "Perguruan Tinggi Indonesia Mandiri (STMIK-IM)",
          period: "2018 - Feb 2021",
          note: "GPA 3.68",
        },
      ],

      projects: [
        {
          title: "OKGLOW Website",
          subtitle: "Fazcode - OKGLOW",
          desc: "Built OkGlow clinic website using Laravel. Demo: http://okglow.herokuapp.com/ (2021).",
          tags: ["Laravel", "PHP", "MySQL"],
        },
      ],

      skillsList: {
        languages: [
          "PHP",
          "Ruby",
          "C",
          "C++",
          "C#",
          "Pascal",
          "Javascript",
          "HTML",
          "CSS",
        ],
        frameworks: [
          "Ruby on Rails",
          "Laravel",
          "CodeIgniter",
          "YII",
          "React JS",
          "Vue JS",
          "Angular",
        ],
        databases: ["MySQL", "PostgreSQL", "Oracle", "MongoDB"],
        tools: [
          "Android Studio",
          "Visual Studio",
          "Postman",
          "Pentaho Report Designer",
          "Git",
          "Trello",
        ],
      },

      contact: {
        phone: "0896.7770.5979",
        email: "nanasuryana554@gmail.com",
        website: "http://www.nanasuryana.rf.gd",
        linkedin: "https://www.linkedin.com/in/nanasuryana22",
        github: "https://www.github.com/NanaSuryana22",
      },
    },
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
            <button
              className="p-2 text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
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
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-20"
      >
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
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop"
                className="rounded-2xl shadow-lg"
                alt="Dev"
              />
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop"
                className="rounded-2xl shadow-lg mt-8"
                alt="Code"
              />
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
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t.educationTitle}
          </h2>
          <div className="space-y-6">
            {t.education.map((edu, i) => (
              <div
                key={i}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-lg">{edu.degree}</h3>
                    <div className="text-indigo-600 text-sm font-semibold">
                      {edu.school}
                    </div>
                  </div>
                  <div className="text-sm text-slate-500">{edu.period}</div>
                </div>
                {edu.note && (
                  <p className="mt-3 text-slate-600 text-sm">{edu.note}</p>
                )}
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
            {t.projects.map((p, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all"
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop&q=${idx + 10}`}
                    alt="Project"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 text-left">
                  <h3 className="font-bold text-xl mb-2">{p.title}</h3>
                  <div className="text-sm text-slate-500 mb-2">
                    {p.subtitle}
                  </div>
                  <p className="text-slate-600 mb-4">{p.desc}</p>
                  <div className="flex gap-2 mb-4">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] bg-slate-50 border px-2 py-0.5 rounded uppercase font-bold text-slate-400 tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={p.demo || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-block text-center py-3 border border-slate-200 rounded-xl text-sm font-bold group-hover:bg-indigo-600 group-hover:text-white transition-all"
                  >
                    Detail / Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-24 bg-slate-900 text-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-12 flex items-center justify-center">
            <Cpu className="mr-3 text-indigo-400" /> {t.skillsTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-800/30 p-6 rounded-2xl">
              <h4 className="font-bold mb-3">Bahasa & Framework</h4>
              <div className="flex flex-wrap gap-2">
                {t.skillsList.languages
                  .concat(t.skillsList.frameworks)
                  .map((s) => (
                    <span
                      key={s}
                      className="px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-sm"
                    >
                      {s}
                    </span>
                  ))}
              </div>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-2xl">
              <h4 className="font-bold mb-3">Database & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {t.skillsList.databases.concat(t.skillsList.tools).map((s) => (
                  <span
                    key={s}
                    className="px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-indigo-600 rounded-[3rem] p-8 md:p-16 text-white flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold leading-tight">
                {t.contactTitle}
              </h2>
              <p className="text-indigo-100 text-lg">{t.contactSub}</p>
              <div className="space-y-1 text-sm">
                <div>📞 {t.contact.phone}</div>
                <div>✉️ {t.contact.email}</div>
                <div>
                  🌐{" "}
                  <a
                    href={t.contact.website}
                    className="underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.contact.website}
                  </a>
                </div>
                <div>
                  🔗{" "}
                  <a
                    href={t.contact.linkedin}
                    className="underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>{" "}
                  •{" "}
                  <a
                    href={t.contact.github}
                    className="underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <form
                className="bg-white p-8 rounded-3xl space-y-4 shadow-2xl text-slate-900"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase">
                    {t.formName}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase">
                    {t.formMsg}
                  </label>
                  <textarea
                    rows="3"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none resize-none transition-all"
                  ></textarea>
                </div>
                <button className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center group">
                  {t.formBtn}{" "}
                  <Send
                    size={18}
                    className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <div className="text-xl font-bold bg-indigo-600 bg-clip-text text-transparent">
            NS.
          </div>
          <div className="font-medium">{t.footerDesc}</div>
          <div className="flex space-x-6 font-bold">
            <a
              href={t.contact.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-600 transition-colors"
            >
              GitHub
            </a>
            <a
              href={t.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-600 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
