import logoMonogram from "../assets/logo/logo-monogram.svg";
import logoFooter from "../assets/logo/logo-footer-full.svg";
import { FadeInUp } from "./motion";

const footerLinks = [
  { items: ["Home", "About", "Event"] },
  { items: ["Karya", "Core Team", "E-books"] },
  { items: ["Karya", "Core Team", "E-books"] },
  { items: ["Karya", "Core Team", "E-books"] },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative mt-24 pt-32 pb-12 overflow-hidden">
      {/* Background gradient mesh — CSS blobs */}
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
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div
          className="relative rounded-3xl p-8 md:p-14"
          style={{
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.2)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)",
          }}
        >
          {/* Top: Logo (left) + Links (right) with gap between */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12">
            <div className="shrink-0">
              <img src={logoMonogram} alt="MUDENG" className="w-[100px] h-auto" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-3">
              {footerLinks.map((column, i) => (
                <div key={i} className="space-y-3">
                  {column.items.map((item, j) => (
                    <a key={j} href="#" className="block text-white hover:text-white text-sm transition-colors">
                      {item}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Watermark logo */}
          <div className="flex justify-center mb-12">
            <img src={logoFooter} alt="" className="w-[650px] h-auto" />
          </div>

          {/* Divider + Credits */}
          <div className="border-t border-white/15 pt-5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-white text-sm">© {new Date().getFullYear()} Mudeng. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a href="#" className="text-white hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-white hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-white hover:text-white text-sm transition-colors">Cookie Settings</a>
            </div>
          </div>
        </div>
      </div>
      </FadeInUp>
    </footer>
  );
}
