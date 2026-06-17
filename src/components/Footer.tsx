import logoMonogram from "../assets/logo/logo-monogram.svg";
import logoFooter from "../assets/logo/logo-footer-full.svg";
import { FadeInUp } from "./motion";

const footerLinks = [
  {
    title: "MUDENG",
    items: [
      { label: "Home", href: "/" },
      { label: "About MUDENG", href: "#about" },
      { label: "Division", href: "#divisi" }
    ]
  },
  {
    title: "Partnership",
    items: [
      { label: "Ratecard", href: "https://drive.google.com/file/d/1pW9ctakAwqCbqEgsRINSo16ZenppoW0x/view" },
      { label: "Support Us", href: "https://saweria.co/mudeng" },
    ]
  },
  {
    title: "Social Media",
    items: [
      { label: "Instagram", href: "https://www.instagram.com/mudengsttnf/" },
      { label: "TikTok", href: "https://www.tiktok.com/@mudeng.sttnf" },
      { label: "YouTube", href: "https://www.youtube.com/@MultimediaDigitalEngagementSTT" },
      { label: "Linktree", href: "https://linktr.ee/mudengsttnf" }
    ]
  },
  {
    title: "Contact",
    items: [
      { label: "Email", href: "mailto:mudeng@nurulfikri.ac.id" },
      { label: "WhatsApp Group", href: "https://chat.whatsapp.com/LOrUMOHuLMY3ftHmz6dovF?mode=gi_t" }
    ]
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative mt-10 md:mt-24 pt-16 md:pt-32 pb-8 md:pb-12 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {/* Large purple/blue ellipse — center */}
        <div
          className="absolute rounded-full"
          style={{
            width: "120%",
            height: "100%",
            left: "-10%",
            top: "10%",
            background: "radial-gradient(ellipse at center, rgba(104,73,225,0.9) 0%, rgba(80,50,200,0.6) 40%, transparent 70%)",
          }}
        />
        {/* Cyan/blue accent — left */}
        <div
          className="absolute rounded-full"
          style={{
            width: "50%",
            height: "80%",
            left: "-10%",
            top: "0%",
            background: "radial-gradient(ellipse at center, rgba(0,180,255,0.7) 0%, rgba(0,150,255,0.3) 40%, transparent 65%)",
          }}
        />
        {/* Purple accent — right bottom */}
        <div
          className="absolute rounded-full"
          style={{
            width: "40%",
            height: "70%",
            right: "-5%",
            bottom: "0%",
            background: "radial-gradient(ellipse at center, rgba(90,50,200,0.8) 0%, rgba(70,30,180,0.4) 40%, transparent 65%)",
          }}
        />
        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-65 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Glass card */}
      <FadeInUp>
        <div className="max-w-300 mx-auto px-5 sm:px-6 relative z-10">
          <div
            className="relative rounded-3xl p-6 md:p-14"
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)",
            }}
          >
            {/* Top: Logo (left) + Links (right) with gap between */}
            <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-8 mb-8 md:mb-12">
              <div className="shrink-0">
                <img src={logoMonogram} alt="MUDENG" className="w-25 h-auto" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
                {footerLinks.map((column, i) => (
                  <div key={i} className="space-y-4">
                    <h4 className="text-white/60 font-semibold text-xs tracking-wider uppercase">
                      {column.title}
                    </h4>
                    <div className="space-y-3">
                      {column.items.map((item, j) => (
                        <a
                          key={j}
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="block text-white hover:text-white/70 text-sm transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Watermark logo */}
            <div className="flex justify-center mb-8 md:mb-12">
              <img src={logoFooter} alt="" className="w-162.5 h-auto" />
            </div>

            {/* Divider + Credits */}
            <div className="border-t border-white/15 pt-5 flex flex-col items-center gap-4 text-center">
              <p className="text-white/80 text-sm">© {new Date().getFullYear()} MUDENG STT Terpadu Nurul Fikri. All rights reserved.</p>
            </div>
          </div>
        </div>
      </FadeInUp>
    </footer>
  );
}
