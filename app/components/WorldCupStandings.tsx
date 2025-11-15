'use client'

export default function WorldCupStandings() {
  const groups = [
    {
      name: 'Groep A',
      teams: [
        { pos: 1, flag: '🇭🇳', name: 'Honduras', p: 5, w: 2, d: 3, l: 0, gd: '+5', pts: 9, status: 'qualified' },
        { pos: 2, flag: '🇲🇽', name: 'Mexico', p: 5, w: 2, d: 3, l: 0, gd: '+2', pts: 9, status: 'playoff' },
        { pos: 3, flag: '🇯🇲', name: 'Jamaica', p: 5, w: 1, d: 2, l: 2, gd: '-1', pts: 5, status: 'out' },
        { pos: 4, flag: '🇸🇷', name: 'Suriname', p: 5, w: 1, d: 0, l: 4, gd: '-6', pts: 3, status: 'eliminated' }
      ]
    },
    {
      name: 'Groep B',
      teams: [
        { pos: 1, flag: '🇨🇷', name: 'Costa Rica', p: 5, w: 3, d: 2, l: 0, gd: '+10', pts: 11, status: 'qualified' },
        { pos: 2, flag: '🇵🇦', name: 'Panama', p: 5, w: 3, d: 1, l: 1, gd: '+8', pts: 10, status: 'playoff' },
        { pos: 3, flag: '🇬🇹', name: 'Guatemala', p: 5, w: 1, d: 3, l: 1, gd: '+1', pts: 6, status: 'out' },
        { pos: 4, flag: '🇬🇾', name: 'Guyana', p: 5, w: 0, d: 0, l: 5, gd: '-19', pts: 0, status: 'eliminated' }
      ]
    },
    {
      name: 'Groep C',
      teams: [
        { pos: 1, flag: '🇨🇦', name: 'Canada', p: 5, w: 2, d: 2, l: 1, gd: '+3', pts: 8, status: 'qualified' },
        { pos: 2, flag: '🇸🇻', name: 'El Salvador', p: 5, w: 2, d: 2, l: 1, gd: '+1', pts: 8, status: 'playoff' },
        { pos: 3, flag: '🇨🇺', name: 'Cuba', p: 5, w: 1, d: 3, l: 1, gd: '+2', pts: 6, status: 'out' },
        { pos: 4, flag: '🇹🇹', name: 'Trinidad en Tobago', p: 5, w: 1, d: 1, l: 3, gd: '-6', pts: 4, status: 'eliminated' }
      ]
    }
  ]

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-900 to-blue-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            CONCACAF WK 2026 Kwalificatie
          </h2>
          <p className="text-gray-300 text-lg">
            Derde Ronde - Stand na wedstrijden van 13 november 2025
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {groups.map((group, idx) => (
            <div key={idx} className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-yellow-500 mb-6 text-center">
                {group.name}
              </h3>
              
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-2 text-xs font-semibold text-gray-400 mb-3 px-2">
                <div className="col-span-1">#</div>
                <div className="col-span-5">Team</div>
                <div className="col-span-1 text-center">W</div>
                <div className="col-span-1 text-center">G</div>
                <div className="col-span-1 text-center">V</div>
                <div className="col-span-2 text-center">+/-</div>
                <div className="col-span-2 text-center font-bold">Pts</div>
              </div>

              {/* Teams */}
              <div className="space-y-2">
                {group.teams.map((team, teamIdx) => (
                  <div 
                    key={teamIdx}
                    className={`grid grid-cols-12 gap-2 items-center p-2 rounded-lg transition-all duration-200 ${
                      team.status === 'qualified' 
                        ? 'bg-green-500/10 border border-green-500/30' 
                        : team.status === 'playoff'
                        ? 'bg-blue-500/10 border border-blue-500/30'
                        : team.status === 'eliminated'
                        ? 'bg-red-500/10 border border-red-500/20'
                        : 'bg-gray-700/20 border border-gray-600/20'
                    }`}
                  >
                    <div className={`col-span-1 text-sm font-bold ${
                      team.status === 'qualified' ? 'text-green-400' :
                      team.status === 'playoff' ? 'text-blue-400' :
                      team.status === 'eliminated' ? 'text-red-400' :
                      'text-gray-400'
                    }`}>
                      {team.pos}
                    </div>
                    <div className="col-span-5 flex items-center gap-2">
                      <span className="text-2xl">{team.flag}</span>
                      <span className="text-white font-medium text-sm truncate">{team.name}</span>
                    </div>
                    <div className="col-span-1 text-center text-gray-300 text-sm">{team.w}</div>
                    <div className="col-span-1 text-center text-gray-300 text-sm">{team.d}</div>
                    <div className="col-span-1 text-center text-gray-300 text-sm">{team.l}</div>
                    <div className={`col-span-2 text-center text-sm font-medium ${
                      team.gd.startsWith('+') ? 'text-green-400' : 
                      team.gd.startsWith('-') ? 'text-red-400' : 
                      'text-gray-400'
                    }`}>
                      {team.gd}
                    </div>
                    <div className="col-span-2 text-center text-white font-bold text-sm">
                      {team.pts}
                    </div>
                  </div>
                ))}
              </div>

              {/* Legend for this group */}
              <div className="mt-4 pt-4 border-t border-gray-700/50 space-y-1 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-green-500/30 border border-green-500/50"></div>
                  <span className="text-gray-400">WK 2026 Gekwalificeerd</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-blue-500/30 border border-blue-500/50"></div>
                  <span className="text-gray-400">Inter-Confederatie Play-offs</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-10 bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">3</div>
              <div className="text-sm text-gray-300">Landen rechtstreeks naar WK 2026</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">2</div>
              <div className="text-sm text-gray-300">Landen naar Inter-Confederatie Play-offs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">18 Nov</div>
              <div className="text-sm text-gray-300">Laatste wedstrijddag</div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            Canada 🇨🇦, Mexico 🇲🇽 en Verenigde Staten 🇺🇸 zijn als gastlanden automatisch gekwalificeerd
          </p>
        </div>
      </div>
    </section>
  )
}
