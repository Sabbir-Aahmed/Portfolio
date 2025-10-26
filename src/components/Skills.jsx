import React from 'react';
import { 
  FaReact, 
  FaJs, 
  FaNodeJs, 
  FaPython,
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiHtml5,
  SiBootstrap,
  SiDjango
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'React', level: 90, icon: FaReact, color: 'text-blue-400' },
    { name: 'JavaScript', level: 85, icon: FaJs, color: 'text-yellow-400' },
    { name: 'Html', level: 80, icon: SiHtml5, color: 'text-blue-300' },
    { name: 'Django', level: 90, icon: SiDjango, color: 'text-green-400' },
    { name: 'Tailwind CSS', level: 95, icon: SiTailwindcss, color: 'text-cyan-400' },
    { name: 'Python', level: 80, icon: FaPython, color: 'text-blue-300' },
    { name: 'Bootstrap', level: 65, icon: SiBootstrap, color: 'text-green-400' },
    { name: 'PostgreSQL', level: 75, icon: SiPostgresql, color: 'text-blue-400' },
  ];

  return (
    <section id="skills" className="section-padding bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 animate-fadeInUp">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-lg transition duration-300 transform hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <skill.icon className={`w-6 h-6 ${skill.color}`} />
                  <span className="font-medium text-gray-300">{skill.name}</span>
                </div>
                <span className="text-indigo-400 font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className="bg-indigo-600 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;