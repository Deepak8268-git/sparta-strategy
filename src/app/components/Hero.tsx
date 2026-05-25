'use client'

export default function Hero() {
  return (
    <section id="home" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: '#0a0a0a',
      overflow: 'hidden',
    }}>
      {/* Background image overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.5,
      }} />

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(10,10,10,0.75) 30%, rgba(10,10,10,0.3) 100%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '120px 40px 80px',
        width: '100%',
      }}>
        <p style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '11px',
          fontWeight: '600',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: '#c8102e',
          marginBottom: '28px',
        }}>
          Connecting Global Capital With Emerging Opportunities
        </p>

        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(42px, 6vw, 80px)',
          fontWeight: '400',
          color: '#ffffff',
          lineHeight: '1.1',
          maxWidth: '760px',
          marginBottom: '28px',
        }}>
          India&apos;s Leading Cross-Border{' '}
          <em style={{ color: '#c8102e', fontStyle: 'italic' }}>Investment</em>{' '}
          &amp; FDI Advisory Platform.
        </h1>

        <p style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '15px',
          fontWeight: '300',
          color: 'rgba(255,255,255,0.7)',
          lineHeight: '1.8',
          maxWidth: '560px',
          marginBottom: '48px',
        }}>
          Sparta Strategy partners with governments, investors, industrial parks, SEZs and global corporations to unlock international growth — from investment promotion and location strategy to cross-border FDI execution.
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href="/services" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.8)',
            color: '#fff',
            padding: '16px 32px',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'all 0.3s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#0a0a0a'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#fff'; }}
          >
            Explore Services →
          </a>
          <a href="/contact" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: '#c8102e',
            border: '1px solid #c8102e',
            color: '#fff',
            padding: '16px 32px',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'all 0.3s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#a50d25'}
          onMouseLeave={e => e.currentTarget.style.background = '#c8102e'}
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
