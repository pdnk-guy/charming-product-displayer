import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-inter">Релевантный опыт</h2>
          <p className="text-gray-600 text-sm mt-2">(подробнее от раннего к последнему)</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="uremont">
              <AccordionTrigger className="text-left">
                <div>
                  <h3 className="text-xl font-semibold text-orange-500">Uremont.com</h3>
                  <p className="text-gray-600 text-sm">Руководитель проекта, исполнительный директор 2018-2021 год</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-left space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Dialog>
                    <DialogTrigger>
                      <img 
                        src="/lovable-uploads/b1f07ddd-3ae2-4e81-91ce-31dfc3123410.png" 
                        alt="Uremont сервис" 
                        className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                      />
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <img 
                        src="/lovable-uploads/b1f07ddd-3ae2-4e81-91ce-31dfc3123410.png" 
                        alt="Uremont сервис" 
                        className="w-full h-auto"
                      />
                    </DialogContent>
                  </Dialog>
                  
                  <Dialog>
                    <DialogTrigger>
                      <img 
                        src="/lovable-uploads/308291d9-cf4d-48ba-827b-eba1ad7fca5b.png" 
                        alt="Uremont страхование" 
                        className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                      />
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <img 
                        src="/lovable-uploads/308291d9-cf4d-48ba-827b-eba1ad7fca5b.png" 
                        alt="Uremont страхование" 
                        className="w-full h-auto"
                      />
                    </DialogContent>
                  </Dialog>
                  
                  <Dialog>
                    <DialogTrigger>
                      <img 
                        src="/lovable-uploads/3f6efdf7-2f0e-44f9-9591-7e92c948bb87.png" 
                        alt="Uremont история автомобиля" 
                        className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                      />
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <img 
                        src="/lovable-uploads/3f6efdf7-2f0e-44f9-9591-7e92c948bb87.png" 
                        alt="Uremont история автомобиля" 
                        className="w-full h-auto"
                      />
                    </DialogContent>
                  </Dialog>
                </div>

                <p className="text-gray-800">
                  <strong>UREMONT</strong> — крупнейшая в Восточной Европе платформа по выбору и бронированию автосервисов. Проект объединил на своей площадке более 16 000 СТО и автодилеров, свыше миллиона автовладельцев, более 20 страховых компаний, 5 банков и поставщиков автозапчастей.
                </p>

                <p className="text-gray-800">
                  Чтобы упростить процедуру взаимодействия между игроками авторынка, мы разработали программное обеспечение, которое переводит все процессы в онлайн формат.
                </p>
                
                <div>
                  <h4 className="font-bold text-orange-500 mb-2">Функции:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-800">
                    <li>Разработка системы управления компанией (бизнес-процессы, регламенты, описание функционала сотрудников, KPI)</li>
                    <li>Создание бизнес-процессов в новых отделах компании</li>
                    <li>Управление операционными процессами с целью обеспечения их результативности</li>
                    <li>Обеспечение эффективного взаимодействия между удаленными офисами компании</li>
                    <li>Участие в выставках и конференциях</li>
                    <li>Переговоры с ЛПР ключевых партнеров</li>
                    <li>Контроль качества и сроков исполнения по проекту, мониторинг финансовой дисциплины проекта</li>
                    <li>Координация проектной деятельности</li>
                    <li>Контроль выполнения бизнесом целевых показателей эффективности</li>
                    <li>Анализ рынка и конкурентов</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-orange-500 mb-2">Достижения:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-800">
                    <li>В короткий срок сформировал и запустил отдел по работе с гос. контрактами (44-ФЗ и 223-ФЗ). За первый квартал компания выиграли 7 долгосрочных контрактов</li>
                    <li>Успешно прошел отбор на резидентуру в крупнейший инновационный центр на территории Российской Федерации – СКОЛКОВО</li>
                    <li>Вышли на рынок B2B по обслуживанию автопарков. Провел переговоры и успешно подключил крупные логистические компании на обслуживание ("4 сезона", "Деловые Линии")</li>
                    <li>Успешно проведена интеграция с мобильным приложением АЗС ГАЗПРОМНЕФТЬ</li>
                    <li>Вышли на рынок Белоруссии и Казахстана</li>
                    <li>Запустил магазин автозапчастей (online) на базе портала — (пилотный запуск на территории Москвы и МО+Санкт-Петербург)</li>
                    <li>Запустил в работу услугу по продаже страховых продуктов (ЕОСАГО, КАСКО)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-orange-500 mb-2">По итогу 2020 года:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-800">
                    <li>Портал посетили около 3 млн автовладельцев</li>
                    <li><strong>Премия рунета</strong>, Национальная премия за вклад в развитие российского сегмента сети Интернет. Победитель в номинации «Экономика и бизнес»</li>
                    <li><strong>Цифровой прорыв года</strong> Это масштабное соревнование для профессионалов IT-отрасли, один из лучших отраслевых конкурсов страны. Победитель в номинации <strong>Информационный прорыв</strong></li>
                    <li>Лауреаты премии <strong>IT-РЕВОЛЮЦИЯ в автобизнесе</strong></li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="rosbank">
              <AccordionTrigger className="text-left">
                <div>
                  <h3 className="text-xl font-semibold text-orange-500">РОСГОССТРАХ Банк</h3>
                  <p className="text-gray-600 text-sm">Директор по созданию и развитию цифровые проектов, 2021 год</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-left space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <Dialog>
                    <DialogTrigger>
                      <img 
                        src="/lovable-uploads/30ce2a92-c79b-4f64-8e33-1506c4ea005d.png" 
                        alt="БанкАвто карточка автомобиля" 
                        className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                      />
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <img 
                        src="/lovable-uploads/30ce2a92-c79b-4f64-8e33-1506c4ea005d.png" 
                        alt="БанкАвто карточка автомобиля" 
                        className="w-full h-auto"
                      />
                    </DialogContent>
                  </Dialog>
                  
                  <Dialog>
                    <DialogTrigger>
                      <img 
                        src="/lovable-uploads/1ed93262-8540-45bf-8377-bee676b614ff.png" 
                        alt="БанкАвто главная страница" 
                        className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                      />
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <img 
                        src="/lovable-uploads/1ed93262-8540-45bf-8377-bee676b614ff.png" 
                        alt="БанкАвто главная страница" 
                        className="w-full h-auto"
                      />
                    </DialogContent>
                  </Dialog>
                </div>

                <p className="text-gray-800">
                  Создавал классический автомобильный классифайд #БанкАвто.
                </p>
                
                <div>
                  <h4 className="font-bold text-orange-500 mb-2">Чем занимался:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-800">
                    <li>Создание маркетплейса, объединяющего продажу автомобилей, товары для машин и связанные с ними услуги</li>
                    <li>Создание продуктовой стратегии и ее согласование на высшем уровне (председатель правления)</li>
                    <li>Анализ рынка комиссионных (сервисных и страховых) продуктов</li>
                    <li>Проведение переговоров с партнерами по запуску новых продуктов</li>
                    <li>Разработка, внедрение, сопровождение новых продуктов</li>
                    <li>Управление гибкой командой по реализации задач</li>
                    <li>Взаимодействие с внешними партнерами Банка - проведение переговоров по изменению условий сотрудничества с партнерами, запуск новых продуктов, управление договорной базы</li>
                    <li>Взаимодействие с внутренними подразделениями — IT, финансовый и юридические блоки и т.д. с целью реализации поставленных задач по запуску и модификации линейки продуктов и процессов, роста эффективности продаж</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="automarket">
              <AccordionTrigger className="text-left">
                <div>
                  <h3 className="text-xl font-semibold text-orange-500">ООО "Автомаркет"</h3>
                  <p className="text-gray-600 text-sm">CPO, 2021-2023</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-left space-y-6">
                <Dialog>
                  <DialogTrigger>
                    <img 
                      src="/lovable-uploads/da3eafd0-7153-43a2-8b7d-43eee022de44.png" 
                      alt="Автомаркет главная страница" 
                      className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer mb-6"
                    />
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <img 
                      src="/lovable-uploads/da3eafd0-7153-43a2-8b7d-43eee022de44.png" 
                      alt="Автомаркет главная страница" 
                      className="w-full h-auto"
                    />
                  </DialogContent>
                </Dialog>

                <p className="text-gray-800">
                  Автомаркет — это интернет портал автомобильной тематики, меркетплейс, который собрал на своей площадке основных игроков из сферы торговли как новых так и б/у автомобилей. Проект собрал на своей платформе объявления о продаже автомобилей от официальных дилеров (B2C) а также от физических лиц (C2C).
                </p>
                
                <div>
                  <h4 className="font-bold text-orange-500 mb-2">Основные функции:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-800">
                    <li>Разработка системы управления компанией (бизнес-процессы, регламенты, описание функционала сотрудников, KPI)</li>
                    <li>Создание бизнес-процессов в отделах компании</li>
                    <li>Управление операционными процессами с целью обеспечения их результативности</li>
                    <li>Контроль качества и сроков исполнения по проекту, мониторинг финансовой дисциплины проекта</li>
                    <li>Координация проектной деятельности</li>
                    <li>Контроль выполнения бизнесом целевых показателей эффективности (выручка, прибыль, затраты)</li>
                    <li>Анализ рынка и конкурентов</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="borishof">
              <AccordionTrigger className="text-left">
                <div>
                  <h3 className="text-xl font-semibold text-orange-500">БорисХоф Холдинг</h3>
                  <p className="text-gray-600 text-sm">Product Owner (лидер цифровой трансформации), 2023</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-left space-y-6">
                <p className="text-gray-800">
                  <strong>БорисХоф</strong> — сеть современных дилерских центров, которые работают по международным стандартам.
                </p>
                <p className="text-gray-800">
                  Официальный дилер брендов BMW, Rolls-Royce, MINI, Hyundai, Genesis, Jaguar, Land Rover, Chery, EXEED, Mitsubishi, Volvo, Infiniti, Geely, EVOLUTE, VOYAH, Tank и Toyota в России. Автосалоны располагаются в Москве и предлагают автомобили из актуального модельного ряда.
                </p>
                <p className="text-gray-800">
                  В рамках стратегии компании по <strong>цифровой трансформации</strong> было принято решение упростить процедуру взаимодействия между клиентами, и я данную стратегию реализовывал (отвечал за создание <strong>личного кабинета клиента и мобильного приложения</strong>, <strong>телеграм-бота</strong> и <strong>систему <a href="https://borishof.ru/service/evhc/" className="text-blue-600 hover:underline">видео-отчетов</a></strong>).
                </p>

                <div>
                  <h4 className="font-bold text-orange-500 mb-2">Телеграм Бот Мой Борисхоф</h4>
                  <p className="text-gray-800 mb-4">
                    Разработали инструмент для коммуникации клиента с компанией. Особое внимание уделено именно дистанционному взаимодействию
                  </p>
                  <div className="space-y-2">
                    <a href="https://t.me/myborishof_bot" className="text-blue-600 hover:underline block">Бот Мой Борисхоф</a>
                    <a 
                      href="https://drive.google.com/file/d/1ryAhjqJEFAB8RqXs_ebJIP4C1x_xqruF/view" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 hover:underline block"
                    >
                      Видео 1
                    </a>
                    <a 
                      href="https://drive.google.com/file/d/1XznfU_VXIlKYxEqxtZuGC7fiPdyb62Zo/view" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 hover:underline block"
                    >
                      Видео 2
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-orange-500 mb-2">Система Video Capture</h4>
                  <p className="text-gray-800 mb-4">
                    Принципиально новый подход к сервисному обслуживанию автомобиля. Оперативное согласование всех дополнительных работ в режиме онлайн и видеоконтроль дают полную уверенность в качественной работе технического центра.
                  </p>
                  <p className="text-gray-800 mb-4">
                    Технология Video Capture позволяет увидеть своими глазами любые отклонения, выявленные в процессе ремонта, и тем самым дает Вам исчерпывающую информацию для принятия взвешенных решений. После проведения первичного визуального осмотра автомобиль поступает в цех, где механик выполнит необходимые операции по Вашему обращению. Если на этапе выполнения работ будут выявлены какие-либо дополнительные отклонения, мастер-консультант отправит Вам видеофайл, наглядно демонстрирующий выявленные несоответствия, а также детальную информацию о стоимости их устранения, чтобы Вы могли согласовать операции прямо со своего смартфона.
                  </p>
                  <p className="text-gray-800 mb-4">Посмотрите как это будет выглядеть:</p>
                  <div className="aspect-w-16 aspect-h-9">
                    <video 
                      controls
                      className="w-full rounded-lg shadow-lg"
                      src="https://borishof.ru/upload/files/service/evhc/video.mp4"
                    >
                      Ваш браузер не поддерживает видео
                    </video>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
