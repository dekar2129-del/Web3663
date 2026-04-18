import { Play, PlayCircle, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative px-8 pt-12 pb-24 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2/3 h-full -z-10 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side: Text Content */}
        <div className="flex-1 space-y-8 z-10 text-center lg:text-left">
          <div className="space-y-4">
            <span className="text-gray-500 font-medium tracking-wide uppercase text-sm">Trendy Collection's</span>
            <h1 className="text-7xl lg:text-9xl font-serif font-bold leading-[0.9] text-gray-900">
              Building <br />
              <span className="flex items-center gap-4 justify-center lg:justify-start">
                a better <motion.div 
                  className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center p-3 shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                >
                  <Heart className="text-white fill-current w-full h-full" />
                </motion.div>
              </span>
              you
            </h1>
          </div>
          
          <p className="text-gray-500 max-w-md mx-auto lg:mx-0 text-lg leading-relaxed">
            Anyone can look good but no one can beat your outfit as long as you wear Ecstasy outfits.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
            <button className="px-8 py-4 bg-primary text-white rounded-full font-bold flex items-center gap-2 shadow-xl shadow-primary/30 hover:-translate-y-1 transition-all group">
              Start shopping
              <div className="bg-white/20 p-1 rounded-full group-hover:translate-x-1 transition-transform">
                <Play className="w-4 h-4 fill-current" />
              </div>
            </button>
            
            <button className="flex items-center gap-3 font-semibold text-gray-700 hover:text-black transition-colors group">
              <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-gray-50 transition-colors">
                <PlayCircle className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
              </div>
              Play video
            </button>
          </div>

          {/* Testimonial Snippet */}
          <motion.div 
            className="hidden lg:flex items-start gap-6 pt-12 relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-3xl rotate-6 overflow-hidden border-2 border-white shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" 
                  alt="Hannah" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-center">
                <h4 className="font-bold text-xs">Hannah</h4>
                <p className="text-[10px] text-gray-400">Fashion Expert</p>
              </div>
            </div>

            <div className="flex-1 space-y-2">
              <div className="text-3xl font-serif text-accent-orange leading-none">"</div>
              <p className="text-sm text-gray-500 italic max-w-xs leading-relaxed">
                I just love Ecstasy! Their products are so much premium to make you feel confident. I can't think of buying from anyone but them.
              </p>
              <div className="flex items-center gap-2 pt-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                <span className="text-accent-orange">4.9 ⭐</span>
                <span className="w-12 h-[1px] bg-gray-200" />
                <span>Overall Rating</span>
              </div>
            </div>

            {/* Scribble decoration */}
            <div className="absolute -top-4 -right-8 opacity-20 transform rotate-12">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 25C15 15 25 35 35 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Visuals */}
        <div className="flex-1 relative">
          {/* Background Decorative Shapes */}
          <div className="absolute inset-0 z-0">
            <motion.div 
              className="absolute top-[20%] left-[10%] w-32 h-32 bg-accent-orange rounded-full opacity-80"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div 
              className="absolute bottom-[20%] right-[10%] w-48 h-48 bg-secondary rounded-full opacity-60"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-blue rounded-full opacity-40 blur-2xl"
            />
          </div>

          <motion.div 
            className="relative z-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800" 
              alt="Fashion Girl" 
              className="w-full h-auto max-w-lg mx-auto relative z-20"
              referrerPolicy="no-referrer"
            />

            {/* Floating Card: Natural Health */}
            <motion.div 
              className="absolute bottom-[15%] -right-12 z-30 glass-card p-4 flex flex-col gap-3 w-56"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300" 
                alt="Natural Health" 
                className="w-full aspect-square object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="space-y-1">
                <h3 className="font-bold text-sm">Natural Health</h3>
                <p className="text-[10px] text-gray-500 font-medium uppercase tracking-tighter flex justify-between">
                  <span>New</span>
                  <span className="text-pink-500 font-bold">Health</span>
                </p>
              </div>
              <div className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-sm">
                <Heart className="w-3 h-3 text-red-500 fill-current" />
              </div>
            </motion.div>

            {/* Floating Card: Ratings/Avatars */}
            <motion.div 
              className="absolute -bottom-6 left-0 z-30 glass-card p-3 flex items-center gap-4 border border-gray-100/50"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
              </div>
            </motion.div>

            {/* Hannah Label */}
            <div className="absolute top-[20%] -left-20 z-0 opacity-20 transform -rotate-12 hidden lg:block">
              <span className="text-8xl font-serif font-black text-gray-200">Ecstasy</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
