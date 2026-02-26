import { BookOpen, Heart } from 'lucide-react';

const worldLinks = [
  { label: 'Mythica', href: '#mythica' },
  { label: 'The Scar Queen', href: '#scar-queen' },
  { label: 'The Chitin Realms', href: '#chitin-realms' },
  { label: 'Skyline', href: '#skyline' },
];

const pageLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Worlds', href: '#worlds' },
  { label: 'About', href: '#about' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'alexander-green-hub');

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-ink border-t border-gold/20 relative overflow-hidden">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-gold" />
              <span className="font-display text-xl font-bold text-parchment tracking-wide">
                Alexander Green
              </span>
            </div>
            <p className="text-parchment/50 text-sm leading-relaxed italic mb-6">
              "Building worlds one obsession at a time."
            </p>
            <p className="text-parchment/40 text-xs leading-relaxed">
              Adult fantasy author and world builder. Four universes, four obsessions,
              infinite stories.
            </p>
          </div>

          {/* Worlds Column */}
          <div>
            <h4 className="text-gold/70 text-xs font-medium tracking-[0.2em] uppercase mb-5">
              The Worlds
            </h4>
            <ul className="space-y-3">
              {worldLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-parchment/60 hover:text-gold text-sm transition-colors duration-200 tracking-wide"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-gold/70 text-xs font-medium tracking-[0.2em] uppercase mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {pageLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-parchment/60 hover:text-gold text-sm transition-colors duration-200 tracking-wide"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-parchment/35 text-xs">
          <p>© {year} Alexander Green. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with{' '}
            <Heart className="w-3 h-3 text-crimson fill-crimson" />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/50 hover:text-gold transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
