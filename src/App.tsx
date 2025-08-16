import { useState } from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ServicesPage from './components/ServicesPage'
import ProjectsPage from './components/ProjectsPage'
import ContactPage from './components/ContactPage'

function App() {
  // State to track current page
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'services' | 'projects' | 'contact'>('home')

  // Page navigation handlers
  const handlePageChange = (page: 'home' | 'about' | 'services' | 'projects' | 'contact') => {
    setCurrentPage(page)
    // Scroll to top when changing pages
    window.scrollTo(0, 0)
  }

  // Render the current page based on state
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />
      case 'about':
        return <AboutPage />
      case 'services':
        return <ServicesPage />
      case 'projects':
        return <ProjectsPage />
      case 'contact':
        return <ContactPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
      <Navbar 
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      
      {renderCurrentPage()}
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Architectural Design</h3>
            <p className="text-gray-400">
              We provide exceptional architectural design and construction services for residential and commercial projects.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" onClick={(e) => { e.preventDefault(); handlePageChange('services'); }} className="text-gray-400 hover:text-white transition-colors">Architectural Design</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handlePageChange('services'); }} className="text-gray-400 hover:text-white transition-colors">Construction</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handlePageChange('services'); }} className="text-gray-400 hover:text-white transition-colors">Project Management</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handlePageChange('services'); }} className="text-gray-400 hover:text-white transition-colors">Interior Design</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" onClick={(e) => { e.preventDefault(); handlePageChange('about'); }} className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handlePageChange('about'); }} className="text-gray-400 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handlePageChange('projects'); }} className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handlePageChange('contact'); }} className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="text-gray-400 not-italic">
              123 Architecture Street<br />
              Design District<br />
              City, State 12345<br />
              <a href="mailto:info@architecture.com" className="text-blue-400 hover:text-blue-300 transition-colors">info@architecture.com</a><br />
              <a href="tel:+11234567890" className="text-blue-400 hover:text-blue-300 transition-colors">+1 (123) 456-7890</a>
            </address>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Architectural Design. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
