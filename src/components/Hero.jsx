import { useState, useEffect } from "react";
import dp from "../assets/dp.jpeg";
import { Link } from 'react-router';
import resume from "../assets/Md Sabbir Ahmed resume.pdf";
import {
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaArrowRight

} from "react-icons/fa";
import { SiCodechef, SiCodeforces, SiLeetcode } from "react-icons/si";

const Typewriter = ({ texts, speed = 50, delay = 1000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing mode
        if (currentIndex < texts[currentTextIndex].length) {
          setCurrentText(texts[currentTextIndex].slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, delay);
        }
      } else {
        if (currentIndex > 0) {
          setCurrentText(texts[currentTextIndex].slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, isPaused, currentTextIndex, texts, speed, delay]);

  return (
    <span className="inline-block">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Hero = () => {
  const professions = [
    "Full Stack Developer",
    "React Developer",
    "Django Developer",
    "Software Engineer"
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center section-padding pt-20 bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto text-center p-10">
        {/* Name - Static */}
        <div className="mb-4">

          <h2 className="inline-block text-2xl md:text-4xl font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
            Hi! I'm
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Md Sabbir Ahmed
          </h1>
        </div>

        {/* Profession*/}
        <div className="mb-8 min-h-[3rem] md:min-h-[4rem] flex items-center justify-center">
          <h2 className="text-xl md:text-2xl text-gray-300 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            <Typewriter 
              texts={professions} 
              speed={60} 
              delay={1500} 
            />
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
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#projects');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            View My Work
            <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href={resume}
            download
            className="border border-indigo-600 text-indigo-400 hover:bg-indigo-600 hover:text-white font-medium py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <FaFileDownload className="w-4 h-4" />
            Download Resume
          </a>
        </div>

        <div>
          <p className="text-gray-400 mb-6">Find me on</p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Sabbir-Aahmed"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-4 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition duration-300 transform hover:scale-110 hover:shadow-lg"
              title="Github Profile"
            >
              <FaGithub className="w-6 h-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/md-sabbir-ahmed/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-4 rounded-full text-gray-300 hover:text-white hover:bg-blue-600 transition duration-300 transform hover:scale-110 hover:shadow-lg"
              title="Linkedin Profile"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>

            <a
              href="https://leetcode.com/u/mdsabbir5820/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-4 rounded-full text-gray-300 hover:text-white hover:bg-yellow-600 transition duration-300 transform hover:scale-110 hover:shadow-lg"
              title="LeetCode Profile"
            >
              <SiLeetcode className="w-6 h-6" />
            </a>

            <a
              href="https://codeforces.com/profile/Sabbir58"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-4 rounded-full text-gray-300 hover:text-white hover:bg-red-600 transition duration-300 transform hover:scale-110 hover:shadow-lg"
              title="Codeforces Profile"
            >
              <SiCodeforces className="w-6 h-6" />
            </a>

            <a
              href="https://www.codechef.com/users/mdsabbir5820"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-4 rounded-full text-gray-300 hover:text-white hover:bg-brown-600 transition duration-300 transform hover:scale-110 hover:scale-110 hover:shadow-lg"
              title="CodeChef Profile"
            >
              <SiCodechef className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;