import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  bestseller?: boolean;
  new?: boolean;
}

export const Products: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Classic Chocolate Chip",
      description: "Our signature cookie with premium chocolate chunks and a soft, chewy center.",
      price: 2.50,
      image: "https://images.pexels.com/photos/5765/flour-powder-wheat-food.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bestseller: true,
    },
    {
      id: 2,
      name: "Double Chocolate",
      description: "Rich chocolate cookie loaded with chocolate chips for the ultimate chocolate experience.",
      price: 2.75,
      image: "https://images.pexels.com/photos/7525180/pexels-photo-7525180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      name: "Walnut & Brown Sugar",
      description: "Buttery brown sugar cookie with crunchy walnuts and a hint of cinnamon.",
      price: 2.95,
      image: "https://images.pexels.com/photos/3776947/pexels-photo-3776947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      name: "Oatmeal Raisin",
      description: "Hearty oatmeal cookie with plump raisins and a perfect blend of spices.",
      price: 2.65,
      image: "https://images.pexels.com/photos/8869181/pexels-photo-8869181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 5,
      name: "Salted Caramel",
      description: "Chewy cookie with caramel pieces and a sprinkle of sea salt for the perfect sweet-salty balance.",
      price: 3.25,
      image: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      new: true,
    },
    {
      id: 6,
      name: "Lemon White Chocolate",
      description: "Zesty lemon cookie with creamy white chocolate chips for a refreshing treat.",
      price: 2.95,
      image: "https://images.pexels.com/photos/372851/pexels-photo-372851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {products.map((product) => (
        <div 
          key={product.id} 
          className="product-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl"
        >
          <div className="relative h-64 overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            {product.bestseller && (
              <div className="absolute top-4 left-4 bg-brown-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                Bestseller
              </div>
            )}
            {product.new && (
              <div className="absolute top-4 left-4 bg-brown-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                New
              </div>
            )}
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-serif font-bold mb-2">{product.name}</h3>
            <p className="text-brown-700 mb-4">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-brown-900 font-semibold">${product.price.toFixed(2)}</span>
              <button className="btn btn-secondary py-2 px-4 flex items-center">
                <ShoppingBag size={18} className="mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};