import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Dresses from './pages/Dresses';
import Accessories from './pages/Accessories';
import Shoes from './pages/Shoes';
import Solo from './pages/Solo';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white selection:bg-primary selection:text-white overflow-x-hidden relative flex flex-col">
        {/* Global Background Decorations */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-accent-orange/5 rounded-full blur-[100px]" />
        </div>

        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dresses" element={<Dresses />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/solo" element={<Solo />} />
          </Routes>
        </main>

        <footer className="py-24 text-center border-t border-gray-50 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-8 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
              <div className="space-y-6 md:col-span-1">
                <div className="font-logo text-3xl font-bold text-gray-900">
                  Ecstasy<span className="text-accent-orange">.</span>
                </div>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Elevating your everyday wardrobe with premium sustainable pieces designed for the modern individual.
                </p>
              </div>
              
              <div className="space-y-6">
                <h4 className="font-bold uppercase tracking-widest text-xs text-gray-400">Shop</h4>
                <ul className="space-y-4 text-sm font-medium text-gray-700">
                  <li><a href="/dresses" className="hover:text-primary transition-colors">Dresses</a></li>
                  <li><a href="/shoes" className="hover:text-primary transition-colors">Shoes</a></li>
                  <li><a href="/accessories" className="hover:text-primary transition-colors">Accessories</a></li>
                  <li><a href="/solo" className="hover:text-primary transition-colors">Solo Collection</a></li>
                </ul>
              </div>

              <div className="space-y-6">
                <h4 className="font-bold uppercase tracking-widest text-xs text-gray-400">Company</h4>
                <ul className="space-y-4 text-sm font-medium text-gray-700">
                  <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Sustainability</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                </ul>
              </div>

              <div className="space-y-6">
                <h4 className="font-bold uppercase tracking-widest text-xs text-gray-400">Support</h4>
                <ul className="space-y-4 text-sm font-medium text-gray-700">
                  <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Shipping</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Returns</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Gift Cards</a></li>
                </ul>
              </div>
            </div>

            <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-400 text-xs">
              <p>© 2026 Ecstasy Fashion. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Cookie Settings</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
