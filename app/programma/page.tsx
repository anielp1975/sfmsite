import Hero from '../components/Hero'

const weekSchedule = [
  {
    day: 'Maandag',
    description: 'Een energieke start van de week met de nieuwste Bollywood hits, regionale updates en live verzoekjes.',
    segments: [
      {
        time: '08:00 - 20:00',
        title: 'Dagprogramma',
        details: 'Verfrissende ochtendshows, middagmagazines en snelle nieuwsflitsen om je werkdag in beweging te houden.'
      },
      {
        time: '20:00 - 08:00',
        title: 'Avond & Nachtprogramma',
        details: 'Chill-out vibes, slow jams en late night gesprekken met community verhalen en lifestyle tips.'
      }
    ]
  },
  {
    day: 'Dinsdag',
    description: 'De SFM werkdagmix met extra focus op ondernemerschap, verkeer en lifestyle uit Suriname en Nederland.',
    segments: [
      {
        time: '08:00 - 20:00',
        title: 'Dagprogramma',
        details: 'Een blend van ritmische beats, nieuwsblokken, sportupdates en inspirerende gasten in de studio.'
      },
      {
        time: '20:00 - 08:00',
        title: 'Avond & Nachtprogramma',
        details: 'Soulvolle classic Bollywood, intieme interviews en rustige playlists voor de nachtuilen.'
      }
    ]
  },
  {
    day: 'Woensdag',
    description: 'Midweek boost: focus op cultuur, community en talent met extra aandacht voor lokale evenementen.',
    segments: [
      {
        time: '08:00 - 20:00',
        title: 'Dagprogramma',
        details: 'Talkshows met prominente gasten, interactieve quizzen en feelgood tracks door de dag heen.'
      },
      {
        time: '20:00 - 08:00',
        title: 'Avond & Nachtprogramma',
        details: 'Lounge, lo-fi en nostalgische Bollywood waarin je rustig kunt meegenieten tot in de vroege uurtjes.'
      }
    ]
  },
  {
    day: 'Donderdag',
    description: 'Weekend in zicht: vooruitblikken op events, exclusieve releases en entertainment nieuws van over de hele wereld.',
    segments: [
      {
        time: '08:00 - 20:00',
        title: 'Dagprogramma',
        details: 'Muziek specials, business talks en tips voor jouw avondje uit later in de week.'
      },
      {
        time: '20:00 - 08:00',
        title: 'Avond & Nachtprogramma',
        details: 'DJ mixes, throwback sets en midnight stories die je meenemen richting het weekend.'
      }
    ]
  },
  {
    day: 'Vrijdag',
    description: 'We trappen het weekend af met feestelijke vibes, live mixen en jouw party-start vanuit de studio.',
    segments: [
      {
        time: '08:00 - 20:00',
        title: 'Dagprogramma',
        details: 'Upbeat hits, weekend planners en live check-ins met luisteraars onderweg naar hun plannen.'
      },
      {
        time: '20:00 - 08:00',
        title: 'Avond & Nachtprogramma',
        details: 'Club classics, festival sets en nachtelijke shout-outs tot de ochtendgloren.'
      }
    ]
  },
  {
    day: 'Zaterdag',
    description: 'De zaterdag staat in het teken van lifestyle, community en non-stop party tracks voor jouw weekend.',
    segments: [
      {
        time: '08:00 - 20:00',
        title: 'Dagprogramma',
        details: 'Weekend brunch vibes, live verslag van evenementen en sfeer om de dag door te dansen.'
      },
      {
        time: '20:00 - 08:00',
        title: 'Avond & Nachtprogramma',
        details: 'DJ showcases, verzoekparades en afterparty sounds voor iedereen die wakker blijft.'
      }
    ]
  },
  {
    day: 'Zondag',
    description: 'Een relaxte afsluiting van de week met soul, spiritualiteit en verhalen van onze community.',
    segments: [
      {
        time: '08:00 - 20:00',
        title: 'Dagprogramma',
        details: 'Inspirerende gesprekken, rustige grooves en familiegericht entertainment voor een volledige zondag.'
      },
      {
        time: '20:00 - 08:00',
        title: 'Avond & Nachtprogramma',
        details: 'Mellow beats, reflective talks en zachte melodieen voor een ontspannen nacht.'
      }
    ]
  }
]

export default function Programma() {
  return (
    <div className="min-h-screen pb-24">
      <Hero
        title="Programma"
        subtitle="Ontdek ons gevarieerde programma.\n24/7 de beste muziek en shows!"
        showLogo={false}
      />

      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="bg-white/80 backdrop-blur-lg p-12 rounded-2xl shadow-xl border-2 border-blue-200">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Programmaoverzicht</h2>
            <p className="text-lg text-gray-700 mb-6">
              SunriseFM brengt je elke dag een vaste dagindeling van 08:00 tot 20:00 uur en schakelt daarna moeiteloos over op een sfeervol avond- en nachtprogramma.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {weekSchedule.map(({ day, description, segments }) => (
              <div
                key={day}
                className="bg-white/90 backdrop-blur rounded-2xl shadow-lg border border-blue-100 p-8 flex flex-col"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-blue-900">{day}</h3>
                  <p className="text-gray-700 mt-3 leading-relaxed">{description}</p>
                </div>
                <div className="mt-8 space-y-6">
                  {segments.map(({ time, title, details }) => (
                    <div key={time} className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                      <span className="text-sm font-semibold tracking-wide text-blue-700 uppercase">{time}</span>
                      <p className="text-lg font-semibold text-blue-900 mt-2">{title}</p>
                      <p className="text-gray-700 mt-1 leading-relaxed">{details}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
