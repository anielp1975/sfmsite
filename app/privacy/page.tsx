import Hero from "../components/Hero";

const lastUpdated = "16 december 2025";

export default function Privacy() {
  return (
    <div className="min-h-screen pb-24">
      <Hero
        title="Privacy & Cookies"
        subtitle={`Transparantie over hoe wij met jouw gegevens omgaan.\nLaatst bijgewerkt: ${lastUpdated}`}
        showLogo={false}
      />

      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-5xl mx-auto space-y-12 text-blue-900">
          <div className="bg-white/90 backdrop-blur-lg p-8 md:p-10 rounded-3xl shadow-xl border-2 border-blue-200">
            <h2 className="text-3xl font-bold mb-4">1. Wie zijn wij?</h2>
            <p className="leading-relaxed text-lg text-blue-800">
              SunriseFM is een Hindoestaanse radiozender gevestigd aan Korte Bajonetstraat 26, 3014 ZS Rotterdam. Wij spelen 24/7 de beste muziek en verbinden luisteraars in Nederland en wereldwijd met cultuur, actualiteit en entertainment.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-lg p-8 md:p-10 rounded-3xl shadow-xl border-2 border-blue-200">
            <h2 className="text-3xl font-bold mb-4">2. Welke gegevens verwerken we?</h2>
            <div className="space-y-4 text-blue-800">
              <p className="leading-relaxed text-lg">
                Wij verwerken alleen gegevens die nodig zijn om onze diensten te leveren en te verbeteren. Afhankelijk van je interactie met onze site kunnen de volgende gegevens verwerkt worden:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li><strong>Contactformulier:</strong> naam, e-mailadres, telefoonnummer (optioneel), onderwerp en het bericht dat je stuurt. Deze gegevens komen binnen via onze e-mailprovider Resend en worden uitsluitend gebruikt om op jouw bericht te reageren.</li>
                <li><strong>Luistergedrag:</strong> technische gegevens over het gebruik van de audiostream (zoals play- en pauzeacties) wanneer je toestemming hebt gegeven voor analytische cookies.</li>
                <li><strong>Device-informatie:</strong> browsertype, schermresolutie en vergelijkbare gegevens die automatisch worden verzameld voor beveiliging en foutopsporing. Deze gegevens zijn niet herleidbaar tot een individu.</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-lg p-8 md:p-10 rounded-3xl shadow-xl border-2 border-blue-200">
            <h2 className="text-3xl font-bold mb-4">3. Cookies en vergelijkbare technieken</h2>
            <p className="leading-relaxed text-lg text-blue-800 mb-4">
              Cookies zijn kleine tekstbestanden die op je apparaat worden opgeslagen. We gebruiken de volgende categorieën cookies:
            </p>
            <div className="space-y-4 text-lg text-blue-800">
              <div>
                <h3 className="text-2xl font-semibold">Essentiële cookies</h3>
                <p>Deze zijn nodig om de website te laten werken, bijvoorbeeld om je cookievoorkeuren op te slaan.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Analytische cookies (optioneel)</h3>
                <p>Met jouw toestemming gebruiken we analytische cookies om anonieme statistieken te verzamelen over bezoekgedrag. Hiermee zien we welke pagina’s populair zijn en hoe we de site kunnen verbeteren.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Geen marketing cookies</h3>
                <p>Op dit moment gebruiken we geen tracking- of marketingcookies van derden.</p>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-lg p-8 md:p-10 rounded-3xl shadow-xl border-2 border-blue-200">
            <h2 className="text-3xl font-bold mb-4">4. Analyse & tooling</h2>
            <p className="leading-relaxed text-lg text-blue-800 mb-4">
              We gebruiken een eigen analysetool die draait via onze Next.js API. Wanneer je analytische cookies accepteert, registreren we events zoals pageviews en het starten of pauzeren van de audiostream. Deze gegevens worden geaggregeerd en zijn niet bedoeld om individuele bezoekers te volgen. De gegevens worden opgeslagen op onze eigen infrastructuur en niet gedeeld met derden.
            </p>
            <p className="leading-relaxed text-lg text-blue-800">
              Voor het versturen van contactformulieren maken we gebruik van Resend. De gegevens worden per e-mail doorgestuurd naar het officiële SunriseFM contactadres en worden niet voor marketingdoeleinden gebruikt zonder jouw expliciete toestemming.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-lg p-8 md:p-10 rounded-3xl shadow-xl border-2 border-blue-200">
            <h2 className="text-3xl font-bold mb-4">5. Bewaartermijnen</h2>
            <ul className="list-disc pl-6 space-y-2 text-lg text-blue-800">
              <li><strong>Contactverzoeken:</strong> bewaren we zolang nodig is om je vraag af te handelen en maximaal 12 maanden daarna.</li>
              <li><strong>Cookievoorkeuren:</strong> worden gedurende 12 maanden bewaard op je apparaat, waarna we opnieuw om toestemming vragen.</li>
              <li><strong>Analytics events:</strong> worden maximaal 14 maanden bewaard voor trendanalyses.</li>
            </ul>
          </div>

          <div className="bg-white/90 backdrop-blur-lg p-8 md:p-10 rounded-3xl shadow-xl border-2 border-blue-200">
            <h2 className="text-3xl font-bold mb-4">6. Jouw rechten</h2>
            <p className="leading-relaxed text-lg text-blue-800 mb-4">
              Als bezoeker heb je de volgende rechten:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg text-blue-800">
              <li>Recht op inzage in de persoonsgegevens die we van je verwerken.</li>
              <li>Recht op correctie of verwijdering van je gegevens.</li>
              <li>Recht op beperking van verwerking of bezwaar tegen verwerking.</li>
              <li>Recht om je toestemming in te trekken via de cookie-instellingen.</li>
              <li>Recht op dataportabiliteit voor gegevens die je zelf aan ons hebt verstrekt.</li>
            </ul>
            <p className="leading-relaxed text-lg text-blue-800 mt-4">
              Wil je gebruikmaken van één van deze rechten? Stuur een e-mail naar{' '}
              <a href="mailto:info@sunrisefm.nl" className="text-blue-600 font-semibold hover:text-purple-600">info@sunrisefm.nl</a>.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-lg p-8 md:p-10 rounded-3xl shadow-xl border-2 border-blue-200">
            <h2 className="text-3xl font-bold mb-4">7. Vragen of klachten</h2>
            <p className="leading-relaxed text-lg text-blue-800 mb-4">
              Heb je vragen over dit beleid of wil je een klacht indienen? Neem contact met ons op via{' '}
              <a href="mailto:info@sunrisefm.nl" className="text-blue-600 font-semibold hover:text-purple-600">info@sunrisefm.nl</a>.
            </p>
            <p className="leading-relaxed text-lg text-blue-800">
              Ben je niet tevreden met onze reactie, dan kun je contact opnemen met de Autoriteit Persoonsgegevens.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
