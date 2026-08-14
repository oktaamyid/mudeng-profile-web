import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
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

/** Reusable float config — continuous looping */
const float = (yRange: number, duration: number, delay: number = 0) => ({
  animate: { y: [0, yRange, 0] },
  transition: {
    y: {
      duration,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "easeInOut" as const,
      delay,
    },
  },
});

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  // Wait for loading screen (1500ms) + exit animation (600ms) + small buffer
  useEffect(() => {
    const t = setTimeout(() => setHasLoaded(true), 2200);
    return () => clearTimeout(t);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const cloudY = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const starsY = useTransform(scrollYProgress, [0, 1], [0, 600]);
  const starsBigY = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const patternY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const mobileLines = ["MULTIMEDIA", "DIGITAL ENGAGEMENT", "2026"];
  const desktopLines = ["MULTIMEDIA", "DIGITAL ENGAGEMENT 2026"];

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

        {/* LAYER 1: Background blobs — entrance + float */}
        <div className="absolute inset-0 pointer-events-none" style={{
          opacity: hasLoaded ? 1 : 0,
          filter: hasLoaded ? "blur(0px)" : "blur(20px)",
          transform: hasLoaded ? "translateX(0px)" : "translateX(60px)",
          transition: "opacity 1.2s ease 0.1s, filter 1.4s ease 0.1s, transform 1.2s cubic-bezier(0.16,1,0.3,1) 0.1s",
        }}>
          <motion.img src={bgFull} alt="" className="absolute pointer-events-none max-w-none w-[150%] md:w-[120%] h-auto right-[-25%] md:right-[-13%] top-[33%] md:top-[28%]" {...float(-20, 6, 0)} />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{
          opacity: hasLoaded ? 1 : 0,
          filter: hasLoaded ? "blur(0px)" : "blur(20px)",
          transform: hasLoaded ? "translateX(0px)" : "translateX(-60px)",
          transition: "opacity 1.2s ease 0.3s, filter 1.4s ease 0.3s, transform 1.2s cubic-bezier(0.16,1,0.3,1) 0.3s",
        }}>
          <motion.img src={bgFull} alt="" className="absolute pointer-events-none max-w-none w-[80%] md:w-[60%] h-auto left-[-20%] md:left-[-13%] top-[53%] md:top-[48%] rotate-180" {...float(15, 7, 1)} />
        </div>

        {/* LAYER 2: Clouds — entrance + parallax + float */}
        <motion.div className="absolute inset-0" style={{ y: cloudY }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            opacity: hasLoaded ? 1 : 0,
            filter: hasLoaded ? "blur(0px)" : "blur(15px)",
            transform: hasLoaded ? "translateY(0px)" : "translateY(-40px)",
            transition: "opacity 1s ease 0.2s, filter 1.2s ease 0.2s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.2s",
          }}>
            <motion.img src={cloudsTop} alt="" className="absolute pointer-events-none max-w-none w-[100%] md:w-[70%] h-auto left-[-5%] md:left-[-2%] top-[-10%] md:top-[-9%]" {...float(-12, 4.5, 0)} />
          </div>
          <div className="absolute inset-0 pointer-events-none" style={{
            opacity: hasLoaded ? 1 : 0,
            filter: hasLoaded ? "blur(0px)" : "blur(15px)",
            transform: hasLoaded ? "translateX(0px)" : "translateX(70px)",
            transition: "opacity 1s ease 0.4s, filter 1.2s ease 0.4s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.4s",
          }}>
            <motion.img src={cloudRight3} alt="" className="absolute pointer-events-none max-w-none w-[45%] md:w-[40%] h-auto left-[65%] md:left-[55%] top-[5%] md:top-[0%]" {...float(10, 4, 0.7)} />
          </div>
          <div className="absolute inset-0 pointer-events-none" style={{
            opacity: hasLoaded ? 1 : 0,
            filter: hasLoaded ? "blur(0px)" : "blur(15px)",
            transform: hasLoaded ? "translateX(0px)" : "translateX(80px)",
            transition: "opacity 1s ease 0.5s, filter 1.2s ease 0.5s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.5s",
          }}>
            <motion.img src={cloudRight2} alt="" className="absolute pointer-events-none max-w-none w-[45%] md:w-[40%] h-auto left-[75%] md:left-[62%] top-[0%] md:top-[-3%]" {...float(-14, 5, 0.3)} />
          </div>
          <div className="absolute inset-0 pointer-events-none" style={{
            opacity: hasLoaded ? 1 : 0,
            filter: hasLoaded ? "blur(0px)" : "blur(15px)",
            transform: hasLoaded ? "translateX(0px)" : "translateX(100px)",
            transition: "opacity 1s ease 0.6s, filter 1.2s ease 0.6s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.6s",
          }}>
            <motion.img src={cloudRight1} alt="" className="absolute pointer-events-none max-w-none w-[45%] md:w-[40%] h-auto left-[85%] md:left-[72%] top-[8%] md:top-[2%]" {...float(11, 5, 1)} />
          </div>
        </motion.div>

        {/* LAYER 3: Pattern grid — with parallax */}
        <motion.div className="absolute inset-0" style={{ y: patternY }}>
          <img src={patternGrid} alt="" className="absolute pointer-events-none z-0 max-w-none w-[120%] md:w-[70%] h-auto left-[-10%] md:left-[15%] top-[35%] md:top-[33%] opacity-30 md:opacity-100"
            style={{
              opacity: hasLoaded ? 1 : 0,
              filter: hasLoaded ? "blur(0px)" : "blur(10px)",
              transform: hasLoaded ? "scale(1)" : "scale(0.95)",
              transition: "opacity 1s ease 0.3s, filter 1.2s ease 0.3s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.3s",
            }}
          />
        </motion.div>

        {/* LAYER 4: Big stars — entrance + parallax + float */}
        <motion.div className="absolute inset-0" style={{ y: starsBigY }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            opacity: hasLoaded ? 1 : 0,
            filter: hasLoaded ? "blur(0px)" : "blur(15px)",
            transform: hasLoaded ? "translateX(0px) scale(1)" : "translateX(-60px) scale(0.7)",
            transition: "opacity 1s ease 0.4s, filter 1.2s ease 0.4s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.4s",
          }}>
            <motion.img src={starBig10} alt="" className="absolute pointer-events-none max-w-none w-[40%] md:w-[35%] h-auto left-[-15%] md:left-[-15%] top-[12%] md:top-[10%]" {...float(-18, 6, 0)} />
          </div>
          <div className="absolute inset-0 pointer-events-none" style={{
            opacity: hasLoaded ? 1 : 0,
            filter: hasLoaded ? "blur(0px)" : "blur(15px)",
            transform: hasLoaded ? "translateX(0px) scale(1)" : "translateX(60px) scale(0.7)",
            transition: "opacity 1s ease 0.55s, filter 1.2s ease 0.55s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.55s",
          }}>
            <motion.img src={starBig11} alt="" className="absolute pointer-events-none max-w-none w-[25%] md:w-[22%] h-auto left-[80%] md:left-[80%] top-[25%] md:top-[20%]" {...float(15, 5.5, 0.8)} />
          </div>
        </motion.div>

        {/* LAYER 4b: Small stars — entrance + parallax + float */}
        <motion.div className="absolute inset-0 hidden md:block" style={{ y: starsY }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            opacity: hasLoaded ? 1 : 0,
            filter: hasLoaded ? "blur(0px)" : "blur(10px)",
            transform: hasLoaded ? "scale(1)" : "scale(0.3)",
            transition: "opacity 0.8s ease 0.5s, filter 1s ease 0.5s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s",
          }}>
            <motion.img src={star6} alt="" className="absolute pointer-events-none w-[60px] h-auto left-[18%] top-[12%]" {...float(-10, 3, 0)} />
          </div>
          <div className="absolute inset-0 pointer-events-none" style={{
            opacity: hasLoaded ? 1 : 0,
            filter: hasLoaded ? "blur(0px)" : "blur(10px)",
            transform: hasLoaded ? "scale(1)" : "scale(0.3)",
            transition: "opacity 0.8s ease 0.6s, filter 1s ease 0.6s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.6s",
          }}>
            <motion.img src={star26} alt="" className="absolute pointer-events-none w-[60px] h-auto left-[10%] top-[55%]" {...float(12, 3.5, 0.5)} />
          </div>
          <div className="absolute inset-0 pointer-events-none" style={{
            opacity: hasLoaded ? 1 : 0,
            filter: hasLoaded ? "blur(0px)" : "blur(10px)",
            transform: hasLoaded ? "scale(1)" : "scale(0.3)",
            transition: "opacity 0.8s ease 0.55s, filter 1s ease 0.55s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.55s",
          }}>
            <motion.img src={star31} alt="" className="absolute pointer-events-none w-[60px] h-auto left-[88%] top-[5%]" {...float(-8, 2.8, 1)} />
          </div>
          <div className="absolute inset-0 pointer-events-none" style={{
            opacity: hasLoaded ? 1 : 0,
            filter: hasLoaded ? "blur(0px)" : "blur(10px)",
            transform: hasLoaded ? "scale(1)" : "scale(0.3)",
            transition: "opacity 0.8s ease 0.65s, filter 1s ease 0.65s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.65s",
          }}>
            <motion.img src={star25} alt="" className="absolute pointer-events-none w-[28px] h-auto left-[75%] top-[52%]" {...float(14, 3.5, 0.2)} />
          </div>
          <div className="absolute inset-0 pointer-events-none" style={{
            opacity: hasLoaded ? 1 : 0,
            filter: hasLoaded ? "blur(0px)" : "blur(10px)",
            transform: hasLoaded ? "scale(1)" : "scale(0.3)",
            transition: "opacity 0.8s ease 0.7s, filter 1s ease 0.7s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.7s",
          }}>
            <motion.img src={star3} alt="" className="absolute pointer-events-none w-[40px] h-auto left-[74%] top-[70%]" {...float(-11, 3.2, 1.3)} />
          </div>
        </motion.div>

        {/* LAYER 5: Noise */}
        <div className="absolute inset-0 pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")` }} />

        {/* White glow behind text */}
        <div className="absolute inset-0 pointer-events-none hidden md:block" style={{ background: "radial-gradient(ellipse 55% 40% at 50% 40%, rgba(255,255,255,0.6) 0%, transparent 50%)" }} />
        <div className="absolute inset-0 pointer-events-none md:hidden" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(255,255,255,0.8) 0%, transparent 60%)" }} />
      </div>

      {/* CONTENT — slight parallax down */}
      <motion.div className="absolute inset-y-0 left-0 w-screen max-w-[100vw] flex items-center justify-center overflow-hidden" style={{ y: contentY }}>
        <div className="w-full text-center px-5 sm:px-6 max-w-[920px] mx-auto mt-0 md:mt-[5%]">

          {/* 1. TEXT REVEAL — Fade + Blur staggered per line */}
          <div
            className="font-anton text-[34px] sm:text-[46px] md:text-[64px] leading-[1.12] sm:leading-[1.15] text-[#6667E4] uppercase mb-4 md:mb-6"
            style={{ textShadow: "0 1px 1px rgba(0,0,0,0.05)" }}
          >
            <div className="md:hidden">
              {mobileLines.map((line, i) => (
                <motion.div
                  key={line}
                  style={{
                    opacity: hasLoaded ? 1 : 0,
                    transform: hasLoaded ? "translateY(0px)" : "translateY(40px)",
                    filter: hasLoaded ? "blur(0px)" : "blur(12px)",
                    transition: `opacity 0.9s ease ${0.3 + i * 0.2}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${0.3 + i * 0.2}s, filter 1s ease ${0.3 + i * 0.2}s`,
                  }}
                >
                  {line}
                </motion.div>
              ))}
            </div>
            <div className="hidden md:block">
              {desktopLines.map((line, i) => (
                <motion.div
                  key={line}
                  style={{
                    opacity: hasLoaded ? 1 : 0,
                    transform: hasLoaded ? "translateY(0px)" : "translateY(40px)",
                    filter: hasLoaded ? "blur(0px)" : "blur(12px)",
                    transition: `opacity 0.9s ease ${0.3 + i * 0.25}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${0.3 + i * 0.25}s, filter 1s ease ${0.3 + i * 0.25}s`,
                  }}
                >
                  {line}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Description — Fade + Blur */}
          <p
            className="text-[#424345] text-[14px] sm:text-[15px] md:text-[17px] leading-[1.6] max-w-[340px] sm:max-w-[560px] md:max-w-[800px] mx-auto mb-6 md:mb-8"
            style={{
              opacity: hasLoaded ? 1 : 0,
              transform: hasLoaded ? "translateY(0px)" : "translateY(25px)",
              filter: hasLoaded ? "blur(0px)" : "blur(8px)",
              transition: "opacity 0.9s ease 0.8s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.8s, filter 1s ease 0.8s",
            }}
          >
            Multimedia Digital Engagement (MUDENG) adalah suatu komunitas dan juga salah satu platform pembelajaran kreatif di Sekolah Tinggi Teknologi Terpadu Nurul Fikri, yang ditujukan untuk memfasilitasi mahasiswa dalam mempelajari ilmu kreatif serta mengatasi kesulitan belajar disiplin kreatif secara mandiri.
          </p>

          {/* 2. BUTTONS — Fan-out (Scale/Rotate + Fade) */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="#karya"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-[40px] text-white text-[14px] sm:text-base font-medium backdrop-blur-sm hover:scale-105 transition-transform"
              style={{
                background: "rgba(102,103,228,0.9)",
                boxShadow: "0 10px 20px rgba(102,103,228,0.3)",
                opacity: hasLoaded ? 1 : 0,
                transform: hasLoaded ? "translateY(0) scale(1) rotate(0deg)" : "translateY(30px) scale(0.8) rotate(-3deg)",
                filter: hasLoaded ? "blur(0px)" : "blur(6px)",
                transition: "opacity 0.7s ease 1s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 1s, filter 0.8s ease 1s",
              }}
            >
              LIHAT KARYA
            </a>
            <a
              href="#event"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-[40px] text-[#6667E4] text-[14px] sm:text-base font-medium backdrop-blur-md border border-white/50 hover:scale-105 transition-transform"
              style={{
                background: "rgba(255,255,255,0.45)",
                boxShadow: "0 10px 20px rgba(102,103,228,0.12)",
                opacity: hasLoaded ? 1 : 0,
                transform: hasLoaded ? "translateY(0) scale(1) rotate(0deg)" : "translateY(30px) scale(0.8) rotate(3deg)",
                filter: hasLoaded ? "blur(0px)" : "blur(6px)",
                transition: "opacity 0.7s ease 1.15s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 1.15s, filter 0.8s ease 1.15s",
              }}
            >
              LIHAT EVENT
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
