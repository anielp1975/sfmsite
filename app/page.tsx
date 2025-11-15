import WorldCupStandings from './components/WorldCupStandings'

export default function Home() {
  return (
    <div className="min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-4 overflow-hidden">
        {/* Animated background circles */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse delay-75"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left side - Text */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-bold text-sm mb-6 shadow-lg">
                🔴 NU LIVE
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                Radio <span className="text-yellow-400">SunriseFM</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-200 mb-8 leading-relaxed">
                De beste muziek voor Rotterdam & Den Haag 🌅
              </p>
              <p className="text-lg text-blue-300 mb-8">
                Luister 24/7 naar de grootste hits, lokaal nieuws en entertainment
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-yellow-400/50 transform hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none cursor-pointer">
                🎵 Start met luisteren
              </button>
            </div>
            
            {/* Right side - Logo */}
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-2xl animate-pulse"></div>
                <img
                  src="https://www.sunrisefm.eu/images/logo.jpg"
                  alt="Radio SunriseFM Logo"
                  className="relative h-64 w-auto md:h-80 drop-shadow-2xl transform hover:scale-110 transition-transform duration-500 rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luister Via Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Luister via
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Meerdere manieren om Radio SunriseFM te beluisteren
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* FM Rotterdam */}
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-110 hover:-rotate-2 transition-all duration-300 cursor-pointer group">
              <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">📻</div>
              <h3 className="text-3xl font-bold text-blue-900 mb-2">102.3 FM</h3>
              <p className="text-blue-800 font-semibold">Rotterdam e.o.</p>
              <div className="mt-4 bg-blue-900 text-yellow-400 px-4 py-2 rounded-full text-sm font-bold inline-block group-hover:animate-pulse">
                ✅ Beschikbaar
              </div>
            </div>

            {/* FM Den Haag */}
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-110 hover:rotate-2 transition-all duration-300 cursor-pointer group relative overflow-hidden">
              <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">📻</div>
              <h3 className="text-3xl font-bold text-blue-900 mb-2">89.8 FM</h3>
              <p className="text-blue-800 font-semibold">Den Haag e.o.</p>
              <div className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold inline-block animate-pulse">
                🚀 Binnenkort
              </div>
            </div>

            {/* DAB+ */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-110 hover:-rotate-2 transition-all duration-300 cursor-pointer group">
              <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">📡</div>
              <h3 className="text-3xl font-bold text-yellow-400 mb-2">DAB+</h3>
              <p className="text-yellow-200 font-semibold">Digitale radio</p>
              <div className="mt-4 bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-bold inline-block group-hover:animate-pulse">
                ✅ Beschikbaar
              </div>
            </div>

            {/* Kabel */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-110 hover:rotate-2 transition-all duration-300 cursor-pointer group">
              <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">📺</div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Ziggo & KPN</h3>
              <p className="text-yellow-200 font-semibold">Ziggo 862</p>
              <p className="text-yellow-200 font-semibold">KPN 866</p>
              <div className="mt-4 bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-bold inline-block group-hover:animate-pulse">
                ✅ Beschikbaar
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Waarom Radio SunriseFM?
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border-2 border-white/20 hover:border-yellow-400 hover:bg-white/20 hover:shadow-2xl hover:shadow-yellow-400/20 transform hover:scale-105 transition-all duration-300 group">
              <div className="text-5xl mb-4 group-hover:animate-bounce">🎵</div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4 group-hover:text-yellow-300">Beste Muziek</h3>
              <p className="text-blue-100 group-hover:text-white">
                Van klassiekers tot de nieuwste hits. Wij draaien de muziek waar jij van houdt!
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border-2 border-white/20 hover:border-yellow-400 hover:bg-white/20 hover:shadow-2xl hover:shadow-yellow-400/20 transform hover:scale-105 transition-all duration-300 group">
              <div className="text-5xl mb-4 group-hover:animate-bounce">📰</div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4 group-hover:text-yellow-300">Lokaal Nieuws</h3>
              <p className="text-blue-100 group-hover:text-white">
                Blijf op de hoogte van het laatste nieuws uit Rotterdam en Den Haag
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border-2 border-white/20 hover:border-yellow-400 hover:bg-white/20 hover:shadow-2xl hover:shadow-yellow-400/20 transform hover:scale-105 transition-all duration-300 group">
              <div className="text-5xl mb-4 group-hover:animate-bounce">🎙️</div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4 group-hover:text-yellow-300">Leuke Shows</h3>
              <p className="text-blue-100 group-hover:text-white">
                Ervaren DJ's en presentatoren zorgen voor entertainment de hele dag door
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* World Cup Standings */}
      <WorldCupStandings />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-900 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 animate-fade-in">
            Luister nu live! 🎧
          </h2>
          <p className="text-xl text-blue-800 mb-8">
            Klik op play in de speler onderaan deze pagina en geniet van de beste muziek
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-blue-900 text-yellow-400 px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-2xl hover:scale-110 transform transition-all duration-300 cursor-pointer">
              🌅 24/7 Online
            </div>
            <div className="bg-blue-900 text-yellow-400 px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-2xl hover:scale-110 transform transition-all duration-300 cursor-pointer">
              🎵 Geen Reclame
            </div>
            <div className="bg-blue-900 text-yellow-400 px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-2xl hover:scale-110 transform transition-all duration-300 cursor-pointer">
              💯 Gratis
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
