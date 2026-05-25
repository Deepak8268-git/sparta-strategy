'use client'

export default function StrategicAlliances() {
  const alliances = [
    'STRATEGIC ALLIANCES',
    'FDI INTELLIGENCE',
    'FINANCIAL TIMES BUSINESS NETWORK',
    'OCO GLOBAL',
    'IDA IRELAND',
    'AWEX (WALLONIA)',
    'NEW YORK STATE EDC',
  ]

  // Duplicate for seamless infinite scrolling
  const tickerItems = [...alliances, ...alliances, ...alliances]

  return (
    <section style={{
      background: '#ffffff',
      padding: '40px 0',
      borderTop: '1px solid #eaeaea',
      borderBottom: '1px solid #eaeaea',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      position: 'relative',
    }}>
      {/* CSS Animation defined inline for the marquee */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .ticker-container {
          display: flex;
          align-items: center;
          gap: 60px;
          animation: scroll 30s linear infinite;
        }
        .ticker-container:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="ticker-container">
        {tickerItems.map((item, index) => (
          <div key={index} style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '16px',
            fontWeight: '700',
            letterSpacing: '0.15em',
            color: '#1a1a1a',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '60px', // Gap after each item to the next
          }}>
            {item}
            {/* Add a subtle dot separator if it's not the last visual item */}
            <span style={{ 
              display: 'inline-block', 
              width: '4px', 
              height: '4px', 
              borderRadius: '50%', 
              background: '#ccc' 
            }} />
          </div>
        ))}
      </div>
    </section>
  )
}
