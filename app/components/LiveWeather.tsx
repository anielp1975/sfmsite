import LiveClock from './LiveClock'

type WeatherLocation = {
  region: string
  city: string
  latitude: number
  longitude: number
  timezone: string
}

type ForecastDay = {
  date: string
  tempMax: number
  tempMin: number
  description: string
}

type WeatherInfo = {
  region: string
  city: string
  temperature: number
  humidity: number
  windSpeed: number
  description: string
  updatedAt: string
  forecast: ForecastDay[]
  timezone: string
}

const DEFAULT_LOCATIONS: WeatherLocation[] = [
  {
    region: 'Suriname',
    city: 'Paramaribo',
    latitude: 5.86,
    longitude: -55.17,
    timezone: 'America/Paramaribo',
  },
  {
    region: 'Nederland',
    city: 'Amsterdam',
    latitude: 52.37,
    longitude: 4.89,
    timezone: 'Europe/Amsterdam',
  },
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

async function fetchWeather(location: WeatherLocation): Promise<WeatherInfo | null> {
  const url = new URL('https://api.open-meteo.com/v1/forecast')
  url.searchParams.set('latitude', location.latitude.toString())
  url.searchParams.set('longitude', location.longitude.toString())
  url.searchParams.set('current', 'temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code')
  url.searchParams.set('daily', 'weather_code,temperature_2m_max,temperature_2m_min')
  url.searchParams.set('forecast_days', '5')
  url.searchParams.set('timezone', location.timezone)

  try {
    const response = await fetch(url.toString(), { cache: 'no-store' })

    if (!response.ok) {
      throw new Error(`Open-Meteo error: ${response.status}`)
    }

    const data = (await response.json()) as {
      current?: {
        temperature_2m: number
        relative_humidity_2m: number
        wind_speed_10m: number
        weather_code: number
        time: string
      }
      daily?: {
        time: string[]
        temperature_2m_max: number[]
        temperature_2m_min: number[]
        weather_code: number[]
      }
    }

    if (!data.current) {
      throw new Error('Geen weerdata beschikbaar')
    }
    const daily = data.daily
    const forecast: ForecastDay[] =
      daily?.time?.length && daily.temperature_2m_max?.length && daily.temperature_2m_min?.length
        ? daily.time
            .slice(0, 5)
            // Map the daily arrays into display-friendly forecast entries.
            .map((date, index) => ({
              date,
              tempMax: daily.temperature_2m_max[index] ?? NaN,
              tempMin: daily.temperature_2m_min[index] ?? NaN,
              description: describeWeather(daily.weather_code?.[index] ?? data.current!.weather_code),
            }))
            .filter((entry) => Number.isFinite(entry.tempMax) && Number.isFinite(entry.tempMin))
        : []

    return {
      region: location.region,
      city: location.city,
      temperature: data.current.temperature_2m,
      humidity: data.current.relative_humidity_2m,
      windSpeed: data.current.wind_speed_10m,
      description: describeWeather(data.current.weather_code),
      updatedAt: data.current.time,
      forecast,
      timezone: location.timezone,
    }
  } catch (error) {
    console.error('Kan weergegevens niet ophalen:', error)
    return null
  }
}

export default async function LiveWeather({
  locations = DEFAULT_LOCATIONS,
  className = '',
}: {
  locations?: WeatherLocation[]
  className?: string
}) {
  const weatherData = (
    await Promise.all(locations.map((location) => fetchWeather(location)))
  ).filter((entry): entry is WeatherInfo => entry !== null)

  return (
    <section className={`py-20 px-4 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 text-white ${className}`}>
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">🌦️ Live Weerbericht</h2>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto">
            Actuele weersomstandigheden voor onze communities in Suriname en Nederland. De gegevens worden automatisch bijgewerkt door Open-Meteo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {weatherData.length > 0 ? (
            weatherData.map((weather) => (
              <div
                key={`${weather.region}-${weather.city}`}
                className="bg-white/15 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-yellow-400 via-yellow-200 to-yellow-500 blur-3xl"></div>
                <div className="relative">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div>
                      <p className="text-sm uppercase tracking-widest text-yellow-200">{weather.region}</p>
                      <h3 className="text-2xl font-bold text-white">{weather.city}</h3>
                    </div>
                    <div className="flex flex-col items-end gap-2 min-w-[180px]">
                      <div className="bg-white/20 text-yellow-200 px-4 py-2 rounded-full text-sm font-semibold">
                        Laatste update: {new Date(weather.updatedAt).toLocaleTimeString('nl-NL', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-blue-100" aria-label={`Lokale tijd in ${weather.city}`}>
                        <span className="text-yellow-200">🕒</span>
                        <LiveClock timezone={weather.timezone} />
                      </div>
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

                  {weather.forecast.length > 0 && (
                    <div className="mt-8">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-semibold text-white">Komende 5 dagen</h4>
                        <p className="text-xs uppercase tracking-widest text-blue-200">Live updates</p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                        {weather.forecast.map((day) => (
                          <div key={day.date} className="bg-white/10 border border-white/10 rounded-2xl px-4 py-3 text-center">
                            <p className="text-sm font-semibold text-white">
                              {new Date(day.date).toLocaleDateString('nl-NL', {
                                weekday: 'short',
                                day: 'numeric',
                                month: 'short',
                              })}
                            </p>
                            <p className="text-sm text-blue-100 mt-1">{day.description}</p>
                            <p className="text-lg font-bold text-yellow-100 mt-2">{Math.round(day.tempMax)}°</p>
                            <p className="text-xs text-blue-200">Laag: {Math.round(day.tempMin)}°</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
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
  )
}
