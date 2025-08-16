import React from 'react'

interface Category {
  id: string;
  name: string;
}

interface ProjectFilterProps {
  categories: Category[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category.id 
            ? 'bg-blue-600 text-white shadow-md' 
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
        >
          {category.name}
        </button>
      ))}
    </div>
  )
}

export default ProjectFilter