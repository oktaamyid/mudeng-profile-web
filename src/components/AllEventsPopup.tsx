import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { X } from 'lucide-react';
import patternGrid from "../assets/hero/pattern.png";
import star6 from "../assets/hero/star-6.png";
import eventUICraft from "../assets/events/event-uicraft.png";
import eventCreativeCraft from "../assets/events/event-creativecraft.png";
import eventMucrex from "../assets/events/event-mucrex.png";

interface AllEventsPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AllEventsPopup({ isOpen, onClose }: AllEventsPopupProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
        />
      )}
      {isOpen && (
        <motion.div
          key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 md:inset-auto md:left-1/2 md:top-1/2 z-50 w-full h-full md:h-auto md:max-h-[90vh] md:max-w-5xl md:-translate-x-1/2 md:-translate-y-1/2 overflow-y-auto overflow-x-hidden md:rounded-[32px] shadow-2xl [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] bg-white"
            style={{
              backgroundImage: `
                radial-gradient(circle at top right, rgba(104, 73, 225, 0.15) 0%, transparent 60%),
                radial-gradient(circle at bottom left, rgba(104, 73, 225, 0.1) 0%, transparent 50%),
                url(${patternGrid})
              `,
              backgroundSize: '100% 100%, 100% 100%, cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Stars Decoration */}
            <img src={star6} alt="" className="absolute right-12 top-12 w-6 opacity-60 pointer-events-none" />
            <img src={star6} alt="" className="absolute left-8 bottom-32 w-8 opacity-40 pointer-events-none" />

            {/* Blue glow effect in the background */}
            <div className="absolute top-[350px] -left-[400px] w-[630px] h-[652px] rounded-[45px] opacity-30 pointer-events-none" style={{ background: "linear-gradient(182deg, #006ECF 18%, #FDFEFF 100%)", filter: "blur(50px)" }} />

            <button
              onClick={onClose}
              className="absolute right-4 top-4 md:right-6 md:top-6 p-2 rounded-full hover:bg-black/5 transition-colors z-20"
            >
              <X size={24} className="text-gray-500" />
            </button>

            <div className="relative z-10 p-8 md:p-[78px]">
              <div className="flex flex-col">
                <h2 className="font-anton text-[40px] md:text-[60px] text-primary uppercase leading-none mb-6">
                  EVENT MUDENG
                </h2>

                <p className="text-[#424345] text-base md:text-[18px] leading-relaxed md:leading-[29px] mb-12">
                  Selamat datang di event MUDENG STT NF! Di sini kita mau kenalin seluruh rangkaian program kreatif yang bisa kamu ikuti. Ada UI Craft buat kamu yang mau fokus belajar UI/UX dan persiapan lomba, Creative Craft buat yang pengen jago multimedia, dan terakhir ada MuCreX tempat kita pamerin karya-karya terbaik. Scroll ke bawah buat info lengkapnya, ya!
                </p>

                <div className="flex flex-col gap-16 md:gap-20">
                  {/* Event UI Craft */}
                  <div className="flex flex-col gap-6">
                    <h3 className="font-anton text-[32px] md:text-[40px] text-primary uppercase leading-none">
                      EVENT UI CRAFT
                    </h3>
                    <p className="text-[#424345] text-base md:text-[18px] leading-relaxed md:leading-[29px]">
                      UICraft adalah pelatihan hybrid internal STTNF yang mempersiapkan peserta menuju kompetisi nasional GEMASTIK. Program inkubasi intensif ini berfokus pada riset pengguna, desain high-fidelity prototype, hingga strategi penyusunan proposal dan presentasi produk yang kompetitif.
                    </p>
                    <img src={eventUICraft} alt="Event UI Craft" className="w-full h-auto object-cover rounded-[20px] md:rounded-[30px]" />
                  </div>

                  {/* Event Creative Craft */}
                  <div className="flex flex-col gap-6">
                    <h3 className="font-anton text-[32px] md:text-[40px] text-primary uppercase leading-none">
                      EVENT CREATIVE CRAFT
                    </h3>
                    <p className="text-[#424345] text-base md:text-[18px] leading-relaxed md:leading-[29px]">
                      Creative Craft adalah program multimedia hybrid untuk umum yang memadukan teori dan praktik di tiga bidang utama: motion graphic, fotografi, dan videografi digital. Melalui diskusi interaktif dan kompetisi internal, karya-karya terbaik peserta akan dikurasi untuk dipamerkan langsung dalam ajang MuCreX sebagai showcase utama.
                    </p>
                    <img src={eventCreativeCraft} alt="Event Creative Craft" className="w-full h-auto object-cover rounded-[20px] md:rounded-[30px]" />
                  </div>

                  {/* Event Mucrex */}
                  <div className="flex flex-col gap-6">
                    <h3 className="font-anton text-[32px] md:text-[40px] text-primary uppercase leading-none">
                      EVENT MUCREX
                    </h3>
                    <p className="text-[#424345] text-base md:text-[18px] leading-relaxed md:leading-[29px]">
                      MuCreX adalah pameran dan ajang apresiasi karya multimedia dari Mudeng STT NF untuk menampilkan hasil terbaik dari berbagai program kreatif digital. Kegiatan ini bertujuan memberikan ruang apresiasi, memperluas wawasan, serta membuka peluang bagi peserta untuk berbagi inspirasi dan membangun jejaring di industri digital.
                    </p>
                    <img src={eventMucrex} alt="Event MuCreX" className="w-full h-auto object-cover rounded-[20px] md:rounded-[30px]" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
      )}
    </AnimatePresence>
  );
}
