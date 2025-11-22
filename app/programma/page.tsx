import Hero from '../components/Hero'

export default function Programma() {
  return (
    <div className="min-h-screen pb-24">
      <Hero 
        title="Programma" 
        subtitle="Ontdek ons gevarieerde programma.\n24/7 de beste muziek en shows!"
        showLogo={false}
      />
      
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/80 backdrop-blur-lg p-12 rounded-2xl shadow-xl border-2 border-blue-200">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Programmaoverzicht</h2>
            <p className="text-lg text-gray-700 mb-8">
              Hier komt binnenkort het volledige programmaschema van SunriseFM met al onze shows en presentatoren.
            </p>
            <p className="text-gray-600">
              📻 Luister 24/7 live via onze stream voor de beste Bollywood muziek, nieuws en entertainment!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
