import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-24 bg-coffee text-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gold">
              Sheekadeena
            </h2>
            <p className="text-lg leading-relaxed text-cream/90 font-light">
              Born from a passion for exceptional coffee and the vibrant energy of Mogadishu, Faaris Café is more than just a coffee shop. It's a space where tradition meets modernity.
            </p>
            <p className="text-lg leading-relaxed text-cream/90 font-light">
              We source the finest beans and blend them with local flavors to create a unique experience. Whether you're here to work, meet friends, or simply enjoy a moment of peace, Faaris is your sanctuary.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-cream/10">
              <div>
                <h4 className="text-3xl font-display font-bold text-gold mb-2">100%</h4>
                <p className="text-sm text-cream/70 uppercase tracking-wider">Premium Beans</p>
              </div>
              <div>
                <h4 className="text-3xl font-display font-bold text-gold mb-2">Local</h4>
                <p className="text-sm text-cream/70 uppercase tracking-wider">Somali Identity</p>
              </div>
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4 relative"
          >
            <div className="space-y-4 mt-12">
              <img
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=500&auto=format&fit=crop"
                alt="Cafe interior"
                className="w-full h-64 object-cover rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=500&auto=format&fit=crop"
                alt="Coffee beans"
                className="w-full h-48 object-cover rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=500&auto=format&fit=crop"
                alt="Barista making coffee"
                className="w-full h-48 object-cover rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500&auto=format&fit=crop"
                alt="Friends at cafe"
                className="w-full h-64 object-cover rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold/5 rounded-full blur-3xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
