import { ExternalLink } from 'lucide-react';

interface World {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  accentColor: string;
  badgeText: string;
  href: string;
}

const worlds: World[] = [
  {
    id: 'mythica',
    name: 'Mythica',
    tagline: 'Where Legends Breathe',
    description:
      "Okay, this one is close to my heart. Mythica is a world absolutely teeming with the creatures you've only ever read about in old myths — dragons that remember the first sunrise, sea serpents older than the ocean floor, and griffins that guard secrets no human was meant to know. It's raw, it's wild, and it's magnificent.",
    image: '/assets/generated/world-mythica.dim_800x500.png',
    accentColor: 'from-emerald-900/80',
    badgeText: 'Mythic Fantasy',
    href: '#',
  },
  {
    id: 'scar-queen',
    name: 'The Scar Queen',
    tagline: 'The Giants Left. We Inherited Their Scars.',
    description:
      "Imagine a world so vast it was once ruled by giants — beings so enormous their footsteps carved the valleys we now call home. The gods gave this world to mankind, but they didn't clean it up first. The ruins are everywhere, the old power still hums in the stones, and humanity is just now figuring out what it means to be the inheritors of something so much bigger than themselves.",
    image: '/assets/generated/world-scar-queen.dim_800x500.png',
    accentColor: 'from-crimson/80',
    badgeText: 'Epic Fantasy',
    href: '#',
  },
  {
    id: 'chitin-realms',
    name: 'The Chitin Realms',
    tagline: 'Roll for Carapace',
    description:
      "I built this one because I wanted an RPG world that felt genuinely alien but still deeply playable. Every race in The Chitin Realms is based on insects — and I mean really leaned into it. Mantis warriors with bladed forearms, beetle-folk engineers who build cities inside hollowed-out trees, moth shamans who read the future in wing-dust. It's weird, it's crunchy, and it's an absolute blast.",
    image: '/assets/generated/world-chitin-realms.dim_800x500.png',
    accentColor: 'from-amber-900/80',
    badgeText: 'RPG World',
    href: '#',
  },
  {
    id: 'skyline',
    name: 'Skyline',
    tagline: 'Rise Above the Poison',
    description:
      "The surface is dead. Toxic, corroded, uninhabitable — but up above the smog, in towers that pierce the clouds, humanity didn't just survive, it evolved. Biohacking tech turned the desperate into the extraordinary. Skyline is my love letter to superhero fiction with a gritty, cyberpunk edge — where your powers come from a syringe and a dream, and the city above the clouds is both paradise and prison.",
    image: '/assets/generated/world-skyline.dim_800x500.png',
    accentColor: 'from-slate-900/80',
    badgeText: 'Sci-Fi Fantasy',
    href: '#',
  },
];

function WorldCard({ world }: { world: World }) {
  return (
    <article
      id={world.id}
      className="group relative bg-surface rounded-sm overflow-hidden border border-gold/15 hover:border-gold/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60 flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          src={world.image}
          alt={`${world.name} world illustration`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Image overlay gradient */}
        <div className={`absolute inset-0 bg-gradient-to-t ${world.accentColor} via-transparent to-transparent opacity-60`} />
        {/* Badge */}
        <span className="absolute top-4 left-4 px-3 py-1 bg-ink/80 backdrop-blur-sm border border-gold/30 text-gold text-xs font-medium tracking-widest uppercase rounded-sm">
          {world.badgeText}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 md:p-8">
        <div className="mb-4">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-parchment mb-1 group-hover:text-gold transition-colors duration-300">
            {world.name}
          </h3>
          <p className="text-gold/70 text-sm font-medium italic tracking-wide">{world.tagline}</p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-gold/30 via-gold/10 to-transparent mb-4" />

        <p className="text-parchment/70 leading-relaxed text-sm md:text-base flex-1 mb-6">
          {world.description}
        </p>

        <a
          href={world.href}
          className="inline-flex items-center gap-2 self-start px-6 py-3 bg-transparent border border-gold/40 text-gold text-sm font-bold tracking-widest uppercase rounded-sm hover:bg-gold hover:text-ink transition-all duration-300 group/btn"
        >
          Explore World
          <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </article>
  );
}

export default function WorldsSection() {
  return (
    <section id="worlds" className="py-24 md:py-32 bg-ink relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.18_0.02_60/0.4),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/50" />
            <span className="text-gold/60 text-xs tracking-[0.3em] uppercase font-medium">
              The Multiverse
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/50" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-parchment mb-4">
            The Worlds I've Built
          </h2>
          <p className="text-parchment/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Four universes. Four obsessions. Each one a fully realized place with its own rules,
            its own history, and its own stories waiting to be told.
          </p>
        </div>

        {/* World Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {worlds.map((world) => (
            <WorldCard key={world.id} world={world} />
          ))}
        </div>
      </div>
    </section>
  );
}
