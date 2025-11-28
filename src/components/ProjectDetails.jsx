import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { FaExternalLinkAlt, FaGithub, FaArrowLeft } from 'react-icons/fa';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = `https://portfolio-backend-xi-ochre.vercel.app/api/portfolio-projects/${id}/`;

  useEffect(() => {
    fetchProjectDetails();
  }, [id]);

  const fetchProjectDetails = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Failed to fetch project details: ${response.status}`);
      }
      const data = await response.json();
      setProject(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getProjectImage = (project) => {
    if (!project.image) {
      return `https://via.placeholder.com/800x400/1f2937/6b7280?text=${encodeURIComponent(project.title)}`;
    }

    if (project.image.startsWith('http')) {
      return project.image;
    }
    const cloudName = 'dg9kylqph';
    
    if (project.image.startsWith('image/upload/')) {
      return `https://res.cloudinary.com/${cloudName}/${project.image}`;
    }
    if (!project.image.includes('image/upload/') && !project.image.startsWith('http')) {
      return `https://res.cloudinary.com/${cloudName}/image/upload/${project.image}`;
    }
    return `https://portfolio-backend-xi-ochre.vercel.app${project.image.startsWith('/') ? '' : '/'}${project.image}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto"></div>
          <p className="mt-4 text-gray-400 text-base">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center max-w-md mx-4">
          <div className="text-red-400 text-4xl mb-4">⚠️</div>
          <h2 className="text-xl font-bold text-white mb-3">Error Loading Project</h2>
          <p className="text-gray-400 text-sm mb-4">{error}</p>
          <p className="text-gray-500 text-xs mb-6">
            Please check your internet connection and try again.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={fetchProjectDetails}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors text-sm"
            >
              Try Again
            </button>
            <Link
              to="/#projects"
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors inline-flex items-center gap-2 text-sm justify-center"
            >
              <FaArrowLeft className="w-3 h-3" />
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold text-white mb-3">Project Not Found</h2>
          <Link
            to="/#projects"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors text-sm inline-flex items-center gap-2"
          >
            <FaArrowLeft className="w-3 h-3" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-6 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors mb-6 text-base lg:text-lg"
        >
          <FaArrowLeft className="w-3 h-3 lg:w-4 lg:h-4" />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="bg-gray-800 rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl overflow-hidden mb-6 lg:mb-8">
          <div className="relative h-48 lg:h-96">
            <img
              src={getProjectImage(project)}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error('Image failed to load:', e.target.src);
                e.target.src = `https://via.placeholder.com/800x400/1f2937/6b7280?text=${encodeURIComponent(project.title)}`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6">
              <h1 className="text-2xl lg:text-5xl font-bold text-white mb-2 lg:mb-4">
                {project.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 lg:space-y-8">
            {/* Project Description */}
            <div className="bg-gray-800 rounded-xl p-4 lg:p-8">
              <h2 className="text-xl lg:text-3xl font-semibold text-white mb-4 lg:mb-6 border-b-2 border-indigo-500 pb-3 lg:pb-4">
                Project Overview
              </h2>
              <p className="text-gray-300 text-sm lg:text-lg leading-relaxed whitespace-pre-line">
                {project.description || 'No description available for this project.'}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 lg:space-y-8">
            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="bg-gray-800 rounded-xl p-4 lg:p-8">
                <h2 className="text-xl lg:text-3xl font-semibold text-white mb-4 lg:mb-6 border-b-2 border-indigo-500 pb-3 lg:pb-4">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2 lg:gap-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-indigo-900 text-indigo-300 px-3 py-1 lg:px-4 lg:py-2 rounded-lg text-xs lg:text-base font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Project Links */}
            {(project.live_link || project.github_client || project.github_server) && (
              <div className="bg-gray-800 rounded-xl p-4 lg:p-8">
                <h2 className="text-xl lg:text-3xl font-semibold text-white mb-4 lg:mb-6 border-b-2 border-indigo-500 pb-3 lg:pb-4">
                  Project Links
                </h2>
                <div className="flex flex-col sm:flex-row lg:flex-wrap gap-3 lg:gap-4">
                  {project.live_link && (
                    <a
                      href={project.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-lg font-semibold flex items-center gap-2 lg:gap-3 transition-colors transform hover:scale-105 text-sm lg:text-base justify-center"
                    >
                      <FaExternalLinkAlt className="w-3 h-3 lg:w-4 lg:h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.github_client && (
                    <a
                      href={project.github_client}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-lg font-semibold flex items-center gap-2 lg:gap-3 transition-colors transform hover:scale-105 text-sm lg:text-base justify-center"
                    >
                      <FaGithub className="w-3 h-3 lg:w-4 lg:h-4" />
                      Client Code
                    </a>
                  )}
                  {project.github_server && (
                    <a
                      href={project.github_server}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-lg font-semibold flex items-center gap-2 lg:gap-3 transition-colors transform hover:scale-105 text-sm lg:text-base justify-center"
                    >
                      <FaGithub className="w-3 h-3 lg:w-4 lg:h-4" />
                      Server Code
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;