import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Compass, Target, CheckCircle2 } from 'lucide-react'

export const metadata = {
  title: 'About | Sparta Strategy',
  description: 'A boutique cross-border investment & FDI advisory firm.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px', background: '#ffffff' }}>
        
        {/* HERO SECTION */}
        <section style={{
          position: 'relative',
          background: '#0a0a0a',
          color: '#ffffff',
          overflow: 'hidden',
          padding: '140px 0 160px',
        }}>
          {/* Abstract background on the right */}
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: '55%',
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.25,
            maskImage: 'linear-gradient(to right, transparent, black)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black)',
          }} />
          
          <div style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 40px',
          }}>
            <div className="section-label" style={{ color: '#c8102e', marginBottom: '32px', letterSpacing: '0.2em' }}>
              ABOUT SPARTA STRATEGY
            </div>
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: '400',
              color: '#ffffff',
              lineHeight: '1.1',
              maxWidth: '800px',
              marginBottom: '40px',
            }}>
              A boutique cross-border investment &amp; FDI advisory firm — institutional in approach, independent by design.
            </h1>
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '16px',
              fontWeight: '300',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: '1.8',
              maxWidth: '640px',
            }}>
              Since 2006, Sparta Strategy has worked at the intersection of governments, investors, industrial destinations and corporations. We help clients navigate the most complex element of international growth: choosing where to invest, attracting the right capital, and executing it well.
            </p>
          </div>
        </section>

        {/* OUR PRACTICE SECTION */}
        <section style={{ padding: '120px 0', borderBottom: '1px solid #eaeaea' }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '80px',
          }}>
            <div>
              <div className="section-label" style={{ color: '#c8102e', marginBottom: '32px' }}>
                OUR PRACTICE
              </div>
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(36px, 4vw, 56px)',
                fontWeight: '400',
                color: '#0a0a0a',
                lineHeight: '1.15',
                maxWidth: '500px',
              }}>
                What we do, in plain terms.
              </h2>
            </div>
            <div>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '15px', color: '#555', lineHeight: '1.8', marginBottom: '24px' }}>
                Sparta Strategy is one of India&apos;s leading mid-market FDI consulting firms. We serve <strong style={{ color: '#0a0a0a', fontWeight: '600' }}>governments and free zones</strong> with investment promotion and investor attraction, and <strong style={{ color: '#0a0a0a', fontWeight: '600' }}>corporations</strong> with location advisory, market entry and cross-border expansion.
              </p>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '15px', color: '#555', lineHeight: '1.8', marginBottom: '24px' }}>
                Founded to serve investment promotion initiatives of Indian government agencies and free zones, we have since expanded into outward FDI — helping foreign IPAs attract investment from India, and supporting Indian corporates as they expand internationally.
              </p>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '15px', color: '#555', lineHeight: '1.8' }}>
                Our work is grounded in evidence: investor research, sector intelligence and location benchmarking — delivered by a senior team that has built relationships with state IPAs, SEZs, industrial parks and global investor networks over nearly two decades.
              </p>
            </div>
          </div>
        </section>

        {/* VISION & MISSION SECTION */}
        <section style={{ padding: '100px 0', background: '#fafafa' }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '40px',
          }}>
            {/* Vision */}
            <div style={{ background: '#fff', padding: '60px 48px', border: '1px solid #eaeaea' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                <Compass size={20} color="#c8102e" strokeWidth={2} />
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '12px', fontWeight: '600', letterSpacing: '0.15em', color: '#888', textTransform: 'uppercase' }}>VISION</span>
              </div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: '400', color: '#0a0a0a', lineHeight: '1.2', marginBottom: '24px' }}>
                Connecting Global Capital With Emerging Opportunities.
              </h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '14px', color: '#666', lineHeight: '1.7' }}>
                To be the most trusted cross-border investment advisory platform between India and the world — enabling capital, ideas and enterprise to move across geographies with confidence.
              </p>
            </div>
            {/* Mission */}
            <div style={{ background: '#fff', padding: '60px 48px', border: '1px solid #eaeaea' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                <Target size={20} color="#c8102e" strokeWidth={2} />
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '12px', fontWeight: '600', letterSpacing: '0.15em', color: '#888', textTransform: 'uppercase' }}>MISSION</span>
              </div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: '400', color: '#0a0a0a', lineHeight: '1.2', marginBottom: '24px' }}>
                Enabling Global Investments. Creating Strategic Growth.
              </h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '14px', color: '#666', lineHeight: '1.7' }}>
                To deliver institutional-grade, research-led advisory — supported by deep government connectivity and a global partner ecosystem — that produces measurable investment outcomes for our clients.
              </p>
            </div>
          </div>
        </section>

        {/* OUR JOURNEY SECTION */}
        <section style={{ padding: '120px 0' }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 40px',
          }}>
            <div className="section-label" style={{ color: '#c8102e', marginBottom: '32px' }}>
              OUR JOURNEY
            </div>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: '400',
              color: '#0a0a0a',
              lineHeight: '1.1',
              maxWidth: '600px',
              marginBottom: '80px',
            }}>
              Nearly two decades of cross-border work.
            </h2>

            {/* Timeline */}
            <div style={{ position: 'relative', paddingLeft: '40px', maxWidth: '800px' }}>
              {/* Vertical line */}
              <div style={{ position: 'absolute', left: '10px', top: '10px', bottom: '10px', width: '1px', background: '#eaeaea' }} />
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
                {/* 2006 */}
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '-35.5px', top: '8px', width: '10px', height: '10px', borderRadius: '50%', background: '#c8102e' }} />
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', color: '#0a0a0a', marginBottom: '8px' }}>2006</div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '13px', fontWeight: '600', letterSpacing: '0.15em', color: '#666', textTransform: 'uppercase', marginBottom: '16px' }}>SPARTA STRATEGY FOUNDED</div>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '15px', color: '#555', lineHeight: '1.6' }}>
                    Launched to serve investment promotion initiatives of Indian government agencies and free zones.
                  </p>
                </div>

                {/* 2010 */}
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '-35.5px', top: '8px', width: '10px', height: '10px', borderRadius: '50%', background: '#c8102e' }} />
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', color: '#0a0a0a', marginBottom: '8px' }}>2010</div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '13px', fontWeight: '600', letterSpacing: '0.15em', color: '#666', textTransform: 'uppercase', marginBottom: '16px' }}>FDI PROMOTION EXPANSION</div>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '15px', color: '#555', lineHeight: '1.6' }}>
                    Expanded mandate to support foreign IPAs attracting FDI from India and Indian corporates going global.
                  </p>
                </div>

                {/* 2015 */}
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '-35.5px', top: '8px', width: '10px', height: '10px', borderRadius: '50%', background: '#c8102e' }} />
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', color: '#0a0a0a', marginBottom: '8px' }}>2015</div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '13px', fontWeight: '600', letterSpacing: '0.15em', color: '#666', textTransform: 'uppercase', marginBottom: '16px' }}>INTERNATIONAL ALLIANCES</div>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '15px', color: '#555', lineHeight: '1.6' }}>
                    Strategic partnerships with fDi Intelligence, Financial Times Business Network and OCO Global.
                  </p>
                </div>

                {/* 2020 */}
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '-35.5px', top: '8px', width: '10px', height: '10px', borderRadius: '50%', background: '#c8102e' }} />
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', color: '#0a0a0a', marginBottom: '8px' }}>2020</div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '13px', fontWeight: '600', letterSpacing: '0.15em', color: '#666', textTransform: 'uppercase', marginBottom: '16px' }}>OUTWARD FDI PRACTICE</div>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '15px', color: '#555', lineHeight: '1.6' }}>
                    Scaled corporate location advisory for Indian corporates expanding into global markets.
                  </p>
                </div>

                {/* Today */}
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '-35.5px', top: '8px', width: '10px', height: '10px', borderRadius: '50%', background: '#c8102e' }} />
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', color: '#0a0a0a', marginBottom: '8px' }}>Today</div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '13px', fontWeight: '600', letterSpacing: '0.15em', color: '#666', textTransform: 'uppercase', marginBottom: '16px' }}>CROSS-BORDER PLATFORM</div>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '15px', color: '#555', lineHeight: '1.6' }}>
                    A boutique, partner-led advisory platform across six regions, 35+ countries and ten focused practice areas.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* HOW WE WORK SECTION */}
        <section style={{ padding: '120px 0', background: '#ffffff' }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '80px',
            alignItems: 'start',
          }}>
            <div>
              <div className="section-label" style={{ color: '#c8102e', marginBottom: '32px' }}>
                HOW WE WORK
              </div>
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(36px, 4vw, 56px)',
                fontWeight: '400',
                color: '#0a0a0a',
                lineHeight: '1.15',
                maxWidth: '400px',
              }}>
                Principles that define our practice.
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                'Senior, partner-led engagements on every mandate',
                'Independent, conflict-free advisory',
                'Deep India expertise paired with global investor access',
                'Research-led approach with proprietary intelligence stack',
                'Long-term institutional relationships over transactions',
              ].map((principle, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '24px 0',
                  borderBottom: '1px solid #eaeaea',
                }}>
                  <CheckCircle2 size={20} color="#c8102e" strokeWidth={1.5} style={{ flexShrink: 0 }} />
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '15px', color: '#444' }}>
                    {principle}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MEET LEADERSHIP CTA SECTION */}
        <section style={{ padding: '0 40px', paddingBottom: '100px' }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            background: '#0a0a0a',
            padding: '80px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px',
          }}>
            <div>
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: '400',
                color: '#ffffff',
                marginBottom: '16px',
              }}>
                Meet the people behind Sparta.
              </h2>
              <p style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '15px',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: '1.6',
                maxWidth: '500px',
              }}>
                Senior, partner-led. Built on long-term relationships with governments, investors and corporates.
              </p>
            </div>
            <style>{`
              .meet-leadership-btn {
                background: #ffffff;
                transition: background 0.2s;
              }
              .meet-leadership-btn:hover {
                background: #f0f0f0 !important;
              }
            `}</style>
            <a href="/leadership" className="meet-leadership-btn" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              color: '#0a0a0a',
              padding: '16px 32px',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
            >
              Meet Leadership <span style={{ fontWeight: 800, fontSize: '14px' }}>→</span>
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
