import React from 'react';

export const Contacts = () => {
  return (
    <section id="contacts" className="py-20 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-inter">Контакты</h2>
        <div className="space-y-4 text-lg">
          <p>
            📮 <a href="mailto:guydarzhi@yahoo.com" className="text-blue-600 hover:text-blue-800 transition-colors">
              guydarzhi@yahoo.com
            </a>
          </p>
          <p>
            ↗️ <a href="https://t.me/guydarzhi" className="text-blue-600 hover:text-blue-800 transition-colors">
              @guydarzhi
            </a> — это телеграм.
          </p>
          <p>
            📞 <a href="tel:+79104895129" className="text-blue-600 hover:text-blue-800 transition-colors">
              +7 910 489 5129
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};