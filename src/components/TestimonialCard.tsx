import React, { useState } from 'react'

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  rating: number
  image?: string
  date?: string
  project?: string
  videoTestimonial?: string
  id?: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  role, 
  content, 
  rating, 
  image, 
  date, 
  project, 
  videoTestimonial,
  id 
}) => {
  const [showVideo, setShowVideo] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Function to render star rating
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${i <= rating ? 'text-yellow-500' : 'text-gray-300'} transition-all duration-300 ${isHovered && i <= rating ? 'animate-pulse-custom' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  // Toggle video display
  const toggleVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowVideo(!showVideo);
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-card p-6 hover-lift transition-all duration-300 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
        <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 96L96 0V96H0Z" fill="currentColor" className="text-blue-600" />
        </svg>
      </div>

      {/* Video Testimonial */}
      {showVideo && videoTestimonial ? (
        <div className="w-full aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden">
          <iframe 
            src={videoTestimonial} 
            className="w-full h-full" 
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            allowFullScreen
          ></iframe>
          <button 
            onClick={toggleVideo}
            className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      ) : (
        <>
          {/* Quote Icon */}
          <div className="flex justify-end mb-4 relative z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-blue-200 transform transition-transform duration-300 group-hover:rotate-12"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M10 8v6c0 3.314-2.686 6-6 6H4c.667 2.667 2.667 4 6 4 4 0 6-3.333 6-10V8h-6zm16 0v6c0 3.314-2.686 6-6 6h0c.667 2.667 2.667 4 6 4 4 0 6-3.333 6-10V8h-6z" />
            </svg>
          </div>

          {/* Project and Date - Conditionally rendered */}
          {(project || date) && (
            <div className="flex justify-between text-xs text-gray-500 mb-2 animate-fadeIn">
              {project && <span className="font-medium">Project: {project}</span>}
              {date && <span>{date}</span>}
            </div>
          )}

          {/* Rating */}
          <div className="flex mb-4 relative z-10">
            {renderStars()}
          </div>

          {/* Testimonial Content */}
          <p className="text-gray-600 mb-6 relative z-10 text-base leading-relaxed">"{content}"</p>
        </>
      )}

      {/* Author Info */}
      <div className="flex items-center relative z-10">
        {image ? (
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-100">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
            {name.charAt(0)}
          </div>
        )}
        <div className="ml-3">
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
        
        {/* Video Button - Conditionally rendered */}
        {videoTestimonial && !showVideo && (
          <button 
            onClick={toggleVideo}
            className="ml-auto bg-blue-50 text-blue-600 rounded-full p-2 hover:bg-blue-100 transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform transition-transform duration-300 group-hover:scale-110" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}

export default TestimonialCard