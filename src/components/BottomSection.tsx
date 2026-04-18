import { ArrowRight, Flame } from 'lucide-react';

export default function BottomSection() {
  const styles = [
    { title: 'Empire Waist', icon: '👗', highlighted: false },
    { title: 'Wedding Vibes', icon: '💍', highlighted: true, description: 'Celebrate your special day with our stunning collection.' },
    { title: 'Classic Trumpets', icon: '👠', highlighted: false },
  ];

  return (
    <section className="px-8 pb-12 mt-[-60px] relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="bg-dark-bg text-white rounded-[48px] p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
          {/* Section Header */}
          <div className="space-y-6 max-w-xs shrink-0 text-center md:text-left">
            <h2 className="text-5xl font-serif font-bold flex items-center justify-center md:justify-start gap-4">
              Styles <Flame className="text-orange-500 fill-current w-10 h-10" />
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Shop the latest trendy fashion outfits at Ecstasy.
            </p>
            <div className="flex gap-2 justify-center md:justify-start">
               <span className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center animate-bounce">
                 <div className="w-4 h-4 rounded-full bg-orange-500" />
               </span>
               <span className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center animate-bounce [animation-delay:0.2s]">
                 <div className="w-4 h-4 rounded-full bg-blue-500" />
               </span>
            </div>
          </div>

          {/* Style Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow items-end">
            {styles.map((style, idx) => (
              <div 
                key={idx} 
                className={`group relative p-8 rounded-[40px] transition-all duration-500 ${
                  style.highlighted 
                    ? 'bg-primary h-80 shadow-2xl shadow-primary/40 -translate-y-12' 
                    : 'bg-white/5 border border-white/10 h-64 hover:bg-white/10 hover:-translate-y-2'
                }`}
              >
                <div className="h-full flex flex-col justify-between">
                  <div className={`text-4xl ${style.highlighted ? 'animate-bounce' : 'group-hover:scale-110 transition-transform'}`}>
                    {style.icon}
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className={`text-2xl font-serif font-bold ${style.highlighted ? 'text-white' : 'text-gray-200'}`}>
                      {style.title}
                    </h3>
                    {style.description && (
                      <p className="text-sm text-white/70 leading-relaxed line-clamp-2">
                        {style.description}
                      </p>
                    )}
                    <button className={`flex items-center gap-2 font-bold text-sm uppercase tracking-widest ${
                      style.highlighted ? 'text-white' : 'text-primary'
                    }`}>
                      Shop now <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Decorative circle in highlighted card */}
                {style.highlighted && (
                  <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full -z-10 blur-xl" />
                )}
              </div>
            ))}
          </div>

          {/* Decorative Flower */}
          <div className="absolute top-8 right-8 text-pink-500/30 rotate-12 pointer-events-none hidden lg:block">
            <svg className="w-24 h-24 fill-current" viewBox="0 0 24 24">
              <path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
