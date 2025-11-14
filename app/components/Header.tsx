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
  ];

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 shadow-2xl border-b-4 border-blue-600 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo - Links boven */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/logo.svg"
              alt="Radio SunriseFM"
              className="h-16 w-16 drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="hidden sm:block">
              <h1 className="text-2xl font-black text-blue-900">Radio SunriseFM</h1>
              <p className="text-xs text-blue-700 font-bold">Rotterdam & Den Haag 🌅</p>
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

          {/* Zenderinfo desktop */}
          <div className="hidden lg:flex flex-col items-end text-right bg-white/30 px-4 py-2 rounded-xl">
            <p className="text-sm font-black text-blue-900">📻 102.3 FM Rotterdam</p>
            <p className="text-xs font-bold text-orange-600">🔜 89.8 FM Den Haag</p>
          </div>

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
            <div className="pt-4 border-t-4 border-blue-900 mt-4 bg-white/30 p-4 rounded-xl">
              <p className="text-sm font-black text-blue-900">📻 102.3 FM Rotterdam</p>
              <p className="text-xs font-bold text-orange-600">🔜 89.8 FM Den Haag</p>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
