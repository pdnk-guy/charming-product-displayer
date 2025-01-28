import React from 'react';

export const Experience = () => {
  const experiences = [
    {
      period: "2022 — настоящее время",
      role: "Product Owner",
      company: "Компания А",
      description: "Руководство разработкой продукта, определение стратегии развития, работа с командой разработки"
    },
    {
      period: "2020 — 2022",
      role: "Product Manager",
      company: "Компания Б",
      description: "Управление продуктовой разработкой, проведение исследований, формирование продуктовых метрик"
    },
    {
      period: "2018 — 2020",
      role: "Business Analyst",
      company: "Компания В",
      description: "Анализ бизнес-процессов, подготовка технических заданий, работа с заинтересованными сторонами"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-inter">Опыт работы</h2>
        <div className="max-w-3xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row gap-6 animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="md:w-1/3">
                <p className="text-gray-600">{exp.period}</p>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold mb-2">{exp.role}</h3>
                <p className="text-gray-600 mb-2">{exp.company}</p>
                <p className="text-gray-800">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};