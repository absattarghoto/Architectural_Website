import React from 'react'
import ServiceCard from './ServiceCard'
import ProcessStep from './ProcessStep'
import { useEffect } from 'react'

const ServicesPage: React.FC = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive architectural design and construction services tailored to your specific needs and vision.
          </p>
        </div>
      </section>
      
      {/* Main Services Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Service 1 */}
          <ServiceCard
            title="Architectural Design"
            description="Our architectural design services encompass everything from initial concept development to detailed construction documentation. We work closely with you to understand your goals, preferences, and requirements, translating them into innovative and functional designs."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            }
            imageUrl="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            delay={100}
          />
          
          {/* Service 2 */}
          <ServiceCard
            title="Construction Services"
            description="Our construction services bring your architectural vision to life with precision and quality. We handle all aspects of the building process, from site preparation to final finishes, ensuring that every detail meets our high standards."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            }
            imageUrl="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            delay={200}
          />
          
          {/* Service 3 */}
          <ServiceCard
            title="Project Management"
            description="Our project management services ensure that your project stays on schedule, within budget, and meets all quality standards. We coordinate all aspects of the design and construction process, providing you with a single point of contact and accountability."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            }
            imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            delay={300}
          />
          
          {/* Service 4 */}
          <ServiceCard
            title="Interior Design"
            description="Our interior design services create beautiful, functional, and cohesive interior spaces that reflect your style and meet your needs. We consider every aspect of the interior environment, from space planning to material selection to lighting design."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            }
            imageUrl="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            delay={400}
          />
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We follow a structured approach to ensure that every project is completed successfully, on time, and within budget.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <ProcessStep 
            number={1} 
            title="Consultation" 
            description="We begin with a thorough consultation to understand your vision, requirements, and budget for the project. This initial meeting helps us establish the scope and goals of your project."
            delay={100}
          />
          
          <ProcessStep 
            number={2} 
            title="Design" 
            description="Our team develops conceptual designs and refines them based on your feedback until we achieve the perfect solution. We create detailed plans, 3D visualizations, and material selections to bring your vision to life."
            delay={200}
          />
          
          <ProcessStep 
            number={3} 
            title="Construction" 
            description="We execute the construction phase with precision, keeping you informed of progress and addressing any issues promptly. Our team of skilled professionals ensures that every detail is implemented according to plan."
            delay={300}
          />
          
          <ProcessStep 
            number={4} 
            title="Completion" 
            description="We conduct a thorough review of the completed project, ensuring that every detail meets our high standards before handover. We provide you with all necessary documentation and walk you through your new space."
            isLast={true}
            delay={400}
          />
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Specialized Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            In addition to our core services, we offer specialized solutions to meet your specific needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 animate-fadeIn" style={{ animationDelay: '100ms' }}>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Sustainable Design</h3>
            <p className="text-gray-600">
              We incorporate sustainable design principles and energy-efficient solutions to minimize environmental impact and reduce operating costs.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 animate-fadeIn" style={{ animationDelay: '200ms' }}>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Smart Home Integration</h3>
            <p className="text-gray-600">
              We design and implement smart home systems that enhance comfort, convenience, security, and energy efficiency in your space.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 animate-fadeIn" style={{ animationDelay: '300ms' }}>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">3D Visualization</h3>
            <p className="text-gray-600">
              We create photorealistic 3D renderings and virtual walkthroughs to help you visualize your project before construction begins.
            </p>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 md:p-12 shadow-xl animate-fadeIn">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
              <p className="text-blue-100 mb-6 md:mb-0">
                Contact us today to schedule a consultation and discuss how we can help bring your vision to life.
              </p>
            </div>
            <div className="md:w-1/3 text-center md:text-right">
              <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-md hover:bg-blue-50 transition-colors transform hover:-translate-y-1 hover:shadow-lg duration-300">
                Contact Us Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage