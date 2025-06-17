import React from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

export default function Footer() {
  const open2GIS = () => window.open('https://2gis.kz/kostanaj/branches/70000001066076442/firm/70000001066076443/63.636548%2C53.214667?m=63.608932%2C53.195022%2F12.91', '_blank');

  return (
    <footer id="contacts" className="bg-stone-800 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Лого + реквизиты */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <div className="flex items-center space-x-2">
              <img
                src="https://static.tildacdn.pro/tild6361-6236-4637-b131-613039326537/Frame.png"
                alt="Логотип"
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover border border-rose-300 shadow-sm"
              />
              <span className="text-lg sm:text-xl font-light text-white tracking-wide">
                Royal Flowers
              </span>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-2">
                <p className="font-light text-white">Компания: ИП ЖУНУСОВ ДАМИР БАЙСАЛОВИЧ</p>
                <p className="text-xs sm:text-sm font-light">БИН (ИИН): 960304350088
</p>
                <p className="text-xs sm:text-sm font-light">Банк: АО "Kaspi Bank"
</p>
                <p className="text-xs sm:text-sm font-light">КБе: 19
</p>
                <p className="text-xs sm:text-sm font-light">БИК: CASPKZKA
</p>
                <p className="text-xs sm:text-sm font-light">Номер счёта: KZ18722S000014407801
</p>
              </div>

              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-rose-400 mt-1 flex-shrink-0" />
                <span
                  onClick={open2GIS}
                  className="text-xs sm:text-sm font-light hover:text-rose-400 cursor-pointer"
                >
                  Казахстан, г. Костанай, ул. Генерала Арстанбекова, дом 17/3
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-rose-400" />
                <a
                  href="mailto:info@royalflowers.kz"
                  className="text-xs sm:text-sm font-light hover:text-rose-400 break-all"
                >
                  royalflowers.kostanay@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Навигация */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="font-light text-white text-base sm:text-lg">Навигация</h4>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li>
                <a href="/#about" className="font-light hover:text-rose-400 transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="/privacy" className="font-light hover:text-rose-400 transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="font-light text-white text-base sm:text-lg">Контакты</h4>
            <div className="space-y-3 sm:space-y-4 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-rose-400" />
                <a href="tel:+77719114491" className="font-light hover:text-rose-400">
                  +7 (771) 911-44-91
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-rose-400" />
                <p className="font-light">24/7</p>
              </div>
                             <div className="flex space-x-4 pt-2">
                  <a href="https://wa.me/77719114491" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    {/* Иконка WhatsApp */}
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/royalflowers.kostanay/?hl=ru" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
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
          <p className="text-xs font-light text-stone-400">© 2025 Royal Flowers. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
