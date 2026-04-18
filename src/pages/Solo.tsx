import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Solo() {
  return (
    <div className="space-y-24 pb-24">
      {/* Featured Story */}
      <section className="px-8 pt-16 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <span className="text-secondary font-bold uppercase tracking-[0.2em] text-sm">Fall Winter 2026</span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold leading-none">The Solo <br /> Journey</h1>
          </div>
          <p className="text-gray-500 text-lg leading-relaxed max-w-md">
            Ecstasy Solo is our most personal collection yet. Inspired by the independence of the modern creator, these pieces are designed for those who define their own path.
          </p>
          <button className="btn-primary">
            Explore Collection <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 relative">
          <div className="aspect-[4/5] rounded-[64px] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800" 
              alt="Solo Model" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Accent Blobs */}
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-secondary/30 rounded-full blur-2xl" />
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/20 rounded-full blur-2xl" />
        </div>
      </section>

      {/* Grid Layout of Featured Pieces */}
      <section className="px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { title: "Indiscreet Silk", desc: "For the moments that matter.", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=600" },
          { title: "Vagabond Leather", desc: "Rugged elegance for the streets.", img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=600" }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            className="group relative h-[500px] rounded-[48px] overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img 
              src={item.img} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-12">
              <div className="space-y-2">
                <h3 className="text-3xl font-serif font-bold text-white">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
                <button className="text-white font-bold flex items-center gap-2 pt-4">
                  View Detail <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
