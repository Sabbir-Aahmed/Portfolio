import { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaGlobe, FaDownload, FaAward, FaCode, FaGraduationCap, FaTrophy, FaUser } from 'react-icons/fa';
import { SiLeetcode, SiCodechef, SiCodeforces } from 'react-icons/si';
import manualResume from "../assets/Md Sabbir Ahmed resume.pdf";

const Resume = () => {
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const resumeId = '9fc8b28a-f2d9-43a4-a798-925c0dad6ec9';
  const API_URL = `https://portfolio-backend-xi-ochre.vercel.app/api/resumes/${resumeId}/`;

  useEffect(() => {
    fetchResume();
  }, []);

  const fetchResume = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch resume');
      }
      const data = await response.json();
      setResume(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = manualResume;
    link.download = 'Md_Sabbir_Ahmed_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center py-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-500 mx-auto"></div>
          <p className="mt-6 text-gray-400 text-lg">Loading resume...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center py-20">
        <div className="text-center max-w-md mx-4">
          <div className="text-red-400 text-6xl mb-6">⚠️</div>
          <h2 className="text-3xl font-bold text-white mb-4">Error Loading Resume</h2>
          <p className="text-gray-400 mb-8">{error}</p>
          <button
            onClick={fetchResume}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg transition-colors text-lg"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!resume) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">No Resume Found</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Resume Card */}
        <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden mt-16">
          
          {/* Header Section */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 lg:p-12 text-white">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              <div className="text-center lg:text-left flex-1">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">{resume.name}</h1>
                <p className="text-xl lg:text-2xl text-indigo-100 mb-6">Full Stack Developer</p>
                <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 lg:gap-6">
                  {resume.email && (
                    <div className="flex items-center justify-center lg:justify-start">
                      <FaEnvelope className="mr-3 text-lg" />
                      <a href={`mailto:${resume.email}`} className="hover:text-indigo-200 transition-colors text-lg">
                        {resume.email}
                      </a>
                    </div>
                  )}
                  {resume.phone && (
                    <div className="flex items-center justify-center lg:justify-start">
                      <FaPhone className="mr-3 text-lg" />
                      <span className="text-lg">{resume.phone}</span>
                    </div>
                  )}
                  {resume.location && (
                    <div className="flex items-center justify-center lg:justify-start">
                      <FaMapMarkerAlt className="mr-3 text-lg" />
                      <span className="text-lg">{resume.location}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <button
                onClick={handleDownload}
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold flex items-center gap-3 transition-colors transform hover:scale-105 text-lg whitespace-nowrap"
              >
                <FaDownload className="text-xl" />
                Download PDF Version
              </button>
            </div>
          </div>

          <div className="p-6 lg:p-10">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              
              {/* Left Column - Static & Competitive Programming */}
              <div className="lg:col-span-1 space-y-8">
                
                {/* Social Links */}
                <div className="bg-gray-700 rounded-xl p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                    <FaUser className="text-indigo-400 text-2xl" />
                    Social Links
                  </h3>
                  <div className="space-y-4">
                    {resume.github_url && (
                      <a href={resume.github_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-gray-600 rounded-lg hover:bg-gray-500 transition-colors">
                        <FaGithub className="text-2xl text-gray-300" />
                        <span className="text-gray-300 text-lg">GitHub</span>
                      </a>
                    )}
                    {resume.linkedin_url && (
                      <a href={resume.linkedin_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-gray-600 rounded-lg hover:bg-gray-500 transition-colors">
                        <FaLinkedin className="text-2xl text-blue-400" />
                        <span className="text-gray-300 text-lg">LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Competitive Programming */}
                <div className="bg-gray-700 rounded-xl p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                    <FaTrophy className="text-yellow-400 text-2xl" />
                    Competitive Programming
                  </h3>
                  <div className="space-y-4">
                    <a href="https://leetcode.com/u/mdsabbir5820" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-gray-600 rounded-lg hover:bg-gray-500 transition-colors">
                      <SiLeetcode className="text-orange-500 text-2xl" />
                      <span className="text-gray-300 text-lg">LeetCode</span>
                    </a>
                    <a href="https://www.codechef.com/users/mdsabbir5820" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-gray-600 rounded-lg hover:bg-gray-500 transition-colors">
                      <SiCodechef className="text-brown-400 text-2xl" />
                      <span className="text-gray-300 text-lg">CodeChef</span>
                    </a>
                    <a href="https://codeforces.com/profile/Sabbir5820" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-gray-600 rounded-lg hover:bg-gray-500 transition-colors">
                      <SiCodeforces className="text-red-500 text-2xl" />
                      <span className="text-gray-300 text-lg">Codeforces</span>
                    </a>
                  </div>
                </div>

                {/* Achievements */}
                <div className="bg-gray-700 rounded-xl p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                    <FaAward className="text-yellow-400 text-2xl" />
                    Achievements
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <FaAward className="text-green-400 mt-1 text-xl flex-shrink-0" />
                      <p className="text-gray-300 text-base leading-relaxed">
                        Completed CS Fundamental & Software development course
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <FaAward className="text-blue-400 mt-1 text-xl flex-shrink-0" />
                      <p className="text-gray-300 text-base leading-relaxed">
                        Received the Dean's Award for outstanding academic performance
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <FaCode className="text-purple-400 mt-1 text-xl flex-shrink-0" />
                      <p className="text-gray-300 text-base leading-relaxed">
                        Solved 150+ problems on various online judges
                      </p>
                    </div>
                  </div>
                </div>

                {/* Languages */}
                <div className="bg-gray-700 rounded-xl p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                    <FaGlobe className="text-indigo-400 text-2xl" />
                    Languages
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-300 text-lg">Bangla</span>
                      <span className="bg-green-900 text-green-100 px-3 py-2 rounded-lg text-sm font-medium">Native</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-300 text-lg">English</span>
                      <span className="bg-blue-900 text-blue-100 px-3 py-2 rounded-lg text-sm font-medium">Professional</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column - Dynamic Content from API */}
              <div className="lg:col-span-2 space-y-8 lg:space-y-10">
                
                {/* Career Objective */}
                {resume.summary && (
                  <div className="bg-gray-700 rounded-xl p-6 lg:p-8">
                    <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-6 border-b-2 border-indigo-500 pb-4">
                      Career Objective
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {resume.summary}
                    </p>
                  </div>
                )}

                {/* Skills */}
                {resume.skills && resume.skills.length > 0 && (
                  <div className="bg-gray-700 rounded-xl p-6 lg:p-8">
                    <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-6 border-b-2 border-indigo-500 pb-4">
                      Technical Skills
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                      {resume.skills.map((skill, index) => (
                        <div key={index} className="bg-gray-600 p-4 lg:p-6 rounded-xl border border-gray-500 hover:border-indigo-500 transition-colors">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-white text-lg">{skill.name}</span>
                            <span className={`text-sm px-3 py-2 rounded-full font-medium ${
                              skill.level === 'expert' ? 'bg-green-900 text-green-100' :
                              skill.level === 'advanced' ? 'bg-blue-900 text-blue-100' :
                              skill.level === 'intermediate' ? 'bg-yellow-900 text-yellow-100' :
                              'bg-gray-500 text-gray-100'
                            }`}>
                              {skill.level}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Projects */}
                {resume.resume_projects && resume.resume_projects.length > 0 && (
                  <div className="bg-gray-700 rounded-xl p-6 lg:p-8">
                    <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-6 border-b-2 border-indigo-500 pb-4">
                      Projects
                    </h2>
                    <div className="space-y-6 lg:space-y-8">
                      {resume.resume_projects.map((project, index) => (
                        <div key={index} className="bg-gray-600 p-6 lg:p-8 rounded-xl border border-gray-500 hover:border-indigo-500 transition-colors">
                          <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">{project.name}</h3>
                          
                          {project.description && (
                            <p className="text-gray-300 text-lg mb-6 leading-relaxed">{project.description}</p>
                          )}
                          
                          {project.technologies && project.technologies.length > 0 && (
                            <div className="flex flex-wrap gap-2 lg:gap-3 mb-6">
                              {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="bg-indigo-900 text-indigo-100 px-4 py-2 rounded-full text-base font-medium">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                          
                          <div className="flex flex-wrap gap-4 lg:gap-6">
                            {project.project_url && (
                              <a href={project.project_url} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-2 text-lg transition-colors">
                                <FaGlobe className="text-lg" />
                                Live Demo
                              </a>
                            )}
                            {project.github_client && (
                              <a href={project.github_client} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white flex items-center gap-2 text-lg transition-colors">
                                <FaGithub className="text-lg" />
                                Client Code
                              </a>
                            )}
                            {project.github_server && (
                              <a href={project.github_server} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white flex items-center gap-2 text-lg transition-colors">
                                <FaGithub className="text-lg" />
                                Server Code
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Education */}
                {resume.educations && resume.educations.length > 0 && (
                  <div className="bg-gray-700 rounded-xl p-6 lg:p-8">
                    <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-6 border-b-2 border-indigo-500 pb-4">
                      Education
                    </h2>
                    <div className="space-y-6 lg:space-y-8">
                      {resume.educations.map((education, index) => (
                        <div key={index} className="bg-gray-600 p-6 lg:p-8 rounded-xl border border-gray-500 hover:border-indigo-500 transition-colors">
                          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-4">
                            <div className="flex-1">
                              <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2">{education.institution}</h3>
                              <p className="text-lg lg:text-xl text-indigo-400">
                                {education.degree}
                                {education.field_of_study && ` in ${education.field_of_study}`}
                              </p>
                            </div>
                            <span className="text-base text-gray-400 bg-gray-700 px-4 py-2 rounded-lg">
                              {formatDate(education.start_date)} - {formatDate(education.end_date)}
                              {education.current && ' (Current)'}
                            </span>
                          </div>
                          
                          {education.description && (
                            <p className="text-gray-300 text-lg leading-relaxed">{education.description}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;