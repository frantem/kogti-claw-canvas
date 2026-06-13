import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--tropical-dark))] text-[hsl(var(--tropical-cream))]">
      <Helmet>
        <title>Политика конфиденциальности | KOGTI</title>
        <meta name="description" content="Политика конфиденциальности студии KOGTI: обработка персональных данных в соответствии с Законом РБ №99-З." />
        <link rel="canonical" href="https://kogtistudio.by/privacy" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Политика конфиденциальности | KOGTI" />
        <meta property="og:description" content="Как студия KOGTI обрабатывает и защищает персональные данные пользователей." />
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
            Дата последнего обновления: 28 февраля 2026 г.
          </p>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-[hsl(var(--tropical-gold))]">
              1. Общие положения
            </h2>
            <p>
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты
              персональных данных пользователей сайта, принадлежащего{" "}
              <strong>ИП Котович О.А.</strong> (УНП 391863210), далее — «Оператор».
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
              2. Какие данные собираются
            </h2>
            <p>При использовании сайта могут обрабатываться следующие данные:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>При записи через сервис Dikidi:</strong> имя, номер телефона — для
                оформления и подтверждения записи на услугу.
              </li>
              <li>
                <strong>Автоматически:</strong> IP-адрес, тип браузера, разрешение экрана,
                источник перехода, действия на сайте — через систему аналитики Яндекс.Метрика.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-[hsl(var(--tropical-gold))]">
              3. Использование файлов cookie
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
              Вебвизор, карта кликов и карта скроллинга. Данные обрабатываются в обезличенном виде.
            </p>

            <h3 className="font-semibold mt-4 mb-2">Технические</h3>
            <p>
              Технические cookie (например, <code className="text-xs bg-[hsl(var(--tropical-green))] px-1.5 py-0.5 rounded">sidebar:state</code>)
              используются для корректной работы административной панели сайта и не содержат персональных данных.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-[hsl(var(--tropical-gold))]">
              4. Сторонние сервисы
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Dikidi</strong> — сервис онлайн-записи. При записи ваши данные (имя, телефон)
                передаются и обрабатываются в соответствии с{" "}
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
                <strong>Яндекс.Карты</strong> — для отображения местоположения студии.
                Может устанавливать собственные cookie.
              </li>
              <li>
                <strong>Яндекс.Метрика</strong> — для сбора статистики посещаемости (см. раздел 3).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-[hsl(var(--tropical-gold))]">
              5. Цели обработки данных
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Оформление записи на услуги груминга</li>
              <li>Обратная связь с клиентом</li>
              <li>Анализ посещаемости и улучшение сайта</li>
              <li>Обеспечение корректной работы сайта</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-[hsl(var(--tropical-gold))]">
              6. Права пользователя
            </h2>
            <p>В соответствии с Законом №99-З вы имеете право:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Получить информацию об обработке своих персональных данных</li>
              <li>Требовать изменения, блокирования или удаления своих данных</li>
              <li>Отозвать согласие на обработку персональных данных</li>
              <li>Обжаловать действия Оператора в уполномоченный орган</li>
            </ul>
            <p className="mt-2">
              Для реализации своих прав свяжитесь с нами по контактам, указанным ниже.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-[hsl(var(--tropical-gold))]">
              7. Контактная информация
            </h2>
            <p>ИП Котович О.А.</p>
            <p>УНП: 391863210</p>
            <p>Телефон: +375 33 658 26 39</p>
            <p className="mt-2">
              По всем вопросам, связанным с обработкой персональных данных, вы можете
              обратиться по указанному номеру телефона или через мессенджеры (Telegram, Viber, WhatsApp).
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
