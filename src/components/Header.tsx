import { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

const navLinks = [
  { label: 'Mythica', href: '#mythica' },
  { label: 'The Scar Queen', href: '#scar-queen' },
  { label: 'The Chitin Realms', href: '#chitin-realms' },
  { label: 'Skyline', href: '#skyline' },
  { label: 'About', href: '#about' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-gold/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Author Name */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
          >
            <BookOpen className="w-5 h-5 text-gold group-hover:text-gold-light transition-colors" />
            <span className="font-display text-lg md:text-xl font-bold text-parchment group-hover:text-gold transition-colors tracking-wide">
              Alexander Green
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 text-sm font-medium text-parchment/80 hover:text-gold transition-colors duration-200 tracking-wide relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-3 right-3 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </button>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-parchment hover:text-gold transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-surface/98 backdrop-blur-md border-t border-gold/20 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left px-4 py-3 text-parchment/90 hover:text-gold hover:bg-gold/5 rounded-md transition-colors font-medium tracking-wide"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
