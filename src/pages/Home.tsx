import Hero from '../components/Hero';
import BottomSection from '../components/BottomSection';
import { motion } from 'motion/react';
import { CheckCircle2, Mail, Send } from 'lucide-react';

export default function Home() {
  const faqs = [
    { q: "How long does shipping take?", a: "Standard shipping takes 3-5 business days. Express options are available at checkout." },
    { q: "What is your return policy?", a: "We offer a 30-day no-questions-asked return policy for all unworn items." },
    { q: "Are the materials sustainable?", a: "Yes, 80% of our collection uses recycled or organic fabrics." }
  ];

  return (
    <div className="space-y-24 pb-24">
      <Hero />
      <BottomSection />

      {/* Why Choose Us Section */}
      <section className="px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: "Premium Quality", desc: "Handpicked fabrics from the finest sustainable sources.", icon: <CheckCircle2 className="text-primary w-8 h-8" /> },
            { title: "Fast Delivery", desc: "Global shipping with real-time tracking for every order.", icon: <Send className="text-secondary w-8 h-8" /> },
            { title: "Eco Friendly", desc: "We prioritize the planet with zero-plastic packaging.", icon: <CheckCircle2 className="text-accent-orange w-8 h-8" /> }
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-8 max-w-7xl mx-auto bg-gray-50 rounded-[48px] py-16 md:py-24">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Frequently Asked</h2>
            <p className="text-gray-500">Everything you need to know about your Ecstasy experience.</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-3xl p-6 border border-gray-100 cursor-pointer transition-all hover:shadow-md">
                <summary className="font-bold text-lg flex justify-between items-center list-none">
                  {faq.q}
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-500 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-8 max-w-7xl mx-auto">
        <div className="bg-primary rounded-[48px] p-8 md:p-16 text-white relative overflow-hidden flex flex-col items-center text-center gap-8">
          <div className="space-y-4 z-10 max-w-xl">
            <h2 className="text-4xl md:text-6xl font-serif font-bold">Join the Pulse</h2>
            <p className="text-white/80 text-lg">Get early access to drops, exclusive discounts, and fashion styling tips.</p>
          </div>
          <form className="w-full max-w-md relative z-10 flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-8 py-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="px-8 py-4 bg-white text-primary rounded-full font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
              Subscribe <Mail className="w-5 h-5" />
            </button>
          </form>
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />
        </div>
      </section>
    </div>
  );
}
