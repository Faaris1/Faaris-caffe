import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export function VisitUs() {
  return (
    <section id="visit" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-coffee mb-6">
                Nagu Soo Booqo
              </h2>
              <p className="text-lg text-coffee/70">
                Located in the heart of Mogadishu, FAARIS is your daily escape. Drop by for a coffee, stay for the vibe.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-coffee mb-2">Location</h4>
                  <p className="text-coffee/70">Maka Al Mukarama Road<br/>Mogadishu, Somalia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-coffee mb-2">Hours</h4>
                  <p className="text-coffee/70">
                    Saturday - Thursday: 7:00 AM - 11:00 PM<br/>
                    Friday: 4:00 PM - 11:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-coffee mb-2">Contact</h4>
                  <p className="text-coffee/70">+252 61 123 4567<br/>hello@faariscafe.so</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#"
                className="px-8 py-4 bg-coffee text-cream rounded-full font-semibold text-center hover:bg-gold hover:text-coffee transition-colors"
              >
                Hel Tilmaamaha
              </a>
              <a
                href="https://wa.me/252611234567"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-coffee text-coffee rounded-full font-semibold text-center hover:bg-coffee/5 transition-colors"
              >
                Nagala Soo Xiriir WhatsApp
              </a>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="h-[500px] bg-cream rounded-3xl overflow-hidden relative shadow-lg border border-coffee/10">
            {/* In a real app, embed Google Maps iframe here */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-coffee/50 p-8 text-center">
              <MapPin className="w-16 h-16 mb-4 text-gold" />
              <p className="font-medium text-lg">Interactive Map Integration</p>
              <p className="text-sm mt-2">Maka Al Mukarama Road, Mogadishu</p>
            </div>
            {/* Decorative overlay to make it look like a map placeholder */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-coffee) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          </div>

        </div>
      </div>
    </section>
  );
}
