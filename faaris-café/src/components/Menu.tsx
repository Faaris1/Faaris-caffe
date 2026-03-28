import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

const menuCategories = [
  {
    name: 'Espresso',
    items: [
      { name: 'Somali Spiced Latte', desc: 'Espresso, steamed milk, cardamom, cinnamon.', price: '$4.50', popular: true, img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&auto=format&fit=crop' },
      { name: 'Classic Macchiato', desc: 'Double espresso marked with foam.', price: '$3.50', popular: false, img: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=500&auto=format&fit=crop' },
      { name: 'Mocha Dark', desc: 'Espresso, premium dark chocolate, milk.', price: '$4.00', popular: false, img: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=500&auto=format&fit=crop' },
    ]
  },
  {
    name: 'Cold Drinks',
    items: [
      { name: 'Iced Caramel Macchiato', desc: 'Vanilla, milk, espresso, caramel drizzle.', price: '$5.00', popular: true, img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&auto=format&fit=crop' },
      { name: 'Cold Brew', desc: 'Slow-steeped for 18 hours. Smooth & bold.', price: '$4.00', popular: false, img: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=500&auto=format&fit=crop' },
    ]
  },
  {
    name: 'Snacks & Desserts',
    items: [
      { name: 'Pistachio Croissant', desc: 'Flaky pastry filled with pistachio cream.', price: '$3.50', popular: true, img: 'https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?w=500&auto=format&fit=crop' },
      { name: 'Date & Walnut Cake', desc: 'Warm, rich, served with caramel sauce.', price: '$4.50', popular: false, img: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=500&auto=format&fit=crop' },
    ]
  }
];

export function Menu() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="menu" className="py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-coffee mb-4">
            Si Gaar Ah Loo Sameeyay
          </h2>
          <p className="text-coffee/70 max-w-2xl mx-auto text-lg">
            From our signature spiced lattes to classic espressos, every cup is brewed to perfection.
          </p>
        </div>

        <div ref={ref} className="space-y-16">
          {menuCategories.map((category, catIdx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.2 }}
            >
              <h3 className="text-2xl font-display font-semibold text-coffee mb-8 border-b border-coffee/10 pb-2 inline-block">
                {category.name}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIdx) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      {item.popular && (
                        <div className="absolute top-4 right-4 bg-gold text-coffee text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                          <Star className="w-3 h-3 fill-coffee" /> Popular
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-semibold text-coffee">{item.name}</h4>
                        <span className="text-gold font-bold">{item.price}</span>
                      </div>
                      <p className="text-coffee/60 text-sm mb-6 line-clamp-2">
                        {item.desc}
                      </p>
                      <button className="w-full py-2.5 rounded-xl border border-coffee/20 text-coffee font-medium hover:bg-coffee hover:text-cream transition-colors">
                        Weydii Baristaha
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
