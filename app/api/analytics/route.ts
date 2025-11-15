import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, page, details } = body

    // Get visitor info
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'
    
    const userAgent = request.headers.get('user-agent') || 'unknown'

    // In productie: Sla op in database
    // Voor nu: Log naar console
    const event = {
      timestamp: new Date().toISOString(),
      ip: ip.split(',')[0].trim(), // eerste IP als er meerdere zijn
      userAgent,
      action,
      page,
      details
    }

    console.log('📊 Analytics Event:', event)

    // TODO: Implementeer geolocation lookup
    // const geoData = await fetch(`https://ipapi.co/${ip}/json/`)
    // const location = await geoData.json()

    // TODO: Sla op in database
    // await db.analytics.create({ data: event })

    return NextResponse.json({ 
      success: true, 
      message: 'Event geregistreerd',
      event 
    })
  } catch (error) {
    console.error('Analytics error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to track event' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    // TODO: Haal data op uit database
    // const stats = await db.analytics.findMany({
    //   where: {
    //     timestamp: {
    //       gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // laatste 7 dagen
    //     }
    //   },
    //   orderBy: { timestamp: 'desc' }
    // })

    // Voorbeeld data voor nu
    const mockStats = [
      {
        id: '1',
        timestamp: new Date().toISOString(),
        ip: '192.168.1.100',
        city: 'Rotterdam',
        country: 'Nederland',
        userAgent: 'Mozilla/5.0',
        page: '/',
        action: 'page_view',
        details: 'Homepage bezocht'
      }
    ]

    return NextResponse.json({ 
      success: true, 
      stats: mockStats,
      total: mockStats.length 
    })
  } catch (error) {
    console.error('Analytics fetch error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch stats' },
      { status: 500 }
    )
  }
}
