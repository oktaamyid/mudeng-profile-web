import iconSecured from "../assets/icons/icon-secured.svg";
import iconFolder from "../assets/icons/icon-folder.svg";
import iconRocket from "../assets/icons/icon-rocket.svg";
import benefitBg from "../assets/benefit/benefit-bg.webp";
import { FadeInUp, StaggerContainer, StaggerItem } from "./motion";

const benefits = [
  {
    icon: iconSecured,
    title: "Praktik langsung",
    description:
      "Dengan arahan yang kami berikan, kalian akan mempraktikan langsung ilmu tentang Pembuatan komik",
  },
  {
    icon: iconFolder,
    title: "Portfolio",
    description:
      "Dengan project yang kalian buat, tidak hanya melatih keterampilan kamu, tetapi akan menambah portfolio kamu juga!",
  },
  {
    icon: iconRocket,
    title: "Networking",
    description:
      "Kalian akan kami kelompokan menjadi beberapa tim, dan bisa menambah relasi kalian",
  },
];

export default function Benefit() {
  return (
    <section
      className="relative py-20 md:py-32 bg-white"
    >
      {/* Background: gradient mesh blob + grid combined (single asset) */}
      <img
        src={benefitBg}
        alt=""
        className="absolute pointer-events-none w-[115%] md:w-[75%]"
        style={{ left: "50%", top: "55%", transform: "translate(-50%, -50%)", height: "auto" }}
      />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 relative z-10">
        {/* Section Header */}
        <FadeInUp>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8 md:mb-16">
            {/* Left: description */}
            <p className="text-[#0F0F0F] text-[14px] md:text-base leading-relaxed max-w-[537px]">
              Bergabunglah dengan MUDENG dan dapatkan pengalaman belajar multimedia yang interaktif. Kami merancang setiap program untuk memberikan dampak nyata bagi masa depan karir kreatifmu.
            </p>

            {/* Right: tag + title */}
            <div className="text-left md:text-right">
              <span className="inline-block px-4 py-2 bg-[#F7F5FF] rounded-2xl text-[#8D6FDE] text-sm font-medium mb-3">
                Kenapa MUDENG?
              </span>
              <h2 className="font-anton text-[40px] md:text-[60px] text-primary uppercase leading-none">
                benefit
              </h2>
            </div>
          </div>
        </FadeInUp>

        {/* Benefit Cards — glass effect */}
        <StaggerContainer className="grid md:grid-cols-3 gap-4 md:gap-6" staggerDelay={0.15}>
          {benefits.map((benefit, i) => (
            <StaggerItem key={i}>
              <div
                className="relative rounded-2xl p-6 md:p-8 text-center overflow-visible"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4), 0 4px 30px rgba(79,55,179,0.05)",
                }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    className="w-[84px] h-[84px] md:w-[100px] md:h-[100px] drop-shadow-lg"
                  />
                </div>

                {/* Heading */}
                <h3 className="font-bold text-[22px] text-[#21242A] mb-3">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-[#424345] text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
