import { motion } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Hero() {
  const [timeOfDay, setTimeOfDay] = useState<'morning' | 'afternoon' | 'evening'>('morning');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setTimeOfDay('morning');
    else if (hour < 17) setTimeOfDay('afternoon');
    else setTimeOfDay('evening');
  }, []);

  const ctaText = {
    morning: 'Subax Wanaagsan ☕',
    afternoon: 'Galab Wanaagsan ☀️',
    evening: 'Habeen Wanaagsan 🌙',
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
          alt="Coffee pouring"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-ink/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-cream" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-gold/20 text-gold border border-gold/30 text-sm font-medium tracking-wider mb-6 backdrop-blur-sm">
            QAXWAHA UGU FIICAN MUQDISHO
          </span>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-cream leading-tight mb-6">
            Your Daily Coffee <br/>
            <span className="text-gold italic">Ritual Starts Here</span>
          </h1>
          
          <p className="text-lg md:text-xl text-cream/90 mb-10 max-w-2xl mx-auto font-light">
            Experience premium coffee in the heart of Mogadishu. 
            More than coffee — it's a vibe. Soo Dhawow (Welcome).
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#menu"
              className="w-full sm:w-auto px-8 py-4 bg-gold text-coffee rounded-full font-semibold text-lg transition-all hover:bg-cream hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              {ctaText[timeOfDay]}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#visit"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-cream text-cream rounded-full font-semibold text-lg transition-all hover:bg-cream/10 hover:border-gold hover:text-gold flex items-center justify-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Nagu Soo Booqo
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Steam Elements */}
      <div className="absolute bottom-20 left-1/4 w-8 h-8 rounded-full bg-cream/10 blur-xl animate-steam" />
      <div className="absolute bottom-20 left-1/4 ml-4 w-6 h-6 rounded-full bg-cream/10 blur-xl animate-steam-delay-1" />
      <div className="absolute bottom-20 left-1/4 ml-8 w-10 h-10 rounded-full bg-cream/10 blur-xl animate-steam-delay-2" />
    </section>
  );
}
