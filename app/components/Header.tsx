'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Programma', href: '/programma' },
    { label: 'Adverteren', href: '/adverteren' },
    { label: 'Team', href: '/team' },
    { label: 'Contact', href: '/contact' },
    // { label: '📊 Stats', href: '/stats' }, // Uitgeschakeld - later terugkomen
  ];

  return (
    <header className="sticky top-0 z-40 shadow-2xl">
      {/* Blauwe frequentie balk */}
      <div className="bg-blue-900 text-white py-2 px-4 overflow-hidden w-full">
        <div className="w-full">
          <div className="flex items-center justify-center w-full">
            <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-3 text-xs sm:text-sm font-semibold w-full max-w-full">
              <span className="whitespace-nowrap">📻 Rotterdam en omgeving 102.3FM</span>
              <span className="hidden sm:inline text-yellow-400">|</span>
              <span className="whitespace-nowrap">📻 Den Haag en omgeving 89.8FM</span>
              <span className="hidden sm:inline text-yellow-400">|</span>
              <span className="whitespace-nowrap">📡 Zuid holland/Zeeland DAB+</span>
              <span className="hidden sm:inline text-yellow-400">|</span>
              <span className="whitespace-nowrap">🌍 Wereldwijd via www.sunrisefm.nl</span>
              <span className="hidden sm:inline text-yellow-400">|</span>
              <span className="whitespace-nowrap">📱 SunriseFM iOS & Android APP</span>
              <span className="hidden sm:inline text-yellow-400">|</span>
              <span className="whitespace-nowrap">🎵 TuneIn</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hoofdmenu */}
      <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 border-b-4 border-blue-600 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo - Links boven */}
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="https://www.sunrisefm.eu/images/logo.jpg"
                alt="Radio SunriseFM"
                className="h-16 w-auto drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300 rounded-lg"
              />
              <div className="hidden sm:block">
                <h1 className="text-2xl font-black text-blue-900">Radio SunriseFM</h1>
                <p className="text-xs text-blue-700 font-bold">Grootste hindoestaanse radio station van Nederland</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-bold text-blue-900 hover:text-blue-600 transition-all duration-300 px-4 py-2 rounded-xl hover:bg-white/50 hover:shadow-md transform hover:scale-105"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-3 rounded-xl bg-blue-900 hover:bg-blue-800 transition-all duration-300 shadow-lg transform hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden border-t-4 border-blue-900 bg-gradient-to-b from-yellow-300 to-yellow-400 shadow-xl">
            <div className="px-4 py-4 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block font-bold text-blue-900 py-3 px-4 rounded-xl hover:bg-white/50 transition-all duration-300 hover:shadow-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
