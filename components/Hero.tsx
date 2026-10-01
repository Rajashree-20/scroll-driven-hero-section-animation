"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  ["58%", "Increase in pick up point use"],
  ["23%", "Decrease in customer phone calls"],
  ["27%", "Increase in customer engagement"],
  ["40%", "Decrease in waiting time"]
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const visual = visualRef.current;
    const car = carRef.current;
    const ring = ringRef.current;
    const stats = statsRef.current;
    const progress = progressRef.current;

    if (!section || !headline || !visual || !car || !ring || !stats || !progress) {
      return;
    }

    const ctx = gsap.context(() => {
      const letters = headline.querySelectorAll(".hero-letter");
      const cards = stats.querySelectorAll(".metric-card");

      gsap.set(letters, { y: 30, opacity: 0 });
      gsap.set(cards, { y: 20, opacity: 0 });

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

      intro
        .to(letters, {
          y: 0,
          opacity: 1,
          duration: 0.62,
          stagger: 0.032
        })
        .to(
          cards,
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            stagger: 0.1
          },
          "-=0.18"
        );

      const motion = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.35,
          onUpdate: (self) => {
            gsap.set(progress, { scaleY: self.progress });
          }
        }
      });

      // The hero uses a sticky viewport, so the visual stays present
      // throughout the scroll instead of disappearing too early.
      motion
        .to(
          visual,
          {
            xPercent: -9,
            yPercent: 7,
            scale: 0.88,
            ease: "none",
            duration: 1
          },
          0
        )
        .to(
          car,
          {
            rotateZ: 5,
            rotateY: -10,
            xPercent: -5,
            ease: "none",
            duration: 1
          },
          0
        )
        .to(
          ring,
          {
            rotate: 115,
            scale: 1.12,
            xPercent: 8,
            ease: "none",
            duration: 1
          },
          0
        )
        .to(
          headline,
          {
            yPercent: -24,
            scale: 0.92,
            opacity: 0.5,
            ease: "none",
            duration: 0.7
          },
          0.15
        )
        .to(
          stats,
          {
            yPercent: -8,
            opacity: 0.88,
            ease: "none",
            duration: 0.8
          },
          0.15
        )
        .to(
          visual,
          {
            xPercent: -17,
            yPercent: 13,
            scale: 0.79,
            ease: "none",
            duration: 1
          },
          1
        )
        .to(
          headline,
          {
            yPercent: -45,
            scale: 0.82,
            opacity: 0.12,
            ease: "none",
            duration: 0.75
          },
          1
        )
        .to(
          stats,
          {
            yPercent: -16,
            opacity: 0.35,
            ease: "none",
            duration: 0.75
          },
          1
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="hero-section">
      <div className="hero-sticky">
        <div className="hero-noise" />
        <div className="hero-grid" />

        <header className="top-nav">
          <div className="brand">FIZZ<span>®</span></div>

          <div className="nav-status">
            <span>SCROLL TO EXPLORE</span>
            <i />
          </div>
        </header>

        <div className="hero-content">
          <div className="copy">
            <p className="eyebrow">01 / DIGITAL EXPERIENCE</p>

            <h1 ref={headlineRef}>
              {"WELCOME ITZ FIZZ".split("").map((char, index) => (
                <span className="hero-letter" key={`${char}-${index}`}>
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>

            <p className="subcopy">
              Scroll to explore a visual experience where motion follows your
              interaction.
            </p>
          </div>

          <div ref={visualRef} className="visual-area">
            <div className="ambient-glow" />

            <div ref={ringRef} className="orbit-ring">
              <span />
            </div>

            <div className="orbit-small" />

            <div ref={carRef} className="car">
              <svg viewBox="0 0 760 380" role="img" aria-label="Abstract car illustration">
                <defs>
                  <linearGradient id="carBody" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#f7f7f1" />
                    <stop offset=".34" stopColor="#a7aaa5" />
                    <stop offset=".72" stopColor="#343634" />
                    <stop offset="1" stopColor="#111211" />
                  </linearGradient>
                  <linearGradient id="carGlass" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#111414" />
                    <stop offset=".48" stopColor="#626966" />
                    <stop offset="1" stopColor="#151817" />
                  </linearGradient>
                  <linearGradient id="road" x1="0" x2="1">
                    <stop offset="0" stopColor="#d9ff4f" stopOpacity="0" />
                    <stop offset=".5" stopColor="#d9ff4f" stopOpacity=".7" />
                    <stop offset="1" stopColor="#d9ff4f" stopOpacity="0" />
                  </linearGradient>
                  <filter id="carShadow">
                    <feDropShadow dx="0" dy="28" stdDeviation="22" floodOpacity=".65" />
                  </filter>
                </defs>

                <ellipse cx="390" cy="315" rx="285" ry="18" fill="url(#road)" opacity=".35" />

                <g filter="url(#carShadow)">
                  <path
                    d="M88 244 C108 180 166 126 256 105 C332 87 431 82 501 99 C568 115 624 151 671 207 L690 231 C705 251 693 274 663 280 L122 287 C90 287 78 270 88 244Z"
                    fill="url(#carBody)"
                    stroke="#f3f3ed"
                    strokeOpacity=".32"
                    strokeWidth="3"
                  />

                  <path
                    d="M218 124 C278 99 387 94 460 108 C515 119 558 143 594 182 L607 198 L183 198 C190 171 200 143 218 124Z"
                    fill="url(#carGlass)"
                    stroke="#e8ebe4"
                    strokeOpacity=".2"
                    strokeWidth="3"
                  />

                  <path d="M369 101 L369 198" stroke="#e8ebe4" strokeOpacity=".2" strokeWidth="3" />
                  <path d="M183 198 L607 198" stroke="#080909" strokeWidth="7" />
                  <path d="M113 236 C230 214 485 210 663 241" fill="none" stroke="#fff" strokeOpacity=".22" strokeWidth="4" />

                  <path d="M109 250 L188 250" stroke="#dff9ff" strokeWidth="11" strokeLinecap="round" />
                  <path d="M604 250 L675 247" stroke="#ff5353" strokeWidth="11" strokeLinecap="round" />

                  <ellipse cx="190" cy="281" rx="60" ry="60" fill="#070808" stroke="#303230" strokeWidth="9" />
                  <ellipse cx="190" cy="281" rx="24" ry="24" fill="#969992" />
                  <circle cx="190" cy="281" r="8" fill="#303230" />

                  <ellipse cx="570" cy="281" rx="60" ry="60" fill="#070808" stroke="#303230" strokeWidth="9" />
                  <ellipse cx="570" cy="281" rx="24" ry="24" fill="#969992" />
                  <circle cx="570" cy="281" r="8" fill="#303230" />

                  <path d="M141 232 C163 204 187 196 220 195" fill="none" stroke="#fff" strokeOpacity=".22" strokeWidth="3" />
                  <path d="M525 202 C568 210 603 225 631 242" fill="none" stroke="#fff" strokeOpacity=".17" strokeWidth="3" />
                </g>
              </svg>
            </div>

            <div className="visual-tag">
              <span>01</span>
              <span>SCROLL / MOTION</span>
            </div>
          </div>
        </div>

        <div ref={statsRef} className="metrics">
          {metrics.map(([number, label], index) => (
            <article className="metric-card" key={number}>
              <p>0{index + 1}</p>
              <strong>{number}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>

        <div className="scroll-cue">
          <span>SCROLL</span>
          <b />
        </div>

        <div className="progress-line">
          <div ref={progressRef} />
        </div>
      </div>
    </section>
  );
}