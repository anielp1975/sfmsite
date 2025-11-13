'use client';

import { useState, useRef } from 'react';

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 border-t-4 border-blue-600 shadow-2xl z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src="/sfm-logo.jpg"
            alt="SFM Radio"
            className="h-16 w-auto"
          />
          <div className="hidden sm:block">
            <h3 className="text-blue-600 font-bold text-lg">SFM Radio</h3>
            <p className="text-blue-600 text-sm">Sunshine Rise FM</p>
          </div>
        </div>

        {/* Player Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={togglePlay}
            className={`px-6 py-2 rounded-lg font-bold text-white transition-all ${
              isPlaying
                ? 'bg-red-600 hover:bg-red-700'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isPlaying ? '⏸ Pause' : '▶ Play'}
          </button>
          <span className="text-blue-600 font-semibold hidden sm:inline">
            {isPlaying ? '🔴 LIVE' : 'Offline'}
          </span>
        </div>
      </div>

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src="https://stream.sfmstreaming.nl:8006/stream"
        crossOrigin="anonymous"
      />
    </div>
  );
}
