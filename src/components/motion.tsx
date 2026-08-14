import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

// Star imports for reuse across sections

import starBig10 from "../assets/hero/star-10-big.png";
import starBig11 from "../assets/hero/star-11-big.png";

// ===== SCROLL ANIMATIONS =====

interface FadeInUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FadeInUp({ children, delay = 0, duration = 0.6, className }: FadeInUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({ children, className, staggerDelay = 0.1 }: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ===== PARALLAX =====

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function Parallax({ children, speed = -0.2, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 300]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

// Scale in animation for cards
export function ScaleIn({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Slide from left/right
export function SlideIn({ children, direction = "left", delay = 0, className }: { children: ReactNode; direction?: "left" | "right"; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ===== TEXT REVEAL (Fade + Blur, staggered) =====

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/** Wraps content in fade + blur(12px) + slide-up entrance, scroll-triggered */
export function TextReveal({ children, delay = 0, className }: TextRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        opacity: { duration: 0.8, ease: "easeOut", delay },
        y: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
        filter: { duration: 1, ease: "easeOut", delay },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ===== FLOATING STAR WITH LOOP =====

interface FloatingStarProps {
  src: string;
  size: number;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  floatY?: number;
  floatDur?: number;
  delay?: number;
  /** Parallax speed: positive = moves down faster, negative = moves up. Range: -0.3 to 0.3 */
  parallaxSpeed?: number;
}

/** Star with entrance (scale+blur) + infinite float loop + optional parallax */
function FloatingStarInner({ src, size, top, bottom, left, right, floatY = -8, floatDur = 3, delay = 0, parallaxY }: FloatingStarProps & { parallaxY?: any }) {
  return (
    <motion.div
      className="absolute pointer-events-none z-0"
      style={{ top, bottom, left, right, y: parallaxY }}
    >
      <motion.div
        animate={{ y: [0, floatY, 0] }}
        transition={{ y: { duration: floatDur, repeat: Infinity, repeatType: "loop", ease: "easeInOut" } }}
      >
        <motion.img
          src={src}
          alt=""
          className="pointer-events-none"
          style={{ width: size, height: "auto" }}
          initial={{ opacity: 0, scale: 0.3, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0 }}
          transition={{
            opacity: { duration: 0.8, ease: "easeOut", delay },
            scale: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
            filter: { duration: 1, ease: "easeOut", delay },
          }}
        />
      </motion.div>
    </motion.div>
  );
}

/** Standalone star (no parallax context) */
export function FloatingStarWithLoop(props: FloatingStarProps) {
  return <FloatingStarInner {...props} />;
}

// ===== SECTION BIG STARS WITH BOUNDED PARALLAX =====

interface SectionStarsProps {
  variant: 1 | 2 | 3 | 4 | 5;
}

interface BigStarConfig {
  src: string;
  size: number;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  floatY: number;
  floatDur: number;
  delay: number;
  /** Bounded parallax range in px */
  range: number;
}

const bigStarLayouts: Record<number, BigStarConfig[]> = {
  1: [
    { src: starBig10, size: 220, top: "5%", left: "5%", floatY: -14, floatDur: 3.2, delay: 0.1, range: -600 },
    { src: starBig11, size: 160, bottom: "5%", right: "5%", floatY: 12, floatDur: 3, delay: 0.2, range: 520 },
  ],
  2: [
    { src: starBig11, size: 180, top: "5%", right: "8%", floatY: 12, floatDur: 3, delay: 0.15, range: 560 },
    { src: starBig10, size: 170, bottom: "5%", left: "5%", floatY: -12, floatDur: 3.5, delay: 0.2, range: -520 },
  ],
  3: [
    { src: starBig10, size: 200, bottom: "3%", right: "8%", floatY: -12, floatDur: 3.2, delay: 0.1, range: 600 },
    { src: starBig11, size: 180, top: "3%", left: "5%", floatY: 14, floatDur: 3, delay: 0.15, range: -560 },
  ],
  4: [
    { src: starBig11, size: 190, top: "3%", left: "8%", floatY: 14, floatDur: 3, delay: 0.1, range: -600 },
    { src: starBig10, size: 180, bottom: "3%", right: "5%", floatY: -12, floatDur: 3.5, delay: 0.15, range: 560 },
  ],
  5: [
    { src: starBig10, size: 200, top: "5%", right: "8%", floatY: -12, floatDur: 3.2, delay: 0.1, range: 520 },
    { src: starBig11, size: 170, bottom: "5%", left: "5%", floatY: 14, floatDur: 3, delay: 0.15, range: -600 },
  ],
};

/** Big stars with section-relative bounded parallax */
export function SectionStars({ variant }: SectionStarsProps) {
  const layout = bigStarLayouts[variant] || bigStarLayouts[1];
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Bounded: scrollYProgress [0→0.5→1] maps to [-range, 0, +range]
  const p0 = useTransform(scrollYProgress, [0, 0.5, 1], [-(layout[0]?.range ?? 0), 0, layout[0]?.range ?? 0]);
  const p1 = useTransform(scrollYProgress, [0, 0.5, 1], [-(layout[1]?.range ?? 0), 0, layout[1]?.range ?? 0]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none hidden md:block">
      {layout.map((s, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none z-0"
          style={{
            top: s.top, bottom: s.bottom, left: s.left, right: s.right,
            y: i === 0 ? p0 : p1,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <motion.div
            className="p-8 -m-8"
            style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", willChange: "transform", overflow: "visible" }}
            animate={{
              y: [0, s.floatY, 0],
              rotate: i === 0 ? [0, 8, -5, 0] : [0, -6, 8, 0],
              scale: [1, 1.05, 0.97, 1],
            }}
            transition={{
              y: { duration: s.floatDur, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
              rotate: { duration: s.floatDur * 1.3, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
              scale: { duration: s.floatDur * 1.6, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
            }}
          >
            <motion.img
              src={s.src}
              alt=""
              className="pointer-events-none"
              style={{
                width: s.size, height: "auto",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                willChange: "transform",
              }}
              initial={{ opacity: 0, scale: 0.3 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                opacity: { duration: 0.8, ease: "easeOut", delay: s.delay },
                scale: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: s.delay },
              }}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}


