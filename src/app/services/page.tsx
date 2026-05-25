'use client'

import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { LineChart, Briefcase, Target, MapPin, Globe, Building2, ShipWheel, Network, Factory, Plane, Search, Handshake, ArrowRight } from 'lucide-react'

export default function ServicesPage() {
  const practiceAreas = [
    { icon: LineChart, title: 'Investment Promotion', desc: 'Investment attraction strategies for governments, IPAs, SEZs and industrial parks — covering positioning, sector targeting, investor outreach and conversion.' },
    { icon: Briefcase, title: 'FDI Advisory', desc: 'End-to-end advisory on inward and outward FDI — from market entry feasibility through regulatory, commercial and operational structuring.' },
    { icon: Target, title: 'Investor Targeting', desc: 'Data-driven identification, qualification and outreach to high-fit corporate investors across priority sectors and geographies.' },
    { icon: MapPin, title: 'Location Consulting', desc: 'Location strategy and benchmarking for Indian and international corporates — covering cost, talent, infrastructure, incentives and risk.' },
    { icon: Globe, title: 'International Site Selection', desc: 'Site selection — India and globally — for manufacturing, R&D, GCCs, back-office and HQ mandates.' },
    { icon: Building2, title: 'Corporate Expansion Strategy', desc: 'Cross-border growth strategy: market prioritisation, operating models, partnerships and entity structuring for sustainable expansion.' },
    { icon: ShipWheel, title: 'Cross-Border Investments', desc: 'Facilitation across the lifecycle of cross-border deals — stakeholder management, government engagement and post-investment support.' },
    { icon: Network, title: 'Economic Development Consulting', desc: 'Strategic advisory to governments and EDOs on ecosystem design, FDI branding, value proposition and institutional capacity.' },
    { icon: Factory, title: 'Infrastructure Advisory', desc: 'Advisory on industrial parks, free zones, logistics corridors, real estate and infrastructure assets — positioning and tenant attraction.' },
    { icon: Plane, title: 'Outward FDI Services', desc: 'Support to Indian corporates investing overseas — location identification, incentives negotiation and on the ground facilitation.' },
  ]

  const engagementPhases = [
    { num: '01', icon: Search, title: 'Research & Benchmarking', desc: 'Sector intelligence, investor mapping and location benchmarking grounded in proprietary data and global networks.' },
    { num: '02', icon: Target, title: 'Investor Targeting & Lead Generation', desc: 'Qualified outreach to high-fit corporate investors calibrated to sector, geography and investment thesis.' },
    { num: '03', icon: Handshake, title: 'Deal Facilitation & Support', desc: 'Stakeholder management, government engagement, and post-investment handholding through to operational launch.' },
  ]

  return (
    <>
      <Navbar />
      <main style={{ background: '#ffffff', paddingTop: '80px' }}>
        
        {/* HERO SECTION */}
        <section style={{
          background: '#0a0a0a url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop") center/cover no-repeat',
          position: 'relative',
          padding: '140px 0 160px',
          overflow: 'hidden'
        }}>
          {/* Dark overlay to ensure text readability */}
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
            <div className="section-label" style={{ marginBottom: '32px', color: '#c8102e' }}>SERVICES</div>
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: '400',
              color: '#ffffff',
              lineHeight: '1.1',
              maxWidth: '800px',
              marginBottom: '32px',
            }}>
              Ten focused practice areas across the cross-border investment lifecycle.
            </h1>
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '16px',
              color: '#aaaaaa',
              lineHeight: '1.7',
              maxWidth: '650px',
            }}>
              We combine investment promotion, FDI advisory and location consulting under a single integrated platform — designed for governments, investors, industrial destinations and global corporations.
            </p>
          </div>
        </section>

        {/* PRACTICE AREAS GRID */}
        <section style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* 
            To achieve the specific internal border look from the screenshot:
            We use a grid with 1px gap and a light grey background for the container.
            Each item is white, creating 1px grey borders between them.
          */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            borderTop: '1px solid #eaeaea',
            borderLeft: '1px solid #eaeaea',
          }}>
            {practiceAreas.map((area, idx) => {
              const num = (idx + 1).toString().padStart(2, '0')
              return (
                <GridCard key={idx} area={area} num={num} />
              )
            })}
            {/* Removed the CTA block as requested, leaving the grid with just the 10 practice areas */}
          </div>
        </section>

        {/* ENGAGEMENT MODEL */}
        <section style={{
          background: '#0a0a0a url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop") center/cover no-repeat',
          position: 'relative',
          padding: '120px 0',
        }}>
          {/* Very dark overlay to ensure high contrast for the text while keeping texture */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'linear-gradient(135deg, rgba(10,10,10,0.98) 0%, rgba(10,10,10,0.85) 100%)',
            pointerEvents: 'none'
          }}></div>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 40px',
            position: 'relative',
            zIndex: 1
          }}>
            <div className="section-label" style={{ marginBottom: '32px' }}>ENGAGEMENT MODEL</div>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: '400',
              color: '#ffffff',
              lineHeight: '1.2',
              maxWidth: '600px',
              marginBottom: '80px',
            }}>
              How we work — a structured 3-phase model.
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px',
            }}>
              {engagementPhases.map((phase, idx) => {
                const Icon = phase.icon
                return (
                  <div key={idx} style={{
                    borderLeft: idx > 0 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                    paddingLeft: idx > 0 ? '40px' : '0',
                    position: 'relative'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
                      <div style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '32px',
                        color: '#c8102e',
                      }}>{phase.num}</div>
                      <Icon size={24} color="#555" strokeWidth={1.5} />
                    </div>
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '24px',
                      fontWeight: '400',
                      color: '#ffffff',
                      lineHeight: '1.3',
                      marginBottom: '16px',
                    }}>{phase.title}</h3>
                    <p style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '13px',
                      color: '#aaaaaa',
                      lineHeight: '1.7',
                    }}>{phase.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section style={{
          background: '#ffffff',
          padding: '120px 0 160px',
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 40px',
          }}>
            <div className="section-label" style={{ marginBottom: '24px' }}>ENGAGE SPARTA</div>
            <div style={{
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
                  color: '#0a0a0a',
                  lineHeight: '1.2',
                  marginBottom: '24px',
                }}>
                  Looking for a specific advisory mandate?
                </h2>
                <p style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '14px',
                  color: '#555',
                  lineHeight: '1.7',
                }}>
                  From a one-off location benchmarking study to a multi-year investment promotion programme — we structure each engagement around outcomes.
                </p>
              </div>
              <a
                href="/get-in-touch"
                style={{
                  background: '#0a0a0a',
                  color: '#ffffff',
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
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#c8102e')}
                onMouseLeave={e => (e.currentTarget.style.background = '#0a0a0a')}
              >
                SPEAK WITH OUR TEAM <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      
      {/* Mobile override for the grids */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) {
          section > div > div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          .grid-cta {
            grid-column: span 1 !important;
          }
          section > div > div[style*="grid-template-columns: repeat(auto-fit"] > div {
            border-left: none !important;
            padding-left: 0 !important;
            border-top: 1px solid rgba(255,255,255,0.1);
            padding-top: 40px;
          }
          section > div > div[style*="grid-template-columns: repeat(auto-fit"] > div:first-child {
            border-top: none;
            padding-top: 0;
          }
        }
      `}} />
    </>
  )
}

function GridCard({ area, num }: { area: any, num: string }) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = area.icon

  return (
    <div
      style={{
        background: isHovered ? '#111111' : '#ffffff',
        padding: '60px 40px',
        minHeight: '320px',
        position: 'relative',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        borderRight: '1px solid #eaeaea',
        borderBottom: '1px solid #eaeaea',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{
        position: 'absolute',
        top: '40px',
        right: '40px',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '12px',
        fontWeight: '500',
        color: isHovered ? '#888888' : '#999999',
        transition: 'color 0.3s ease',
      }}>
        {num}
      </div>
      
      <div style={{ 
        marginBottom: '32px', 
        color: isHovered ? '#ffffff' : '#c8102e',
        transition: 'color 0.3s ease',
      }}>
        <Icon size={28} strokeWidth={1.5} />
      </div>
      
      <h3 style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: '24px',
        fontWeight: '400',
        color: isHovered ? '#ffffff' : '#0a0a0a',
        lineHeight: '1.3',
        marginBottom: '20px',
        transition: 'color 0.3s ease',
      }}>
        {area.title}
      </h3>
      
      <p style={{
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '14px',
        fontWeight: '300',
        color: isHovered ? '#cccccc' : '#555555',
        lineHeight: '1.7',
        transition: 'color 0.3s ease',
      }}>
        {area.desc}
      </p>
    </div>
  )
}
