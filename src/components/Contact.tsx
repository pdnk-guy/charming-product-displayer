import React from 'react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-inter">Давайте работать вместе</h2>
        <p className="text-xl text-gray-600 mb-12">
          Открыт к обсуждению новых возможностей и проектов
        </p>
        <div className="flex flex-col gap-6 items-center">
          <a 
            href="mailto:guydarzhi@yahoo.com" 
            className="text-xl hover:text-blue-600 transition-colors"
          >
            guydarzhi@yahoo.com
          </a>
          <a 
            href="https://t.me/guydarzhi" 
            className="text-xl hover:text-blue-600 transition-colors"
          >
            @guydarzhi — это телеграм
          </a>
          <a 
            href="tel:+79104895129" 
            className="text-xl hover:text-blue-600 transition-colors"
          >
            +7 910 489 5129
          </a>
        </div>
      </div>
    </section>
  );
};