'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,1)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(0,0,0,0.06)',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
      }}>
        <div style={{
          width: '100%',
          margin: '0 auto',
          padding: '0 60px',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0, height: '80px' }}>
            <Image
              src="/logo.png"
              alt="Sparta Global Strategy"
              width={300}
              height={100}
              style={{ 
                objectFit: 'contain', 
                height: '56px', 
                width: 'auto', 
                mixBlendMode: 'multiply',
                transform: 'scale(1.2)', 
                transformOrigin: 'left center' 
              }}
              priority
            />
          </a>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="desktop-nav">
            {['Home', 'About', 'Services', 'Leadership', 'Global Network', 'Articles', 'Gallery', 'Contact'].map((item) => {
              const href = item === 'Home' ? '/' : item === 'About' ? '/about' : item === 'Services' ? '/services' : item === 'Leadership' ? '/leadership' : item === 'Global Network' ? '/global-network' : item === 'Articles' ? '/articles' : item === 'Gallery' ? '/gallery' : item === 'Contact' ? '/contact' : `/#${item.toLowerCase().replace(' ', '-')}`
              const isActive = (item === 'Home' && pathname === '/') || (item === 'About' && pathname === '/about') || (item === 'Services' && pathname === '/services') || (item === 'Leadership' && pathname === '/leadership') || (item === 'Global Network' && pathname === '/global-network') || (item === 'Articles' && pathname === '/articles') || (item === 'Gallery' && pathname === '/gallery')
              return (
                <a
                  key={item}
                  href={href}
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '13px',
                    fontWeight: '500',
                    letterSpacing: '0.05em',
                    color: isActive ? '#c8102e' : '#1a1a1a',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#c8102e')}
                  onMouseLeave={e => (e.currentTarget.style.color = isActive ? '#c8102e' : '#1a1a1a')}
                >
                  {item}
                </a>
              )
            })}
            <a
              href="/get-in-touch"
              style={{
                background: '#0a0a0a',
                color: '#fff',
                padding: '12px 24px',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '11px',
                fontWeight: '600',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#c8102e')}
              onMouseLeave={e => (e.currentTarget.style.background = '#0a0a0a')}
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            <div style={{ width: '24px', height: '2px', background: '#0a0a0a', marginBottom: '5px', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
            <div style={{ width: '24px', height: '2px', background: '#0a0a0a', marginBottom: '5px', opacity: menuOpen ? 0 : 1, transition: 'all 0.3s' }} />
            <div style={{ width: '24px', height: '2px', background: '#0a0a0a', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{
            background: '#fff',
            borderTop: '1px solid rgba(0,0,0,0.08)',
            padding: '20px 40px 30px',
          }}>
            {['Home', 'About', 'Services', 'Leadership', 'Global Network', 'Articles', 'Gallery', 'Contact'].map((item) => {
              const href = item === 'Home' ? '/' : item === 'About' ? '/about' : item === 'Services' ? '/services' : item === 'Leadership' ? '/leadership' : item === 'Global Network' ? '/global-network' : item === 'Articles' ? '/articles' : item === 'Gallery' ? '/gallery' : item === 'Contact' ? '/contact' : `/#${item.toLowerCase().replace(' ', '-')}`
              const isActive = (item === 'Home' && pathname === '/') || (item === 'About' && pathname === '/about') || (item === 'Services' && pathname === '/services') || (item === 'Leadership' && pathname === '/leadership') || (item === 'Global Network' && pathname === '/global-network') || (item === 'Articles' && pathname === '/articles') || (item === 'Gallery' && pathname === '/gallery')
              return (
                <a
                  key={item}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: 'block',
                    padding: '12px 0',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: isActive ? '#c8102e' : '#1a1a1a',
                    textDecoration: 'none',
                    borderBottom: '1px solid rgba(0,0,0,0.05)',
                  }}
                >
                  {item}
                </a>
              )
            })}
            <a
              href="/get-in-touch"
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'inline-block',
                marginTop: '20px',
                background: '#0a0a0a',
                color: '#fff',
                padding: '12px 24px',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '11px',
                fontWeight: '600',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Get In Touch
            </a>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  )
}
