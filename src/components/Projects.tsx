import React from 'react';

export const Projects = () => {
  const projects = [
    {
      title: "Проект 1",
      description: "Разработка и запуск нового продукта для автоматизации бизнес-процессов",
      results: ["Увеличение эффективности на 40%", "Сокращение времени обработки на 60%"]
    },
    {
      title: "Проект 2",
      description: "Редизайн существующего продукта и улучшение пользовательского опыта",
      results: ["Рост удовлетворенности пользователей на 35%", "Увеличение конверсии на 25%"]
    },
    {
      title: "Проект 3",
      description: "Запуск мобильного приложения для B2B сегмента",
      results: ["Привлечение 100+ корпоративных клиентов", "ROI проекта составил 300%"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-inter">Проекты</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <ul className="space-y-2">
                {project.results.map((result, idx) => (
                  <li key={idx} className="text-gray-800">• {result}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};