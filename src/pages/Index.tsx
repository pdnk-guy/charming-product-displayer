import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { CV } from '../components/CV';
import { Experience } from '../components/Experience';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { Contact } from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <main>
        <Hero />
        <CV />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="py-6 text-center text-gray-600 border-t border-gray-200">
        <p>© 2024 Guy Darzhi. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Index;