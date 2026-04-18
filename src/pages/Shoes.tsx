import ProductListing from '../components/ProductListing';

export default function Shoes() {
  const products = [
    { title: "Strappy Stiletto", price: "$220", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=600", category: "Heels", tag: "Signature" },
    { title: "Velvet Loafers", price: "$145", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=600", category: "Flats" },
    { title: "Modernist Boots", price: "$275", image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=600", category: "Boots", tag: "Trending" },
    { title: "Cloud Sandals", price: "$85", image: "https://images.unsplash.com/photo-1562273103-91207b930c41?auto=format&fit=crop&q=80&w=600", category: "Summer" }
  ];

  return (
    <ProductListing 
      title="Shoes" 
      description="Step into confidence. From everyday comfort to show-stopping statement pieces."
      products={products}
    />
  );
}
