import React, { useEffect, useRef } from 'react';
import HeroSlider from './HeroSlider';
import PropertyCard from './PropertyCard';
import TestimonialCard from './TestimonialCard';
import ContactForm from './ContactForm';

// Import JSON data
import propertiesData from '../data/properties.json';
import testimonialsData from '../data/testimonials.json';

const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <div className="inline-block bg-blue-600/10 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Award-Winning Architecture Firm
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              We Create <span className="text-blue-600 relative inline-block">
                <span className="relative z-10">Architectural</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-200 opacity-50 z-0"></span>
              </span> Masterpieces
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Over 100 building and housing projects completed. Clients choose us for our distinctive approach and quality craftsmanship.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">
                Our Services
              </button>
              <button className="btn-secondary">
                Contact Us
              </button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12">
              {[
                { value: '100+', label: 'Projects Completed' },
                { value: '15+', label: 'Years Experience' },
                { value: '25+', label: 'Design Awards' }
              ].map((stat, index) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-3xl font-bold text-blue-600">
                    {stat.value}
                  </span>
                  <span className="text-gray-500 text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-lg z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-200 rounded-lg z-0"></div>
              
              <div className="relative z-10 bg-white p-2 rounded-lg shadow-xl overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded overflow-hidden">
                  <HeroSlider />
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white/80 hover:bg-white text-blue-600 rounded-full p-4 transform transition-all duration-300 hover:scale-110 opacity-90 hover:opacity-100 shadow-lg">
                    <PlayIcon />
                  </button>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 z-20">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                    <AwardIcon />
                  </div>
                  <div className="ml-3">
                    <div className="text-xs text-gray-500">Best Architecture</div>
                    <div className="font-bold text-gray-900">2023 Award</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />
      
      {/* Featured Properties Section */}
      <FeaturedProperties propertiesData={propertiesData} />
      
      {/* Testimonials Section */}
      <TestimonialsSection testimonialsData={testimonialsData} />
      
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

// ================ Sub-Components ================ //
const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
  </svg>
);

const AwardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const ServicesSection = () => {
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Architectural Design",
      description: "We create innovative and functional architectural designs tailored to your specific needs and preferences.",
      features: [
        "Custom residential designs",
        "Commercial spaces",
        "3D visualization"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Construction Services",
      description: "Our experienced team handles all aspects of construction, ensuring high-quality results that meet your expectations.",
      features: [
        "New construction",
        "Renovations",
        "Sustainable building"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "Project Management",
      description: "We coordinate all aspects of your project, from planning to completion, ensuring it stays on schedule and within budget.",
      features: [
        "Timeline management",
        "Budget oversight",
        "Quality control"
      ]
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block bg-blue-600/10 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
          What We Offer
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Professional Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Comprehensive architectural and construction solutions tailored to your requirements
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCardWrapper 
            key={service.title}
            service={service}
          />
        ))}
      </div>
    </section>
  );
};

import ServiceCard from './ServiceCard';

const ServiceCardWrapper = ({ service }: { service: any }) => (
  <ServiceCard
    title={service.title}
    description={service.description}
    icon={service.icon}
  />
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const LearnMoreLink = () => (
  <a href="#" className="text-blue-600 font-medium hover:text-blue-800 flex items-center group">
    Learn More
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  </a>
);

const FeaturedProperties = ({ propertiesData }: { propertiesData: any[]; }) => (
  <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50">
    <div className="text-center mb-16">
      <div className="inline-block bg-blue-600/10 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
        Exceptional Designs
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Explore our showcase of exceptional architectural designs and construction projects
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
      {propertiesData.slice(0, 3).map((property, index) => (
        <div key={property.id}>
          <PropertyCard {...property} />
        </div>
      ))}
    </div>
    
    <div className="text-center mt-16">
      <button className="btn-primary">
        View All Projects
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  </section>
);

const TestimonialsSection = ({ testimonialsData }: { testimonialsData: any[]; }) => (
  <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-50 rounded-full opacity-70"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-50 rounded-full opacity-50 transform translate-x-1/2"></div>
      <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-blue-100 rounded-full opacity-30"></div>
    </div>

    <div className="text-center mb-16">
      <div className="inline-block bg-blue-600/10 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
        Client Feedback
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Hear what our clients say about our services and projects
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
      {testimonialsData.slice(0, 3).map((testimonial, index) => (
        <div key={testimonial.id}>
          <TestimonialCard {...testimonial} />
        </div>
      ))}
    </div>

    <VideoTestimonial />
  </section>
);

const VideoTestimonial = () => (
  <div className="mt-16 bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-4xl mx-auto">
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8 relative">
        <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-gray-200 relative group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-900/30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              <PlayIcon />
            </div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2053&q=80" 
            alt="Video testimonial" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="md:w-1/2">
        <div className="flex items-center mb-4">
          <img 
            src="https://randomuser.me/api/portraits/men/32.jpg" 
            alt="Client" 
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h4 className="font-bold text-gray-900">Robert Williams</h4>
            <p className="text-gray-600 text-sm">CEO, Williams Enterprises</p>
          </div>
        </div>
        <blockquote className="text-gray-700 italic mb-4">
          "Their architectural vision completely transformed our corporate headquarters. The space is not only beautiful but also functional and energy-efficient."
        </blockquote>
        <div className="flex items-center">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>
          <span className="text-blue-600 font-medium ml-4 hover:underline cursor-pointer">
            Watch full testimonial
          </span>
        </div>
      </div>
    </div>
  </div>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ContactSection = () => (
  <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
        <p className="text-gray-600 mb-8">
          Have a project in mind or want to learn more about our services? We'd love to hear from you.
        </p>
        
        <ContactInfo />
      </div>
      
      <div>
        <ContactForm />
      </div>
    </div>
  </section>
);

const ContactInfo = () => (
  <div className="space-y-4">
    <ContactItem 
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      }
      title="Our Office"
      content={
        <>
          123 Architecture Street<br />
          Design District<br />
          City, State 12345
        </>
      }
    />
    
    <ContactItem 
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      }
      title="Email Us"
      content={<a href="mailto:info@architecture.com" className="text-blue-600 hover:text-blue-800 transition-colors">info@architecture.com</a>}
    />
    
    <ContactItem 
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      }
      title="Call Us"
      content={<a href="tel:+11234567890" className="text-blue-600 hover:text-blue-800 transition-colors">+1 (123) 456-7890</a>}
    />
  </div>
);

const ContactItem = ({ icon, title, content }: { icon: JSX.Element; title: string; content: JSX.Element | string }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 mt-1">{icon}</div>
    <div className="ml-3">
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <div className="text-gray-600">{content}</div>
    </div>
  </div>
);

export default HomePage;