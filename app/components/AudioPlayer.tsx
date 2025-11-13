'use client';

import { useState, useRef, useEffect } from 'react';

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

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
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
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 border-t-4 border-blue-600 shadow-2xl z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Status */}
          <div className="flex items-center gap-3">
            <span className={`flex items-center gap-2 font-semibold ${isPlaying ? 'text-red-600' : 'text-blue-600'}`}>
              {isPlaying && <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>}
              {isPlaying ? 'LIVE' : 'OFFLINE'}
            </span>
          </div>

          {/* Player Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePlay}
              disabled={isPlaying}
              className={`px-4 py-2 rounded-lg font-bold text-white transition-all ${
                isPlaying
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700 active:scale-95'
              }`}
              title="Play"
            >
              ▶ Play
            </button>
            <button
              onClick={handleStop}
              disabled={!isPlaying}
              className={`px-4 py-2 rounded-lg font-bold text-white transition-all ${
                !isPlaying
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-red-600 hover:bg-red-700 active:scale-95'
              }`}
              title="Stop"
            >
              ⏹ Stop
            </button>

            {/* Volume Control */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="p-2 text-blue-600 hover:text-blue-700 transition-colors"
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
                className="w-20 h-2 bg-blue-600 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #314da2 0%, #314da2 ${volume * 100}%, #cbd5e1 ${volume * 100}%, #cbd5e1 100%)`
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
