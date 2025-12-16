import Hero from '../components/Hero'

type WeatherInfo = {
  location: string
  city: string
  temperature: number
  humidity: number
  windSpeed: number
  description: string
  updatedAt: string
}

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

function describeWeather(code: number): string {
  const lookUp: Record<number, string> = {
    0: 'Heldere lucht',
    1: 'Overwegend helder',
    2: 'Gedeeltelijk bewolkt',
    3: 'Bewolkt',
    45: 'Mist',
    48: 'Aanhoudende mist',
    51: 'Lichte motregen',
    53: 'Motregen',
    55: 'Intense motregen',
    61: 'Lichte regen',
    63: 'Regen',
    65: 'Intense regen',
    66: 'IJzel',
    67: 'Harde ijzel',
    71: 'Lichte sneeuw',
    73: 'Sneeuwval',
    75: 'Intense sneeuw',
    80: 'Lichte buien',
    81: 'Regenbuien',
    82: 'Hevige buien',
    95: 'Onweer',
    96: 'Onweer met hagel',
    99: 'Zware hagel',
  }
  return lookUp[code] ?? 'Weerbericht'
}

async function fetchWeather(
  location: string,
  city: string,
  latitude: number,
  longitude: number,
  timezone: string
): Promise<WeatherInfo | null> {
  const url = new URL('https://api.open-meteo.com/v1/forecast')
  url.searchParams.set('latitude', latitude.toString())
  url.searchParams.set('longitude', longitude.toString())
  url.searchParams.set('current', 'temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code')
  url.searchParams.set('timezone', timezone)

  try {
    const response = await fetch(url.toString(), { cache: 'no-store' })

    if (!response.ok) {
      throw new Error(`Open-Meteo error: ${response.status}`)
    }

    const data = await response.json() as {
      current?: {
        temperature_2m: number
        relative_humidity_2m: number
        wind_speed_10m: number
        weather_code: number
        time: string
      }
    }

    if (!data.current) {
      throw new Error('Geen weerdata beschikbaar')
    }

    return {
      location,
      city,
      temperature: data.current.temperature_2m,
      humidity: data.current.relative_humidity_2m,
      windSpeed: data.current.wind_speed_10m,
      description: describeWeather(data.current.weather_code),
      updatedAt: data.current.time,
    }
  } catch (error) {
    console.error('Kan weergegevens niet ophalen:', error)
    return null
  }
}

export default async function Team() {
  const [surinameWeather, netherlandsWeather] = await Promise.all([
    fetchWeather('Suriname', 'Paramaribo', 5.86, -55.17, 'America/Paramaribo'),
    fetchWeather('Nederland', 'Amsterdam', 52.37, 4.89, 'Europe/Amsterdam'),
  ])

  const weatherData = [surinameWeather, netherlandsWeather].filter(
    (entry): entry is WeatherInfo => entry !== null
  )

  return (
    <div className="min-h-screen pb-24">
      <Hero 
        title="Ons Team" 
        subtitle="Maak kennis met de stemmen van SunriseFM.\nPassie voor muziek en gemeenschap!"
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

      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4">🌦️ Live Weerbericht</h2>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
              Actuele weersomstandigheden voor onze communities in Suriname en Nederland. De gegevens worden automatisch bijgewerkt.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {weatherData.length > 0 ? (
              weatherData.map((weather) => (
                <div
                  key={weather.location}
                  className="bg-white/15 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-yellow-400 via-yellow-200 to-yellow-500 blur-3xl"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <p className="text-sm uppercase tracking-widest text-yellow-200">{weather.location}</p>
                        <h3 className="text-2xl font-bold text-white">{weather.city}</h3>
                      </div>
                      <div className="bg-white/20 text-yellow-200 px-4 py-2 rounded-full text-sm font-semibold">
                        Laatste update: {new Date(weather.updatedAt).toLocaleTimeString('nl-NL', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 text-white">
                      <div>
                        <p className="text-sm text-blue-100">Temperatuur</p>
                        <p className="text-4xl font-black">{Math.round(weather.temperature)}°C</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-blue-100">Weertype</p>
                        <p className="text-xl font-semibold">{weather.description}</p>
                      </div>
                      <div>
                        <p className="text-sm text-blue-100">Luchtvochtigheid</p>
                        <p className="text-xl font-semibold">{Math.round(weather.humidity)}%</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-blue-100">Wind</p>
                        <p className="text-xl font-semibold">{Math.round(weather.windSpeed)} km/u</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="lg:col-span-2 bg-white/10 border border-white/20 rounded-3xl p-8 text-center text-blue-100">
                <p>Het live weerbericht is momenteel niet beschikbaar. Probeer het later opnieuw.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
