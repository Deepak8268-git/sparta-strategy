export default function ClientsAndPartners() {
  const clients = [
    'Adani', 'Essar',
    'Bengaluru International\nAirport', 'Shriram Properties'
  ]

  const partners = [
    'fDi Intelligence', 'Financial Times Business\nNetwork',
    'OCO Global', 'IDA Ireland',
    'AWEX (Wallonia)', 'New York State EDC'
  ]

  return (
    <section style={{
      background: '#ffffff',
      padding: '100px 0',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 40px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '120px',
      }}>
        {/* Clients */}
        <div>
          <div className="section-label" style={{ color: '#c8102e', marginBottom: '32px' }}>CLIENTS</div>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(28px, 3.5vw, 40px)',
            fontWeight: '400',
            color: '#0a0a0a',
            lineHeight: '1.2',
            marginBottom: '48px',
            maxWidth: '480px',
          }}>
            Trusted by corporates, governments & investment stakeholders.
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            borderTop: '1px solid #eaeaea',
          }}>
            {clients.map((client, i) => (
              <div key={i} style={{
                padding: '32px 24px',
                borderBottom: '1px solid #eaeaea',
                borderRight: i % 2 === 0 ? '1px solid #eaeaea' : 'none',
                fontFamily: 'Playfair Display, serif',
                fontSize: '18px',
                color: '#333',
                whiteSpace: 'pre-line',
                display: 'flex',
                alignItems: 'center',
              }}>
                {client}
              </div>
            ))}
          </div>
        </div>

        {/* Partner Ecosystem */}
        <div>
          <div className="section-label" style={{ color: '#c8102e', marginBottom: '32px' }}>PARTNER ECOSYSTEM</div>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(28px, 3.5vw, 40px)',
            fontWeight: '400',
            color: '#0a0a0a',
            lineHeight: '1.2',
            marginBottom: '48px',
            maxWidth: '520px',
          }}>
            A partner ecosystem enabling cross-border investor engagement.
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            borderTop: '1px solid #eaeaea',
          }}>
            {partners.map((partner, i) => (
              <div key={i} style={{
                padding: '32px 24px',
                borderBottom: '1px solid #eaeaea',
                borderRight: i % 2 === 0 ? '1px solid #eaeaea' : 'none',
                fontFamily: 'Playfair Display, serif',
                fontSize: '18px',
                color: '#333',
                whiteSpace: 'pre-line',
                display: 'flex',
                alignItems: 'center',
              }}>
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
