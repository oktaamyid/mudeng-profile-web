import React from "react";
import { motion } from "framer-motion";
import { Mail, MoreHorizontal, Link as LinkIcon, Check } from "lucide-react";
import { portalData } from "../data/links";
import bgFull from "../assets/hero/bg-full.png";
import patternGrid from "../assets/hero/pattern.png";
import starBig10 from "../assets/hero/star-10-big.png";
import starBig11 from "../assets/hero/star-11-big.png";

const TikTokIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Portal() {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  const handleShare = async (
    e: React.MouseEvent,
    title: string,
    url: string,
    id: string,
  ) => {
    e.preventDefault();
    e.stopPropagation();

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      navigator.clipboard.writeText(url);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <div className="min-h-[100svh] relative flex justify-center font-jakarta bg-gray-100">
      {/* Mobile Wrapper (Acts like a phone screen on Desktop) */}
      <div className="w-full max-w-[480px] min-h-screen md:min-h-[850px] md:my-10 md:rounded-[40px] md:border-[6px] md:border-white shadow-2xl relative z-10 pb-16 pt-12 flex flex-col items-center overflow-hidden md:h-fit bg-white">
        {/* --- CARD BACKGROUND ASSETS --- */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Subtle gradient blob */}
          <img
            src={bgFull}
            alt=""
            className="absolute max-w-none w-[180%] right-[-50%] top-[-10%] opacity-30"
          />
          {/* Grid pattern */}
          <img
            src={patternGrid}
            alt=""
            className="absolute max-w-none w-[150%] left-[-20%] top-[0%] opacity-20"
          />
          {/* Small star accent */}
          <img
            src={starBig11}
            alt=""
            className="absolute max-w-none w-[30%] right-[-10%] top-[15%] opacity-60"
          />
          <img
            src={starBig10}
            alt=""
            className="absolute max-w-none w-[40%] left-[-20%] top-[40%] opacity-50"
          />
          {/* Noise overlay */}
          <div
            className="absolute inset-0 mix-blend-overlay opacity-50"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,1) 100%)",
            }}
          />
        </div>
        {/* --- END CARD BACKGROUND --- */}

        {/* Content Wrapper */}
        <div className="relative z-10 w-full flex flex-col items-center">
          {/* Header / Profile Section */}
          <div className="px-6 flex flex-col items-center text-center w-full">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="w-24 h-24 rounded-[30px] overflow-hidden border-2 border-white/80 bg-white/60 backdrop-blur-md mb-4 shadow-[0_8px_16px_rgba(102,103,228,0.15)]"
            >
              <img
                src={portalData.profile.logo}
                alt={portalData.profile.name}
                className="w-full h-full object-cover p-2"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://ui-avatars.com/api/?name=MD&background=6667E4&color=fff";
                }}
              />
            </motion.div>

            <motion.h1
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="font-anton text-2xl tracking-wide text-[#4F37B3] mb-2 drop-shadow-sm"
            >
              {portalData.profile.name.toUpperCase()}
            </motion.h1>

            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[#424345] text-[15px] font-medium leading-[1.6] mb-6 max-w-[280px]"
            >
              {portalData.profile.description}
            </motion.p>

            {/* Social Icons */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 mb-10"
            >
              <a
                href={portalData.profile.socials.email}
                className="w-12 h-12 rounded-[20px] bg-white/70 backdrop-blur-md border border-white/80 text-[#6667E4] shadow-[0_4px_12px_rgba(102,103,228,0.08)] flex items-center justify-center hover:scale-105 hover:bg-[#6667E4] hover:text-white transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={portalData.profile.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-[20px] bg-white/70 backdrop-blur-md border border-white/80 text-[#6667E4] shadow-[0_4px_12px_rgba(102,103,228,0.08)] flex items-center justify-center hover:scale-105 hover:bg-[#6667E4] hover:text-white transition-all"
              >
                <InstagramIcon />
              </a>
              <a
                href={portalData.profile.socials.tiktok}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-[20px] bg-white/70 backdrop-blur-md border border-white/80 text-[#6667E4] shadow-[0_4px_12px_rgba(102,103,228,0.08)] flex items-center justify-center hover:scale-105 hover:bg-[#6667E4] hover:text-white transition-all"
              >
                <TikTokIcon />
              </a>
            </motion.div>
          </div>

          {/* Links Sections */}
          <div className="px-5 w-full flex flex-col gap-8">
            {portalData.sections.map((section, sIdx) => (
              <motion.div
                key={sIdx}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + sIdx * 0.1 }}
              >
                <h2 className="font-anton text-xl tracking-wide text-[#4F37B3] mb-3 px-2">
                  {section.title}
                </h2>
                <div className="flex flex-col gap-4">
                  {section.links.map((link) => (
                    <motion.a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      whileTap={{ scale: 0.98 }}
                      className="group relative flex items-center p-2.5 pr-5 bg-white/80 backdrop-blur-md border border-white/80 rounded-[24px] shadow-[0_4px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_20px_rgba(102,103,228,0.12)] hover:border-white transition-all duration-300"
                    >
                      {link.image ? (
                        <div className="w-[52px] h-[52px] shrink-0 p-1.5 overflow-hidden bg-white/50 border border-white/50">
                          <img
                            src={link.image}
                            alt={link.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                        </div>
                      ) : (
                        <div className="w-[52px] h-[52px] shrink-0 rounded-[20px] bg-[#6667E4]/10 flex items-center justify-center text-[#6667E4]">
                          <LinkIcon className="w-6 h-6" />
                        </div>
                      )}

                      <div className="ml-4 flex-1">
                        <h3 className="text-[15px] font-bold text-[#424345] leading-tight pr-2">
                          {link.title}
                        </h3>
                      </div>

                      <button
                        onClick={(e) =>
                          handleShare(e, link.title, link.url, link.id)
                        }
                        className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center text-[#6667E4] hover:bg-[#6667E4] hover:text-white transition-colors shrink-0 shadow-sm"
                        aria-label="Share link"
                      >
                        {copiedId === link.id ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <MoreHorizontal className="w-5 h-5" />
                        )}
                      </button>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 flex flex-col items-center justify-center pb-8"
          >
            <p className="text-xs text-[#424345]/50 font-bold tracking-widest uppercase">
              Presented By MUDENG
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
