import Hero from '../components/Hero'

export default function Team() {
  return (
    <div className="min-h-screen pb-24">
      <Hero 
        title="Ons Team" 
        subtitle="Maak kennis met de stemmen van SunriseFM.\nPassie voor muziek en gemeenschap!"
        showLogo={false}
      />
      
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/80 backdrop-blur-lg p-12 rounded-2xl shadow-xl border-2 border-blue-200">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Ons Team</h2>
            <p className="text-lg text-gray-700 mb-8">
              Hier maken we je binnenkort bekend met onze presentatoren, DJ's en het hele SunriseFM team!
            </p>
            <p className="text-gray-600">
              🎙️ Een gedreven team dat dagelijks werkt aan de beste radio-ervaring voor onze luisteraars.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
