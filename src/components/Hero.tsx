import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/6210878/pexels-photo-6210878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundPosition: "center 30%"
        }}
      >
        <div className="absolute inset-0 bg-brown-900/40"></div>
      </div>
      
      <div className="container-custom relative z-10 text-white animate-fadeIn" style={{ animationDelay: "0.3s" }}>
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-white">
            Handcrafted Cookies <br/>Made With Love
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-cream-300">
            Delicious, artisanal cookies baked fresh daily using premium ingredients and time-honored recipes.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#products" className="btn btn-primary text-center">
              Explore Our Cookies
            </a>
            <a href="#about" className="btn bg-transparent border-2 border-cream-400 hover:bg-cream-600/20 text-center">
              Our Story
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#products" className="text-white opacity-80 hover:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};