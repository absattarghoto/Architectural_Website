import React from 'react'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-card p-6 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 animate-fadeIn"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default FeatureCard