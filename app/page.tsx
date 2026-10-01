import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="next-section">
        <div className="next-inner">
          <p className="section-label">02 / CONTINUE</p>
          <h2>Built for a smooth scroll experience.</h2>
          <p>
            The hero uses scroll progress as the animation timeline, with
            transform-based motion and GSAP interpolation for a smooth result.
          </p>
        </div>
      </section>
    </main>
  );
}