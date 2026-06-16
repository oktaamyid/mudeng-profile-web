import { ArrowRight, ExternalLink } from "lucide-react";
import karyaFuturisme from "../assets/karya/karya-futurisme-nusantara.png";
import karyaMudengApp from "../assets/karya/karya-mudeng-app.png";
import karyaTypoVibe from "../assets/karya/karya-typo-vibe.png";
import karyaEthereal from "../assets/karya/karya-ethereal-light.png";
import karyaMotionFlow from "../assets/karya/karya-motion-flow.png";

const works = {
  featured: {
    title: "FUTURISME NUSANTARA",
    subtitle: "Short Movie - Visual Effects Focus",
    badge: "JUARA 1 — NASIONAL",
    image: karyaFuturisme,
  },
  side: {
    title: "MUDENG APP",
    subtitle: "Community Platform Concept",
    badge: "UI/UX DESIGN",
    image: karyaMudengApp,
  },
  small: [
    {
      title: "TYPO-VIBE",
      subtitle: "Typography Art - Winner Category A",
      image: karyaTypoVibe,
    },
    {
      title: "ETHEREAL LIGHT",
      subtitle: "Photo Essay - Best Cinematography",
      image: karyaEthereal,
    },
    {
      title: "MOTION FLOW",
      subtitle: "Motion Graphics - Social Campaign",
      image: karyaMotionFlow,
    },
  ],
};

export default function Karya() {
  return (
    <section id="karya" className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 border border-primary/30 rounded-full text-primary text-sm font-medium mb-3">
              Event Tahunan
            </span>
            <h2 className="font-anton text-[40px] md:text-6xl text-primary uppercase">
              karya
            </h2>
          </div>
          <div className="max-w-[500px]">
            <p className="text-gray-600 text-base leading-relaxed mb-3">
              Setelah kamu mengetahui tentang MUDENG, yuk langsung kepoin
              kegiatannya di masing masing program kita!
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
            >
              LIHAT EVENT <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Featured - Large */}
          <div className="md:col-span-8 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden group cursor-pointer">
            <img
              src={works.featured.image}
              alt={works.featured.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="inline-block px-3 py-1 bg-yellow-400/90 text-black text-xs font-bold rounded-full mb-3">
                {works.featured.badge}
              </span>
              <h3 className="font-anton text-3xl text-white uppercase mb-1">
                {works.featured.title}
              </h3>
              <p className="text-white/70 text-sm">
                {works.featured.subtitle}
              </p>
            </div>
          </div>

          {/* Side - Tall */}
          <div className="md:col-span-4 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden group cursor-pointer">
            <img
              src={works.side.image}
              alt={works.side.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute top-6 left-6">
              <span className="inline-block px-3 py-1 bg-primary/80 text-white text-xs font-bold rounded-full">
                {works.side.badge}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-anton text-2xl text-white uppercase mb-1">
                {works.side.title}
              </h3>
              <p className="text-white/70 text-sm">{works.side.subtitle}</p>
            </div>
          </div>

          {/* Small Cards */}
          {works.small.map((work, i) => (
            <div
              key={i}
              className="md:col-span-4 rounded-2xl border border-gray-100 overflow-hidden group cursor-pointer hover:shadow-lg hover:shadow-primary/5 transition-all"
            >
              <div className="h-[140px] overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-gray-900 text-lg mb-1">
                  {work.title}
                </h4>
                <p className="text-gray-500 text-sm mb-3">{work.subtitle}</p>
                <div className="flex justify-end">
                  <ExternalLink size={16} className="text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="max-w-[600px] mx-auto mt-16">
        <div className="h-px bg-accent" />
      </div>
    </section>
  );
}
