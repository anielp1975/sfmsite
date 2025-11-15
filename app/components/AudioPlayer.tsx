'use client';

import { useState, useRef, useEffect } from 'react';
import { trackEvent } from './AnalyticsTracker';

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handlePlay = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        // Track audio play event
        trackEvent('audio_play', window.location.pathname, 'Audio stream gestart');
      } catch (error) {
        console.error('Error playing audio:', error);
        alert('Kon audio niet afspelen. Probeer het opnieuw.');
      }
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      // Track audio stop event
      trackEvent('audio_stop', window.location.pathname, 'Audio stream gestopt');
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    if (newVolume > 0) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 border-t-4 border-blue-900 shadow-2xl z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4 flex-wrap md:flex-nowrap">
          {/* Status & Info */}
          <div className="flex items-center gap-4">
            <div className="bg-white/50 px-4 py-2 rounded-xl shadow-lg">
              <span className={`flex items-center gap-2 font-black text-sm ${isPlaying ? 'text-red-600' : 'text-blue-900'}`}>
                {isPlaying && <span className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></span>}
                {isPlaying ? '🔴 LIVE' : '⚫ OFFLINE'}
              </span>
            </div>
            <div className="hidden sm:block">
              <p className="text-blue-900 font-black text-sm">Radio SunriseFM</p>
              <p className="text-blue-700 font-semibold text-xs">102.3 FM • DAB+</p>
            </div>
          </div>

          {/* Player Controls */}
          <div className="flex items-center gap-3 flex-wrap justify-center md:justify-end">
            <button
              onClick={handlePlay}
              disabled={isPlaying}
              className={`px-6 py-3 rounded-xl font-black text-white transition-all shadow-lg ${
                isPlaying
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700 active:scale-95 hover:shadow-green-600/50'
              }`}
              title="Play"
            >
              ▶️ Play
            </button>
            <button
              onClick={handleStop}
              disabled={!isPlaying}
              className={`px-6 py-3 rounded-xl font-black text-white transition-all shadow-lg ${
                !isPlaying
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-red-600 hover:bg-red-700 active:scale-95 hover:shadow-red-600/50'
              }`}
              title="Stop"
            >
              ⏹️ Stop
            </button>

            {/* Volume Control */}
            <div className="flex items-center gap-3 bg-white/50 px-4 py-2 rounded-xl shadow-lg">
              <button
                onClick={toggleMute}
                className="text-2xl hover:scale-110 transition-transform"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted || volume === 0 ? '🔇' : volume < 0.5 ? '🔉' : '🔊'}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-24 h-2 bg-blue-900 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #1e3a8a 0%, #1e3a8a ${volume * 100}%, #cbd5e1 ${volume * 100}%, #cbd5e1 100%)`
                }}
                title="Volume"
              />
            </div>
          </div>
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
