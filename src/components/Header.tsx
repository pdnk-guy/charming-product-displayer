import React from 'react';

export const Header = () => {
  return (
    <header className="py-6 px-4 md:px-6 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold font-inter">Александр Гайдаржи<span className="block text-sm text-gray-600 mt-1">Senior Product Owner</span></h1>
        <nav>
          <ul className="flex gap-6">
            <li><a href="#experience" className="text-gray-600 hover:text-black transition-colors">Опыт</a></li>
            <li><a href="#projects" className="text-gray-600 hover:text-black transition-colors">Проекты</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-black transition-colors">Контакты</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};