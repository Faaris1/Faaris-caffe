import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Instagram } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1495474472207-464a8d9cb1c8?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&auto=format&fit=crop',
];

export function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="gallery" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-coffee mb-4">
              #FaarisMoments
            </h2>
            <p className="text-coffee/70 text-lg max-w-xl">
              Share your favorite moments with us. Tag us on Instagram to be featured.
            </p>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-coffee text-cream rounded-full font-medium hover:bg-gold hover:text-coffee transition-colors"
          >
            <Instagram className="w-5 h-5" />
            Follow @FaarisCafe
          </a>
        </div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group aspect-square overflow-hidden rounded-2xl"
            >
              <img
                src={src}
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-coffee/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-cream" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
