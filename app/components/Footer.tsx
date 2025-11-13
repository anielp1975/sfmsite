export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 border-t-4 border-yellow-400">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo en naam */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/logo.svg"
              alt="Radio SunriseFM"
              className="h-20 w-20 mb-3"
            />
            <h3 className="text-2xl font-bold text-yellow-300">Radio SunriseFM</h3>
            <p className="text-yellow-200 text-sm mt-1">Jouw zender voor Rotterdam & Den Haag</p>
          </div>

          {/* Luister via */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold text-yellow-300 mb-4">Luister via:</h4>
            <ul className="space-y-2">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-yellow-300">📻</span>
                <span className="font-semibold">102.3 FM Rotterdam e.o.</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-yellow-300">📻</span>
                <span className="font-semibold">89.8 FM Den Haag e.o.</span>
                <span className="text-xs bg-yellow-400 text-blue-800 px-2 py-1 rounded-full font-bold">Binnenkort</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-yellow-300">📡</span>
                <span className="font-semibold">DAB+</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-yellow-300">📺</span>
                <span className="font-semibold">Ziggo 862</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-yellow-300">📺</span>
                <span className="font-semibold">KPN 866</span>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold text-yellow-300 mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="/contact" className="hover:text-yellow-300 transition-colors font-medium">
                  📧 Stuur ons een bericht
                </a>
              </li>
              <li>
                <a href="/adverteren" className="hover:text-yellow-300 transition-colors font-medium">
                  💼 Adverteren
                </a>
              </li>
              <li>
                <a href="/programma" className="hover:text-yellow-300 transition-colors font-medium">
                  🎵 Programma
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-blue-500 text-center">
          <p className="text-sm text-yellow-200">
            © {new Date().getFullYear()} Radio SunriseFM. Alle rechten voorbehouden.
          </p>
          <p className="text-xs text-blue-300 mt-2">
            De beste muziek voor Rotterdam & Den Haag 🌅
          </p>
        </div>
      </div>
    </footer>
  );
}
