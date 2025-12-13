import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '/resume' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href, isHash) => {
    if (isHash) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-800 transition-colors duration-300 backdrop-blur-sm z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-white hover:text-indigo-400 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            <span style={{ 
                fontFamily: "'Righteous', sans-serif",
                background: "linear-gradient(to right, #818cf8, #c084fc)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                fontWeight: "bold",
                fontSize: "2rem"
              }}>
                Sabbir
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isHash = item.href.startsWith('#');
              if (isHash) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-indigo-400 font-medium transition duration-300 hover:scale-105"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href, true);
                    }}
                  >
                    {item.name}
                  </a>
                );
              }
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-300 hover:text-indigo-400 font-medium transition duration-300 hover:scale-105"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              className="p-2 text-gray-300 hover:text-indigo-400 transition duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const isHash = item.href.startsWith('#');
                if (isHash) {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-300 hover:text-indigo-400 font-medium transition duration-300 py-2"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href, true);
                      }}
                    >
                      {item.name}
                    </a>
                  );
                }
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-300 hover:text-indigo-400 font-medium transition duration-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;