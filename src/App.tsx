import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import AnimationProjects from './components/AnimationProjects';
import UIUXProjects from './components/UIUXProjects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <AnimationProjects />
        <UIUXProjects />
        <Experience />
        <Skills />
        <Research />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;