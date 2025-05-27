import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  image: string;
  rating: number;
}

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Portland, OR",
      text: "These cookies are absolutely amazing! The Classic Chocolate Chip is perfectly balanced - not too sweet with just the right amount of chocolate. I've ordered them for multiple family gatherings and they're always a hit.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Boston, MA",
      text: "As someone who is very particular about desserts, I can confidently say these are the best cookies I've ever had. The Salted Caramel cookies have the perfect balance of sweet and salty. Will definitely be ordering again!",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Wilson",
      location: "Austin, TX",
      text: "I ordered a variety box for my office and everyone loved them! The cookies arrived fresh and were a big hit. The Walnut & Brown Sugar was unexpected favorite. Great customer service too!",
      image: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="section bg-cream-100">
      <div className="container-custom">
        <h2 className="section-title text-center">What Our Customers Say</h2>
        <p className="section-subtitle text-center">
          Don't just take our word for it - hear from cookie lovers who can't get enough of our delicious treats.
        </p>
        
        <div className="relative max-w-4xl mx-auto mt-16">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="md:w-1/3">
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden border-4 border-cream-300">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      fill={i < testimonials[currentIndex].rating ? "#874A1F" : "none"} 
                      color={i < testimonials[currentIndex].rating ? "#874A1F" : "#D0B8A0"} 
                    />
                  ))}
                </div>
                
                <blockquote className="text-lg italic mb-4">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                
                <div>
                  <p className="font-serif font-bold text-brown-800">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-brown-600">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Pagination dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full ${
                    i === currentIndex ? 'bg-brown-600' : 'bg-cream-400'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 bg-brown-600 text-white p-2 rounded-full shadow-md hover:bg-brown-700 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 bg-brown-600 text-white p-2 rounded-full shadow-md hover:bg-brown-700 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};