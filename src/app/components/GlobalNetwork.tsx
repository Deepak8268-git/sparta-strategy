export default function GlobalNetwork() {
  const hubs = [
    { id: 'usa', label: 'USA', top: '45%', left: '20%' },
    { id: 'uk-europe', label: 'United Kingdom\nEurope', top: '35%', left: '48%' },
    { id: 'middle-east', label: 'Middle East', top: '50%', left: '60%' },
    { id: 'india', label: 'India', top: '55%', left: '72%' },
    { id: 'singapore', label: 'Singapore', top: '65%', left: '85%' },
  ]

  return (
    <section id="global-network" style={{
      position: 'relative',
      padding: '120px 0',
      background: '#0a0a0a',
      overflow: 'hidden',
    }}>
      {/* Background Image */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.4,
      }} />

      <div style={{
        position: 'relative',
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 40px',
        display: 'grid',
        gridTemplateColumns: '1fr 1.2fr',
        gap: '60px',
        alignItems: 'center',
      }}>
        {/* Left Content */}
        <div>
          <div style={{
            marginBottom: '24px',
          }}>
            <span style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '14px',
              fontWeight: '800',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#c8102e',
            }}>GLOBAL NETWORK</span>
          </div>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: '400',
            color: '#ffffff',
            lineHeight: '1.1',
            marginBottom: '32px',
          }}>
            Wherever capital meets opportunity.
          </h2>
          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '15px',
            fontWeight: '300',
            color: 'rgba(255,255,255,0.8)',
            lineHeight: '1.8',
            marginBottom: '40px',
            maxWidth: '480px',
          }}>
            Active engagements across six core regions and 35+ countries through our partner ecosystem — connecting Indian destinations with global capital, and Indian corporates with international markets.
          </p>
          <a href="/global-network" style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#ffffff',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            borderBottom: '1px solid #ffffff',
            paddingBottom: '4px',
          }}>
            EXPLORE NETWORK →
          </a>
        </div>

        {/* Right Map Glassmorphism */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '4px',
          padding: '60px',
          position: 'relative',
          height: '400px',
        }}>
          {/* Map Image (white dotted) */}
          <div style={{
            position: 'absolute',
            top: '40px', left: '40px', right: '40px', bottom: '40px',
            backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            opacity: 0.15,
            filter: 'invert(1)',
          }} />

          {/* Map Pins */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            {hubs.map((hub) => (
              <div key={hub.id} style={{
                position: 'absolute',
                top: hub.top,
                left: hub.left,
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <div style={{
                  width: '12px',
                  height: '12px',
                  background: '#c8102e',
                  borderRadius: '50%',
                  border: '3px solid rgba(255,255,255,0.8)',
                  boxShadow: '0 0 10px rgba(200, 16, 46, 0.5)',
                }} />
                <div style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '10px',
                  fontWeight: '500',
                  color: '#ffffff',
                  whiteSpace: 'pre-line',
                  lineHeight: '1.2',
                }}>
                  {hub.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
