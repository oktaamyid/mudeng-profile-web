import { ArrowRight } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "./motion";
import eventUICraft from "../assets/events/event-uicraft.png";
import eventCrreativeCraft from "../assets/events/event-creativecraft.png";
import eventMucrex from "../assets/events/event-mucrex.png";
import { useState } from "react";
import EventPopup, { type EventDetailData } from "./EventPopup";

const events = [
  {
    title: "Creative Labs UIUX Design",
    description: "Program hybrid yang terbuka untuk umum, dirancang untuk mempelajari UI/UX secara teori maupun praktik.",
    image: eventUICraft,
    details: {
      title: "EVENT UI CRAFT",
      schedules: [
        { date: "Sabtu, 27 Juni 2026 (online)", location: "Zoom Meeting" },
        { date: "Minggu, 28 Juni 2026 (offline)", location: "Kampus" },
        { date: "Sabtu, 4 Juli 2026 (online)", location: "Zoom Meeting" },
        { date: "Minggu, 5 Juli 2026 (offline)", location: "Kampus" },
      ],
      fullDescription: "UI/UX Design (UICraft) merupakan program pelatihan hybrid (online dan offline) yang terbuka hanya untuk internal STTNF, menggabungkan pembelajaran teori dan praktik dengan teknologi terkini. Kegiatan ini dirancang khusus sebagai inkubasi dan pelatihan intensif untuk mempersiapkan peserta menuju kompetisi nasional GEMASTIK. Fokus pembelajaran dimulai dari riset pengguna, penyusunan berkas UX, pembuatan wireframe, hingga hasil akhir berupa high-fidelity prototype aplikasi atau website yang memenuhi standar kompetisi nasional. Selain meningkatkan kreativitas dan kemampuan teknis, peserta juga dibekali dengan strategi penyusunan proposal dan presentasi produk yang kompetitif.",
      gallery: [eventUICraft, eventUICraft]
    }
  },
  {
    title: "Creative Labs Graphic Design",
    description: "Acara hybrid yang terbuka untuk umum, disediakan khusus untuk mempelajari bidang Graphic Design secara teori maupun praktik.",
    image: eventCrreativeCraft,
    details: {
      title: "EVENT GRAPHIC DESIGN",
      schedules: [
        { date: "Sabtu, 11 Juli 2026 (online)", location: "Zoom Meeting" },
        { date: "Minggu, 12 Juli 2026 (offline)", location: "Kampus" },
      ],
      fullDescription: "Program Graphic Design (Graphic Craft) membekali peserta dengan kemampuan desain komunikasi visual dari konsep dasar hingga praktik pembuatan karya yang menarik dan profesional.",
      gallery: [eventCrreativeCraft]
    }
  },
  {
    title: "Creative Labs Motion Graphic",
    description: "Creative Labs Motion Graphics adalah acara hybrid terbuka untuk umum, di mana peserta belajar membuat gambar digital dengan teknologi terbaru.",
    image: eventMucrex,
    details: {
      title: "EVENT MOTION GRAPHIC",
      schedules: [
        { date: "Sabtu, 18 Juli 2026 (online)", location: "Zoom Meeting" },
        { date: "Minggu, 19 Juli 2026 (offline)", location: "Kampus" },
      ],
      fullDescription: "Motion Graphic (Motion Craft) mengajarkan animasi dan grafis bergerak menggunakan software terkini. Peserta akan dibimbing membuat project animasi yang dinamis.",
      gallery: [eventMucrex]
    }
  },
];

export default function Event() {
  const [selectedEvent, setSelectedEvent] = useState<EventDetailData | null>(null);

  return (
    <section id="event" className="relative py-20 md:py-32">
      <div className="max-w-300 mx-auto px-5 sm:px-6">
        <FadeInUp>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8 md:mb-12">
            <h2 className="font-anton text-[40px] md:text-[60px] text-primary uppercase leading-none">event</h2>
            <div className="max-w-134.25">
              <p className="text-[#333] text-base leading-relaxed mb-3">
                Setelah kamu mengetahui tentang MUDENG, yuk langsung kepoin kegiatannya di masing masing program kita!
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-primary font-bold text-base hover:gap-3 transition-all">
                LIHAT EVENT <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </FadeInUp>

        <StaggerContainer className="flex flex-col md:flex-row gap-4 md:gap-5" staggerDelay={0.15}>
          <StaggerItem className="md:w-[52%]">
            <div
              onClick={() => setSelectedEvent(events[0].details)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer h-90 sm:h-110 md:h-188"
            >
              <img src={events[0].image} alt={events[0].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(to bottom, rgba(0,191,255,0) 47%, rgba(102,103,228,1) 100%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-white font-bold text-2xl mb-2">{events[0].title}</h3>
                <p className="text-white/80 text-sm leading-relaxed text-center">{events[0].description}</p>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem className="md:w-[48%] flex flex-col gap-4 md:gap-5">
            {events.slice(1).map((event, i) => (
              <div
                key={i}
                onClick={() => setSelectedEvent(event.details)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer h-55 sm:h-62.5 md:h-90"
              >
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

      <div className="max-w-150 mx-5 sm:mx-auto mt-10 md:mt-16">
        <div className="h-px bg-accent" />
      </div>

      <EventPopup
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        data={selectedEvent}
      />
    </section>
  );
}
