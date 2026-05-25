export default function About() {
  return (
    <section id="about" style={{
      background: '#ffffff',
      padding: '100px 0',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 40px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center',
      }}>
        {/* Left */}
        <div>
          <div className="section-label">About Sparta</div>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: '400',
            color: '#0a0a0a',
            lineHeight: '1.15',
            marginBottom: '32px',
          }}>
            Institutional-grade advisory built for governments and global investors.
          </h2>
          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '15px',
            fontWeight: '300',
            color: '#555',
            lineHeight: '1.8',
            marginBottom: '20px',
          }}>
            Established in <strong style={{ fontWeight: '600', color: '#0a0a0a' }}>2006</strong>, Sparta Strategy is a boutique mid-market FDI consulting firm serving governments, free zones, industrial parks and global corporations.
          </p>
          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '15px',
            fontWeight: '300',
            color: '#555',
            lineHeight: '1.8',
            marginBottom: '40px',
          }}>
            We work across <strong style={{ fontWeight: '600', color: '#0a0a0a' }}>inward FDI</strong> into India and <strong style={{ fontWeight: '600', color: '#0a0a0a' }}>outward FDI</strong> for Indian corporates expanding internationally — combining research-led intelligence, government connectivity and a global partner ecosystem.
          </p>
          <a href="/about" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#c8102e',
            textDecoration: 'none',
            borderBottom: '1px solid #c8102e',
            paddingBottom: '2px',
          }}>
            More About Us →
          </a>
        </div>

        {/* Right — image with overlay card */}
        <div style={{ position: 'relative' }}>
          <div style={{
            width: '100%',
            height: '520px',
            overflow: 'hidden',
            position: 'relative',
          }}>
            <img
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80"
              alt="Modern architecture"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            {/* Promise card overlay */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(10,10,10,0.9) 60%, transparent)',
              padding: '40px 36px 36px',
            }}>
              <p style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '10px',
                fontWeight: '600',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#c8102e',
                marginBottom: '10px',
              }}>Our Promise</p>
              <p style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '22px',
                fontWeight: '400',
                color: '#ffffff',
                lineHeight: '1.4',
              }}>
                Enabling Global Investments. Creating Strategic Growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
