'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { MapPin, Phone, Clock } from 'lucide-react'

export default function GetInTouchPage() {
  return (
    <>
      <Navbar />
      <main style={{ 
        position: 'relative',
        minHeight: '100vh',
        background: '#0a0a0a url("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop") center/cover no-repeat',
        paddingTop: '160px',
        paddingBottom: '120px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        {/* Dark overlay for background */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(10, 10, 10, 0.85)',
          pointerEvents: 'none'
        }}></div>

        {/* HEADER TEXT */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          marginBottom: '60px',
          padding: '0 20px',
        }}>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(48px, 6vw, 72px)',
            fontWeight: '600',
            color: '#c8102e', // Sparta Red
            marginBottom: '16px',
            lineHeight: '1.1'
          }}>
            Get in Touch!
          </h1>
          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#ffffff',
          }}>
            We are looking forward to start a project with you!
          </p>
        </div>

        {/* CARD CONTAINER */}
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 20px',
          zIndex: 1,
        }} className="card-wrapper">
          
          {/* RED BACKGROUND BLOCK BEHIND THE CARD */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '0',
            right: '0',
            transform: 'translateY(-50%)',
            height: '80%',
            background: '#c8102e', // Sparta Red
            zIndex: 0,
          }} className="bg-block"></div>

          {/* MAIN WHITE CARD */}
          <div style={{
            position: 'relative',
            background: '#ffffff',
            width: '90%',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            zIndex: 1,
          }} className="contact-card">
            
            {/* LEFT COLUMN: INFO */}
            <div style={{
              padding: '60px',
              display: 'flex',
              flexDirection: 'column',
              gap: '40px'
            }} className="card-padding">
              
              {/* Address */}
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{
                  background: '#c8102e',
                  borderRadius: '50%',
                  width: '44px', height: '44px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MapPin color="#ffffff" size={20} />
                </div>
                <div>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '15px', fontWeight: '600', color: '#0a0a0a', lineHeight: '1.6', maxWidth: '300px' }}>
                    Shop 38, Parth CHS, Plot 228, Sec-13, Khargar Mumbai - 410210
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{
                  background: '#c8102e',
                  borderRadius: '50%',
                  width: '44px', height: '44px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Phone color="#ffffff" size={20} />
                </div>
                <div>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '15px', fontWeight: '600', color: '#0a0a0a', lineHeight: '1.6' }}>
                    +91 83569 96641<br />
                    +91 84678 11100
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{
                  background: '#c8102e',
                  borderRadius: '50%',
                  width: '44px', height: '44px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Clock color="#ffffff" size={20} />
                </div>
                <div style={{ width: '100%', maxWidth: '280px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '15px', fontWeight: '600', color: '#0a0a0a', width: '90px' }}>Mon – Sat</span>
                    <div style={{ flexGrow: 1, borderBottom: '2px dotted #cccccc', margin: '0 12px', transform: 'translateY(-4px)' }}></div>
                    <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '15px', fontWeight: '600', color: '#0a0a0a', width: '110px', textAlign: 'right' }}>10 am – 8 pm</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '15px', fontWeight: '600', color: '#0a0a0a', width: '90px' }}>Sunday</span>
                    <div style={{ flexGrow: 1, borderBottom: '2px dotted #cccccc', margin: '0 12px', transform: 'translateY(-4px)' }}></div>
                    <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '15px', fontWeight: '600', color: '#0a0a0a', width: '110px', textAlign: 'right' }}>Closed</span>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: FORM */}
            <div style={{
              padding: '60px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }} className="card-padding border-left">
              <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <input 
                  type="text" 
                  placeholder="Enter your Name" 
                  className="box-input"
                />
                <input 
                  type="email" 
                  placeholder="Enter a valid email address" 
                  className="box-input"
                />
                <textarea 
                  placeholder="Enter your message" 
                  className="box-input"
                  rows={4}
                  style={{ resize: 'none', height: '140px' }}
                ></textarea>
                
                <div>
                  <button type="submit" style={{
                    background: '#c8102e',
                    color: '#ffffff',
                    border: 'none',
                    padding: '16px 40px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '13px',
                    fontWeight: '700',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                    marginTop: '16px'
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#0a0a0a'}
                  onMouseLeave={e => e.currentTarget.style.background = '#c8102e'}
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
            
          </div>
        </div>
      </main>
      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        .box-input {
          width: 100%;
          border: 1px solid #cccccc;
          padding: 16px;
          font-family: 'Montserrat', sans-serif;
          font-size: 14px;
          color: #0a0a0a;
          outline: none;
          transition: border-color 0.2s;
        }
        .box-input::placeholder {
          color: #999999;
        }
        .box-input:focus {
          border-color: #c8102e;
        }

        @media (max-width: 900px) {
          .contact-card {
            grid-template-columns: 1fr !important;
            width: 100% !important;
          }
          .bg-block {
            display: none !important;
          }
          .border-left {
            border-left: none !important;
            border-top: 1px solid #eaeaea;
          }
          .card-padding {
            padding: 40px 20px !important;
          }
        }
      `}} />
    </>
  )
}
