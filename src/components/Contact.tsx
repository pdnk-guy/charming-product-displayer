import React from 'react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-inter">Давайте работать вместе</h2>
        <p className="text-xl text-gray-600 mb-12">
          Открыт к обсуждению новых возможностей и проектов
        </p>
        <div className="flex flex-col gap-4 items-center">
          <a 
            href="mailto:contact@example.com" 
            className="text-xl hover:text-gray-600 transition-colors"
          >
            contact@example.com
          </a>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-black transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">Telegram</a>
          </div>
        </div>
      </div>
    </section>
  );
};