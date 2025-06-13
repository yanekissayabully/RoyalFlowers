import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 bg-white/95 backdrop-blur-sm border-b border-stone-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Center logo */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src="https://static.tildacdn.pro/tild6361-6236-4637-b131-613039326537/Frame.png"
              alt="Логотип"
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover border border-rose-300 shadow-sm"
            />
            <span className="text-lg sm:text-xl font-light text-stone-800 tracking-wide">
              Royal Flowers
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-6 ml-auto">
            {/* ссылки-якоря работают на главной, на странице политики просто возвращают домой */}
            <a
              href="/#about"
              className="text-stone-600 hover:text-rose-400 transition-colors font-light"
            >
              О нас
            </a>
            <a
              href="/#contacts"
              className="text-stone-600 hover:text-rose-400 transition-colors font-light"
            >
              Контакты
            </a>
            <Link
              to="/privacy"
              className="text-stone-600 hover:text-rose-400 transition-colors font-light"
            >
              Политика конфиденциальности
            </Link>
          </nav>

          {/* Mobile burger */}
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

        {/* Mobile nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 inset-x-0 bg-white/95 backdrop-blur-sm border-b border-stone-100 shadow-lg">
            <nav className="px-4 py-4 space-y-4">
              <a
                href="/#about"
                className="block text-stone-600 hover:text-rose-400 font-light py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                О нас
              </a>
              <a
                href="/#contacts"
                className="block text-stone-600 hover:text-rose-400 font-light py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </a>
              <Link
                to="/privacy"
                className="block text-stone-600 hover:text-rose-400 font-light py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Политика конфиденциальности
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
