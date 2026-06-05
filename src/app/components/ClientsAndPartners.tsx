export default function ClientsAndPartners() {
  const clients = [
    { name: 'Adani', logo: '/clients/adani.jpeg' },
    { name: 'Essar', logo: '/clients/essar.jpeg' },
    { name: 'Bengaluru International Airport', logo: '/clients/airport.jpeg' },
    { name: 'Shriram Properties', logo: '/clients/shriram.jpeg' },
  ]

  const partners = [
    { name: 'fDi Intelligence', logo: '/partners/fdi.jpeg' },
    { name: 'Financial Times Business Network', logo: '/partners/ft.jpeg' },
    { name: 'OCO Global', logo: '/partners/oco.jpeg' },
    { name: 'IDA Ireland', logo: '/partners/ireland.jpeg' },
    { name: 'AWEX (Wallonia)', logo: '/partners/wallonia.jpeg' },
    { name: 'New York State EDC', logo: '/partners/newyork.jpeg' },
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
                height: '160px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                {client.logo ? (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                    <img src={client.logo} alt={client.name} style={{ maxHeight: '60px', maxWidth: '85%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
                    <span style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#0a0a0a',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      textAlign: 'center'
                    }}>
                      {client.name}
                    </span>
                  </div>
                ) : (
                  <span style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '18px',
                    color: '#333',
                    textAlign: 'center'
                  }}>
                    {client.name}
                  </span>
                )}
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
                height: '160px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                {partner.logo ? (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                    <img src={partner.logo} alt={partner.name} style={{ maxHeight: '60px', maxWidth: '85%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
                    <span style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '12px',
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
                    fontSize: '18px',
                    color: '#333',
                    textAlign: 'center'
                  }}>
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
