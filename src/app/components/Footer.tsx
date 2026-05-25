'use client'

import { Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const navigateLinks = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Global Network', href: '/global-network' },
    { name: 'Articles', href: '/articles' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <footer style={{
        background: '#ffffff',
        borderTop: '1px solid #eaeaea',
        padding: '80px 0 20px',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 40px',
        }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr',
          gap: '80px',
          marginBottom: '80px',
        }}>
          {/* Left - Brand & About */}
          <div>
            <div style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '28px',
              fontWeight: '400',
              color: '#0a0a0a',
              marginBottom: '20px',
            }}>
              Sparta <span style={{ color: '#c8102e', fontSize: '11px', fontFamily: 'Montserrat, sans-serif', fontWeight: '700', letterSpacing: '0.15em' }}>STRATEGY</span>
            </div>
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '13px',
              fontWeight: '400',
              color: '#555',
              lineHeight: '1.7',
              marginBottom: '20px',
              maxWidth: '380px',
            }}>
              India&apos;s leading cross-border investment and FDI advisory platform. Established 2006. Trusted by governments, investors and global corporations.
            </p>
            <p style={{
              fontFamily: 'Playfair Display, serif',
              fontStyle: 'italic',
              fontSize: '15px',
              color: '#333',
              marginBottom: '32px',
            }}>
              “Connecting Global Capital With Emerging Opportunities.”
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="https://www.linkedin.com/company/unavailable/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" style={{ color: '#555', transition: 'color 0.2s', display: 'flex', alignItems: 'center' }} onMouseEnter={e => e.currentTarget.style.color = '#c8102e'} onMouseLeave={e => e.currentTarget.style.color = '#555'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://x.com/spartastrategy" aria-label="Twitter" target="_blank" rel="noopener noreferrer" style={{ color: '#555', transition: 'color 0.2s', display: 'flex', alignItems: 'center' }} onMouseEnter={e => e.currentTarget.style.color = '#c8102e'} onMouseLeave={e => e.currentTarget.style.color = '#555'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>

          {/* Middle - Navigate */}
          <div>
            <h4 style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#c8102e',
              marginBottom: '24px',
            }}>NAVIGATE</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {navigateLinks.map(link => (
                <li key={link.name}>
                  <Link href={link.href} style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '13px',
                    fontWeight: '400',
                    color: '#333',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#c8102e'}
                  onMouseLeave={e => e.currentTarget.style.color = '#333'}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Contact */}
          <div>
            <h4 style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#c8102e',
              marginBottom: '24px',
            }}>CONTACT</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#c8102e' }}>
                <Mail size={16} />
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '13px', color: '#333' }}>info@sparta.co.in</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#c8102e' }}>
                <Phone size={16} />
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '13px', color: '#333' }}>+91 83569 96641</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#c8102e' }}>
                <Phone size={16} />
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '13px', color: '#333' }}>+91 84678 11100</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: '#c8102e' }}>
                <MapPin size={16} style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '13px', color: '#333', lineHeight: '1.6', maxWidth: '200px' }}>
                  Shop 38, Parth CHS, Plot 228, Sec-13, Khargar Mumbai- 410210
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid #eaeaea',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}>
          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '11px',
            fontWeight: '400',
            color: '#888',
          }}>
            © {new Date().getFullYear()} Sparta Strategy. All rights reserved.
          </p>
          <div style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '11px',
            fontWeight: '400',
            color: '#888',
          }}>
            Cross-Border Investments · FDI Advisory · Location Consulting
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
