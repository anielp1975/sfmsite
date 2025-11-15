'use client'

import { useEffect, useState } from 'react'

interface VisitorStats {
  id: string
  timestamp: string
  ip: string
  city: string
  country: string
  userAgent: string
  page: string
  action: string
  details?: string
}

export default function StatsPage() {
  const [stats, setStats] = useState<VisitorStats[]>([])
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simuleer data ophalen (in productie zou dit van een API komen)
    const fetchStats = async () => {
      setLoading(true)
      // Placeholder data - in productie vervangen door echte API call
      const mockData: VisitorStats[] = [
        {
          id: '1',
          timestamp: new Date().toISOString(),
          ip: '192.168.1.100',
          city: 'Rotterdam',
          country: 'Nederland',
          userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
          page: '/',
          action: 'page_view',
          details: 'Homepage bezocht'
        },
        {
          id: '2',
          timestamp: new Date(Date.now() - 3600000).toISOString(),
          ip: '192.168.1.101',
          city: 'Den Haag',
          country: 'Nederland',
          userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0)',
          page: '/',
          action: 'audio_play',
          details: 'Audio speler gestart'
        },
        {
          id: '3',
          timestamp: new Date(Date.now() - 7200000).toISOString(),
          ip: '192.168.1.102',
          city: 'Amsterdam',
          country: 'Nederland',
          userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
          page: '/programma',
          action: 'page_view',
          details: 'Programma pagina bezocht'
        }
      ]
      
      setStats(mockData)
      setLoading(false)
    }

    fetchStats()
  }, [])

  const filteredStats = stats.filter(stat => {
    if (filter === 'all') return true
    if (filter === 'plays') return stat.action === 'audio_play'
    if (filter === 'views') return stat.action === 'page_view'
    return true
  })

  const totalVisitors = new Set(stats.map(s => s.ip)).size
  const totalPlays = stats.filter(s => s.action === 'audio_play').length
  const totalPageViews = stats.filter(s => s.action === 'page_view').length

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">📊 Bezoekersstatistieken</h1>
          <p className="text-gray-600">Laatste 7 dagen - Realtime tracking</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-semibold">Totaal Bezoekers</p>
                <p className="text-3xl font-bold text-blue-900 mt-2">{totalVisitors}</p>
                <p className="text-green-600 text-xs mt-1">↗ +12% vs vorige week</p>
              </div>
              <div className="text-4xl">👥</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-semibold">Audio Plays</p>
                <p className="text-3xl font-bold text-blue-900 mt-2">{totalPlays}</p>
                <p className="text-green-600 text-xs mt-1">↗ +8% vs vorige week</p>
              </div>
              <div className="text-4xl">🎵</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-semibold">Pagina Views</p>
                <p className="text-3xl font-bold text-blue-900 mt-2">{totalPageViews}</p>
                <p className="text-green-600 text-xs mt-1">↗ +15% vs vorige week</p>
              </div>
              <div className="text-4xl">📄</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-xl shadow-md mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-blue-900 text-yellow-400 shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Alles ({stats.length})
            </button>
            <button
              onClick={() => setFilter('plays')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === 'plays'
                  ? 'bg-blue-900 text-yellow-400 shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              🎵 Audio Plays ({totalPlays})
            </button>
            <button
              onClick={() => setFilter('views')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === 'views'
                  ? 'bg-blue-900 text-yellow-400 shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              📄 Page Views ({totalPageViews})
            </button>
          </div>
        </div>

        {/* Stats Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-900 text-yellow-400">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold">Tijdstip</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">IP Adres</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">Locatie</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">Actie</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">Pagina</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {loading ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center">
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
                      </div>
                      <p className="text-gray-600 mt-4">Laden...</p>
                    </td>
                  </tr>
                ) : filteredStats.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                      Geen data beschikbaar
                    </td>
                  </tr>
                ) : (
                  filteredStats.map((stat) => (
                    <tr key={stat.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {new Date(stat.timestamp).toLocaleString('nl-NL')}
                      </td>
                      <td className="px-6 py-4 text-sm font-mono text-gray-700">{stat.ip}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        <div className="flex items-center gap-2">
                          <span>🏙️</span>
                          <div>
                            <div className="font-semibold">{stat.city}</div>
                            <div className="text-xs text-gray-500">{stat.country}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span
                          className={`px-3 py-1 rounded-full font-semibold text-xs ${
                            stat.action === 'audio_play'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}
                        >
                          {stat.action === 'audio_play' ? '🎵 Play' : '👁️ View'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 font-medium">{stat.page}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{stat.details}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Implementation Notice */}
        <div className="mt-8 bg-gradient-to-r from-orange-100 to-yellow-100 border-l-4 border-orange-500 p-6 rounded-xl">
          <div className="flex items-start gap-3">
            <div className="text-2xl">⚠️</div>
            <div>
              <h3 className="font-bold text-orange-900 mb-2">Implementatie Vereist</h3>
              <p className="text-orange-800 text-sm mb-3">
                Deze pagina toont momenteel voorbeeld data. Voor volledige functionaliteit is het volgende nodig:
              </p>
              <ul className="space-y-2 text-sm text-orange-800">
                <li className="flex items-start gap-2">
                  <span className="font-bold">1.</span>
                  <span><strong>Analytics Backend:</strong> Database (PostgreSQL/MongoDB) om bezoekersdata op te slaan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">2.</span>
                  <span><strong>IP Geolocation API:</strong> Service zoals ipapi.co, ipgeolocation.io of MaxMind voor locatie data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">3.</span>
                  <span><strong>Event Tracking:</strong> Custom tracking code in AudioPlayer en componenten om clicks te registreren</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">4.</span>
                  <span><strong>API Routes:</strong> Next.js API routes (/api/stats) om data op te halen en op te slaan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">5.</span>
                  <span><strong>Privacy:</strong> Cookie consent en GDPR compliance voor tracking</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-white rounded-lg">
                <p className="text-xs text-gray-600">
                  <strong>Alternatief:</strong> Gebruik bestaande analytics tools zoals Google Analytics, Plausible, of Umami voor volledige tracking zonder zelf een systeem te bouwen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
