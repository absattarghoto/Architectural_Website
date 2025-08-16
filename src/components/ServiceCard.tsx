import React from 'react'

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  imageUrl?: string
  delay?: number
  onClick?: () => void
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  imageUrl, 
  delay = 0,
  onClick 
}) => {
  return (
    <div 
      className={`group rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 animate-fadeIn ${onClick ? 'cursor-pointer' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
      onClick={onClick}
    >
      {imageUrl ? (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
          </div>
        </div>
      ) : (
        <div className="bg-blue-600 p-6 flex items-center">
          <div className="mr-4 text-white">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
      )}
      <div className="p-6 bg-white">
        <p className="text-gray-600">{description}</p>
        {onClick && (
          <div className="mt-4 flex justify-end">
            <span className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
              Learn more
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default ServiceCard