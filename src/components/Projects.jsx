import { useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Projects.css'; // We'll create this CSS file

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageLoadStates, setImageLoadStates] = useState({});

  const API_URL = 'https://portfolio-backend-xi-ochre.vercel.app/api/portfolio-projects/';

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      const data = await response.json();
      setProjects(data.results || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getProjectImage = (project) => {
    if (!project.image) {
      return `https://via.placeholder.com/400x250/1f2937/6b7280?text=${encodeURIComponent(project.title)}`;
    }

    if (project.image.startsWith('http')) {
      return project.image;
    }

    const cloudName = 'dg9kylqph';
    
    let imagePath = project.image;
    
    if (imagePath.startsWith('/')) {
      imagePath = imagePath.substring(1);
    }
    
    if (imagePath.startsWith('image/upload/')) {
      return `https://res.cloudinary.com/${cloudName}/${imagePath}`;
    }
    
    if (!imagePath.includes('image/upload/')) {
      return `https://res.cloudinary.com/${cloudName}/image/upload/${imagePath}`;
    }

    return `https://via.placeholder.com/400x250/1f2937/6b7280?text=${encodeURIComponent(project.title)}`;
  };

  const handleImageLoad = (projectId) => {
    setImageLoadStates(prev => ({
      ...prev,
      [projectId]: 'loaded'
    }));
  };

  const handleImageError = (projectId, projectTitle) => {
    setImageLoadStates(prev => ({
      ...prev,
      [projectId]: 'error'
    }));
  };

  if (loading) {
    return (
      <section id="projects" className="section-padding bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Featured Projects
          </h2>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-500"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="section-padding bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Featured Projects
          </h2>
          <div className="text-center text-red-400">
            <p>Error loading projects: {error}</p>
            <button
              onClick={fetchProjects}
              className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section-padding bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and experience
        </p>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="projects-swiper indigo-swiper"
        >
          {projects.map((project) => {
            const projectImage = getProjectImage(project);
            const imageState = imageLoadStates[project.id];
            
            return (
              <SwiperSlide key={project.id}>
                <div className="bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 group h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <div className="w-full h-48 relative bg-gray-600">
                      <img
                        src={projectImage}
                        alt={project.title}
                        className={`w-full h-full object-cover transition duration-300 ${
                          imageState === 'loaded' 
                            ? 'opacity-100 group-hover:scale-105' 
                            : 'opacity-0'
                        }`}
                        onLoad={() => handleImageLoad(project.id)}
                        onError={() => handleImageError(project.id, project.title)}
                      />
                      
                      {!imageState && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-600">
                          <div className="animate-pulse flex space-x-4">
                            <div className="rounded-full bg-gray-500 h-10 w-10"></div>
                          </div>
                        </div>
                      )}
                      
                      {imageState === 'error' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-600">
                          <div className="text-center text-gray-400">
                            <div className="text-lg mb-2">📷</div>
                            <div className="text-sm">Image not available</div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 flex-1 text-sm">
                      {project.short_description || 
                       (project.description ? project.description.substring(0, 120) + '...' : 'No description available')}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies?.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-indigo-900 text-indigo-300 px-3 py-1 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies?.length > 4 && (
                        <span className="bg-gray-600 text-gray-300 px-3 py-1 rounded-full text-xs">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-600">
                      <div className="flex space-x-4">
                        {project.live_link && (
                          <a
                            href={project.live_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-300 hover:text-indigo-400 transition duration-300 text-sm"
                          >
                            <FaExternalLinkAlt className="w-3 h-3" />
                            Live
                          </a>
                        )}
                        {(project.github_client || project.github_server) && (
                          <a
                            href={project.github_client || project.github_server}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-300 hover:text-indigo-400 transition duration-300 text-sm"
                          >
                            <FaGithub className="w-3 h-3" />
                            Code
                          </a>
                        )}
                      </div>
                      
                      <Link
                        to={`/projects/${project.id}`}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition duration-300 text-sm"
                      >
                        Details
                        <FaArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;