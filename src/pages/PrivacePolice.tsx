import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-stone-800">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-10">Политика конфиденциальности</h1>

      <section className="space-y-8 text-base sm:text-lg font-light leading-relaxed text-stone-700">
        <p>
          ООО "Роял Фловерс" (далее — «Оператор») уважает право Пользователя на конфиденциальность и стремится защищать
          персональные данные, которые обрабатываются в рамках предоставления своих услуг.
        </p>

        <h2 className="text-xl sm:text-2xl font-medium text-stone-800">1. Общие положения</h2>
        <p>
          Настоящая Политика конфиденциальности действует в отношении всей информации, которую Оператор может получить
          о Пользователе во время использования сайта, сервисов и продуктов Оператора.
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
          <li>оформление и исполнение заказов</li>
          <li>обратная связь</li>
          <li>улучшение качества обслуживания</li>
          <li>выполнение требований закона</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-medium text-stone-800">4. Согласие на обработку данных</h2>
        <p>Передача данных через формы сайта считается согласием Пользователя на их обработку.</p>

        <h2 className="text-xl sm:text-2xl font-medium text-stone-800">5. Рассылка и уведомления</h2>
        <p>
          Также Оператор имеет право направлять Пользователю уведомления о новых продуктах и услугах, специальных
          предложениях и различных событиях. Пользователь всегда может отказаться от получения информационных сообщений,
          направив Оператору письмо на адрес электронной почты{' '}
          <a href="mailto:info@royalflowers.kz" className="text-rose-500 underline">
            info@royalflowers.kz
          </a>{' '}
          с пометкой «Отказ от уведомлений о новых продуктах и услугах и специальных предложениях».
        </p>

        <h2 className="text-xl sm:text-2xl font-medium text-stone-800">6. Передача данных третьим лицам</h2>
        <p>Оператор не передаёт данные третьим лицам, кроме случаев, предусмотренных законодательством.</p>

        <h2 className="text-xl sm:text-2xl font-medium text-stone-800">7. Хранение и защита</h2>
        <p>Применяются все необходимые меры защиты персональных данных от несанкционированного доступа.</p>

        <h2 className="text-xl sm:text-2xl font-medium text-stone-800">8. Изменения</h2>
        <p>Политика может быть изменена. Актуальная версия размещается на этой странице.</p>

        <div className="pt-8 border-t border-stone-200 text-sm text-stone-500">
          <p><strong>Юридическое наименование:</strong> ООО "Роял Фловерс"</p>
          <p><strong>Юридический адрес:</strong> 109028, г. Алматы, ул. Байзакова, д. 194, стр. 1, этаж 6, помещение I, комната 31</p>
          <p><strong>Дата публикации:</strong> 13 июня 2025 г.</p>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
