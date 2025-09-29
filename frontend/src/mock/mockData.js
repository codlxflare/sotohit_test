// Mock data for the tech store with full catalog
export const products = [
  // iPhone 17 Series - Новинки
  {
    id: 1,
    name: 'iPhone 17',
    price: 89990,
    oldPrice: 99990,
    discount: 10,
    image: '/iphone_17_promo.webp',
    category: 'iphone',
    badge: 'Новинка',
    specs: ['128GB', 'A18 чип', 'Новый дизайн'],
    colors: ['#1a1a1a', '#8b7355', '#4a5568', '#f7fafc'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'Новейший iPhone 17 с революционным дизайном и чипом A18.',
    features: [
      'Дисплей Super Retina XDR 6.1"',
      'Чип A18',
      'Камера 48 Мп',
      'Время работы до 24 часов видео'
    ]
  },
  {
    id: 2,
    name: 'iPhone Air',
    price: 69990,
    oldPrice: 79990,
    discount: 12,
    image: '/iphone_air_promo.webp',
    category: 'iphone',
    badge: 'Новинка',
    specs: ['128GB', 'A17 чип', 'Легкий дизайн'],
    colors: ['#1a1a1a', '#8b7355', '#4a5568', '#f7fafc'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'iPhone Air - самый легкий и тонкий iPhone с отличной производительностью.',
    features: [
      'Дисплей Liquid Retina 6.1"',
      'Чип A17',
      'Камера 48 Мп',
      'Время работы до 20 часов видео'
    ]
  },
  {
    id: 3,
    name: 'iPhone 17 Pro',
    price: 119990,
    oldPrice: 129990,
    discount: 8,
    image: '/iphone_17_pro_all_colors.webp',
    category: 'iphone',
    badge: 'Новинка',
    specs: ['256GB', 'A18 Pro', 'Pro-камера'],
    colors: ['#1a1a1a', '#8b7355', '#4a5568', '#f7fafc'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'iPhone 17 Pro с передовыми возможностями камеры и производительностью Pro.',
    features: [
      'Дисплей Super Retina XDR 6.3"',
      'Чип A18 Pro',
      'Система камер Pro 48 Мп',
      'Время работы до 27 часов видео'
    ]
  },
  {
    id: 4,
    name: 'iPhone 17 Pro Max',
    price: 134990,
    oldPrice: 144990,
    discount: 7,
    image: '/iphone_17_pro_max_all_colors.webp',
    category: 'iphone',
    badge: 'Новинка',
    specs: ['256GB', 'A18 Pro', 'Pro-камера'],
    colors: ['#1a1a1a', '#8b7355', '#4a5568', '#f7fafc'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'Самый мощный iPhone 17 Pro Max с революционной системой камер Pro.',
    features: [
      'Дисплей Super Retina XDR 6.9"',
      'Чип A18 Pro',
      'Система камер Pro 48 Мп',
      'Время работы до 29 часов видео'
    ]
  },

  // iPhone 16 Series
  {
    id: 5,
    name: 'iPhone 16e',
    price: 59990,
    image: '/iphone_16e.webp',
    category: 'iphone',
    badge: 'Хит продаж',
    specs: ['128GB', 'A17 чип'],
    colors: ['#1a1a1a', '#8b7355', '#4a5568', '#f7fafc'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'iPhone 16e - доступный iPhone с отличной производительностью.',
    features: [
      'Дисплей Liquid Retina 6.1"',
      'Чип A17',
      'Камера 48 Мп',
      'Время работы до 18 часов видео'
    ]
  },
  {
    id: 6,
    name: 'iPhone 16',
    price: 79990,
    image: '/iphone_16_all_color.webp',
    category: 'iphone',
    badge: 'Хит продаж',
    specs: ['128GB', 'A18 чип'],
    colors: ['#1a1a1a', '#8b7355', '#4a5568', '#f7fafc'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'iPhone 16 с новым дизайном и улучшенной камерой.',
    features: [
      'Дисплей Super Retina XDR 6.1"',
      'Чип A18',
      'Камера 48 Мп',
      'Время работы до 22 часов видео'
    ]
  },
  {
    id: 7,
    name: 'iPhone 16 Plus',
    price: 89990,
    image: '/iphone_16_plus.webp',
    category: 'iphone',
    specs: ['128GB', 'A18 чип'],
    colors: ['#1a1a1a', '#8b7355', '#4a5568', '#f7fafc'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'iPhone 16 Plus с большим дисплеем и увеличенным временем работы.',
    features: [
      'Дисплей Super Retina XDR 6.7"',
      'Чип A18',
      'Камера 48 Мп',
      'Время работы до 26 часов видео'
    ]
  },
  {
    id: 8,
    name: 'iPhone 16 Pro',
    price: 109990,
    image: '/iphone_16_pro_max.webp',
    category: 'iphone',
    specs: ['256GB', 'A18 Pro', 'Pro-камера'],
    colors: ['#1a1a1a', '#8b7355', '#4a5568', '#f7fafc'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'iPhone 16 Pro с передовыми возможностями камеры.',
    features: [
      'Дисплей Super Retina XDR 6.3"',
      'Чип A18 Pro',
      'Система камер Pro 48 Мп',
      'Время работы до 27 часов видео'
    ]
  },
  {
    id: 9,
    name: 'iPhone 16 Pro Max',
    price: 124990,
    image: '/iphone_16_pro_max.webp',
    category: 'iphone',
    specs: ['256GB', 'A18 Pro', 'Pro-камера'],
    colors: ['#1a1a1a', '#8b7355', '#4a5568', '#f7fafc'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'Самый мощный iPhone 16 Pro Max с революционной системой камер Pro.',
    features: [
      'Дисплей Super Retina XDR 6.9"',
      'Чип A18 Pro',
      'Система камер Pro 48 Мп',
      'Время работы до 29 часов видео'
    ]
  },

  // iPhone 15 Series
  {
    id: 10,
    name: 'iPhone 15',
    price: 69990,
    image: '/iphone_15.webp',
    category: 'iphone',
    specs: ['128GB', 'A16 Bionic'],
    colors: ['#1a1a1a', '#8b7355', '#4a5568', '#f7fafc'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'iPhone 15 с новым дизайном и улучшенной камерой.',
    features: [
      'Дисплей Super Retina XDR 6.1"',
      'Чип A16 Bionic',
      'Камера 48 Мп',
      'Время работы до 20 часов видео'
    ]
  },
  {
    id: 11,
    name: 'iPhone 15 Plus',
    price: 79990,
    image: '/iphone_15_plus.webp',
    category: 'iphone',
    specs: ['128GB', 'A16 Bionic'],
    colors: ['#1a1a1a', '#8b7355', '#4a5568', '#f7fafc'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'iPhone 15 Plus с большим дисплеем и увеличенным временем работы.',
    features: [
      'Дисплей Super Retina XDR 6.7"',
      'Чип A16 Bionic',
      'Камера 48 Мп',
      'Время работы до 26 часов видео'
    ]
  },
  {
    id: 12,
    name: 'iPhone 14',
    price: 59990,
    image: '/iphone-13-wallpapers-and-model-colors.webp',
    category: 'iphone',
    specs: ['128GB', 'A15 Bionic'],
    colors: ['#1a1a1a', '#8b7355', '#4a5568', '#f7fafc'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'iPhone 14 с отличной производительностью и камерой.',
    features: [
      'Дисплей Super Retina XDR 6.1"',
      'Чип A15 Bionic',
      'Камера 12 Мп',
      'Время работы до 20 часов видео'
    ]
  },
  {
    id: 13,
    name: 'iPhone 13',
    price: 49990,
    image: '/iphone-13-wallpapers-and-model-colors.webp',
    category: 'iphone',
    specs: ['128GB', 'A15 Bionic'],
    colors: ['#1a1a1a', '#8b7355', '#4a5568', '#f7fafc'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'iPhone 13 с отличной производительностью и камерой.',
    features: [
      'Дисплей Super Retina XDR 6.1"',
      'Чип A15 Bionic',
      'Камера 12 Мп',
      'Время работы до 19 часов видео'
    ]
  },

  // iPad Series
  {
    id: 14,
    name: 'iPad Pro 11" (2024)',
    price: 89990,
    image: '/ipad_new_2022.webp',
    category: 'ipad',
    badge: 'Новинка',
    specs: ['256GB', 'M4 чип', 'Wi-Fi'],
    colors: ['#6b7280', '#1f2937'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'Невероятно тонкий и мощный iPad Pro с чипом M4.',
    features: [
      'Дисплей Ultra Retina XDR 11"',
      'Чип M4',
      'Камера 12 Мп',
      'Поддержка Apple Pencil Pro'
    ]
  },
  {
    id: 15,
    name: 'iPad Pro 13" (2024)',
    price: 109990,
    image: '/ipad_new_2022.webp',
    category: 'ipad',
    badge: 'Новинка',
    specs: ['256GB', 'M4 чип', 'Wi-Fi'],
    colors: ['#6b7280', '#1f2937'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'Невероятно тонкий и мощный iPad Pro с чипом M4.',
    features: [
      'Дисплей Ultra Retina XDR 13"',
      'Чип M4',
      'Камера 12 Мп',
      'Поддержка Apple Pencil Pro'
    ]
  },
  {
    id: 16,
    name: 'iPad Air 11" (2024)',
    price: 59990,
    image: '/ipad_new_2022.webp',
    category: 'ipad',
    badge: 'Новинка',
    specs: ['128GB', 'M2 чип', 'Wi-Fi'],
    colors: ['#6b7280', '#3b82f6', '#8b5cf6', '#f59e0b'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'iPad Air с большим дисплеем и производительностью M2.',
    features: [
      'Дисплей Liquid Retina 11"',
      'Чип M2',
      'Камера 12 Мп',
      'Поддержка Apple Pencil'
    ]
  },
  {
    id: 17,
    name: 'iPad Air 13" (2024)',
    price: 79990,
    image: '/ipad_new_2022.webp',
    category: 'ipad',
    badge: 'Новинка',
    specs: ['128GB', 'M2 чип', 'Wi-Fi'],
    colors: ['#6b7280', '#3b82f6', '#8b5cf6', '#f59e0b'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'iPad Air с большим дисплеем и производительностью M2.',
    features: [
      'Дисплей Liquid Retina 13"',
      'Чип M2',
      'Камера 12 Мп',
      'Поддержка Apple Pencil'
    ]
  },
  {
    id: 18,
    name: 'iPad 11" (2025)',
    price: 44990,
    image: '/ipad_new_2022.webp',
    category: 'ipad',
    badge: 'Новинка',
    specs: ['64GB', 'A14 Bionic', 'Wi-Fi'],
    colors: ['#6b7280', '#3b82f6', '#8b5cf6', '#f59e0b'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'Универсальный iPad для работы и развлечений.',
    features: [
      'Дисплей Liquid Retina 11"',
      'Чип A14 Bionic',
      'Камера 12 Мп',
      'Совместим с Magic Keyboard'
    ]
  },
  {
    id: 19,
    name: 'iPad mini (A17 Pro) 2024',
    price: 59990,
    image: '/ipad_new_2022.webp',
    category: 'ipad',
    badge: 'Новинка',
    specs: ['64GB', 'A17 Pro', 'Wi-Fi'],
    colors: ['#6b7280', '#3b82f6', '#8b5cf6', '#f59e0b'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'Компактный iPad mini с мощным чипом A17 Pro.',
    features: [
      'Дисплей Liquid Retina 8.3"',
      'Чип A17 Pro',
      'Камера 12 Мп',
      'Поддержка Apple Pencil'
    ]
  },

  // Mac Series
  {
    id: 20,
    name: 'MacBook Air 15" (2025)',
    price: 154990,
    image: '/apple_mac.webp',
    category: 'mac',
    badge: 'Новинка',
    specs: ['256GB SSD', '8GB RAM', 'M3'],
    colors: ['#6b7280', '#1f2937', '#f3f4f6', '#f59e0b'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'Большой экран, невероятная портативность.',
    features: [
      'Дисплей Liquid Retina 15.3"',
      'Чип M3',
      'До 18 часов работы',
      'Камера FaceTime HD 1080p'
    ]
  },
  {
    id: 21,
    name: 'MacBook Air 15" (2024)',
    price: 144990,
    image: '/apple_mac.webp',
    category: 'mac',
    specs: ['256GB SSD', '8GB RAM', 'M2'],
    colors: ['#6b7280', '#1f2937', '#f3f4f6', '#f59e0b'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'Большой экран, невероятная портативность.',
    features: [
      'Дисплей Liquid Retina 15.3"',
      'Чип M2',
      'До 18 часов работы',
      'Камера FaceTime HD 1080p'
    ]
  },
  {
    id: 22,
    name: 'MacBook Air 13" (2025)',
    price: 124990,
    image: '/apple_mac.webp',
    category: 'mac',
    badge: 'Новинка',
    specs: ['256GB SSD', '8GB RAM', 'M3'],
    colors: ['#6b7280', '#1f2937', '#f3f4f6', '#f59e0b'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'Невероятно тонкий и легкий MacBook Air.',
    features: [
      'Дисплей Liquid Retina 13.6"',
      'Чип M3',
      'До 18 часов работы',
      'Камера FaceTime HD 1080p'
    ]
  },
  {
    id: 23,
    name: 'MacBook Air 13" (2024)',
    price: 114990,
    image: '/apple_mac.webp',
    category: 'mac',
    specs: ['256GB SSD', '8GB RAM', 'M2'],
    colors: ['#6b7280', '#1f2937', '#f3f4f6', '#f59e0b'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'Невероятно тонкий и легкий MacBook Air.',
    features: [
      'Дисплей Liquid Retina 13.6"',
      'Чип M2',
      'До 18 часов работы',
      'Камера FaceTime HD 1080p'
    ]
  },
  {
    id: 24,
    name: 'MacBook Air 13" (2022)',
    price: 99990,
    image: '/apple_mac.webp',
    category: 'mac',
    specs: ['256GB SSD', '8GB RAM', 'M2'],
    colors: ['#6b7280', '#1f2937', '#f3f4f6', '#f59e0b'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'Невероятно тонкий и легкий MacBook Air.',
    features: [
      'Дисплей Liquid Retina 13.6"',
      'Чип M2',
      'До 18 часов работы',
      'Камера FaceTime HD 1080p'
    ]
  },
  {
    id: 25,
    name: 'MacBook Air (2020)',
    price: 89990,
    image: '/apple_mac.webp',
    category: 'mac',
    specs: ['256GB SSD', '8GB RAM', 'M1'],
    colors: ['#6b7280', '#1f2937', '#f3f4f6', '#f59e0b'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'Невероятно тонкий и легкий MacBook Air.',
    features: [
      'Дисплей Liquid Retina 13.3"',
      'Чип M1',
      'До 18 часов работы',
      'Камера FaceTime HD 720p'
    ]
  },
  {
    id: 26,
    name: 'MacBook Pro (2024)',
    price: 199990,
    image: '/apple_mac.webp',
    category: 'mac',
    badge: 'Новинка',
    specs: ['512GB SSD', '18GB RAM', 'M4 Pro'],
    colors: ['#6b7280', '#1f2937'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'Самый мощный MacBook Pro для профессиональных задач.',
    features: [
      'Дисплей Liquid Retina XDR 16.2"',
      'Чип M4 Pro',
      'До 22 часов работы',
      'Система камер 1080p HD'
    ]
  },
  {
    id: 27,
    name: 'MacBook Pro (2023)',
    price: 179990,
    image: '/apple_mac.webp',
    category: 'mac',
    badge: 'Новинка',
    specs: ['512GB SSD', '18GB RAM', 'M3 Pro'],
    colors: ['#6b7280', '#1f2937'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'Самый мощный MacBook Pro для профессиональных задач.',
    features: [
      'Дисплей Liquid Retina XDR 16.2"',
      'Чип M3 Pro',
      'До 22 часов работы',
      'Система камер 1080p HD'
    ]
  },
  {
    id: 28,
    name: 'iMac 24" M3',
    price: 154990,
    image: '/apple_mac.webp',
    category: 'mac',
    badge: 'Хит продаж',
    specs: ['256GB SSD', '8GB RAM', 'M3'],
    colors: ['#6b7280', '#1f2937', '#f3f4f6', '#f59e0b'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'Стильный моноблок с ярким дисплеем 4.5K.',
    features: [
      'Дисплей Retina 4.5K 24"',
      'Чип M3',
      'Камера FaceTime HD 1080p',
      'Magic Keyboard и Magic Mouse'
    ]
  },

  // Apple Watch Series
  {
    id: 29,
    name: 'Apple Watch Ultra 3',
    price: 99990,
    image: '/apple_watch.webp',
    category: 'watch',
    badge: 'Новинка',
    specs: ['49mm', 'Титановый', 'GPS + Cellular'],
    colors: ['#6b7280'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'Самые прочные и функциональные Apple Watch.',
    features: [
      'Титановый корпус 49 мм',
      'Дисплей Always-On Retina',
      'До 36 часов работы',
      'Водонепроницаемость 100 м'
    ]
  },
  {
    id: 30,
    name: 'Apple Watch Ultra 2',
    price: 89990,
    image: '/apple_watch.webp',
    category: 'watch',
    badge: 'Новинка',
    specs: ['49mm', 'Титановый', 'GPS + Cellular'],
    colors: ['#6b7280'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'Самые прочные и функциональные Apple Watch.',
    features: [
      'Титановый корпус 49 мм',
      'Дисплей Always-On Retina',
      'До 36 часов работы',
      'Водонепроницаемость 100 м'
    ]
  },
  {
    id: 31,
    name: 'Apple Watch Series 11',
    price: 49990,
    image: '/apple_watch.webp',
    category: 'watch',
    badge: 'Новинка',
    specs: ['45mm', 'Алюминий', 'GPS'],
    colors: ['#1f2937', '#ef4444', '#3b82f6', '#10b981', '#f59e0b'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'Новое поколение Apple Watch с улучшенными функциями здоровья.',
    features: [
      'Алюминиевый корпус 45 мм',
      'Дисплей Always-On Retina',
      'До 18 часов работы',
      'Датчик кислорода в крови'
    ]
  },
  {
    id: 32,
    name: 'Apple Watch Series 10',
    price: 44990,
    image: '/apple_watch.webp',
    category: 'watch',
    badge: 'Новинка',
    specs: ['45mm', 'Алюминий', 'GPS'],
    colors: ['#1f2937', '#ef4444', '#3b82f6', '#10b981', '#f59e0b'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'Новое поколение Apple Watch с улучшенными функциями здоровья.',
    features: [
      'Алюминиевый корпус 45 мм',
      'Дисплей Always-On Retina',
      'До 18 часов работы',
      'Датчик кислорода в крови'
    ]
  },
  {
    id: 33,
    name: 'Apple Watch SE 2024',
    price: 29990,
    image: '/apple_watch.webp',
    category: 'watch',
    specs: ['44mm', 'Алюминий', 'GPS'],
    colors: ['#1f2937', '#ef4444', '#3b82f6', '#10b981', '#f59e0b'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'Доступные Apple Watch с основными функциями.',
    features: [
      'Алюминиевый корпус 44 мм',
      'Дисплей Retina',
      'До 18 часов работы',
      'Основные функции здоровья'
    ]
  },
  {
    id: 34,
    name: 'Apple Watch SE 2023',
    price: 24990,
    image: '/apple_watch.webp',
    category: 'watch',
    specs: ['44mm', 'Алюминий', 'GPS'],
    colors: ['#1f2937', '#ef4444', '#3b82f6', '#10b981', '#f59e0b'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'Доступные Apple Watch с основными функциями.',
    features: [
      'Алюминиевый корпус 44 мм',
      'Дисплей Retina',
      'До 18 часов работы',
      'Основные функции здоровья'
    ]
  },

  // AirPods Series
  {
    id: 35,
    name: 'AirPods Pro 3',
    price: 29990,
    image: '/airpods.webp',
    category: 'airpods',
    badge: 'Новинка',
    specs: ['USB-C', 'Шумоподавление', 'MagSafe'],
    colors: ['#f3f4f6'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'Профессиональные наушники с активным шумоподавлением.',
    features: [
      'Активное шумоподавление',
      'Пространственное аудио',
      'До 30 часов работы',
      'Зарядный чехол MagSafe'
    ]
  },
  {
    id: 36,
    name: 'AirPods Pro 2',
    price: 24990,
    image: '/airpods.webp',
    category: 'airpods',
    badge: 'Хит продаж',
    specs: ['USB-C', 'Шумоподавление', 'MagSafe'],
    colors: ['#f3f4f6'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'Профессиональные наушники с активным шумоподавлением.',
    features: [
      'Активное шумоподавление',
      'Пространственное аудио',
      'До 30 часов работы',
      'Зарядный чехол MagSafe'
    ]
  },
  {
    id: 37,
    name: 'AirPods 4 (2024)',
    price: 19990,
    image: '/airpods.webp',
    category: 'airpods',
    badge: 'Новинка',
    specs: ['USB-C', 'Пространственное аудио'],
    colors: ['#f3f4f6'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'AirPods с пространственным аудио и новым дизайном.',
    features: [
      'Пространственное аудио',
      'Адаптивный эквалайзер',
      'До 30 часов работы',
      'Защита от пота и влаги'
    ]
  },
  {
    id: 38,
    name: 'AirPods Max',
    price: 64990,
    image: '/airpods.webp',
    category: 'airpods',
    specs: ['Накладные', 'Шумоподавление', '5 цветов'],
    colors: ['#6b7280', '#1f2937', '#ef4444', '#3b82f6', '#10b981'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'Премиальные накладные наушники с Hi-Fi звуком.',
    features: [
      'Активное шумоподавление',
      'Пространственное аудио',
      'До 20 часов работы',
      'Premium материалы'
    ]
  },
  {
    id: 39,
    name: 'AirPods Pro 2 Color',
    price: 26990,
    image: '/airpods.webp',
    category: 'airpods',
    specs: ['USB-C', 'Шумоподавление', 'Цветные'],
    colors: ['#f3f4f6', '#ef4444', '#3b82f6', '#10b981', '#f59e0b'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'AirPods Pro 2 в цветных вариантах.',
    features: [
      'Активное шумоподавление',
      'Пространственное аудио',
      'До 30 часов работы',
      'Цветные варианты'
    ]
  },
  {
    id: 40,
    name: 'AirPods 4 Color',
    price: 21990,
    image: '/airpods.webp',
    category: 'airpods',
    badge: 'Новинка',
    specs: ['USB-C', 'Пространственное аудио', 'Цветные'],
    colors: ['#f3f4f6', '#ef4444', '#3b82f6', '#10b981', '#f59e0b'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'AirPods 4 в цветных вариантах.',
    features: [
      'Пространственное аудио',
      'Адаптивный эквалайзер',
      'До 30 часов работы',
      'Цветные варианты'
    ]
  },
  {
    id: 41,
    name: 'AirPods 3 Color',
    price: 18990,
    image: '/airpods.webp',
    category: 'airpods',
    specs: ['USB-C', 'Пространственное аудио', 'Цветные'],
    colors: ['#f3f4f6', '#ef4444', '#3b82f6', '#10b981', '#f59e0b'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'AirPods 3 в цветных вариантах.',
    features: [
      'Пространственное аудио',
      'Адаптивный эквалайзер',
      'До 30 часов работы',
      'Цветные варианты'
    ]
  },
  {
    id: 42,
    name: 'Apple EarPods',
    price: 2990,
    image: '/airpods.webp',
    category: 'airpods',
    specs: ['Проводные', '3.5mm'],
    colors: ['#f3f4f6'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'Проводные наушники Apple с отличным звуком.',
    features: [
      'Проводные наушники',
      '3.5mm разъем',
      'Отличное качество звука',
      'Удобная посадка'
    ]
  },

  // AirTag
  {
    id: 43,
    name: 'AirTag',
    price: 3990,
    image: '/airtag.webp',
    category: 'airtag',
    specs: ['Bluetooth', 'Батарея 1 год'],
    colors: ['#f3f4f6'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'Умная метка для отслеживания ваших вещей.',
    features: [
      'Bluetooth отслеживание',
      'Батарея до 1 года',
      'Водонепроницаемость',
      'Интеграция с Find My'
    ]
  },
  {
    id: 44,
    name: 'Метка AirTag',
    price: 3990,
    image: '/airtag.webp',
    category: 'airtag',
    specs: ['Bluetooth', 'Батарея 1 год'],
    colors: ['#f3f4f6'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'Умная метка для отслеживания ваших вещей.',
    features: [
      'Bluetooth отслеживание',
      'Батарея до 1 года',
      'Водонепроницаемость',
      'Интеграция с Find My'
    ]
  },
  {
    id: 45,
    name: 'Аксессуары для AirTag',
    price: 1990,
    image: '/airtag.webp',
    category: 'airtag',
    specs: ['Кожаные ремешки', 'Ключницы'],
    colors: ['#8b7355', '#1f2937', '#ef4444', '#3b82f6', '#10b981'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'Аксессуары для AirTag - ремешки, ключницы и многое другое.',
    features: [
      'Кожаные ремешки',
      'Ключницы',
      'Различные цвета',
      'Высокое качество'
    ]
  },

  // Игровые приставки
  {
    id: 46,
    name: 'Sony PlayStation 5',
    price: 59990,
    image: '/game.webp',
    category: 'gaming',
    badge: 'Хит продаж',
    specs: ['825GB SSD', '4K', 'Ray Tracing'],
    colors: ['#1f2937'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'Новейшая игровая консоль Sony PlayStation 5.',
    features: [
      '825GB SSD',
      '4K игровая графика',
      'Ray Tracing',
      '3D Audio'
    ]
  },

  // Бытовая техника Dyson
  {
    id: 47,
    name: 'Dyson V15 Detect',
    price: 79990,
    image: '/dyson.webp',
    category: 'dyson',
    badge: 'Хит продаж',
    specs: ['Беспроводной', '60 минут работы', 'Лазерная подсветка'],
    colors: ['#1f2937'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'Мощный беспроводной пылесос Dyson с лазерной подсветкой.',
    features: [
      'Беспроводной пылесос',
      '60 минут работы',
      'Лазерная подсветка',
      'Мощная всасывающая сила'
    ]
  },

  // USB кабели
  {
    id: 48,
    name: 'USB-C кабель',
    price: 2990,
    image: '/usb.webp',
    category: 'accessories',
    specs: ['USB-C', '1м', 'Быстрая зарядка'],
    colors: ['#1f2937'],
    inStock: true,
    isFavorite: false,
    featured: true,
    description: 'Высококачественный USB-C кабель для быстрой зарядки.',
    features: [
      'USB-C разъем',
      'Длина 1 метр',
      'Быстрая зарядка',
      'Высокое качество'
    ]
  }
];

export const featuredProducts = products.filter(p => p.featured).slice(0, 8);

export const categories = [
  {
    id: 'iphone',
    name: 'iPhone',
    description: 'Смартфоны Apple',
    image: '/iphone_17_promo.webp',
    icon: '📱'
  },
  {
    id: 'ipad',
    name: 'iPad',
    description: 'Планшеты Apple',
    image: '/ipad_new_2022.webp',
    icon: '💻'
  },
  {
    id: 'mac',
    name: 'Mac',
    description: 'Компьютеры Apple',
    image: '/apple_mac.webp',
    icon: '🖥️'
  },
  {
    id: 'watch',
    name: 'Apple Watch',
    description: 'Умные часы Apple',
    image: '/apple_watch.webp',
    icon: '⌚'
  },
  {
    id: 'airpods',
    name: 'AirPods',
    description: 'Наушники Apple',
    image: '/airpods.webp',
    icon: '🎧'
  },
  {
    id: 'airtag',
    name: 'AirTag',
    description: 'Умные метки Apple',
    image: '/airtag.webp',
    icon: '🏷️'
  },
  {
    id: 'gaming',
    name: 'Игровые приставки',
    description: 'Sony PlayStation',
    image: '/game.webp',
    icon: '🎮'
  },
  {
    id: 'dyson',
    name: 'Dyson',
    description: 'Бытовая техника',
    image: '/dyson.webp',
    icon: '🧹'
  },
  {
    id: 'accessories',
    name: 'Аксессуары',
    description: 'Кабели и переходники',
    image: '/usb.webp',
    icon: '🔌'
  }
];

export const cart = [];

export const user = {
  name: 'Пользователь',
  email: 'user@example.com',
  phone: '+7 (999) 123-45-67'
};