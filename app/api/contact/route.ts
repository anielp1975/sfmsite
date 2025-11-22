import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Alle verplichte velden moeten ingevuld zijn' },
        { status: 400 }
      )
    }

    // Send email using Resend API
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer re_cSdooVGD_DQazA22H1hUdHbcKnSwRWFfB`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'SunriseFM Website <noreply@sunrisefm.nl>',
        to: ['anielp@hotmail.com'],
        subject: `Contact formulier: ${subject}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
                .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
                .field { margin-bottom: 20px; }
                .label { font-weight: bold; color: #1e40af; margin-bottom: 5px; }
                .value { background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #fbbf24; }
                .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1 style="margin: 0;">📧 Nieuw contactformulier bericht</h1>
                  <p style="margin: 10px 0 0 0; opacity: 0.9;">Van de SunriseFM website</p>
                </div>
                <div class="content">
                  <div class="field">
                    <div class="label">👤 Naam:</div>
                    <div class="value">${name}</div>
                  </div>
                  
                  <div class="field">
                    <div class="label">✉️ Email:</div>
                    <div class="value"><a href="mailto:${email}">${email}</a></div>
                  </div>
                  
                  ${phone ? `
                  <div class="field">
                    <div class="label">📞 Telefoon:</div>
                    <div class="value"><a href="tel:${phone}">${phone}</a></div>
                  </div>
                  ` : ''}
                  
                  <div class="field">
                    <div class="label">📋 Onderwerp:</div>
                    <div class="value">${subject}</div>
                  </div>
                  
                  <div class="field">
                    <div class="label">💬 Bericht:</div>
                    <div class="value" style="white-space: pre-wrap;">${message}</div>
                  </div>
                  
                  <div class="footer">
                    <p>Dit bericht is verzonden via het contactformulier op sunrisefm.nl</p>
                    <p>Ontvangen op: ${new Date().toLocaleString('nl-NL', { timeZone: 'Europe/Amsterdam' })}</p>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `,
      }),
    })

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json()
      console.error('Resend API error:', errorData)
      throw new Error('Failed to send email via Resend')
    }

    const data = await resendResponse.json()
    console.log('Email sent successfully:', data)

    return NextResponse.json({ 
      success: true,
      message: 'Email verzonden!' 
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Er ging iets mis bij het versturen van je bericht' },
      { status: 500 }
    )
  }
}
