import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const Projects = () => {
  const projects = [
    {
      title: "RadioGaga travel",
      description: "co-founder - стартап",
      content: "Самостоятельно создал в Glide мобильное приложение и web-версию сайта для travel-агентства со встроенной CRM-системой для учета пользователей и отправки Push уведомлений. От прототипа и дизайна до финальной верстки"
    },
    {
      title: "StartGame",
      description: "co-founder/CPO/Head of Product - стартап",
      content: "Play-to-Earn (P2E) стартап. Создал площадку для проведения киберспортивных мероприятий на базе блокчейн технологий для Азиатского рынка и рынка Латинской Америки. Основные функции - управление продуктом полного цикла. Управление командой и подключение к проекту новых людей. Анализ конкурентов, рынок. Формирование бизнес-модели. Проводение CustDev, сбор фидбек от пользователей, клиентов. Принятие решения о развитии продукта. Координация команды разработки. Инициация и участие в выстраивании внутренних бизнес-процессов.",
      images: [
        "/lovable-uploads/2b1f96c0-12b9-410a-981a-a91fed4bfbde.png",
        "/lovable-uploads/c2f0d37d-e200-4044-b515-9dca54e6f8a3.png",
        "/lovable-uploads/60b2bf9e-715b-421e-9b37-fd6f0a120585.png"
      ]
    },
    {
      title: "NewtonLab",
      description: "co-founder/CTO - стартап",
      content: "NewtonLab - компания, специализирующаяся на разработке программного обеспечения на основе блокчейн технологий и предоставлении решений для бизнеса и государственного сектора по всему миру. Предоставляет широкий спектр услуг, включая разработку и аудит смарт-контрактов, создание и адаптацию блокчейн-платформ, разработку децентрализованных приложений и консультации по реализации блокчейн-решений, помогаем оптимизировать бизнес-процессы и повышать эффективность работы путем применения передовых технологий.",
      projects: [
        "Nifi маркенплейс",
        "Paladin платформа сбора информации с блокчейна по кошелькам",
        "Numiz двухстороннее NFT",
        "Кошелек surf",
        "Игра Арена с использованием блокчейн",
        "DeVote голосование на блокчейне",
        "Экология NFT платформа",
        "Платформа Блокчейн Привратник",
        "Платформа NFT Диплом Свидетельство Грамота"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-inter">Проекты</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-600">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{project.description}</p>
                  </div>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="content">
                    <AccordionTrigger className="text-left">
                      Подробнее
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="text-gray-700 mt-2">
                        <p className="mb-4">{project.content}</p>
                        {project.images && (
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
                            {project.images.map((image, idx) => (
                              <Dialog key={idx}>
                                <DialogTrigger>
                                  <img
                                    src={image}
                                    alt={`${project.title} screenshot ${idx + 1}`}
                                    className="w-full h-auto rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                                  />
                                </DialogTrigger>
                                <DialogContent className="max-w-[90vw] max-h-[90vh] p-0">
                                  <img
                                    src={image}
                                    alt={`${project.title} screenshot ${idx + 1}`}
                                    className="w-full h-full object-contain"
                                  />
                                </DialogContent>
                              </Dialog>
                            ))}
                          </div>
                        )}
                        {project.projects && (
                          <>
                            <h4 className="font-semibold mb-2">Трек-рекорд реализованных проектов:</h4>
                            <ul className="list-disc pl-5 space-y-1">
                              {project.projects.map((subProject, idx) => (
                                <li key={idx}>{subProject}</li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};