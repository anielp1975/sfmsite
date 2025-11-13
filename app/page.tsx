export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pb-32 pt-8" style={{ background: 'linear-gradient(135deg, #314da2 0%, #1a3d7a 100%)' }}>
      <div className="text-center max-w-4xl">
        {/* Logo */}
        <img
          src="/logo.svg"
          alt="Radio SunriseFM Logo"
          className="h-48 w-48 mx-auto mb-8 drop-shadow-2xl"
        />
        
        {/* Hoofdtitel */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ color: '#fad428' }}>
          Radio SunriseFM
        </h1>
        
        {/* Slogan */}
        <p className="text-2xl md:text-3xl text-yellow-200 mb-12 font-semibold">
          De beste muziek voor Rotterdam & Den Haag 🌅
        </p>

        {/* Luister via sectie */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border-4 border-yellow-400 shadow-2xl">
          <h2 className="text-3xl font-bold text-yellow-300 mb-6">Luister via:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="bg-yellow-400 text-blue-800 p-4 rounded-xl font-bold flex items-center gap-3 shadow-lg">
              <span className="text-3xl">📻</span>
              <div>
                <p className="text-xl">102.3 FM</p>
                <p className="text-sm">Rotterdam e.o.</p>
              </div>
            </div>
            <div className="bg-yellow-400 text-blue-800 p-4 rounded-xl font-bold flex items-center gap-3 shadow-lg relative">
              <span className="text-3xl">📻</span>
              <div>
                <p className="text-xl">89.8 FM</p>
                <p className="text-sm">Den Haag e.o.</p>
              </div>
              <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">Binnenkort</span>
            </div>
            <div className="bg-blue-700 text-yellow-300 p-4 rounded-xl font-bold flex items-center gap-3 shadow-lg">
              <span className="text-3xl">📡</span>
              <p className="text-xl">DAB+</p>
            </div>
            <div className="bg-blue-700 text-yellow-300 p-4 rounded-xl font-bold flex items-center gap-3 shadow-lg">
              <span className="text-3xl">📺</span>
              <div>
                <p className="text-xl">Ziggo 862</p>
                <p className="text-xl">KPN 866</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-yellow-400 text-blue-800 p-6 rounded-2xl shadow-2xl">
          <p className="text-xl font-bold mb-2">🎵 Luister nu live!</p>
          <p className="text-sm">Gebruik de speler onderaan de pagina</p>
        </div>
      </div>
    </div>
  );
}
