import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import bgFull from "../assets/hero/bg-full.png";
import star6 from "../assets/hero/star-6.png";
import star26 from "../assets/hero/star-26.png";
import star31 from "../assets/hero/star-31.png";
import star25 from "../assets/hero/star-25.png";
import star3 from "../assets/hero/3-star.png";
import starBig10 from "../assets/hero/star-10-big.png";
import starBig11 from "../assets/hero/star-11-big.png";
import cloudsTop from "../assets/hero/clouds-top.png";
import cloudRight1 from "../assets/hero/cloud-right-1.png";
import cloudRight2 from "../assets/hero/cloud-right-2.png";
import cloudRight3 from "../assets/hero/cloud-right-3.png";
import patternGrid from "../assets/hero/pattern.png";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax speeds
  const cloudY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const starsY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const starsBigY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[100svh] pb-16 md:h-screen md:pb-50 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)"
        }}>

        {/* LAYER 1: Background blobs */}
        <img src={bgFull} alt="" className="absolute pointer-events-none max-w-none w-[150%] md:w-[120%] h-auto right-[-25%] md:right-[-13%] top-[25%] md:top-[20%]" />
        <img src={bgFull} alt="" className="absolute pointer-events-none max-w-none w-[80%] md:w-[60%] h-auto left-[-20%] md:left-[-13%] top-[45%] md:top-[40%] rotate-180" />

        {/* LAYER 2: Clouds — parallax slow */}
        <motion.div className="absolute inset-0" style={{ y: cloudY }}>
          <img src={cloudsTop} alt="" className="absolute pointer-events-none max-w-none w-[100%] md:w-[70%] h-auto left-[-5%] md:left-[-2%] top-[-10%] md:top-[-9%]" />
          <img src={cloudRight3} alt="" className="absolute pointer-events-none max-w-none w-[45%] md:w-[40%] h-auto left-[65%] md:left-[55%] top-[5%] md:top-[0%]" />
          <img src={cloudRight2} alt="" className="absolute pointer-events-none max-w-none w-[45%] md:w-[40%] h-auto left-[75%] md:left-[62%] top-[0%] md:top-[-3%]" />
          <img src={cloudRight1} alt="" className="absolute pointer-events-none max-w-none w-[45%] md:w-[40%] h-auto left-[85%] md:left-[72%] top-[8%] md:top-[2%]" />
        </motion.div>

        {/* LAYER 3: Pattern grid */}
        <img src={patternGrid} alt="" className="absolute pointer-events-none z-0 max-w-none w-[120%] md:w-[70%] h-auto left-[-10%] md:left-[15%] top-[35%] md:top-[33%] opacity-30 md:opacity-100" />

        {/* LAYER 4: Stars — parallax faster */}
        <motion.div className="absolute inset-0" style={{ y: starsBigY }}>
          <img src={starBig10} alt="" className="absolute pointer-events-none max-w-none w-[40%] md:w-[35%] h-auto left-[-15%] md:left-[-15%] top-[12%] md:top-[10%]" />
          <img src={starBig11} alt="" className="absolute pointer-events-none max-w-none w-[25%] md:w-[22%] h-auto left-[80%] md:left-[80%] top-[25%] md:top-[20%]" />
        </motion.div>

        <motion.div className="absolute inset-0 hidden md:block" style={{ y: starsY }}>
          <img src={star6} alt="" className="absolute pointer-events-none w-[60px] h-auto left-[18%] top-[12%]" />
          <img src={star26} alt="" className="absolute pointer-events-none w-[60px] h-auto left-[10%] top-[55%]" />
          <img src={star31} alt="" className="absolute pointer-events-none w-[60px] h-auto left-[88%] top-[5%]" />
          <img src={star25} alt="" className="absolute pointer-events-none w-[28px] h-auto left-[75%] top-[52%]" />
          <img src={star3} alt="" className="absolute pointer-events-none w-[40px] h-auto left-[74%] top-[70%]" />
        </motion.div>

        {/* LAYER 5: Noise */}
        <div className="absolute inset-0 pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")` }} />

        {/* White glow behind text */}
        <div className="absolute inset-0 pointer-events-none hidden md:block" style={{ background: "radial-gradient(ellipse 55% 40% at 50% 40%, rgba(255,255,255,0.6) 0%, transparent 50%)" }} />
        <div className="absolute inset-0 pointer-events-none md:hidden" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(255,255,255,0.8) 0%, transparent 60%)" }} />
      </div>

      {/* CONTENT — slight parallax down */}
      <motion.div className="absolute inset-y-0 left-0 w-screen max-w-[100vw] flex items-center justify-center overflow-hidden" style={{ y: contentY }}>
        <div className="w-full text-center px-5 sm:px-6 max-w-[920px] mx-auto mt-0 md:mt-[-3%]">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-anton text-[34px] sm:text-[46px] md:text-[64px] leading-[1.12] sm:leading-[1.15] text-[#6667E4] uppercase mb-4 md:mb-6"
            style={{ textShadow: "0 1px 1px rgba(0,0,0,0.05)" }}
          >
            <span className="md:hidden">MULTIMEDIA<br />DIGITAL ENGAGEMENT<br />2026</span>
            <span className="hidden md:inline">MULTIMEDIA<br />DIGITAL ENGAGEMENT 2026</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="text-[#424345] text-[14px] sm:text-[15px] md:text-[17px] leading-[1.6] max-w-[340px] sm:max-w-[560px] md:max-w-[800px] mx-auto mb-6 md:mb-8"
          >
            Multimedia Digital Engagement (MUDENG) adalah suatu komunitas dan juga salah satu platform pembelajaran kreatif di Sekolah Tinggi Teknologi Terpadu Nurul Fikri, yang ditujukan untuk memfasilitasi mahasiswa dalam mempelajari ilmu kreatif serta mengatasi kesulitan belajar disiplin kreatif secara mandiri.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <a href="#karya" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-[40px] text-white text-[14px] sm:text-base font-medium backdrop-blur-sm hover:scale-105 transition-transform" style={{ background: "rgba(102,103,228,0.9)", boxShadow: "0 10px 20px rgba(102,103,228,0.3)" }}>LIHAT KARYA</a>
            <a href="#event" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-[40px] text-[#6667E4] text-[14px] sm:text-base font-medium backdrop-blur-md border border-white/50 hover:scale-105 transition-transform" style={{ background: "rgba(255,255,255,0.45)", boxShadow: "0 10px 20px rgba(102,103,228,0.12)" }}>LIHAT EVENT</a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
