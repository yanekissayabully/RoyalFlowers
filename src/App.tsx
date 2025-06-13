// import React from 'react';
// import { Flower2, Truck, Heart, Gift, Phone, Mail, MapPin } from 'lucide-react';

// function App() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
// <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-stone-100 z-50">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="flex justify-between items-center h-16 relative">
      
//       {/* Левый пустой блок, чтобы центрировать */}
//       <div className="w-1/3 hidden md:block" />

//       {/* Центр — ЛОГО с твоей фоткой */}
//       <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
//         <img
//           src="https://static.tildacdn.pro/tild6361-6236-4637-b131-613039326537/Frame.png" // замени на путь к твоей фотке
//           alt="Логотип"
//           className="h-10 w-10 rounded-full object-cover border border-rose-300 shadow-sm"
//         />
//         <span className="text-xl font-light text-stone-800 tracking-wide">Royal Flowers</span>
//       </div>

//       {/* Навигация справа */}
//       <nav className="flex items-center justify-end w-1/3 space-x-6">
//         <a href="#about" className="text-stone-600 hover:text-rose-400 transition-colors duration-300 font-light">О нас</a>
//         {/* <a href="#delivery" className="text-stone-600 hover:text-rose-400 transition-colors duration-300 font-light">Доставка</a> */}
//         <a href="#contacts" className="text-stone-600 hover:text-rose-400 transition-colors duration-300 font-light">Контакты</a>
//         <a href="#privacy" className="text-stone-600 hover:text-rose-400 transition-colors duration-300 font-light">Политика</a>
//       </nav>
//     </div>
//   </div>
// </header>


//       {/* Hero Section */}
//       <section className="relative pt-16 min-h-screen flex items-center bg-gradient-to-br from-stone-50 via-rose-50/20 to-stone-50 overflow-hidden">
//         {/* Floating Elements */}
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute top-20 left-10 w-32 h-32 bg-rose-100/40 rounded-full animate-float-slow"></div>
//           <div className="absolute top-40 right-20 w-24 h-24 bg-stone-100/60 rounded-full animate-float-medium"></div>
//           <div className="absolute bottom-32 left-20 w-20 h-20 bg-rose-200/30 rounded-full animate-float-fast"></div>
//           <div className="absolute bottom-20 right-10 w-28 h-28 bg-stone-200/40 rounded-full animate-float-slow"></div>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">
//           <div className="space-y-10 animate-fade-in-up">
//             <div className="space-y-8">
//               <h1 className="text-5xl md:text-7xl font-light text-stone-800 leading-tight">
//                 Цветы, которые{' '}
//                 <span className="text-rose-400 italic animate-text-shimmer bg-gradient-to-r from-rose-400 via-rose-500 to-rose-400 bg-clip-text text-transparent bg-[length:200%_100%]">говорят</span>{' '}
//                 за вас
//               </h1>
//               <p className="text-xl text-stone-600 font-light leading-relaxed max-w-lg">
//                 Каждый букет — это история, рассказанная языком природы. 
//                 Позвольте нам выразить ваши чувства через совершенство флористики.
//               </p>
//             </div>
            
//             <button className="group bg-rose-400 hover:bg-rose-500 text-white px-10 py-5 rounded-2xl transition-all duration-500 font-light text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 animate-pulse-subtle">
//               Оформить заказ
//               <span className="inline-block ml-3 transition-transform duration-300 group-hover:translate-x-2">→</span>
//             </button>
//           </div>
          
//           <div className="relative animate-fade-in-right">
//             {/* Main flower image */}
//             <div className="relative z-20">
//               <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700 animate-gentle-bounce">
//                 <img 
//                   src="/test.webp" 
//                   alt="Элегантный букет роз" 
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>

//             {/* Secondary floating flowers */}
//             <div className="absolute -top-8 -right-8 z-10 animate-float-slow">
//               <div className="w-40 h-40 rounded-full overflow-hidden shadow-xl opacity-90 transform hover:scale-110 transition-transform duration-500">
//                 <img 
//                   src="/1RF.webp" 
//                   alt="Пионы" 
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>

//             <div className="absolute -bottom-12 -left-12 z-10 animate-float-medium">
//               <div className="w-36 h-36 rounded-full overflow-hidden shadow-xl opacity-85 transform hover:scale-110 transition-transform duration-500">
//                 <img 
//                   src="/2RF.webp" 
//                   alt="Тюльпаны" 
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>

