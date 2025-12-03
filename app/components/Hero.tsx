interface HeroProps {
  title?: string
  subtitle?: string
  showLogo?: boolean
}

export default function Hero({ 
  title = "SunriseFM", 
  subtitle = "De stem van de hindoestaanse gemeenschap.\nVan Nederland naar de wereld.",
  showLogo = true 
}: HeroProps) {
  return (
    <section className="relative py-12 md:py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 text-white overflow-hidden">
      {/* Animated background with floating glow effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-12">
          {/* Left side - Text */}
          <div className="text-center md:text-left space-y-4">
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              <span className="text-yellow-400 drop-shadow-lg">{title}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 font-light leading-relaxed max-w-xl whitespace-pre-line">
              {subtitle}
            </p>
          </div>
          
          {/* Right side - Logo */}
          {showLogo && (
            <div className="flex justify-center items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400/30 rounded-full blur-3xl animate-pulse"></div>
                <img
                  src="https://www.sunrisefm.eu/images/logo.jpg"
                  alt="Radio SunriseFM Logo"
                  className="relative h-48 w-auto md:h-64 drop-shadow-2xl transform hover:scale-105 transition-transform duration-700 rounded-3xl"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
