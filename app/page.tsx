export default function Home() {
  return (
    <div className="min-h-screen pb-32">
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #314da2 0%, #1a3d7a 100%)' }}>
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32">
          <div className="text-center">
            {/* Logo with animation */}
            <div className="mb-8 animate-fade-in">
              <img
                src="/logo.svg"
                alt="Radio SunriseFM Logo"
                className="h-32 w-32 md:h-48 md:w-48 mx-auto drop-shadow-2xl transform hover:scale-110 transition-transform duration-300"
              />
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 animate-slide-up" style={{ color: '#fad428', textShadow: '0 4px 20px rgba(250, 212, 40, 0.4)' }}>
              Radio SunriseFM
            </h1>
            
            {/* Slogan */}
            <p className="text-2xl md:text-4xl text-yellow-200 mb-8 font-bold animate-slide-up" style={{ animationDelay: '0.2s' }}>
              De beste muziek voor Rotterdam & Den Haag 🌅
            </p>

            {/* Live Badge */}
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-2xl animate-pulse mb-12">
              <span className="w-3 h-3 bg-white rounded-full animate-ping"></span>
              LIVE UITZENDING
            </div>

            {/* CTA Button */}
            <div className="mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-xl px-10 py-5 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-yellow-400/50">
                🎵 Luister Nu Live!
              </button>
              <p className="text-yellow-200 text-sm mt-4">Gebruik de speler onderaan de pagina</p>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#fad428"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#fad428"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#fad428"></path>
          </svg>
        </div>
      </section>

      {/* Frequencies Section */}
      <section className="bg-gradient-to-b from-yellow-400 to-yellow-300 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center text-blue-900 mb-12">
            Luister via
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* FM Rotterdam */}
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-4 border-blue-600">
              <div className="text-6xl mb-4 text-center">📻</div>
              <h3 className="text-2xl font-bold text-blue-900 text-center mb-2">102.3 FM</h3>
              <p className="text-blue-700 text-center font-semibold">Rotterdam e.o.</p>
              <div className="mt-4 text-center">
                <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">Live Nu</span>
              </div>
            </div>

            {/* FM Den Haag */}
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-4 border-blue-600 relative overflow-hidden">
              <div className="absolute top-3 right-3">
                <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">Binnenkort</span>
              </div>
              <div className="text-6xl mb-4 text-center">📻</div>
              <h3 className="text-2xl font-bold text-blue-900 text-center mb-2">89.8 FM</h3>
              <p className="text-blue-700 text-center font-semibold">Den Haag e.o.</p>
            </div>

            {/* DAB+ */}
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-4 border-blue-600">
              <div className="text-6xl mb-4 text-center">📡</div>
              <h3 className="text-2xl font-bold text-blue-900 text-center mb-2">DAB+</h3>
              <p className="text-blue-700 text-center font-semibold">Digitale Radio</p>
              <div className="mt-4 text-center">
                <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">Live Nu</span>
              </div>
            </div>

            {/* Kabel */}
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-4 border-blue-600">
              <div className="text-6xl mb-4 text-center">📺</div>
              <h3 className="text-2xl font-bold text-blue-900 text-center mb-2">Via Kabel</h3>
              <p className="text-blue-700 text-center font-semibold">Ziggo 862</p>
              <p className="text-blue-700 text-center font-semibold">KPN 866</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-white to-gray-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center text-blue-900 mb-4">
            Waarom Radio SunriseFM?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Ontdek wat ons de beste zender voor Rotterdam & Den Haag maakt
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-yellow-400">
              <div className="text-5xl mb-4">🎵</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">De Beste Hits</h3>
              <p className="text-gray-600 leading-relaxed">
                Van klassiekers tot de nieuwste hits. Wij draaien de muziek waar jij van houdt, 24/7 non-stop!
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-yellow-400">
              <div className="text-5xl mb-4">🎙️</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Lokale DJ's</h3>
              <p className="text-gray-600 leading-relaxed">
                Onze ervaren DJ's kennen Rotterdam & Den Haag als hun broekzak en brengen je het laatste nieuws.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-yellow-400">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Overal Luisteren</h3>
              <p className="text-gray-600 leading-relaxed">
                Via FM, DAB+, kabel of online. Luister waar en wanneer je maar wilt, op elk apparaat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-yellow-300 mb-6">
            Klaar om te luisteren?
          </h2>
          <p className="text-xl text-yellow-100 mb-8">
            Start de speler onderaan deze pagina en geniet van non-stop muziek!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-lg px-8 py-4 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300">
              🎵 Start Speler
            </button>
            <a href="/programma" className="bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-xl border-2 border-yellow-400 shadow-xl transform hover:scale-105 transition-all duration-300">
              📅 Bekijk Programma
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
