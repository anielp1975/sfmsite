'use client';

import Link from 'next/link';
import { useEffect, useRef, useState, type ChangeEvent } from 'react';
import { trackEvent } from '../components/AnalyticsTracker';

const STREAM_URL = 'https://stream.sfmstreaming.nl:8006/stream';

export default function PlayerPage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    trackEvent('player_page_open', '/player', 'Player venster geopend');
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handlePlay = async () => {
    if (!audioRef.current) return;

    try {
      audioRef.current.muted = false;
      audioRef.current.volume = volume;
      await audioRef.current.play();
      setIsPlaying(true);
      setIsMuted(false);
      trackEvent('audio_play', '/player', 'Stream gestart via player pagina');
    } catch (error) {
      console.error('Kon audio niet starten:', error);
      alert('Kon audio niet afspelen. Controleer of uw browser afspelen toestaat.');
    }
  };

  const handleStop = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
    trackEvent('audio_stop', '/player', 'Stream gestopt via player pagina');
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    const nextMuted = !isMuted;
    audioRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    if (newVolume > 0) {
      setIsMuted(false);
      if (audioRef.current) {
        audioRef.current.muted = false;
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 text-white flex items-center justify-center px-4 py-10">
      <div className="max-w-3xl w-full space-y-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-yellow-300 font-semibold hover:text-yellow-200 transition">← Terug naar website</Link>
          <span className="text-xs text-blue-100">Nieuw venster speler</span>
        </div>

        <div className="bg-white/10 border border-white/20 rounded-3xl shadow-2xl backdrop-blur-lg p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-xl bg-white/30">
                <img src="https://www.sunrisefm.eu/images/logo.jpg" alt="Radio SunriseFM" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm text-blue-100">Live stream</p>
                <h1 className="text-3xl font-black text-yellow-300">Radio SunriseFM</h1>
                <p className="text-sm text-blue-100">102.3 FM • 89.8 FM • DAB+ • Wereldwijd online</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className={`px-3 py-1 rounded-full text-xs font-black ${isPlaying ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
                {isPlaying ? '🔴 LIVE' : '⏸️ Gepauzeerd'}
              </span>
              <span className="text-xs text-blue-100">Volume {Math.round(volume * 100)}%</span>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-[1.5fr_1fr] items-center">
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={handlePlay}
                disabled={isPlaying}
                className={`px-6 py-3 rounded-xl font-black text-blue-900 transition-all shadow-lg ${
                  isPlaying
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-yellow-300 hover:bg-yellow-200 hover:-translate-y-0.5 active:translate-y-0'
                }`}
              >
                ▶️ Play
              </button>
              <button
                onClick={handleStop}
                disabled={!isPlaying}
                className={`px-6 py-3 rounded-xl font-black text-white transition-all shadow-lg ${
                  !isPlaying
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-red-600 hover:bg-red-700 hover:-translate-y-0.5 active:translate-y-0'
                }`}
              >
                ⏹️ Stop
              </button>
              <button
                onClick={toggleMute}
                className="px-4 py-3 rounded-xl bg-white/20 text-white font-black hover:bg-white/30 transition-all shadow-lg"
              >
                {isMuted || volume === 0 ? '🔇 Mute' : '🔊 Mute'}
              </button>
            </div>

            <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-4 py-3 shadow-inner">
              <span className="text-sm text-blue-100 font-semibold">🔊 Volume</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full accent-yellow-300"
                aria-label="Volume"
              />
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-sm text-blue-100 space-y-2">
          <p className="font-semibold text-yellow-200">Tips</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Laat dit venster open voor continue audio.</li>
            <li>Gebruik de volume schuif als de systeemvolume te hard of te zacht staat.</li>
            <li>Werkt het niet? Controleer of uw browser pop-ups en autoplay toestaat.</li>
          </ul>
        </div>
      </div>

      <audio ref={audioRef} src={STREAM_URL} crossOrigin="anonymous" />
    </div>
  );
}
