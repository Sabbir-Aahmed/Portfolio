import { useState } from 'react';
import { FaCertificate, FaExternalLinkAlt, FaCalendar, FaAward, FaCode } from 'react-icons/fa';
import dean from "../assets/Dean's award.jpg";
import phitron from "../assets/Phitron.png";

const Certifications = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(0);

  const certificates = [
    {
      id: 1,
      title: "CS Fundamentals Course",
      issuer: "Phitron",
      image: phitron,
      downloadUrl: "https://phitron.io/verification?validationNumber=PHBATCH66222991010",
      category: "Professional Certification",
      tags: ["Programming", "Algorithms", "Problem Solving", "Software Development"],
      description: "Completed comprehensive Computer Science Fundamentals course covering Data Structures, Algorithms, Problem Solving and Software Development. This certification validates strong foundational knowledge in computer science principles."
    },
    {
      id: 2,
      title: "Dean's Honor Award",
      issuer: "Uttara University",
      image: dean,
      downloadUrl: "https://drive.google.com/file/d/1tUBZXwRlEagtHbQ7PvLI0K1qIvuWTCd-/view",
      category: "Academic Excellence",
      tags: ["Dean's List", "GPA 3.98", "Academic Award"],
      description: "Awarded for outstanding academic achievement by obtaining GPA 3.98/4.00 in Spring, Summer & Fall 2023 semesters. This prestigious award recognizes top-performing students in the Computer Science & Engineering program."
    },
  ];

  return (
    <section id="certifications" className="section-padding bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Certifications & Awards
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Recognitions and certifications that validate my skills and achievements
        </p>

        {/* Certificate Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {certificates.map((cert, index) => (
            <button
              key={cert.id}
              onClick={() => setSelectedCertificate(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCertificate === index
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2">
                {cert.category === 'Academic Excellence' ? (
                  <FaAward className="w-4 h-4" />
                ) : (
                  <FaCertificate className="w-4 h-4" />
                )}
                {cert.title}
              </div>
            </button>
          ))}
        </div>

        {/* Main Certificate Display */}
        <div className="bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
          <div className="md:flex">
            {/* Left Side - Certificate Image */}
            <div className="md:w-1/2 p-6 flex flex-col">
              <div className="mb-6">
                <div className="relative bg-gray-600 rounded-xl overflow-hidden h-64 md:h-80">
                  {/* Certificate Image */}
                  <img
                    src={certificates[selectedCertificate].image}
                    alt={certificates[selectedCertificate].title}
                    className="w-full h-full object-cover"
                  />
                  
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-auto">
                <a
                  href={certificates[selectedCertificate].downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition duration-300"
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  View Full Certificate
                </a>
              </div>
            </div>

            {/* Right Side - Certificate Details */}
            <div className="md:w-1/2 p-6 md:border-l border-gray-600">
              {/* Certificate Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  {certificates[selectedCertificate].category === 'Academic Excellence' ? (
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-2 rounded-lg">
                      <FaAward className="w-6 h-6 text-white" />
                    </div>
                  ) : (
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-lg">
                      <FaCode className="w-6 h-6 text-white" />
                    </div>
                  )}
                  <span className="text-sm font-medium text-gray-300 bg-gray-600 px-3 py-1 rounded-full">
                    {certificates[selectedCertificate].category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">
                  {certificates[selectedCertificate].title}
                </h3>
                
                <p className="text-gray-300 text-lg">
                  {certificates[selectedCertificate].issuer}
                </p>
              </div>

             

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Description:</h4>
                <p className="text-gray-300 leading-relaxed">
                  {certificates[selectedCertificate].description}
                </p>
              </div>

              {/* Tags */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Highlights:</h4>
                <div className="flex flex-wrap gap-2">
                  {certificates[selectedCertificate].tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-600 hover:bg-gray-500 text-white rounded-xl px-2 py-2 transition-all duration-300 group"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;