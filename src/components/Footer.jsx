import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/md-sabbir-ahmed/',
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/Sabbir-Aahmed',
    }
  ];

  return (
    <footer className="bg-gray-800 transition-colors duration-300 text-white py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="text-2xl font-bold mb-2">Sabbir</div>
            <p className="text-gray-400">Building amazing digital experiences</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110"
                aria-label={social.name}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-1">
            Md Sabbir Ahmed &copy; {currentYear}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;