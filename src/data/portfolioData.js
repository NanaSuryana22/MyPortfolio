import foto from "../assets/foto-portfolio.jpeg";
import fotoAboutMe1 from "../assets/foto-formal.jpeg";
import fotoAboutMe2 from "../assets/foto-nana-suryana-02.jpeg";
import cvPdf from "../assets/Resume_Nana_Suryana_Fullstack_Engineer.pdf";
import portoPdf from "../assets/Portofolio.pdf";

// Sertifikat file
import CertskillHTML from "../assets/certificate/Skill_HTML_certificate.jpg";
import CertskillLaravel from "../assets/certificate/Skill_Laravel_Bootcamp.jpeg";
import CertskillLaravel02 from "../assets/certificate/Skill_Laravel_Certicate.jpg";
import Certskillphp from "../assets/certificate/Skill_PHP_certificate.jpg";
import CertskillSQL from "../assets/certificate/Skill_SQL.jpg";
import Certskill_Graduated_MajorSMK from "../assets/certificate/Lulus_Ujikompetensi_Kejuruan.jpg";
import CertWebinarBecomeAGoodFrontend from "../assets/certificate/Webinar_Become_A_Good_Frontend.jpg";
import CertWebinarBusiness_Dev from "../assets/certificate/Webinar_Business_Development.jpg";
import CertWebinarDigitalEra from "../assets/certificate/Webinar_Digital_Era.jpg";

// Export gambar dan dokumen agar bisa di-import di halaman (pages) lain
export { foto, fotoAboutMe1, fotoAboutMe2, cvPdf, portoPdf };

// Data sertifikat
export const certificates = [
  { id: 1, url: CertskillHTML, title: "Certificate 1 - HTML Skill" },
  { id: 2, url: CertskillLaravel, title: "Certificate 2 - Laravel Bootcamp" },
  {
    id: 3,
    url: CertskillLaravel02,
    title: "Certificate 3 - Laravel Certificate",
  },
  { id: 4, url: Certskillphp, title: "Certificate 4 - PHP Certificate" },
  { id: 5, url: CertskillSQL, title: "Certificate 5 - SQL Certificate" },
  {
    id: 6,
    url: CertWebinarBecomeAGoodFrontend,
    title: "Certificate 6 - Webinar Become A Good Frontend",
  },
  {
    id: 7,
    url: CertWebinarBusiness_Dev,
    title: "Certificate 7 - Webinar Business Development",
  },
  {
    id: 8,
    url: CertWebinarDigitalEra,
    title: "Certificate 8 - Webinar Digital Era",
  },
  {
    id: 9,
    url: Certskill_Graduated_MajorSMK,
    title: "Certificate 9 - Lulus Uji Kompetensi Kejuruan",
  },
];

