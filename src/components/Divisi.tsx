import { useState, useEffect } from "react";
import {
  ChevronLeft, ChevronRight, Crown, Calendar, Palette, Megaphone,
  Briefcase, Share2, CircleDollarSign, Users, BookText
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import divisiFinance from "../assets/divisi/divisi-finance.png";
import divisiLeader from "../assets/divisi/divisi-leader.jpg";
import divisiMedia from "../assets/divisi/divisi-media.jpg";
import divisiProject from "../assets/divisi/divisi-project.jpg";
import divisiPR from "../assets/divisi/divisi-pr.jpg";
import divisiSecretary from "../assets/divisi/divisi-secretary.png";
import divisiEvent from "../assets/divisi/divisi-event.png";
import divisiSocmed from "../assets/divisi/divisi-socmed.png";
import starBig from "../assets/divisi/star-divisi-big.svg";
import starSmall from "../assets/divisi/star-divisi-small.svg";

const divisions = [
  { name: "Leader", icon: Crown, image: divisiLeader, desc: "Bertanggung jawab memimpin dan mengoordinasikan seluruh divisi agar kegiatan berjalan lancar." },
  { name: "Event", icon: Calendar, image: divisiEvent, desc: "Merencanakan dan mengeksekusi seluruh rangkaian acara agar menarik dan sesuai dengan tujuan MUDENG 2026." },
  { name: "Media Creative", icon: Palette, image: divisiMedia, desc: "Mengelola pembuatan aset visual, grafis, dan identitas desain yang akan digunakan di seluruh platform." },
  { name: "Public Relation", icon: Megaphone, image: divisiPR, desc: "Menjadi wajah MUDENG 2026 dalam menjalin komunikasi dengan pihak luar, media partner, dan sponsorship." },
  { name: "Project", icon: Briefcase, image: divisiProject, desc: "Mengelola jalannya proyek secara teknis dan operasional untuk memastikan keberhasilan acara." },
  { name: "Socmed Spesialist", icon: Share2, image: divisiSocmed, desc: "Mengelola konten, strategi, dan interaksi di media sosial MUDENG 2026 agar lebih luas menjangkau audiens." },
  { name: "Finance", icon: CircleDollarSign, image: divisiFinance, desc: "Finance bertanggung jawab mengelola keuangan MUDENG 2026 STT Terpadu Nurul Fikri, mulai dari perencanaan, pencatatan, hingga pengawasan dana agar tetap transparan dan terorganisir." },
  { name: "Internal Management", icon: Users, image: divisiSecretary, desc: "Mengurus operasional internal, kekeluargaan, dan kebutuhan sumber daya anggota panitia." },
  { name: "Secretary", icon: BookText, image: divisiSecretary, desc: "Mengelola seluruh administrasi, surat-menyurat, dan pengarsipan dokumen penting MUDENG 2026." },
];

export default function Divisi() {
  const [startIndex, setStartIndex] = useState(0);
  const [activeCardName, setActiveCardName] = useState<string | null>(divisions[0].name);
  const [visibleCount, setVisibleCount] = useState(4);

  // Deteksi ukuran layar untuk menentukan jumlah card yang tampil (Opsi A)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleDivisions = divisions.slice(
    startIndex,
    startIndex + visibleCount
  );

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
      // Optional: pastikan active card masih di dalam rentang
    }
  };

  const handleNext = () => {
    if (startIndex + visibleCount < divisions.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const canPrev = startIndex > 0;
  const canNext = startIndex + visibleCount < divisions.length;

  return (
    <section id="divisi" className="relative py-24 md:py-32 overflow-hidden">
      {/* Decorative stars */}
      <img
        src={starBig}
        alt=""
        className="absolute pointer-events-none rotate-12"
        style={{ left: "-8%", top: "20%", width: "18%", height: "auto" }}
      />
      <img
        src={starSmall}
        alt=""
        className="absolute pointer-events-none"
        style={{ left: "85%", top: "62%", width: "12%", height: "auto" }}
      />

      <div className="max-w-300 mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 md:mb-16">
          <h2 className="font-anton text-[36px] sm:text-[40px] md:text-[60px] text-primary uppercase leading-none">
            DIVISI
          </h2>
          <div className="flex-1 mx-3 md:mx-6 h-px bg-gray-200" />
          <h2 className="font-anton text-[36px] sm:text-[40px] md:text-[60px] text-primary uppercase leading-none">
            MUDENG
          </h2>
        </div>

        {/* Division Cards — smooth layout animation */}
        <div className="flex gap-2 md:gap-3 lg:gap-4 h-[350px] sm:h-[400px] md:h-[533px] justify-center">
          <AnimatePresence initial={false} mode="popLayout">
            {visibleDivisions.map((div) => {
              const isActive = activeCardName === div.name;

              return (
                <motion.div
                  layout
                  key={div.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{
                    layout: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className={`relative rounded-xl md:rounded-2xl overflow-hidden cursor-pointer ${isActive
                    ? "w-[240px] sm:w-[320px] md:w-[500px] lg:w-[740px]"
                    : "w-[60px] sm:w-[70px] md:w-[90px] lg:w-[120px]"
                    }`}
                  onClick={() => setActiveCardName(isActive ? null : div.name)}
                >
                  <img
                    src={div.image}
                    alt={div.name}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />

                  {/* Overlay Layers */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 bg-black/40 md:bg-black/30 ${isActive ? "opacity-0" : "opacity-100 delay-200"
                      }`}
                  />
                  <div
                    className={`absolute inset-0 transition-all duration-500 ${isActive ? "opacity-100 backdrop-blur-[4px] delay-100" : "opacity-0 backdrop-blur-none"
                      }`}
                    style={{ background: "linear-gradient(180deg, rgba(0, 191, 255, 0) 0%, rgba(102,103,228,1) 100%)" }}
                  />

                  {/* Text Container */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {/* Inactive State: Rotated Text (Bottom to Top) perfectly centered horizontally */}
                    <div
                      className={`absolute inset-x-0 bottom-6 md:bottom-8 flex justify-center transition-opacity ${isActive ? "opacity-0 duration-200" : "opacity-100 duration-500 delay-300"
                        }`}
                    >
                      <span
                        className="text-white font-semibold text-sm md:text-xl tracking-wider"
                        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                      >
                        {div.name}
                      </span>
                    </div>

                    {/* Active State: Centered slightly below, with dynamic lucide icon and description */}
                    <div
                      className={`absolute inset-0 flex flex-col items-center justify-end pb-8 sm:pb-12 md:pb-16 px-4 md:px-12 transition-all ${isActive ? "opacity-100 translate-y-0 duration-700 delay-300" : "opacity-0 translate-y-8 duration-300"
                        }`}
                    >
                      <div className="relative w-14 h-14 md:w-[84px] md:h-[84px] bg-white rounded-full flex items-center justify-center mb-3 md:mb-5 shadow-lg">
                        <div.icon className="text-[#6667E4] w-7 h-7 md:w-10 md:h-10" strokeWidth={2.5} />
                      </div>

                      <h3 className="text-white font-bold text-xl md:text-[32px] mb-2 md:mb-4 text-center leading-tight">
                        {div.name}
                      </h3>
                      {/* Hide description on very small screens to prevent overflow */}
                      <p className="hidden sm:block text-white/90 text-xs md:text-[16px] text-center max-w-[556px] leading-relaxed">
                        {div.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-3 mt-8 justify-center">
          <button
            onClick={handlePrev}
            disabled={!canPrev}
            className={`w-10 h-10 md:w-8 md:h-8 rounded-lg border flex items-center justify-center transition-colors ${canPrev
              ? "border-gray-300 text-gray-500 hover:border-primary hover:text-primary bg-white"
              : "border-gray-100 text-gray-200 cursor-not-allowed bg-white"
              }`}
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            disabled={!canNext}
            className={`w-10 h-10 md:w-8 md:h-8 rounded-lg border flex items-center justify-center transition-colors ${canNext
              ? "border-gray-300 text-gray-500 hover:border-primary hover:text-primary bg-white"
              : "border-gray-100 text-gray-200 cursor-not-allowed bg-white"
              }`}
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="max-w-[600px] mx-auto mt-16 px-6">
        <div className="h-px bg-accent" />
      </div>
    </section>
  );
}
