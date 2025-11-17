import WorldCupStandings from './components/WorldCupStandings'
// import AdBanner from './components/AdBanner' // Uitgeschakeld - later terugkomen

export default function Home() {
  return (
    <div className="min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 text-white overflow-hidden">
        {/* Animated background with floating glow effect */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-12 md:gap-16">
            {/* Left side - Text */}
            <div className="text-center md:text-left space-y-6">
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                <span className="text-yellow-400 drop-shadow-lg">SunriseFM</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed max-w-xl">
                De stem van de hindoestaanse gemeenschap.<br />
                Van Nederland naar de wereld.
              </p>
            </div>
            
            {/* Right side - Logo */}
            <div className="flex justify-center items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400/30 rounded-full blur-3xl animate-pulse"></div>
                <img
                  src="https://www.sunrisefm.eu/images/logo.jpg"
                  alt="Radio SunriseFM Logo"
                  className="relative h-64 w-auto md:h-80 drop-shadow-2xl transform hover:scale-105 transition-transform duration-700 rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Banner 1 - Top Leaderboard - UITGESCHAKELD */}
      {/* <AdBanner size="leaderboard" position="Positie 1: Direct na Hero sectie (hoogste zichtbaarheid)" /> */}

      {/* Luister Via Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* FM Rotterdam */}
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-110 hover:-rotate-2 transition-all duration-300 cursor-pointer group">
              <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">📻</div>
              <h3 className="text-3xl font-bold text-blue-900 mb-2">102.3 FM</h3>
              <p className="text-blue-800 font-semibold">Rotterdam e.o.</p>
            </div>

            {/* FM Den Haag */}
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-110 hover:rotate-2 transition-all duration-300 cursor-pointer group relative overflow-hidden">
              <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">📻</div>
              <h3 className="text-3xl font-bold text-blue-900 mb-2">89.8 FM</h3>
              <p className="text-blue-800 font-semibold">Den Haag e.o.</p>
            </div>

            {/* DAB+ */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-110 hover:-rotate-2 transition-all duration-300 cursor-pointer group">
              <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">📡</div>
              <h3 className="text-3xl font-bold text-yellow-400 mb-2">DAB+</h3>
              <p className="text-yellow-200 font-semibold">Digitale radio</p>
            </div>

            {/* Kabel */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-110 hover:rotate-2 transition-all duration-300 cursor-pointer group relative">
              <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-black shadow-lg animate-pulse">
                LANDELIJK
              </div>
              <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">📺</div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Ziggo & KPN</h3>
              <p className="text-yellow-200 font-semibold">Ziggo 862</p>
              <p className="text-yellow-200 font-semibold">KPN 866</p>
            </div>

            {/* Wereldwijd */}
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-110 hover:-rotate-2 transition-all duration-300 cursor-pointer group">
              <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">🌍</div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Wereldwijd</h3>
              <p className="text-yellow-200 font-semibold text-sm">SunriseFM App</p>
              <p className="text-yellow-200 font-semibold text-sm">Website</p>
              <p className="text-yellow-200 font-semibold text-sm">TuneIn</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Banner 2 - Rectangle - UITGESCHAKELD */}
      {/* <div className="bg-white py-8">
        <AdBanner size="rectangle" position="Positie 2: Na 'Luister Via' sectie (midden content)" />
      </div> */}

      {/* Welcome Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Welkom bij Sunrise FM – De stem van de Hindoestaanse gemeenschap
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                Sunrise FM is dé Hindoestaanse radiozender van Rotterdam en omstreken. Met een kleurrijke mix van muziek, actualiteit, familieberichten en cultuur brengen wij dagelijks duizenden luisteraars samen – jong en oud, hier én in het buitenland. Via FM, DAB+, internet en kabel zijn wij 24/7 te beluisteren. Of je nu luistert voor Bollywoodmuziek, nieuws uit Suriname of gewoon voor een warme groet van familie: Sunrise FM is jouw vertrouwde geluid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Banner 3 - Leaderboard - UITGESCHAKELD */}
      {/* <div className="bg-gray-900 py-8">
        <AdBanner size="leaderboard" position="Positie 3: Na 'Waarom SunriseFM' sectie" />
      </div> */}

      {/* World Cup Standings */}
      <WorldCupStandings />

      {/* Ad Banner 4 - Rectangle - UITGESCHAKELD */}
      {/* <div className="bg-blue-900 py-8">
        <AdBanner size="rectangle" position="Positie 4: Na WK Kwalificatie stand (sportliefhebbers)" />
      </div> */}

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

      {/* Ad Banner 5 - Bottom Leaderboard - UITGESCHAKELD */}
      {/* <div className="bg-gray-50 py-8">
        <AdBanner size="leaderboard" position="Positie 5: Voor de footer (laatste impressie)" />
      </div> */}

      {/* Sidebar Ad Info Section - UITGESCHAKELD */}
      {/* <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
            📢 Extra Advertentiemogelijkheden
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4">🔹 Sidebar Banners (Desktop)</h3>
              <p className="text-gray-700 mb-4">
                Sticky banners aan de zijkant die meescrollen met de gebruiker. Ideaal voor langdurige zichtbaarheid.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Skyscraper formaat: 160x600px</li>
                <li>✓ Altijd in beeld tijdens scrollen</li>
                <li>✓ Premium positie</li>
                <li>✓ Alleen zichtbaar op desktop/tablet</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-yellow-400">
              <h3 className="text-xl font-bold text-blue-900 mb-4">📱 Mobile Banners</h3>
              <p className="text-gray-700 mb-4">
                Speciale advertenties geoptimaliseerd voor mobiele gebruikers. Groot bereik!
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Mobile banner: 320x100px</li>
                <li>✓ Tussen content secties</li>
                <li>✓ Sticky bottom banner mogelijk</li>
                <li>✓ Hoge engagement op mobiel</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-blue-900 to-purple-900 p-8 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">💼 Interesse in adverteren?</h3>
            <p className="text-lg mb-6">Bereik duizenden luisteraars met uw boodschap!</p>
            <a href="/adverteren" className="inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-8 py-4 rounded-full shadow-xl hover:scale-105 transition-all duration-300">
              Bekijk alle mogelijkheden →
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
}
