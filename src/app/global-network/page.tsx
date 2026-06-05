'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ArrowRight } from 'lucide-react'

export default function GlobalNetworkPage() {
  const hubs = [
    { name: 'India', desc: 'Mumbai HQ, New Delhi office. Mandates with state governments, IPAs, SEZs and industrial parks.' },
    { name: 'Middle East', desc: 'Free zone advisory and Indian corporate expansion across UAE and the GCC.' },
    { name: 'Europe', desc: 'Investor outreach and partnerships across key European industrial markets including IDA Ireland and AWEX (Wallonia).' },
    { name: 'United Kingdom', desc: 'Long-standing alliance with fDi Intelligence and Financial Times Business Network.' },
    { name: 'United States', desc: 'Engagement with New York State EDC and investor targeting/site selection for US corporates entering India.' },
    { name: 'Singapore', desc: 'Regional advisory hub for South-East Asian investor engagement and corporate expansion.' },
  ]

  const partners = [
    { name: 'fDi Intelligence', logo: '/partners/fdi.jpeg' },
    { name: 'Financial Times Business Network', logo: '/partners/ft.jpeg' },
    { name: 'OCO Global', logo: '/partners/oco.jpeg' },
    { name: 'IDA Ireland', logo: '/partners/ireland.jpeg' },
    { name: 'AWEX (Wallonia)', logo: '/partners/wallonia.jpeg' },
    { name: 'New York State EDC', logo: '/partners/newyork.jpeg' },
  ]

  const mapPoints = [
    { label: 'USA', top: '35%', left: '22%' },
    { label: 'United Kingdom', top: '25%', left: '48%' },
    { label: 'Europe', top: '28%', left: '52%' },
    { label: 'Middle East', top: '42%', left: '62%' },
    { label: 'India', top: '48%', left: '70%' },
    { label: 'Singapore', top: '58%', left: '78%' },
  ]

  return (
    <>
      <Navbar />
      <main style={{ background: '#ffffff', paddingTop: '80px' }}>
        
        {/* HERO SECTION */}
        <section style={{
          background: '#0a0a0a url("https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop") center/cover no-repeat',
          position: 'relative',
          padding: '140px 0 160px',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'linear-gradient(to right, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.8) 50%, rgba(10,10,10,0.4) 100%)',
            pointerEvents: 'none'
          }}></div>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 40px',
            position: 'relative',
            zIndex: 1
          }}>
            <div className="section-label" style={{ marginBottom: '32px', color: '#c8102e', fontSize: '11px', fontWeight: '600', letterSpacing: '0.15em' }}>
              GLOBAL NETWORK
            </div>
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: '400',
              color: '#ffffff',
              lineHeight: '1.1',
              maxWidth: '900px',
              marginBottom: '32px',
            }}>
              A global network built on long-term relationships, not transactions.
            </h1>
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '16px',
              color: '#aaaaaa',
              lineHeight: '1.7',
              maxWidth: '650px',
            }}>
              Sparta Strategy operates across six core hubs and <strong style={{ color: '#fff', fontWeight: '500' }}>35+ countries</strong> through our partner ecosystem — connecting Indian destinations with international investors, and Indian corporates with global opportunities.
            </p>
          </div>
        </section>

        {/* MAP SECTION */}
        <section style={{ padding: '120px 0', background: '#ffffff', overflow: 'hidden' }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 40px',
            position: 'relative',
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              paddingBottom: '50%', // Aspect ratio container
              background: 'url("https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg") center/contain no-repeat',
              opacity: 0.5,
              filter: 'grayscale(100%)',
            }}></div>
            
            {/* Map Points overlay */}
            <div style={{
              position: 'absolute',
              top: 0, left: '40px', right: '40px', bottom: 0,
            }}>
              {mapPoints.map((point, idx) => (
                <div key={idx} style={{
                  position: 'absolute',
                  top: point.top,
                  left: point.left,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transform: 'translate(-5px, -5px)' // Center the dot
                }}>
                  <div style={{
                    position: 'relative',
                    width: '10px',
                    height: '10px',
                    background: '#c8102e',
                    borderRadius: '50%',
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '50%', left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '24px', height: '24px',
                      background: 'rgba(200, 16, 46, 0.15)',
                      borderRadius: '50%',
                    }}></div>
                  </div>
                  <span style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '13px',
                    fontWeight: '500',
                    color: '#0a0a0a'
                  }}>
                    {point.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHERE WE OPERATE */}
        <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px 120px' }}>
          <div className="section-label" style={{ marginBottom: '32px', color: '#c8102e', fontSize: '11px', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            WHERE WE OPERATE
          </div>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: '400',
            color: '#0a0a0a',
            lineHeight: '1.2',
            marginBottom: '60px',
          }}>
            Six hubs. One platform.
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            borderTop: '1px solid #eaeaea',
          }} className="grid-3-col">
            {hubs.map((hub, idx) => (
              <div key={idx} style={{
                padding: '40px 40px 40px 0',
                borderBottom: '1px solid #eaeaea',
                borderRight: (idx + 1) % 3 !== 0 ? '1px solid #eaeaea' : 'none',
                paddingLeft: (idx + 1) % 3 !== 1 ? '40px' : '0',
              }} className="grid-cell">
                <h3 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '24px',
                  fontWeight: '400',
                  color: '#0a0a0a',
                  marginBottom: '16px',
                }}>
                  {hub.name}
                </h3>
                <p style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '14px',
                  color: '#555',
                  lineHeight: '1.7',
                }}>
                  {hub.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PARTNER ECOSYSTEM */}
        <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px 120px' }}>
          <div className="section-label" style={{ marginBottom: '32px', color: '#c8102e', fontSize: '11px', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            PARTNER ECOSYSTEM
          </div>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: '400',
            color: '#0a0a0a',
            lineHeight: '1.2',
            maxWidth: '600px',
            marginBottom: '24px',
          }}>
            Institutional alliances across global investment networks.
          </h2>
          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '14px',
            color: '#555',
            lineHeight: '1.7',
            maxWidth: '700px',
            marginBottom: '60px',
          }}>
            We work alongside the world's most respected FDI intelligence and investment promotion networks — amplifying reach for our clients.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            borderTop: '1px solid #eaeaea',
          }} className="grid-3-col">
            {partners.map((partner, idx) => (
              <div key={idx} style={{
                padding: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                borderBottom: '1px solid #eaeaea',
                borderRight: (idx + 1) % 3 !== 0 ? '1px solid #eaeaea' : 'none',
                height: '160px',
              }} className="grid-cell-center">
                {partner.logo ? (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                    <img src={partner.logo} alt={partner.name} style={{ maxHeight: '65px', maxWidth: '85%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
                    <span style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '13px',
                      fontWeight: '600',
                      color: '#0a0a0a',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      textAlign: 'center'
                    }}>
                      {partner.name}
                    </span>
                  </div>
                ) : (
                  <span style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '20px',
                    color: '#0a0a0a',
                  }}>
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section style={{
          background: '#0a0a0a',
          padding: '100px 0',
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '40px'
          }}>
            <div style={{ maxWidth: '600px' }}>
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: '400',
                color: '#ffffff',
                lineHeight: '1.2',
                marginBottom: '16px',
              }}>
                Expanding into a new market?
              </h2>
              <p style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '14px',
                color: '#aaaaaa',
                lineHeight: '1.7',
              }}>
                Tap into Sparta's relationships across investors, governments and ecosystem partners across six hubs.
              </p>
            </div>
            <a
              href="/get-in-touch"
              style={{
                background: '#ffffff',
                color: '#0a0a0a',
                padding: '16px 32px',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '11px',
                fontWeight: '600',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                transition: 'background 0.2s, color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#c8102e';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.color = '#0a0a0a';
              }}
            >
              GET IN TOUCH <ArrowRight size={14} />
            </a>
          </div>
        </section>

      </main>
      <Footer />
      
      {/* Mobile styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) {
          .grid-3-col {
            grid-template-columns: 1fr !important;
          }
          .grid-cell {
            padding-left: 0 !important;
            padding-right: 0 !important;
            border-right: none !important;
          }
          .grid-cell-center {
            border-right: none !important;
          }
        }
      `}} />
    </>
  )
}
