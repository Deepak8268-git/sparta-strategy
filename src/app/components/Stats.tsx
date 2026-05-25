export default function Stats() {
  const stats = [
    { title: 'Est. 2006', desc: 'Nearly two decades of cross-border advisory experience.' },
    { title: '35+', desc: 'Countries covered through our partner ecosystem.' },
    { title: '6 Hubs', desc: 'India, Middle East, Europe, UK, USA and Singapore.' },
    { title: 'FT Network', desc: 'Strategic alliances with fDi Intelligence and Financial Times Business Network.' },
    { title: 'Govt. Trusted', desc: 'Mandates with state IPAs, SEZs, free zones and industrial parks.' },
    { title: 'Partner-led', desc: 'Senior team, discreet engagements, institutional-grade execution.' },
  ]

  return (
    <section id="why-sparta" style={{
      background: '#ffffff',
      padding: '100px 0',
      borderTop: '1px solid #f0f0f0',
      borderBottom: '1px solid #f0f0f0',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 40px',
      }}>
        <div className="section-label" style={{ color: '#c8102e', marginBottom: '32px' }}>
          WHY SPARTA STRATEGY
        </div>
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(36px, 5vw, 64px)',
          fontWeight: '400',
          color: '#0a0a0a',
          lineHeight: '1.1',
          maxWidth: '700px',
          marginBottom: '80px',
        }}>
          Institutional credibility. Boutique sensibility.
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          columnGap: '64px',
          rowGap: '0',
        }}>
          {stats.map((stat, i) => (
            <div key={i} style={{
              padding: '40px 0',
              borderTop: '1px solid #eaeaea',
              borderBottom: i >= 3 ? '1px solid #eaeaea' : 'none',
            }}>
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '28px',
                fontWeight: '400',
                color: '#0a0a0a',
                marginBottom: '16px',
              }}>{stat.title}</h3>
              <p style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '14px',
                fontWeight: '300',
                color: '#555',
                lineHeight: '1.6',
              }}>{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