//             <div className="absolute top-1/2 -right-16 z-5 animate-float-fast">
//               <div className="w-28 h-28 rounded-full overflow-hidden shadow-lg opacity-75 transform hover:scale-110 transition-transform duration-500">
//                 <img 
//                   src="/3RF.webp" 
//                   alt="Розы" 
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>

//             {/* Decorative elements */}
//             <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-rose-100 to-rose-200 rounded-full opacity-50 animate-pulse-gentle"></div>
//             <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-stone-100 to-stone-200 rounded-full opacity-40 animate-pulse-gentle" style={{animationDelay: '1s'}}></div>
//             <div className="absolute top-1/3 -left-8 w-24 h-24 bg-gradient-to-br from-rose-200 to-rose-300 rounded-full opacity-30 animate-pulse-gentle" style={{animationDelay: '2s'}}></div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-32 bg-stone-50/50">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="space-y-10 animate-fade-in-up">
//             <h2 className="text-4xl md:text-5xl font-light text-stone-800">О нас</h2>
//             <div className="w-20 h-0.5 bg-rose-400 mx-auto animate-expand"></div>
//             <p className="text-xl text-stone-600 font-light leading-relaxed max-w-3xl mx-auto">
//               Мы верим, что цветы могут передавать чувства. Поэтому каждый букет у нас — 
//               это продуманная композиция, оформленная с любовью. Наши флористы создают 
//               не просто букеты, а произведения искусства, способные тронуть сердце.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Trust Section */}
//       <section className="py-32 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-20 animate-fade-in-up">
//             <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-6">Почему выбирают нас</h2>
//             <div className="w-20 h-0.5 bg-rose-400 mx-auto animate-expand"></div>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
//             <div className="text-center space-y-6 animate-fade-in-up group" style={{animationDelay: '0.1s'}}>
//               <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-rose-200 transition-colors duration-300 group-hover:scale-110 transform transition-transform">
//                 <Truck className="h-10 w-10 text-rose-400" />
//               </div>
//               <h3 className="text-xl font-light text-stone-800">Быстрая доставка</h3>
//               <p className="text-stone-600 font-light leading-relaxed">
//                 Доставляем в день заказа по Москве и области
//               </p>
//             </div>
            
//             <div className="text-center space-y-6 animate-fade-in-up group" style={{animationDelay: '0.2s'}}>
//               <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-rose-200 transition-colors duration-300 group-hover:scale-110 transform transition-transform">
//                 <Heart className="h-10 w-10 text-rose-400" />
//               </div>
//               <h3 className="text-xl font-light text-stone-800">Свежие цветы</h3>
//               <p className="text-stone-600 font-light leading-relaxed">
//                 Только самые свежие цветы прямо от производителей
//               </p>
//             </div>
            
//             <div className="text-center space-y-6 animate-fade-in-up group" style={{animationDelay: '0.3s'}}>
//               <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-rose-200 transition-colors duration-300 group-hover:scale-110 transform transition-transform">
//                 <Phone className="h-10 w-10 text-rose-400" />
//               </div>
//               <h3 className="text-xl font-light text-stone-800">Поддержка 24/7</h3>
//               <p className="text-stone-600 font-light leading-relaxed">
//                 Всегда готовы помочь с выбором и оформлением
//               </p>
//             </div>
            
//             <div className="text-center space-y-6 animate-fade-in-up group" style={{animationDelay: '0.4s'}}>
//               <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-rose-200 transition-colors duration-300 group-hover:scale-110 transform transition-transform">
//                 <Gift className="h-10 w-10 text-rose-400" />
//               </div>
//               <h3 className="text-xl font-light text-stone-800">Подарочная упаковка</h3>
//               <p className="text-stone-600 font-light leading-relaxed">
//                 Элегантное оформление для особых моментов
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-stone-800 text-stone-300">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
//             <div className="lg:col-span-2 space-y-8">
//               <div className="flex items-center space-x-2">
//                 <Flower2 className="h-8 w-8 text-rose-400" />
//                 <span className="text-xl font-light text-white tracking-wide">Royal Flowers</span>
//               </div>
              
//               <div className="space-y-6">
//                 <div className="space-y-2">
//                   <p className="font-light text-white">ООО "Роял Фловерс"</p>
//                   <p className="text-sm font-light">ОГРН: 1234567890123</p>
//                   <p className="text-sm font-light">ИНН: 1234567890</p>
//                 </div>
                
