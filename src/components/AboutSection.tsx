import { Feather, Globe } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0.22_0.04_60/0.3),transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12 md:mb-16">
          <div className="h-px flex-1 max-w-12 bg-gradient-to-r from-transparent to-gold/50" />
          <span className="text-gold/60 text-xs tracking-[0.3em] uppercase font-medium">
            The Author
          </span>
          <div className="h-px w-12 bg-gold/30" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Portrait */}
          <div className="relative order-2 lg:order-1">
            <div className="relative max-w-sm mx-auto lg:mx-0">
              {/* Decorative frame */}
              <div className="absolute -inset-3 border border-gold/20 rounded-sm" />
              <div className="absolute -inset-6 border border-gold/10 rounded-sm" />

              <div className="relative overflow-hidden rounded-sm aspect-square">
                <img
                  src="/assets/generated/author-portrait.dim_600x600.png"
                  alt="Alexander Green, fantasy author"
                  className="w-full h-full object-cover"
                />
                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-ink border border-gold/30 px-4 py-2 rounded-sm shadow-xl">
                <div className="flex items-center gap-2">
                  <Feather className="w-4 h-4 text-gold" />
                  <span className="text-parchment/80 text-xs font-medium tracking-wide">
                    Adult Fantasy Author
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-parchment mb-6 leading-tight">
              Hey, I'm{' '}
              <span className="text-gold">Alexander</span>
            </h2>

            <div className="space-y-4 text-parchment/75 leading-relaxed text-base md:text-lg">
              <p>
                I'm a world builder first and a writer second — though honestly, the two are
                inseparable for me. I've been crafting these universes for years, and every single
                one of them started with a question I couldn't stop thinking about.
              </p>
              <p>
                What if the myths were real and the creatures were still out there? What would it
                feel like to inherit a world built for giants? What if your RPG races were based on
                insects instead of elves? What if the only way to survive was to hack your own
                biology and build a city above the clouds?
              </p>
              <p>
                Those questions became <strong className="text-parchment font-semibold">Mythica</strong>,{' '}
                <strong className="text-parchment font-semibold">The Scar Queen</strong>,{' '}
                <strong className="text-parchment font-semibold">The Chitin Realms</strong>, and{' '}
                <strong className="text-parchment font-semibold">Skyline</strong>. Each one is a
                fully realized universe — with its own lore, its own stories, and its own dedicated
                site where you can go as deep as you want.
              </p>
              <p>
                This page is the hub. The front door. Come in, look around, and find the world
                that calls to you.
              </p>
            </div>

            {/* World links */}
            <div className="mt-8 pt-8 border-t border-gold/15">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-4 h-4 text-gold/60" />
                <span className="text-parchment/50 text-sm tracking-wide uppercase font-medium">
                  Each world has its own home
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Mythica', 'The Scar Queen', 'The Chitin Realms', 'Skyline'].map((world) => (
                  <a
                    key={world}
                    href="#"
                    className="px-4 py-2 border border-gold/25 text-parchment/70 text-sm rounded-sm hover:border-gold/50 hover:text-gold transition-all duration-200 tracking-wide"
                  >
                    {world}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
