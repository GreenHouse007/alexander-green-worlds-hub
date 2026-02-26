export default function HeroSection() {
  const handleScrollToWorlds = () => {
    const el = document.querySelector('#worlds');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/generated/hero-banner.dim_1600x800.png')" }}
      />
      {/* Dark overlay — strong center coverage for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/75 to-ink/95" />
      {/* Side vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/40 to-ink/70" />

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Ornamental line */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
          <span className="text-gold/70 text-xs tracking-[0.3em] uppercase font-medium">
            Author · World Builder
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-parchment mb-6 leading-tight tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
          Alexander{' '}
          <span className="text-gold drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]">Green</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-parchment/90 font-serif-body italic mb-4 leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
          "Pull up a chair — I've got worlds to show you."
        </p>

        <p className="text-base sm:text-lg text-parchment/85 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
          Hey, I'm Alexander, and I've spent years building universes I'm genuinely obsessed with.
          From ancient mythic beasts to biohacked superheroes, every world here is a place I'd
          want to live in — and I can't wait to share them with you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleScrollToWorlds}
            className="group px-8 py-4 bg-gold text-ink font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/40 hover:-translate-y-0.5"
          >
            Explore the Worlds
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border border-parchment/30 text-parchment/80 font-medium text-sm tracking-widest uppercase rounded-sm hover:border-gold/60 hover:text-gold transition-all duration-300"
          >
            About Alexander
          </button>
        </div>
      </div>

      {/* Scroll indicator — static, no animation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-parchment/60 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent" />
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  );
}