//                 <div className="flex items-start space-x-2">
//                   <MapPin className="h-4 w-4 text-rose-400 mt-1 flex-shrink-0" />
//                   <p className="text-sm font-light">
//                     109028, г. Алматы, ул. Байзакова, д. 194, стр. 1, этаж 6, помещение I, комната 31
//                   </p>
//                 </div>
                
//                 <div className="flex items-center space-x-2">
//                   <Mail className="h-4 w-4 text-rose-400" />
//                   <a href="mailto:info@bloomandgrace.ru" className="text-sm font-light hover:text-rose-400 transition-colors">
//                     info@royalflowers.kz
//                   </a>
//                 </div>
//               </div>
//             </div>
            
//             <div className="space-y-6">
//               <h4 className="font-light text-white text-lg">Навигация</h4>
//               <ul className="space-y-3 text-sm">
//                 <li><a href="#about" className="font-light hover:text-rose-400 transition-colors">О нас</a></li>
//                 {/* <li><a href="#delivery" className="font-light hover:text-rose-400 transition-colors">Доставка</a></li>
//                 <li><a href="#contacts" className="font-light hover:text-rose-400 transition-colors">Контакты</a></li> */}
//                 <li><a href="#privacy" className="font-light hover:text-rose-400 transition-colors">Политика конфиденциальности</a></li>
//               </ul>
//             </div>
            
//             <div className="space-y-6">
//               <h4 className="font-light text-white text-lg">Контакты</h4>
//               <div className="space-y-3 text-sm">
//                 <p className="font-light">+7 (777) 777-77-77</p>
//                 <p className="font-light">Ежедневно с 9:00 до 21:00</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="border-t border-stone-700 mt-16 pt-10">
//             <div className="text-xs font-light text-stone-400 leading-relaxed">
//               <p className="mb-6">
//                 Также Оператор имеет право направлять Пользователю уведомления о новых продуктах и услугах, 
//                 специальных предложениях и различных событиях. Пользователь всегда может отказаться от получения 
//                 информационных сообщений, направив Оператору письмо на адрес электронной почты 
//                 <a href="mailto:info@bloomandgrace.ru" className="text-rose-400 hover:underline ml-1">
//                   info@royalflowers.kz
//                 </a> с пометкой «Отказ от уведомлений о новых продуктах и услугах и специальных предложениях».
//               </p>
              
//               <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
//                 <p>© 2025 Royal Flowers. Все права защищены.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import { Flower2, Truck, Heart, Gift, Phone, Mail, MapPin, Instagram, Menu } from 'lucide-react';

// function App() {
//   const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-stone-100 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
            
//             {/* Mobile menu button */}
//             <div className="flex md:hidden">
//               <button 
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 className="text-stone-600 hover:text-rose-400 p-2"
//               >
//                 <Menu className="h-6 w-6" />
//               </button>
//             </div>
            
//             {/* Логотип - всегда по центру на мобилках */}
//             <div className="flex items-center space-x-2 mx-auto md:mx-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
//               <img
//                 src="https://static.tildacdn.pro/tild6361-6236-4637-b131-613039326537/Frame.png"
//                 alt="Логотип"
//                 className="h-8 w-8 md:h-10 md:w-10 rounded-full object-cover border border-rose-300 shadow-sm"
//               />
//               <span className="text-lg md:text-xl font-light text-stone-800 tracking-wide">Royal Flowers</span>
//             </div>

//             {/* Навигация справа - скрыта на мобилках */}
//             <nav className="hidden md:flex items-center space-x-6">
//               <a href="#about" className="text-stone-600 hover:text-rose-400 transition-colors duration-300 font-light">О нас</a>
//               <a href="#contacts" className="text-stone-600 hover:text-rose-400 transition-colors duration-300 font-light">Контакты</a>
//               <a href="#privacy" className="text-stone-600 hover:text-rose-400 transition-colors duration-300 font-light">Политика</a>
//             </nav>

