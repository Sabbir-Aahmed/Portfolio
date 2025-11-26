import { useState, useEffect } from "react";
import dp from "../assets/dp.jpeg";
import { Link } from 'react-router'
import {
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaArrowRight,
} from "react-icons/fa";

const Typewriter = ({ text, speed = 50, delay = 0 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        const cursorInterval = setInterval(() => {
          setShowCursor(prev => !prev);
        }, 500);
        
        return () => clearInterval(cursorInterval);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed]);

  // Blink cursor during typing
  useEffect(() => {
    if (currentIndex < text.length) {
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
      
      return () => clearInterval(cursorInterval);
    }
  }, [currentIndex, text.length]);

  return (
    <span className="inline-block">
      {displayText}
      <span className={showCursor ? "opacity-100" : "opacity-0"}>|</span>
    </span>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center section-padding pt-20 bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto text-center p-10">
        {/* Profile Picture */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 animate-pulse-slow"></div>
          <div className="relative rounded-full w-full h-full overflow-hidden border-4 border-gray-900">
            <img
              src={dp}
              alt="sabbir"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Typing Text */}
        <div className="mb-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            <Typewriter text="Md Sabbir Ahmed" speed={100} />
          </h1>
        </div>

        <div className="mb-8">
          <h2 className="text-xl md:text-2xl text-gray-300 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            <Typewriter text="Full Stack Developer" speed={80} delay={1500} />
          </h2>
        </div>

        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          I create beautiful, functional web applications with modern
          technologies. Passionate about clean code and exceptional user
          experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105 group flex items-center justify-center gap-2"
          >
            View My Work
            <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <Link
            to="/resume"
            className="border border-indigo-600 text-indigo-400 hover:bg-indigo-600 hover:text-white font-medium py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <FaFileDownload className="w-4 h-4" />
            View Resume
          </Link>
        </div>

        <div>
          <p className="text-gray-400 mb-6">Find me on</p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Sabbir-Aahmed"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-4 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/md-sabbir-ahmed/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-4 rounded-full text-gray-300 hover:text-white hover:bg-blue-600 transition duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;