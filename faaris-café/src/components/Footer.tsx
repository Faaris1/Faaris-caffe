import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-ink text-cream py-16 border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6 group">
              {/* Replace this placeholder with your actual uploaded logo image URL */}
              <img src="https://placehold.co/100x100/4B2E2B/C8A165?text=F" alt="Faaris Logo" className="w-10 h-10 object-contain rounded-full" />
              <span className="font-display text-2xl font-bold tracking-wider text-cream">
                FAARIS
              </span>
            </a>
            <p className="text-cream/70 text-sm leading-relaxed mb-6">
              Your daily coffee ritual starts here. Premium coffee, modern vibes, right in the heart of Mogadishu.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold hover:text-ink transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold hover:text-ink transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold hover:text-ink transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg text-gold mb-6">Xiriirada Degdega ah</h4>
            <ul className="space-y-4 text-sm text-cream/70">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-gold transition-colors">Menu</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-gold transition-colors">Gallery</a></li>
              <li><a href="#visit" className="hover:text-gold transition-colors">Visit Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg text-gold mb-6">Nala Soo Xiriir</h4>
            <ul className="space-y-4 text-sm text-cream/70">
              <li>Maka Al Mukarama Road</li>
              <li>Mogadishu, Somalia</li>
              <li>+252 61 123 4567</li>
              <li>hello@faariscafe.so</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold text-lg text-gold mb-6">La Soco Wararka</h4>
            <p className="text-sm text-cream/70 mb-4">Subscribe to our newsletter for special offers and updates.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-cream/10 border border-cream/20 rounded-lg text-cream placeholder:text-cream/50 focus:outline-none focus:border-gold"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gold text-ink rounded-lg font-medium hover:bg-cream transition-colors"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream/50">
          <p>&copy; {new Date().getFullYear()} Faaris Café. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
