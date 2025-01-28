import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const CV = () => {
  return (
    <section className="py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">CV Product Owner</h2>
          <p className="text-xl text-gray-600">
            Меня зовут Александр Гайдаржи. Я хочу создавать и улучшать продукты.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Питч</h3>
          <div className="space-y-4 text-gray-600">
            <p>
              Я — владелец продукта с семилетним опытом работы в IT. Начинал работу с руководителя проекта в компании Uremont, потом стал директором по созданию и развитию цифровых продуктов в Банке Росгосстрах, Product Owner и co-founder в проектах — Automarket и StartGame. В роли Product Owner развивал и создавал продукты в Лаборатории маркетинга. На сегодняшний день имею серьёзный опыт работы продактом в вэбе, в том числе в крупных проектах.
            </p>
            <p>
              Считаю себя универсальным специалистом, который понимает в контенте, продакт и проджект менеджменте. Отличный руководитель и коммуникатор.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="hard-skills">
              <AccordionTrigger className="text-lg font-semibold">
                Hard skills
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-gray-600">
                  <div>
                    <h4 className="font-bold text-orange-500 mb-2">Growth hacking и стратегическое управление</h4>
                    <p>Прошел профессиональную переподготовку и получил диплом по программе «Мастер делового созидания и инициатор кратного роста компании» Anti MBA, что позволяет мне профессионально заниматься growth hacking и стратегическим управлением бизнесом.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-orange-500 mb-2">Продуктовая аналитика и метрики</h4>
                    <p>Глубокое понимание работы с продуктовой аналитикой, умение формировать, отслеживать и интерпретировать метрики продукта (DAU, MAU, LTV, CAC, Churn Rate и др.) для принятия обоснованных решений по развитию продукта.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-orange-500 mb-2">Управление жизненным циклом продукта</h4>
                    <p>Опыт успешного руководства на всех этапах жизненного цикла продукта — от идеи и MVP до масштабирования и зрелости, включая постоянное улучшение и оптимизацию продукта на основе обратной связи и анализа данных.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-orange-500 mb-2">A/B-тестирование и эксперименты</h4>
                    <p>Практический опыт в проведении A/B-тестов и экспериментов для проверки гипотез и оптимизации пользовательского опыта, внедрение изменений на основе результатов тестов.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-orange-500 mb-2">Разработка и внедрение продуктовой стратегии</h4>
                    <p>Способность разрабатывать и внедрять продуктовые стратегии, которые сочетают в себе бизнес-цели, потребности рынка и пользователя, а также координируют работу команды для достижения поставленных целей.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-orange-500 mb-2">UX/UI дизайн и прототипирование</h4>
                    <p>Базовое понимание и опыт работы с UX/UI дизайном, способность создавать прототипы и wireframes для визуализации идей и улучшения взаимодействия с продуктом.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="soft-skills">
              <AccordionTrigger className="text-lg font-semibold">
                Soft skills
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-gray-600">
                  <div>
                    <h4 className="font-bold text-orange-500 mb-2">Адаптивность и гибкость</h4>
                    <p>Умение быстро адаптироваться к изменениям в проекте, бизнес-среде или требованиях клиента, а также способность эффективно работать в условиях постоянной неопределённости и изменяющихся приоритетов.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-orange-500 mb-2">Критическое мышление и решение проблем</h4>
                    <p>Способность анализировать сложные ситуации и принимать обоснованные решения в условиях неопределённости, находить нестандартные пути решения проблем и устранять препятствия на пути к цели.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-orange-500 mb-2">Стратегическое видение</h4>
                    <p>Способность видеть «большую картину» и мыслить стратегически, определять долгосрочные цели продукта и компании, а также разрабатывать планы для их достижения.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-orange-500 mb-2">Навыки наставничества и коучинга</h4>
                    <p>Опыт в обучении и развитии членов команды, умение передавать знания и помогать другим в развитии их профессиональных навыков и компетенций.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-orange-500 mb-2">Управление стрессом и тайм-менеджмент</h4>
                    <p>Умение сохранять эффективность и продуктивность в условиях высокого давления и ограниченных сроков, а также приоритетизировать задачи для достижения максимальной эффективности.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-orange-500 mb-2">Креативность и инновационность</h4>
                    <p>Склонность к генерации новых идей и нестандартных решений, умение применять творческий подход к решению задач и развитию продукта.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-orange-500 mb-2">Самостоятельность</h4>
                    <p>Готовность и способность принимать и нести ответственность за принимаемые решения и действия, даже в условиях ограниченной поддержки или ресурсов.</p>
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