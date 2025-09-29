# 🚀 Инструкции по деплою в репозиторий

## Ваш репозиторий: https://github.com/codlxflare/sotohit_test.git

### 📋 Пошаговая инструкция

#### 1. Инициализация Git (если еще не сделано)
```bash
# В корневой папке проекта
git init
```

#### 2. Добавление удаленного репозитория
```bash
git remote add origin https://github.com/codlxflare/sotohit_test.git
```

#### 3. Добавление всех файлов
```bash
git add .
```

#### 4. Первый коммит
```bash
git commit -m "Initial commit: Настройка автоматического деплоя на GitHub Pages"
```

#### 5. Загрузка в репозиторий
```bash
git push -u origin main
```

### 🔧 Настройка GitHub Pages

1. **Перейдите в настройки репозитория:**
   - Откройте https://github.com/codlxflare/sotohit_test
   - Нажмите на вкладку "Settings"

2. **Настройте GitHub Pages:**
   - В левом меню найдите "Pages"
   - В разделе "Source" выберите "GitHub Actions"
   - Сохраните настройки

3. **Проверьте Actions:**
   - Перейдите на вкладку "Actions"
   - Убедитесь, что workflow "Deploy to GitHub Pages" запустился
   - Дождитесь завершения (зеленая галочка)

### 🌐 Ваш сайт будет доступен по адресу:
**https://codlxflare.github.io/sotohit_test**

### 🔄 Автоматический деплой

После настройки каждый раз при push в main ветку:
```bash
git add .
git commit -m "Описание изменений"
git push origin main
```

GitHub Actions автоматически:
- Соберет проект
- Задеплоит на GitHub Pages
- Обновит сайт

### 🛠 Локальная разработка

```bash
# Установка зависимостей
npm run install:all

# Запуск frontend
npm run start:frontend

# Запуск backend
npm run start:backend

# Сборка для продакшена
npm run build:frontend
```

### 📝 Проверка деплоя

1. **Проверьте Actions:**
   - https://github.com/codlxflare/sotohit_test/actions
   - Убедитесь, что последний workflow выполнился успешно

2. **Проверьте Pages:**
   - https://github.com/codlxflare/sotohit_test/settings/pages
   - Убедитесь, что сайт опубликован

3. **Откройте сайт:**
   - https://codlxflare.github.io/sotohit_test

### 🐛 Если что-то не работает

1. **Проверьте логи в Actions**
2. **Убедитесь, что все файлы загружены**
3. **Проверьте настройки Pages**
4. **Убедитесь, что homepage правильный в package.json**

---

**Готово! Ваш проект настроен для автоматического деплоя! 🎉**
