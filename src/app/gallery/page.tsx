'use client'

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { X, ZoomIn } from 'lucide-react'

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const awards = [
    {
      src: '/awards/award1.jpg?v=2',
      desc: 'Sanjay Sharma, Shashi Ruia and David East.'
    },
    {
      src: '/awards/award2.jpg?v=2',
      desc: 'Sanjay Sharma, Sheila Dixit and Gautam Adani.'
    },
    {
      src: '/awards/award3.jpg?v=2',
      desc: 'Sanjay Sharma and Sheila Dixit.'
    }
  ]

  return (
    <>
      <Navbar />
      <main>
        {/* HERO SECTION */}
        <section style={{
          background: '#0a0a0a url("https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop") center/cover no-repeat',
          position: 'relative',
          padding: '240px 20px 200px',
          textAlign: 'center',
          color: '#ffffff'
        }}>
          {/* Light black tint overlay to match other pages */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0, 0, 0, 0.75)' 
          }}></div>

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto' }}>
            <h1 className="serif" style={{ fontSize: 'clamp(48px, 7vw, 76px)', fontWeight: '700', marginBottom: '24px', lineHeight: '1.2' }}>
              Celebrating Excellence and Global Recognition.
            </h1>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '20px', lineHeight: '1.6', fontWeight: '500', opacity: 0.9 }}>
              Explore our historic milestones, award-winning investment strategies, and high-profile networking events with global leaders and dignitaries.
            </p>
          </div>
        </section>

        {/* GALLERY GRID */}
        <section style={{ padding: '100px 0', background: '#fcfcfc' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
            
            {/* UNIFIED SECTION TITLE */}
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 className="serif" style={{ fontSize: '40px', fontWeight: '600', color: '#0a0a0a', marginBottom: '16px' }}>
                fDi Award Function - 2007
              </h2>
              <div style={{ width: '60px', height: '3px', background: '#c8102e', margin: '0 auto' }}></div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '40px'
            }}>
              {awards.map((award, index) => (
                <div key={index} style={{
                  background: '#fff',
                  border: '1px solid #eaeaea',
                  cursor: 'pointer',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  overflow: 'hidden'
                }} className="gallery-card"
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-10px)'
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.1)'
                  const zoomIcon = e.currentTarget.querySelector('.zoom-icon') as HTMLElement
                  if (zoomIcon) {
                    zoomIcon.style.opacity = '1'
                    zoomIcon.style.transform = 'translate(-50%, -50%) scale(1)'
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                  const zoomIcon = e.currentTarget.querySelector('.zoom-icon') as HTMLElement
                  if (zoomIcon) {
                    zoomIcon.style.opacity = '0'
                    zoomIcon.style.transform = 'translate(-50%, -50%) scale(0.8)'
                  }
                }}
                onClick={() => setSelectedImage(award.src)}
                >
                  {/* Container with overflow hidden for the images */}
                  <div style={{
                    width: '100%',
                    height: '240px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <img 
                      src={award.src} 
                      alt="Award" 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        transition: 'transform 0.5s ease'
                      }} 
                      className="grid-image"
                    />
                    {/* Hover Overlay */}
                    <div style={{
                      position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                      background: 'rgba(200, 16, 46, 0.2)',
                      opacity: 0,
                      transition: 'opacity 0.3s'
                    }} className="hover-tint"></div>
                    
                    {/* Zoom Icon */}
                    <div className="zoom-icon" style={{
                      position: 'absolute', top: '50%', left: '50%',
                      transform: 'translate(-50%, -50%) scale(0.8)',
                      background: '#fff',
                      width: '50px', height: '50px',
                      borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      opacity: 0,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      color: '#c8102e',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                    }}>
                      <ZoomIn size={24} />
                    </div>
                  </div>
                  
                  <div style={{ padding: '20px 30px' }}>
                    <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '15px', color: '#444', lineHeight: '1.6', textAlign: 'center', fontWeight: '500' }}>
                      {award.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* LIGHTBOX MODAL */}
        {selectedImage && (
          <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.95)',
            zIndex: 9999,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'zoom-out',
            animation: 'fadeIn 0.3s ease'
          }} onClick={() => setSelectedImage(null)}>
            
            <button style={{
              position: 'absolute', top: '40px', right: '40px',
              background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer',
              padding: '10px'
            }}>
              <X size={40} />
            </button>
            
            {/* Wrapper for Lightbox */}
            <div style={{
              maxHeight: '85vh',
              maxWidth: '90vw',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              animation: 'scaleUp 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#0a0a0a' // Dark background prevents flashing
            }}>
              <img 
                src={selectedImage} 
                alt="Award" 
                style={{
                  maxHeight: '85vh',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>
          </div>
        )}

        <style>{`
          .gallery-card:hover .hover-tint { opacity: 1 !important; }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes scaleUp {
            from { transform: scale(0.95); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}</style>
      </main>
      <Footer />
    </>
  )
}
