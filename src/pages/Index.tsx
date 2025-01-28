import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Experience } from '../components/Experience';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="py-6 text-center text-gray-600 border-t border-gray-200">
        <p>© 2024 Guy Darzhi. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Index;