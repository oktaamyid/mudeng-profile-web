import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { X } from 'lucide-react';
import patternGrid from "../assets/hero/pattern.png";
import star6 from "../assets/hero/star-6.png";

export interface EventSchedule {
  date: string;
  location: string;
}

export interface EventDetailData {
  title: string;
  schedules: EventSchedule[];
  fullDescription: string;
  gallery: string[];
}

interface EventPopupProps {
  isOpen: boolean;
  onClose: () => void;
  data: EventDetailData | null;
}

export default function EventPopup({ isOpen, onClose, data }: EventPopupProps) {
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
      {isOpen && data && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
        />
      )}
      {isOpen && data && (
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

            <button
              onClick={onClose}
              className="absolute right-4 top-4 md:right-6 md:top-6 p-2 rounded-full hover:bg-black/5 transition-colors z-20"
            >
              <X size={24} className="text-gray-500" />
            </button>

            <div className="relative z-10 p-8 md:p-[78px]">
              <div className="flex flex-col">
                <h2 className="font-anton text-5xl md:text-[56px] text-primary uppercase leading-none mb-6">
                  {data.title}
                </h2>

                <div className="flex justify-end mb-8 md:mb-10">
                  <button className="bg-[#6849E1] hover:bg-[#4F37B3] text-white px-8 py-2.5 rounded-xl text-[14px] font-medium transition-colors shadow-sm w-full sm:w-auto">
                    Register Now
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row gap-10 md:gap-24 mb-12">
                  <div className="flex-1">
                    <h3 className="text-primary font-bold text-[18px] mb-4">Tanggal</h3>
                    <ul className="flex flex-col gap-3.5">
                      {data.schedules.map((schedule, i) => (
                        <li key={i} className="text-[#424345] text-[18px]">{schedule.date}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-primary font-bold text-[18px] mb-4">Lokasi</h3>
                    <ul className="flex flex-col gap-3.5">
                      {data.schedules.map((schedule, i) => (
                        <li key={i} className="text-[#424345] text-[18px]">{schedule.location}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="text-[#424345] leading-relaxed text-justify text-[18px] mb-8">
                  {data.fullDescription}
                </div>

                {data.gallery && data.gallery.length > 0 && (
                  <div className="flex flex-col gap-6 mt-4">
                    {data.gallery.map((img, i) => (
                      <img key={i} src={img} alt={`Gallery ${i + 1}`} className="w-full aspect-[16/9] rounded-2xl md:rounded-3xl object-cover shadow-sm" />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
      )}
    </AnimatePresence>
  );
}
