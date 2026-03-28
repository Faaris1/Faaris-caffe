/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { VisitUs } from './components/VisitUs';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';

export default function App() {
  return (
    <div className="min-h-screen bg-cream selection:bg-gold selection:text-coffee">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <About />
        <Testimonials />
        <Gallery />
        <VisitUs />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
