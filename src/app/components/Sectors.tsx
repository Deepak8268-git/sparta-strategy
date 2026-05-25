export default function Sectors() {
  const sectors = [
    'Infrastructure', 'Manufacturing', 'Renewable Energy', 'Industrial Parks',
    'Technology & IT/ITeS', 'Logistics & Warehousing', 'Pharmaceuticals & Life Sciences',
    'Automotive & EV', 'Aerospace & Defence', 'Financial Services',
    'Food Processing', 'Smart Cities',
  ]

  return (
    <section style={{
      background: '#f5f5f0',
      padding: '100px 0',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 40px',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: '80px',
        alignItems: 'start',
      }}>
        <div>
          <div className="section-label">Sectors</div>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(30px, 3.5vw, 48px)',
            fontWeight: '400',
            color: '#0a0a0a',
            lineHeight: '1.15',
          }}>
            Sector coverage across 12 high-growth industries.
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0',
        }}>
          {sectors.map((sector, i) => (
            <div
              key={i}
              style={{
                padding: '20px 0',
                borderBottom: '1px solid rgba(0,0,0,0.1)',
                borderRight: i % 2 === 0 ? '1px solid rgba(0,0,0,0.1)' : 'none',
                paddingLeft: i % 2 !== 0 ? '32px' : '0',
                paddingRight: i % 2 === 0 ? '32px' : '0',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <span style={{
                width: '6px',
                height: '6px',
                background: '#c8102e',
                borderRadius: '50%',
                flexShrink: 0,
              }} />
              <span style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '14px',
                fontWeight: '400',
                color: '#333',
              }}>{sector}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
