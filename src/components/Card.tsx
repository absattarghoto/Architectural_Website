import { ReactNode } from 'react';

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
  titleColor?: string;
  hoverEffect?: boolean;
}

export default function Card({ 
  title, 
  children, 
  className = '',
  titleColor = 'text-blue-400',
  hoverEffect = true
}: CardProps) {
  return (
    <div 
      className={`
        bg-gray-800/30 backdrop-blur-sm p-6 rounded-lg 
        border border-gray-700 
        ${hoverEffect ? 'hover:border-blue-500 transition-colors' : ''}
        ${className}
      `}
    >
      {title && (
        <h2 className={`text-xl font-semibold mb-3 ${titleColor}`}>
          {title}
        </h2>
      )}
      <div className="text-gray-300">
        {children}
      </div>
    </div>
  );
}