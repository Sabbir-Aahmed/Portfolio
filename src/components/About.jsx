import dp from "../assets/dp.jpeg"

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 animate-fadeInUp">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInUp">
            <img
              src={dp}
              alt="About Me"
              className="rounded-lg shadow-lg w-full h-80 object-cover transform hover:scale-105 transition duration-300"
            />
          </div>
          
          <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg text-gray-300 leading-relaxed">
              Hello! I'm Sabbir, a passionate full-stack developer with over 1 year of experience 
              creating digital solutions. I specialize in React, Django, and modern web technologies.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing my knowledge through blog posts and tutorials.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
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