'use client'

interface AdBannerProps {
  size: 'leaderboard' | 'rectangle' | 'skyscraper' | 'mobile'
  position: string
  embedUrl?: string
  html?: string
}

export default function AdBanner({ size, position, embedUrl, html }: AdBannerProps) {
  const dimensions = {
    leaderboard: { width: '728px', height: '90px', mobileWidth: '320px', mobileHeight: '50px' },
    rectangle: { width: '300px', height: '250px', mobileWidth: '300px', mobileHeight: '250px' },
    skyscraper: { width: '160px', height: '600px', mobileWidth: '120px', mobileHeight: '240px' },
    mobile: { width: '320px', height: '100px', mobileWidth: '320px', mobileHeight: '100px' }
  }

  const dim = dimensions[size]

  return (
    <div className="flex justify-center items-center my-6">
      <div
        className="relative bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-dashed border-blue-400 rounded-lg flex flex-col items-center justify-center overflow-hidden group hover:border-yellow-400 transition-all duration-300"
        style={{
          width: dim.width,
          height: dim.height,
          maxWidth: '100%'
        }}
      >
        {html ? (
          <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: html }} />
        ) : embedUrl ? (
          <iframe
            src={embedUrl}
            title={`Advertentie ${position}`}
            className="w-full h-full"
            style={{ border: 0 }}
            loading="lazy"
          />
        ) : (
          <>
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #3b82f6 10px, #3b82f6 20px)'
                }}
              ></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center p-4">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">📢</div>
              <p className="text-blue-900 font-bold text-sm mb-1">ADVERTENTIERUIMTE</p>
              <p className="text-gray-600 text-xs font-semibold mb-2">Hier uw reclame</p>
              <div className="text-xs text-gray-500 bg-white/70 px-3 py-1 rounded-full inline-block">
                {size === 'leaderboard' && '728x90'}
                {size === 'rectangle' && '300x250'}
                {size === 'skyscraper' && '160x600'}
                {size === 'mobile' && '320x100'}
              </div>
              <p className="text-xs text-gray-400 mt-2 italic">{position}</p>
            </div>

            {/* Corner ribbon */}
            <div className="absolute top-2 right-2 bg-yellow-400 text-blue-900 text-xs font-bold px-2 py-1 rounded transform rotate-12 shadow-lg">
              TE HUUR
            </div>
          </>
        )}
      </div>
    </div>
  )
}