//             {/* Пустой блок для выравнивания */}
//             <div className="w-8 md:hidden"></div>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden bg-white border-t border-stone-100">
//             <div className="px-4 py-3 space-y-4">
//               <a 
//                 href="#about" 
//                 className="block py-2 text-stone-600 hover:text-rose-400"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 О нас
//               </a>
//               <a 
//                 href="#contacts" 
//                 className="block py-2 text-stone-600 hover:text-rose-400"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Контакты
//               </a>
//               <a 
//                 href="#privacy" 
//                 className="block py-2 text-stone-600 hover:text-rose-400"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Политика
//               </a>
//             </div>
//           </div>
//         )}
//       </header>

//       {/* Hero Section */}
//       <section className="relative pt-16 mobile-hero-min-height flex items-center bg-gradient-to-br from-stone-50 via-rose-50/20 to-stone-50 overflow-hidden">
//         {/* Анимированные фоновые элементы */}
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute top-20 left-4 md:left-10 w-16 h-16 md:w-32 md:h-32 bg-rose-100/40 rounded-full animate-float-slow"></div>
//           <div className="absolute top-32 md:top-40 right-4 md:right-10 w-12 h-12 md:w-24 md:h-24 bg-stone-100/60 rounded-full animate-float-medium"></div>
//           <div className="absolute bottom-40 md:bottom-32 left-6 md:left-10 w-10 h-10 md:w-20 md:h-20 bg-rose-200/30 rounded-full animate-float-fast"></div>
//           <div className="absolute bottom-20 right-6 md:right-10 w-14 h-14 md:w-28 md:h-28 bg-stone-200/40 rounded-full animate-float-slow"></div>
//         </div>

//         <div className="max-w-7xl mx-auto mobile-spacing grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
//           {/* Текстовый контент */}
//           <div className="space-y-6 md:space-y-10 animate-fade-in-up order-2 lg:order-1">
//             <div className="space-y-4 md:space-y-8">
//               <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-stone-800 leading-tight">
//                 Цветы, которые{' '}
//                 <span className="text-rose-400 italic animate-text-shimmer bg-gradient-to-r from-rose-400 via-rose-500 to-rose-400 bg-clip-text text-transparent bg-[length:200%_100%]">говорят</span>{' '}
//                 за вас
//               </h1>
//               <p className="text-base md:text-lg text-stone-600 font-light leading-relaxed">
//                 Каждый букет — это история, рассказанная языком природы. 
//                 Позвольте нам выразить ваши чувства через совершенство флористики.
//               </p>
//             </div>
            
//             <button className="group bg-rose-400 hover:bg-rose-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl transition-all duration-500 font-light text-base md:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 animate-pulse-subtle w-full sm:w-auto">
//               Оформить заказ
//               <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
//             </button>
//           </div>
          
//           {/* Изображение - теперь видно на всех устройствах */}
//           <div className="relative animate-fade-in-right order-1 lg:order-2">
//             <div className="relative z-20">
//               <div className="aspect-[3/4] lg:aspect-[4/5] mobile-hero-image transform hover:scale-105 transition-transform duration-700 animate-gentle-bounce">
//                 <img 
//                   src="/test.webp" 
//                   alt="Элегантный букет роз" 
//                   className="w-full h-full object-cover"
//                 />
//               </div>
              
//               {/* Дополнительные декоративные элементы только на больших экранах */}
//               <div className="hidden lg:block absolute -top-4 -right-4 w-20 h-20 bg-rose-100/60 rounded-full animate-float-medium"></div>
//               <div className="hidden lg:block absolute -bottom-6 -left-6 w-16 h-16 bg-stone-100/80 rounded-full animate-float-fast"></div>
//             </div>
            
