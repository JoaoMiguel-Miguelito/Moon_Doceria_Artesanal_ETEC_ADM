import React, { useState } from 'react';
import { Gift } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // In a real app, you would send this to your server or newsletter service
      setEmail('');
    }
  };

  return (
    <section id="contact" className="section bg-brown-800 text-white">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <Gift size={48} className="mx-auto mb-4 text-cream-400" />
          
          <h2 className="section-title text-white">Join Our Cookie Club</h2>
          <p className="text-cream-300 mb-8">
            Subscribe to our newsletter for exclusive offers, new flavor announcements, and 15% off your first order.
          </p>
          
          {submitted ? (
            <div className="bg-brown-700 p-6 rounded-lg animate-fadeIn">
              <h3 className="text-xl font-bold mb-2">Thank You for Subscribing!</h3>
              <p>Your sweet deals are on the way. Check your inbox soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-grow py-3 px-4 rounded-md text-brown-900 focus:outline-none focus:ring-2 focus:ring-brown-500"
              />
              <button type="submit" className="btn btn-primary whitespace-nowrap">
                Subscribe Now
              </button>
            </form>
          )}
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-2">Visit Our Bakery</h3>
              <p className="text-cream-400">
                123 Cookie Lane<br />
                Sweet City, SC 12345
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
              <p className="text-cream-400">
                Monday - Friday: 7AM - 7PM<br />
                Saturday - Sunday: 8AM - 5PM
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              <p className="text-cream-400">
                info@crumblydelights.com<br />
                (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};