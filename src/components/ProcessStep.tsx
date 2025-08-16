import React from 'react'

interface ProcessStepProps {
  number: number
  title: string
  description: string
  isLast?: boolean
  delay?: number
}

const ProcessStep: React.FC<ProcessStepProps> = ({ 
  number, 
  title, 
  description, 
  isLast = false,
  delay = 0 
}) => {
  return (
    <div 
      className="flex animate-fadeIn"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold">
          {number}
        </div>
        {!isLast && (
          <div className="w-px h-full bg-blue-200 mt-2"></div>
        )}
      </div>
      <div className="ml-6 pb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export default ProcessStep