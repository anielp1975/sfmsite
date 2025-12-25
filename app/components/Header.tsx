'use client';

import Link from 'next/link';
import type { ChangeEvent } from 'react';
import { useEffect, useRef, useState } from 'react';
import { trackEvent } from './AnalyticsTracker';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const audioRef = useRef<HTMLAudioElement>(null);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Programma', href: '/programma' },
    { label: 'Adverteren', href: '/adverteren' },
    { label: 'Team', href: '/team' },
    { label: 'Contact', href: '/contact' },
    // { label: '📊 Stats', href: '/stats' }, // Uitgeschakeld - later terugkomen
  ];

  useEffect(() => {
    if (!isPlayerOpen || !audioRef.current) return;

    audioRef.current.volume = volume;

    const start = async () => {
      try {
        await audioRef.current?.play();
        setIsPlaying(true);
        trackEvent('audio_play', window.location.pathname, 'Hero header popup player gestart');
      } catch (err) {
        console.warn('Autoplay geblokkeerd, gebruiker moet op play klikken', err);
      }
    };

    start();
  }, [isPlayerOpen, volume]);

  const openPlayer = () => {
    setIsPlayerOpen(true);
    setIsMenuOpen(false);
  };

  const closePlayer = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setIsPlayerOpen(false);
  };

  const handlePlay = async () => {
    if (!audioRef.current) return;
    try {
      audioRef.current.volume = volume;
      await audioRef.current.play();
      setIsPlaying(true);
      trackEvent('audio_play', window.location.pathname, 'Hero header popup player gestart');
    } catch (err) {
      console.error('Kon stream niet starten:', err);
    }
  };

  const handlePause = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
    trackEvent('audio_stop', window.location.pathname, 'Hero header popup player gepauzeerd');
  };

  const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

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
              <button
                onClick={() => openPlayer()}
                className="ml-2 flex items-center gap-2 bg-blue-900 text-yellow-300 font-black px-4 py-2 rounded-xl shadow-lg hover:bg-blue-800 hover:shadow-blue-800/40 transition-all duration-300 transform hover:scale-105"
                aria-label="Luister live"
              >
                🔴 Luister Live
              </button>
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
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  openPlayer();
                }}
                className="w-full font-black text-blue-900 py-3 px-4 rounded-xl bg-white/70 hover:bg-white transition-all duration-300 hover:shadow-md"
                aria-label="Luister live"
              >
                🔴 Luister Live
              </button>
            </div>
          </nav>
        )}

        {isPlayerOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative">
              <button
                onClick={closePlayer}
                className="absolute top-3 right-3 text-blue-900 hover:text-red-600 font-black text-xl"
                aria-label="Sluit speler"
              >
                ×
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg">
                  <img src="https://www.sunrisefm.eu/images/logo.jpg" alt="Radio SunriseFM" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-blue-700">Live stream</p>
                  <h3 className="text-xl font-black text-blue-900">Radio SunriseFM</h3>
                  <p className="text-xs text-gray-600">102.3 FM • DAB+ • Wereldwijd online</p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className={`text-sm font-black ${isPlaying ? 'text-red-600' : 'text-gray-600'}`}>
                    {isPlaying ? '🔴 LIVE' : '⏸️ Gepauzeerd'}
                  </span>
                  <span className="text-xs text-gray-500">Volume: {Math.round(volume * 100)}%</span>
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                  <button
                    onClick={handlePlay}
                    className="px-4 py-2 rounded-lg bg-green-600 text-white font-black shadow-md hover:bg-green-700 transition-all"
                  >
                    ▶️ Play
                  </button>
                  <button
                    onClick={handlePause}
                    className="px-4 py-2 rounded-lg bg-red-600 text-white font-black shadow-md hover:bg-red-700 transition-all"
                  >
                    ⏸️ Pause
                  </button>
                  <label className="flex items-center gap-2 text-sm text-blue-900 font-semibold">
                    🔊 Volume
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="w-32 accent-blue-900"
                      aria-label="Volume"
                    />
                  </label>
                </div>
              </div>

              <audio
                ref={audioRef}
                src="https://stream.sfmstreaming.nl:8006/stream"
                crossOrigin="anonymous"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
