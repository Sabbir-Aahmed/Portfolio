import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: 'B.Sc in Computer Science & Engineering',
      grade: 'CGPA: 3.77',
      university: 'Uttara University',
      location: 'Dhaka, Bangladesh',
      period: '01-05-2022 to 31-04-2026',
      description: 'Currently pursuing my Bachelor\'s degree in Computer Science and Engineering with a strong academic record.',
      highlights: [
        'Focus on Data Structures & Algorithms',
        'Full Stack Web Development',
        'Database Management Systems',
        'Software Engineering Principles',
        'Computer Networks',
        'Artificial Intelligence'
      ],
      active: true,
      progress: 92
    }
  ];

  return (
    <section id="education" className="section-padding bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white bg-clip-text text-transparent mb-4">
            Education
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </div>

        {/* Horizontal Card Container */}
        <div className="max-w-5xl mx-auto">
          {educationData.map((edu) => (
            <div key={edu.id} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700 hover:border-indigo-500/30 transition-all duration-300">
              <div className="md:flex">
                {/* Left Side - University Info */}
                <div className="md:w-2/5 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 p-8 md:p-10 flex flex-col justify-center">
                  <div className="text-center md:text-left">
                    {/* University Logo/Icon */}
                    <div className="flex justify-center md:justify-start mb-6">
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 rounded-2xl shadow-lg">
                        <FaGraduationCap className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    
                    {/* University Name */}
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {edu.university}
                    </h3>
                    
                    {/* Location */}
                    <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300 mb-4">
                      <FaMapMarkerAlt className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                    
                    {/* Period */}
                    <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 text-sm">
                      <FaCalendarAlt className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    
                    {/* Active Badge */}
                    {edu.active && (
                      <div className="mt-6">
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium animate-pulse">
                          Currently Enrolled
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Side - Degree Details */}
                <div className="md:w-3/5 p-8 md:p-10">
                  {/* Degree and Grade */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-2xl font-bold text-white">
                        {edu.degree}
                      </h3>
                    </div>
                    
                    {/* Grade with Star */}
                    <div className="flex items-center gap-2 text-indigo-400 font-semibold text-lg mb-6">
                      <FaStar className="w-5 h-5" />
                      <span>{edu.grade}</span>
                      <span className="ml-2 text-gray-400 text-sm font-normal">
                        (Out of 4.00)
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Progress Bar */}
                  {edu.active && (
                    <div className="mb-8">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">Course Progress</span>
                        <span className="text-indigo-400 font-bold text-lg">{edu.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <div 
                          className="bg-indigo-600 h-3 rounded-full transition-all duration-1500 ease-out"
                          style={{ width: `${edu.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Start: May 2022</span>
                        <span>Expected: Apr 2026</span>
                      </div>
                    </div>
                  )}

                  {/* Highlights Grid */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Subjects & Focus Areas:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {edu.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-indigo-500/30 rounded-xl px-4 py-3 transition-all duration-300 group"
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-indigo-600 rounded-full group-hover:scale-150 transition-transform"></div>
                            <span className="text-gray-300 text-sm">{highlight}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Education;