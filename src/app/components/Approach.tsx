import { Search, Target, Handshake } from 'lucide-react'

export default function Approach() {
  const phases = [
    {
      num: '01',
      icon: <Search size={24} strokeWidth={1.5} />,
      title: 'Research & Benchmarking',
      desc: 'Sector intelligence, investor mapping and location benchmarking grounded in proprietary data and the FT/fDi network.',
    },
    {
      num: '02',
      icon: <Target size={24} strokeWidth={1.5} />,
      title: 'Investor Targeting & Lead Generation',
      desc: 'Qualified outreach to high-fit corporate investors — calibrated to sector, geography and investment thesis.',
    },
    {
      num: '03',
      icon: <Handshake size={24} strokeWidth={1.5} />,
      title: 'Deal Facilitation & Investment Support',
      desc: 'Stakeholder management, government engagement, and post-investment handholding through to operational launch.',
    },
  ]

  return (
    <section style={{
      position: 'relative',
      padding: '120px 0',
      background: '#0a0a0a',
      overflow: 'hidden',
    }}>
      {/* Premium Dark Background Image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop)', // Dark, sleek corporate/strategy texture
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />

      {/* Heavy uniform overlay for perfect text readability */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(10, 10, 10, 0.88)', // Uniform heavy dark tint
      }} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 40px',
      }}>
        <div className="section-label" style={{ color: '#c8102e' }}>Our Approach</div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'end',
          marginBottom: '80px',
        }}>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(30px, 4vw, 52px)',
            fontWeight: '400',
            color: '#ffffff',
            lineHeight: '1.15',
          }}>
            A 3-phase execution model — from research to deal facilitation.
          </h2>
          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '15px',
            fontWeight: '300',
            color: 'rgba(255,255,255,0.5)',
            lineHeight: '1.8',
          }}>
            A structured approach delivering measurable investment outcomes for governments and corporates.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          borderTop: '1px solid rgba(255,255,255,0.08)',
        }}>
          {phases.map((p, i) => (
            <div key={i} style={{
              padding: '52px 40px',
              borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '32px',
              }}>
                <span style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.05em',
                  color: '#c8102e',
                }}>{p.num}</span>
                <span style={{ fontSize: '24px', opacity: 0.6 }}>{p.icon}</span>
              </div>
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '22px',
                fontWeight: '400',
                color: '#ffffff',
                lineHeight: '1.3',
                marginBottom: '16px',
              }}>{p.title}</h3>
              <p style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '14px',
                fontWeight: '300',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: '1.7',
              }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
