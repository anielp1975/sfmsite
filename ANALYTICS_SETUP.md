# Analytics & Statistics Implementatie Guide

## 📊 Overzicht

De `/stats` pagina is aangemaakt met basis tracking functionaliteit. Voor volledige implementatie zijn de volgende stappen nodig:

## ✅ Wat is al gedaan:

1. **Stats Pagina** (`/app/stats/page.tsx`)
   - Dashboard met bezoekersstatistieken
   - Filter opties (alle, plays, views)
   - Overzichtelijke tabel met visitor data
   - Responsive design

2. **Analytics API** (`/app/api/analytics/route.ts`)
   - POST endpoint voor event tracking
   - GET endpoint voor ophalen statistieken
   - IP detectie en user-agent logging

3. **Analytics Tracker** (`/app/components/AnalyticsTracker.tsx`)
   - Automatische page view tracking
   - Helper functie voor custom events
   - Geïntegreerd in layout

4. **Audio Player Tracking**
   - Play button clicks worden getracked
   - Stop button clicks worden getracked

## 🔧 Vereiste Implementatie Stappen:

### 1. Database Setup

Kies een database oplossing:

**Optie A: PostgreSQL met Prisma**
\`\`\`bash
npm install prisma @prisma/client
npx prisma init
\`\`\`

**Schema (prisma/schema.prisma):**
\`\`\`prisma
model Analytics {
  id        String   @id @default(cuid())
  timestamp DateTime @default(now())
  ip        String
  city      String?
  country   String?
  userAgent String
  page      String
  action    String
  details   String?
}
\`\`\`

**Optie B: MongoDB**
\`\`\`bash
npm install mongodb mongoose
\`\`\`

### 2. IP Geolocation Service

Kies een geolocation provider:

**Optie A: ipapi.co (Gratis tier: 1000 requests/dag)**
\`\`\`javascript
const response = await fetch(\`https://ipapi.co/\${ip}/json/\`)
const location = await response.json()
\`\`\`

**Optie B: ipgeolocation.io**
\`\`\`bash
# Registreer op https://ipgeolocation.io
# API Key toevoegen aan .env
GEOLOCATION_API_KEY=your_api_key
\`\`\`

**Optie C: MaxMind GeoIP2 (Zelfgehost)**
\`\`\`bash
npm install @maxmind/geoip2-node
# Download GeoLite2 database
\`\`\`

### 3. Environment Variables

Maak `.env.local`:
\`\`\`
DATABASE_URL="postgresql://user:password@localhost:5432/sunrisefm"
GEOLOCATION_API_KEY="your_api_key_here"
\`\`\`

### 4. API Route Update

Update `/app/api/analytics/route.ts`:
\`\`\`typescript
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  const body = await request.json()
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim()
  
  // Geolocation lookup
  const geoResponse = await fetch(\`https://ipapi.co/\${ip}/json/\`)
  const geoData = await geoResponse.json()
  
  // Save to database
  const event = await prisma.analytics.create({
    data: {
      ip,
      city: geoData.city,
      country: geoData.country_name,
      userAgent: request.headers.get('user-agent'),
      page: body.page,
      action: body.action,
      details: body.details
    }
  })
  
  return NextResponse.json({ success: true, event })
}

export async function GET() {
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  
  const stats = await prisma.analytics.findMany({
    where: {
      timestamp: { gte: sevenDaysAgo }
    },
    orderBy: { timestamp: 'desc' }
  })
  
  return NextResponse.json({ success: true, stats })
}
\`\`\`

### 5. Stats Pagina Update

Update `/app/stats/page.tsx` om echte data te gebruiken:
\`\`\`typescript
useEffect(() => {
  const fetchStats = async () => {
    const response = await fetch('/api/analytics')
    const data = await response.json()
    setStats(data.stats)
    setLoading(false)
  }
  fetchStats()
}, [])
\`\`\`

### 6. GDPR & Privacy Compliance

**Verplicht voor EU bezoekers:**

1. **Cookie Consent Banner toevoegen:**
\`\`\`bash
npm install @cookiehub/cookie-consent
\`\`\`

2. **Privacy Policy pagina maken**

3. **IP Anonimisatie implementeren:**
\`\`\`typescript
function anonymizeIP(ip: string) {
  const parts = ip.split('.')
  return \`\${parts[0]}.\${parts[1]}.\${parts[2]}.0\`
}
\`\`\`

### 7. Admin Beveiliging

De `/stats` pagina beveiligen:

**Optie A: Basic Auth**
\`\`\`typescript
// middleware.ts
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/stats')) {
    const basicAuth = request.headers.get('authorization')
    // Verify credentials
  }
}
\`\`\`

**Optie B: NextAuth.js**
\`\`\`bash
npm install next-auth
\`\`\`

## 📈 Alternatieve Oplossingen

### Kant-en-klare Analytics Tools:

1. **Google Analytics 4** (Gratis)
   - Volledig analytics platform
   - Realtime data
   - Geen eigen database nodig

2. **Plausible** (€9/maand)
   - Privacy-friendly
   - Simpel dashboard
   - GDPR compliant

3. **Umami** (Open source, zelfgehost)
   - Privacy-focused
   - Simpel te installeren
   - Volledige controle

4. **PostHog** (Open source)
   - Product analytics
   - Session replay
   - Feature flags

## 🚀 Deployment Checklist

- [ ] Database opgezet en geconfigureerd
- [ ] Geolocation API gekozen en API key verkregen
- [ ] Environment variables ingesteld
- [ ] Database migrations uitgevoerd
- [ ] API routes getest
- [ ] Privacy policy toegevoegd
- [ ] Cookie consent geïmplementeerd
- [ ] Admin authenticatie toegevoegd
- [ ] Stats pagina getest met echte data
- [ ] GDPR compliance geverifieerd

## 📝 Notities

- Huidige implementatie toont **voorbeeld data**
- Tracking code is **al actief** (logt naar console)
- Database verbinding moet **nog worden opgezet**
- Geolocation API moet **nog worden geïntegreerd**

## 🔗 Handige Links

- [Prisma Docs](https://www.prisma.io/docs)
- [ipapi.co](https://ipapi.co)
- [NextAuth.js](https://next-auth.js.org)
- [GDPR Guidelines](https://gdpr.eu)
