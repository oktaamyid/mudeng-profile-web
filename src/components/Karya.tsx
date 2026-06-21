import { ArrowRight } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "./motion";
import karyaFuturisme from "../assets/karya/karya-1.png";
import karyaMudengApp from "../assets/karya/karya-2.png";
import karyaTypoVibe from "../assets/karya/karya-3.png";

const overlayGradient = "linear-gradient(to bottom, rgba(0,191,255,0) 47%, rgba(102,103,228,1) 100%)";

const works = [
    {
        title: "KARYA FOTOGRAFI",
        description: "Di hadapan Mu kami bersujud, dalam untaian doa dan harmoni",
        image: karyaFuturisme,
        size: "large" as const,
    },
    {
        title: "DESIGN POSTER",
        description: "Lewat setiap bingkai kenangan, kita membuka tirai masa lalu",
        image: karyaMudengApp,
        size: "small" as const,
    },
    {
        title: "UI DESIGN",
        description: "Maksimalkan waktu istirahatmu tanpa antre di kantin kampus",
        image: karyaTypoVibe,
        size: "small" as const,
    },
];

export default function Karya() {
    return (
        <section id="karya" className="relative py-20 md:py-32 bg-white">
            <div className="max-w-300 mx-auto px-5 sm:px-6">
                {/* Section Header */}
                <FadeInUp>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8 md:mb-12">
                        <h2 className="font-anton text-[40px] md:text-[60px] text-primary uppercase leading-none">
                            KARYA
                        </h2>
                        <div className="max-w-134.25">
                            <p className="text-[#333] text-base leading-relaxed mb-3">
                                Intip berbagai mahakarya menakjubkan yang telah diciptakan oleh talenta-talenta kreatif MUDENG. Dari visual desain hingga antarmuka memukau, saksikan sendiri kualitas yang kami hasilkan!
                            </p>
                            <a href="#" className="inline-flex items-center gap-2 text-primary font-bold text-base hover:gap-3 transition-all">
                                LIHAT KARYA <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                </FadeInUp>

                {/* Works Grid — same layout as Event: 1 large left + 2 small right */}
                <StaggerContainer className="flex flex-col md:flex-row gap-4 md:gap-5" staggerDelay={0.15}>
                    {/* Large card — left */}
                    <StaggerItem className="md:w-[52%]">
                        <div className="group relative rounded-2xl overflow-hidden cursor-pointer h-[360px] sm:h-125 md:h-188">
                            <img
                                src={works[0].image}
                                alt={works[0].title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: overlayGradient }} />
                            <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                <h3 className="text-white font-bold text-2xl mb-2">{works[0].title}</h3>
                                <p className="text-white/80 text-sm leading-relaxed">{works[0].description}</p>
                            </div>
                        </div>
                    </StaggerItem>

                    {/* Right column — 2 small cards */}
                    <StaggerItem className="md:w-[48%] flex flex-col gap-4 md:gap-5">
                        {works.slice(1).map((work, i) => (
                            <div key={i} className="group relative rounded-2xl overflow-hidden cursor-pointer h-[220px] sm:h-62.5 md:h-90">
                                <img
                                    src={work.image}
                                    alt={work.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Hover overlay */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: overlayGradient }} />
                                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <h3 className="text-white font-bold text-xl mb-2">{work.title}</h3>
                                    <p className="text-white/80 text-sm leading-relaxed">{work.description}</p>
                                </div>
                            </div>
                        ))}
                    </StaggerItem>
                </StaggerContainer>
            </div>

            {/* Bottom divider */}
            <div className="max-w-[600px] mx-5 sm:mx-auto mt-10 md:mt-16">
                <div className="h-px bg-accent" />
            </div>
        </section>
    );
}
