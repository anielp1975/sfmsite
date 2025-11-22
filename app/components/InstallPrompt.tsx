'use client'

import { useEffect, useState } from 'react'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)

  useEffect(() => {
    const handler = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault()
      // Stash the event so it can be triggered later
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      // Show the install prompt
      setShowInstallPrompt(true)
    }

    window.addEventListener('beforeinstallprompt', handler)

    return () => {
      window.removeEventListener('beforeinstallprompt', handler)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      return
    }

    // Show the install prompt
    deferredPrompt.prompt()

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === 'accepted') {
      console.log('User accepted the install prompt')
    } else {
      console.log('User dismissed the install prompt')
    }

    // Clear the deferredPrompt
    setDeferredPrompt(null)
    setShowInstallPrompt(false)
  }

  const handleDismiss = () => {
    setShowInstallPrompt(false)
  }

  if (!showInstallPrompt) {
    return null
  }

  return (
    <div className="fixed bottom-24 left-0 right-0 z-50 mx-4 md:mx-auto md:max-w-md">
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white p-6 rounded-2xl shadow-2xl border-2 border-yellow-400 animate-fade-in">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <img 
              src="https://www.sunrisefm.nl/images/192192.png" 
              alt="Sunrise FM" 
              className="w-16 h-16 rounded-xl"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-yellow-400 mb-2">
              📱 Installeer Sunrise FM App
            </h3>
            <p className="text-sm text-blue-100 mb-4">
              Voeg Sunrise FM toe aan je startscherm voor snelle toegang tot je favoriete radiozender!
            </p>
            <div className="flex gap-2">
              <button
                onClick={handleInstallClick}
                className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-2 px-4 rounded-lg transition-all transform hover:scale-105"
              >
                Installeer
              </button>
              <button
                onClick={handleDismiss}
                className="px-4 py-2 text-blue-200 hover:text-white transition-colors"
              >
                Niet nu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
