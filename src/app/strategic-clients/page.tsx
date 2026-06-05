'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function StrategicClientsPage() {
  const indianPartners = [
    { text: 'fDi ATLAS', logo: '/partners/fdi.jpeg' },
    { text: 'fDiBenchmark.com', logo: '/partners/fdi.jpeg' },
    { text: 'FT Business (Financial Times)', logo: '/partners/ft.jpeg' },
    { text: 'fDiMarkets.com', logo: '/partners/fdi.jpeg' },
    { text: 'fDi Foreign Direct Investment', logo: '/partners/fdi.jpeg' },
  ]

  const strategicAlliances = [
    { text: 'OCO CONSULTING', logo: '/partners/oco.jpeg' },
    { text: 'TRACTUS', logo: null },
    { text: 'TRUSTED SOURCES', logo: null },
  ]

  const sponsors = [
    { text: 'Wallonia', logo: '/partners/wallonia.jpeg' },
    { text: 'Invest North West South Africa', logo: null },
    { text: 'West-Holland Foreign Investment Agency', logo: null },
    { text: 'Flanders Investment & Trade', logo: null },
    { text: 'InvestSlovenia', logo: null },
    { text: 'SEEDA', logo: null },
    { text: 'Promo Bologna', logo: null },
    { text: 'England\'s East Midlands', logo: null },
    { text: 'International Business Wales', logo: null },
    { text: 'Sviluppolazio', logo: null },
    { text: 'Invest in Germany', logo: null },
    { text: 'Invest in Bavaria', logo: null },
    { text: 'Netherlands Foreign Investment Agency', logo: null },
    { text: 'provincie :: Utrecht', logo: null },
    { text: 'ESBAS', logo: null },
    { text: 'Gfez', logo: null },
    { text: 'VCI Valladolid', logo: null },
    { text: 'Nevada Commission on Economic Development', logo: null },
    { text: 'locate-dundee', logo: null },
    { text: 'Andalucia', logo: null }
  ]

  const usps = [
    {
      partner: 'OCO CONSULTING',
      desc: 'Investor targeting in Western Countries and training'
    },
    {
      partner: 'TRACTUS',
      desc: 'Investor targeting in Eastern Countries and providing relevant & required support'
    },
    {
      partner: 'TRUSTED SOURCES',
      desc: 'Providing Macro-Micro level reports in context to global information'
    }
  ]

  return (
    <>
      <Navbar />
      <main style={{ background: '#ffffff', paddingTop: '80px', paddingBottom: '60px' }}>
        
        {/* HERO */}
        <section style={{
          background: '#0a0a0a url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop") center/cover no-repeat',
          padding: '120px 0',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'linear-gradient(45deg, rgba(10,10,10,0.95) 0%, rgba(30,30,30,0.8) 100%)',
          }}></div>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: '400',
              color: '#ffffff',
              marginBottom: '24px'
            }}>
              Strategic Clients & Alliances
            </h1>
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '18px',
              color: '#aaaaaa',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.7'
            }}>
              A global network of prestigious partners, sponsors, and alliances empowering cross-border investment and economic development.
            </p>
          </div>
        </section>

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0', display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
          
          <div style={{
            width: '100%',
            marginBottom: '0',
            overflow: 'hidden'
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/alliances.png" 
              alt="Strategic Clients and Alliances Network" 
              style={{ 
                width: 'calc(100% + 40px)', 
                marginLeft: '-20px',
                height: 'auto', 
                objectFit: 'contain'
              }} 
            />
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div style={{
      textAlign: 'center',
      marginBottom: '40px',
      marginTop: '60px'
    }}>
      <div style={{
        display: 'inline-block',
        background: '#0a0a0a',
        color: '#ffffff',
        padding: '12px 32px',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '14px',
        fontWeight: '600',
        letterSpacing: '0.1em',
        borderRadius: '4px',
        textTransform: 'uppercase'
      }}>
        {title}
      </div>
    </div>
  )
}

function Card({ text, logo, highlight = false, small = false }: { text: string, logo?: string | null, highlight?: boolean, small?: boolean }) {
  return (
    <div style={{
      background: '#ffffff',
      border: highlight ? '2px solid #0a0a0a' : '1px solid #eaeaea',
      padding: small ? '24px 20px' : '40px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      borderRadius: '8px',
      boxShadow: highlight ? '0 8px 30px rgba(0,0,0,0.08)' : '0 4px 12px rgba(0,0,0,0.02)',
      transition: 'all 0.3s ease',
      cursor: 'default',
      minHeight: small ? '120px' : '180px'
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = '#c8102e';
      e.currentTarget.style.transform = 'translateY(-4px)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = highlight ? '#0a0a0a' : '#eaeaea';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
    >
      {logo && (
        <div style={{ marginBottom: '16px', flexShrink: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={logo} 
            alt={text} 
            style={{ 
              maxWidth: '100%', 
              maxHeight: small ? '50px' : '80px', 
              objectFit: 'contain',
              mixBlendMode: 'multiply'
            }} 
          />
        </div>
      )}
      <span style={{
        fontFamily: small ? 'Montserrat, sans-serif' : 'Playfair Display, serif',
        fontSize: small ? '14px' : '18px',
        fontWeight: small ? '500' : '600',
        color: '#1a1a1a',
        lineHeight: '1.4'
      }}>
        {text}
      </span>
    </div>
  )
}