//             {/* Floating элементы вокруг изображения на мобилках */}
//             <div className="lg:hidden absolute -top-2 -right-2 w-12 h-12 bg-rose-100/60 rounded-full animate-float-medium"></div>
//             <div className="lg:hidden absolute -bottom-3 -left-3 w-10 h-10 bg-stone-100/80 rounded-full animate-float-fast"></div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-16 md:py-24 bg-stone-50/50 relative overflow-hidden">
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute -left-10 -top-10 w-40 h-40 md:w-64 md:h-64 bg-rose-100/20 rounded-full blur-xl"></div>
//           <div className="absolute -right-10 bottom-0 w-48 h-48 md:w-80 md:h-80 bg-stone-100/30 rounded-full blur-xl"></div>
//         </div>
        
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//           <div className="space-y-6 md:space-y-8">
//             <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-stone-800">О нас</h2>
//             <div className="w-16 h-0.5 bg-rose-400 mx-auto animate-expand"></div>
//             <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-lg md:rounded-xl shadow-sm">
//               <p className="text-base md:text-lg text-stone-600 font-light leading-relaxed">
//                 Мы верим, что цветы могут передавать чувства. Поэтому каждый букет у нас — 
//                 это продуманная композиция, оформленная с любовью. Наши флористы создают 
//                 не просто букеты, а произведения искусства, способные тронуть сердце.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Trust Section */}
//       <section className="py-16 md:py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-10 md:mb-16">
//             <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-stone-800 mb-4 md:mb-6">Почему выбирают нас</h2>
//             <div className="w-16 h-0.5 bg-rose-400 mx-auto animate-expand"></div>
//           </div>
          
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
//             <div className="text-center space-y-4 p-4 bg-stone-50 rounded-lg">
//               <div className="w-14 h-14 md:w-16 md:h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto transition-colors duration-300">
//                 <Truck className="h-6 w-6 md:h-7 md:w-7 text-rose-400" />
//               </div>
//               <h3 className="text-lg font-light text-stone-800">Быстрая доставка</h3>
//               <p className="text-sm text-stone-600 font-light leading-relaxed">
//                 Доставляем в день заказа по Москве и области
//               </p>
//             </div>
            
//             <div className="text-center space-y-4 p-4 bg-stone-50 rounded-lg">
//               <div className="w-14 h-14 md:w-16 md:h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto transition-colors duration-300">
//                 <Heart className="h-6 w-6 md:h-7 md:w-7 text-rose-400" />
//               </div>
//               <h3 className="text-lg font-light text-stone-800">Свежие цветы</h3>
//               <p className="text-sm text-stone-600 font-light leading-relaxed">
//                 Только самые свежие цветы прямо от производителей
//               </p>
//             </div>
            
//             <div className="text-center space-y-4 p-4 bg-stone-50 rounded-lg">
//               <div className="w-14 h-14 md:w-16 md:h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto transition-colors duration-300">
//                 <Phone className="h-6 w-6 md:h-7 md:w-7 text-rose-400" />
//               </div>
//               <h3 className="text-lg font-light text-stone-800">Поддержка 24/7</h3>
//               <p className="text-sm text-stone-600 font-light leading-relaxed">
//                 Всегда готовы помочь с выбором и оформлением
//               </p>
//             </div>
            
//             <div className="text-center space-y-4 p-4 bg-stone-50 rounded-lg">
//               <div className="w-14 h-14 md:w-16 md:h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto transition-colors duration-300">
//                 <Gift className="h-6 w-6 md:h-7 md:w-7 text-rose-400" />
//               </div>
//               <h3 className="text-lg font-light text-stone-800">Подарочная упаковка</h3>
//               <p className="text-sm text-stone-600 font-light leading-relaxed">
//                 Элегантное оформление для особых моментов
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-stone-800 text-stone-300" id="contacts">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
//             <div className="lg:col-span-2 space-y-6">
//               <div className="flex items-center space-x-2">
//                 <Flower2 className="h-6 w-6 md:h-8 md:w-8 text-rose-400" />
//                 <span className="text-lg md:text-xl font-light text-white tracking-wide">Royal Flowers</span>
//               </div>
              
//               <div className="space-y-4">
//                 <div className="space-y-1">
//                   <p className="font-light text-white text-sm md:text-base">ООО "Роял Фловерс"</p>
//                   <p className="text-xs md:text-sm font-light">ОГРН: 1234567890123</p>
//                   <p className="text-xs md:text-sm font-light">ИНН: 1234567890</p>
//                 </div>
                
//                 <div className="flex items-start space-x-2">
//                   <MapPin className="h-4 w-4 text-rose-400 mt-0.5 flex-shrink-0" />
//                   <p className="text-xs md:text-sm font-light">
//                     109028, г. Алматы, ул. Байзакова, д. 194, стр. 1, этаж 6, помещение I, комната 31
//                   </p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="space-y-4">
//               <h4 className="font-light text-white text-base md:text-lg">Контакты</h4>
//               <div className="space-y-2">
//                 <div className="flex items-center space-x-2">
//                   <Phone className="h-4 w-4 text-rose-400" />
//                   <a href="tel:+77777777777" className="text-sm md:text-base font-light hover:text-rose-400 transition-colors">
//                     +7 (777) 777-77-77
//                   </a>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Mail className="h-4 w-4 text-rose-400" />
//                   <a href="mailto:info@royalflowers.kz" className="text-sm md:text-base font-light hover:text-rose-400 transition-colors">
//                     info@royalflowers.kz
//                   </a>
//                 </div>
//                 <p className="text-xs md:text-sm font-light">Ежедневно с 9:00 до 21:00</p>
                
