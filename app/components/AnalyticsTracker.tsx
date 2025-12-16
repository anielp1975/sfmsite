'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const CONSENT_STORAGE_KEY = 'sunrisefm-cookie-consent'

function analyticsConsentGranted() {
  if (typeof window === 'undefined') {
    return false
  }

  try {
    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    if (!stored) {
      return false
    }
    const parsed = JSON.parse(stored) as { analytics?: boolean }
    return Boolean(parsed?.analytics)
  } catch (error) {
    console.warn('Kon analytics-toestemming niet lezen:', error)
    return false
  }
}

export default function AnalyticsTracker() {
  const pathname = usePathname()
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)

  useEffect(() => {
    setAnalyticsEnabled(analyticsConsentGranted())

    const handleConsentUpdate = () => {
      setAnalyticsEnabled(analyticsConsentGranted())
    }

    window.addEventListener('sunrisefm-consent-updated', handleConsentUpdate)

    return () => {
      window.removeEventListener('sunrisefm-consent-updated', handleConsentUpdate)
    }
  }, [])

  useEffect(() => {
    if (!analyticsEnabled) {
      return
    }

    trackEvent('page_view', pathname, `Pagina bezocht: ${pathname}`)
  }, [pathname, analyticsEnabled])

  return null
}

// Helper functie voor event tracking
export async function trackEvent(
  action: string,
  page: string,
  details?: string
) {
  if (typeof window !== 'undefined' && !analyticsConsentGranted()) {
    return
  }

  try {
    await fetch('/api/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action,
        page,
        details,
      }),
    })
  } catch (error) {
    console.error('Failed to track event:', error)
  }
}
