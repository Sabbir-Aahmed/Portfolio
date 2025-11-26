import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
  // React.useEffect(() => {
  //   document.documentElement.classList.add('dark');
  // }, []);
  

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 transition-colors duration-300">
        <Header />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </>
          } />
          
          <Route path="/resume" element={<Resume />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;