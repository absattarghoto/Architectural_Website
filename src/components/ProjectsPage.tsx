import React, { useEffect, useRef, useState } from 'react';
import ProjectFilter from './ProjectFilter';
import propertiesData from '../data/properties.json';

type Category = 'residential' | 'commercial' | 'institutional' | 'all';

interface Project {
  id: number | string;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  imageType?: string;
  featured: boolean;
  description: string;
  amenities?: string[];
  yearBuilt?: number;
  images?: string[];
  videoTour?: string;
  category?: Exclude<Category, 'all'>;
}

// For raw JSON where some fields may be missing
type RawProperty = Partial<Project> & {
  id: number | string;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  featured: boolean;
};

const formatCategory = (cat?: string) =>
  cat ? cat.charAt(0).toUpperCase() + cat.slice(1) : 'Residential';

const getGradientClass = (imageType?: string) => {
  switch (imageType) {
    case 'primary':
      return 'from-blue-500 to-blue-700';
    case 'secondary':
      return 'from-indigo-500 to-purple-600';
    case 'tertiary':
      return 'from-green-500 to-teal-600';
    default:
      return 'from-blue-500 to-blue-700';
  }
};

const ProjectsPage: React.FC = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State for active category filter
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  // Keep refs for animations
  const projectRefs = useRef<(HTMLElement | null)[]>([]);

  // Map JSON → projects
  const projects: Project[] = (propertiesData as RawProperty[]).map((property) => {
    const titleLc = (property.title ?? '').toLowerCase();
    const descLc = (property.description ?? '').toLowerCase();

    let category: Project['category'] = 'residential';
    if (titleLc.includes('office') || titleLc.includes('commercial') || descLc.includes('business')) {
      category = 'commercial';
    } else if (titleLc.includes('community') || titleLc.includes('public') || descLc.includes('institution')) {
      category = 'institutional';
    }

    return {
      id: property.id,
      title: property.title,
      location: property.location,
      price: property.price,
      bedrooms: property.bedrooms,
      bathrooms: property.bathrooms,
      area: property.area,
      featured: property.featured,
      description: property.description ?? '',
      imageType: property.imageType,
      amenities: property.amenities ?? [],
      yearBuilt: property.yearBuilt,
      images: property.images ?? [],
      videoTour: property.videoTour,
      category,
    };
  });

  // Filter projects by active category
  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Projects</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of architectural design and construction projects across
            residential, commercial, and institutional sectors.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ProjectFilter
          categories={[
            { id: 'all', name: 'All Projects' },
            { id: 'residential', name: 'Residential' },
            { id: 'commercial', name: 'Commercial' },
            { id: 'institutional', name: 'Institutional' },
          ]}
          activeCategory={activeCategory}
          onCategoryChange={(id: Category) => setActiveCategory(id)}
        />
      </section>

      {/* Projects Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
              ref={(el) => (projectRefs.current[index] = el)}
            >
              <div className={`h-64 bg-gradient-to-r ${getGradientClass(project.imageType)} relative overflow-hidden`}>
                {project.images && project.images.length > 0 ? (
                  <img 
                    src={project.images[0]} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <span className="text-white text-xl font-semibold">{project.title}</span>
                  </div>
                )}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  <p className="text-white/80 text-sm">{project.location}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-blue-600 font-bold text-xl">{project.price}</span>
                  <span className="text-gray-500 text-sm bg-gray-100 px-3 py-1 rounded-full">
                    {formatCategory(project.category)}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600 mb-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>{project.bedrooms} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{project.bathrooms} Baths</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                    </svg>
                    <span>{project.area}</span>
                  </div>
                </div>
                <p className="text-gray-600 line-clamp-3 mb-4">{project.description}</p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
