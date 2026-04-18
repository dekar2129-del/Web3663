import ProductListing from '../components/ProductListing';

export default function Accessories() {
  const products = [
    { title: "Gold Hoop Collection", price: "$45", image: "https://images.unsplash.com/photo-1535633302703-9420414421b1?auto=format&fit=crop&q=80&w=600", category: "Jewelry", tag: "Editor's Pick" },
    { title: "Leather Crossbody", price: "$180", image: "https://images.unsplash.com/photo-1584917469275-376974ad0842?auto=format&fit=crop&q=80&w=600", category: "Bags" },
    { title: "Silk Headscarf", price: "$35", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600", category: "Accessories", tag: "Sale" },
    { title: "Cat-Eye Frames", price: "$110", image: "https://images.unsplash.com/photo-1511499767350-a15943ee8b61?auto=format&fit=crop&q=80&w=600", category: "Eyewear" }
  ];

  return (
    <ProductListing 
      title="Accessories" 
      description="The final touch that defines the look. Elevate your outfit with our curated collection of accents."
      products={products}
    />
  );
}
