'use client'

import { LineChart, Briefcase, Target, MapPin, Globe, Building2, ShipWheel, Network, Factory, Plane, ArrowRight } from 'lucide-react'

export default function Services() {
  const services = [
    { icon: <LineChart size={24} strokeWidth={1.5} />, title: 'Investment Promotion', desc: 'Strategies that position destinations, parks and SEZs to attract qualified global investors.' },
    { icon: <Briefcase size={24} strokeWidth={1.5} />, title: 'FDI Advisory', desc: 'End-to-end inward and outward FDI advisory grounded in international market intelligence.' },
    { icon: <Target size={24} strokeWidth={1.5} />, title: 'Investor Targeting', desc: 'Sector-driven lead generation and outreach to high-fit corporate investors worldwide.' },
    { icon: <MapPin size={24} strokeWidth={1.5} />, title: 'Location Consulting', desc: 'Benchmarking, due diligence and site selection support for greenfield expansions.' },
    { icon: <Globe size={24} strokeWidth={1.5} />, title: 'International Site Selection', desc: 'India and global location strategy for manufacturing, R&D, GCC and services mandates.' },
    { icon: <Building2 size={24} strokeWidth={1.5} />, title: 'Corporate Expansion Strategy', desc: 'Market-entry, partnerships and operating model design for cross-border growth.' },
    { icon: <ShipWheel size={24} strokeWidth={1.5} />, title: 'Cross-Border Investments', desc: 'Facilitation across regulatory, commercial and stakeholder dimensions of FDI deals.' },
    { icon: <Network size={24} strokeWidth={1.5} />, title: 'Economic Development', desc: 'Advisory to governments and EDOs on investment ecosystem design and branding.' },
    { icon: <Factory size={24} strokeWidth={1.5} />, title: 'Infrastructure Advisory', desc: 'Industrial parks, free zones, logistics corridors and infrastructure asset positioning.' },
    { icon: <Plane size={24} strokeWidth={1.5} />, title: 'Outward FDI Services', desc: 'Supporting Indian corporates in identifying and establishing operations overseas.' },
  ]

  return (
    <section id="services" style={{
      background: '#ffffff',
      padding: '100px 0',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 40px',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '60px',
        }}>
          <div>
            <div className="section-label" style={{ marginBottom: '24px' }}>What We Do</div>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: '400',
              color: '#0a0a0a',
              lineHeight: '1.15',
              maxWidth: '700px',
              marginBottom: '24px',
            }}>
              Advisory built for cross-border ambition.
            </h2>
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '15px',
              color: '#666',
              lineHeight: '1.7',
              maxWidth: '600px',
            }}>
              Ten focused practice areas, delivered by a senior team with experience across geographies, sectors and investor profiles.
            </p>
          </div>
          
          <div style={{ flexShrink: 0, marginLeft: '40px' }}>
            <a href="/services" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'transparent',
              border: '1px solid #0a0a0a',
              color: '#0a0a0a',
              padding: '16px 32px',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#0a0a0a'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0a0a0a'; }}
            >
              All Services →
            </a>
          </div>
        </div>

        {/* Flex Grid */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '24px',
        }}>
          {services.map((s, i) => (
            <div
              key={i}
              style={{
                flex: '0 0 calc(33.333% - 16px)',
                minWidth: '320px',
                padding: '40px 36px',
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                border: '1px solid rgba(0,0,0,0.04)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.06)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.02)'
              }}
            >
              <div style={{ fontSize: '24px', marginBottom: '20px', color: '#c8102e' }}>{s.icon}</div>
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '20px',
                fontWeight: '400',
                color: '#0a0a0a',
                lineHeight: '1.3',
                marginBottom: '12px',
              }}>{s.title}</h3>
              <p style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '13px',
                fontWeight: '300',
                color: '#666',
                lineHeight: '1.7',
              }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
