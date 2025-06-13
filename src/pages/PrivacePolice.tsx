import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-rose-50/20 to-stone-50 overflow-hidden">
      <Header />

      {/* Hero-заголовок */}
      <section className="pt-32 pb-20 relative text-center">
        {/* лёгкие фоновые кружочки */}
        <div className="absolute inset-0 pointer-events-none z-0 hidden sm:block">
          <div className="absolute top-16 left-10 w-20 h-20 sm:w-32 sm:h-32 bg-rose-100/40 rounded-full animate-float-slow" />
          <div className="absolute bottom-24 right-16 w-16 h-16 sm:w-28 sm:h-28 bg-stone-100/50 rounded-full animate-float-medium" />
        </div>

        <h1 className="relative z-10 text-3xl sm:text-4xl lg:text-5xl font-light text-stone-800">
          Политика конфиденциальности
        </h1>
      </section>

      {/* Сам текст политики */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 text-stone-700">
        <section className="space-y-8 text-base sm:text-lg font-light leading-relaxed">
          <p>
            ООО &laquo;Роял Фловерс&raquo; (далее&nbsp;&mdash; «Оператор») уважает право Пользователя
            на&nbsp;конфиденциальность и&nbsp;стремится защищать персональные данные,
            которые обрабатываются в&nbsp;рамках предоставления своих услуг.
          </p>

          <h2 className="text-xl sm:text-2xl font-medium text-stone-800">1. Общие положения</h2>
          <p>
            Настоящая Политика конфиденциальности действует в отношении всей информации,
            которую Оператор может получить о Пользователе во время использования сайта,
            сервисов и продуктов Оператора.
          </p>

          <h2 className="text-xl sm:text-2xl font-medium text-stone-800">2. Состав персональных данных</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>ФИО</li>
            <li>Контактный номер телефона</li>
            <li>Адрес электронной почты</li>
            <li>Адрес доставки (при оформлении заказа)</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-medium text-stone-800">3. Цели обработки персональных данных</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>оформление и исполнение заказов;</li>
            <li>обратная связь;</li>
            <li>улучшение качества обслуживания;</li>
            <li>выполнение требований законодательства.</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-medium text-stone-800">4. Согласие на обработку данных</h2>
          <p>
            Передача своих данных через формы на сайте считается согласием Пользователя
            на обработку персональных данных.
          </p>

          <h2 className="text-xl sm:text-2xl font-medium text-stone-800">5. Рассылка и уведомления</h2>
          <p>
            Также Оператор имеет право направлять Пользователю уведомления о новых продуктах и
            услугах, специальных предложениях и различных событиях. Пользователь всегда может
            отказаться от получения информационных сообщений, направив Оператору письмо на адрес
            электронной почты&nbsp;
            <a href="mailto:info@royalflowers.kz" className="text-rose-500 underline">
              info@royalflowers.kz
            </a>{' '}
            с пометкой
            &nbsp;«Отказ от уведомлений о новых продуктах и услугах и специальных предложениях».
          </p>

          <h2 className="text-xl sm:text-2xl font-medium text-stone-800">6. Передача данных третьим лицам</h2>
          <p>
            Персональные данные не передаются третьим лицам, кроме случаев, предусмотренных
            законодательством или необходимых для исполнения заказа (например, службе доставки).
          </p>

          <h2 className="text-xl sm:text-2xl font-medium text-stone-800">7. Хранение и защита</h2>
          <p>
            Оператор применяет необходимые организационные и технические меры для защиты
            персональных данных от несанкционированного доступа, изменения, раскрытия
            или уничтожения.
          </p>

          <h2 className="text-xl sm:text-2xl font-medium text-stone-800">8. Изменения в политике</h2>
          <p>
            Оператор оставляет за собой право вносить изменения в настоящую Политику. Актуальная
            редакция размещается на этой странице.
          </p>

          {/* <div className="pt-8 border-t border-stone-200 text-sm text-stone-500">
            <p>
              <strong>Юридическое наименование:</strong> ООО &laquo;Роял Фловерс&raquo;
            </p>
            <p>
              <strong>Юридический адрес:</strong> 109028, г. Алматы, ул. Байзакова, 194, стр. 1,
              этаж 6, пом. I, комн. 31
            </p>
            <p>
              <strong>Дата публикации:</strong> 13 июня 2025 г.
            </p>
          </div> */}
        </section>
      </main>

      <Footer />
    </div>
  );
}
