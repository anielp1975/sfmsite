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
    <header className="sticky top-0 z-40 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 shadow-lg border-b-4 border-blue-600">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo - Links boven */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo.svg"
              alt="Radio SunriseFM"
              className="h-16 w-16 drop-shadow-lg"
            />
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-blue-600">Radio SunriseFM</h1>
              <p className="text-xs text-blue-600 font-medium">Rotterdam & Den Haag</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-bold text-blue-600 hover:text-blue-800 transition-colors px-3 py-2 rounded-lg hover:bg-yellow-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Zenderinfo desktop */}
          <div className="hidden lg:flex flex-col items-end text-right">
            <p className="text-sm font-bold text-blue-600">📻 102.3 FM Rotterdam</p>
            <p className="text-xs font-semibold text-blue-600">Binnenkort: 89.8 FM Den Haag</p>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
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
        <nav className="md:hidden border-t-2 border-blue-600 bg-yellow-300">
          <div className="px-4 py-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block font-bold text-blue-600 py-2 px-3 rounded-lg hover:bg-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t-2 border-blue-600 mt-4">
              <p className="text-sm font-bold text-blue-600">📻 102.3 FM Rotterdam</p>
              <p className="text-xs font-semibold text-blue-600">Binnenkort: 89.8 FM Den Haag</p>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
