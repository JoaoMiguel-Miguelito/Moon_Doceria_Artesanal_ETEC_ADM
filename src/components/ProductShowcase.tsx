import React from 'react';
import { Products } from './Products';

export const ProductShowcase: React.FC = () => {
  return (
    <section id="products" className="section bg-cream-100">
      <div className="container-custom">
        <h2 className="section-title text-center">Our Cookie Collection</h2>
        <p className="section-subtitle text-center">
          Expertly crafted with premium ingredients, our cookies bring joy in every bite. 
          Discover our signature recipes that have delighted cookie lovers for generations.
        </p>
        <Products />
      </div>
    </section>
  );
};