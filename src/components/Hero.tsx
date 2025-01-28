import React from 'react';

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center py-10 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-inter">
            Product Owner
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Создаю и развиваю цифровые продукты, которые решают реальные проблемы пользователей
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Связаться
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};