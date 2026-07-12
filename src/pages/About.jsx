import React from "react";
import { Link } from "react-router-dom";
import { User, FileText, Download, Briefcase } from "lucide-react";
import { fotoAboutMe1, fotoAboutMe2, cvPdf, portoPdf } from "../data/portfolioData";

const About = ({ t }) => {
  return (
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
                <a
                  href={cvPdf}
                  download="CV_Nana_Suryana.pdf"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg group"
                >
                  <FileText
                    size={18}
                    className="group-hover:scale-110 transition-transform"
                  />
                  {t.btnDownloadCV}
                  <Download size={16} className="ml-1 opacity-60" />
                </a>
                <a
                  href={portoPdf}
                  download="Portfolio_Nana_Suryana.pdf"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white border-2 border-slate-100 text-slate-900 rounded-xl font-bold hover:border-indigo-600 hover:text-indigo-600 transition-all group"
                >
                  <Briefcase
                    size={18}
                    className="group-hover:scale-110 transition-transform"
                  />
                  {t.btnDownloadPorto}
                  <Download size={16} className="ml-1 opacity-60" />
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              <img
                src={fotoAboutMe1}
                className="rounded-2xl shadow-lg"
                alt="Dev"
              />
              <img
                src={fotoAboutMe2}
                className="rounded-2xl shadow-lg mt-8"
                alt="Code"
              />
            </div>
          </div>
        </div>
      </section>
  );
};

export default About;