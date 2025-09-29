# Sotohit E-commerce Application

Современное веб-приложение для интернет-магазина с React frontend и Python backend.

## 🚀 Автоматический деплой на GitHub Pages

Проект настроен для автоматического деплоя на GitHub Pages при каждом push в main/master ветку.

### 📋 Предварительные требования

- Node.js 18+
- npm 8+
- Python 3.8+
- Git
- GitHub аккаунт

### 🛠 Установка и настройка

1. **Клонируйте репозиторий:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
   cd YOUR_REPOSITORY_NAME
   ```

2. **Установите зависимости:**
   ```bash
   # Установка всех зависимостей
   npm run install:all
   
   # Или по отдельности:
   npm run install:frontend
   npm run install:backend
   ```

3. **Настройте homepage в package.json:**
   
   Откройте `frontend/package.json` и замените:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME"
   ```
   
   На ваш реальный URL GitHub Pages.

### 🔧 Настройка GitHub Pages

1. **Перейдите в настройки репозитория:**
   - Откройте ваш репозиторий на GitHub
   - Перейдите в Settings → Pages

2. **Настройте источник:**
   - Source: "GitHub Actions"
   - Это позволит использовать созданный workflow

3. **Проверьте настройки:**
   - Убедитесь, что ветка main/master выбрана как основная
   - Проверьте, что GitHub Actions включены

### 🚀 Процесс деплоя

#### Автоматический деплой

1. **Сделайте изменения в коде**
2. **Зафиксируйте изменения:**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

3. **GitHub Actions автоматически:**
   - Установит зависимости
   - Соберет React приложение
   - Задеплоит на GitHub Pages

#### Ручной деплой (опционально)

```bash
# Сборка и деплой frontend
npm run build:frontend
npm run deploy:frontend
```

### 📁 Структура проекта

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── frontend/                   # React приложение
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
├── backend/                    # Python backend
│   ├── server.py
│   └── requirements.txt
├── package.json               # Корневой package.json
└── README.md
```

### 🔍 Проверка деплоя

1. **Проверьте статус Actions:**
   - Перейдите в раздел "Actions" вашего репозитория
   - Убедитесь, что workflow выполнился успешно

2. **Проверьте GitHub Pages:**
   - Перейдите в Settings → Pages
   - Убедитесь, что сайт опубликован
   - Откройте ссылку на ваш сайт

### 🛠 Локальная разработка

```bash
# Запуск frontend (React)
npm run start:frontend

# Запуск backend (Python)
npm run start:backend

# Запуск тестов
npm run test:frontend
```

### 📝 Полезные команды

```bash
# Установка зависимостей
npm run install:all

# Сборка для продакшена
npm run build:frontend

# Деплой на GitHub Pages
npm run deploy:frontend

# Проверка статуса
git status
```

### 🐛 Решение проблем

#### Проблема: Сайт не обновляется
- Проверьте, что workflow выполнился успешно
- Убедитесь, что homepage в package.json правильный
- Проверьте настройки GitHub Pages

#### Проблема: Ошибки сборки
- Проверьте, что все зависимости установлены
- Убедитесь, что Node.js версии 18+
- Проверьте логи в GitHub Actions

#### Проблема: 404 ошибка
- Убедитесь, что homepage настроен правильно
- Проверьте, что файлы собрались в папку build
- Убедитесь, что GitHub Pages использует правильную ветку

### 📞 Поддержка

Если у вас возникли проблемы с деплоем:
1. Проверьте логи в GitHub Actions
2. Убедитесь, что все настройки корректны
3. Проверьте документацию GitHub Pages

---

**Удачного деплоя! 🎉**
