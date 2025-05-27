import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brown-900 text-cream-300 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">Crumbly Delights</h3>
            <p className="mb-6 max-w-md">
              Handcrafted cookies made with premium ingredients and baked fresh daily.
              Our mission is to bring joy through delicious treats that remind you of home.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-cream-100 transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-cream-100 transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-cream-100 transition-colors" aria-label="Twitter">
                <Twitter size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#products" className="hover:text-cream-100 transition-colors">Products</a></li>
              <li><a href="#about" className="hover:text-cream-100 transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-cream-100 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-cream-100 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-cream-100 transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-cream-100 transition-colors">Return Policy</a></li>
              <li><a href="#" className="hover:text-cream-100 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-cream-100 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-brown-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Crumbly Delights. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with ❤️ for cookie lovers everywhere</p>
        </div>
      </div>
    </footer>
  );
};