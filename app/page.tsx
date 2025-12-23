import Hero from './components/Hero'
import LiveWeather from './components/LiveWeather'
import StarnieuwsFeed from './components/StarnieuwsFeed'
import AdBanner from './components/AdBanner'

export const revalidate = 3600

export default function Home() {
  return (
    <div className="min-h-screen pb-24">
      <Hero />

      {/* Ad Banner 1 - Top Leaderboard */}
      <AdBanner size="leaderboard" position="Positie 1: Direct na Hero sectie (hoogste zichtbaarheid)" />

      {/* Ad Banner Showcase */}
      <section className="py-12 px-4 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">Advertentie voorbeelden</h2>

          {/* Verticale banners links en rechts (desktop) */}
          <div className="hidden xl:block absolute -left-44 top-16">
            <AdBanner size="skyscraper" position="Links: 160x600" />
          </div>
          <div className="hidden xl:block absolute -right-44 top-16">
            <AdBanner size="skyscraper" position="Rechts: 160x600" />
          </div>

          <div className="space-y-10">
            <div className="overflow-x-auto pb-2">
              <div className="flex gap-6 min-w-max">
                <AdBanner size="leaderboard" position="Leaderboard 1 (728x90)" />
                <AdBanner size="leaderboard" position="Leaderboard 2 (728x90)" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AdBanner size="rectangle" position="Rectangle 1 (300x250)" />
              <AdBanner size="rectangle" position="Rectangle 2 (300x250)" />
              <AdBanner size="rectangle" position="Rectangle 3 (300x250)" />
            </div>
          </div>
        </div>
      </section>

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
                Heel Nederland
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

      {/* Ad Banner 2 - Rectangle */}
      <div className="bg-white py-8">
        <AdBanner size="rectangle" position="Positie 2: Na 'Luister Via' sectie (midden content)" />
      </div>

      {/* Welcome Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-white/10 border border-yellow-400/60 text-yellow-200 font-semibold px-4 py-2 rounded-full uppercase tracking-widest text-xs">
                <span>Luister waar je ook bent</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Welkom bij Sunrise FM – Jouw geluid, jouw cultuur
              </h2>
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                Sunrise FM is dé Hindoestaanse radiozender van Rotterdam en omstreken. Wij bieden 24/7 het beste van Bollywood – van gouden klassiekers tot gloednieuwe hits – en zorgen voor een warme verbinding tussen Nederland, Suriname en de rest van de wereld.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl backdrop-blur">
                  <h3 className="text-xl font-bold text-yellow-300 mb-2">Cultuur & Community</h3>
                  <p className="text-sm text-blue-100">
                    Programma’s in Nederlands en Hindoestaans (Sarnami) met aandacht voor muziek, familieberichten, spiritualiteit en lokaal talent.
                  </p>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl backdrop-blur">
                  <h3 className="text-xl font-bold text-yellow-300 mb-2">Overal te beluisteren</h3>
                  <p className="text-sm text-blue-100">
                    FM, DAB+, kabel, app en online stream – Sunrise FM is altijd dichtbij, waar je ook bent.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-yellow-400/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
              <div className="relative bg-white/10 border border-white/20 rounded-3xl p-10 shadow-2xl backdrop-blur-lg">
                <img
                  src="https://www.sunrisefm.eu/images/logo.jpg"
                  alt="Radio SunriseFM logo"
                  className="w-48 h-auto mx-auto mb-6 drop-shadow-2xl rounded-2xl"
                />
                <div className="space-y-4 text-center">
                  <p className="text-lg text-blue-100">
                    “De stem van de Hindoestaanse gemeenschap. Van Nederland naar de wereld.”
                  </p>
                  <div className="flex justify-center gap-3 flex-wrap">
                    <span className="px-4 py-2 rounded-full bg-yellow-400 text-blue-900 font-bold text-sm shadow-lg">Sinds 2000+</span>
                    <span className="px-4 py-2 rounded-full bg-white/20 text-yellow-200 font-semibold text-sm">17 Omroepers</span>
                    <span className="px-4 py-2 rounded-full bg-white/20 text-yellow-200 font-semibold text-sm">24/7 Live</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LiveWeather className="pt-0" />

      <StarnieuwsFeed />

      {/* Ad Banner 5 - Bottom Leaderboard */}
      <div className="bg-gray-50 py-8">
        <AdBanner size="leaderboard" position="Positie 5: Voor de footer (laatste impressie)" />
      </div>

      {/* Sidebar Ad Info Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-100">
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
      </section>
    </div>
  );
}
