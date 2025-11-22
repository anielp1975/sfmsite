import Hero from '../components/Hero'

export default function Adverteren() {
  return (
    <div className="min-h-screen pb-24">
      <Hero 
        title="Adverteren" 
        subtitle="Bereik duizenden luisteraars dagelijks.\nAdverteer op SunriseFM!"
        showLogo={false}
      />
      
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/80 backdrop-blur-lg p-12 rounded-2xl shadow-xl border-2 border-blue-200">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Advertentiemogelijkheden</h2>
            <p className="text-lg text-gray-700 mb-8">
              Wil je adverteren op SunriseFM? Neem contact met ons op voor de mogelijkheden en tarieven!
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              📧 Neem contact op
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
