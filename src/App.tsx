import React from 'react';
import { Flower2, Truck, Heart, Gift, Phone, Mail, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
<header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-stone-100 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16 relative">
      
      {/* Левый пустой блок, чтобы центрировать */}
      <div className="w-1/3 hidden md:block" />

      {/* Центр — ЛОГО с твоей фоткой */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
        <img
          src="/Frame.svg" // замени на путь к твоей фотке
          alt="Логотип"
          className="h-10 w-10 rounded-full object-cover border border-rose-300 shadow-sm"
        />
        <span className="text-xl font-light text-stone-800 tracking-wide">Royal Flowers</span>
      </div>

      {/* Навигация справа */}
      <nav className="flex items-center justify-end w-1/3 space-x-6">
        <a href="#about" className="text-stone-600 hover:text-rose-400 transition-colors duration-300 font-light">О нас</a>
        <a href="#delivery" className="text-stone-600 hover:text-rose-400 transition-colors duration-300 font-light">Доставка</a>
        <a href="#contacts" className="text-stone-600 hover:text-rose-400 transition-colors duration-300 font-light">Контакты</a>
        <a href="#privacy" className="text-stone-600 hover:text-rose-400 transition-colors duration-300 font-light">Политика</a>
      </nav>
    </div>
  </div>
</header>


      {/* Hero Section */}
      <section className="relative pt-16 min-h-screen flex items-center bg-gradient-to-br from-stone-50 via-rose-50/20 to-stone-50 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-rose-100/40 rounded-full animate-float-slow"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-stone-100/60 rounded-full animate-float-medium"></div>
          <div className="absolute bottom-32 left-20 w-20 h-20 bg-rose-200/30 rounded-full animate-float-fast"></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-stone-200/40 rounded-full animate-float-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-10 animate-fade-in-up">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-light text-stone-800 leading-tight">
                Цветы, которые{' '}
                <span className="text-rose-400 italic animate-text-shimmer bg-gradient-to-r from-rose-400 via-rose-500 to-rose-400 bg-clip-text text-transparent bg-[length:200%_100%]">говорят</span>{' '}
                за вас
              </h1>
              <p className="text-xl text-stone-600 font-light leading-relaxed max-w-lg">
                Каждый букет — это история, рассказанная языком природы. 
                Позвольте нам выразить ваши чувства через совершенство флористики.
              </p>
            </div>
            
            <button className="group bg-rose-400 hover:bg-rose-500 text-white px-10 py-5 rounded-sm transition-all duration-500 font-light text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 animate-pulse-subtle">
              Оформить заказ
              <span className="inline-block ml-3 transition-transform duration-300 group-hover:translate-x-2">→</span>
            </button>
          </div>
          
          <div className="relative animate-fade-in-right">
            {/* Main flower image */}
            <div className="relative z-20">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700 animate-gentle-bounce">
                <img 
                  src="/test.webp" 
                  alt="Элегантный букет роз" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Secondary floating flowers */}
            <div className="absolute -top-8 -right-8 z-10 animate-float-slow">
              <div className="w-40 h-40 rounded-full overflow-hidden shadow-xl opacity-90 transform hover:scale-110 transition-transform duration-500">
                <img 
                  src="https://images.pexels.com/photos/1368382/pexels-photo-1368382.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Пионы" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="absolute -bottom-12 -left-12 z-10 animate-float-medium">
              <div className="w-36 h-36 rounded-full overflow-hidden shadow-xl opacity-85 transform hover:scale-110 transition-transform duration-500">
                <img 
                  src="https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Тюльпаны" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="absolute top-1/2 -right-16 z-5 animate-float-fast">
              <div className="w-28 h-28 rounded-full overflow-hidden shadow-lg opacity-75 transform hover:scale-110 transition-transform duration-500">
                <img 
                  src="https://images.pexels.com/photos/1187079/pexels-photo-1187079.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Розы" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-rose-100 to-rose-200 rounded-full opacity-50 animate-pulse-gentle"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-stone-100 to-stone-200 rounded-full opacity-40 animate-pulse-gentle" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/3 -left-8 w-24 h-24 bg-gradient-to-br from-rose-200 to-rose-300 rounded-full opacity-30 animate-pulse-gentle" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-stone-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-10 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-light text-stone-800">О нас</h2>
            <div className="w-20 h-0.5 bg-rose-400 mx-auto animate-expand"></div>
            <p className="text-xl text-stone-600 font-light leading-relaxed max-w-3xl mx-auto">
              Мы верим, что цветы могут передавать чувства. Поэтому каждый букет у нас — 
              это продуманная композиция, оформленная с любовью. Наши флористы создают 
              не просто букеты, а произведения искусства, способные тронуть сердце.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-6">Почему выбирают нас</h2>
            <div className="w-20 h-0.5 bg-rose-400 mx-auto animate-expand"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center space-y-6 animate-fade-in-up group" style={{animationDelay: '0.1s'}}>
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-rose-200 transition-colors duration-300 group-hover:scale-110 transform transition-transform">
                <Truck className="h-10 w-10 text-rose-400" />
              </div>
              <h3 className="text-xl font-light text-stone-800">Быстрая доставка</h3>
              <p className="text-stone-600 font-light leading-relaxed">
                Доставляем в день заказа по Москве и области
              </p>
            </div>
            
            <div className="text-center space-y-6 animate-fade-in-up group" style={{animationDelay: '0.2s'}}>
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-rose-200 transition-colors duration-300 group-hover:scale-110 transform transition-transform">
                <Heart className="h-10 w-10 text-rose-400" />
              </div>
              <h3 className="text-xl font-light text-stone-800">Свежие цветы</h3>
              <p className="text-stone-600 font-light leading-relaxed">
                Только самые свежие цветы прямо от производителей
              </p>
            </div>
            
            <div className="text-center space-y-6 animate-fade-in-up group" style={{animationDelay: '0.3s'}}>
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-rose-200 transition-colors duration-300 group-hover:scale-110 transform transition-transform">
                <Phone className="h-10 w-10 text-rose-400" />
              </div>
              <h3 className="text-xl font-light text-stone-800">Поддержка 24/7</h3>
              <p className="text-stone-600 font-light leading-relaxed">
                Всегда готовы помочь с выбором и оформлением
              </p>
            </div>
            
            <div className="text-center space-y-6 animate-fade-in-up group" style={{animationDelay: '0.4s'}}>
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-rose-200 transition-colors duration-300 group-hover:scale-110 transform transition-transform">
                <Gift className="h-10 w-10 text-rose-400" />
              </div>
              <h3 className="text-xl font-light text-stone-800">Подарочная упаковка</h3>
              <p className="text-stone-600 font-light leading-relaxed">
                Элегантное оформление для особых моментов
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 text-stone-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center space-x-2">
                <Flower2 className="h-8 w-8 text-rose-400" />
                <span className="text-xl font-light text-white tracking-wide">Royal Flowers</span>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="font-light text-white">ООО "Роял Фловерс"</p>
                  <p className="text-sm font-light">ОГРН: 1234567890123</p>
                  <p className="text-sm font-light">ИНН: 1234567890</p>
                </div>
                
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-rose-400 mt-1 flex-shrink-0" />
                  <p className="text-sm font-light">
                    109028, г. Алматы, ул. Байзакова, д. 194, стр. 1, этаж 6, помещение I, комната 31
                  </p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-rose-400" />
                  <a href="mailto:info@bloomandgrace.ru" className="text-sm font-light hover:text-rose-400 transition-colors">
                    info@royalflowers.kz
                  </a>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-light text-white text-lg">Навигация</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#about" className="font-light hover:text-rose-400 transition-colors">О нас</a></li>
                <li><a href="#delivery" className="font-light hover:text-rose-400 transition-colors">Доставка</a></li>
                <li><a href="#contacts" className="font-light hover:text-rose-400 transition-colors">Контакты</a></li>
                <li><a href="#privacy" className="font-light hover:text-rose-400 transition-colors">Политика конфиденциальности</a></li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-light text-white text-lg">Контакты</h4>
              <div className="space-y-3 text-sm">
                <p className="font-light">+7 (777) 777-77-77</p>
                <p className="font-light">Ежедневно с 9:00 до 21:00</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-stone-700 mt-16 pt-10">
            <div className="text-xs font-light text-stone-400 leading-relaxed">
              <p className="mb-6">
                Также Оператор имеет право направлять Пользователю уведомления о новых продуктах и услугах, 
                специальных предложениях и различных событиях. Пользователь всегда может отказаться от получения 
                информационных сообщений, направив Оператору письмо на адрес электронной почты 
                <a href="mailto:info@bloomandgrace.ru" className="text-rose-400 hover:underline ml-1">
                  info@royalflowers.kz
                </a> с пометкой «Отказ от уведомлений о новых продуктах и услугах и специальных предложениях».
              </p>
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                <p>© 2025 Royal Flowers. Все права защищены.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;