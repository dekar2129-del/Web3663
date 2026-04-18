import ProductCard from '../components/ProductCard';
import { motion } from 'motion/react';

interface ProductListingProps {
  title: string;
  description: string;
  products: Array<{
    title: string;
    price: string;
    image: string;
    category: string;
    tag?: string;
  }>;
}

export default function ProductListing({ title, description, products }: ProductListingProps) {
  return (
    <div className="px-8 py-16 max-w-7xl mx-auto space-y-16">
      <div className="space-y-4 text-center">
        <motion.h1 
          className="text-6xl md:text-8xl font-serif font-bold text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {title}
        </motion.h1>
        <motion.p 
          className="text-gray-500 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {description}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {products.map((product, idx) => (
          <ProductCard 
            key={idx} 
            title={product.title}
            price={product.price}
            image={product.image}
            category={product.category}
            tag={product.tag}
          />
        ))}
      </div>
    </div>
  );
}
