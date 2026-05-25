'use client'

import Link from 'next/link'

export default function Cta() {
  return (
    <section style={{
      position: 'relative',
      padding: '120px 0',
      background: '#ffffff', // Clean white background for strong contrast
      borderTop: '1px solid rgba(0,0,0,0.05)', // Subtle gap/separator
    }}>
      <div style={{
        position: 'relative',
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        {/* Left Content */}
        <div style={{ maxWidth: '600px' }}>
          <div className="section-label" style={{ color: '#c8102e', marginBottom: '24px' }}>
            ENGAGE WITH SPARTA
          </div>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(36px, 5vw, 52px)',
            fontWeight: '400',
            color: '#0a0a0a',
            lineHeight: '1.1',
            marginBottom: '24px',
          }}>
            Planning your next cross-border move?
          </h2>
          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '15px',
            fontWeight: '300',
            color: '#555',
            lineHeight: '1.8',
          }}>
            From investment promotion mandates to greenfield site selection — our senior team is ready to help you build a credible, executable plan.
          </p>
        </div>

        {/* Right Button */}
        <div>
          <Link href="/contact" style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: '#0a0a0a',
            color: '#ffffff',
            padding: '20px 40px',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = '#c8102e')}
          onMouseLeave={e => (e.currentTarget.style.background = '#0a0a0a')}
          >
            START A CONVERSATION &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
