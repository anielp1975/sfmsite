import { XMLParser } from 'fast-xml-parser'

const FEED_URL = 'https://www.starnieuws.com/rss/starnieuws.rss'

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '',
})

type RssItem = {
  title?: string
  link?: string
  pubDate?: string
  description?: string
}

async function fetchNews(): Promise<RssItem[]> {
  try {
    const response = await fetch(FEED_URL, { next: { revalidate: 3600 } })

    if (!response.ok) {
      throw new Error(`RSS responded with ${response.status}`)
    }

    const xml = await response.text()
    const parsed = parser.parse(xml)
    const items = parsed?.rss?.channel?.item as RssItem | RssItem[] | undefined
    const normalized = Array.isArray(items) ? items : items ? [items] : []

    return normalized.slice(0, 3)
  } catch (error) {
    console.error('Failed to load Starnieuws feed', error)
    return []
  }
}

function formatDate(pubDate?: string) {
  if (!pubDate) return ''
  const date = new Date(pubDate)
  if (Number.isNaN(date.getTime())) return ''

  return date.toLocaleString('nl-NL', {
    dateStyle: 'long',
    timeStyle: 'short',
    timeZone: 'Europe/Amsterdam',
  })
}

export default async function StarnieuwsFeed() {
  const items = await fetchNews()

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto space-y-10">
        <h2 className="text-3xl md:text-4xl font-black text-blue-900">Starnieuws</h2>

        {items.length === 0 ? (
          <div className="bg-white border border-blue-100 rounded-3xl p-8 shadow-xl text-slate-600">
            Op dit moment kunnen we de berichten niet laden. Probeer het later opnieuw.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <a
                key={`${item.link ?? item.title ?? 'item'}-${index}`}
                href={item.link ?? 'https://www.starnieuws.com/'}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-3xl bg-white border border-blue-100 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/30 via-transparent to-blue-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-6 space-y-3">
                  <h3 className="text-xl font-bold text-blue-950 leading-tight group-hover:text-blue-800 transition-colors duration-200">
                    {item.title ?? 'Onbekend bericht'}
                  </h3>
                  {item.pubDate ? (
                    <p className="text-sm text-slate-600">{formatDate(item.pubDate)}</p>
                  ) : null}
                  <div className="flex items-center gap-2 text-blue-800 font-semibold">
                    <span className="text-sm uppercase tracking-wide">Lees verder</span>
                    <span aria-hidden="true" className="translate-x-0 group-hover:translate-x-1 transition-transform duration-200">
                      →
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">Bron: starnieuws.com</p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
