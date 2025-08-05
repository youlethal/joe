import React from 'react';
import { defaultConfig } from './config';

interface TemplateLayoutProps {
  branding?: any;
  modules?: string[];
  darkMode?: boolean;
}

export default function TemplateLayout({ 
  branding = defaultConfig, 
  modules = defaultConfig.modules,
  darkMode = false 
}: TemplateLayoutProps) {
  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      {/* Hero Section - Always included */}
      <section className="pt-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Transform Your
                <span className="text-pink-500"> Style</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience the art of hair styling with our expert team. From classic cuts to modern trends, 
                we create looks that make you feel confident and beautiful.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600 transition-colors flex items-center justify-center">
                  Book Appointment
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-400 to-purple-500 rounded-3xl p-8 text-white">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Special Offer</h3>
                  <p className="text-lg mb-4">20% off your first visit</p>
                  <button className="bg-white text-pink-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {modules.includes('services') && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From cuts and colors to styling and treatments, we offer a full range of hair services 
                to keep you looking your best.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-pink-500 text-white px-8 py-6">
                  <h3 className="text-2xl font-bold">Service Menu</h3>
                  <p className="text-pink-100">Professional hair services and treatments</p>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-xl font-semibold text-gray-900">Haircut & Style</h4>
                          <span className="text-2xl font-bold text-pink-500">$45</span>
                        </div>
                        <p className="text-gray-600 mb-3">Professional haircut with styling</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>60 min</span>
                        </div>
                      </div>
                      <button className="ml-6 bg-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-pink-600 transition-colors">
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Staff Section */}
      {modules.includes('staff') && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our talented stylists are passionate about creating beautiful looks and providing 
                exceptional service to every client.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-4xl">👩‍🦰</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Johnson</h3>
                <p className="text-pink-500 font-medium mb-3">Senior Stylist</p>
                <p className="text-gray-600 text-sm mb-4">10+ years of experience in cutting-edge hair styling</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {modules.includes('gallery') && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Browse through our portfolio of stunning hairstyles and transformations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
                <div className="aspect-square bg-gray-200">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-6xl">💇‍♀️</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Section */}
      {modules.includes('blog') && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News & Tips</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Stay updated with the latest hair trends, styling tips, and salon news.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Summer Hair Care Tips</h3>
                  <p className="text-gray-600 text-sm mb-4">Keep your hair healthy and beautiful this summer with our expert tips.</p>
                  <span className="text-xs text-gray-500">5 min read</span>
                </div>
              </article>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {modules.includes('contact') && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ready to transform your look? Contact us to book your appointment or ask any questions.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-pink-500">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Tell us about your hair goals..."
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">{branding.businessName || 'Elegance Salon'}</h3>
            <p className="text-gray-400 mb-6">
              Transform your style with our expert team.
            </p>
            <p className="text-gray-400">&copy; 2024 {branding.businessName || 'Elegance Salon'}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 