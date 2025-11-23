'use client'

import { useState } from 'react'
import Hero from '../components/Hero'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Er ging iets mis bij het versturen van je bericht')
      }

      setStatus('success')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Er ging iets mis')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen pb-24">
      <Hero 
        title="SunriseFM" 
        subtitle="De stem van de hindoestaanse gemeenschap.\nVan Nederland naar de wereld."
        showLogo={true}
      />

      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-blue-900 mb-8">
                  📍 Bezoek ons
                </h2>
                
                <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl space-y-6 border-2 border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🏢</div>
                    <div>
                      <h3 className="font-bold text-xl text-blue-900 mb-2">Adres</h3>
                      <p className="text-gray-700 leading-relaxed">
                        SunriseFM<br />
                        Korte Bajonetstraat 26<br />
                        3014 ZS Rotterdam<br />
                        Nederland
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-3xl">📞</div>
                    <div>
                      <h3 className="font-bold text-xl text-blue-900 mb-2">Telefoon</h3>
                      <a href="tel:0102410260" className="text-blue-600 hover:text-blue-800 text-lg font-semibold">
                        010 241 0260
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-3xl">✉️</div>
                    <div>
                      <h3 className="font-bold text-xl text-blue-900 mb-2">Email</h3>
                      <a href="mailto:info@sunrisefm.nl" className="text-blue-600 hover:text-blue-800 text-lg font-semibold">
                        info@sunrisefm.nl
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-3xl">⏰</div>
                    <div>
                      <h3 className="font-bold text-xl text-blue-900 mb-2">Uitzendtijden</h3>
                      <p className="text-gray-700">
                        24/7 Live<br />
                        Dagelijks bereikbaar
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-blue-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.8358429852654!2d4.479542776892469!3d51.91437767191013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c433a8e4b1e7f7%3A0x7c5e5e5e5e5e5e5e!2sKorte%20Bajonetstraat%2026%2C%203014%20ZS%20Rotterdam!5e0!3m2!1snl!2snl!4v1700000000000!5m2!1snl!2snl"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SunriseFM Locatie"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-8">
                💬 Stuur een bericht
              </h2>

              <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border-2 border-blue-200 space-y-6">
                
                {status === 'success' && (
                  <div className="bg-green-100 border-2 border-green-400 text-green-800 px-6 py-4 rounded-xl">
                    <p className="font-semibold">✅ Bericht verzonden!</p>
                    <p className="text-sm">We nemen zo spoedig mogelijk contact met je op.</p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="bg-red-100 border-2 border-red-400 text-red-800 px-6 py-4 rounded-xl">
                    <p className="font-semibold">❌ {errorMessage}</p>
                    <p className="text-sm">Probeer het opnieuw of bel ons direct.</p>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-blue-900 font-semibold mb-2">
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Je volledige naam"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-blue-900 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="je@email.nl"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-blue-900 font-semibold mb-2">
                    Telefoon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="06 12345678"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-blue-900 font-semibold mb-2">
                    Onderwerp *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Waar gaat je bericht over?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-blue-900 font-semibold mb-2">
                    Bericht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    placeholder="Schrijf hier je bericht..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {status === 'sending' ? '📤 Verzenden...' : '📧 Verstuur bericht'}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
