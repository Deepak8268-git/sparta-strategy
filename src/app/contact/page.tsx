'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { MapPin, Phone, Mail, Send } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#ffffff', paddingTop: '80px' }}>
        
        {/* HERO SECTION */}
        <section style={{
          background: '#0a0a0a url("https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop") center/cover no-repeat',
          position: 'relative',
          padding: '160px 0 180px',
          overflow: 'hidden'
        }}>
          {/* Dark overlay */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'linear-gradient(to right, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.85) 50%, rgba(10,10,10,0.5) 100%)',
            pointerEvents: 'none'
          }}></div>
          
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 40px',
            position: 'relative',
            zIndex: 1
          }}>
            <div className="section-label" style={{ marginBottom: '32px', color: '#c8102e', fontSize: '11px', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              CONTACT
            </div>
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: '400',
              color: '#ffffff',
              lineHeight: '1.1',
              maxWidth: '800px',
              marginBottom: '32px',
            }}>
              Let's talk about your cross-border ambitions.
            </h1>
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '16px',
              color: '#aaaaaa',
              lineHeight: '1.7',
              maxWidth: '650px',
            }}>
              Whether you are a government, an industrial destination, or a corporate planning a new geography — we would be glad to share perspectives.
            </p>
          </div>
        </section>

        {/* CONTACT INFO & FORM SECTION */}
        <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '120px 40px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr', // Left column narrower, right column wider
            gap: '80px',
          }} className="contact-grid">
            
            {/* LEFT COLUMN: CONTACT DETAILS */}
            <div>
              {/* MUMBAI HQ */}
              <div style={{ marginBottom: '80px' }}>
                <div style={{ 
                  color: '#c8102e', 
                  fontSize: '11px', 
                  fontWeight: '600', 
                  letterSpacing: '0.15em', 
                  textTransform: 'uppercase',
                  marginBottom: '24px'
                }}>
                  MUMBAI HQ
                </div>
                
                <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', alignItems: 'flex-start' }}>
                  <MapPin size={18} color="#c8102e" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '14px', color: '#555', lineHeight: '1.7' }}>
                    Plot 228, Sec-13, Khargar Mumbai - 410210
                  </p>
                </div>
                
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <Phone size={18} color="#c8102e" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '14px', color: '#555', lineHeight: '1.7' }}>
                    +91 83569 96641<br/>
                    +91 70457 57757
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <div style={{ 
                  color: '#c8102e', 
                  fontSize: '11px', 
                  fontWeight: '600', 
                  letterSpacing: '0.15em', 
                  textTransform: 'uppercase',
                  marginBottom: '24px'
                }}>
                  EMAIL
                </div>
                
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <Mail size={18} color="#c8102e" style={{ flexShrink: 0 }} />
                  <a href="mailto:info@sparta.co.in" style={{ 
                    fontFamily: 'Montserrat, sans-serif', 
                    fontSize: '14px', 
                    color: '#555', 
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#c8102e'}
                  onMouseLeave={e => e.currentTarget.style.color = '#555'}
                  >
                    info@sparta.co.in
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: CONTACT FORM */}
            <div>
              <div style={{ 
                color: '#c8102e', 
                fontSize: '11px', 
                fontWeight: '600', 
                letterSpacing: '0.15em', 
                textTransform: 'uppercase',
                marginBottom: '24px'
              }}>
                SEND A NOTE
              </div>
              
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: '400',
                color: '#0a0a0a',
                lineHeight: '1.2',
                marginBottom: '48px',
              }}>
                Tell us about your project.
              </h2>

              <form style={{ display: 'flex', flexDirection: 'column', gap: '40px' }} onSubmit={(e) => e.preventDefault()}>
                
                {/* Row 1 */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }} className="form-row">
                  <div className="input-group">
                    <label style={{ display: 'block', fontSize: '10px', fontWeight: '600', letterSpacing: '0.15em', color: '#888', marginBottom: '8px' }}>FULL NAME</label>
                    <input type="text" className="minimal-input" />
                  </div>
                  <div className="input-group">
                    <label style={{ display: 'block', fontSize: '10px', fontWeight: '600', letterSpacing: '0.15em', color: '#888', marginBottom: '8px' }}>EMAIL</label>
                    <input type="email" className="minimal-input" />
                  </div>
                </div>

                {/* Row 2 */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }} className="form-row">
                  <div className="input-group">
                    <label style={{ display: 'block', fontSize: '10px', fontWeight: '600', letterSpacing: '0.15em', color: '#888', marginBottom: '8px' }}>ORGANISATION</label>
                    <input type="text" className="minimal-input" />
                  </div>
                  <div className="input-group">
                    <label style={{ display: 'block', fontSize: '10px', fontWeight: '600', letterSpacing: '0.15em', color: '#888', marginBottom: '8px' }}>AREA OF INTEREST</label>
                    <div style={{ position: 'relative' }}>
                      <select defaultValue="" className="minimal-input" style={{ appearance: 'none', background: 'transparent', cursor: 'pointer', borderRadius: 0 }}>
                        <option value="" disabled hidden></option>
                        <option value="FDI Advisory">FDI Advisory</option>
                        <option value="Corporate Expansion">Corporate Expansion</option>
                        <option value="Market Entry">Market Entry</option>
                        <option value="Other">Other</option>
                      </select>
                      <div style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#0a0a0a' }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="input-group">
                  <label style={{ display: 'block', fontSize: '10px', fontWeight: '600', letterSpacing: '0.15em', color: '#888', marginBottom: '8px' }}>MESSAGE</label>
                  <textarea className="minimal-input" rows={1} style={{ resize: 'none', paddingBottom: '32px' }}></textarea>
                </div>

                {/* Submit Row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', flexWrap: 'wrap', gap: '24px' }}>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '12px', color: '#888' }}>
                    We respond within one business day
                  </span>
                  <button type="submit" style={{
                    background: '#0a0a0a',
                    color: '#ffffff',
                    border: 'none',
                    padding: '16px 32px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '11px',
                    fontWeight: '600',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#c8102e'}
                  onMouseLeave={e => e.currentTarget.style.background = '#0a0a0a'}
                  >
                    SEND <Send size={14} />
                  </button>
                </div>
                
              </form>
            </div>
            
          </div>
        </section>

      </main>
      <Footer />

      {/* Styles for minimal form and responsive layout */}
      <style dangerouslySetInnerHTML={{ __html: `
        .minimal-input {
          width: 100%;
          border: none;
          border-bottom: 1px solid #eaeaea;
          padding: 8px 0;
          font-family: 'Montserrat', sans-serif;
          font-size: 15px;
          color: #0a0a0a;
          outline: none;
          transition: border-bottom-color 0.2s;
          background: transparent;
        }
        .minimal-input:focus {
          border-bottom-color: #0a0a0a;
        }
        
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}} />
    </>
  )
}
