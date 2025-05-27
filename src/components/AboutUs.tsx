import React from 'react';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="section bg-cream-300">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Our Sweet Journey</h2>
            <p className="mb-6 text-lg">
              Founded in 2010, Crumbly Delights began as a small family bakery with a passion for perfecting the art of cookie making. What started as weekend farmer's market sales quickly grew into a beloved local institution.
            </p>
            <p className="mb-6 text-lg">
              Our commitment to quality has never wavered. We use only the finest ingredients - European butter, organic eggs, premium chocolate, and locally sourced nuts - to create cookies that bring joy with every bite.
            </p>
            <p className="mb-6 text-lg">
              Today, we're proud to share our cookies nationwide while maintaining the same attention to detail and love that went into our very first batch.
            </p>
            <div className="mt-8">
              <a href="#contact" className="btn btn-primary">Contact Us</a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/6953775/pexels-photo-6953775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Baker making cookies" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-brown-600 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-1/3 h-1/3 bg-cream-600 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};