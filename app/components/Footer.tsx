export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-12 border-t-4 border-yellow-400 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo en naam */}
          <div className="flex flex-col items-center md:items-start">
            <div className="bg-yellow-400 p-3 rounded-2xl mb-4 shadow-xl">
              <img
                src="/logo.svg"
                alt="Radio SunriseFM"
                className="h-16 w-16"
              />
            </div>
            <h3 className="text-3xl font-black text-yellow-300">Radio SunriseFM</h3>
            <p className="text-yellow-200 text-sm mt-2 font-semibold">De beste muziek voor Rotterdam & Den Haag 🌅</p>
          </div>

          {/* Luister via */}
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-black text-yellow-300 mb-6 flex items-center justify-center md:justify-start gap-2">
              📻 Luister via
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start gap-3 bg-white/10 p-3 rounded-xl hover:bg-white/20 transition-all duration-300">
                <span className="text-2xl">📻</span>
                <span className="font-bold">102.3 FM Rotterdam e.o.</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 bg-white/10 p-3 rounded-xl hover:bg-white/20 transition-all duration-300">
                <span className="text-2xl">📻</span>
                <div className="flex-1">
                  <span className="font-bold">89.8 FM Den Haag e.o.</span>
                  <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full font-bold ml-2">Binnenkort</span>
                </div>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 bg-white/10 p-3 rounded-xl hover:bg-white/20 transition-all duration-300">
                <span className="text-2xl">📡</span>
                <span className="font-bold">DAB+</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 bg-white/10 p-3 rounded-xl hover:bg-white/20 transition-all duration-300">
                <span className="text-2xl">📺</span>
                <span className="font-bold">Ziggo 862 • KPN 866</span>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-black text-yellow-300 mb-6 flex items-center justify-center md:justify-start gap-2">
              📞 Contact & Info
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/contact" className="flex items-center justify-center md:justify-start gap-3 bg-white/10 p-3 rounded-xl hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300 font-bold group">
                  <span className="text-2xl">📧</span>
                  <span>Stuur ons een bericht</span>
                </a>
              </li>
              <li>
                <a href="/adverteren" className="flex items-center justify-center md:justify-start gap-3 bg-white/10 p-3 rounded-xl hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300 font-bold group">
                  <span className="text-2xl">💼</span>
                  <span>Adverteren bij ons</span>
                </a>
              </li>
              <li>
                <a href="/programma" className="flex items-center justify-center md:justify-start gap-3 bg-white/10 p-3 rounded-xl hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300 font-bold group">
                  <span className="text-2xl">🎵</span>
                  <span>Bekijk Programma</span>
                </a>
              </li>
              <li>
                <a href="/team" className="flex items-center justify-center md:justify-start gap-3 bg-white/10 p-3 rounded-xl hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300 font-bold group">
                  <span className="text-2xl">👥</span>
                  <span>Ons Team</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t-2 border-yellow-400/30">
          <div className="text-center">
            <p className="text-lg font-bold text-yellow-200 mb-2">
              © {new Date().getFullYear()} Radio SunriseFM. Alle rechten voorbehouden.
            </p>
            <p className="text-sm text-yellow-300 font-semibold">
              De beste muziek voor Rotterdam & Den Haag 🌅
            </p>
            <div className="mt-4 flex justify-center gap-4">
              <span className="text-xs bg-yellow-400 text-blue-900 px-3 py-1 rounded-full font-bold">102.3 FM</span>
              <span className="text-xs bg-white/20 text-yellow-300 px-3 py-1 rounded-full font-bold">DAB+</span>
              <span className="text-xs bg-white/20 text-yellow-300 px-3 py-1 rounded-full font-bold">Online</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
