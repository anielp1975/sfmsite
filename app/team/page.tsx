import Hero from '../components/Hero'

const teamMembers = [
  'Mukesh Chedi',
  'Kiran Sheombar',
  'Raween Autar',
  'Amika Ghurahoo',
  'Radjesh Bandhoe',
  'Lloyd Lachman',
  'Louis Chedi',
  'Roy Hoebdar',
  'Djiwan Raghoebarsingh',
  'Dhiradj Mahabier',
  'Dewanand Sidhoe',
  'Sudesh Tikai',
  'Renu Sharma',
  'Mila Kishoendajal',
  'Vijaylaxmi Singh',
  'Cheryl',
  'Nasir Ismail',
]
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
          <div className="bg-white/80 backdrop-blur-lg p-12 md:p-16 rounded-3xl shadow-xl border-2 border-blue-200">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-4">De stemmen van SunriseFM</h2>
              <p className="text-lg md:text-xl text-blue-700 max-w-3xl mx-auto">
                Iedere dag staat ons team van gepassioneerde omroepers klaar om jou te verbinden met de mooiste muziek, verhalen en cultuur.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member}
                  className="group bg-white border-2 border-blue-100 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="relative bg-gradient-to-br from-blue-900 to-purple-900 rounded-t-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-yellow-400/20 group-hover:bg-yellow-400/30 transition-colors"></div>
                    <img
                      src="https://www.sunrisefm.nl/images/192192.png"
                      alt={`Logo placeholder voor ${member}`}
                      className="w-32 h-32 mx-auto mt-8 mb-6 rounded-2xl shadow-2xl border-4 border-white object-cover"
                    />
                  </div>
                  <div className="px-6 pb-8">
                    <h3 className="text-2xl font-bold text-blue-900 text-center mb-2">{member}</h3>
                    <p className="text-center text-yellow-500 font-semibold">Omroeper</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
