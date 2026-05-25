'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ArrowRight, ExternalLink } from 'lucide-react'

export default function ArticlesPage() {
  const articles = [
    {
      title: 'Narendra Modi chosen as the fDi Personality for the Year 2009',
      publisher: 'Financial Express',
      desc: 'Political will and his ambitious plans for all round development has brought him global appreciation and international accolades.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop',
      link: 'https://www.financialexpress.com/archive/narendra-modi-chosen-as-the-fdi-personality-for-the-year-2009/506396/'
    },
    {
      title: 'India Roads & Highways FDI Promotion Summit 2011',
      publisher: 'SlideShare',
      desc: 'Conference hosted by Financial Times and Sparta Strategy on investment opportunities within the Indian highways and roads infrastructure segment.',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop',
      link: 'https://www.slideshare.net/slideshow/india-roads-highways-fdi-promotion-summit-2011-8467420/8467420'
    },
    {
      title: 'Sparta Strategy announces conference on investment opportunities within Indian highways',
      publisher: 'Times of India',
      desc: 'The firm that works for promotion of Foreign Direct Investment has announced a massive conference on public-private partnership opportunities.',
      image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=2070&auto=format&fit=crop',
      link: 'https://timesofindia.indiatimes.com/sparta-strategy-a-firm-that-works-for-promotion-of-foreign-direct-investment-has-announced-a-conference-on-investment-opportunities-within-the-indian-highways-and-roads-infrastructure-segment-which-has-emerged-as-one-of-the-largest-public-private-partnership-opportunities-on-the-governments-infrastructure-development-plans-the-event-is-scheduled-for-tuesday-8-february-in-mumbai-/articleshow/7396334.cms'
    },
    {
      title: 'India Domestic Investment Monitor H1 2013',
      publisher: 'SlideShare',
      desc: 'This detailed document summarizes domestic investment insights in India from January to July 2013, highlighting 235 total investment projects.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      link: 'https://www.slideshare.net/slideshow/domestic-investment-tracker/27091920'
    }
  ]

  return (
    <>
      <Navbar />
      <main>
        {/* HERO SECTION */}
        <section style={{
          background: '#0a0a0a url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop") center/cover no-repeat',
          position: 'relative',
          padding: '160px 0 120px',
          overflow: 'hidden'
        }}>
          {/* Dark overlay to ensure text readability */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0, 0, 0, 0.82)'
          }}></div>

          {/* Dark grid overlay */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            backgroundPosition: 'center center',
            opacity: 0.5,
          }}></div>
          
          <div style={{
            maxWidth: '1280px', margin: '0 auto', padding: '0 40px',
            position: 'relative', zIndex: 1,
            textAlign: 'center'
          }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>Insights</span>
            <h1 className="serif" style={{
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: '400',
              color: '#ffffff',
              marginBottom: '24px',
              lineHeight: '1.1'
            }}>
              Articles & <span style={{ fontStyle: 'italic', color: '#c8102e' }}>Publications</span>
            </h1>
            <p style={{
              fontFamily: 'Montserrat, sans-serif', fontSize: '16px', color: '#888',
              lineHeight: '1.6', maxWidth: '600px', margin: '0 auto'
            }}>
              Explore our latest features, reports, and investment monitors published across major financial news outlets and platforms.
            </p>
          </div>
        </section>

        {/* ARTICLES SECTION */}
        <section style={{ padding: '80px 0 120px', background: '#f5f5f0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
            
            {/* FEATURED ARTICLE (1st Item - Narendra Modi) */}
            <div style={{
              background: '#ffffff',
              display: 'flex',
              flexDirection: 'row',
              marginBottom: '40px',
              border: '1px solid #eaeaea',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer'
            }} className="featured-card"
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <div style={{
                width: '50%',
                background: `#eee url("${articles[0].image}") center/cover no-repeat`
              }} className="featured-image"></div>
              
              <div style={{ padding: '60px', display: 'flex', flexDirection: 'column', width: '50%', justifyContent: 'center' }} className="featured-content">
                <span style={{
                  fontFamily: 'Montserrat, sans-serif', fontSize: '11px', fontWeight: '700',
                  letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c8102e', marginBottom: '16px', display: 'block'
                }}>
                  {articles[0].publisher} • Featured
                </span>
                <h3 className="serif" style={{ fontSize: '36px', fontWeight: '600', color: '#0a0a0a', marginBottom: '24px', lineHeight: '1.2' }}>
                  {articles[0].title}
                </h3>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '15px', color: '#555', lineHeight: '1.7', marginBottom: '32px' }}>
                  {articles[0].desc}
                </p>
                <a href={articles[0].link} target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: 'Montserrat, sans-serif', fontSize: '12px', fontWeight: '700', letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: '#0a0a0a', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', transition: 'color 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#c8102e'}
                onMouseLeave={e => e.currentTarget.style.color = '#0a0a0a'}>
                  Read More <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* GRID FOR REMAINING 3 ARTICLES */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '40px',
              marginBottom: '80px'
            }} className="articles-grid">
              {articles.slice(1).map((article, index) => (
                <div key={index} style={{
                  background: '#ffffff', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s, box-shadow 0.3s',
                  border: '1px solid #eaeaea', cursor: 'pointer'
                }} className="article-card"
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  <div style={{ width: '100%', height: '220px', background: `#eee url("${article.image}") center/cover no-repeat` }}></div>
                  <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '11px', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c8102e', marginBottom: '16px', display: 'block' }}>
                      {article.publisher}
                    </span>
                    <h3 className="serif" style={{ fontSize: '20px', fontWeight: '600', color: '#0a0a0a', marginBottom: '16px', lineHeight: '1.3' }}>
                      {article.title}
                    </h3>
                    <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '14px', color: '#555', lineHeight: '1.7', marginBottom: '32px', flexGrow: 1 }}>
                      {article.desc}
                    </p>
                    <a href={article.link} target="_blank" rel="noopener noreferrer" style={{
                      fontFamily: 'Montserrat, sans-serif', fontSize: '12px', fontWeight: '600', letterSpacing: '0.1em',
                      textTransform: 'uppercase', color: '#0a0a0a', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', transition: 'color 0.2s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#c8102e'}
                    onMouseLeave={e => e.currentTarget.style.color = '#0a0a0a'}>
                      Read More <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <style>{`
              @media (max-width: 1000px) {
                .featured-card { flexDirection: column !important; }
                .featured-image { width: 100% !important; height: 300px !important; }
                .featured-content { width: 100% !important; padding: 40px !important; }
                .articles-grid { grid-template-columns: repeat(2, 1fr) !important; }
              }
              @media (max-width: 700px) {
                .articles-grid { grid-template-columns: 1fr !important; }
              }
            `}</style>
          </div>
        </section>

        {/* TRUE FULL-WIDTH CALL TO ACTION BANNER */}
        <section style={{
          background: '#0a0a0a url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop") center/cover no-repeat',
          position: 'relative',
          padding: '140px 20px', 
          textAlign: 'center', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.65)'
          }}></div>
          
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 className="serif" style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '600', color: '#ffffff', marginBottom: '20px', lineHeight: '1.2' }}>
              Pioneering High-Impact Global Investments
            </h3>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '16px', color: '#e0e0e0', maxWidth: '700px', lineHeight: '1.6' }}>
              Stay tuned for more exclusive insights, strategic reports, and market intelligence connecting global capital with premier opportunities.
            </p>
            <div style={{ width: '60px', height: '3px', background: '#c8102e', marginTop: '40px' }}></div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
