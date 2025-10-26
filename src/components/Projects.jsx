import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import evora from "../assets/evora.jpg";
import vaxchain from "../assets/vaxchain.jpg";
import phimart from "../assets/phimart.jpg";

const Projects = () => {
  const projects = [
    {
      title: 'Vaccination Management System',
      description: 'A comprehensive vaccination management system with real-time tracking and reporting features',
      image: vaxchain, // Use the imported variable
      technologies: ['React', 'Django', 'PostgreSQL', 'Tailwind'],
      liveLink: 'https://vaxchain-client.vercel.app/',
      githubLink: 'https://github.com/Sabbir-Aahmed/vaxchain-client'
    },
    {
      title: 'Event Management System',
      description: 'A collaborative event management application with real-time updates and booking system',
      image: evora, // Use the imported variable
      technologies: ["Python", "Django", "PostgreSQL"],
      liveLink: 'https://evora-bzlm.onrender.com/',
      githubLink: 'https://github.com/Sabbir-Aahmed/EVO-RA'
    },
    {
      title: 'E-Commerce API',
      description: 'A backend e-commerce solution built with Django Rest API and comprehensive product management',
      image: phimart, // Use the imported variable
      technologies: ['Python', 'Django', 'Rest API', 'PostgreSQL'],
      liveLink: 'https://phimart-psi.vercel.app/api/v1/auth/',
      githubLink: 'https://github.com/Sabbir-Aahmed/PhiMart'
    },
  ];

  return (
    <section id="projects" className="section-padding bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                  onError={(e) => {
                    console.error(`Failed to load image for ${project.title}:`, project.image);
                  }}
                  onLoad={() => console.log(`Image loaded for ${project.title}:`, project.image)}
                />
                
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-indigo-900 text-indigo-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-indigo-400 transition duration-300"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-indigo-400 transition duration-300"
                  >
                    <FaGithub className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;