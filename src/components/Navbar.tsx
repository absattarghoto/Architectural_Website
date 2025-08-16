import React, { useState, useEffect } from 'react'

interface NavbarProps {
  currentPage: 'home' | 'about' | 'services' | 'projects' | 'contact'
  onPageChange: (page: 'home' | 'about' | 'services' | 'projects' | 'contact') => void
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when changing pages
  const handleNavigation = (page: 'home' | 'about' | 'services' | 'projects' | 'contact') => {
    onPageChange(page)
    setIsMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white/80 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div 
              className="flex items-center space-x-2 cursor-pointer" 
              onClick={() => handleNavigation('home')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1v1h-3v-1H8v1H5v-1a1 1 0 01-1-1V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
              </svg>
              <span className="text-xl font-bold text-blue-600">Architectural Design</span>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation('home')
                }}
                className={`${currentPage === 'home' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
              >
                Home
              </a>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation('about')
                }}
                className={`${currentPage === 'about' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
              >
                About
              </a>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation('services')
                }}
                className={`${currentPage === 'services' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
              >
                Services
              </a>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation('projects')
                }}
                className={`${currentPage === 'projects' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
              >
                Projects
              </a>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation('contact')
                }}
                className={`${currentPage === 'contact' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
              >
                Contact
              </a>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => handleNavigation('contact')}
              className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors"
            >
              Get a Quote
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none transition-colors"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden transition-all duration-300 ease-in-out`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault()
              handleNavigation('home')
            }}
            className={`block px-3 py-2 rounded-md ${currentPage === 'home' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
          >
            Home
          </a>
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault()
              handleNavigation('about')
            }}
            className={`block px-3 py-2 rounded-md ${currentPage === 'about' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
          >
            About
          </a>
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault()
              handleNavigation('services')
            }}
            className={`block px-3 py-2 rounded-md ${currentPage === 'services' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
          >
            Services
          </a>
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault()
              handleNavigation('projects')
            }}
            className={`block px-3 py-2 rounded-md ${currentPage === 'projects' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
          >
            Projects
          </a>
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault()
              handleNavigation('contact')
            }}
            className={`block px-3 py-2 rounded-md ${currentPage === 'contact' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
          >
            Contact
          </a>
          <button 
            onClick={() => handleNavigation('contact')}
            className="mt-2 w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar