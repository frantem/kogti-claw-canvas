import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--tropical-dark))] text-[hsl(var(--tropical-cream))]">
      <Helmet>
        <title>Политика конфиденциальности | KOGTI</title>
        <meta name="description" content="Политика конфиденциальности студии KOGTI: обработка персональных данных, переписка в Instagram, сроки хранения и удаление данных в соответствии с Законом РБ №99-З." />
        <link rel="canonical" href="https://kogtistudio.by/privacy" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Политика конфиденциальности | KOGTI" />
        <meta property="og:description" content="Как студия KOGTI обрабатывает и защищает персональные данные пользователей, включая переписку в Instagram." />
        <meta property="og:url" content="https://kogtistudio.by/privacy" />
        <meta property="og:type" content="article" />
      </Helmet>
      <div className="container mx-auto px-6 py-12 max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[hsl(var(--tropical-gold))] hover:text-[hsl(var(--tropical-gold-light))] transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Назад на главную
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(var(--tropical-gold))]">
          Политика конфиденциальности
        </h1>

        <div className="space-y-8 text-base leading-relaxed opacity-90">
          <p className="text-sm opacity-70">
            Дата последнего обновления: 19 сентября 2026 г.
          </p>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-[hsl(var(--tropical-gold))]">
              1. Общие положения
            </h2>
            <p>
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты
              персональных данных пользователей сайта kogtistudio.by, страниц студии в
              социальных сетях и сервисов онлайн-записи, принадлежащих{" "}
              <strong>ИП Котович О.А.</strong> (УНП 391863210), далее — «Оператор».
            </p>
            <p className="mt-2">
              Оператор — ногтевая студия KOGTI, город Витебск, ул. Ленина, 26, БЦ СИТИ,
              3 этаж, кабинет 314.
            </p>
            <p className="mt-2">
              Политика разработана в соответствии с{" "}
              <a
                href="https://pravo.by/document/?guid=3871&p0=H11900099"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--tropical-gold))] underline hover:text-[hsl(var(--tropical-gold-light))]"
              >
                Законом Республики Беларусь от 07.05.2021 №99-З «О защите персональных данных»
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-[hsl(var(--tropical-gold))]">
              2. Какие данные обрабатываются
            </h2>
            <p>Оператор обрабатывает следующие категории данных:</p>

            <h3 className="font-semibold mt-4 mb-2">2.1. При записи через сервис Dikidi</h3>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>имя;</li>
              <li>номер телефона;</li>
              <li>сведения о выбранной услуге, мастере и времени визита.</li>
            </ul>
            <p className="mt-2">
              Эти данные необходимы для оформления, подтверждения и ведения записи на услугу.
            </p>

            <h3 className="font-semibold mt-4 mb-2">
              2.2. При обращении через Instagram
            </h3>
            <p>
              Если вы пишете студии в директ аккаунта{" "}
              <strong>@kogti.studio_</strong> или отвечаете на публикацию в комментариях,
              Оператор получает и обрабатывает:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ваш публичный юзернейм и отображаемое имя в Instagram;</li>
              <li>текст ваших сообщений и комментариев;</li>
              <li>вложения, которые вы отправили (изображения, ссылки);</li>
              <li>
                иные сведения, которые вы сообщаете добровольно: номер телефона, предпочтения
                по услуге, удобное время визита.
              </li>
            </ul>
            <p className="mt-2">
              Оператор не получает ваш пароль от Instagram, не читает ваши закрытые данные и не
              имеет доступа к вашим диалогам с другими людьми. Обрабатывается только та
              переписка, которую вы сами ведёте со студией.
            </p>

            <h3 className="font-semibold mt-4 mb-2">2.3. Автоматически при посещении сайта</h3>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>IP-адрес, тип браузера и устройства, разрешение экрана;</li>
              <li>источник перехода, страницы и действия на сайте.</li>
            </ul>
            <p className="mt-2">
              Эти данные собираются системой аналитики Яндекс.Метрика (см. раздел 5).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-[hsl(var(--tropical-gold))]">
              3. Обработка переписки в Instagram и автоматизированный помощник
            </h2>
            <p>
              Для ответов на обращения в Instagram студия использует программного помощника
              администратора, который работает через официальный программный интерфейс
              Instagram, предоставленный компанией Meta Platforms, Inc.
            </p>
            <p className="mt-2">Из этого следует, что:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>Оператор отвечает только на те сообщения, которые вы отправили первым.</strong>{" "}
                Студия не рассылает сообщения пользователям, которые с ней не переписывались.
              </li>
              <li>
                Часть сообщений обрабатывается автоматически: помощник может уточнить услугу,
                подсказать время и записать вас.
              </li>
              <li>
                В ситуациях, требующих решения человека (жалобы, скидки, индивидуальные условия,
                вопросы оплаты), переписку ведёт администратор студии лично.
              </li>
              <li>
                Автоматическая обработка не влечёт юридических последствий для вас и не создаёт
                обязательств без подтверждения администратора.
              </li>
            </ul>
            <p className="mt-2">
              История переписки хранится не дольше, чем это необходимо для ведения записи и
              решения вашего вопроса (см. раздел 7).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-[hsl(var(--tropical-gold))]">
              4. Цели обработки данных
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>оформление, перенос и отмена записи на услуги маникюра и педикюра;</li>
              <li>консультирование по услугам, стоимости и свободному времени;</li>
              <li>подтверждение и напоминание о визите;</li>
              <li>обратная связь и ответы на ваши обращения;</li>
              <li>учёт оказанных услуг и ведение истории клиента;</li>
              <li>анализ посещаемости и улучшение работы сайта и студии.</li>
            </ul>
            <p className="mt-2">
              Оператор не использует ваши данные для целей, не связанных с перечисленными, и не
              продаёт их третьим лицам.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-[hsl(var(--tropical-gold))]">
              5. Использование файлов cookie
            </h2>
            <p>Сайт использует следующие файлы cookie:</p>

            <h3 className="font-semibold mt-4 mb-2">Аналитические (Яндекс.Метрика, счётчик 103536003)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-[hsl(var(--tropical-gold)/0.3)] rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-[hsl(var(--tropical-green))]">
                    <th className="text-left p-3 border-b border-[hsl(var(--tropical-gold)/0.2)]">Cookie</th>
                    <th className="text-left p-3 border-b border-[hsl(var(--tropical-gold)/0.2)]">Назначение</th>
                    <th className="text-left p-3 border-b border-[hsl(var(--tropical-gold)/0.2)]">Срок</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[hsl(var(--tropical-gold)/0.1)]">
                    <td className="p-3 font-mono text-xs">_ym_uid</td>
                    <td className="p-3">Уникальный идентификатор пользователя</td>
                    <td className="p-3">1 год</td>
                  </tr>
                  <tr className="border-b border-[hsl(var(--tropical-gold)/0.1)]">
                    <td className="p-3 font-mono text-xs">_ym_d</td>
                    <td className="p-3">Дата первого визита</td>
                    <td className="p-3">1 год</td>
                  </tr>
                  <tr className="border-b border-[hsl(var(--tropical-gold)/0.1)]">
                    <td className="p-3 font-mono text-xs">_ym_isad</td>
                    <td className="p-3">Определение блокировщика рекламы</td>
                    <td className="p-3">2 дня</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-xs">_ym_visorc</td>
                    <td className="p-3">Запись действий пользователя (Вебвизор)</td>
                    <td className="p-3">30 минут</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              Яндекс.Метрика используется для анализа посещаемости сайта, включая функции
              Вебвизор, карта кликов и карта скроллинга.
            </p>

            <h3 className="font-semibold mt-4 mb-2">Технические</h3>
            <p>
              Технические cookie (например, <code className="text-xs bg-[hsl(var(--tropical-green))] px-1.5 py-0.5 rounded">sidebar:state</code>)
              используются для корректной работы административной панели сайта и не содержат персональных данных.
            </p>
            <p className="mt-2">
              Вы можете отключить cookie в настройках браузера. При этом отдельные функции сайта
              могут работать некорректно.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-[hsl(var(--tropical-gold))]">
              6. Кому передаются данные
            </h2>
            <p>
              Оператор не продаёт и не раскрывает ваши данные третьим лицам, кроме случаев,
              необходимых для оказания услуг:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Meta Platforms, Inc. (Instagram)</strong> — платформа, через которую
                приходит и обрабатывается переписка. Сообщения хранятся и обрабатываются в том
                числе на серверах Meta за пределами Республики Беларусь, в соответствии с ее
                правилами.
              </li>
              <li>
                <strong>Dikidi</strong> — сервис онлайн-записи. При записи ваши данные (имя,
                телефон) передаются и обрабатываются в соответствии с{" "}
                <a
                  href="https://dikidi.net/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[hsl(var(--tropical-gold))] underline hover:text-[hsl(var(--tropical-gold-light))]"
                >
                  политикой конфиденциальности Dikidi
                </a>.
              </li>
              <li>
                <strong>Поставщик хостинга и хранения данных</strong> — инфраструктура, на которой
                размещены сайт и база данных студии.
              </li>
              <li>
                <strong>Яндекс.Карты</strong> — для отображения местоположения студии. Может
                устанавливать собственные cookie.
              </li>
              <li>
                <strong>Яндекс.Метрика</strong> — для сбора статистики посещаемости (см. раздел 5).
              </li>
            </ul>
            <p className="mt-3">
              Передача данных за пределы Республики Беларусь осуществляется в объёме, необходимом
              для работы перечисленных сервисов, и только в отношении данных, которые вы сообщили
              добровольно.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-[hsl(var(--tropical-gold))]">
              7. Сроки хранения данных
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Переписка в Instagram</strong> — до 12 месяцев с момента последнего
                обращения, если иное не требуется для решения вашего вопроса или ведения записи.
              </li>
              <li>
                <strong>Данные о записях и визитах</strong> (имя, телефон, услуга) — в течение
                срока, необходимого для ведения истории обслуживания клиента.
              </li>
              <li>
                <strong>Данные аналитики</strong> — согласно срокам, указанным в разделе 5.
              </li>
            </ul>
            <p className="mt-2">
              По истечении срока хранения данные удаляются или обезличиваются.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-[hsl(var(--tropical-gold))]">
              8. Права пользователя
            </h2>
            <p>В соответствии с Законом №99-З вы имеете право:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>получить информацию об обработке своих персональных данных;</li>
              <li>требовать изменения, блокирования или удаления своих данных;</li>
              <li>отозвать согласие на обработку персональных данных;</li>
              <li>обжаловать действия Оператора в уполномоченный орган.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-[hsl(var(--tropical-gold))]">
              9. Удаление данных
            </h2>
            <p>
              Вы можете в любой момент попросить удалить свои персональные данные и историю
              переписки. Для этого:
            </p>
            <ol className="list-decimal pl-6 mt-2 space-y-1">
              <li>
                напишите студии в директ аккаунта{" "}
                <a
                  href="https://instagram.com/kogti.studio_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[hsl(var(--tropical-gold))] underline hover:text-[hsl(var(--tropical-gold-light))]"
                >
                  @kogti.studio_
                </a>{" "}
                с фразой «прошу удалить мои данные»;
              </li>
              <li>или позвоните по номеру телефона, указанному в разделе 10.</li>
            </ol>
            <p className="mt-3">
              Оператор подтвердит получение запроса и удалит данные в течение{" "}
              <strong>30 календарных дней</strong>. Вместе с данными удаляется история переписки,
              если её хранение не требуется по закону. О выполнении запроса вам сообщат тем же
              способом, которым вы обратились.
            </p>
            <p className="mt-2">
              Обратите внимание: сообщения, отправленные через Instagram, хранятся также на
              стороне Meta Platforms, Inc. Удалить их оттуда можно средствами самого Instagram.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-[hsl(var(--tropical-gold))]">
              10. Контактная информация
            </h2>
            <p>ИП Котович О.А.</p>
            <p>УНП: 391863210</p>
            <p>Телефон: +375 33 658 26 39</p>
            <p>
              Instagram:{" "}
              <a
                href="https://instagram.com/kogti.studio_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--tropical-gold))] underline hover:text-[hsl(var(--tropical-gold-light))]"
              >
                @kogti.studio_
              </a>
            </p>
            <p className="mt-2">
              По всем вопросам, связанным с обработкой персональных данных, вы можете обратиться
              по указанному номеру телефона, в директ Instagram или через мессенджеры
              (Telegram, Viber, WhatsApp).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-[hsl(var(--tropical-gold))]">
              11. Изменения политики
            </h2>
            <p>
              Оператор вправе изменять настоящую Политику. Актуальная редакция всегда доступна по
              адресу{" "}
              <Link
                to="/privacy"
                className="text-[hsl(var(--tropical-gold))] underline hover:text-[hsl(var(--tropical-gold-light))]"
              >
                kogtistudio.by/privacy
              </Link>{" "}
              с указанием даты последнего обновления.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
