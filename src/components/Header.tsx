import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brown-800 text-white shadow-md py-2' : 'bg-transparent text-brown-900 py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-serif font-bold">
            Crumbly Delights
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#products" className="hover:text-brown-500 transition-colors">Products</a>
          <a href="#about" className="hover:text-brown-500 transition-colors">About Us</a>
          <a href="#testimonials" className="hover:text-brown-500 transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-brown-500 transition-colors">Contact</a>
          <button className="flex items-center space-x-1">
            <ShoppingCart size={20} />
            <span className="ml-1">Cart (0)</span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-brown-800 text-white">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a 
              href="#products" 
              className="py-2 hover:text-cream-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a 
              href="#about" 
              className="py-2 hover:text-cream-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#testimonials" 
              className="py-2 hover:text-cream-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="py-2 hover:text-cream-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <button className="flex items-center py-2">
              <ShoppingCart size={20} />
              <span className="ml-2">Cart (0)</span>
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};