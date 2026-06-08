import { ArrowRight } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "./motion";
import eventUiux from "../assets/events/event-uiux.png";
import eventGraphic from "../assets/events/event-graphic-design.png";
import eventMotion from "../assets/events/event-motion-graphic.png";

const events = [
  {
    title: "Creative Labs UIUX Design",
    description: "Program hybrid yang terbuka untuk umum, dirancang untuk mempelajari UI/UX secara teori maupun praktik.",
    image: eventUiux,
  },
  {
    title: "Creative Labs Graphic Design",
    description: "Acara hybrid yang terbuka untuk umum, disediakan khusus untuk mempelajari bidang Graphic Design secara teori maupun praktik.",
    image: eventGraphic,
  },
  {
    title: "Creative Labs Motion Graphic",
    description: "Creative Labs Motion Graphics adalah acara hybrid terbuka untuk umum, di mana peserta belajar membuat gambar digital dengan teknologi terbaru.",
    image: eventMotion,
  },
];

export default function Event() {
  return (
    <section id="event" className="relative py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeInUp>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
            <h2 className="font-anton text-[60px] text-primary uppercase leading-none">event</h2>
            <div className="max-w-[537px]">
              <p className="text-[#333] text-base leading-relaxed mb-3">
                Setelah kamu mengetahui tentang MUDENG, yuk langsung kepoin kegiatannya di masing masing program kita!
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-primary font-bold text-base hover:gap-3 transition-all">
                LIHAT EVENT <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </FadeInUp>

        <StaggerContainer className="flex flex-col md:flex-row gap-5" staggerDelay={0.15}>
          <StaggerItem className="md:w-[52%]">
            <div className="group relative rounded-2xl overflow-hidden cursor-pointer h-[500px] md:h-[752px]">
              <img src={events[0].image} alt={events[0].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(to bottom, rgba(0,191,255,0) 47%, rgba(102,103,228,1) 100%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-white font-bold text-2xl mb-2">{events[0].title}</h3>
                <p className="text-white/80 text-sm leading-relaxed text-center">{events[0].description}</p>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem className="md:w-[48%] flex flex-col gap-5">
            {events.slice(1).map((event, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden cursor-pointer h-[250px] md:h-[360px]">
                <img src={event.image} alt={event.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(to bottom, rgba(0,191,255,0) 47%, rgba(102,103,228,1) 100%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-white font-bold text-xl mb-2">{event.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed text-center">{event.description}</p>
                </div>
              </div>
            ))}
          </StaggerItem>
        </StaggerContainer>
      </div>

      <div className="max-w-[600px] mx-auto mt-16">
        <div className="h-px bg-accent" />
      </div>
    </section>
  );
}
