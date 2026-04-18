import { Heart, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  category: string;
  tag?: string;
  key?: string | number;
}

export default function ProductCard({ title, price, image, category, tag }: ProductCardProps) {
  return (
    <motion.div 
      className="group relative flex flex-col gap-4"
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-[32px] bg-gray-100">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        {tag && (
          <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            {tag}
          </div>
        )}

        <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-sm hover:bg-white transition-colors">
          <Heart className="w-4 h-4 text-gray-400 group-hover:text-red-500 transition-colors" />
        </button>

        <div className="absolute bottom-4 right-4 translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
          <button className="bg-primary text-white p-3 rounded-full shadow-xl shadow-primary/30">
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="px-2 space-y-1">
        <div className="flex justify-between items-start">
          <h3 className="font-serif font-bold text-lg text-gray-900">{title}</h3>
          <span className="font-bold text-primary">{price}</span>
        </div>
        <p className="text-sm text-gray-400 font-medium uppercase tracking-tight">{category}</p>
      </div>
    </motion.div>
  );
}
