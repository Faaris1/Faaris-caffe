import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Aisha M.",
    role: "Freelancer",
    content: "The best coffee in Mogadishu, hands down. The Somali Spiced Latte is my daily go-to, and the vibe is perfect for working.",
    rating: 5
  },
  {
    name: "Omar K.",
    role: "Local Guide",
    content: "FAARIS has completely changed the coffee scene here. Premium quality, amazing staff, and such a beautiful aesthetic.",
    rating: 5
  },
  {
    name: "Sarah J.",
    role: "Student",
    content: "Love the cold brew! It's my favorite spot to hang out with friends after classes. Highly recommend the pistachio croissant.",
    rating: 5
  }
];

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-coffee mb-4">
            Dadka Deegaanka Ayaa Jecel
          </h2>
          <p className="text-coffee/70 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what our community has to say.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-cream/30 p-8 rounded-3xl border border-coffee/5 hover:border-gold/30 transition-colors"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-coffee/80 text-lg mb-6 italic">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="font-bold text-coffee">{testimonial.name}</h4>
                <p className="text-sm text-coffee/60">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
