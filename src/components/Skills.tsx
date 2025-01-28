import React from 'react';

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 font-inter">Навыки</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">💻 Технологии</h3>
            <ul className="space-y-2 text-gray-600">
              <li>jira/trello/slack/google docs/figma/notion(rip)/miro(<span className="font-bold">RIP</span>)/discord/glide</li>
              <li>ЯМетрика/Google Analytics</li>
              <li>УВЕРЕННЫЙ ПОЛЬЗОВАТЕЛЬ ПК И КОФЕМАШИНЫ 😜</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">🤝 Компетенции</h3>
            <ul className="space-y-2 text-gray-600">
              <li>планирование и контроль;</li>
              <li>формирование команды, мотивация персонала;</li>
              <li>управление гибкими командами;</li>
              <li>принятие решений на основе аналитики;</li>
              <li>стремление к достижению результата.</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">👀 Хобби</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Кино;</li>
              <li>Музыкальные и кино-квизы;</li>
              <li>Путешествия;</li>
              <li>Люблю готовить;</li>
              <li>Интернет (активный пользователь соцсетей, люблю наблюдать за происходящим и писать/снимать).</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};