import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-inter">Релевантный опыт (подробнее от раннего к последнему)</h2>
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
                <p className="text-gray-800">
                  Автомаркет — это интернет портал автомобильной тематики, меркетплейс, который собрал на своей площадке основных игроков из сферы торговли как новых так и б/у автомобилей. Проект собрал на своей платформе объявления о продаже автомобилей от официальных дилеров (B2C) а также от физических лиц (C2C).
                </p>
                <p className="text-gray-800">
                  Создание проекта с нуля: написание ТЗ, подбор исполнителей, набор команды, описание бизнес-процессов, составление и защита перед СД стратегии компании и вывода площадки в релиз с последующим составлением и наполнением backlog'a.
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

            <AccordionItem value="marketlab">
              <AccordionTrigger className="text-left">
                <div>
                  <h3 className="text-xl font-semibold text-orange-500">ООО Лаборатория Маркетинга</h3>
                  <p className="text-gray-600 text-sm">CPO, 2023</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-left space-y-6">
                <p className="text-gray-800">
                  <strong>Market lab</strong> — это Full Digital маркетинговая компания (полный цикл услуг маркетингового сопровождения).
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-orange-500 mb-2">Задача:</h4>
                    <p className="text-gray-800">Создать омниканальную систему и эффективный инструмент для управления коммуникацией с клиентами и автоматизации процессов продаж (CRM) для внутренного использования и дальнейшего вывода продукта на рынок.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-orange-500 mb-2">Рынок:</h4>
                    <p className="text-gray-800">Арбитраж трафика, медиабаинг, инфобизнес, онлайн курсы, маркетинг.</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-800">
                      <strong>Был создан продукт-платформа CHATLAB</strong> для управления клиентскими чатами и автоматизации общения с клиентами.
                      В отличие от других решений для управления клиентскими чатами, продукт обладает рядом ключевых особенностей. Именно эти особенности и являются killer-фичами в конкурентном рынке.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-orange-500 mb-2">Достижения:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-800">
                    <li>Сформировал видение продукта, утп, каналы реализации и интеграции, монетизацию</li>
                    <li>Определил ключевые метрики, составил p&l, защитил у основателей (founder)</li>
                    <li>Совместно с ИТ директором сформировал состав команды, обосновал и защитил численность</li>
                    <li>Совместно с ИТ директором определил этапы, сроки, разработал архитектуру решения, необходимые интеграции</li>
                    <li>Составил дорожную карту продукта</li>
                    <li>Выстроил работу с продуктом с нуля по agile-циклу (планирования, ретро, демо, дейли)</li>
                    <li>На основе CustDev создал требования к MVP продукту</li>
                    <li>Разработал решение (mvp) в установленные сроки</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-orange-500 mb-2">На какие метрики я смотрел? Ежедневно/после релиза ключевых фичей/квартальные?</h4>
                  <p className="text-gray-800">
                    Количество активных пользователей (DAU, WAU, MAU), Churn, CAC / LTV Ratio, Premium Upgrades.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-orange-500 mb-2">На сколько увеличилось количество юзеров за время моей работы?</h4>
                  <p className="text-gray-800">
                    С нуля до 877 бизнес-аккаунтов (в каждом аккаунте по 5-8 сотрудников, примерно 5 700 активных пользователей)
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-orange-500 mb-2">Сколько человек было в моей команде?</h4>
                  <p className="text-gray-800">
                    4 разработчика, 2 Лида команды разработчиков, 1 дизайнер, 1 системный аналитик, 1 тестировщик, HR.
                  </p>
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
                    <a href="https://drive.google.com/file/d/1ryAhjqJEFAB8RqXs_ebJIP4C1x_xqruF/view?usp=sharing" className="text-blue-600 hover:underline block">Покупка авто через ТГ бот</a>
                    <a href="https://drive.google.com/file/d/1XznfU_VXIlKYxEqxtZuGC7fiPdyb62Zo/view?usp=sharing" className="text-blue-600 hover:underline block">Запись на сервис через ТГ бот</a>
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
                  <a href="https://borishof.ru/upload/files/service/evhc/video.mp4" className="text-blue-600 hover:underline block">Посмотрите как это будет выглядеть</a>
                </div>

                <div>
                  <h4 className="font-bold text-orange-500 mb-2">Личный кабинет клиента (Продукт в процессе разработки)</h4>
                  <a href="https://drive.google.com/file/d/1B5kM0_X8zbqtim1SOUqvWwj39lKDMT4Y/view?usp=sharing" className="text-blue-600 hover:underline block">Концепт личного кабинета</a>
                </div>

                <div>
                  <h4 className="font-bold text-orange-500 mb-2">Достижения</h4>
                  <p className="text-gray-800 mb-4">
                    Продукты позволили компании стать победителями <strong>ежегодной национальной премии «АВТОДИЛЕР ГОДА – 2024»</strong>:
                  </p>
                  <ul className="list-decimal pl-6 space-y-2 text-gray-800">
                    <li>
                      <a href="https://www.autostat.ru/press-releases/58620/" className="text-blue-600 hover:underline">Номинация «Организация продаж новых автомобилей»</a> 
                      (<strong>Премиальный сегмент</strong>: - Москва и Санкт-Петербург: <strong>EXEED Центр БорисХоф Магистральная</strong>, Москва)
                    </li>
                    <li>
                      <a href="https://www.autostat.ru/press-releases/58620/" className="text-blue-600 hover:underline">Номинация «Организация сервиса»</a> 
                      (15 – 30 дилерских контрактов – <strong>Группа компаний БорисХоф</strong>)
                    </li>
                    <li>
                      <a href="https://www.autostat.ru/press-releases/58620/" className="text-blue-600 hover:underline">Номинация «Эффективные закупки»</a> 
                      (объем склада от 100 до 250 автомобилей: <strong>БорисХоф PROбег Вегас</strong>)
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
