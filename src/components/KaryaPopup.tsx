import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { X } from 'lucide-react';
import patternGrid from "../assets/hero/pattern.png";
import star6 from "../assets/hero/star-6.png";

export interface KaryaDetailData {
  title: string;
  image: string;
  fullDescription: string;
}

interface KaryaPopupProps {
  isOpen: boolean;
  onClose: () => void;
  data: KaryaDetailData | null;
}

export default function KaryaPopup({ isOpen, onClose, data }: KaryaPopupProps) {
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
            className="fixed inset-0 md:inset-auto md:left-1/2 md:top-1/2 z-50 w-full h-full md:h-auto md:max-h-[90vh] md:max-w-4xl md:-translate-x-1/2 md:-translate-y-1/2 overflow-y-auto overflow-x-hidden md:rounded-[32px] shadow-2xl [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] bg-white"
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

            <div className="relative z-10 p-8 md:p-[60px]">
              <div className="flex flex-col">
                <h2 className="font-anton text-4xl md:text-[50px] text-primary uppercase leading-none mb-8">
                  {data.title}
                </h2>

                <div className="text-[#424345] leading-relaxed text-justify text-[18px] mb-8">
                  {data.fullDescription}
                </div>

                <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
                  <img src={data.image} alt={data.title} className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
          </motion.div>
      )}
    </AnimatePresence>
  );
}
