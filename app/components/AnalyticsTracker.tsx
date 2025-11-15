'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function AnalyticsTracker() {
  const pathname = usePathname()

  useEffect(() => {
    // Track page view
    trackEvent('page_view', pathname, `Pagina bezocht: ${pathname}`)
  }, [pathname])

  return null
}

// Helper functie voor event tracking
export async function trackEvent(
  action: string, 
  page: string, 
  details?: string
) {
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
