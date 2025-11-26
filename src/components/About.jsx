import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import sabbir from "../assets/sabbir.jpg"

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
      easing: 'ease-out-cubic',
      disable: window.innerWidth < 768 
    });

    AOS.refresh();
  }, []);

  return (
    <section id="about" className="section-padding bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto p-10">
        <h2 
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Container - Slides in from left */}
          <div 
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            <img
              src={sabbir}
              alt="About Me"
              className="rounded-lg shadow-lg w-full h-130 object-cover transform hover:scale-105 transition duration-300"
            />
          </div>
          
          {/* Content Container - Slides in from right */}
          <div 
            className="space-y-6"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Hello! I'm Sabbir, a passionate full-stack developer with over 1 year of experience 
              creating digital solutions. I specialize in React, Django, and modern web technologies.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing my knowledge through blog posts and tutorials.
            </p>
            
            <div 
              className="grid grid-cols-2 gap-4 mt-8"
              data-aos="zoom-in"
              data-aos-delay="500"
              data-aos-duration="600"
            >
              <div className="text-center p-4 bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <div className="text-2xl font-bold text-indigo-400">15+</div>
                <div className="text-gray-300">Projects</div>
              </div>
              <div className="text-center p-4 bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <div className="text-2xl font-bold text-indigo-400">1+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;