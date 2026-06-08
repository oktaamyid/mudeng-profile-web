import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoMain from "../assets/logo/logo-mudeng.svg";

const navLinks = [
     { label: "HOME", href: "#home" },
     { label: "ABOUT", href: "#about" },
     { label: "EVENT", href: "#event" },
     { label: "KARYA", href: "#karya" },
     { label: "CORE TEAM", href: "#coreteam" },
];

export default function Navbar() {
     const [isOpen, setIsOpen] = useState(false);
     const [activeLink, setActiveLink] = useState("HOME");

     return (
          <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1152px] px-4">
               {/* Pill container with glassmorphism */}
               <div
                    className="relative flex items-center justify-between px-6 py-3 rounded-full border border-white/40 backdrop-blur-xl"
                    style={{
                         background:
                              "linear-gradient(160deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 100%)",
                         boxShadow: "0 8px 32px rgba(31, 81, 218, 0.3)",
                    }}
               >
                    {/* Logo */}
                    <div className="flex items-center">
                         
                         <img
                              src={logoMain}
                              alt="MUDENG"
                              className="h-5 object-contain hidden sm:block"
                         />
                    </div>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-6">
                         {navLinks.map((link) => (
                              <a
                                   key={link.label}
                                   href={link.href}
                                   onClick={() => setActiveLink(link.label)}
                                   className={`relative text-base pb-1 transition-colors ${activeLink === link.label
                                             ? "text-[#6667E4] font-bold border-b border-[#6667E4]"
                                             : "text-[#434655] font-medium hover:text-[#6667E4]"
                                        }`}
                              >
                                   {link.label}
                              </a>
                         ))}
                    </div>

                    {/* Contact Button */}
                    <a
                         href="#contact"
                         className="hidden md:flex items-center justify-center px-8 py-2.5 rounded-full text-white text-xs font-bold tracking-[1.2px]"
                         style={{
                              background:
                                   "linear-gradient(160deg, rgba(102,103,228,1) 0%, rgba(102,103,228,0.8) 100%)",
                              boxShadow:
                                   "0 10px 20px rgba(31, 81, 218, 0.3), inset 0 2px 4px rgba(255,255,255,0.3)",
                         }}
                    >
                         CONTACT
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                         onClick={() => setIsOpen(!isOpen)}
                         className="md:hidden text-[#434655]"
                         aria-label="Toggle menu"
                    >
                         {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
               </div>

               {/* Mobile Menu */}
               {isOpen && (
                    <div
                         className="md:hidden mt-2 rounded-2xl border border-white/40 backdrop-blur-xl p-4"
                         style={{
                              background:
                                   "linear-gradient(160deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 100%)",
                              boxShadow: "0 8px 32px rgba(31, 81, 218, 0.2)",
                         }}
                    >
                         {navLinks.map((link) => (
                              <a
                                   key={link.label}
                                   href={link.href}
                                   className={`block py-3 text-base transition-colors ${activeLink === link.label
                                             ? "text-[#6667E4] font-bold"
                                             : "text-[#434655] font-medium"
                                        }`}
                                   onClick={() => {
                                        setActiveLink(link.label);
                                        setIsOpen(false);
                                   }}
                              >
                                   {link.label}
                              </a>
                         ))}
                         <a
                              href="#contact"
                              className="block mt-3 px-6 py-2.5 rounded-full text-white text-xs font-bold tracking-[1.2px] text-center"
                              style={{
                                   background:
                                        "linear-gradient(160deg, rgba(102,103,228,1) 0%, rgba(102,103,228,0.8) 100%)",
                                   boxShadow:
                                        "0 10px 20px rgba(31, 81, 218, 0.3), inset 0 2px 4px rgba(255,255,255,0.3)",
                              }}
                              onClick={() => setIsOpen(false)}
                         >
                              CONTACT
                         </a>
                    </div>
               )}
          </nav>
     );
}
