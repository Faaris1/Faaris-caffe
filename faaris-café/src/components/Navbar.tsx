import { useState, useEffect } from 'react';
import { Menu, X, Coffee, MapPin, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Visit Us', href: '#visit' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-cream/90 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            {/* Replace this placeholder with your actual uploaded logo image URL */}
            <img src="https://placehold.co/100x100/4B2E2B/C8A165?text=F" alt="Faaris Logo" className="w-10 h-10 object-contain rounded-full" />
            <span className={cn("font-display text-2xl font-bold tracking-wider transition-colors duration-300", isScrolled ? "text-coffee" : "text-cream")}>
              FAARIS
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide hover:text-gold transition-colors",
                  isScrolled ? "text-coffee/80" : "text-cream/90"
                )}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#visit"
              className={cn(
                "px-6 py-2 rounded-full font-medium transition-all hover:scale-105 active:scale-95",
                isScrolled
                  ? "bg-coffee text-cream hover:bg-coffee/90"
                  : "bg-gold text-coffee hover:bg-gold/90"
              )}
            >
              Dalbo Hada
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={cn("w-6 h-6", isScrolled ? "text-coffee" : "text-cream")} />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-coffee" : "text-cream")} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-cream shadow-lg border-t border-coffee/10 md:hidden"
          >
            <div className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-coffee font-medium text-lg py-2 border-b border-coffee/5"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#visit"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-6 py-3 bg-coffee text-cream text-center rounded-full font-medium"
              >
                Dalbo Hada
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
