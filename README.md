# 🚀 Sotohit - Apple Store

Современный интернет-магазин оригинальной техники Apple.

## 🌐 Демо

- **GitHub Pages**: [https://codlxflare.github.io/sotohit_test](https://codlxflare.github.io/sotohit_test)
- **React App**: [https://codlxflare.github.io/sotohit_test/frontend/build/](https://codlxflare.github.io/sotohit_test/frontend/build/)

## 📁 Структура проекта

```
├── frontend/          # React приложение
│   ├── build/         # Собранное приложение для продакшена
│   ├── src/           # Исходный код
│   └── public/        # Статические файлы
├── backend/           # Python FastAPI backend
├── .github/workflows/ # GitHub Actions для автоматического деплоя
└── README.md          # Этот файл
```

## 🚀 Автоматический деплой

Проект настроен для автоматического деплоя на GitHub Pages:

1. **Frontend** автоматически собирается и деплоится при каждом push
2. **GitHub Actions** обрабатывает сборку и деплой
3. **Пути к ресурсам** автоматически исправляются для GitHub Pages

## 🛠 Локальная разработка

### Frontend
```bash
cd frontend
npm install
npm start
```

### Backend
```bash
cd backend
pip install -r requirements.txt
python server.py
```

## 📱 Технологии

- **Frontend**: React, Tailwind CSS, Radix UI
- **Backend**: Python, FastAPI, MongoDB
- **Деплой**: GitHub Pages, GitHub Actions

## 🔧 Настройка

1. Клонируйте репозиторий
2. Установите зависимости
3. Запустите локально или используйте GitHub Pages

---

**Статус**: ✅ Работает на GitHub Pages