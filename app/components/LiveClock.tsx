'use client'

import { useEffect, useState } from 'react'

function formatTime(timezone: string): string {
  try {
    return new Intl.DateTimeFormat('nl-NL', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: timezone,
    }).format(new Date())
  } catch (error) {
    console.error('Kan tijd niet formatteren voor', timezone, error)
    return '--:--:--'
  }
}

export default function LiveClock({ timezone }: { timezone: string }) {
  const [time, setTime] = useState(() => formatTime(timezone))

  useEffect(() => {
    setTime(formatTime(timezone))
    const timer = setInterval(() => {
      setTime(formatTime(timezone))
    }, 1000)

    return () => clearInterval(timer)
  }, [timezone])

  return <span>{time}</span>
}
