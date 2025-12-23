const socials = [
  {
    name: "TikTok",
    href: "https://www.tiktok.com/",
    icon: <TikTokIcon />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: <InstagramIcon />,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/",
    icon: <YouTubeIcon />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: <LinkedInIcon />,
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white py-12 border-t-4 border-yellow-400 shadow-2xl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="bg-white p-3 rounded-2xl shadow-xl">
              <img
                src="https://www.sunrisefm.eu/images/logo.jpg"
                alt="Radio SunriseFM"
                className="h-16 w-auto rounded-lg"
              />
            </div>
            <h3 className="text-3xl font-black text-yellow-300">Radio SunriseFM</h3>
            <p className="text-blue-100 text-center md:text-left leading-relaxed">
              Korte Bajonetstraat 26<br />
              3014 ZS Rotterdam<br />
              Nederland
            </p>
          </div>

          <div className="bg-white/10 border border-white/15 rounded-2xl shadow-2xl p-8 space-y-5">
            <h4 className="text-sm uppercase tracking-wide text-yellow-200 font-semibold">Contact</h4>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📞</span>
              <div>
                <p className="text-sm uppercase tracking-wide text-blue-100 font-semibold">Bel ons</p>
                <a href="tel:0102410260" className="text-xl font-bold text-white hover:text-yellow-300 transition-colors">
                  010 241 0260
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl">✉️</span>
              <div>
                <p className="text-sm uppercase tracking-wide text-blue-100 font-semibold">Mail ons</p>
                <a
                  href="mailto:info@sunrisefm.nl"
                  className="text-xl font-bold text-white hover:text-yellow-300 transition-colors"
                >
                  info@sunrisefm.nl
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <p className="text-sm uppercase tracking-wide text-blue-100 font-semibold">Bezoek</p>
                <p className="text-lg font-semibold text-white leading-relaxed">
                  Rotterdam Centrum<br />
                  Altijd welkom op afspraak
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 border border-white/15 rounded-2xl shadow-2xl p-8 space-y-4">
            <h4 className="text-sm uppercase tracking-wide text-yellow-200 font-semibold">Volg SunriseFM</h4>
            <div className="flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 shadow-md"
                  aria-label={social.name}
                >
                  <span className="h-5 w-5 text-white group-hover:scale-110 transition-transform" aria-hidden="true">
                    {social.icon}
                  </span>
                  <span className="font-semibold">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" role="img" aria-hidden="true">
      <path d="M12.8 3h3.3a5.7 5.7 0 0 0 5.7 5.3v3.2a8.8 8.8 0 0 1-4.4-1.2v6.7c0 3.8-2.9 5.9-6.1 5.9-1.3 0-2.5-.3-3.5-.9a5.4 5.4 0 0 1-2.1-2.2c-.5-.9-.7-1.9-.7-3 0-1.1.3-2.1.7-3.1a5.4 5.4 0 0 1 1.9-2.1 5.3 5.3 0 0 1 3-1l.9.1v3.2l-.7-.1c-1 0-1.8.3-2.3.9-.5.6-.8 1.4-.8 2.4 0 1.1.3 2 .8 2.6.5.6 1.3.9 2.3.9 1 0 1.7-.3 2.3-.9.6-.6.9-1.5.9-2.7V3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" role="img" aria-hidden="true">
      <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm5 2.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm5.25-3.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" role="img" aria-hidden="true">
      <path d="M21.8 8.1a2.7 2.7 0 0 0-1.9-1.9C18.2 6 12 6 12 6s-6.2 0-7.9.2A2.7 2.7 0 0 0 2.2 8.1 28.6 28.6 0 0 0 2 12a28.6 28.6 0 0 0 .2 3.9 2.7 2.7 0 0 0 1.9 1.9C5.8 18 12 18 12 18s6.2 0 7.9-.2a2.7 2.7 0 0 0 1.9-1.9A28.6 28.6 0 0 0 22 12a28.6 28.6 0 0 0-.2-3.9zM10 9.8l5 2.2-5 2.2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" role="img" aria-hidden="true">
      <path d="M5 4.2a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4zM3.2 9.4h3.6v10.4H3.2zM9.8 9.4h3.4v1.5h.1c.5-.9 1.7-1.8 3.5-1.8 3.8 0 4.5 2.5 4.5 5.7v5h-3.6v-4.6c0-1.1-.1-2.5-1.5-2.5-1.5 0-1.8 1.1-1.8 2.4v4.7H9.8z" />
    </svg>
  );
}
