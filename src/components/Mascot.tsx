import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Importing a subset of Mascot images (5 poses)
import mascot1 from "../assets/mascot/Mudeng ORG_20260811142432.png";
import mascot2 from "../assets/mascot/Mudeng ORG_20260811142535.png";
import mascot3 from "../assets/mascot/Mudeng ORG_20260811142635.png";
import mascot4 from "../assets/mascot/Mudeng ORG_20260811142648.png";
import mascot5 from "../assets/mascot/Mudeng ORG_20260811142704.png";

const MASCOT_IMAGES = [mascot1, mascot2, mascot3, mascot4, mascot5];

export default function Mascot() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [currentPoseIndex, setCurrentPoseIndex] = useState(0);

  useEffect(() => {
    // 1. Entry Animation Timing (Delay 3.5s to wait for initial Loader + Hero animation)
    const entryTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3500);

    // 2. Preload the rest of the images to avoid flickering
    MASCOT_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    return () => clearTimeout(entryTimer);
  }, []);

  useEffect(() => {
    // 3. Pose cycling interval (every 3 seconds)
    if (!isVisible || isDismissed) return;
    
    const poseInterval = setInterval(() => {
      setCurrentPoseIndex((prev) => (prev + 1) % MASCOT_IMAGES.length);
    }, 3000);

    return () => clearInterval(poseInterval);
  }, [isVisible, isDismissed]);

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 200, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 200, opacity: 0, scale: 0.5 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex flex-col items-end pointer-events-none"
        >
          {/* Close button - Only visible on group hover to avoid cluttering */}
          <div className="relative group flex flex-col items-end pointer-events-auto">
            <button
              onClick={() => setIsDismissed(true)}
              className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-white/80 backdrop-blur-sm text-gray-500 rounded-full p-1.5 shadow-md md:opacity-0 md:group-hover:opacity-100 transition-opacity z-10 hover:bg-gray-100 hover:text-red-500"
              aria-label="Dismiss mascot"
            >
              <X size={16} />
            </button>

            {/* Floating animation wrapper */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative w-32 h-32 md:w-48 md:h-48"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentPoseIndex} // Re-renders the img with crossfade when index changes
                  src={MASCOT_IMAGES[currentPoseIndex]}
                  alt="MUDENG Mascot"
                  initial={{ opacity: 0.5, filter: "blur(4px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0.5, filter: "blur(4px)" }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-contain drop-shadow-xl"
                />
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