// Data Konten (Bahasa Indonesia & Inggris)
export const content = {
  id: {
    nav: [
      "Beranda",
      "Tentang",
      "Pengalaman",
      "Pendidikan",
      "Keahlian",
      "Sertifikat",
      "Kontak",
    ],
    // Perhatikan ini: navIds diubah menjadi navPaths untuk React Router
    navPaths: [
      "/",
      "/about",
      "/experience",
      "/education",
      "/skills",
      "/certs",
      "/contact",
    ],
    heroBadge: "👋 Halo, Saya Nana Suryana, S.T",
    heroTitle: 'Membangun <span class="text-indigo-600">Solusi Digital</span> yang Andal.',
    heroDesc:
      "Software Engineer / Full Stack Developer berpengalaman membangun backend maupun frontend & web application dengan fokus pada kualitas, performa, dan maintainability.",
    btnProject: "Lihat Proyek",
    btnSkill: "Lihat Skill & Keahlian",
    btnContact: "Hubungi Saya",
    aboutTitle: "Tentang Saya",
    aboutP1:
      "Saya adalah Software Engineer dengan passion di bidang teknologi dan pemecahan masalah. Menguasai pengembangan backend dan web application dengan pengalaman menggunakan Ruby on Rails, PHP (Laravel/CodeIgniter), frontend (ReactJS, VueJS, dan Angular), & MobileApps (React Native & Flutter) serta berbagai tool pengembangan.",
    aboutP2:
      "Berpengalaman bekerja dalam tim Agile, membangun API, maintenance sistem, dan mengimplementasikan solusi optimisasi sesuai kebutuhan bisnis.",
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
    contactSub:
      "Saya selalu terbuka untuk diskusi mengenai proyek, konsultasi, atau peluang kerja sama.",
    formName: "Nama Lengkap",
    formMsg: "Pesan Anda",
    formBtn: "Kirim ke WhatsApp",
    footerDesc: "Dibuat dengan React, Tailwind, & Lucide — Nana Suryana",
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
        img: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=500&q=80",
      },
      {
        title: "Full Stack Web Development",
        issuer: "Certification Authority",
        date: "2020",
        img: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=500&q=80",
      },
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
        demo: "http://okglow.herokuapp.com/",
      },
    ],
    skillsList: {
      languages: [
        "PHP", "Ruby", "Golang", "Java", ".Net", "C", "C++", "C#", "Pascal", "Javascript", "Typescript", "HTML", "CSS",
      ],
      frameworks: [
        "Ruby on Rails", "Laravel", "CodeIgniter", "Gin - Gonic", "GORM", "YII", "React JS", "Vue JS", "Angular", "React Native", "Next.JS", "Bootstrap", "JQuery", "Tailwind CSS", "Xpress.js", "Node.js",
      ],
      databases: [
        "MySQL", "PostgreSQL", "Oracle", "MongoDB", "SQL Server", "Redis", "RabbitMQ",
      ],
      tools: [
        "Docker", "Pentaho Report Designer", "Oracle Application Apex", "Wordpress", "Pentaho Data Integration", "Figma", "Android Studio", "Visual Studio", "Postman", "Pentaho", "Version Control System (VCS) - Github, Gitlab, Bitbucket", "Scrum Agile",
      ],
    },
    contact: {
      phone: "089677705979",
      email: "nanasuryana554@gmail.com",
      website: "http://www.nanasuryana.rf.gd",
      linkedin: "https://www.linkedin.com/in/nanasuryana22",
      github: "https://www.github.com/NanaSuryana22",
    },
  },
  en: {
    nav: [
      "Home",
      "About",
      "Experience",
      "Education",
      "Skills",
      "Certificates",
      "Contact",
    ],
    navPaths: [
      "/",
      "/about",
      "/experience",
      "/education",
      "/skills",
      "/certs",
      "/contact",
    ],
    heroBadge: "👋 Hi, I'm Nana Suryana, S.T",
    heroTitle: 'Building Reliable <span class="text-indigo-600">Digital Solutions</span>.',
    heroDesc:
      "Software Engineer / Full Stack Developer experienced in building backend and frontend & web applications with a focus on quality, performance, and maintainability.",
    btnProject: "View Projects",
    btnContact: "Contact Me",
    btnSkill: "View Skills & Expertise",
    aboutTitle: "About Me",
    aboutP1:
      "I am a Software Engineer with a passion for technology and problem-solving. I have expertise in backend and web application development, with experience using Ruby on Rails, PHP (Laravel/CodeIgniter), frontend (ReactJS, VueJS, and Angular), and mobile apps (React Native & Flutter).",
    aboutP2:
      "Experienced working in Agile teams, building APIs, maintaining systems, and implementing optimization solutions based on business needs.",
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
    contactSub:
      "I am open to project discussions, consulting, or collaboration opportunities.",
    formName: "Full Name",
    formMsg: "Your Message",
    formBtn: "Send to WhatsApp",
    footerDesc: "Built with React, Tailwind, & Lucide — Nana Suryana",
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
        img: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=500&q=80",
      },
      {
        title: "Full Stack Web Development",
        issuer: "Certification Authority",
        date: "2020",
        img: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=500&q=80",
      },
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
        demo: "http://okglow.herokuapp.com/",
      },
    ],
    skillsList: {
      languages: [
        "PHP", "Ruby", "Golang", "Java", ".Net", "C", "C++", "C#", "Pascal", "Javascript", "Typescript", "HTML", "CSS",
      ],
      frameworks: [
        "Ruby on Rails", "Laravel", "CodeIgniter", "Gin - Gonic", "GORM", "YII", "React JS", "Vue JS", "Angular", "React Native", "Next.JS", "Bootstrap", "JQuery", "Tailwind CSS", "Xpress.js", "Node.js",
      ],
      databases: [
        "MySQL", "PostgreSQL", "Oracle", "MongoDB", "SQL Server", "Oracle", "Redis", "RabbitMQ",
      ],
      tools: [
        "Docker", "Pentaho Report Designer", "Oracle Application Apex", "Wordpress", "Pentaho Data Integration", "Figma", "Borland Delphi", "Android Studio", "Visual Studio", "Postman", "Pentaho", "Version Control System (VCS) - Github, Gitlab, Bitbucket", "Scrum Agile",
      ],
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