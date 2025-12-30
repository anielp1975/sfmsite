export type YoutubeVideo = {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  published: string;
};

// Default fallback channel when env is not set
const DEFAULT_CHANNEL_ID = 'UCWY1nnGPubXzEhD-sa1wreg';

function extractTag(block: string, tag: string): string | null {
  const cdataPattern = new RegExp(`<${tag}[^>]*><!\[CDATA\[([\s\S]*?)\]\]>`, 'i');
  const simplePattern = new RegExp(`<${tag}[^>]*>([\s\S]*?)<\/${tag}>`, 'i');
  const cdataMatch = block.match(cdataPattern);
  if (cdataMatch?.[1]) return cdataMatch[1].trim();
  const simpleMatch = block.match(simplePattern);
  if (simpleMatch?.[1]) return simpleMatch[1].trim();
  return null;
}

function extractLink(block: string): string | null {
  const linkMatch = block.match(/<link[^>]+rel="alternate"[^>]+href="([^"]+)"/i);
  return linkMatch?.[1] ? linkMatch[1].trim() : null;
}

function extractThumbnail(block: string): string | null {
  const thumbMatch = block.match(/media:thumbnail[^>]+url="([^"]+)"/i);
  return thumbMatch?.[1] ? thumbMatch[1].trim() : null;
}

export async function getLatestYoutubeVideos(limit = 4): Promise<YoutubeVideo[]> {
  const channelId = process.env.YOUTUBE_CHANNEL_ID || process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID || DEFAULT_CHANNEL_ID;

  try {
    const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
    const response = await fetch(feedUrl, { next: { revalidate: 600 } });
    if (!response.ok) {
      console.error('Kon YouTube feed niet laden', response.status);
      return [];
    }

    const xml = await response.text();
    const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/gi)].slice(0, limit);

    const videos: YoutubeVideo[] = entries
      .map((match) => {
        const block = match[1];
        const id = extractTag(block, 'yt:videoId') || extractTag(block, 'id') || '';
        const title = extractTag(block, 'title') || 'Onbekende titel';
        const url = extractLink(block) || (id ? `https://www.youtube.com/watch?v=${id}` : '');
        const thumbnail = extractThumbnail(block) || `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
        const published = extractTag(block, 'published') || '';
        if (!id || !url) return null;
        return { id, title, url, thumbnail, published };
      })
      .filter((v): v is YoutubeVideo => Boolean(v));

    return videos;
  } catch (error) {
    console.error('Fout bij ophalen YouTube feed:', error);
    return [];
  }
}