//                 <div className="flex space-x-3 pt-1">
//                   <a href="https://instagram.com/royalflowers" target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:text-rose-300 transition-colors">
//                     <Instagram className="h-5 w-5 md:h-6 md:w-6" />
//                   </a>
//                 </div>
//               </div>
//             </div>
            
//             <div className="space-y-4">
//               <h4 className="font-light text-white text-base md:text-lg">Навигация</h4>
//               <ul className="space-y-2 text-sm md:text-base">
//                 <li><a href="#about" className="font-light hover:text-rose-400 transition-colors">О нас</a></li>
//                 <li><a href="#contacts" className="font-light hover:text-rose-400 transition-colors">Контакты</a></li>
//                 <li><a href="#privacy" className="font-light hover:text-rose-400 transition-colors">Политика</a></li>
//               </ul>
//             </div>
//           </div>
          
//           <div className="border-t border-stone-700 mt-10 pt-8">
//             <div className="text-xs font-light text-stone-400 leading-relaxed">
//               <p className="mb-3 md:mb-4">
//                 Также Оператор имеет право направлять Пользователю уведомления о новых продуктах и услугах, 
//                 специальных предложениях и различных событиях.
//               </p>
              
//               <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
//                 <p>© 2025 Royal Flowers. Все права защищены.</p>
//                 <a href="#privacy" className="hover:text-rose-400 transition-colors text-sm">Политика конфиденциальности</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;



