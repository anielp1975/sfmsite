'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const CONSENT_KEY = 'sunrisefm-cookie-consent'
const CONSENT_VERSION = '1.0.0'

type ConsentPreferences = {
  analytics: boolean
  marketing: boolean
  version: string
  updatedAt: string
}

const defaultPreferences: ConsentPreferences = {
  analytics: false,
  marketing: false,
  version: CONSENT_VERSION,
  updatedAt: new Date().toISOString(),
}

function readStoredConsent(): ConsentPreferences | null {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    const stored = window.localStorage.getItem(CONSENT_KEY)
    if (!stored) {
      return null
    }
    const parsed = JSON.parse(stored) as ConsentPreferences
    if (parsed.version !== CONSENT_VERSION) {
      return null
    }
    return parsed
  } catch (error) {
    console.warn('Kon cookie-instellingen niet lezen:', error)
    return null
  }
}

function persistConsent(preferences: ConsentPreferences) {
  if (typeof window === 'undefined') {
    return
  }

  const record = {
    ...preferences,
    updatedAt: new Date().toISOString(),
    version: CONSENT_VERSION,
  }

  window.localStorage.setItem(CONSENT_KEY, JSON.stringify(record))
  document.cookie = `sunrisefm-consent=${record.analytics ? 'accepted' : 'declined'}; path=/; max-age=31536000; SameSite=Lax`

  window.dispatchEvent(
    new CustomEvent('sunrisefm-consent-updated', {
      detail: record,
    })
  )
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<ConsentPreferences>(() => ({
    ...defaultPreferences,
  }))

  useEffect(() => {
    const stored = readStoredConsent()
    if (stored) {
      setPreferences(stored)
      setIsVisible(false)
      return
    }
    setIsVisible(true)
  }, [])

  const handleAcceptAll = () => {
    const nextPreferences = {
      analytics: true,
      marketing: false,
      version: CONSENT_VERSION,
      updatedAt: new Date().toISOString(),
    }
    setPreferences(nextPreferences)
    persistConsent(nextPreferences)
    setIsVisible(false)
  }

  const handleReject = () => {
    const nextPreferences = {
      analytics: false,
      marketing: false,
      version: CONSENT_VERSION,
      updatedAt: new Date().toISOString(),
    }
    setPreferences(nextPreferences)
    persistConsent(nextPreferences)
    setIsVisible(false)
  }

  const handleSave = () => {
    const nextPreferences = {
      analytics: preferences.analytics,
      marketing: preferences.marketing,
      version: CONSENT_VERSION,
      updatedAt: new Date().toISOString(),
    }
    persistConsent(nextPreferences)
    setIsVisible(false)
    setShowSettings(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[80] flex justify-center px-4 pb-6">
      <div className="w-full max-w-4xl bg-white/95 backdrop-blur-lg border-2 border-blue-200 rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white p-4 md:p-6 flex items-center gap-3">
          <span className="text-2xl">🍪</span>
          <div>
            <p className="text-lg font-bold">Wij gebruiken cookies</p>
            <p className="text-sm text-blue-100">
              We gebruiken cookies en vergelijkbare technieken voor basisfunctionaliteit en om te begrijpen hoe de site wordt gebruikt.
            </p>
          </div>
        </div>

        <div className="p-6 space-y-4 text-blue-900 bg-white">
          <p className="text-sm leading-relaxed">
            Door op "Alles accepteren" te klikken, stem je in met het opslaan van cookies op je apparaat voor analysetoepassingen. 
            Essentiële cookies worden altijd geplaatst omdat de site anders niet goed werkt. Lees meer over hoe wij met privacy omgaan in onze{' '}
            <Link href="/privacy" className="text-blue-600 font-semibold hover:text-purple-600">
              privacy- en cookieverklaring
            </Link>.
          </p>

          {showSettings && (
            <div className="rounded-xl border-2 border-blue-200 bg-blue-50/60 p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-blue-900">Essentiële cookies</p>
                  <p className="text-sm text-blue-700">
                    Nodig voor basisfunctionaliteit zoals het snel laden van pagina's en het onthouden van je voorkeuren.
                  </p>
                </div>
                <span className="text-xs font-bold bg-green-500 text-white px-3 py-1 rounded-full">Altijd actief</span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-blue-900">Analytische cookies</p>
                  <p className="text-sm text-blue-700">
                    Helpen ons te begrijpen hoe bezoekers de site gebruiken zodat we de ervaring kunnen verbeteren.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setPreferences(prev => ({
                    ...prev,
                    analytics: !prev.analytics,
                  }))}
                  className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors ${
                    preferences.analytics ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                      preferences.analytics ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          )}

          <div className="flex flex-col md:flex-row gap-3 md:gap-4 md:items-center md:justify-end">
            <button
              type="button"
              onClick={handleReject}
              className="px-5 py-3 rounded-xl font-semibold border-2 border-blue-300 text-blue-700 hover:bg-blue-50 transition-colors"
            >
              Alleen noodzakelijk
            </button>
            <button
              type="button"
              onClick={() => setShowSettings(prev => !prev)}
              className="px-5 py-3 rounded-xl font-semibold border-2 border-blue-300 text-blue-700 hover:bg-blue-50 transition-colors"
            >
              {showSettings ? 'Verberg instellingen' : 'Instellingen'}
            </button>
            <button
              type="button"
              onClick={handleAcceptAll}
              className="px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all"
            >
              Alles accepteren
            </button>
            {showSettings && (
              <button
                type="button"
                onClick={handleSave}
                className="px-6 py-3 rounded-xl font-bold text-white bg-yellow-500 hover:bg-yellow-400 shadow-lg hover:shadow-xl transition-all"
              >
                Instellingen opslaan
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
