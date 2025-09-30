# 🚀 Sotohit - Автоматический деплой

## 📦 Что готово

### ✅ GitHub Actions Workflows
- **Frontend деплой** на GitHub Pages
- **Backend деплой** на Railway/Heroku  
- **Автоматическая сборка** при каждом push

### ✅ Локальные скрипты
- `deploy-local.bat` - для Windows
- `deploy-local.sh` - для Linux/Mac

## 🎯 Быстрый старт

### 1. Загрузите код на GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 2. Настройте GitHub Pages
1. Перейдите в **Settings** → **Pages**
2. Выберите **Source**: "GitHub Actions"
3. Workflow автоматически активируется

### 3. Настройте Backend (опционально)
- **Railway**: Подключите репозиторий на railway.app
- **Heroku**: Создайте приложение и подключите GitHub

## 🔗 Результат

После настройки у вас будет:
- **Frontend**: `https://YOUR_USERNAME.github.io/YOUR_REPO`
- **Backend**: `https://YOUR_APP.railway.app` (или Heroku URL)

## 🛠 Локальное тестирование

### Windows
```bash
deploy-local.bat
```

### Linux/Mac
```bash
./deploy-local.sh
```

## 📋 Структура деплоя

```
.github/workflows/
├── gh-pages.yml          # Frontend → GitHub Pages
├── deploy.yml            # Полный деплой
└── backend-deploy.yml    # Backend → Railway

deploy-local.bat          # Windows скрипт
deploy-local.sh           # Linux/Mac скрипт
DEPLOYMENT.md             # Подробные инструкции
```

## 🚨 Важные моменты

1. **Пути к статическим файлам** автоматически исправляются
2. **CORS** настроен для работы с GitHub Pages
3. **Переменные окружения** нужно настроить в настройках репозитория

## 📞 Поддержка

Если что-то не работает:
1. Проверьте **Actions** вкладку на GitHub
2. Убедитесь, что **Pages** включены
3. Проверьте логи в **Actions**

---

**Готово!** 🎉 Ваш проект теперь автоматически деплоится при каждом push!
