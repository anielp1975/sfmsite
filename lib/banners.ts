const WP_BASE_URL = process.env.WP_BANNER_BASE_URL?.replace(/\/$/, '')
const WP_AUTH = process.env.WP_BANNER_BASIC_AUTH

const REVALIDATE_SECONDS = 600

export type BannerFetchResult = {
  html?: string
  embedUrl?: string
  source: 'wp' | 'fallback'
}

export async function fetchBannerSlot(slot: string): Promise<BannerFetchResult> {
  if (!WP_BASE_URL || !WP_AUTH) {
    return { source: 'fallback' }
  }

  const url = `${WP_BASE_URL}/wp-json/wp/v2/posts?slug=${encodeURIComponent(slot)}&_fields=slug,content.rendered`

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: WP_AUTH
      },
      cache: 'force-cache',
      next: {
        revalidate: REVALIDATE_SECONDS
      }
    })

    if (!res.ok) {
      console.error('WP banner fetch failed', res.status, res.statusText)
      return { source: 'fallback' }
    }

    const data = await res.json()
    const first = Array.isArray(data) ? data[0] : undefined
    const html = first?.content?.rendered?.trim()

    if (html) {
      return { html, source: 'wp' }
    }

    return { source: 'fallback' }
  } catch (error) {
    console.error('WP banner fetch error', error)
    return { source: 'fallback' }
  }
}