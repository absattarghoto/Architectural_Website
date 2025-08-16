import React from 'react'

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">Our Company</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are a team of passionate architects and builders dedicated to creating exceptional spaces that inspire and endure.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-lg z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-200 rounded-lg z-0"></div>
              <div className="relative z-10 bg-white p-2 rounded-lg shadow-xl">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white text-xl font-semibold">
                    Our Team
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-8 md:mt-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 1992, our company has grown from a small local firm to a recognized leader in architectural design and construction. We began with a simple mission: to create spaces that enhance the way people live, work, and interact.
            </p>
            <p className="text-gray-600 mb-4">
              Over the years, we've completed more than 500 projects across residential, commercial, and institutional sectors. Our team has expanded to include specialists in sustainable design, interior architecture, and project management.
            </p>
            <p className="text-gray-600">
              Today, we continue to push boundaries and explore new possibilities in design and construction, always with our clients' needs and aspirations at the center of our work.
            </p>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These principles guide our approach to every project and relationship.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Value 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
            <p className="text-gray-600">
              We maintain the highest standards of honesty and transparency in all our dealings, from initial consultations to project completion.
            </p>
          </div>
          
          {/* Value 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600">
              We embrace creativity and forward-thinking approaches, constantly seeking better solutions to design and construction challenges.
            </p>
          </div>
          
          {/* Value 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaboration</h3>
            <p className="text-gray-600">
              We believe in the power of teamwork, both within our company and with our clients, consultants, and contractors.
            </p>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our talented professionals bring diverse skills and perspectives to every project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="aspect-w-1 aspect-h-1 bg-gray-200">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xl font-semibold">
                JD
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">John Doe</h3>
              <p className="text-blue-600 mb-3">Principal Architect</p>
              <p className="text-gray-600 text-sm">
                With over 20 years of experience, John leads our design team with vision and expertise.
              </p>
            </div>
          </div>
          
          {/* Team Member 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="aspect-w-1 aspect-h-1 bg-gray-200">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xl font-semibold">
                JS
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Jane Smith</h3>
              <p className="text-blue-600 mb-3">Construction Manager</p>
              <p className="text-gray-600 text-sm">
                Jane ensures our projects are executed with precision, quality, and efficiency.
              </p>
            </div>
          </div>
          
          {/* Team Member 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="aspect-w-1 aspect-h-1 bg-gray-200">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xl font-semibold">
                RJ
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Robert Johnson</h3>
              <p className="text-blue-600 mb-3">Interior Designer</p>
              <p className="text-gray-600 text-sm">
                Robert brings spaces to life with thoughtful, functional, and beautiful interior designs.
              </p>
            </div>
          </div>
          
          {/* Team Member 4 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="aspect-w-1 aspect-h-1 bg-gray-200">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xl font-semibold">
                ML
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Maria Lee</h3>
              <p className="text-blue-600 mb-3">Sustainability Specialist</p>
              <p className="text-gray-600 text-sm">
                Maria helps our clients achieve their environmental goals through innovative sustainable design strategies.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-600 rounded-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Contact us today to discuss how we can bring your vision to life.
          </p>
          <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-md hover:bg-blue-50 transition-colors">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  )
}

export default AboutPage