import React, { useState } from 'react';
import { Flower2, Truck, Heart, Gift, Phone, Mail, MapPin, Menu, X, Clock } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openWhatsApp = () => {
    window.open('https://wa.me/77777777777', '_blank');
  };

  const open2GIS = () => {
    window.open('https://2gis.kz/almaty', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-stone-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo - Centered */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
              <img
                src="https://static.tildacdn.pro/tild6361-6236-4637-b131-613039326537/Frame.png"
                alt="Логотип"
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover border border-rose-300 shadow-sm"
              />
              <span className="text-lg sm:text-xl font-light text-stone-800 tracking-wide">Royal Flowers</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 ml-auto">
              <a href="#about" className="text-stone-600 hover:text-rose-400 transition-colors duration-300 font-light">О нас</a>
              <a href="#contacts" className="text-stone-600 hover:text-rose-400 transition-colors duration-300 font-light">Контакты</a>
              <a href="#privacy" className="text-stone-600 hover:text-rose-400 transition-colors duration-300 font-light">Политика</a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-stone-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-stone-600" />
              ) : (
                <Menu className="h-6 w-6 text-stone-600" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-stone-100 shadow-lg">
              <nav className="px-4 py-4 space-y-4">
                <a 
                  href="#about" 
                  className="block text-stone-600 hover:text-rose-400 transition-colors duration-300 font-light py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  О нас
                </a>
                <a 
                  href="#contacts" 
                  className="block text-stone-600 hover:text-rose-400 transition-colors duration-300 font-light py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Контакты
                </a>
                <a 
                  href="#privacy" 
                  className="block text-stone-600 hover:text-rose-400 transition-colors duration-300 font-light py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Политика
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 min-h-screen flex items-center bg-gradient-to-br from-stone-50 via-rose-50/20 to-stone-50 overflow-hidden">
        {/* Floating Elements - Hidden on mobile for performance */}
        <div className="absolute inset-0 pointer-events-none hidden sm:block">
          <div className="absolute top-20 left-10 w-16 h-16 sm:w-32 sm:h-32 bg-rose-100/40 rounded-full animate-float-slow"></div>
          <div className="absolute top-40 right-20 w-12 h-12 sm:w-24 sm:h-24 bg-stone-100/60 rounded-full animate-float-medium"></div>
          <div className="absolute bottom-32 left-20 w-10 h-10 sm:w-20 sm:h-20 bg-rose-200/30 rounded-full animate-float-fast"></div>
          <div className="absolute bottom-20 right-10 w-14 h-14 sm:w-28 sm:h-28 bg-stone-200/40 rounded-full animate-float-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
          <div className="space-y-6 sm:space-y-10 animate-fade-in-up order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-stone-800 leading-tight">
                Цветы, которые{' '}
                <span className="text-rose-400 italic animate-text-shimmer bg-gradient-to-r from-rose-400 via-rose-500 to-rose-400 bg-clip-text text-transparent bg-[length:200%_100%]">говорят</span>{' '}
                за вас
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-stone-600 font-light leading-relaxed">
                Каждый букет — это история, рассказанная языком природы. 
                Позвольте нам выразить ваши чувства через совершенство флористики.
              </p>
            </div>
            
            <button 
              onClick={openWhatsApp}
              className="group bg-rose-400 hover:bg-rose-500 text-white px-6 sm:px-10 py-3 sm:py-5 rounded-2xl transition-all duration-500 font-light text-lg sm:text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 animate-pulse-subtle w-full sm:w-auto"
            >
              Оформить заказ
              <span className="inline-block ml-3 transition-transform duration-300 group-hover:translate-x-2">→</span>
            </button>
          </div>
          
          <div className="relative animate-fade-in-right order-1 lg:order-2">
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

            {/* Secondary floating flowers - Adjusted for mobile */}
            <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 z-10 animate-float-slow">
              <div className="w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-xl opacity-90 transform hover:scale-110 transition-transform duration-500">
                <img 
                  src="/1RF.webp" 
                  alt="Пионы" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 sm:-bottom-12 -left-6 sm:-left-12 z-10 animate-float-medium">
              <div className="w-14 h-14 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full overflow-hidden shadow-xl opacity-85 transform hover:scale-110 transition-transform duration-500">
                <img 
                  src="/2RF.webp" 
                  alt="Тюльпаны" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="hidden sm:block absolute top-1/2 -right-8 lg:-right-16 z-5 animate-float-fast">
              <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-lg opacity-75 transform hover:scale-110 transition-transform duration-500">
                <img 
                  src="/3RF.webp" 
                  alt="Розы" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Decorative elements - Adjusted for mobile */}
            <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-rose-100 to-rose-200 rounded-full opacity-50 animate-pulse-gentle"></div>
            <div className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 w-20 h-20 sm:w-40 sm:h-40 bg-gradient-to-br from-stone-100 to-stone-200 rounded-full opacity-40 animate-pulse-gentle" style={{animationDelay: '1s'}}></div>
            <div className="hidden sm:block absolute top-1/3 -left-4 sm:-left-8 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-br from-rose-200 to-rose-300 rounded-full opacity-30 animate-pulse-gentle" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </section>

      {/* About Section */}
<section id="about" className="relative py-16 sm:py-24 lg:py-32 bg-stone-50/50 overflow-hidden">
  {/* Фоновое оформление — кружочки, лепестки, арт */}
  <div className="absolute inset-0 pointer-events-none z-0">
    <div className="absolute top-10 left-10 w-20 h-20 sm:w-32 sm:h-32 bg-rose-100/40 rounded-full animate-float-slow" />
    <div className="absolute bottom-20 right-20 w-16 h-16 sm:w-28 sm:h-28 bg-stone-100/50 rounded-full animate-float-medium" />
    <div className="absolute top-1/3 right-10 w-14 h-14 sm:w-24 sm:h-24 bg-rose-200/40 rounded-full animate-float-fast" />
    <div className="absolute bottom-10 left-20 w-20 h-20 sm:w-32 sm:h-32 bg-rose-300/20 rounded-full animate-pulse-gentle" />
  </div>

  {/* Основной контент */}
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
    <div className="space-y-6 sm:space-y-10 animate-fade-in-up">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-stone-800">О нас</h2>
      <div className="w-20 h-0.5 bg-rose-400 mx-auto animate-expand"></div>
      <p className="text-lg sm:text-xl text-stone-600 font-light leading-relaxed">
        Мы верим, что цветы могут передавать чувства. Поэтому каждый букет у нас — 
        это продуманная композиция, оформленная с любовью. Наши флористы создают 
        не просто букеты, а произведения искусства, способные тронуть сердце.
      </p>
    </div>
  </div>
</section>

      {/* Trust Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-20 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-stone-800 mb-4 sm:mb-6">Почему выбирают нас</h2>
            <div className="w-20 h-0.5 bg-rose-400 mx-auto animate-expand"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            <div className="text-center space-y-4 sm:space-y-6 animate-fade-in-up group" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-rose-200 transition-colors duration-300 group-hover:scale-110 transform transition-transform">
                <Truck className="h-8 w-8 sm:h-10 sm:w-10 text-rose-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-light text-stone-800">Быстрая доставка</h3>
              <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
                Доставляем в день заказа по Казахстану
              </p>
            </div>
            
            <div className="text-center space-y-4 sm:space-y-6 animate-fade-in-up group" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-rose-200 transition-colors duration-300 group-hover:scale-110 transform transition-transform">
                <Heart className="h-8 w-8 sm:h-10 sm:w-10 text-rose-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-light text-stone-800">Свежие цветы</h3>
              <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
                Только самые свежие цветы прямо от производителей
              </p>
            </div>
            
            <div className="text-center space-y-4 sm:space-y-6 animate-fade-in-up group" style={{animationDelay: '0.3s'}}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-rose-200 transition-colors duration-300 group-hover:scale-110 transform transition-transform">
                <Phone className="h-8 w-8 sm:h-10 sm:w-10 text-rose-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-light text-stone-800">Поддержка 24/7</h3>
              <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
                Всегда готовы помочь с выбором и оформлением
              </p>
            </div>
            
            <div className="text-center space-y-4 sm:space-y-6 animate-fade-in-up group" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-rose-200 transition-colors duration-300 group-hover:scale-110 transform transition-transform">
                <Gift className="h-8 w-8 sm:h-10 sm:w-10 text-rose-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-light text-stone-800">Подарочная упаковка</h3>
              <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
                Элегантное оформление для особых моментов
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="bg-stone-800 text-stone-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              {/* Логотип такой же как в хедере */}
              <div className="flex items-center space-x-2">
                <img
                  src="https://static.tildacdn.pro/tild6361-6236-4637-b131-613039326537/Frame.png"
                  alt="Логотип"
                  className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover border border-rose-300 shadow-sm"
                />
                <span className="text-lg sm:text-xl font-light text-white tracking-wide">Royal Flowers</span>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <p className="font-light text-white">ООО "Роял Фловерс"</p>
                  <p className="text-xs sm:text-sm font-light">ОГРН: 1234567890123</p>
                  <p className="text-xs sm:text-sm font-light">ИНН: 1234567890</p>
                </div>
                
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-rose-400 mt-1 flex-shrink-0" />
                  <a 
                    onClick={open2GIS}
                    className="text-xs sm:text-sm font-light hover:text-rose-400 transition-colors cursor-pointer"
                  >
                    109028, г. Алматы, ул. Байзакова, д. 194, стр. 1, этаж 6, помещение I, комната 31
                  </a>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-rose-400" />
                  <a 
                    onClick={open2GIS}
                    className="text-xs sm:text-sm font-light hover:text-rose-400 transition-colors break-all cursor-pointer"
                  >
                    info@royalflowers.kz
                  </a>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <h4 className="font-light text-white text-base sm:text-lg">Навигация</h4>
              <ul className="space-y-2 sm:space-y-3 text-sm">
                <li><a href="#about" className="font-light hover:text-rose-400 transition-colors">О нас</a></li>
                <li><a href="#privacy" className="font-light hover:text-rose-400 transition-colors">Политика конфиденциальности</a></li>
              </ul>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <h4 className="font-light text-white text-base sm:text-lg">Контакты</h4>
              <div className="space-y-3 sm:space-y-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-rose-400" />
                  <a href="tel:+77777777777" className="font-light hover:text-rose-400 transition-colors">
                    +7 (777) 777-77-77
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-rose-400" />
                  <p className="font-light">Ежедневно с 9:00 до 21:00</p>
                </div>
                
                {/* Соцсети */}
                <div className="flex space-x-4 pt-2">
                  <a href="https://wa.me/77777777777" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    {/* Иконка WhatsApp */}
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    {/* Иконка Instagram */}
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-stone-700 mt-12 sm:mt-16 pt-8 sm:pt-10">
            <div className="text-xs font-light text-stone-400 leading-relaxed">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                <p>© 2025 Royal Flowers. Все права защищены.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      <div id="privacy" className="hidden">
        {/* Privacy policy anchor */}
      </div>
    </div>
  );
}

export default App;