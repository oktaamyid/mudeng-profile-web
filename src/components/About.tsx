import mudengCard from "../assets/about/mudeng-card.svg";
import starBig from "../assets/about/star-about-big.svg";
import star25 from "../assets/about/star-about-2.svg";
import star28 from "../assets/about/star-about-1.svg";
import star29 from "../assets/about/star-about-4.svg";
import star30 from "../assets/about/star-about-3.svg";
import { FadeInUp, Parallax, SlideIn, StaggerContainer, StaggerItem } from "./motion";

const misiItems = [
  "Meningkatkan kompetensi mahasiswa melalui program latihan, mentoring, dan workshop yang relevan dengan kebutuhan industri kreatif.",
  "Menyediakan ruang dan wadah berkarya bagi mahasiswa untuk mengembangkan ide kreatif melalui proyek nyata dan kolaboratif.",
  "Membangun jejaring dan kolaborasi strategis dengan pelaku industri, komunitas kreatif, dan institusi pendukung.",
  "Mendorong lahirnya karya berkualitas dan berkelanjutan yang dapat dikurasi sebagai portofolio profesional mahasiswa.",
];

export default function About() {
  return (
    <section id="about" className="relative py-32 mt-16">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <FadeInUp>
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4 flex-1">
              <h2 className="font-anton text-[60px] text-primary uppercase leading-none">
                ABOUT
              </h2>
              <div className="flex-1 h-px bg-primary/30" />
            </div>
            <h2 className="font-anton text-[60px] text-primary uppercase leading-none ml-4">
              MUDENG
            </h2>
          </div>
        </FadeInUp>

        {/* Cover Card */}
        <FadeInUp delay={0.2}>
          <div className="relative rounded-2xl p-8 md:p-12 overflow-visible">
            {/* Glass backdrop */}
            <div
              className="absolute inset-0 rounded-2xl -z-1"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.15) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                boxShadow: "0 20px 60px rgba(79,55,179,0.08), inset 0 1px 0 rgba(255,255,255,0.6)",
                border: "1px solid rgba(200,190,230,0.4)",
              }}
            />

            {/* Decorative stars — parallax */}
            <Parallax speed={-0.3} className="absolute inset-0 pointer-events-none z-30">
              <img src={starBig} alt="" className="absolute" style={{ right: "2%", top: "4%", width: "85px", height: "auto" }} />
              <img src={star25} alt="" className="absolute" style={{ left: "-3%", top: "20%", width: "35px", height: "auto" }} />
              <img src={star28} alt="" className="absolute" style={{ left: "46%", bottom: "0%", width: "35px", height: "auto" }} />
              <img src={star29} alt="" className="absolute" style={{ left: "49%", bottom: "0%", width: "35px", height: "auto" }} />
              <img src={star30} alt="" className="absolute" style={{ left: "48%", bottom: "0%", width: "18px", height: "auto" }} />
            </Parallax>

            <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              {/* Left: Visi & Misi */}
              <div className="flex-1">
                <SlideIn direction="left">
                  <h3 className="font-anton text-[36px] text-primary uppercase mb-3">VISI</h3>
                  <p className="text-gray-700 text-base leading-relaxed mb-8">
                    Mewujudkan MUDENG sebagai ekosistem kreatif berbasis karya, guna
                    mencetak mahasiswa yang kompeten dan siap berkarir dengan portofolio profesional.
                  </p>
                </SlideIn>

                <SlideIn direction="left" delay={0.2}>
                  <h3 className="font-anton text-[36px] text-primary uppercase mb-4">MISI</h3>
                </SlideIn>
                <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                  {misiItems.map((item, i) => (
                    <StaggerItem key={i}>
                      <li className="flex gap-3 items-start list-none">
                        <span className="text-[#6667E4] mt-1.5 text-sm">›</span>
                        <p className="text-gray-700 text-base leading-relaxed">{item}</p>
                      </li>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>

              {/* Right: MUDENG Card */}
              <SlideIn direction="right" delay={0.3} className="shrink-0 w-[280px] md:w-[340px]">
                <img src={mudengCard} alt="MUDENG Card" className="w-full h-auto rotate-[5deg] drop-shadow-2xl" />
              </SlideIn>
            </div>
          </div>
        </FadeInUp>
      </div>

      <div className="max-w-[600px] mx-auto mt-16">
        <div className="h-px bg-accent" />
      </div>
    </section>
  );
}
