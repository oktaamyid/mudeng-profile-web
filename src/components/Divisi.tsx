import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  { name: "Leader", image: divisiLeader},
  { name: "Event", image: divisiEvent },
  { name: "Media Creative", image: divisiMedia},
  { name: "Public Relation", image: divisiPR },
  { name: "Project", image: divisiProject },
  { name: "Socmed Spesialist", image: divisiSocmed },
  { name: "Finance", image: divisiFinance },
  { name: "Internal Management", image: divisiSecretary },
  { name: "Secretary", image: divisiSecretary },
];

const VISIBLE_COUNT = 4;

export default function Divisi() {
  const [startIndex, setStartIndex] = useState(0);
  const [activeCard, setActiveCard] = useState(0);

  const visibleDivisions = divisions.slice(
    startIndex,
    startIndex + VISIBLE_COUNT
  );

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
      setActiveCard(0);
    }
  };

  const handleNext = () => {
    if (startIndex + VISIBLE_COUNT < divisions.length) {
      setStartIndex(startIndex + 1);
      setActiveCard(0);
    }
  };

  const canPrev = startIndex > 0;
  const canNext = startIndex + VISIBLE_COUNT < divisions.length;

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Decorative stars */}
      <img
        src={starBig}
        alt=""
        className="absolute pointer-events-none rotate-12"
        style={{ left: "-8%", top: "20%", width: "18%", height: "auto"}}
      />
      <img
        src={starSmall}
        alt=""
        className="absolute pointer-events-none"
        style={{ left: "85%", top: "62%", width: "12%", height: "auto"}}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 md:mb-16">
          <h2 className="font-anton text-[40px] md:text-[60px] text-primary uppercase leading-none">
            DIVISI
          </h2>
          <div className="flex-1 mx-2 md:mx-6 h-px bg-gray-200" />
          <h2 className="font-anton text-[40px] md:text-[60px] text-primary uppercase leading-none">
            MUDENG
          </h2>
        </div>

        {/* Division Cards — show 4 at a time, accordion style */}
        <div className="flex gap-2 md:gap-4 h-[400px] md:h-[533px] justify-center">
          {visibleDivisions.map((div, i) => (
            <div
              key={startIndex + i}
              className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
                activeCard === i ? "w-[250px] md:w-[350px]" : "w-[60px] md:w-[150px]"
              }`}
              onClick={() => setActiveCard(i)}
            >
              <img
                src={div.image}
                alt={div.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className={`absolute inset-0 transition-all duration-500 ${
                  activeCard === i
                    ? "bg-gradient-to-t from-black/50 to-transparent"
                    : "bg-white/30"
                }`}
              />
              <div className="absolute inset-0 flex items-end p-5">
                <span
                  className={`text-white font-bold transition-all duration-500 ${
                    activeCard === i
                      ? "text-lg md:text-xl"
                      : "text-sm md:text-base -rotate-90 origin-bottom-left translate-x-4 md:translate-x-6 -translate-y-4 whitespace-nowrap"
                  }`}
                >
                  {div.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-3 mt-8 justify-center">
          <button
            onClick={handlePrev}
            disabled={!canPrev}
            className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${
              canPrev
                ? "border-gray-300 text-gray-500 hover:border-primary hover:text-primary"
                : "border-gray-100 text-gray-200 cursor-not-allowed"
            }`}
            aria-label="Previous"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={handleNext}
            disabled={!canNext}
            className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${
              canNext
                ? "border-gray-300 text-gray-500 hover:border-primary hover:text-primary"
                : "border-gray-100 text-gray-200 cursor-not-allowed"
            }`}
            aria-label="Next"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="max-w-[600px] mx-auto mt-16">
        <div className="h-px bg-accent" />
      </div>
    </section>
  );
}
