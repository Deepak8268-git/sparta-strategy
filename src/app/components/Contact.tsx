'use client'

export default function Contact() {
  return (
    <section id="contact" style={{
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
      }}>
        {/* Left */}
        <div>
          <div className="section-label">Contact</div>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(30px, 4vw, 48px)',
            fontWeight: '400',
            color: '#0a0a0a',
            lineHeight: '1.15',
            marginBottom: '24px',
          }}>
            Ready to unlock your cross-border growth?
          </h2>
          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '15px',
            fontWeight: '300',
            color: '#555',
            lineHeight: '1.8',
            marginBottom: '48px',
          }}>
            Speak with a senior advisor about your investment promotion, FDI, or cross-border strategy needs.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              { label: 'Email', value: 'info@sparta.co.in' },
              { label: 'Headquarters', value: 'Mumbai, India' },
              { label: 'Phone', value: '+91 22 6600 0000' },
            ].map((item, i) => (
              <div key={i}>
                <div style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '10px',
                  fontWeight: '600',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#c8102e',
                  marginBottom: '4px',
                }}>{item.label}</div>
                <div style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '15px',
                  fontWeight: '400',
                  color: '#0a0a0a',
                }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div style={{
          background: '#f5f5f0',
          padding: '48px',
        }}>
          <h3 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '24px',
            fontWeight: '400',
            color: '#0a0a0a',
            marginBottom: '32px',
          }}>Send us a message</h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { label: 'Full Name', type: 'text', placeholder: 'Your full name' },
              { label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
              { label: 'Organisation', type: 'text', placeholder: 'Company or government body' },
            ].map((field, i) => (
              <div key={i}>
                <label style={{
                  display: 'block',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '10px',
                  fontWeight: '600',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#555',
                  marginBottom: '8px',
                }}>{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    border: '1px solid #ddd',
                    background: '#fff',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '14px',
                    fontWeight: '300',
                    color: '#0a0a0a',
                    outline: 'none',
                  }}
                />
              </div>
            ))}

            <div>
              <label style={{
                display: 'block',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '10px',
                fontWeight: '600',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#555',
                marginBottom: '8px',
              }}>Message</label>
              <textarea
                rows={4}
                placeholder="How can we help you?"
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  border: '1px solid #ddd',
                  background: '#fff',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '14px',
                  fontWeight: '300',
                  color: '#0a0a0a',
                  outline: 'none',
                  resize: 'vertical',
                }}
              />
            </div>

            <button
              style={{
                background: '#c8102e',
                color: '#fff',
                padding: '16px 32px',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '11px',
                fontWeight: '600',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                border: 'none',
                cursor: 'pointer',
                width: '100%',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#a50d25')}
              onMouseLeave={e => (e.currentTarget.style.background = '#c8102e')}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
