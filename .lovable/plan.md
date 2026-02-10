

## Очистка неиспользуемого кода и оптимизация загрузки

### Что нужно сделать

### 1. Удалить неиспользуемые компоненты

Следующие компоненты НЕ используются на сайте (не импортируются в Index.tsx или других страницах):

- **`src/components/Header.tsx`** -- старый хедер с "tropical" стилями, нигде не импортируется
- **`src/components/Services.tsx`** -- старый компонент услуг (заменен на `ServicesSection.tsx`), нигде не импортируется
- **`src/components/Contacts.tsx`** -- старый компонент контактов (заменен на `ContactSection.tsx`), нигде не импортируется
- **`src/components/InspirationSection.tsx`** -- нигде не используется на сайте
- **`src/components/InspirationGallery.tsx`** -- используется только в `InspirationSection.tsx`, которая сама не используется

### 2. Удалить неиспользуемые статические изображения

Файлы из `src/assets/` которые используются ТОЛЬКО в удаляемых компонентах:

- `src/assets/app-background.jpg` -- только в InspirationSection
- `src/assets/hero-hands.jpg` -- нигде не используется
- `src/assets/modern-background.jpg` -- нигде не используется
- `src/assets/master-anna.jpg` -- только в InspirationGallery
- `src/assets/master-alina.jpg` -- нигде не используется
- `src/assets/master-olya.jpg` -- нигде не используется
- `src/assets/master-victoria.jpg` -- нигде не используется
- `src/assets/nail-work-1.jpg` .. `nail-work-6.jpg` -- только в InspirationGallery

Итого: ~13 изображений, которые загружаются в бандл впустую.

### 3. Убрать "Горящие окна" из админ-панели

В `HeroManagement.tsx` остались поля "Горящая дата" и "Время", которые больше не используются на сайте (карточка BookingCard теперь показывает кнопку "Позвонить" вместо даты/времени). Нужно:

- Удалить поля `hot_date` и `hot_time` из интерфейса `BookingSettings`
- Удалить их из формы, из fetch-запроса и из сохранения

### 4. Убрать пустой компонент SEOContent

`src/components/SEOContent.tsx` возвращает `null` -- он пустой и не несет никакой пользы, но все равно lazy-загружается на главной странице. Нужно удалить его и убрать из `Index.tsx`.

### 5. Итоговый эффект

- Удалится 7 компонентов/файлов
- Удалится ~13 изображений из бандла
- Упростится админ-панель (уберутся неактуальные поля)
- Сайт станет загружаться быстрее за счет меньшего размера бандла

---

### Технические детали

**Файлы для удаления:**
- `src/components/Header.tsx`
- `src/components/Services.tsx`
- `src/components/Contacts.tsx`
- `src/components/InspirationSection.tsx`
- `src/components/InspirationGallery.tsx`
- `src/components/SEOContent.tsx`
- `src/assets/app-background.jpg`
- `src/assets/hero-hands.jpg`
- `src/assets/modern-background.jpg`
- `src/assets/master-anna.jpg`
- `src/assets/master-alina.jpg`
- `src/assets/master-olya.jpg`
- `src/assets/master-victoria.jpg`
- `src/assets/nail-work-1.jpg` .. `nail-work-6.jpg`

**Файлы для редактирования:**
- `src/pages/Index.tsx` -- убрать импорт и рендер `SEOContent`
- `src/components/admin/HeroManagement.tsx` -- убрать поля `hot_date`, `hot_time` из интерфейса, состояния, fetch, save и формы (строки 30-31, 55-56, 78-79, 114-115, 150-151, 356-374)

