import { Search, ShoppingBag } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';

export default function Header() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Dresses', path: '/dresses' },
    { name: 'Accessories', path: '/accessories' },
    { name: 'Shoes', path: '/shoes' },
    { name: 'Solo', path: '/solo' },
  ];

  return (
    <header className="px-8 py-6 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-50">
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <NavLink 
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `font-medium transition-colors ${isActive ? 'text-primary' : 'text-gray-700 hover:text-black'}`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      <Link to="/" className="font-logo text-4xl font-bold tracking-tight">
        Ecstasy<span className="text-accent-orange">.</span>
      </Link>

      <div className="flex items-center gap-4">
        <div className="relative hidden lg:block">
          <input 
            type="text" 
            placeholder="Search" 
            className="pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20 w-48 transition-all"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
        
        <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
          <ShoppingBag className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">1</span>
        </button>
      </div>
    </header>
  );
}
