# 🚀 Деплой Sotohit

Этот проект настроен для автоматического деплоя на GitHub Pages и других платформах.

## 📋 Что настроено

### ✅ GitHub Actions Workflows

1. **`.github/workflows/gh-pages.yml`** - Деплой frontend на GitHub Pages
2. **`.github/workflows/deploy.yml`** - Полный деплой с backend
3. **`.github/workflows/backend-deploy.yml`** - Деплой backend на Railway

## 🎯 Автоматический деплой

### Frontend (GitHub Pages)
- ✅ Автоматически собирается при push в main/master
- ✅ Деплоится на GitHub Pages
- ✅ Доступен по ссылке: `https://[username].github.io/[repository-name]`

### Backend (Railway/Heroku)
- ✅ Автоматически деплоится при изменении backend/
- ✅ Настроен для Railway
- ✅ Можно настроить для Heroku

## 🛠 Ручной деплой

### 1. GitHub Pages (Frontend)

```bash
# 1. Соберите проект
cd frontend
npm install
npm run build

# 2. Исправьте пути для GitHub Pages
cd build
# Замените /static/ на ./static/ в index.html

# 3. Загрузите в gh-pages ветку
git checkout gh-pages
cp -r frontend/build/* .
git add .
git commit -m "Deploy frontend"
git push origin gh-pages
```

### 2. Railway (Backend)

```bash
# 1. Установите Railway CLI
npm install -g @railway/cli

# 2. Логин
railway login

# 3. Деплой
railway deploy
```

### 3. Heroku (Backend)

```bash
# 1. Установите Heroku CLI
# 2. Создайте Procfile в корне проекта:
echo "web: cd backend && python server.py" > Procfile

# 3. Деплой
heroku create your-app-name
git push heroku main
```

## 🔧 Настройка

### GitHub Pages
1. Перейдите в Settings → Pages
2. Выберите Source: "GitHub Actions"
3. Workflow автоматически активируется

### Railway
1. Создайте аккаунт на railway.app
2. Подключите GitHub репозиторий
3. Настройте переменные окружения

### Heroku
1. Создайте приложение на heroku.com
2. Подключите GitHub репозиторий
3. Настройте переменные окружения

## 📱 Результат

После настройки у вас будет:
- **Frontend**: `https://[username].github.io/[repo-name]`
- **Backend API**: `https://[your-backend-url].railway.app` или `https://[your-app].herokuapp.com`

## 🚨 Troubleshooting

### Проблема: Белый экран на GitHub Pages
**Решение**: Проверьте, что пути в index.html относительные (`./static/` вместо `/static/`)

### Проблема: CORS ошибки
**Решение**: Настройте CORS в backend для вашего frontend домена

### Проблема: Backend не запускается
**Решение**: Проверьте requirements.txt и переменные окружения

## 📞 Поддержка

Если возникли проблемы:
1. Проверьте логи в GitHub Actions
2. Убедитесь, что все секреты настроены
3. Проверьте настройки репозитория
