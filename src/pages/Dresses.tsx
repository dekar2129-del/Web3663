import ProductListing from '../components/ProductListing';

export default function Dresses() {
  const products = [
    { title: "Satin Evening Gown", price: "$299", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600", category: "Evening", tag: "Best Seller" },
    { title: "Floral Summer Day", price: "$120", image: "https://images.unsplash.com/photo-1572804013307-a9a111281b68?auto=format&fit=crop&q=80&w=600", category: "Summer" },
    { title: "Velvet Cocktail", price: "$180", image: "https://images.unsplash.com/photo-1549062572-544a64fb0c56?auto=format&fit=crop&q=80&w=600", category: "Cocktail", tag: "New" },
    { title: "Minimalist Linen", price: "$95", image: "https://images.unsplash.com/photo-1539008835279-43469393d99d?auto=format&fit=crop&q=80&w=600", category: "Boho" },
    { title: "Azure Maxi", price: "$150", image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80&w=600", category: "Casual" },
    { title: "Midnight Silk", price: "$210", image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?auto=format&fit=crop&q=80&w=600", category: "Luxury" }
  ];

  return (
    <ProductListing 
      title="Dresses" 
      description="Flowing silhouettes and structured forms. Each piece is designed to capture the essence of modern femininity."
      products={products}
    />
  );
}
