import React, { useState } from 'react'

interface PropertyCardProps {
  title: string
  location: string
  price: string
  bedrooms: number
  bathrooms: number
  area: string
  imageType: 'modern' | 'luxury' | 'apartment' | 'house' | 'coastal'
  featured?: boolean
  description?: string
  amenities?: string[]
  yearBuilt?: string
  images?: string[]
  videoTour?: string
  id?: string
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  area,
  imageType,
  featured = false,
  description,
  amenities,
  yearBuilt,
  images,
  videoTour,
  id
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Generate background color based on imageType
  const getBgColor = () => {
    switch (imageType) {
      case 'modern':
        return 'from-blue-300 to-blue-500'
      case 'luxury':
        return 'from-purple-300 to-purple-500'
      case 'apartment':
        return 'from-green-300 to-green-500'
      case 'house':
        return 'from-orange-300 to-orange-500'
      case 'coastal':
        return 'from-teal-300 to-teal-500'
      default:
        return 'from-blue-300 to-blue-500'
    }
  }

  // Handle image navigation
  const nextImage = () => {
    if (images && images.length > 0) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (images && images.length > 0) {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }
  };

  // Toggle video display
  const toggleVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowVideo(!showVideo);
  };

  return (
    <div 
      className={`bg-white rounded-xl overflow-hidden shadow-card hover-lift transition-all duration-300 ${featured ? 'ring-2 ring-blue-500' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Property Image or Video */}
      <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative group">
        {showVideo && videoTour ? (
          <div className="w-full h-full">
            <iframe 
              src={videoTour} 
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
            {images && images.length > 0 ? (
              <>
                <img 
                  src={images[currentImageIndex]} 
                  alt={title} 
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                {/* Image navigation */}
                {images.length > 1 && (
                  <>
                    <button 
                      onClick={(e) => { e.stopPropagation(); prevImage(); }}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); nextImage(); }}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </>
                )}
                {/* Image indicators */}
                {images.length > 1 && (
                  <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
                    {images.map((_, index) => (
                      <button 
                        key={index} 
                        onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-white w-4' : 'bg-white/60'}`}
                      ></button>
                    ))}
                  </div>
                )}
                {/* Video button overlay */}
                {videoTour && (
                  <button 
                    onClick={toggleVideo}
                    className="absolute bottom-4 right-4 bg-blue-600 text-white rounded-lg px-3 py-2 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-blue-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                    Watch Tour
                  </button>
                )}
              </>
            ) : (
              <div className={`w-full h-full bg-gradient-to-r ${getBgColor()} flex items-center justify-center text-white font-semibold animate-pulse-custom`}>
                {imageType.charAt(0).toUpperCase() + imageType.slice(1)} Property
              </div>
            )}
          </>
        )}
        {featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full animate-bounce-custom">
            Featured
          </div>
        )}
      </div>
      
      {/* Property Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-gray-600 mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {location}
        </p>
        
        {/* Price */}
        <div className="text-blue-600 font-bold text-xl mb-4">{price}</div>
        
        {/* Property Features */}
        <div className="flex justify-between text-gray-600 border-t border-gray-100 pt-4">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>{bedrooms} {bedrooms === 1 ? 'Bed' : 'Beds'}</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{bathrooms} {bathrooms === 1 ? 'Bath' : 'Baths'}</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
            </svg>
            <span>{area}</span>
          </div>
        </div>

        {/* Description - Conditionally rendered */}
        {description && isHovered && (
          <div className="mt-4 text-gray-600 text-sm animate-fadeIn">
            <p className="line-clamp-2">{description}</p>
          </div>
        )}

        {/* Amenities - Conditionally rendered */}
        {amenities && amenities.length > 0 && isHovered && (
          <div className="mt-4 animate-fadeIn">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Amenities</h4>
            <div className="flex flex-wrap gap-2">
              {amenities.slice(0, 3).map((amenity, index) => (
                <span key={index} className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                  {amenity}
                </span>
              ))}
              {amenities.length > 3 && (
                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                  +{amenities.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Year Built - Conditionally rendered */}
        {yearBuilt && isHovered && (
          <div className="mt-4 text-gray-600 text-sm animate-fadeIn">
            <span className="font-medium">Year Built:</span> {yearBuilt}
          </div>
        )}
      </div>
      
      {/* Action Button */}
      <div className="px-6 pb-6">
        <button className="w-full px-4 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
          <span>View Details</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default PropertyCard