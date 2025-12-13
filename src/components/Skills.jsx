import React from 'react';
import { 
  FaReact, 
  FaJs, 
  FaPython, 
  FaGitAlt, 
  FaGithub,
  FaCss3Alt 
} from 'react-icons/fa';
import { 
  SiHtml5, 
  SiC, 
  SiCplusplus, 
  SiDjango, 
  SiTailwindcss, 
  SiBootstrap, 
  SiPostgresql, 
  SiMysql,
  SiVercel,
  SiNetlify,
  SiSupabase 
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'React', level: 90, icon: FaReact, color: 'text-blue-400' },
    { name: 'Django', level: 90, icon: SiDjango, color: 'text-green-400' },
    { name: 'JavaScript', level: 92, icon: FaJs, color: 'text-yellow-400' },
    { name: 'Html', level: 100, icon: SiHtml5, color: 'text-blue-300' },
    { name: 'CSS', level: 95, icon: FaCss3Alt, color: 'text-blue-500' },
    { name: 'Tailwind CSS', level: 95, icon: SiTailwindcss, color: 'text-cyan-400' },
    { name: 'Bootstrap', level: 95, icon: SiBootstrap, color: 'text-green-400' },
    { name: 'Python', level: 85, icon: FaPython, color: 'text-blue-300' },
    { name: 'C', level: 90, icon: SiC, color: 'text-blue-600' },
    { name: 'C++', level: 95, icon: SiCplusplus, color: 'text-blue-700' },
    { name: 'PostgreSQL', level: 85, icon: SiPostgresql, color: 'text-blue-400' },
    { name: 'MySQL', level: 80, icon: SiMysql, color: 'text-blue-500' },
    { name: 'Git', level: 88, icon: FaGitAlt, color: 'text-orange-600' },
    { name: 'GitHub', level: 90, icon: FaGithub, color: 'text-gray-500 dark:text-white' },
    { name: 'Vercel', level: 85, icon: SiVercel, color: 'text-black dark:text-white' },
    { name: 'Supabase', level: 80, icon: SiSupabase, color: 'text-green-500' },
    { name: 'Netlify', level: 85, icon: SiNetlify, color: 'text-teal-500' },
    
  ];

  const animationTypes = [
    'fade-up', 'fade-down', 'fade-left', 'fade-right',
    'zoom-in', 'zoom-in-up', 'flip-left', 'flip-right'
  ];

  return (
    <section id="skills" className="section-padding bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto p-10">
        <h2 
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const animationType = animationTypes[index % animationTypes.length];
            
            return (
              <div 
                key={skill.name} 
                className="bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-lg transition duration-300 transform hover:scale-105"
                data-aos={animationType}
                data-aos-delay={100 + (index * 100)}
                data-aos-duration="800"
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
                    data-aos="zoom-in-left"
                    data-aos-delay={500 + (index * 100)}
                    data-aos-duration="600"
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;