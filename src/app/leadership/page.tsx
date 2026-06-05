'use client'

import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function LeadershipPage() {
  const leaders = [
    {
      initials: 'SS',
      name: 'Sanjay H Sharma',
      title: 'Founding President',
      role: 'BUSINESS STRATEGY & INTERNATIONAL RELATIONS',
      linkedin: 'https://www.linkedin.com/in/sanjayhsharma/',
      bio: 'Brings deep experience in strategic consulting, international relations and corporate advisory. Supports Sparta\'s international business development, market expansion and high-value strategic transactions.',
      fullBio: 'Sanjay Sharma is the Founder & Strategic Advisor of SPARTA Global Strategy, a strategic advisory and investment facilitation platform established in 2006, focused on crossborder investments, institutional partnerships, fundraising, and economic development initiatives.\n\nWith over two decades of experience across capital advisory, foreign direct investment (FDI), international trade, strategic fundraising, and policy-linked infrastructure development, Sanjay Sharma has built a strong reputation as a trusted investment facilitator and ecosystem builder.\n\nHis expertise spans investor engagement, global capital connectivity, economic diplomacy, and institutional relationship management. He has worked extensively across investment strategy, government advisory, international collaborations, and cross-border transactions, supporting investment partnerships between governments, corporates, industrial groups, family offices, and global institutional investors.\n\nUnder his leadership, SPARTA Global Strategy has developed a strong international network across 35+ countries and has been associated with investment promotion, infrastructure enablement, healthcare, renewable energy, logistics, industrial development, economic zones, and strategic investment initiatives.\n\nSanjay Sharma has actively engaged with multiple government bodies, investment promotion agencies, and international institutions across India, Europe, the Middle East, and North America, facilitating strategic collaborations, investor outreach programs, and institutional partnerships. He is recognized for combining strategic insight, fundraising capability, relationship capital, and execution-oriented leadership to support long-term value creation, capital mobilization, and scalable ecosystem development initiatives.'
    },
    {
      initials: 'PC',
      name: 'Poonam Chandel',
      title: 'Director',
      role: 'STRATEGIC GROWTH & BUSINESS DEVELOPMENT',
      linkedin: 'https://www.linkedin.com/in/poonam-chandel-4335881ba/',
      bio: 'Leads strategic partnerships, investor engagement, brand positioning and growth initiatives at Sparta Strategy. Focused on long-term value creation and institutional networking across investment ecosystems.',
      fullBio: 'Poonam Chandel is associated with SPARTA Global Strategy and brings experience across investment banking support, debt fundraising, strategic business development, and management consulting.\n\nHer professional exposure includes supporting fundraising transactions, investor engagement initiatives, business strategy execution, and financial coordination activities across startups, SMEs, and growth-stage enterprises.\n\nShe has actively worked on fundraising and advisory assignments involving equity, structured debt, venture capital, NBFC financing, and strategic investor outreach across sectors including healthcare, manufacturing, infrastructure, consumer businesses, and technology.\n\nPoonam is personally associated with multiple investor networks, venture capital funds, NBFCs, family offices, and institutional capital participants, enabling strong investor connectivity and relationship-driven business development support across fundraising mandates.\n\nHer experience includes preparation of investment presentations, pitch decks, fundraising trackers, information memorandums, investor communication materials, and strategic proposals for capital raising and business expansion initiatives. She has also contributed toward management consulting and CFO support assignments involving MIS reporting, budgeting, process coordination, and strategic execution support.\n\nAt SPARTA Global Strategy, Poonam supports strategic advisory assignments, investor communication, institutional outreach, business development initiatives, and transaction execution support aligned with the firm’s cross-border fundraising and investment facilitation platform.'
    }
  ]

  return (
    <>
      <Navbar />
      <main style={{ background: '#ffffff', paddingTop: '80px' }}>
        
        {/* HERO SECTION */}
        <section style={{
          background: '#0a0a0a url("https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop") center/cover no-repeat',
          position: 'relative',
          padding: '140px 0 160px',
          overflow: 'hidden'
        }}>
          {/* Dark overlay to ensure text readability */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'linear-gradient(to right, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.8) 50%, rgba(10,10,10,0.4) 100%)',
            pointerEvents: 'none'
          }}></div>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 40px',
            position: 'relative',
            zIndex: 1
          }}>
            <div className="section-label" style={{ marginBottom: '32px', color: '#c8102e' }}>LEADERSHIP</div>
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: '400',
              color: '#ffffff',
              lineHeight: '1.1',
              maxWidth: '900px',
              marginBottom: '32px',
            }}>
              Senior, partner-led advisory — from people who have built the practice.
            </h1>
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '16px',
              color: '#aaaaaa',
              lineHeight: '1.7',
              maxWidth: '650px',
            }}>
              Sparta Strategy is led by an experienced team that combines deep India insight with global investor access. Every engagement is led by a partner.
            </p>
          </div>
        </section>

        {/* LEADERSHIP GRID */}
        <section style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            borderTop: '1px solid #eaeaea',
            borderLeft: '1px solid #eaeaea',
          }} className="leadership-grid">
            {leaders.map((leader, idx) => {
              const isLastOdd = leaders.length % 2 !== 0 && idx === leaders.length - 1;
              
              return (
                <LeaderCard key={idx} leader={leader} isLastOdd={isLastOdd} />
              )
            })}
          </div>
        </section>

        {/* THE SPARTA WAY */}
        <section style={{
          background: '#ffffff',
          padding: '120px 0 160px',
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 40px',
          }}>
            <div className="section-label" style={{ marginBottom: '32px', color: '#c8102e' }}>THE SPARTA WAY</div>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: '400',
              color: '#0a0a0a',
              lineHeight: '1.1',
              maxWidth: '800px',
              marginBottom: '32px',
            }}>
              Discreet, senior, relationship-led.
            </h2>
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '15px',
              color: '#555',
              lineHeight: '1.7',
              maxWidth: '700px',
            }}>
              Our team has spent nearly two decades building trusted relationships with state IPAs, SEZs, industrial parks, corporate investors and global investment networks. Every mandate is delivered with the same standard of seniority and care.
            </p>
          </div>
        </section>

      </main>
      <Footer />
      
      {/* Mobile styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .modal-scroll-container::-webkit-scrollbar {
          width: 8px;
        }
        .modal-scroll-container::-webkit-scrollbar-track {
          background: transparent; 
        }
        .modal-scroll-container::-webkit-scrollbar-thumb {
          background: #d1d1d1; 
          border-radius: 4px;
        }
        .modal-scroll-container::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8; 
        }

        @media (max-width: 900px) {
          .leadership-grid {
            grid-template-columns: 1fr !important;
          }
          .leadership-card {
            border-left: none !important;
            grid-column: span 1 !important;
          }
        }
        @media (max-width: 600px) {
          .leadership-card {
            flex-direction: column !important;
            gap: 24px !important;
            padding: 40px 24px !important;
          }
          .avatar-circle {
            width: 80px !important;
            height: 80px !important;
            fontSize: 24px !important;
          }
        }
      `}} />
    </>
  )
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function LeaderCard({ leader, isLastOdd }: { leader: any, isLastOdd: boolean }) {
  const [showModal, setShowModal] = useState(false);

  // Prevent scrolling on body when modal is open
  if (typeof window !== 'undefined') {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }

  return (
    <>
      <div style={{
        gridColumn: isLastOdd ? 'span 2' : 'span 1',
        background: '#ffffff',
        padding: '60px 40px',
        borderRight: '1px solid #eaeaea',
        borderBottom: '1px solid #eaeaea',
        display: 'flex',
        justifyContent: isLastOdd ? 'center' : 'flex-start',
      }} className="leadership-card">
        
        <div style={{
          display: 'flex',
          gap: '40px',
          alignItems: 'flex-start',
          maxWidth: isLastOdd ? '700px' : 'none',
          width: '100%',
        }}>
          {/* Avatar */}
          <div style={{
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            flexShrink: 0,
            overflow: 'hidden',
            background: '#f5f5f0',
            border: '1px solid #eaeaea'
          }}>
            <img 
              src={`/${leader.name.split(' ')[0].toLowerCase()}.jpg`} 
              alt={leader.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = `<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-family: 'Playfair Display', serif; font-size: 36px; color: #555;">${leader.name.split(' ').map((n: string) => n[0]).join('')}</div>`;
              }}
            />
          </div>

          {/* Details */}
          <div>
            <h3 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '28px',
              fontWeight: '400',
              color: '#0a0a0a',
              marginBottom: '8px',
            }}>
              {leader.name}
            </h3>
            <div style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '12px',
              fontWeight: '500',
              letterSpacing: '0.12em',
              color: '#c8102e',
              textTransform: 'uppercase',
              marginBottom: '16px',
              lineHeight: '1.5',
            }}>
              <span style={{ fontWeight: '700' }}>{leader.title}</span><br />
              {leader.role}
            </div>
            <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '0.12em',
              color: '#666',
              textDecoration: 'none',
              textTransform: 'uppercase',
              marginBottom: '32px',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#0a0a0a'}
            onMouseLeave={e => e.currentTarget.style.color = '#666'}
            >
              <LinkedinIcon size={16} /> LINKEDIN
            </a>
            
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '14px',
              color: '#555',
              lineHeight: '1.7',
              fontWeight: '300',
              marginBottom: '20px'
            }}>
              {leader.bio}
            </p>
            
            <button 
              onClick={() => setShowModal(true)}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '11px',
                fontWeight: '600',
                color: '#c8102e',
                cursor: 'pointer',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}
              onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
            >
              VIEW FULL BIOGRAPHY &rarr;
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(8px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 20px',
          animation: 'fadeIn 0.2s ease-out',
        }}
        onClick={() => setShowModal(false)}
        >
          <div style={{
            background: '#ffffff',
            maxWidth: '800px',
            width: '100%',
            maxHeight: '85vh',
            overflowY: 'auto',
            borderRadius: '0px',
            padding: '60px',
            position: 'relative',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}
          className="modal-scroll-container"
          onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowModal(false)}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#999',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#0a0a0a'}
              onMouseLeave={e => e.currentTarget.style.color = '#999'}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <div style={{
              display: 'flex',
              gap: '32px',
              alignItems: 'flex-start',
              marginBottom: '40px',
              borderBottom: '1px solid #eaeaea',
              paddingBottom: '32px'
            }}>
               <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  flexShrink: 0,
                  overflow: 'hidden',
                  background: '#f5f5f0',
                  border: '1px solid #eaeaea'
                }}>
                  <img 
                    src={`/${leader.name.split(' ')[0].toLowerCase()}.jpg`} 
                    alt={leader.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div>
                  <h3 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '32px',
                    fontWeight: '400',
                    color: '#0a0a0a',
                    marginBottom: '8px',
                  }}>
                    {leader.name}
                  </h3>
                  <div style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '12px',
                    fontWeight: '500',
                    letterSpacing: '0.12em',
                    color: '#c8102e',
                    textTransform: 'uppercase',
                  }}>
                    <span style={{ fontWeight: '700' }}>{leader.title}</span><br />
                    {leader.role}
                  </div>
                </div>
            </div>

            <div style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '15px',
              color: '#333',
              lineHeight: '1.8',
              fontWeight: '400'
            }}>
              {leader.fullBio.split('\n').map((paragraph: string, i: number) => (
                <p key={i} style={{ marginBottom: '20px' }}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
